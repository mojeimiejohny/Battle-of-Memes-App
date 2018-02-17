import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {WallComponent} from '../wall/component/wall.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    WallComponent]
})
export class MainModule {
}
