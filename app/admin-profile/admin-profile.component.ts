import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  adminProfileForm: FormGroup;
  submitted = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toaster: ToastrManager
  ) { 
    this.adminFormValidation();
  }
  
  get myForm() { return this.adminProfileForm.controls; }

  
  detail = {};
  ngOnInit() {
      let id = this.authService.getAccessId();
      this.authService.getAdminDetail(id).subscribe(data =>{
          // console.log(data);
          this.detail = data;
      });
      
  }

  adminFormValidation(){
        this.adminProfileForm = this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
          email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
          phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
          address: ['',]
      });
  }

  onSubmit() {
    this.submitted = true;
    if(!this.adminProfileForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
      } else {
          this.authService.updateAdminDetail(this.adminProfileForm.value).subscribe(data => {
                this.toaster.successToastr('Admin Detail Updated Successfully');
                this.ngOnInit();
          })
    }
  }

}
