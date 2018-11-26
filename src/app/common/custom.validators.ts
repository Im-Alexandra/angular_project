import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            return { cannotContainSpace : true };

        return null;
    }

    static isNumber(control : AbstractControl) : ValidationErrors | null {
        if (control.value !== undefined && (isNaN(control.value))){
            return {isNumber : true};
        }
        return null;
    }

    // faking calling the server for this
    // this one doesn´t really work :( TO DO - fix iiit)
    // static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
    //     // example of an asynchronous operation - the problem here is that shouldBeUnique has to return either
    //     // a validation error or null, but if you put setTimeout it doesn´t return anything, which is why it is an asynchorouns operation :O
        
    //     return new Promise((resolve, reject)=>{
            
    //         setTimeout(()=> {
    //             if (control.value === 'noob123')
    //                 resolve({ shouldBeUnique : true }) ;
    //             else 
    //                 resolve(null) ;
    //         }, 1000);


    //     })

    // }
}