import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http: HttpClient) { }

  getLaptopsFromServices(): Observable<any>{
    return this.http.get('http://localhsost:');
  }
}
