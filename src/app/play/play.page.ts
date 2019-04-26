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
  public playlist_selected;
  public first_beat: string;

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
        this.addClassic();
      });
    return await modal.present();
  }
  async savePlayList(playlist){
    this.playLists.push(playlist);
    this.storage.savePlaylistsToStorage(this.playLists); //saves beats array to storage
  }

  async addClassic(){
    this.playLists.push({
      name: 'Classical',
      beats: ['Four Seasons', 'Fur Elise']
    })
  }

  async addToPlayNow(playlist){
    this.playlist_selected = playlist;
    this.first_beat = 'Four Seasons';
  }

  ngOnInit(){
    this.playLists.push({
      name: 'Jazz',
      beats: ['Blues']
    })
  }
}