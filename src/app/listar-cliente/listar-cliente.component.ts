import { Component, OnInit } from '@angular/core';
import {ClienteService, Cliente} from '../shared';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html'
})
export class ListarClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

clientes: Cliente[];

  ngOnInit() {
  	this.clienteService.listar().subscribe(
  			res=>{
  				this.clientes = res;
  			}
  		);
  }
}
