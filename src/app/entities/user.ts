import { BabyRating, SitterRating } from "./rating";
import { Pet } from "./pet";


export class User {
  userId: String;
  groupId: String;
  email: String;
  password: String;
  firstname: String;
  lastname: String;
  education: String;
  picture?: String;
  avatar?: String;
  description?: String;
  location?: String;
  rating?: SitterRating[];
  pets?: String[];
  // ["id as string", "id as string"]
  phone?: String;
}


export class Users {
  list: User[];
}