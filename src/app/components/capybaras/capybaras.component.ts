import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import HealthStatus from '../../common/healthStatus';

@Component({
  selector: 'app-capybaras',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './capybaras.component.html',
  styleUrl: './capybaras.component.scss'
})
export class CapybarasComponent {
  capybaraForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.capybaraForm = this.fb.group({
      capybaraName: new FormControl('', [Validators.required]),
      capybaraAge: new FormControl(0, [Validators.required]),
      capybaraWeight: new FormControl(0.0, [Validators.required]),
      capybaraHealthStatus: new FormControl(HealthStatus.HEALTHY, [Validators.required]),
      capybaraHabitat: new FormControl(0, Validators.required),
    })
  }

  submit() {
    if (this.capybaraForm.valid) {
      console.log(this.capybaraForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
