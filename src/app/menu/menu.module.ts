import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './component/menu.component';
import {WallComponent} from '../wall/component/wall.component';
import {BattleComponent} from '../battle/component/battle.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent,
  ]
})

export class MenuModule { }
