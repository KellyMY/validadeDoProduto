import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD
=======
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../services/api';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ToastController } from '@ionic/angular/standalone';
>>>>>>> c2f1482a0da3f42c7b9b65d8f98a7266af8786d4

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
<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  constructor(
    private router: Router,
    private provider: Api,
    private actRouter: ActivatedRoute,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.mensagemSucesso();
    
    this.actRouter.params.subscribe((data: any) => {

    });

  }

  cadastrar() {
    return new Promise(resolve => {
      let dados = {
        nome: this.nome,
        data: this.data,
        local: this.local,
        imagem: this.imagem
      }
      this.provider.Api(dados, 'inserir.php').subscribe(
        data => {
          this.router.navigate(['produto'])
        }
      )
    })
  }

  async mensagemSucesso(){
    const toast = await this.toastController.create({
      message: 'Your settings has been saved.',
      duration:2000,
      color: 'success'
    });
    toast.present();
>>>>>>> c2f1482a0da3f42c7b9b65d8f98a7266af8786d4
  }

}
