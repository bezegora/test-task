import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPage } from './main-page.page';
import { CompanyItemComponent } from 'src/app/components/company-item/company-item.component';
import { CompanyListComponent } from 'src/app/components/company-list/company-list.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainPage,
    CompanyItemComponent,
    CompanyListComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainPageModule { }
