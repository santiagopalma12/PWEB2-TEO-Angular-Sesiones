import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DataService } from '../data';
import { Post } from '../Post';

@Component({
      selector: 'app-post-list',
      standalone: true,
      imports: [CommonModule],
      templateUrl: './post-list.html',
      styleUrls: ['./post-list.css']
    })
    export class PostListComponent implements OnInit {
      posts: Post[] = [];
      constructor(private dataService: DataService) { }
      ngOnInit(): void {
        this.dataService.getData().subscribe(data => this.posts = data);
      }
    }