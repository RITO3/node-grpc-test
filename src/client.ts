import { credentials } from 'grpc';
import { UserDomainClient } from './protos/user_grpc_pb';
import { GetUserRequest } from './protos/user_pb';

function main(): void {
  const client = new UserDomainClient(
    '127.0.0.1:50051',
    credentials.createInsecure()
  );

  const request = new GetUserRequest();
  request.setId(1);

  console.log('send request.');
  client.getUser(request, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log('recieved response.');
    console.log(`response Id = ${response.getId()}.`);
    console.log(`response Name = ${response.getName()}.`);
    console.log(`response Age = ${response.getAge()}.`);
    console.log(JSON.stringify(response, null, 2));
  });
}

main();
