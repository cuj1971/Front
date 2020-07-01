import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { TabComponent } from './tab/tab.component';
import { BlogPageCreateComponent } from './blog-page-create/blog-page-create.component';
import { ItemPageEditComponent } from './item-page-edit/item-page-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalEditComponent } from './shared/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    ItemPageComponent,
    TabComponent,
    BlogPageCreateComponent,
    ItemPageEditComponent,
    HeaderComponent,
    ModalComponent,
    ModalEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
