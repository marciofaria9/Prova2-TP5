import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'music', component: MusicComponent},
  {path: 'category', component: CategoryComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
