import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyModel } from '../models/company.model';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private _mockCompanies!: CompanyModel[];

  public getCompanyById(id: number): CompanyModel {
    const findedComp: CompanyModel = JSON.parse(localStorage.getItem('companies') || '{}').find((c: CompanyModel) => c.id === id);
    if (findedComp === undefined || findedComp === null) {
      throw new TypeError();
    }
    return findedComp;
  }

  constructor(
    private _hhtpClient: HttpClient,
  ) { }

  public get() {
    return !localStorage.getItem('companies')
      ? this._hhtpClient.get<CompanyModel[]>('https://random-data-api.com/api/company/random_company?size=20').pipe(map(value => {
        localStorage.setItem('companies', JSON.stringify(value));
        return value;
      }))
      : of(JSON.parse(localStorage.getItem('companies') || '{}'));
  }

  public getOneRandomCompany() {
    return this._hhtpClient.get<CompanyModel>('https://random-data-api.com/api/company/random_company')
  }
}
