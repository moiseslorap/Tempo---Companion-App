import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToPlaylistComponent } from './beats/add-to-playlist/add-to-playlist.component';
import { ReviewComponent } from './beats/review/review.component';
import { CrudBeatPageModule } from './beats/crud-beat/crud-beat.module';
import { CrudPlaylistPageModule } from './play/crud-playlist/crud-playlist.module'
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent, AddToPlaylistComponent, ReviewComponent],
  entryComponents: [AddToPlaylistComponent, ReviewComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot(), CrudBeatPageModule, CrudPlaylistPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
