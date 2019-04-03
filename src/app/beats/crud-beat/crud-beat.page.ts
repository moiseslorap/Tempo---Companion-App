import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crud-beat',
  templateUrl: './crud-beat.page.html',
  styleUrls: ['./crud-beat.page.scss'],
})
export class CrudBeatPage implements OnInit {

  name: string;
  timeSignature: string;
  bpm: string;
  measures: string;

  public beat = {
    id: 0,
    name: '',
    reviews: [],
    beats: []
  }
  public sections = [];
  public emptySection = {
    name: '',
    timeSignature: '',
    bpm: '',
    measures: ''
  }
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.pushEmptySection();
  }
  async pushEmptySection(){
      this.sections.push(this.emptySection);
  }

  async close(){
    this.modalController.dismiss();
  }
  async save(){
    this.sections.forEach(section => {
      this.beat.beats.push(section);
    });
    console.log(this.beat);
    this.modalController.dismiss(this.beat);
  }

  async saveToStorage(beat){

  }
}
