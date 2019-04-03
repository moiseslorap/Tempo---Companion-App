import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) {
    console.log('Hello StorageProvider Provider');
  }
  //get from storage with courses key
  public getBeats(){
    return this.storage.get('beats');
    //return this.courses;
  }
  
  //save to storage with course key
  public saveBeatsToStorage(beats){
    this.storage.set('beats', beats);
    //this.courses.push(course);
    //console.log(this.courses);
  }

  //get from storage with assignments key
  public getPlaylists(){
    return this.storage.get('playlists');
  }

  //save to storage with assignments key
  public savePlaylistsToStorage(playlists){
    this.storage.set('playlists', playlists);
  }

  //get from storage with assignments key
  public getGroups(){
    return this.storage.get('groups');
  }

  //save to storage with assignments key
  public saveGroupsToStorage(groups){
    this.storage.set('groups', groups);
  }
  //buildings setter
  // public setBuildings(){
  //   return this.buildings;
  // }
   
}
