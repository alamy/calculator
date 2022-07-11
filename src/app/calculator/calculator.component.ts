import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}
  public item: number;
  public valor: number;
  public result: number;
  ngOnInit() {}

  estados: any[] = [
    { id: 1, title: 'SP', label: 'São Paulo', value: 6.25 },
    { id: 2, title: 'RJ', label: 'Rio de Janeiro', value: 6.25 },
  ];

  enviar() {
    this.result = 100 * (this.item * this.valor);
  }
}
