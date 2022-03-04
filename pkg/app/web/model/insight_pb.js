// source: pkg/model/insight.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();



goog.exportSymbol('proto.model.InsightApplicationCount', null, global);
goog.exportSymbol('proto.model.InsightApplicationCountLabelKey', null, global);
goog.exportSymbol('proto.model.InsightDataPoint', null, global);
goog.exportSymbol('proto.model.InsightMetricsKind', null, global);
goog.exportSymbol('proto.model.InsightResultType', null, global);
goog.exportSymbol('proto.model.InsightSample', null, global);
goog.exportSymbol('proto.model.InsightSampleStream', null, global);
goog.exportSymbol('proto.model.InsightStep', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.InsightSample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.InsightSample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.InsightSample.displayName = 'proto.model.InsightSample';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.InsightSampleStream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.model.InsightSampleStream.repeatedFields_, null);
};
goog.inherits(proto.model.InsightSampleStream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.InsightSampleStream.displayName = 'proto.model.InsightSampleStream';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.InsightDataPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.InsightDataPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.InsightDataPoint.displayName = 'proto.model.InsightDataPoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.model.InsightApplicationCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.model.InsightApplicationCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.model.InsightApplicationCount.displayName = 'proto.model.InsightApplicationCount';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.InsightSample.prototype.toObject = function(opt_includeInstance) {
  return proto.model.InsightSample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.InsightSample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightSample.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    dataPoint: (f = msg.getDataPoint()) && proto.model.InsightDataPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.InsightSample}
 */
proto.model.InsightSample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.InsightSample;
  return proto.model.InsightSample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.InsightSample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.InsightSample}
 */
proto.model.InsightSample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new proto.model.InsightDataPoint;
      reader.readMessage(value,proto.model.InsightDataPoint.deserializeBinaryFromReader);
      msg.setDataPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.InsightSample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.InsightSample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.InsightSample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightSample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDataPoint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.model.InsightDataPoint.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> labels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.model.InsightSample.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.model.InsightSample} returns this
 */
proto.model.InsightSample.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional InsightDataPoint data_point = 2;
 * @return {?proto.model.InsightDataPoint}
 */
proto.model.InsightSample.prototype.getDataPoint = function() {
  return /** @type{?proto.model.InsightDataPoint} */ (
    jspb.Message.getWrapperField(this, proto.model.InsightDataPoint, 2));
};


/**
 * @param {?proto.model.InsightDataPoint|undefined} value
 * @return {!proto.model.InsightSample} returns this
*/
proto.model.InsightSample.prototype.setDataPoint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.model.InsightSample} returns this
 */
proto.model.InsightSample.prototype.clearDataPoint = function() {
  return this.setDataPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.model.InsightSample.prototype.hasDataPoint = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.model.InsightSampleStream.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.InsightSampleStream.prototype.toObject = function(opt_includeInstance) {
  return proto.model.InsightSampleStream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.InsightSampleStream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightSampleStream.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    dataPointsList: jspb.Message.toObjectList(msg.getDataPointsList(),
    proto.model.InsightDataPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.InsightSampleStream}
 */
proto.model.InsightSampleStream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.InsightSampleStream;
  return proto.model.InsightSampleStream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.InsightSampleStream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.InsightSampleStream}
 */
proto.model.InsightSampleStream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new proto.model.InsightDataPoint;
      reader.readMessage(value,proto.model.InsightDataPoint.deserializeBinaryFromReader);
      msg.addDataPoints(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.InsightSampleStream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.InsightSampleStream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.InsightSampleStream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightSampleStream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDataPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.model.InsightDataPoint.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> labels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.model.InsightSampleStream.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.model.InsightSampleStream} returns this
 */
proto.model.InsightSampleStream.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * repeated InsightDataPoint data_points = 2;
 * @return {!Array<!proto.model.InsightDataPoint>}
 */
proto.model.InsightSampleStream.prototype.getDataPointsList = function() {
  return /** @type{!Array<!proto.model.InsightDataPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.model.InsightDataPoint, 2));
};


/**
 * @param {!Array<!proto.model.InsightDataPoint>} value
 * @return {!proto.model.InsightSampleStream} returns this
*/
proto.model.InsightSampleStream.prototype.setDataPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.model.InsightDataPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.model.InsightDataPoint}
 */
proto.model.InsightSampleStream.prototype.addDataPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.model.InsightDataPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.model.InsightSampleStream} returns this
 */
proto.model.InsightSampleStream.prototype.clearDataPointsList = function() {
  return this.setDataPointsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.InsightDataPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.model.InsightDataPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.InsightDataPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightDataPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.InsightDataPoint}
 */
proto.model.InsightDataPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.InsightDataPoint;
  return proto.model.InsightDataPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.InsightDataPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.InsightDataPoint}
 */
proto.model.InsightDataPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.InsightDataPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.InsightDataPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.InsightDataPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightDataPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.model.InsightDataPoint.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.InsightDataPoint} returns this
 */
proto.model.InsightDataPoint.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.model.InsightDataPoint.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.model.InsightDataPoint} returns this
 */
proto.model.InsightDataPoint.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.model.InsightApplicationCount.prototype.toObject = function(opt_includeInstance) {
  return proto.model.InsightApplicationCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.model.InsightApplicationCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightApplicationCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.model.InsightApplicationCount}
 */
proto.model.InsightApplicationCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.model.InsightApplicationCount;
  return proto.model.InsightApplicationCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.model.InsightApplicationCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.model.InsightApplicationCount}
 */
proto.model.InsightApplicationCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.model.InsightApplicationCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.model.InsightApplicationCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.model.InsightApplicationCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.model.InsightApplicationCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * map<string, string> labels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.model.InsightApplicationCount.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.model.InsightApplicationCount} returns this
 */
proto.model.InsightApplicationCount.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.model.InsightApplicationCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.model.InsightApplicationCount} returns this
 */
proto.model.InsightApplicationCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.model.InsightResultType = {
  MATRIX: 0,
  VECTOR: 1
};

/**
 * @enum {number}
 */
proto.model.InsightMetricsKind = {
  DEPLOYMENT_FREQUENCY: 0,
  CHANGE_FAILURE_RATE: 1,
  MTTR: 2,
  LEAD_TIME: 3,
  APPLICATIONS_COUNT: 4
};

/**
 * @enum {number}
 */
proto.model.InsightStep = {
  DAILY: 0,
  WEEKLY: 1,
  MONTHLY: 2,
  YEARLY: 3
};

/**
 * @enum {number}
 */
proto.model.InsightApplicationCountLabelKey = {
  KIND: 0,
  ACTIVE_STATUS: 1
};

goog.object.extend(exports, proto.model);