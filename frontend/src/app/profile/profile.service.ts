import { Injectable } from '@angular/core';
// *new
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
	DJANGO_SERVER = 'урл:порт от джанги'



  constructor(
  	private http: HttpClient //new
  ) { }

  createJournal(formData: any) { //new
    console.log(formData);
    return this.http.post(
      this.DJANGO_SERVER + '/create-journal', formData
    );
  }
}
