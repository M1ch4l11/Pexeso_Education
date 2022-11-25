import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { HomeComponent } from './home/home.component';     // Add your component here
import { AboutComponent } from './about/about.component';  // Add your component here   */
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaunchComponent } from './launch/launch.component';
import { MyDictComponent } from './my-dict/my-dict.component';
import { FormComponentComponent } from './form-component/form-component.component';

//This is my case 
const routes: Routes = [
    {path: '', redirectTo: 'form', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'products', component: FormComponentComponent},
    {path: 'coupens', component: MyDictComponent},
    {path: 'game', component: LaunchComponent},
    // {path:'form', component: FormComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }