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
	  this.createJournalForm = this.formBuilder.group({
	  id: this.journalModel.id, 
	  name: this.journalModel.name, 
	  description: this.journalModel.description, 
	  content: this.journalModel.content, });
}

}
