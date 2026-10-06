import { WaitlistService } from './../../services/waitlist.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
  styleUrls: ['./waitlist.component.css'],
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule]
})
export class WaitlistComponent implements OnInit {
  waitlistForm!: FormGroup;
  isSubmitted = false;
  errorMessage = '';
  constructor(private fb: FormBuilder,private waitlistService:WaitlistService) {}

  ngOnInit(): void {
    this.waitlistForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // ተጠቃሚው "Join Waitlist" ቁልፍን ሲጫን ይህ ይነሳል
  onSubmit() {
    if (this.waitlistForm.valid) {
    const userEmail= this.waitlistForm.value.email;
    this.waitlistService.sendEmail(userEmail).subscribe({
      next:(response) => {

        console.log('server response',response);
        this.isSubmitted = true;
        this.errorMessage ='';
        this.waitlistForm.reset();
      },
      error: (err) => {
        console.error('Connection error',err);
        this.isSubmitted = false;
         this.errorMessage = err.error?.error || 'something went wrong. Please try again';
      }
    });
  }
}
}
