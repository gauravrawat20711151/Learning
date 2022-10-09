import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  addEmployee : FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'female' | 'male' = 'male';
  disabled = false;
  preview: string;
  
  
  

  constructor(
    private fb: FormBuilder
    ) {
    this.createform();
   }


  ngOnInit(): void {

  }
  createform(){
    this.addEmployee = this.fb.group({
      register : [null,Validators.required ],
      companyname : ['',Validators.required],
      foundername : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      contact :['',Validators.required],
      skills: this.fb.array([]),
    })
  }
  save() {
    this.preview = JSON.stringify(this.addEmployee.value);
  }
 
  get skillsForms() {
    return this.addEmployee.get('skills') as FormArray;
  }
 
  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        name: [''],
        experience: [0],
      })
    );
  }
 
}