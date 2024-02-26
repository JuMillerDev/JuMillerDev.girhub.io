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

  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;
  @ViewChild('divContainer', {static:true}) containerRef!: ElementRef;
  context: CanvasRenderingContext2D | null = null;
  canvasWidth!: number;
  lineWidth: number = 2;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
     const canvasElement = this.canvasRef.nativeElement as HTMLCanvasElement;
     if(canvasElement){
      this.context = canvasElement.getContext('2d');
     }

     const containerRect = (this.containerRef.nativeElement).getBoundingClientRect();

      this.canvasWidth = containerRect.right - containerRect.left
      this.canvasRef.nativeElement.width = this.canvasWidth
      console.log(this.canvasWidth)

      this.drawLine( 30, 200);
    }
  }

  drawLine(y1: number,y2: number) {
    this.context?.beginPath();
    this.context?.moveTo((this.canvasWidth/2)-(this.lineWidth/2), y1);
    this.context?.lineTo(this.canvasWidth/2-(this.lineWidth/2), y2);
    this.context!.strokeStyle = '#e1e1e1'; // Line color
    this.context!.lineWidth = this.lineWidth;
    this.context?.stroke();
  }
}
