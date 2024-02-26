import { ChangeDetectorRef, Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { sideContainerInformationHovered } from '../../../animations/element-transition';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  animations: [sideContainerInformationHovered]
})
export class IconButtonComponent {
  @Input() src!: string
  @Input() width!: string
  @Input() href!: string
  @Input() title!: string
  isHovered: boolean = false;
}

