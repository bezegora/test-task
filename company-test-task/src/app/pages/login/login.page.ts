import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  myForm: FormGroup = new FormGroup({
    userLogin: new FormControl('', Validators.required),
    userPassword: new FormControl('', Validators.required),
  });

  constructor(
    private _loginService: LoginService,
  ) {
    this._loginService.setDefaultCredentials();
  }

  ngOnInit(): void {
    this._loginService.checkIfAlreadyLoggedIn();
  }

  onSubmit() {
    this._loginService.checkCredentials(this.myForm.controls['userLogin'].value, this.myForm.controls['userPassword'].value);
  }

}
