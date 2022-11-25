import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-listar-selecao",
  templateUrl: "./listar-selecao.component.html",
  styleUrls: ["./listar-selecao.component.css"],
})
export class ListarSelecaoComponent implements OnInit {
  
  constructor(private http: HttpClient) {}
  Selecoes!: Selecao[];
  

  ngOnInit(): void {
    this.http
      .get<Selecao[]>("https://localhost:5001/api/selecao/listar")
      .subscribe({
        next: (selecoes) => {
          this.Selecoes = selecoes;
        }
      })
  }
  palpitar(id: number): void{
  }
}
