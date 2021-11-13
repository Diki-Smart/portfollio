import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { MessagesComponent } from './messages/messages.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'home-admin', component: HomeComponent, data: { linkIndex: 1 } },
  { path: 'me-admin', component: MeComponent, data: { linkIndex: 2 } },
  { path: 'skills-admin', component: SkillsComponent, data: { linkIndex: 3 } },
  {
    path: 'formations-admin',
    component: FormationsComponent,
    data: { linkIndex: 4 },
  },
  {
    path: 'experiences-admin',
    component: ExperiencesComponent,
    data: { linkIndex: 5 },
  },
  {
    path: 'messages-admin',
    component: MessagesComponent,
    data: { linkIndex: 6 },
  },

  { path: '', redirectTo: 'home-admin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BackofficeRoutingModule {}
