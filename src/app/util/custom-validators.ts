import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
 const emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
@Injectable()
export class CustomValidators {

  static spaceValidator(control: FormControl) {
    if ((control.value || "").trim().length === 0) {
      return { havespace: true };
    }

    return null;
  }

  static ValidatorEmail(control: FormControl) {
    if (!control.value.match(emailPattern)) {
      return { ismail: true };
    }

    return null;
  }

}
