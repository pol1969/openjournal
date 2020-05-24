import { Component, OnInit } from '@angular/core';
import { Journal } from '../models/journal.model';//new
import {FormBuilder, FormGroup} from '@angular/forms';//new
import { ProfileService } from '../profile.service';//new

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
	      // *new
          private profileService: ProfileService,
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

 createJournalFormSubmit() {
    const formData = this.createJournalForm.getRawValue();
    
    this.profileService.createJournal(formData).subscribe(
      (res) => {
        console.log(res);
        window.alert('Journal Created');
        window.location.replace("/profile");
      },
      (err) => {
        console.log(err);
      }
    );

  }
}
