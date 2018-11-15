import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarClienteComponent } from './listar-cliente';
import { CadastrarClienteComponent } from './cadastrar-cliente';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: 'clientes/listar', 
		pathMatch: 'full' 
	},
	{ 
		path: 'clientes/listar', 
		component: ListarClienteComponent 
	},
		{ 
		path: 'clientes/cadastrar', 
		component: CadastrarClienteComponent 
	}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
