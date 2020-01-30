import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseurl="http://localhost:3000/";


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

addUser(enquiry){
console.log(`${baseurl}create`);

return this.http.post(`${baseurl}create`,{
   enquiry
})
}
}