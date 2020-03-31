import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MiComponente } from './components/Componente-prueba/prueba.component';
import { GitSearchService } from './git-search.service';
import { GitUssersService } from './git-ussers.service';
import { GitSearchComponent } from './components/git-search/git-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitUssersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
