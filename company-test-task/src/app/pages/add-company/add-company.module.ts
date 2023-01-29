import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyPage } from './add-company.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
