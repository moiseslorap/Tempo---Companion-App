import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'crud-beat', loadChildren: './beats/crud-beat/crud-beat.module#CrudBeatPageModule' },
  { path: 'crud-playlist', loadChildren: './play/crud-playlist/crud-playlist.module#CrudPlaylistPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
