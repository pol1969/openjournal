import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { FeaturesComponent } from './home/features/features.component';
import { Routes, RouterModule } from '@angular/router'; // *new

const appRoutes: Routes = [ // *new 
	{ // *new 
		path: 'home', // *new 
		component: HomeComponent, // *new 
	} // *new 
] // *new



@NgModule({
  declarations: [HomeComponent, JumbotronComponent, FeaturesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes) // *new
  ]
})
export class HomeModule { }
