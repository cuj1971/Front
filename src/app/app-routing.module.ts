import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { BlogPageCreateComponent } from './blog-page-create/blog-page-create.component';
import { ItemPageEditComponent } from './item-page-edit/item-page-edit.component';

const routes: Routes = [
  {
    path: 'blog',
    children: [
      {
        path: '',
        children: [
          {
            path: 'create',
            component: BlogPageCreateComponent
          },
          {
            path: '',
            component: BlogPageComponent
          }
        ]
      },
      {
        path: ':id',
        children: [
          {
            path: 'edit',
            component: ItemPageEditComponent
          },
          {
            path: '',
            component: ItemPageComponent
          }
        ]
      },
    
    ]
  },
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }