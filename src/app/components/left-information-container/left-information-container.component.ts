import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { IconButtonComponent } from "./icon-button/icon-button.component";


@Component({
    selector: 'app-left-information-container',
    standalone: true,
    templateUrl: './left-information-container.component.html',
    styleUrl: './left-information-container.component.scss',
    imports: [IconButtonComponent]
})
export class LeftInformationContainerComponent {

  constructor() {}
}
