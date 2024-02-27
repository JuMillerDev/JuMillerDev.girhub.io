import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss'
})
export class ExperienceSectionComponent {
  jobTitles = [
    { title: 'NetMaxBud', position:'Front-end developer', description: 'Description', instruments:[], clicked: true },
    { title: 'To be continued...', position:'', description: '', instruments:[], clicked: false },
  ];

  toggleJobInfo(job: any) {
    // Toggle active state for the clicked job
    job.clicked = !job.clicked;

    // Deactivate other jobs
    this.jobTitles.forEach(j => {
      if (j !== job) {
        j.clicked = false;
      }
    });
  }
}
