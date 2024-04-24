import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { borderButtonHoverAnimation, menuOpenClose } from '../../animations/element-transition';
import { CommonModule } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { IconButtonComponent } from "../left-information-container/icon-button/icon-button.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    animations: [borderButtonHoverAnimation, menuOpenClose],
    imports: [CommonModule, MatIconButton, MatIcon, MatDividerModule, IconButtonComponent]
})
export class NavbarComponent {

  buttonHovered: boolean = false;
  mobileMenuOpen: boolean = false;
  @Input() isMobileNavbar: boolean = true;
  @Input() showFloatingNavbar: boolean = false;

  scrollToAnotherSection(id: string){
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }

  openResumePdf(){
    const pdfUrl = '../../../assets/Yuliia_Melnyk_Resume.pdf';

    window.open(pdfUrl, '_blank');
  }
}
