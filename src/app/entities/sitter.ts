import { BabyRating, SitterRating } from "./rating";
import { Pets } from "./pets";


export class Sitter {
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
  pets?: Pets[];
  phone?: String;
}