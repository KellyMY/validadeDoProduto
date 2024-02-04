import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.page.html',
  styleUrls: ['./detalhe-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetalheProdutoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redicionaProduto(){
    this.router.navigate(['produto']);
    window.location.href = "./produto"
  }
}
