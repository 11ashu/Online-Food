import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder ,
    private authService: AuthService,
    
  ) { }
  
  get f() { return this.loginForm.controls; }

  ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
  }

  onSubmit = function(values : any){
    this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }else{
        this.authService.login(this.loginForm.value);
    }
  }

}
