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
}