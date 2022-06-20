import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas!: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    //this.tentativas
    //this.coracoes.lenght
    if(this.tentativas != this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice-1].cheio = false;
    }
    console.log("Tentativas restantes: "+ this.tentativas)
    
  }

  ngOnInit(): void {
  }

}
