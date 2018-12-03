import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "productos-angular-lab";

  datos = [
    { codigo: 1, descripcion: "papas", precio: 10.55 },
    { codigo: 1, descripcion: "manzanas", precio: 12.1 },
    { codigo: 1, descripcion: "melon", precio: 52.3 },
    { codigo: 1, descripcion: "cebollas", precio: 17 },
    { codigo: 1, descripcion: "calabaza", precio: 20 }
  ];
}
