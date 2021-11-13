import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackofficeRoutingModule } from './backoffice.routing';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FormationsComponent } from './formations/formations.component';
import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { MessagesComponent } from './messages/messages.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    HomeComponent,
    MeComponent,
    SkillsComponent,
    FormationsComponent,
    ExperiencesComponent,
    MessagesComponent,
  ],
  imports: [CommonModule, RouterModule, BackofficeRoutingModule],
  exports: [RouterModule],
  providers: [],
})
export class BackofficeModule {}
