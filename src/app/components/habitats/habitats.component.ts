import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-habitats',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './habitats.component.html',
  styleUrls: ['./habitats.component.scss'],
})
export class HabitatsComponent {
  habitatForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.habitatForm = this.fb.group({
      habitatName: new FormControl('', [Validators.required]),
      habitatSwitch: new FormControl(false, [Validators.required])
    });
  }

  submit() {
    if (this.habitatForm.valid) {
      console.log(this.habitatForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

}
