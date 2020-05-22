// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');

function serialize_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetUserResponse(arg) {
  if (!(arg instanceof user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetUserResponse(buffer_arg) {
  return user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserDomainService = exports.UserDomainService = {
  getUser: {
    path: '/UserDomain/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.GetUserResponse,
    requestSerialize: serialize_GetUserRequest,
    requestDeserialize: deserialize_GetUserRequest,
    responseSerialize: serialize_GetUserResponse,
    responseDeserialize: deserialize_GetUserResponse,
  },
};

exports.UserDomainClient = grpc.makeGenericClientConstructor(UserDomainService);
