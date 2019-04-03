import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'play',
        children: [
          {
            path: '',
            loadChildren: '../play/play.module#PlayPageModule'
          }
        ]
      },
      {
        path: 'beats',
        children: [
          {
            path: '',
            loadChildren: '../beats/beats.module#BeatsPageModule'
          }
        ]
      },
      {
        path: 'groups',
        children: [
          {
            path: '',
            loadChildren: '../groups/groups.module#GroupsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/play',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/play',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
