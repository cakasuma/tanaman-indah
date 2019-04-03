import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'aboutus',
        component: AboutUsComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'detail/:id',
        component: ShopDetailComponent
    }
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }