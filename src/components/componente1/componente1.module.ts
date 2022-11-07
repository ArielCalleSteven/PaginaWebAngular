import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {Componente1Component} from './componente1.component';
import { pathToFileURL } from 'url';
import { Componente2Component } from '../componente2/componente2.component';
import { Componente3Component } from '../componente3/componente3.component';

const routes: Routes = [
  {path: 'componente1', component: Componente1Component},
  {path: 'componente2', component: Componente2Component},
  {path: 'componente3', component: Componente3Component}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Componente1Module { }
