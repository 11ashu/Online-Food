import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, from} from "rxjs";
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from "@angular/router";
import { ToastrManager } from 'ng6-toastr-notifications';
import { User } from '../models/user';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uri = 'http://localhost:8080/auth';
  public token;
  constructor(
    private http: HttpClient,
    private router: Router,
    private toaster: ToastrManager
  ) { }

  login( body: {email: string, password: string}): void{
    this.http
      .post(`${this.uri}\\login`, body)
      .subscribe((res: {token: string, userId: string}) => {
        console.log(res);
        if(res.token) {
          const t = res.token;
          const id = res.userId;
          localStorage.setItem('issueToken',JSON.stringify(t));
          localStorage.setItem('accessid',JSON.stringify(id));
          console.log(this.isAuthenticated());
          this.router.navigate(['/dashboard']);
          this.toaster.successToastr('Welcome Admin');
        }
      })
  }
 
  getAdminDetail(id: string): Observable<User> {
      return this.http.get(`${this.uri}/${id}`) as Observable<User>;
  }

  updateAdminDetail(detail:any): Observable<any> {
    return this.http.put(`${this.uri}/${this.getAccessId()}`, detail) as Observable<any>;
  }

  
  logout() {
    localStorage.removeItem('issueToken');
    localStorage.removeItem('accessid');
    this.router.navigate(['/login']);
    this.toaster.successToastr('Logout Successfully');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('issueToken');

    return !helper.isTokenExpired(token);
  }

  getAccessId(){
    return JSON.parse(localStorage.getItem('accessid'));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('issueToken'));
  }
}
