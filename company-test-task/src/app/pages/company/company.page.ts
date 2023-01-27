import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { CompanyModel } from 'src/app/models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss']
})
export class CompanyPage implements OnInit {
  public company!: CompanyModel;
  apiLoaded: Observable<boolean>;

  constructor(
    private _route: ActivatedRoute,
    private _compService: CompaniesService,
    private _httpClient: HttpClient
  ) {
    this.apiLoaded = _httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.company = new CompanyModel(this._compService.getCompanyById(+params['id']));
      })
      .unsubscribe();
  }

}
