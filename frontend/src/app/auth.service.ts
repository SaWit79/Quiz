import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  register(credentials){
    this.http.post<any>(`https://localhost:44329/api/account`, credentials).subscribe(res =>{
      this.authenticate(res);
    });
  }

  login(credentials){
    this.http.post<any>(`https://localhost:44329/api/account/login`, credentials).subscribe(res =>{
      this.authenticate(res);
    });
  }

  logout(){
    localStorage.removeItem('token');
  }

  get isAuthenticated(){
    return !!localStorage.getItem('token');
  }

  authenticate(res){
    localStorage.setItem('token', res);
    this.router.navigate(['/']);
  }
}
