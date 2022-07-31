import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsListComponent,
    SubHeaderComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
