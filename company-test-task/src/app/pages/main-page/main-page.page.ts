import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss']
})
export class MainPage implements OnInit {

  constructor(
    private compService: CompaniesService
  ) { }

  ngOnInit(): void {
    console.log(this.compService.get().pipe(map((value => { console.log(value); return value }
    ))).subscribe());
    
  }

}
