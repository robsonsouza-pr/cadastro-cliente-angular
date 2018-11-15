import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListarClienteComponent } from './listar-cliente';
import { CadastrarClienteComponent } from './cadastrar-cliente';

import {ClienteService } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ListarClienteComponent,
    CadastrarClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
