import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
      this.loginForm = fb.group({
          defaultFormEmail: ['', Validators.required],
          defaultFormPass: ['', [Validators.required, Validators.minLength(8)]]
      });
  }

}
