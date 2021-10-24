import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { MessagesComponent } from './messages/messages.component';
import { BackofficeRoutingModule } from './backoffice.routing';

@NgModule({
  declarations: [
    HomeComponent,
    MeComponent,
    SkillsComponent,
    FormationsComponent,
    ExperiencesComponent,
    MessagesComponent,
  ],
  imports: [
    BackofficeRoutingModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class BackofficeModule { }
