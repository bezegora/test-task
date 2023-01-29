import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss']
})
export class MainPage implements OnInit {

  constructor(
    private compService: CompaniesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public toLogin() {
    localStorage.setItem('isLogged', 'false')
    this._router.navigate(['/login'])
  }

  public toAddCompany() {
    this._router.navigate(['/companies/add-company'])

  }

}
