import { Server, ServerCredentials } from 'grpc';
import { UserDomainService, IUserDomainServer } from './protos/user_grpc_pb';
import { UserDomainServer } from './servers/user-domain.server';

function main(): void {
  const server = new Server();
  server.bind(`0.0.0.0:50051`, ServerCredentials.createInsecure());

  server.addService<IUserDomainServer>(
    UserDomainService,
    new UserDomainServer()
  );
  server.start();
}

main();
