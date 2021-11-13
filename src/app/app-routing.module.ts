import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./backoffice/backoffice.module').then((m) => m.BackofficeModule),
    data: { linkIndex: 1 },
  },
  { path: 'home', component: HomeComponent, data: { linkIndex: 0 } },

  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
