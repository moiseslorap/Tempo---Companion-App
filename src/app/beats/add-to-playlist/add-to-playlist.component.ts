import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-add-to-playlist',
  templateUrl: './add-to-playlist.component.html',
  styleUrls: ['./add-to-playlist.component.scss'],
})
export class AddToPlaylistComponent implements OnInit {
  public playlists = [
    {
      id: 1,
      name: 'Classical Music'
    },
    {
      id: 2,
      name: 'Jazz'
    },
    {
      id: 3,
      name: 'Blues'
    }
  ]
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {

  }

  close(){
    this.popoverController.dismiss();
  }

  submit(){
    this.popoverController.dismiss();
  }

}
