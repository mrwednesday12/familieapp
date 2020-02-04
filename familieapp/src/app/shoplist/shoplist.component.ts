import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }
  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login'])
    }
  }

}
