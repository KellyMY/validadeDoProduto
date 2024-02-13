import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonModal } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
});

@ViewChild(IonModal);
export class PhotoPage implements OnInit {
  modal= IonModal;
  constructor(public photoService: PhotoService) { }




  message: string = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';

  // addPhotoToGallery() {
  //   this.photoService.addNewToGallery();
  // }
  ngOnInit() {
    this.photoService.addNewToGallery();

    //  this.photoService.loadSaved();
  }

  savePhoto() {
    console.log("djk")
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
