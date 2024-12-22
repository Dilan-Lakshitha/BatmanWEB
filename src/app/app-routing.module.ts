import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';

const routes: Routes = [
  {path: '',component:DashboardComponent},
  {path:'profile',component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
