import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog/blog.service';
import { Observable } from 'rxjs';
import { Iblog } from '../shared/interface/iblog';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  blog$: Observable<any>;
  blogLabel:string = "blog label will be stored here....";
  blogText:string = "blog text will be stored here.....";
  
  maxArticles = 10;
  constructor(
    private _blog: BlogService,
    public modalController: ModalController
    ) { }

  ngOnInit(): void {
    this._blog.getBlog();
    this.blog$ = this._blog.data$;
  }
  createBlog() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        'title': 'blog title....',
        'body': 'blog body'
      },
      //cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
