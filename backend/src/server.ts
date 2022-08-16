import express, { Response, Request } from "express";

import {
  client,
  UserRepository,
  AddressRepository,
  createRedisIndexes,
} from "./models/redis.provider";

// Redis Config

async function main() {
  // Handler Logic
  async function pong(req: Request, res: Response): Promise<void> {
    const response = client.execute(["PING"]);
    res.send({ response });
  }

  async function createUser(req: Request, res: Response): Promise<void> {
    // Create another entry for another repository
    const addressId = await AddressRepository.createAndSave({
      city: "New York",
      postalCode: 12345,
      street: "New York Street",
    });
    const userId = await UserRepository.createAndSave(req.body);
    res.send({ userId, addressId });
  }

  async function getUserList(req: Request, res: Response): Promise<void> {
    const userList = await UserRepository.search().return.all();
    res.send(userList);
  }

  // Express Logic
  createRedisIndexes();
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));
  app.post("/ping", pong);
  app.get("/users", getUserList);
  app.post("/users", createUser);
  app.listen(8080, () => console.log("App listening on port 8080"));
}

main();
