import { Observable } from 'rxjs';
import { Transferencia } from './../models/transferencia.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia:any = [];
  private ulr = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {}


  // adiciono uma nova tranferência
  adicionar(transferencia: Transferencia){
    this.datarOperacao(transferencia)
    return this.httpClient.post(this.ulr, transferencia)
  }

  // deletar operação
  deletar(idOpracao){
    const urlDelete = `${this.ulr}/${idOpracao}`
    console.log(urlDelete)
    return this.httpClient.delete(urlDelete)
  }

  // incluir a data para uma operação
  datarOperacao(transferencia:any) {
    transferencia.data = new Date()
  }

  // retorno todas tranferências
  todas(): Observable <Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.ulr)
  }


}
