import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AddCompanyPage } from './add-company.page';

const routes: Routes = [
  {
    path: '',
    component: AddCompanyPage
  }
];

@NgModule({
  declarations: [
    AddCompanyPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddCompanyModule { }
