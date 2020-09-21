import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalComponent } from './national/national.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'national',
    component: NationalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
