import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [TopNavigationComponent, LeftNavigationComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
	  TopNavigationComponent,
	  LeftNavigationComponent,
	  FooterComponent
  ]

})
export class SharedModule { }
