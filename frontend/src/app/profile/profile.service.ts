import { Injectable } from '@angular/core';
// *new
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	DJANGO_SERVER = 'http://127.0.0.1:8000'



	constructor(
		private http: HttpClient //new
	) { }

	createJournal(formData: any) { //new
		console.log(formData);
		return this.http.post(
			this.DJANGO_SERVER + '/create-journal', formData
		);
	}
	getJournals() {
		return this.http.get(
			this.DJANGO_SERVER + '/get-journals'
		);
	}

	getSingleJournal(journalId: number) {
   return this.http.post(this.DJANGO_SERVER + '/get-journal', journalId
    );
  }
	editJournal(formData) {
    return this.http.post(this.DJANGO_SERVER + '/edit-journal', formData
    );
  }
	deleteJournal(journalId) {
    return this.http.post(this.DJANGO_SERVER + '/delete-journal', journalId
    );
  }


}

