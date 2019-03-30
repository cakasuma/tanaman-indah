import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../../environments/environment';
import { ShopComponent } from './shop/shop.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HomeComponent,
        AboutUsComponent,
        ShopComponent
    ],
    imports: [
      PagesRoutingModule,
      SharedModule,
      AgmCoreModule.forRoot({
        apiKey: environment.google_api_key
      }),
      HttpClientModule
    ],
  })
  export class PagesModule { }