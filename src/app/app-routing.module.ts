import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/components/sidesection/sidesection.component').then(c => c.SidesectionComponent) },
  { path: 'checkBox', loadComponent: () => import('./pages/components/check-box/check-box.component').then(c => c.CheckBoxComponent) },
  { path: 'choosehome', loadComponent: () => import('./pages/components/choose-home/choose-home.component').then(c => c.ChooseHomeComponent) },
  { path: 'dreamHouse', loadComponent: () => import('./pages/components/dream-house-form/dream-house-form.component').then(c => c.DreamHouseFormComponent) },
  { path: 'homeDescrption', loadComponent: () => import('./pages/components/home-descrption/home-descrption.component').then(c => c.HomeDescrptionComponent) },
  { path: 'sendingMessage', loadComponent: () => import('./pages/components/sendingmessage/sendingmessage.component').then(c => c.SendingmessageComponent) },
  { path: 'final', loadComponent: () => import('./pages/components/final/final.component').then(c => c.FinalComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


} 
