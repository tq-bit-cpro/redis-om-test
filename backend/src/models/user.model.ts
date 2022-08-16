import { Entity, Schema } from "redis-om";

class UserEntity extends Entity {}

const UserSchema = new Schema(UserEntity, {
  firstName: { type: "string" },
  lastName: { type: "string" },
  age: { type: "number" },
});

export default UserSchema;
