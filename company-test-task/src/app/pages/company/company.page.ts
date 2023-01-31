import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CompanyModel } from '../../models/company.model';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss']
})
export class CompanyPage implements OnInit {
  public company!: CompanyModel;
  constructor(
    private _route: ActivatedRoute,
    private _compService: CompaniesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.company = this._compService.getCompanyById(+params['id']);
      })
      .unsubscribe();
  }

  public onBack() {
    this._router.navigate(['/companies']);
  }
}
