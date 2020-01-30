import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators, FormGroup } from '@angular/forms';
import {  FormService} from '../services/form.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  enquiryForm;
  constructor(private fb:FormBuilder,
    private formservice:FormService) { 
      this.enquiryForm=this.fb.group({
        firstName:new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        lastName: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        email: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        phone: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
        comment: new FormControl('',[
          Validators.required,
          Validators.minLength(3)
        ]),
      })
    }

  ngOnInit() {
  }
addUser()
{
 this.formservice.addUser(this.enquiryForm.value)
 .subscribe(data=>{
     alert("sucess")
 })
}
}
