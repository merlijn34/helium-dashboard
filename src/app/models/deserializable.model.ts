//Deserialize JSON to object
export interface Deserializable {
  deserialize(input: any): this;
}