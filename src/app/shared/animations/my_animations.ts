import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '98%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.6s', style({ opacity: '1' }))],
        { optional: true }
      ),

      query(
        ':leave',
        [style({ opacity: 1 }), animate('0.6s', style({ opacity: '0' }))],
        { optional: true }
      ),
    ]),
  ]),
]);

export const slideUpAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '98%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          animate('0.6s', style({ transform: 'translateY(0%)' })),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('0.6s', style({ transform: 'translateY(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const slideRightAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      style({ position: 'absolute', width: '98%' })
      //   {
      //     optional: fa,
      //   }
    ),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('0.6s', style({ transform: 'translateX(0%)', opacity: 1 })),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate(
            '0.6s',
            style({ transform: 'translateX(-100%)', opacity: 0 })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const zoomUpAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '98%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'scale(0) translateY(100%)' }),
          animate('0.6s', style({ transform: 'scale(1) translateY(0%)' })),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          style({ transform: 'scale(1) translateY(0%)' }),
          animate('0.6s', style({ transform: 'scale(0) translateY(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

export const zoomLeftAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '98%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'scale(0) translateX(100%)' }),
          animate('0.6s', style({ transform: 'scale(1) translateX(0%)' })),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          style({ transform: 'scale(1) translateX(0%)' }),
          animate('0.6s', style({ transform: 'scale(0) translateX(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);

function slideLeft() {
  return [
    query(':enter, :leave', style({ position: 'absolute', width: '98%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.6s', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.6s', style({ transform: 'translateX(-100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ];
}

function slideRight() {
  return [
    query(':enter, :leave', style({ position: 'absolute', width: '98%' }), {
      optional: true,
    }),

    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('0.6s', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),

      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('0.6s', style({ transform: 'translateX(100%)' })),
        ],
        { optional: true }
      ),
    ]),
  ];
}

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          //   top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}

export const slideLeftOrRightAnimation = trigger('routeAnimations', [
  // home-admin >>>>>>>>
  transition('home-admin => me-admin', slideTo('right')),
  transition('home-admin => skills-admin', slideTo('right')),
  transition('home-admin => formations-admin', slideTo('right')),
  transition('home-admin => experiences-admin', slideTo('right')),
  transition('home-admin => messages-admin', slideTo('right')),

  // me-admin >>>>>>>>
  transition('me-admin => skills-admin', slideTo('right')),
  transition('me-admin => formations-admin', slideTo('right')),
  transition('me-admin => experiences-admin', slideTo('right')),
  transition('me-admin => messages-admin', slideTo('right')),

  // skills-admin >>>>>>>>
  transition('skills-admin => formations-admin', slideTo('right')),
  transition('skills-admin => experiences-admin', slideTo('right')),
  transition('skills-admin => messages-admin', slideTo('right')),

  // formations-admin >>>>>>>>
  transition('formations-admin => experiences-admin', slideTo('right')),
  transition('formations-admin => messages-admin', slideTo('right')),

  // experiences-admin >>>>>>>>
  transition('experiences-admin => messages-admin', slideTo('right')),

  // <<<<<<<<<<< messages-admin
  transition('messages-admin => experiences-admin', slideTo('left')),
  transition('messages-admin => formations-admin', slideTo('left')),
  transition('messages-admin => skills-admin', slideTo('left')),
  transition('messages-admin => me-admin', slideTo('left')),
  transition('messages-admin => home-admin', slideTo('left')),

  // <<<<<<<<<<< experiences-admin
  transition('experiences-admin => formations-admin', slideTo('left')),
  transition('experiences-admin => skills-admin', slideTo('left')),
  transition('experiences-admin => me-admin', slideTo('left')),
  transition('experiences-admin => home-admin', slideTo('left')),

  // <<<<<<<<<<< formations-admin
  transition('formations-admin => skills-admin', slideTo('left')),
  transition('formations-admin => me-admin', slideTo('left')),
  transition('formations-admin => home-admin', slideTo('left')),

  // <<<<<<<<<<< skills-admin
  transition('skills-admin => me-admin', slideTo('left')),
  transition('skills-admin => home-admin', slideTo('left')),

  // <<<<<<<<<<< me-admin
  transition('me-admin => home-admin', slideTo('left')),
]);
