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

package config

// OpenTofuApplicationSpec represents an application configuration for Opentofu application.
type OpenTofuApplicationSpec struct {
	GenericApplicationSpec
	// Input for OpenTofu deployment such as OpenTofu version, workspace...
	Input OpenTofuDeploymentInput `json:"input"`
	// Configuration for quick sync.
	QuickSync OpenTofuApplyStageOptions `json:"quickSync"`
}

// Validate returns an error if any wrong configuration value was found.
func (s *OpenTofuApplicationSpec) Validate() error {
	if err := s.GenericApplicationSpec.Validate(); err != nil {
		return err
	}
	return nil
}

type OpenTofuDeploymentInput struct {
	// The OpenTofu workspace name.
	// Empty means "default" workpsace.
	Workspace string `json:"workspace,omitempty"`
	// The version of OpenTofu should be used.
	// Empty means the pre-installed version will be used.
	OpenTofuVersion string `json:"terraformVersion,omitempty"`
	// List of variables that will be set directly on terraform commands with "-var" flag.
	// The variable must be formatted by "key=value" as below:
	// "image_id=ami-abc123"
	// 'image_id_list=["ami-abc123","ami-def456"]'
	// 'image_id_map={"us-east-1":"ami-abc123","us-east-2":"ami-def456"}'
	Vars []string `json:"vars,omitempty"`
	// List of variable files that will be set on OpenTofu commands with "-var-file" flag.
	VarFiles []string `json:"varFiles,omitempty"`
	// Automatically reverts all changes from all stages when one of them failed.
	// Default is false.
	AutoRollback bool `json:"autoRollback"`
	// List of additional flags will be used while executing OpenTofu commands.
	CommandFlags OpenTofuCommandFlags `json:"commandFlags"`
	// List of additional environment variables will be used while executing OpenTofu commands.
	CommandEnvs OpenTofuCommandEnvs `json:"commandEnvs"`
}

// OpenTofuSyncStageOptions contains all configurable values for a OPENTOFU_SYNC stage.
type OpenTofuSyncStageOptions struct {
	// How many times to retry applying OpenTofu changes.
	Retries int `json:"retries"`
}

// OpenTofuPlanStageOptions contains all configurable values for a OPENTOFU_PLAN stage.
type OpenTofuPlanStageOptions struct {
	// Exit the pipeline if the result is "No Changes" with success status.
	ExitOnNoChanges bool `json:"exitOnNoChanges"`
}

// OpenTofuApplyStageOptions contains all configurable values for a OPENTOFU_APPLY stage.
type OpenTofuApplyStageOptions struct {
	// How many times to retry applying OpenTofu changes.
	Retries int `json:"retries"`
}

// OpenTofuCommandFlags contains all additional flags will be used while executing OpenTofu commands.
type OpenTofuCommandFlags struct {
	Shared []string `json:"shared"`
	Init   []string `json:"init"`
	Plan   []string `json:"plan"`
	Apply  []string `json:"apply"`
}

// OpenTofuCommandEnvs contains all additional environment variables will be used while executing OpenTofu commands.
type OpenTofuCommandEnvs struct {
	Shared []string `json:"shared"`
	Init   []string `json:"init"`
	Plan   []string `json:"plan"`
	Apply  []string `json:"apply"`
}
