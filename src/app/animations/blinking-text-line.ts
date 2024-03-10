import { trigger, state, style, animate, transition } from '@angular/animations';

export const blinkingLine = trigger('blinkingLine',[
    state('true', style({opacity:1})),
    state('false', style({opacity:0})),
    transition('true <=> false', [
        animate('500ms')
    ])
])