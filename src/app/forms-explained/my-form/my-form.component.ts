import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  public name: '';
  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }
}
