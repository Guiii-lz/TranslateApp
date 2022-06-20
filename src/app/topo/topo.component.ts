import { Component } from "@angular/core";

@Component({
    selector: 'app-topo', //podendo ser de várias formas [] - indica div, com . inicial indica class, aí deve ser indicado desse jeito.
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'] //pode conter mais de um arquivo de styles
    //styles: []; - Template de CSS e Estilização do template, usando nos colchetes entre aspas ou crase (CSS)
    //template:'' - Template inline que pode ser usado, entre aspas a paginação (HTML) a se seguir, mesma coisa de VIEW
}) 

export class TopoComponent {

    public titulo: String = "Aprendendo Inglês";
    
}