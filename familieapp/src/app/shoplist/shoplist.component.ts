import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ShoplistService } from '../shared/services/shoplist/shoplist.service';
import { Shoplist } from '../shared/model/shoplist.model';
import { Observable } from 'rxjs';

@Component({ 
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  shoplist$:Observable<Shoplist[]>;


  constructor(private authService:AuthService, private router:Router, private shoplistService:ShoplistService) { }
  ngOnInit() {
    
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login'])
    }

    this.shoplist$ = this.shoplistService.getShoplist();
  }

  downloadPDF() {
    var sTable = document.getElementById('tab').innerHTML;
  
    var style = "<style>";
    style = style + "table {width: 100%;font: 25px Courier New;}";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";
  
    var win = window.open('', '', 'height=1200,width=1200');

        win.document.write(style);
        win.document.write(sTable);
        win.print();
  }

  //delete item
  deleteItem(value) {
    this.shoplistService.deleteItem(value).subscribe();
    this.router.navigate(['/shoplist']);
  }

  //item toevoegen
  addItem(value) {    
    const item = new Shoplist(value, null);
    this.shoplistService.addItem(item)
    .subscribe((addedItem: Shoplist) => {
      this.shoplist$ = this.shoplistService.getShoplist();
    });
  }
  addItemJSON(item) {
    const newItemJSON = new Shoplist(null,
      item.name,
    );
    this.shoplistService.addItemJSON(newItemJSON).subscribe(); 
  }
}



