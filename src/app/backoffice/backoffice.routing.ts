import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'me', component: MeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'messages', component: MessagesComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BackofficeRoutingModule {}
