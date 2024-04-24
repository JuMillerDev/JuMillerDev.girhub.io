import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { WelcomeSectionComponent } from "./components/welcome-section/welcome-section.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { slideFromBottom, slideFromTop } from './animations/element-transition';
import { LeftInformationContainerComponent } from "./components/left-information-container/left-information-container.component";
import { RightInformationContainerComponent } from "./components/right-information-container/right-information-container.component";
import { ExperienceSectionComponent } from "./components/experience-section/experience-section.component";
import { ProjectsSectionComponent } from "./components/projects-section/projects-section.component";
import { ContactSectionComponent } from "./components/contact-section/contact-section.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [slideFromTop, slideFromBottom],
    imports: [CommonModule, RouterOutlet, NavbarComponent, WelcomeSectionComponent, AboutSectionComponent, LeftInformationContainerComponent, RightInformationContainerComponent, ExperienceSectionComponent, ProjectsSectionComponent, ContactSectionComponent]
})
export class AppComponent implements OnInit {
  showFloatingNavbar: boolean = true
  private previousScrollPosition: number = 0;
  private isScrolledUp: boolean = false;
  isNotOnTopOfPage: boolean = false;
  isMobileLayout: boolean = true;

  viewsToLoad: {[key:string]: boolean} = {
    aboutInView: false, 
    experienceInView: false,
    projectsInView: false,
    contactInView: false,
  }

  ngOnInit(): void {
    if(typeof window !== "undefined") {
      this.isMobileLayout = window.innerWidth <= 767;
      window.onresize = () => this.isMobileLayout = window.innerWidth <= 767; 
    }
  }

  @HostListener('window:scroll',[])
  onWindowScroll(){
    this.isNotOnTopOfPage = window.scrollY > 0;
    this.isScrolledUp = window.scrollY <= this.previousScrollPosition;
    this.showFloatingNavbar = this.isScrolledUp
    this.previousScrollPosition = window.scrollY;
  }

  onSectionInView(viewName: string,isInView: boolean){
    // console.log('viewName: ',viewName, 'bool: ', isInView)
    this.viewsToLoad[viewName] = isInView;
  }
}
