import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close(){
    this.popoverController.dismiss();
  }

  submit(){
    this.popoverController.dismiss();
  }

}
