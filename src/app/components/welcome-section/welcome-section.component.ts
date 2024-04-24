import { Component, Output,EventEmitter, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import {MatDividerModule} from '@angular/material/divider'

@Component({
    selector: 'app-welcome-section',
    standalone: true,
    templateUrl: './welcome-section.component.html',
    styleUrl: './welcome-section.component.scss',
    imports: [NavbarComponent,MatDividerModule]
})
export class WelcomeSectionComponent implements AfterViewInit{
    @Output() aboutInView:EventEmitter<boolean> = new EventEmitter<boolean>();
    private isAboutLoaded: boolean = false;

    ngAfterViewInit(): void {
       if(typeof document !== "undefined") this.onWindowScroll();
    }

    @HostListener('window:scroll',[])
    onWindowScroll() {
        const aboutSection = document.getElementById('about');
        if (aboutSection && !this.isAboutLoaded) {
          const rect = aboutSection.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight;
          this.aboutInView.emit(isInView);
          
          if(isInView == true)
          this.isAboutLoaded = !this.isAboutLoaded;
        }
    }
}
