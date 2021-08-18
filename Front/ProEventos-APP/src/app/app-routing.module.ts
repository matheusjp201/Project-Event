import { EventosComponent } from './components/eventos/eventos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContatosComponent } from './components/contatos/contatos.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'eventos', component: EventosComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'palestrantes', component: PalestrantesComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'contatos', component: ContatosComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full'},//<=qualquer coisa que
  // for escrita sem ser os que estão em rotas, vai direto para o dashboar
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
