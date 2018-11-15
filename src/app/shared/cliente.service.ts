import { Injectable } from '@angular/core';

//imports para consumir o serviço rest
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Http, Headers, RequestOptions } from '@angular/http';

//import do aplicação
import { Cliente } from './cliente.model';
import {ZUPA_API} from './zupa-api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: Http) { }

	listar():Observable<Cliente[]>{
		return this.http.get(`${ZUPA_API}/clientes`).pipe(map(cliente=>cliente.json()))
	}

	salvar(cliente: Cliente): Observable<Cliente>{
		const headers: Headers = new Headers();
  		headers.append('Content-Type','application/json');
  		return this.http.post(`${ZUPA_API}/clientes`, JSON.stringify(cliente),
  								new RequestOptions({headers: headers}))
  							.pipe(map(response => response.json()));
	}
}
