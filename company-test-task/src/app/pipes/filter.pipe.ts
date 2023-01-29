import { Pipe, PipeTransform } from '@angular/core';
import { CompanyModel } from '../models/company.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  //сортировки списка по названию, виду деятельности и типу

  transform(value: CompanyModel[] | null, sortingThing: string | null): CompanyModel[] | null {
    if (!value) {
      return value;
    } else if (sortingThing == 'Наименованию') {
      return value.sort(this.sortByName);
    } else if (sortingThing == 'Виду деятельности') {
      value.sort(this.sortByIndustry)
    } else if (sortingThing == 'Типу') {
      value.sort(this.sortByType)
    }
    return value

  }

  private sortByName(a: CompanyModel, b: CompanyModel) {
    if (a.business_name < b.business_name) {
      return -1;
    }
    if (a.business_name > b.business_name) {
      return 1;
    }
    return 0;
  }

  private sortByIndustry(a: CompanyModel, b: CompanyModel) {
    if (a.industry < b.industry) {
      return -1;
    }
    if (a.industry > b.industry) {
      return 1;
    }
    return 0;
  }

  private sortByType(a: CompanyModel, b: CompanyModel) {
    if (a.type < b.type) {
      return -1;
    }
    if (a.type > b.type) {
      return 1;
    }
    return 0;
  }
}
