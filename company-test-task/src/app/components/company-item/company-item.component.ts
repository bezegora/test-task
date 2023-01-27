import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyModel } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {
  @Input()
  public company!: CompanyModel;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onCompanyClick() {
    this._router.navigate(['company', this.company.id])
  }

}
