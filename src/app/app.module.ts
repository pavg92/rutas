import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { DadoComponent } from './dado/dado.component';
import { AcercaComponent } from './acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    DadoComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
