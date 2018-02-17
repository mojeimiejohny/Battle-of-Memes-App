// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components imports
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainModule} from './main/main.module';
import {StartModule} from './start/start.module';
import {BattlepvpModule} from './battlepvp/battlepvp.module';
import {BattleModule} from './battle/battle.module';


// module imports

// import serwisów


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    StartModule,
    BattlepvpModule,
    BattleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
