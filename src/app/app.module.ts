import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { AdmincartsComponent } from './admin/admincarts/admincarts.component';
import { CartsComponent } from './user/carts/carts.component';
import { LoginComponent } from './user/login/login.component';
import { OrdersComponent } from './user/orders/orders.component';
import { ProductComponent } from './user/product/product.component';
import { UserComponent } from './user/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    SettingsComponent,
    SetproductComponent,
    AdmintabComponent,
    AdminusersComponent,
    AdminordersComponent,
    AdmincartsComponent,
    CartsComponent,
    LoginComponent,
    OrdersComponent,
    ProductComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
