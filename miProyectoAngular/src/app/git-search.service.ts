import { Injectable, Inject } from '@angular/core';
import { GitSearch} from './git-search'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GitSearchService {
  private cadenahttp: string;

    cachedValues: Array<{
      [query:string]:GitSearch
    }> = [];

      constructor( private http: HttpClient) {
      
    }

  gitSearch = (query: string, page:number)=>{
    let promise = new Promise <GitSearch>((resolve, reject) => {

      if(this.cachedValues[query+page]){
        resolve(this.cachedValues[query+page])
      }
      else{
        if (page === null)
            {
              this.cadenahttp = query;
            }
            else
            {
              this.cadenahttp = query + '&page=' + page;
            }
            console.log('CADENA ' + this.cadenahttp);

            this.http.get('https://api.github.com/search/repositories?q=' + this.cadenahttp)
            .toPromise()
            .then( (response) => {
                this.cachedValues[query+page] = (response as GitSearch);
                resolve(response as GitSearch)
            }, (error) => {
                reject(error);
            })
        }
    })
    return promise;
  }

}