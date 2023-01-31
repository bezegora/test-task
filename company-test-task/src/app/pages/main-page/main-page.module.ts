import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompanyItemComponent } from '../../components/company-item/company-item.component';
import { CompanyListComponent } from '../../components/company-list/company-list.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPage } from './main-page.page';


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
