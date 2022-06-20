import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = Frases;
  public instrucao: String = "Traduza a frase";
  public response: string = "";
  
  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number=0;

  public tentativas: number=3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.atualizaRodada();
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    console.log("O Componente painel foi destruído");
  }

  atualizaResposta(response: Event): void{
    this.response = (<HTMLInputElement>response.target).value.toLowerCase();
    //console.log(this.response);
  }

  verificaResposta(): void{

    if(this.rodadaFrase.frasePtBr == this.response){
      alert('A tradução está correta!, Congratulations!');

      //trocar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      //Verificar suceso nas respostas
      if(this.rodada ===4){
        alert('Traduções concluídas com suceso!!! Congrats!!!');
        this.encerrarJogo.emit('vitoria')
      }


      //atualiza a frase da rodada se acertar
      this.atualizaRodada();
      


    }else{
      alert('A tradução está errada!')

      //diminuir tentivas
      this.tentativas--;

    if (this.tentativas === -1){
        alert("Você perdeu todas as tentativas!!!")
        this.encerrarJogo.emit('derrota')

      }
    }
  }

  public atualizaRodada():void{

    //define a frase da rodada com base na lógica
    this.rodadaFrase = this.frases[this.rodada];

    //limpar textarea
    this.response = "";
  }

}
