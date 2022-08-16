import { Entity, Schema } from "redis-om";

class AddressEntity extends Entity {}

const AddressSchema = new Schema(AddressEntity, {
  city: { type: "string" },
  postalCode: { type: "number" },
  street: { type: "string" },
});

export default AddressSchema;
