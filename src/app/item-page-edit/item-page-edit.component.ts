import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-item-page-edit',
  templateUrl: './item-page-edit.component.html',
  styleUrls: ['./item-page-edit.component.scss']
})
export class ItemPageEditComponent implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      //cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit(): void {
  }

}
