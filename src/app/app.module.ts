import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { PartnersComponent } from './partners/partners.component';
import { ApplyForJobComponent } from './apply-for-job/apply-for-job.component';
import { LetsConnectComponent } from './lets-connect/lets-connect.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    BannerComponent,
    AboutUsComponent,
    ServicesComponent,
    WhyUsComponent,
    PartnersComponent,
    ApplyForJobComponent,
    LetsConnectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
