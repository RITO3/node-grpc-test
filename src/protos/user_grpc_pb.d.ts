// package: 
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserDomainService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUser: IUserDomainService_IGetUser;
}

interface IUserDomainService_IGetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.GetUserResponse> {
    path: string; // "/.UserDomain/GetUser"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.GetUserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.GetUserResponse>;
}

export const UserDomainService: IUserDomainService;

export interface IUserDomainServer {
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.GetUserResponse>;
}

export interface IUserDomainClient {
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}

export class UserDomainClient extends grpc.Client implements IUserDomainClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
}
