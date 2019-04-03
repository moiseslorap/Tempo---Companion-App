import { Component } from '@angular/core';
import { ActionSheetController, AlertController, PopoverController, ToastController, ModalController } from '@ionic/angular';
import { AddToPlaylistComponent } from './add-to-playlist/add-to-playlist.component';
import { ReviewComponent } from './review/review.component';
import { CrudBeatPage } from './crud-beat/crud-beat.page'
import {StorageService} from '../services/storage/storage.service'
@Component({
  selector: 'app-beats',
  templateUrl: 'beats.page.html',
  styleUrls: ['beats.page.scss']
})
export class BeatsPage {

  public beatsList = [
  ]

  constructor(public storage: StorageService, public modalController: ModalController, public toastController: ToastController, public popoverController: PopoverController, public actionSheetController: ActionSheetController, public alertController: AlertController) {
    this.storage.getBeats()
      .then((beats) => {
        if (beats)
          this.beatsList = beats;
      });
  }

  async createNewBeatModal(){
    console.log("button clicked");

    const modal = await this.modalController.create({
      component: CrudBeatPage,
      // componentProps: { value: 123 }
    });
    modal.onDidDismiss()
      .then((data) => {
        const beat = data['data']; // Here's your selected user!
        this.saveBeat(beat);
    });
    console.log(this.beatsList);
    return await modal.present();
  }

  async saveBeat(beat){
    this.beatsList.push(beat);
    this.storage.saveBeatsToStorage(this.beatsList); //saves beats array to storage
  }

  async sentToSmartWatchToast(beat) {
    const toast = await this.toastController.create({
      message: beat.name + ' has been sent to device',
      duration: 2000
    });
    toast.present();
  }

  async deletedBeatToast(beat) {
    const toast = await this.toastController.create({
      message: beat.name + ' has been deleted',
      duration: 1000
    });
    toast.present();
  }

  async reviewBeatPopover() {
    const popover = await this.popoverController.create({
      component: ReviewComponent,
      animated: true,
      showBackdrop: true
    });
  
    await popover.present();
  }

  async addToPlaylistPopover() {
    const popover = await this.popoverController.create({
      component: AddToPlaylistComponent,
      animated: true,
      showBackdrop: true
    });
  
    await popover.present();
  }

  async openSettings() {
    // const alert = await this.alertController.create({
    //   header: 'Write a review',
    //   inputs: [
    //     {
    //       name: 'Title',
    //       type: 'text',
    //       placeholder: 'Title'
    //     },
    //     {
    //       name: 'Comments',
    //       type: 'text',
    //       placeholder: 'Comments',
    //       id: 'description-box',
    //       //value: 'hello',
    //     },
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: () => {
    //         console.log('Confirm Cancel');
    //       }
    //     }, {
    //       text: 'Ok',
    //       handler: () => {
    //         console.log('Confirm Ok');
    //       }
    //     }
    //   ]
    // });

    // await alert.present();
  }

  async removeBeat(beat) {
    for (let index = 0; index < this.beatsList.length; index++) {
      if(this.beatsList[index] == beat){
        this.beatsList.splice(index, 1);
      }      
    }
  }
  async presentActionSheet(beat) {
    const actionSheet = await this.actionSheetController.create({
      header: beat.name,
      buttons: [
        {
          text: 'Add to playlist',
          icon: 'add-circle',
          handler: () => {
            this.addToPlaylistPopover();
          }
        },
        {
          text: 'Modify',
          icon: 'create',
          handler: () => {
            console.log('Modify clicked');
          }
        },
          {
        text: 'Send to smartwatch',
        icon: 'send',
        handler: () => {
          this.sentToSmartWatchToast(beat);
          console.log('Send to Device');
        }
      }, {
        text: 'Review',
        icon: 'star',
        handler: () => {
          this.reviewBeatPopover();
          console.log('Review clicked');
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.removeBeat(beat);
          this.deletedBeatToast(beat);
          console.log('Delete clicked');
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    console.log(this.beatsList);
  }

}
