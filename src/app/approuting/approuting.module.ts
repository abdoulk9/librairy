import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { BookListComponent } from '../book-list/book-list.component';
import { BookFormComponent } from '../book-list/book-form/book-form.component';
import { SingleBookComponent } from '../book-list/single-book/single-book.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { CreateuserComponent } from '../createuser/createuser.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path: 'users', component: CreateuserComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent},
  { path: 'books', component: BookListComponent },
  { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
  { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class ApproutingModule { }
