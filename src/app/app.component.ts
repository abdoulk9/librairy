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

     var firebaseConfig =  {
      apiKey: "AIzaSyCYpcayLnF0D4f6XYY2rptj9zOzmZRSWew",
      authDomain: "librairy-6429e.firebaseapp.com",
      databaseURL: "https://librairy-6429e.firebaseio.com",
      projectId: "librairy-6429e",
      storageBucket: "librairy-6429e.appspot.com",
      messagingSenderId: "84925542391",
      appId: "1:84925542391:web:46a94a2472ff5dc446c8f2",
      measurementId: "G-GVJWK5R944"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }


}
