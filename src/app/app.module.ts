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

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    PipesComponent,
    ReverseStrPipe,
    CvtPkrPipe,
    IdFlyPipe,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
