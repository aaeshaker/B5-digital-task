import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: '', loadChildren: () => import('./feature-modules/home/home.module').then((m) => m.HomeModule) },
  { path: 'cart', loadChildren: () => import('./feature-modules/cart/cart.module').then((m) => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
