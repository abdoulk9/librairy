import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import firebase from 'firebase';
import { from} from 'rxjs';

import 'firebase/auth';
import  { switchMap, first, mapTo, take  } from 'rxjs/operators';
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  
  

  constructor() { }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            resolve();
          },
            (error) => {
              reject(error);
            }
          );
      }
    )
  }

  signIn(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(() => {
            resolve();
          },
            (error) => {
              reject(error);
            });
      }
    );
  }
  
   
  
  signOut(){
    firebase.auth().signOut();
  }
}
