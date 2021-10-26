import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MessagesComponent } from './messages/messages.component';
import { BackofficeRoutingModule } from './backoffice.routing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    MeComponent,
    SkillsComponent,
    FormationsComponent,
    ExperiencesComponent,
    MessagesComponent,
  ],
  imports: [CommonModule, BackofficeRoutingModule],
  exports: [RouterModule],
  providers: [],
})
export class BackofficeModule {}
