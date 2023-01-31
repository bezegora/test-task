import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { CompanyModel } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private _mockCompanies!: CompanyModel[];

  public getCompanyById(id: number): CompanyModel {
    const findedComp: CompanyModel = (this._mockCompanies || {}).find((c: CompanyModel) => c.id === id)!;
    if (findedComp === undefined || findedComp === null) {
      throw new TypeError();
    }
    return findedComp;
  }

  constructor(
    private _hhtpClient: HttpClient,
  ) { }

  public getObservableCompanies() {
    return !this._mockCompanies
      ? this._hhtpClient.get<CompanyModel[]>(environment.APIurl + '?size=20').pipe(map(value => {
        this._mockCompanies = value;
        return value;
      }))
      : of((this._mockCompanies || {}));
  }

  public getOneRandomCompany() {
    return this._hhtpClient.get<CompanyModel>(environment.APIurl);
  }

  public getRandomCompanies() {
    return this._hhtpClient.get<CompanyModel[]>(environment.APIurl + '?size=20');
  }

  public getListOfCompanies(): CompanyModel[] {
    return this._mockCompanies || {};
  }

  public setCompanies(companies: CompanyModel[]) {
    this._mockCompanies = companies;
  }

  public addCompanies(value: CompanyModel[]) {
    this._mockCompanies = this._mockCompanies.concat(value);
  }
}
