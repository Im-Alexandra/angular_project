import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: any, term?: any): any {
     // check if search term is undefined
     if (term === undefined) return users;

     // return updated users array
     return users.filter(function(user:any){
       return user.location.toLowerCase().includes(term.toLowerCase())});
  }

}
