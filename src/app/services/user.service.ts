import { Injectable } from '@angular/core';

//import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private MyAppUrl: string;
  private MyApiUrl: string;

  constructor(private http: HttpClient) { 
    this.MyAppUrl = environment.apiEnd;
    this.MyApiUrl ='api/users';
  }

  signIn(user:User):Observable<any>{
    return this.http.post(`${this.MyAppUrl}${this.MyApiUrl}`, user)
  }

  login(user:User):Observable<string>{
    return this.http.post<string>(`${this.MyAppUrl}${this.MyApiUrl}/login`, user)
  }
}
