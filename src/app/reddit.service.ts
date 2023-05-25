import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RedditPost } from './reddit-post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  // We need the URL
  private url: string = 'https://www.reddit.com/r/aww/.json'

  // When consuming the json, must set up a component that injects our service to then subscribe
  // Http requests (Using HttpClientModuleS)

  getPosts(): Observable<RedditPost> {
    return this.http.get<RedditPost>(this.url);
  }
}
