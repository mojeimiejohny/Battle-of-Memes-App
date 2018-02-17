import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainModule} from '../main/main.module';
import {MenuComponent} from '../menu/component/menu.component';
import {BattleComponent} from './component/battle.component';
import {WallComponent} from '../wall/component/wall.component';

@NgModule({
  imports: [
    CommonModule,
    MainModule
  ],
  declarations: [
    BattleComponent
  ],
  exports: [
    BattleComponent
  ]
})
export class BattleModule { }
