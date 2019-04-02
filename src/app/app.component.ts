import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup;

  public result: {from: string, to: number};

  constructor() {
    this.form = this.buildForm();
  }

  public onSubmit(): void {
    const from: string = this.form.value.number;
    let result = 0;
    for (let i = 0; i < from.length; i++) {
      if (from.charAt(from.length - 1 - i) === '1') {
        result += Math.pow(2, i);
      }
    }

    this.result = {from, to: result};
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      number: new FormControl(null, [Validators.required, Validators.pattern(
        new RegExp('^[0-1]+$')
      )]),
    });
  }

}
