import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CompanyModel } from '../../models/company.model';
import { CompaniesService } from '../../services/companies.service';

@Component({
  templateUrl: './add-company.page.html',
  styleUrls: ['./add-company.page.scss']
})
export class AddCompanyPage implements OnInit {
  public values = [
    'лесоводство и лесозаготовки',
    'добыча угля',
    'производство мебели',
    'научные исследования и разработки',
    'деятельность общественных организаций'
  ];

  myForm = new FormGroup({
    business_name: new FormControl('', Validators.required),
    industry: new FormControl('', Validators.required),
    russian: new FormControl()
  });

  constructor(
    private _compService: CompaniesService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  public submit() {
    this._compService.getOneRandomCompany().forEach(value => {
      let newCompany = value;
      newCompany.business_name = this.myForm.controls.business_name.value!;
      newCompany.industry = this.myForm.controls.industry.value!;
      newCompany.russian = this.myForm.controls.russian.value!;
      console.log(newCompany);
      this._compService.addCompanies([newCompany]);
      this._router.navigate(['/companies']);
    });
  }

  public onBack() {
    this._router.navigate(['/companies']);
  }
}
