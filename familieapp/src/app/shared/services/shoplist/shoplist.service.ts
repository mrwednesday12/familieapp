import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shoplist } from '../../model/shoplist.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ShoplistService {
  url:string = 'http://localhost:3000/shoppinglist';
  
    constructor(private http:HttpClient) { }
  
    getShoplist():Observable<Shoplist[]>{
      return this.http
      .get<Shoplist[]>(this.url)
      .pipe(tap(results => console.log(results)));
    }
  }
  
