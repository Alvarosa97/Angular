import { Injectable, Inject } from '@angular/core';
import { GitSearch} from './git-search'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, scan, mapTo, map, publishReplay, startWith, refCount, first, filter, switchMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class GitSearchService {
  private cadenahttp: string;
  cachedValue: string;

    cachedValues: Array<{
      [query:string]:GitSearch
    }> = [];
    search: Observable<GitSearch>;

    constructor( private http: HttpClient) {
      
    }

    gitSearch: Function = (query: string, page: number): Observable<GitSearch> => {

      if (page === null) {
        this.cadenahttp = query;
      }
      else {
        this.cadenahttp = query + '&page=' + page;
      }
  
        this.search = this.http.get<GitSearch>('https://api.github.com/search/repositories?q=' + this.cadenahttp).pipe(        
          publishReplay(1),
          refCount());
        this.cachedValue = query;      
      
      return this.search;
    }

}