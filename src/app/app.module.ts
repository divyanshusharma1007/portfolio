/* The above class is the AppModule class in a TypeScript Angular application, which declares and
imports various components and modules for the application. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { AboutComponent } from './component/about/about.component';
import { HeadingComponent } from './component/heading/heading.component';
import { SkillsComponent } from './component/skills/skills.component';
import { CertificatesComponent } from './component/certificates/certificates.component';
import { MyWorkComponent } from './component/my-work/my-work.component';
import { WriterComponent } from './component/writer/writer.component';
import { ConnectComponent } from './component/connect/connect.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    AboutComponent,
    HeadingComponent,
    SkillsComponent,
    CertificatesComponent,
    MyWorkComponent,
    WriterComponent,
    ConnectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
