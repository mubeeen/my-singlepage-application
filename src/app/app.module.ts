import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { CvtPkrPipe } from './cvt-pkr.pipe';
import { IdFlyPipe } from './id-fly.pipe';
import { HooksComponent } from './hooks/hooks.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ComponentInteractionChildComponent } from './component-interaction-child/component-interaction-child.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    PipesComponent,
    ReverseStrPipe,
    CvtPkrPipe,
    IdFlyPipe,
    HooksComponent,
    ViewEncapsulationComponent,
    ComponentInteractionComponent,
    ComponentInteractionChildComponent,
    DynamicComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
