import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icomment } from '../interface/icomment';
import { Observable, BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _data$: BehaviorSubject<any> = new BehaviorSubject<Icomment[]>(null);
  data$: Observable<any> = this._data$.asObservable();

  constructor(private _http:HttpClient) {

   }

  async getComments(postId) {
    const endPoint:string = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    
    const data = await this._http.get<Icomment>(endPoint).pipe(
      first()
    ).toPromise();
    this._data$.next(data);
    return this._data$.value;

    /*
    const data = await this._http.get<Icomment[]>(endPoint).pipe(
      map((response) => response),
      // tap(),
    ).toPromise();
    this._data$.next(data);
    */

  }

}
