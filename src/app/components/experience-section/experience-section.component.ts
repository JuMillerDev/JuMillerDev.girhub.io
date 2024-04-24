import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, HostListener, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ExperienceSectionComponent implements AfterViewInit {
  @Output() projectsInView:EventEmitter<boolean> = new EventEmitter<boolean>();
  private isProjectsLoaded: boolean = false;
  jobTitles = [
    { 
      title: 'NetMaxBud', 
      position:'Front-end developer', 
      description: [
        ' Creation of multi-page web applications using the <strong>Angular</strong> framework, <strong>TypeScript, HTML, and SCSS.</strong>',
        ' Application of the <strong>Material Design</strong> library to develop various components and elements of web pages.',
        ' <strong> Independent design and implementation of website functionality</strong>, including <strong>interaction with backend and database</strong> through HTTP requests to <strong>REST API.</strong>',
        ' Working with <strong>MS SQL database</strong>, including creating and modifying records.',
        ' Data storage in <strong>LocalStorage</strong> to prevent information loss.',
        ' <strong> Active participation in discussions regarding website functionality</strong> and strategies for achieving company business goals.',
        ' Utilization of <strong>Git version control</strong> for collaborative development and code management.',
        ' Proficient use of <strong>Angular subscriptions, pipes, and promises</strong> to manage asynchronous operations and data streams effectively.'
      ], 
      clicked: true 
    },
    { title: 'To be continued...', position:'Undefined', description: [' Here may be the description of my work at your company'], clicked: false },
  ];

  toggleJobInfo(job: any) {
    job.clicked = !job.clicked;

    this.jobTitles.forEach(j => {
      if (j !== job) {
        j.clicked = false;
      }
    });
  }

  ngAfterViewInit(): void {
    if(typeof document !== "undefined") this.onWindowScroll();
  }

  @HostListener('window:scroll',[])
  onWindowScroll() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection && !this.isProjectsLoaded) {
      const rect = projectsSection.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight;
      this.projectsInView.emit(isInView);
      
      if(isInView == true)
      this.isProjectsLoaded = !this.isProjectsLoaded;
    }
  }
}
