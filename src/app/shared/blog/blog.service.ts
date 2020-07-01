import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorService } from './author.service';
import { CommentService } from './comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iblog } from '../interface/iblog';
import { Observable, BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  private _data$: BehaviorSubject<any> = new BehaviorSubject(null);
  data$: Observable<any> = this._data$.asObservable();

  detailItem: any;
  authorItem: any;
  commentItem: any;

  constructor(
    private _http: HttpClient,
    private _Author: AuthorService,
    private _Comment: CommentService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  async getBlog() {
    const endPoint:string = "https://jsonplaceholder.typicode.com/posts";
    const data = await this._http.get<Iblog>(endPoint).pipe(
      first()
      //map((response) => response?.additives),
    ).toPromise();
    this._data$.next(data);
  }

  async getBlogDetail(id){
    console.log('id', id);
    //const data = this.data$;
    //if (!data) await this.getBlog();
    this.detailItem = this._data$.value.find(el => el.id ==  id);
    console.log('detailItem', this.detailItem)
  }

  async getAuthor(postId) {
    this.authorItem = await this._Author.getAuthor(postId);
    console.log('authorItem', this.authorItem)
  }

  async getComment(postId) {
    this.commentItem = await this._Comment.getComments(postId);
    console.log('commentItem', this.commentItem)
  }
}
