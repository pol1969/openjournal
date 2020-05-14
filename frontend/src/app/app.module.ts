import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { Routes, RouterModule } from '@angular/router'; // *new
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module'; // *new 
import { ProfileModule } from './profile/profile.module'; // *new
const appRoutes: Routes = [ // *new 
	{ // *new 
		path: 'home', // *new 
		loadChildren: './home/home.module#HomeModule' // *new 
	}, // *new 
	{ // *new 
		path: 'profile', // *new 
		loadChildren: './profile/profile.module#ProfileModule' // *new 
	}, // *new 
	{ // *new 
		path: '', // *new 
		redirectTo: '/home', // *new 
		pathMatch: 'full' // *new 
	} // *new 
] // *new

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule, 
    ProfileModule, 
    RouterModule.forRoot(appRoutes) // *new
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
