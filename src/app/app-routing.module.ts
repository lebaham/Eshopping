import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { SettingsComponent } from './settings/settings.component';
import { SetproductComponent } from './setproduct/setproduct.component';

const routes: Routes =[
  {path: '', redirectTo: 'aboutus', pathMatch: 'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'setproduct', component: SetproductComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', redirectTo: 'aboutus', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
