import { trigger, state, style, animate, transition } from '@angular/animations';

export const slideFromTop = trigger('slideFromTop', [
    transition(':enter',[
        style({transform: 'translateY(-100%)'}),
        animate('200ms', style({transform: 'translateY(0)'}))
    ]),
    transition(':leave',[
        animate('100ms', style({transform: 'translateY(-100%)'}))
    ])
]);

export const slideFromBottom = trigger('slideFromBottom', [
    state('false',style({opacity:'0'})),
    transition('false=>true',[
        style({transform: 'translateY(100%)'}),
        animate('500ms 100ms', style({transform: 'translateY(0)',opacity:'1'})),
    ])
])

export const buttonHoverAnimation = trigger('buttonHoverAnimation', [
    state('hovered', style({
        transform:'translate(-3px,-3px)', 
        boxShadow:'3px 3px #38ffb3'
    })),
    transition('initial => hovered', [
        animate('200ms'),
    ]),
    transition('hovered => initial', [
        animate('200ms')
    ])
])

export const sideContainerInformationHovered = trigger('sideInformationHovered',[
    state('hovered', style({
        transform: 'translateY(-3px)'
    })),
    transition('initial => hovered', [
        animate('100ms')
    ]),
    transition('hovered => initial', [
        animate('100ms')
    ])
])