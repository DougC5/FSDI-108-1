import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { MenuComponent } from './menu/menu.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteruserComponent,
    ListuserComponent,
    MenuComponent,
    MainpageComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
