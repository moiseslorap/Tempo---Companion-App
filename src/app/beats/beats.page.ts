import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-beats',
  templateUrl: 'beats.page.html',
  styleUrls: ['beats.page.scss']
})
export class BeatsPage {
  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController) {}

  async alertReview() {
    const alert = await this.alertController.create({
      header: 'Write a review',
      inputs: [
        {
          name: 'Title',
          type: 'text',
          placeholder: 'Title'
        },
        {
          name: 'Comments',
          type: 'text',
          placeholder: 'Comments',
          id: 'description-box',
          //value: 'hello',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async openSettings() {
    const alert = await this.alertController.create({
      header: 'Write a review',
      inputs: [
        {
          name: 'Title',
          type: 'text',
          placeholder: 'Title'
        },
        {
          name: 'Comments',
          type: 'text',
          placeholder: 'Comments',
          id: 'description-box',
          //value: 'hello',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Add to playlist',
          icon: 'add-circle',
          handler: () => {
            console.log('Add clicked');
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
          console.log('Send to Device');
        }
      }, {
        text: 'Review',
        icon: 'star',
        handler: () => {
          this.alertReview();
          console.log('Review clicked');
        }
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
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

}
