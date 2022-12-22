import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { JuegoComponent } from './juego/juego.component';

const routes: Routes = [
  {path: 'juego', component: JuegoComponent},
  {path: 'acerca', component: AcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
