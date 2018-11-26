export class Rating {
    rating: number; //1-5 stars
    description: String;
}

export class BabyRating extends Rating {
   //extends means that everything that is in rating is also in babyRating
   sitterId: String;
}

export class SitterRating extends Rating {
    //extends means that everything that is in rating is also in babyRating
    parentId: String;
 }