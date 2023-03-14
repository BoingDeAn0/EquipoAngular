import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente1Component } from './Componentes/componente1/componente1.component';
import { CompoDylanComponent } from './Componentes/compo-dylan/compo-dylan.component';
import { CompoRobertoComponent } from './Componentes/compo-roberto/compo-roberto.component';
import { CompoMiguelComponent } from './Componentes/compo-miguel/compo-miguel.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    CompoDylanComponent,
    CompoRobertoComponent,
    CompoMiguelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
