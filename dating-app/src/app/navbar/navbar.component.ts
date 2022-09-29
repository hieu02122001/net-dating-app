import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User = {
    id: 1,
    username: 'Le Minh Tri',
    email: 'abc@gmail.com'
  }
  constructor() { }
  
  ngOnInit(): void {
  } 

}
