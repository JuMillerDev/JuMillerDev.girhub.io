import { Component, Output, EventEmitter, HostListener, AfterViewInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [MatDividerModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent implements AfterViewInit {
  @Output() experienceInView: EventEmitter<boolean> = new EventEmitter<boolean>();
  private isExperienceLoaded: boolean = false;

  ngAfterViewInit(): void {
    if(typeof document !== "undefined") this.onWindowScroll();
  }

  @HostListener('window:scroll',[])
    onWindowScroll() {
        const experienceSection = document.getElementById('experience');
        if (experienceSection && !this.isExperienceLoaded) {
          const rect = experienceSection.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight;
          this.experienceInView.emit(isInView);
          
          if(isInView == true)
          this.isExperienceLoaded = !this.isExperienceLoaded;
        }
    }
}
