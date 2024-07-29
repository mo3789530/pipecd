// Copyright 2024 The PipeCD Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package opentofu

import (
	"context"

	"github.com/pipe-cd/pipecd/pkg/app/pipedv1/executor"
	provider "github.com/pipe-cd/pipecd/pkg/app/pipedv1/platformprovider/opentofu"
	"github.com/pipe-cd/pipecd/pkg/app/pipedv1/toolregistry"
	"github.com/pipe-cd/pipecd/pkg/config"
	"github.com/pipe-cd/pipecd/pkg/model"
)

type registerer interface {
	Register(stage model.Stage, f executor.Factory) error
	RegisterRollback(kind model.RollbackKind, f executor.Factory) error
}

func Register(r registerer) {
	f := func(in executor.Input) executor.Executor {
		return &deployExecutor{
			Input: in,
		}
	}
	r.Register(model.StageOpenTofuSync, f)
	r.Register(model.StageOpenTofuPlan, f)
	r.Register(model.StageOenTofuApply, f)

	r.RegisterRollback(model.RollbackKind_Rollback_OPENTOFU, func(in executor.Input) executor.Executor {
		return &rollbackExecutor{
			Input: in,
		}
	})
}

func showUsingVersion(ctx context.Context, cmd *provider.OpenTofu, lp executor.LogPersister) bool {
	version, err := cmd.Version(ctx)
	if err != nil {
		lp.Errorf("Failed to check opentofu version (%v)", err)
		return false
	}
	lp.Infof("Using opentofu version %q to execute the opentofu commands", version)
	return true
}

func selectWorkspace(ctx context.Context, cmd *provider.OpenTofu, workspace string, lp executor.LogPersister) bool {
	if workspace == "" {
		return true
	}
	if err := cmd.SelectWorkspace(ctx, workspace); err != nil {
		lp.Errorf("Failed to select workspace %q (%v). You might need to create the workspace before using by command %q", workspace, err, "opentofu workspace new "+workspace)
		return false
	}
	lp.Infof("Selected workspace %q", workspace)
	return true
}

func findOpentofu(ctx context.Context, version string, lp executor.LogPersister) (string, bool) {
	path, installed, err := toolregistry.DefaultRegistry().OpenTofu(ctx, version)
	if err != nil {
		lp.Errorf("Unable to find required opentofu %q (%v)", version, err)
		return "", false
	}
	if installed {
		lp.Infof("opentofu %q has just been installed to %q because of no pre-installed binary for that version", version, path)
	}
	return path, true
}

func findPlatformProvider(in *executor.Input) (cfg *config.PlatformProviderOpenTofuConfig, found bool) {
	var name = in.Application.PlatformProvider
	if name == "" {
		in.LogPersister.Error("Missing the PlatformProvider name in the application configuration")
		return
	}

	cp, ok := in.PipedConfig.FindPlatformProvider(name, model.ApplicationKind_OPENTOFU)
	if !ok {
		in.LogPersister.Errorf("The specified platform provider %q was not found in piped configuration", name)
		return
	}

	cfg = cp.OpenTofuConfig
	found = true
	return
}
