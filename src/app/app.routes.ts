import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HabitatsComponent } from './components/habitats/habitats.component';
import { NotesComponent } from './components/notes/notes.component';
import { CapybarasComponent } from './components/capybaras/capybaras.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'habitats', component: HabitatsComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'capybaras', component: CapybarasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
