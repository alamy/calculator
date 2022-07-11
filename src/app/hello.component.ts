import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>Bem vindo!</h3>`,
  styles: [
    `h3 { font-family:  'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;   text-align: center}`,
  ],
})
export class HelloComponent {
  @Input() name: string;
}
