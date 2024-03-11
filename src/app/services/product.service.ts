import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private myAppUrl: string;
  private myApiUrl: string;

  
  constructor(private httpClient: HttpClient) {
    this.myAppUrl = environment.apiEnd;
    this.myApiUrl = 'api/products';
   }

  getProducts(): Observable<Product[]>{
    // const token = localStorage.getItem('token')
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`).pipe(res => res);
  }
}
