import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../services/api';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ToastController } from '@ionic/angular/standalone';

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
      this.provider.Api(dados, 'produto/inserir.php').subscribe(
        data => {
          this.router.navigate(['produto'])
        }
      )
    })
  }

  async mensagemSucesso(){
    const toast = await this.toastController.create({
      message: 'Your settings has been saved.',
      duration:2000
    });
    toast.present();
  }

}
