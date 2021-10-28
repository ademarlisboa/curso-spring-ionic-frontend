import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoriaDto } from "src/models/categoria.dto";
import { API_CONFIG } from "../config/api.config";

@Injectable()
export class CategoriaService{
    constructor(public http: HttpClient){

    }
    findall() : Observable<CategoriaDto[]>{
        //return this.http.get<CategoriaDto[]>(`${API_CONFIG.baseurl}/categorias`);
        alert('chamada url');
        return this.http.get<CategoriaDto[]>(`http://localhost:8080/categorias`);

    }
}