import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CategoriaDto } from "src/models/categoria.dto";
import { API_CONFIG } from "../config/api.config";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '../../interceptors/error-interceptor';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  itens : CategoriaDto[];
  constructor( public http: HttpClient) { }

  ngOnInit() {
    
    this.http.get<CategoriaDto[]>(API_CONFIG.categorias).subscribe(response => {
      this.itens = response}
      );
  }

}
