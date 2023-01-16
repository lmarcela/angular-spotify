// import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = ''//environment.api
  //constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): void//Observable<any> 
  {
    const body = {
      email,
      password
    }
    console.log(body)
    //return this.http.post(`${this.URL}/auth/login`, body)
  }

  suma(a: number, b: number): number {
    return a + b
  }
}