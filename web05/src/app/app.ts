import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraBusca } from './barra-busca/barra-busca';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraBusca],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web04');
}
