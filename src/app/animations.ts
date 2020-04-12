import {
    trigger,
    transition, animate, style, query, group, keyframes
} from '@angular/animations';

export const fader =
    trigger('routeAnimation', [
        transition('* <=> *', [
            // Set a default  style for enter and leave
            query(':enter', [
                style({
                    position: 'absolute',
                    width: '100%',
                    opacity: 0,
                }),
            ], { optional: true }),
            query(':leave', [
                style({
                    position: 'absolute',
                    width: '100%',
                    opacity: 1,
                }),
            ], { optional: true }),
            // Animate the enter page in
            group([
                query(':enter', [
                    animate('800ms ease', keyframes([
                        style({ opacity: 0, offset: 0 }),
                        style({ opacity: 0.1, offset: 0.2 }),
                        style({ opacity: 0.2, offset: 0.3 }),
                        style({ opacity: 0.3, offset: 0.4 }),
                        style({ opacity: 0.4, offset: 0.5 }),
                        style({ opacity: 0.5, offset: 0.6 }),
                        style({ opacity: 0.6, offset: 0.7 }),
                        style({ opacity: 0.7, offset: 0.8 }),
                        style({ opacity: 0.8, offset: 0.9 }),
                        style({ opacity: 1, offset: 1 }),
                    ])),
                ], { optional: true }),
                // Animate the leave page in
                query(':leave', [
                    animate('600ms ease', keyframes([
                        style({ opacity: 1, offset: 0 }),
                        style({ opacity: 0.9, offset: 0.2 }),
                        style({ opacity: 0.8, offset: 0.3 }),
                        style({ opacity: 0.7, offset: 0.4 }),
                        style({ opacity: 0.6, offset: 0.5 }),
                        style({ opacity: 0.5, offset: 0.6 }),
                        style({ opacity: 0.4, offset: 0.7 }),
                        style({ opacity: 0.3, offset: 0.8 }),
                        style({ opacity: 0.1, offset: 0.9 }),
                        style({ opacity: 0, offset: 1 }),
                    ])),
                ], { optional: true })
            ])

        ]),
    ]);
