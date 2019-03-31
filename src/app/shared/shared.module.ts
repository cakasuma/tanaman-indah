
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AnnouncementComponent } from './announcement/announcement.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        AnnouncementComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AnnouncementComponent
    ],
    imports: [
        RouterModule
    ]
  })
  export class SharedModule { }