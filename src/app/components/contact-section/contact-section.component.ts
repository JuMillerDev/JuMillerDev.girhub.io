import { Component } from '@angular/core';
import { buttonHoverAnimation } from 'src/app/animations/element-transition';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  animations: [buttonHoverAnimation]
})
export class ContactSectionComponent {
  buttonHovered: boolean = false;

  sendEmail(){
    window.location.href = "mailto:yuliiamelnykdev@gmail.com?subject=Hi Yuliia"
  }
}
