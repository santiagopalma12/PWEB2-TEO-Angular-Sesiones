import { Routes } from '@angular/router';
import { About } from './about/about';
import { HelloWorld } from './hello-world/hello-world';
import { PostListComponent } from './post-list/post-list';
import { VideoListComponent } from './video-list/video-list';
import { ItemsComponent } from './components/items/items';

export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'about', component: About },
  { path: 'hello', component: HelloWorld },
  { path: 'videos', component: VideoListComponent },
  { path: 'cart', component: ItemsComponent }
];
