import { Component } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';
import { ModalController } from '@ionic/angular';
import { CrudPlaylistPage } from '../play/crud-playlist/crud-playlist.page'

@Component({
  selector: 'app-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss']
})
export class PlayPage {

  public playLists = [];

  constructor(public storage: StorageService, public modalController: ModalController) {
    this.storage.getPlaylists()
      .then((playData) => {
        if (playData)
          this.playLists = playData;
      });
  }

  async createNewPlaylistModal() {
    console.log("button clicked");

    const modal = await this.modalController.create({
      component: CrudPlaylistPage,
      // componentProps: { value: 123 }
    });
    modal.onDidDismiss()
      .then((data) => {
        const playlist = data['data']; // Here's your selected user!
        this.savePlayList(playlist);
      });
    return await modal.present();
  }
  async savePlayList(playlist){
    this.playLists.push(playlist);
    this.storage.savePlaylistsToStorage(this.playLists); //saves beats array to storage
  }

  ngOnInit(){
    this.playLists.push({
      name: 'Jazz'
    })
  }
}