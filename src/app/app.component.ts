import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public input: FormControl;
  public result: {from: string, to: number};

  constructor() {
    this.input = this.buildControl();
  }

  private toBinary(binary: string): {from: string, to: number} {
    let result = 0;
    for (let i = 0; i < binary.length; i++) {
      if (binary.charAt(binary.length - 1 - i) === '1') {
        result += Math.pow(2, i);
      }
    }

    return {from: binary, to: result};
  }

  private buildControl(): FormControl {
    const control = new FormControl(null, [Validators.pattern(
        new RegExp('^[0-1]+$')
      )]);
    control.markAsTouched();
    control.valueChanges.subscribe((value: string) => {
      if (this.input.valid) {
        this.result = this.toBinary(value);
      }
    });
    return control;
  }

}
