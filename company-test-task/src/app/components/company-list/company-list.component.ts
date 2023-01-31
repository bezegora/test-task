import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, map, Observable, tap, throttleTime } from 'rxjs';

import { CompanyModel } from '../../models/company.model';
import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public sortingThings = [
    '',
    'Наименованию',
    'Типу',
    'Виду деятельности'
  ]

  myForm = new FormGroup({
    sortBy: new FormControl<string>('')
  });

  public companies$!: Observable<CompanyModel[]>;

  constructor(
    private _compService: CompaniesService,
  ) { }

  ngOnInit(): void {
    fromEvent(document, 'scroll').pipe(
      throttleTime(300),
      tap((e: Event) => {
        if (document.documentElement.getBoundingClientRect().bottom <= document.documentElement.clientHeight + 1000) {
          this._compService.getRandomCompanies().pipe(
            map((value) => {
              this._compService.addCompanies(value);
              this.companies$ = this._compService.getObservableCompanies();
            })
          ).subscribe();
        }
      })
    ).subscribe();
    this.companies$ = this._compService.getObservableCompanies();
  }



}
