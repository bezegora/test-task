import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { fromEvent, interval, map, Observable, tap, throttleTime } from 'rxjs';
import { CompanyModel } from 'src/app/models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';
import { CompanyItemComponent } from '../company-item/company-item.component';

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
    private _viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    let scroll = fromEvent(document, 'scroll').pipe(
      throttleTime(300),
      tap((e: Event) => {
        if (document.documentElement.getBoundingClientRect().bottom <= document.documentElement.clientHeight + 1000) {
          this._compService.getRandomCompanies().pipe(
            map((value) => {
              value.forEach(company => {
                let test = this._viewContainerRef.createComponent(CompanyItemComponent);
                test.setInput('company', company);
              });
              localStorage.setItem('companies', JSON.stringify(this._compService.getListOfCompanies().concat(value)));
            })
          ).subscribe();
        }
      })
    ).subscribe();
    this.companies$ = this._compService.getObservableCompanies()
  }



}
