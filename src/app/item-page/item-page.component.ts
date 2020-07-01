import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogService } from '../shared/blog/blog.service';
import { Iuser } from '../shared/interface/iuser';
import { Icomment } from '../shared/interface/icomment';
import { ModalController } from '@ionic/angular';
import { ModalEditComponent } from '../shared/modal-edit/modal-edit.component';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  blogDetail: any;
  authorDetail: any;
  commentDetail: Icomment[];

  blogAuthor:string = "author will be stored here.....";
  blogLabel:string = "blog label will be stored here....";
  blogText:string = "blog text will be stored here.....";

  constructor(
    private _api:BlogService,
    private _route:ActivatedRoute,
    private _router:Router,
    public modalController: ModalController) { }

  ngOnInit(): void {
  }

  async ionViewWillEnter() {
    const {id = null} = this._route.snapshot.params;
    // GET DETAILS
    if (!id) return;
    await this._api.getBlogDetail(id);
    this.blogDetail = this._api.detailItem;
    console.log('this.blogDetail', this.blogDetail);
    // GET AUTHOR
    await this._api.getAuthor(id);
    this.authorDetail = this._api.authorItem;
    console.log('authorDetail.name', this.authorDetail.name)
    // GET COMMENTS
    await this._api.getComment(id);
    this.commentDetail = this._api.commentItem;
    console.log('commentDetail', this.commentDetail);
  }

  editBlog() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalEditComponent,
      componentProps: {
        'title': this.blogDetail.title,
        'body': this.blogDetail.body
      },
      //cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
