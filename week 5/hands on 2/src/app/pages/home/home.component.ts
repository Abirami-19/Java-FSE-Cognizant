import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Interpolation
  portalName = 'Student Course Portal';

  // Property Binding
  isPortalActive = true;

  // Event Binding
  message = '';

  // Two-Way Binding
  searchTerm = '';

  // Lifecycle Example
  availableCourses = 0;

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {

    // Simulating loading course count
    this.availableCourses = 12;

    console.log('HomeComponent initialised — courses loaded');

  }

  ngOnDestroy(): void {

    console.log('HomeComponent destroyed');

  }

}

/*
Property Binding:
[disabled]="isPortalActive"
Data flows from Component → HTML.

Two-Way Binding:
[(ngModel)]="searchTerm"

Data flows both ways:
Component ↔ HTML
*/