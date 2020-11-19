import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    user:SocialUser;

  constructor(private router: Router, private socialAuthService: SocialAuthService ) { }

  ngOnInit(): void {
   this.socialAuthService.authState.subscribe( user =>{
     this.user = user;
   });
  }
 
   loginWithGoogle(){
     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
     this.router.navigate(['/books']);
   }

  reditectTo(){
    this.router.navigate(['/home']);
  }
}
