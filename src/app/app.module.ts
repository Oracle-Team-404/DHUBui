import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PresentComponent } from './present/present.component';
import { PersonaComponent } from './persona/persona.component';
import { FileUploadModule } from 'primeng/primeng';
import { DataTableModule, SharedModule} from 'primeng/primeng';
import { DemoService } from './demo/demo.service';
import { HttpModule } from '@angular/http'
import { ChartModule } from 'primeng/primeng';

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
    FileUploadModule,
    DataTableModule,
    SharedModule,
    HttpModule,
    ChartModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
