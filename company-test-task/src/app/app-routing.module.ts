import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './helpers/login.guard';
import { MainPage } from './pages/main-page/main-page.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: MainPage,
    canActivate: [LoginGuard]
  },
  {
    path: 'company',
    loadChildren: () => import('./pages/company/company.module').then(m => m.CompanyModule),
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
