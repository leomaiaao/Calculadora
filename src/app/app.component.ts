import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  item!: string;
  valor: string = "";
  segVal: string = "";
  title = 'Calculadora';
  @ViewChild('resultado') resultado!: ElementRef;

  ngAfterViewInit(): void {
    this.insereNumero;
    this.insereAcao;
    this.limpaFormulario;
  }

  insereNumero(value: string) {
    if (this.valor.includes(this.item)) {
      this.segVal += value;
      this.resultado.nativeElement.value += value;

    } else {
      this.valor += value;
      this.resultado.nativeElement.value = this.valor;
    }
  }
  insereAcao(acao: string) {
    if(this.resultado.nativeElement.value.includes(this.item)){
      let comparador = this.resultado.nativeElement.value.slice(-4);
      if (this.resultado.nativeElement.value.includes(comparador)) {
        alert("Você já inseriu uma ação")
      } else {
        this.valor += acao;
        this.resultado.nativeElement.value += acao;
        this.item = acao;
      }
    }else{
      this.valor += acao;
      this.resultado.nativeElement.value +=  acao;
      this.resultado.nativeElement.value = this.resultado.nativeElement.value.trimStart();
      this.item = acao;
    }   
  }
  inserePonto(value: string) {
    if (this.valor === "") {
      this.resultado.nativeElement.value = "0."
    } else if (this.valor.includes(this.item)) {
      if (this.segVal.includes(".")) {
        alert("Você já adicionou um ponto ao segundo número")
      } else {
        this.segVal += value;
        this.resultado.nativeElement.value += value;
      }
    } else {
      if (this.valor.includes(".")) {
        alert("Você já adicionou um ponto")
      } else {
        this.valor += value;
        this.resultado.nativeElement.value = this.valor;
      }
    }
  }
  limpaFormulario() {
    this.valor ="";
    this.segVal = "";
    this.resultado.nativeElement.value = '';
  }
  emiteDadosParaBack() {
    let resFin = this.resultado.nativeElement.value;
    let values = resFin.split(this.item);
    let res1 = values[0];
    let res2 = values[1];
    let resultadoFinal;
    switch (this.item) {
      case " + ":
        resultadoFinal = Number(res1) + Number(res2);
        break;
      case " -":
        resultadoFinal = Number(res1) - Number(res2);
        break;
      case " x ":
        resultadoFinal = Number(res1) * Number(res2);
        break;
      case " / ":
        resultadoFinal = Number(res1) / Number(res2);
        break;
      case "^":
        resultadoFinal = Math.pow(res1, res2);
        break;
      case "% de ":
        resultadoFinal = res2 * res1 / 100;
        break;
    }
    this.resultado.nativeElement.value = resultadoFinal;

  }
}
