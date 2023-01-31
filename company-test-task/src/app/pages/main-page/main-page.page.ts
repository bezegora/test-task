import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../../services/login.service';



@Component({
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss']
})
export class MainPage implements OnInit {
  scrollY$!: Observable<number>;
  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) {
  }

  ngOnInit(): void { }

  public toLogin() {
    this._loginService.logOff();
    this._router.navigate(['/login']);
  }

  public toAddCompany() {
    this._router.navigate(['/companies/add-company']);
  }

  public getYPosition(e: Event) {
    console.log(e.target as Element);

    return (e.target as Element).scrollTop;
  }

}
