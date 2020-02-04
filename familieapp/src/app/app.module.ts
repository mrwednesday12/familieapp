import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { auth } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { HttpClientModule} from '@angular/common/http';
import { TasksService } from './shared/services/tasks/tasks.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'shoplist', component: ShoplistComponent },
  { path: 'tasklist', component: TasklistComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent}
  ];



const config = {
  apiKey: "AIzaSyDolNGHUyxkacs2H7nmdrGHGT63WQErBdQ",
  authDomain: "familieapp.firebaseapp.com",
  databaseURL: "https://familieapp.firebaseio.com",
  projectId: "familieapp",
  storageBucket: "familieapp.appspot.com",
  messagingSenderId: "463925134473",
  appId: "1:463925134473:web:c43bd06d24ce8eee967258"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoplistComponent,
    TasklistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AuthService, TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
