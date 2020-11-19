import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
returnTo(){
  this.router.navigate(['/login']);
}
}
