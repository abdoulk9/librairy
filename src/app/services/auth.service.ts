import { ComponentFactoryResolver, Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  provider = new firebase.auth.GoogleAuthProvider();
  

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

  signWithGoogle(){
    firebase.auth().getRedirectResult()
    .then(
      (result) =>{
        const  token = result.credential;
        const  user = result.user;
        console.log(token);
      })
      .catch( (error) =>{
        console.log(error);
        /*const errorMessage = error.message;
        const email = error.eamil;
        const credential = error.credential; */
      });
  }

  signOut(){
    firebase.auth().signOut();
  }
}
