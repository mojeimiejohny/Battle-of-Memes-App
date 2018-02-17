import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattlepvpComponent } from './component/battlepvp.component';
import {MainModule} from '../main/main.module';

@NgModule({
  imports: [
    CommonModule,
    MainModule
  ],
  declarations: [BattlepvpComponent]
})
export class BattlepvpModule { }
