import { Component, OnInit } from '@angular/core';
import { Journal } from '../models/journal.model';//new
import {FormBuilder, FormGroup} from '@angular/forms';//new

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.css']
})
export class CreateJournalComponent implements OnInit {
	journalModel: Journal; //new
	createJournalForm: FormGroup;//new

  constructor(
	  private formBuilder: FormBuilder,//new
  ) 
	{
		this.journalModel = new Journal;//new
	}

  ngOnInit(): void {//new
	  console.log('ngOnInit in CreateJournalComponent')
	  this.createJournalForm = this.formBuilder.group({
	  id: this.journalModel.id, 
	  name: this.journalModel.name, 
	  description: this.journalModel.description, 
	  content: this.journalModel.content, });
}

// *new 
   createJournalFormSubmit() { 
	   console.log('test');
	   const formData = this.createJournalForm.getRawValue(); 
	   console.log(formData.name);
   } 



}
