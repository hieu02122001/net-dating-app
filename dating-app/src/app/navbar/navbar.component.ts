import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user';
import { UsersService } from '../_services/users.service';

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
  users: User[] = []
  constructor(private userService: UsersService) { }
  
  ngOnInit(): void {
    this.fetchUser();
  } 

  fetchUser(){
    this.userService.getUsers()
      .subscribe(
        (response) => {
          this.users = response;
        }
      )
  }
}
