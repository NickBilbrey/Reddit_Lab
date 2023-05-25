import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { RedditPost } from '../reddit-post';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor(private redditService: RedditService){}

  redditPosts?: RedditPost;

  //life cycle hook
  ngOnInit(): void {
    this.getAllPosts();
  }

  // methods to use the service
  getAllPosts() {
    this.redditService.getPosts().subscribe( result => this.redditPosts = result);
  }

}
