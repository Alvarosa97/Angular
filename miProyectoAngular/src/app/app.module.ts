import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MiComponente } from './components/Componente-prueba/prueba.component';
//import { GitSearchService } from './git-search.service';
import { GitUssersService } from './git-ussers.service';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GitUssersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
