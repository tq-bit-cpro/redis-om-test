import { Client } from "redis-om";
import UserSchema from "./user.model";
import AddressSchema from "./address.model";

// Instantiate central client
export const client = new Client();
client.open("redis://redis:6379");

// Provide repositories
export const UserRepository = client.fetchRepository(UserSchema);
export const AddressRepository = client.fetchRepository(AddressSchema);

// Create indicies
export function createRedisIndexes() {
  UserRepository.createIndex();
  AddressRepository.createIndex();
}
