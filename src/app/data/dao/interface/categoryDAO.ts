import {Observable} from "rxjs";
import {CategorySearchValue} from "../../search/searchObjects";
import {CommonDAO} from "./commonDAO";
import {Category} from "../../model/category";

export interface CategoryDAO extends CommonDAO<Category>{

  //поиск категорий по любым параметрам, указанных в categorySearchValue
  searchCategory(categorySearchValue: CategorySearchValue): Observable<Category[]>;

}
