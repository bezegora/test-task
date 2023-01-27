import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { MainPage } from './pages/main-page/main-page.page';
import { AddCompanyPage } from './pages/add-company/add-company.page';
import { HttpClientModule } from '@angular/common/http';
import { CompanyPage } from './pages/company/company.page';

@NgModule({
  declarations: [
    AppComponent,
    CompanyItemComponent,
    CompanyListComponent,
    MainPage,
    AddCompanyPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
