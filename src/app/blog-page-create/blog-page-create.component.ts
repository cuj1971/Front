import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-blog-page-create',
  templateUrl: './blog-page-create.component.html',
  styleUrls: ['./blog-page-create.component.scss']
})
export class BlogPageCreateComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

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

  ngOnInit(): void {
  }

}
