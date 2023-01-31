import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private _router: Router,
  ) { }
  public isLogged() {
    return localStorage.getItem('isLogged') == 'true'
  }

  public logOff() {
    localStorage.setItem('isLogged', 'false');
  }

  public setDefaultCredentials() {
    localStorage.setItem('login', 'admin');
    localStorage.setItem('password', 'admin');
  }

  public checkIfAlreadyLoggedIn() {
    if (localStorage.getItem('isLogged') == 'true') {
      this._router.navigate(['/companies'])
    }
  }

  public checkCredentials(userLogin: string, userPassword: string) {
    if (userLogin == localStorage.getItem('login') &&
      userPassword == localStorage.getItem('password')) {
      localStorage.setItem('isLogged', 'true');
      this._router.navigate(['/companies']);
    }
  }
}
