import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { IconHovered } from '../../../animations/element-transition';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  animations: [IconHovered]
})
export class IconButtonComponent {
  @Input() src!: string
  @Input() matIconName?: string
  @Input() width!: string
  @Input() href!: string
  @Input() title!: string
  isHovered: boolean = false;
}

