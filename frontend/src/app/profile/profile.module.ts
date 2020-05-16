import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { JournalsComponent } from './journals/journals.component';
import { Routes, RouterModule } from '@angular/router';
import { EditJournalComponent } from './edit-journal/edit-journal.component';
import { CreateJournalComponent } from './create-journal/create-journal.component'; 

const appRoutes: Routes = [ // *new 
	{ // *new 
		path: 'profile', // *new 
		component: ProfileComponent, // *new 
	}, // *new
	{ // *new 
		path: 'profile/create-journal', // *new 
		component: CreateJournalComponent, // *new 	   
	}, // *new 
	{ // *new 
		path: 'profile/edit-journal/:id', // *new 
		component: EditJournalComponent, // *new 
	} // *new 

] // *new



@NgModule({
  declarations: [ProfileComponent, JournalsComponent, EditJournalComponent, CreateJournalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes) // *new
  ]
})
export class ProfileModule { }
