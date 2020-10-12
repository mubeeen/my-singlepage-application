import { BrowserModule } from '@angular/platform-browser';
import { Inject, Injector, NgModule } from '@angular/core';

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
import { TemplateComponent } from './template/template.component';
import { ElementsComponent } from './angular-elements/elements/elements.component';
import { GreetComponent } from './angular-elements/greet/greet.component';
import { createCustomElement } from '@angular/elements';
import { MappingComponent } from './angular-elements/mapping/mapping.component';
import { MappingChildComponent } from './angular-elements/mapping-child/mapping-child.component';

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
    DynamicComponentComponent,
    TemplateComponent,
    ElementsComponent,
    GreetComponent,
    MappingComponent,
    MappingChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  entryComponents: [GreetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(injector: Injector)
  {
    const el = createCustomElement(GreetComponent, { injector: injector});
    customElements.define('app-greet',el);
  }

}
