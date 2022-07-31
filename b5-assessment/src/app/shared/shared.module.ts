import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


const sharedComponents = [
  HeaderComponent,
  FooterComponent
]



@NgModule({
  declarations: [sharedComponents],
  imports: [
    CommonModule
  ],
  exports: [sharedComponents]
})
export class SharedModule { }
