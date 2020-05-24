import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service' // *new


@Component({
	selector: 'app-journals',
	templateUrl: './journals.component.html',
	styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {
	public journals; // *new

	constructor(
		private profileService: ProfileService // *new
	) { }

	// *new
	getAllJournals() {
		this.profileService.getJournals().subscribe(
			(res) => {
				console.log("test from getAllJournals")
				console.log(res);
				this.journals = res
			},
			(err) => {
				console.log(err);
			}
		);
	}
	deleteJournal(journalId){
		this.profileService.deleteJournal(journalId).subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);


	}



	ngOnInit(): void {
		this.getAllJournals();
	}

}
