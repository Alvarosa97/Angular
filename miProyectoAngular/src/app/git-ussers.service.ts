import { Injectable } from "@angular/core";
import { GitUssers } from "./git-ussers";
import { HttpClient } from "@angular/common/http";
import "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GitUssersService {


  cachedValues: Array<{
    [query: string]: GitUssers;
  }> = [];

  constructor(private http: HttpClient) {
  }

  gitUssers = (query: string): Promise<GitUssers> => {
    let promise = new Promise<GitUssers>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/users?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response as GitUssers)
            }, (error) => {
                reject(error);
            })
        }
    })
    return promise;
  }
}