// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var calculator_pb = require('./calculator_pb.js');

function serialize_SumRequest(arg) {
  if (!(arg instanceof calculator_pb.SumRequest)) {
    throw new Error('Expected argument of type SumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SumRequest(buffer_arg) {
  return calculator_pb.SumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_SumResponse(arg) {
  if (!(arg instanceof calculator_pb.SumResponse)) {
    throw new Error('Expected argument of type SumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_SumResponse(buffer_arg) {
  return calculator_pb.SumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  sum: {
    path: '/CalculatorService/Sum',
    requestStream: false,
    responseStream: false,
    requestType: calculator_pb.SumRequest,
    responseType: calculator_pb.SumResponse,
    requestSerialize: serialize_SumRequest,
    requestDeserialize: deserialize_SumRequest,
    responseSerialize: serialize_SumResponse,
    responseDeserialize: deserialize_SumResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
