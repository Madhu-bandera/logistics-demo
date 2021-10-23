import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonService } from '../providers/common-service/common.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(
        control: FormControl | null,
        form: FormGroupDirective | NgForm | null
    ): boolean {
        const isSubmitted = form && form.submitted;
        return !!(
            control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted)
        );
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    matcher = new MyErrorStateMatcher();
    hide = true;

    constructor(private service: CommonService) { }

    ngOnInit(): void { }


    submit() {
        const obj = {
            "email": "oknizam321@gmail.com",
            "password": "1234"
        }
        this.service.post("auth/login", obj).then(res => console.log("response", res))
    }
}
