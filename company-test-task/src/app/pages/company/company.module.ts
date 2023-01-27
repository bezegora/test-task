import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPage } from './company.page';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  {
    path: ':id',
    component: CompanyPage,
  }
];

@NgModule({
  declarations: [CompanyPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GoogleMapsModule
  ]
})
export class CompanyModule { }
