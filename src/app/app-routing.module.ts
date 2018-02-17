import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainComponent} from './main/main.component';
import {StartComponent} from './start/start.component';
import {BattlepvpComponent} from './battlepvp/component/battlepvp.component';
import {BattleComponent} from './battle/component/battle.component';
import {AboutComponent} from './about/component/about.component';
import {CreateaccountComponent} from './createaccount/component/createaccount.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'main', component: MainComponent },
  { path: 'battlepvp', component: BattlepvpComponent },
  { path: 'battle', component: BattleComponent }
];

@NgModule({
  declarations: [ StartComponent],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
