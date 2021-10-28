import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  //public categoriaService  : CategoriaService;

  constructor(private activatedRoute: ActivatedRoute) { }
  ionViewDidLoad(){
   // this.categoriaService.findall().subscribe(response => {console.log(response); }, error => {console.log(error);});
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }



}
