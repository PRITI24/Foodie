import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { RegisterrestaurantComponent } from './registerrestaurant/registerrestaurant.component';
import { RestaurantloginComponent } from './restaurantlogin/restaurantlogin.component';
import { RestauranthomeComponent } from './restauranthome/restauranthome.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { RemoveDishComponent } from './remove-dish/remove-dish.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisteruserComponent,
    RegisterrestaurantComponent,
    RestaurantloginComponent,
    RestauranthomeComponent,
    AddDishComponent,
    RemoveDishComponent,
    ViewordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
