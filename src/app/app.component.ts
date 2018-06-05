import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { AgmMap } from '@agm/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }

  goToSpeculate(id) {
    document.getElementById(id).scrollIntoView();
  }

}
