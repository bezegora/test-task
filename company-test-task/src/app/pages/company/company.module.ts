import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPage } from './company.page';
import { RouterModule, Routes } from '@angular/router';
// import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  {
    path: ':id',
    component: CompanyPage,
  },
  {
    path: 'add-company',
    loadChildren: () => import('../add-company/add-company.module').then(m => m.AddCompanyModule)
  }
];

@NgModule({
  declarations: [CompanyPage],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CompanyModule { }
