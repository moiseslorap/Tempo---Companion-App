import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crud-beat',
  templateUrl: './crud-beat.page.html',
  styleUrls: ['./crud-beat.page.scss'],
})
export class CrudBeatPage implements OnInit {

  public sections = [
    {
      id: 1,
      name: '',
      timeSignature: '',
      bpm: '',
      measures: ''
    }
  ]
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async increaseSectionCount(){
    var section = {
      id: 2,
      name: '',
      timeSignature: '',
      bpm: '',
      measures: ''
    }
    this.sections.push(section);
  }

  async close(){
    this.modalController.dismiss();

  }
}
