
import {Observable} from "rxjs";
import {UserSearchValue} from "../../search/searchObjects";
import {Users} from "../../model/users";
import {CommonDAO} from "./commonDAO";

export interface UsersDAO extends CommonDAO<Users>{

  //поиск пользователей по названию
  searchUser(userSearchValue: UserSearchValue): Observable<Users[]>;

}
