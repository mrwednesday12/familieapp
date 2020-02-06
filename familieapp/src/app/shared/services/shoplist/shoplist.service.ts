import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shoplist } from '../../model/shoplist.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ShoplistService {
  url:string = 'http://localhost:3000/shoppinglist';
  
    constructor(private http:HttpClient) { }
  
    //shoplist in de view zetten
    getShoplist():Observable<Shoplist[]>{
      return this.http
      .get<Shoplist[]>(this.url)
      .pipe(tap(results => console.log(results)));
    }
//item verwijderen
    deleteItem(value) {
      return this.http.delete(this.url+`/${value}`)
    }
//item toevoegen
    addItem(value){
     const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url,value,{ headers: headers });
  }

  addItemJSON(value): Observable<any> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url, value, { headers: headers });
  }
  }
  