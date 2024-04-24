import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { buttonHovered } from '../../animations/element-transition';

@Component({
  selector: 'app-right-information-container',
  standalone: true,
  imports: [],
  templateUrl: './right-information-container.component.html',
  styleUrl: './right-information-container.component.scss',
  animations: [buttonHovered]
})
export class RightInformationContainerComponent {
  emailAdress = 'yuliiamelnykdev@gmail.com';
  emailHovered = false

  constructor() {}

  sendEmail(){
    window.location.href = "mailto:yuliiamelnykdev@gmail.com?subject=Hi Yuliia"
  }
}
