import { Routes } from '@angular/router';
import { About } from './about/about';
import { HelloWorld } from './hello-world/hello-world';
import { PostListComponent } from './post-list/post-list';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./app').then(m => m.AppComponent)
  },
  { path: '', component: PostListComponent },
  { path: 'about', component: About },
  { path: 'hello', component: HelloWorld },
];
