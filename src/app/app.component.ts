import { TransferenciaService } from './service/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-app';

  // transferencias: any[] = [];

  constructor(private Service: TransferenciaService){}

  // ESSE MÉTODO RECEBE O OBJ COM OS DADOS DA TRANSFERENCIA
  /*recebendoTransferencia($event){

    this.Service.adicionar($event)

    // O SPREAD OPERATOR VAI DESCONSTRUIR O OBJETO DEIXANDO APENAS OS VALUES E INCLUIR O VALUE DATE
    /*const novaTransferencia = {...$event, data: new Date()}
    this.transferencias.push(novaTransferencia);
    console.log(novaTransferencia)*/

    //console.log(novaTransferencia)
  //}
}
