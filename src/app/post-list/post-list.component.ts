import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {title: 'First Post', content: 'This is the first post\'s content'},
    {title: '2nd Post', content: 'This is the 2nd post\'s content'},
    {title: '3rd Post', content: 'This is the 3rd post\'s content'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
