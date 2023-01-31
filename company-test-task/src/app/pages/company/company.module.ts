import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from '../../components/map/map.component';
import { MarkerService } from '../../services/marker.service';
import { CompanyPage } from './company.page';

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
  declarations: [
    CompanyPage,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    MarkerService
  ]
})
export class CompanyModule { }
