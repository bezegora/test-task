import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyPage } from './company.page';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from 'src/app/components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from 'src/app/services/marker.service';
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
