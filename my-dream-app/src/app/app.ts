
import { Component, OnInit } from '@angular/core';
import { DataService } from './data';
import { Post } from './Post';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  title = 'my-dream-app';
  name: string = "Santiago Enrique";
  age: number = 40;

  posts: Post[] = []; 

  constructor(private dataService: DataService) {} 

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}