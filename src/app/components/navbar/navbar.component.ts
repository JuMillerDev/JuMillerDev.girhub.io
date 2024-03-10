import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { buttonHoverAnimation } from '../../animations/element-transition';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [buttonHoverAnimation]
})
export class NavbarComponent {

  buttonHovered: boolean = false;

  scrollToAnotherSection(id: string){
    console.log(id)
    const element = document.getElementById(id)
    console.log('element:',element)
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  }

  openResumePdf(){
    const pdfUrl = '../../../assets/Yuliia_Melnyk_Resume.pdf';

    window.open(pdfUrl, '_blank');
  }
}
