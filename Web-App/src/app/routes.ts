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
        loadChildren: () => import('./pages/impressum').then(m => m.ImpressumgModule)
    }
]