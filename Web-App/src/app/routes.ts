import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/landing').then(m => m.LandingModule)
    },
    {
        path: 'impressum',
        pathMatch: 'full',
        redirectTo: 'imprint'
    },
    {
        path: 'imprint',
        pathMatch: 'full',
        loadChildren: () => import('./pages/imprint').then(m => m.ImprintModule)
    },

    {
        path: '404',
        loadChildren: () =>
          import('./pages/not-found').then((m) => m.NotFoundModule),
      },
      { path: '**', redirectTo: '/404' },
]