import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyPage } from '../add-company/add-company.page';
// import { MainPageComponent } from './main-page.component';
import { MainPage } from './main-page.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'add-company',
    component: AddCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
