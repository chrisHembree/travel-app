import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutUsComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
