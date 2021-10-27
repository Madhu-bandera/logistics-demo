import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../providers/common-service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin!: FormGroup;

  constructor(private fb: FormBuilder, private service: CommonService) {}

  ngOnInit(): void {
    this.userLogin = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
          ),
        ],
      ],
    });
  }
  submit() {
    console.log('Email', this.userLogin.controls.email.valid);
    console.log('Password', this.userLogin.controls.password.valid);

    if (this.userLogin.valid) {
      console.log(this.userLogin.value);
    } else {
      alert('please enter email id & password');
    }

    const obj = {
      email: 'oknizam321@gmail.com',
      password: '1234',
    };
    this.service
      .post('auth/login', obj)
      .then((res) => console.log('response', res));
  }
}
