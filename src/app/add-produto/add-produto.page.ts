import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.page.html',
  styleUrls: ['./add-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddProdutoPage implements OnInit {

  nome: string = "";
  data: string = "";
  local: string = "";
  imagem: string = "";

  // imagem_gerada: string = photo_blob.get('data');
  constructor() { }

  ngOnInit() {
  }

}
