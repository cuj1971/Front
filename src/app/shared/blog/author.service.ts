import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../interface/iuser';
import { Observable, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private _data$: BehaviorSubject<any> = new BehaviorSubject(null);
  data$: Observable<any> = this._data$.asObservable();

  constructor(private _http:HttpClient) {

   }

  async getAuthor(id) {
    console.log('id', id);
    const endPoint:string = `https://jsonplaceholder.typicode.com/users/${id}`;
    const data = await this._http.get<Iuser>(endPoint).pipe(
      first()
      //map((response) => response?.additives),
    ).toPromise();
    this._data$.next(data);

    return this._data$.value
  }

}
