import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { IconHovered } from '../../animations/element-transition';

@Component({
  selector: 'app-right-information-container',
  standalone: true,
  imports: [],
  templateUrl: './right-information-container.component.html',
  styleUrl: './right-information-container.component.scss',
  animations: [IconHovered]
})
export class RightInformationContainerComponent {
  emailAdress = 'yuliiamelnykdev@gmail.com';
  emailHovered = false

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

      this.drawLine( 50, 300);
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

  sendEmail(){
    window.location.href = "mailto:yuliiamelnykdev@gmail.com?subject=Hi Yuliia"
  }
}
