import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableroGeneralComponent } from './tablero-general/tablero-general.component';
import { CartasActualesComponent } from './tablero-general/cartas-actuales/cartas-actuales.component';
import { CartasProximasComponent } from './tablero-general/cartas-proximas/cartas-proximas.component';

@NgModule({
  declarations: [
    AppComponent,
    TableroGeneralComponent,
    CartasActualesComponent,
    CartasProximasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
