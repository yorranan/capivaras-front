import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  noteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      capybaraId: new FormControl(0, [Validators.required]),
      noteObservations: new FormControl('', [Validators.required]),
      noteComportament: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.noteForm.valid) {
      console.log(this.noteForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
