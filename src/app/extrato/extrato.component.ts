import { TransferenciaService } from './../service/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.module';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  constructor(private Service: TransferenciaService) { }

  // @Input() transferencias: any[] = [];
  transferencias: any[] = [];

  ngOnInit(): void {
    // tranfiro os dados armazenados no array [this.Service.transferencias]
    // para a variável local transferencias: any[] = [];


    this.Service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias)
      this.transferencias = transferencias;
    })
  }
}
