import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialUser } from 'angularx-social-login';
import firebase from 'firebase';
import { SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';
import { from } from 'rxjs';
import 'firebase/auth';

import { first, mapTo, switchMap, switchMapTo, take } from 'rxjs/operators';
import { AngularFireDatabase } from 'firebase/firebase-database';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signupForm: FormGroup;
  errorMessage: string;
  user: SocialUser;
  auth: any;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    ) { }

  ngOnInit() {
    this.initForm();
    this.socialAuthService.authState.subscribe(
      (user) => {
        this.user = user;
      }

    )
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    console.log(email + '-' + password);

    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  
  

  /*metadataCreateWatcher(user: firebase.User) {
    return this.db
      .object(`metadata/${user.uid}/refreshTime`)
      .valueChanges()
      .pipe(
        first((refreshTime) => !!refreshTime),
        mapTo(user)
      );
  }*/

}
