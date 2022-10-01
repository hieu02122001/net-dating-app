import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpCLient: HttpClient ) { }
  baseUrl = 'https://localhost:5001/api/User';
  public getUsers(): Observable<User[]>{
    return this.httpCLient.get<User[]>(this.baseUrl);
  }
}
