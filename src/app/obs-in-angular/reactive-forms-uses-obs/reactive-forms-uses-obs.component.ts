import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-reactive-forms-uses-obs',
  template: `
    <h3>Reactive Forms uses Observables</h3>
    <form [formGroup]="heroForm">
      <label>
        Name:
        <input type="text" formControlName="name">
      </label>
    </form>
    <li *ngFor="let name of nameChangeLog">
      {{ name }}
    </li>
  `,
  styles: []
})
export class ReactiveFormsUsesObsComponent implements OnInit {

  nameChangeLog: string[] = [];
  heroForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.heroForm = this.fb.group({
      name: ['']
    })
    this.logNameChange()
  }

  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    )
  }
}
