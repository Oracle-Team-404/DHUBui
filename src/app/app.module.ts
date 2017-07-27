import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PresentComponent } from './present/present.component';
import { PersonaComponent } from './persona/persona.component';
import { FileUploadModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PresentComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
