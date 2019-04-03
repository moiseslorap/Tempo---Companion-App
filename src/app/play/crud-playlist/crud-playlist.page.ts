import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crud-playlist',
  templateUrl: './crud-playlist.page.html',
  styleUrls: ['./crud-playlist.page.scss'],
})
export class CrudPlaylistPage implements OnInit {

  public beatsList = [];
  public playlists = [];
  public playlist = {
    name: '',
    beats: []
  }
  constructor(public storage: StorageService, public modalController: ModalController) {
    this.storage.getBeats()
      .then((beats) => {
        if (beats)
          this.beatsList = beats;
      });
   }

   async close(){
    this.modalController.dismiss();
  }
  async save(){
    
    this.modalController.dismiss(this.playlist);
  }

  ngOnInit() {
  }

}
