import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-crud-beat',
  templateUrl: './crud-beat.page.html',
  styleUrls: ['./crud-beat.page.scss'],
})
export class CrudBeatPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  public sections = [
    {
      id: 1,
      name: '',
      timeSignature: '',
      bpm: '',
      measures: ''
    }
  ]
  constructor() { }

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
}
