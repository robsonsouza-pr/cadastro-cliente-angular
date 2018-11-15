import { Component, OnInit } from '@angular/core';
import {Cliente, ClienteService } from '../shared';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html'
})
export class CadastrarClienteComponent implements OnInit {

  constructor(private clienteService : ClienteService) { }

  cliente: Cliente;
  tipos: string[]

  ngOnInit() {
  	this.cliente = new Cliente();
  	this.tipos = ["A", "B", "C"];
  	this.cliente.tipo = this.tipos[0];
  }

  salvar(): void{
  	this.clienteService.salvar(this.cliente).subscribe(res => { let retorno:any = res;
  			console.log(retorno);
  		});
  }

}
