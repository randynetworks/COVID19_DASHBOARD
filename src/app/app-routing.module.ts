import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForOforComponent } from './for-ofor/for-ofor.component';
import { NationalComponent } from './national/national.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/national',
    pathMatch: 'full'
  },
  {
    path: 'national',
    component: NationalComponent
  },
  {
    path: '**',
    component: ForOforComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
