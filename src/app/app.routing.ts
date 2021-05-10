import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { CartaComponent } from './components/carta/carta.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
  { path: '',                 component: CartaComponent },
	{ path: '**',               component: ErrorComponent }
	];

// Exportar el modulo de routing
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( appRoutes ),
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }