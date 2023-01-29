import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyModel } from 'src/app/models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';

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
    private compService: CompaniesService,
  ) { }

  ngOnInit(): void {
    this.companies$ = this.compService.get()
  }



}
