import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../pipes/safe-pipe'; 

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [CommonModule, SafePipe], 
  templateUrl: './video-list.html',
  styleUrls: ['./video-list.css']
})
export class VideoListComponent {
  title = 'Últimos Videos de Marvel';
  videos = [
    { name: 'Wakanda Forever (2022) Marvel Tráiler Oficial Español', videoId: 'R93aSO-3LfA' },
    { name: 'Marvel Studios\' Thor: Love and Thunder | Official Trailer', videoId: 'Go8nTmfrQd8' },
    { name: 'Doctor Strange in the Multiverse of Madness | Official Trailer', videoId: 'aWzlQ2N6qqg' }
  ];

  getEmbedUrl(videoId: string) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
}