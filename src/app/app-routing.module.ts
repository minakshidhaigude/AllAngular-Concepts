import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminGuard } from './admin.guard';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { BasicComponent } from './basic/basic.component';
import { BindingComponent } from './binding/binding.component';
import { Covid19Component } from './covid19/covid19.component';
import { DisplayComponent } from './display/display.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormComponent } from './form/form.component';
import { LocationComponent } from './location/location.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { RxjsoperatorComponent } from './rxjsoperator/rxjsoperator.component';
import { TravelComponent } from './travel/travel.component';
import { Travel1Component } from './travel1/travel1.component';
import { Travel2Component } from './travel2/travel2.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: 'binding', component: BindingComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'covid', component: Covid19Component },
  { path: 'viewchild', component: ViewchildComponent },
  { path: 'product-dashboard', component: ProductDashboardComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'form', component: FormComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'rxjs', component: RxjsoperatorComponent },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'location', outlet: 'map', component: LocationComponent },
      { path: 'feedback', outlet: 'feed', component: FeedbackComponent },
    ],
  },
  {
    path: 'travel/:id',
    component: TravelComponent,
    //canActivate: [AuthGuard],
    canActivateChild: [AdminGuard],
    children: [
      //{ path: '', redirectTo: 'travel1', pathMatch: 'full' },
      { path: 'travel1', component: Travel1Component },
      { path: 'travel2', component: Travel2Component },
    ],
  },
  { path: '**', redirectTo: 'binding' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
