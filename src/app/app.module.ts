import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { AuthGuardService } from './services/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleLoginProvider,
          SocialLoginModule,
          SocialAuthServiceConfig,
          FacebookLoginProvider   } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ApproutingModule } from './approuting/approuting.module';
import { CreateuserComponent } from './createuser/createuser.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CreateuserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SocialLoginModule,
    ApproutingModule
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
               {

                 id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider('854674481512-jg069gqd09q5dhjm75p3f2v6g1h3gp6p.apps.googleusercontent.com')

                },
                {
                   id: FacebookLoginProvider.PROVIDER_ID,
                   provider: new FacebookLoginProvider('clientId')
                 }
      ]
    } as SocialAuthServiceConfig,
  }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

