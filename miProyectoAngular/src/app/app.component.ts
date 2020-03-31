import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUssersService } from './git-ussers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit {
  constructor (private GitSearchService : GitSearchService) {

  }
  ngOnInit() {
    
  }
  title = 'app is functional!';
}
/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitUssersService]
})
export class AppComponent implements OnInit {
  constructor (private GitUsserService : GitUssersService) {

  }
  ngOnInit() {
    this.GitUsserService.gitUssers('Alvarosa97').then( (response) => {
      alert("Numero total de usuarios:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    })
  }
  title = 'Esta app funciona!';
}
*/