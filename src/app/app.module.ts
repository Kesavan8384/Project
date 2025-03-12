import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ProductComponent,addproduct } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    SettingComponent,addproduct
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatListModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatButtonModule, MatSelectModule,BrowserAnimationsModule,MatInputModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
