import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

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
    private _router: Router
  ) {
    localStorage.setItem('login', 'admin');
    localStorage.setItem('password', 'admin');
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLogged') == 'true') {
      this._router.navigate(['/companies'])
    }

  }

  submit() {
    if (this.myForm.controls['userLogin'].value == localStorage.getItem('login') &&
      this.myForm.controls['userPassword'].value == localStorage.getItem('password')) {
      localStorage.setItem('isLogged', 'true');
      this._router.navigate(['/companies']);
    }
  }

}
