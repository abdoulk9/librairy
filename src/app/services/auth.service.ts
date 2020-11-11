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
    this.provider.addScope('https://gooogleapis.com/auth/contacts.readonly');
    firebase.auth().signInWithPopup(this.provider)
    .then(
      (result) =>{
        if(result.credential){
          const  token = (<any>result).credential.accessToken;
          console.log(token);
        }
      })
      .catch( (error) =>{
        console.log(error);
        /*const errorMessage = error.message;
        const email = error.eamil;
        const credential = error.credential; */
      });
      //firebase.auth().signInWithRedirect(this.provider);
      
      console.log(`vous êtes connecter: ${this.provider.addScope('email')}`);

  }

  signOut(){
    firebase.auth().signOut();
  }
}
