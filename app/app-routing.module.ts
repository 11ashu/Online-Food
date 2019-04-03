import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { ResturentDetailsComponent } from './resturent-details/resturent-details.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { ViewMenuItemComponent } from './view-menu-item/view-menu-item.component';
import { FaqComponent } from './faq/faq.component';
import { PolicyComponent } from './policy/policy.component';
import {AuthGuard} from "./guard/auth-guard.service";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'appsetting',
    component: AppsettingComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'App Setting' }
  },
  {
    path: 'editresdetails',
    component: ResturentDetailsComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'Resturent Detail' }
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'Category Detail' }
  },
  {
    path: 'addcategory',
    component: AddCategoryComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'Add Category' }
  },
  {
    path: 'menuitem',
    component: MenuItemComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'Menu Item' }
  },
  {
    path: 'additem',
    component: AddMenuItemComponent,
    canActivate: [AuthGuard],
    data: { title: 'Add Menu Item' }
  },
  {
    path: 'viewitem',
    component: ViewMenuItemComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'View Menu Item' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'Dashboard' }
  },
  {
    path: 'profile',
    component: AdminProfileComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'Profile' }
  },
  {
    path: 'faq',
    component: FaqComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'FAQ' }
  },
  {
    path: 'policy',
    component: PolicyComponent,
    canActivate: [AuthGuard] ,
    data: { title: 'Policy' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
