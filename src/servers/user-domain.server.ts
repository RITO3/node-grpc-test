import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { IUserDomainServer } from '../protos/user_grpc_pb';
import { GetUserRequest, GetUserResponse } from '../protos/user_pb';

export class UserDomainServer implements IUserDomainServer {
  getUser(
    call: ServerUnaryCall<GetUserRequest>,
    callback: sendUnaryData<GetUserResponse>
  ): void {
    const userId = call.request.getId();

    const response = new GetUserResponse();
    response.setId(userId);
    response.setName(`test-user-${userId}`);
    response.setAge(20);
    callback(null, response);
  }
}
