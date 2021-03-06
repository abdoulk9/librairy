import { trigger, state, style, animate, transition } from '@angular/animations';


export  const moveIn = (
     trigger('moveIn', [
        state('void', style({position:'fixed', width:'100%'})),
        state('*', style({position: 'fixed', width:'100%'})),
        transition(':enter', [
            style({opacity:'0', transform: 'translateX(100px)'}),
            animate('.3s ease-in-out', style({opacity:'0', transform:'translateX(-200px)'}))
        ])
    ])
)


export const fallIn = (
     trigger('fallIn', [
        transition(':enter', [
            style({opacity: '0', transform: 'translateY(40px)'}),
            animate('.4s .2s ease-in-out', style({opacity: '1', transform: 'translateY(0)'}))
        ]),
        transition(':leave', [
            style({opacity:'1', transform:'translateX(0)'}),
            animate('.3s ease-in-out', style({opacity:'0', transform:'translateX(-200px)'}))
        ])
    ])
)


export const moveInLeft = (
     trigger('moveInLeft', [
        transition(':enter', [
            style({opacity:'0', transform: 'translateX(-100px)'}),
            animate('.6s .2s ease-in-out', style({ opacity:'1', transform:'transformX(0)'}))
        ])
    ])
)
