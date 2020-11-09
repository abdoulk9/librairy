import { Component } from '@angular/core';
import   firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librairy';


  constructor(){

     var firebaseConfig = {
      apiKey: "AIzaSyCvJ4mp_P_ckAk_wt9wNePkqdV2UUY2JL8",
      authDomain: "book-store-c04cf.firebaseapp.com",
      databaseURL: "https://book-store-c04cf.firebaseio.com",
      projectId: "book-store-c04cf",
      storageBucket: "book-store-c04cf.appspot.com",
      messagingSenderId: "665668367909",
      appId: "1:665668367909:web:b58ad7af605f4ae8c631cc",
      measurementId: "G-9WYRH82Q79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }


}
