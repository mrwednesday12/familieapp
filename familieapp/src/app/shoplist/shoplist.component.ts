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
// update
  }
}
