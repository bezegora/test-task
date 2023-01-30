import { ApplicationRef, Component, ComponentFactoryResolver, HostListener, Injector, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CompanyItemComponent } from 'src/app/components/company-item/company-item.component';
import { CompanyModel } from 'src/app/models/company.model';
import { CompaniesService } from 'src/app/services/companies.service';
import { WindowScrollService } from 'src/app/services/window-scroll.service';



@Component({
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss']
})
export class MainPage implements OnInit {
  scrollY$!: Observable<number>;

  // @HostListener('document:scroll', ['$event'])
  // onScroll(e: Event): void {
  //   // console.log(this.getYPosition(e));
  //   if (document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight + 100) {
  //     let newNode = document.createElement('div');
  //     newNode.id = 'new-companies';
  //     document.body.querySelector('div.container-list')?.append(newNode);
  //     this._compService.getRandomCompanies().pipe(
  //       map((value) => {
  //         value.forEach(company => {
  //           let test = this._viewContainerRef.createComponent(CompanyItemComponent, { });
  //           test.setInput('company', company);

  //         });
  //         // localStorage.setItem('companies', JSON.stringify(this._compService.getListOfCompanies().concat(value)));
  //       })
  //     ).subscribe();
  //   }
  // }

  constructor(
    private _router: Router,
    private _windowScrollService: WindowScrollService,
  ) {
    this.scrollY$ = this._windowScrollService.scrollY$;
  }

  ngOnInit(): void {
    // window.addEventListener('scroll', this.getYPosition, true);
    // this.populate();
  }

  public toLogin() {
    localStorage.setItem('isLogged', 'false')
    this._router.navigate(['/login'])
  }

  public toAddCompany() {
    this._router.navigate(['/companies/add-company'])
  }

  public getYPosition(e: Event) {
    console.log(e.target as Element);

    return (e.target as Element).scrollTop;
  }

}
