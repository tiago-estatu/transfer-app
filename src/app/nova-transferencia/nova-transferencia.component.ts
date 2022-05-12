import { TransferenciaService } from './../service/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.module';



@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private Service: TransferenciaService) { }

  valor: number = 0
  destino: number = 0
  lembrete: string = 'Insira um motivo para esta operação'

  param: Transferencia = {valor: this.valor, destino: this.destino, lembrete: this.lembrete}

  /*
  // PARA EMITIR O OUTPUT DOS VALORES VOCÊ VAI PRECISAR
  // CRIAR UM EVENT BYBING NO COMPONENTE QUE RECEBERÁ OS DADOS

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0
  destino: number = 0

  // EMITINDO O OBJ DOS DADOS DA TRANSFERENCIA
  transferir(){
    this.aoTransferir.emit({valor: this.valor, destino: this.destino})
    this.limparDados()
  }*/


  // recommended
    /*of([1,2,3]).subscribe((v) => console.info(v));
    // also recommended
    of([1,2,3]).subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    })*/

  transferir(){
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino, lembrete: this.lembrete}
    this.Service.adicionar(valorEmitir).subscribe({
      next: (v) => {console.log(v)},
      error: (e) => {console.error(e)},
      complete: () => {console.info('complete')}

    })
  }

  ngOnInit(): void {
    //this.deletarOperacao('2')
  }

  deletarOperacao(idOperacaoDelete){
    this.Service.deletar(idOperacaoDelete).subscribe({
      next: (res) => {console.log('resposta', res)}
    })
  }





  limparDados(){
    this.valor = 0
    this.destino = 0
  }
}


