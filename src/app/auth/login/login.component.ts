import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient) { 
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  checkLogin() {
    let signinUrl = environment.API_URL + 'signin';
    let formData = this.form.value;
    console.log('formdata', formData);
    this.http.post(signinUrl,{username: formData.username, password: formData.password}).subscribe((result)=>{
      console.log('response from api', result);
    });
  }

}
