import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, homeOutline, homeSharp, peopleOutline, peopleSharp, settingsOutline,
  settingsSharp,pizzaOutline,
  pizzaSharp,cameraOutline,
  cameraSharp
} from 'ionicons/icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutoPage implements OnInit {

  constructor(private router:Router) { 
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, homeOutline, homeSharp, peopleOutline, peopleSharp , settingsOutline,
      settingsSharp,pizzaOutline,
      pizzaSharp, cameraOutline,
      cameraSharp});
  }

  ngOnInit() {
  }

  redicionaDetalhes(){
    this.router.navigate(['detalhe-produto']);
    // window.location.href = "./detalhe-produto"
  }

  redirecionaCamera(){
    this.router.navigate(['photo']);
  }

}
