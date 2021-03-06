import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: 'groups.page.html',
  styleUrls: ['groups.page.scss']
})
export class GroupsPage {
  constructor(public actionSheetController:ActionSheetController){}

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
