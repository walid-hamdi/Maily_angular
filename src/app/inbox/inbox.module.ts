import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailReplayComponent } from './email-replay/email-replay.component';
import { EmailShowComponent } from './email-show/email-show.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailIndexComponent,
    EmailReplayComponent,
    EmailShowComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
