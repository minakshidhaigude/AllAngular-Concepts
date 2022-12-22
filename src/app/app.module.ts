import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { AgePipe } from './age.pipe';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { Travel1Component } from './travel1/travel1.component';
import { Travel2Component } from './travel2/travel2.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { RegisterComponent } from './register/register.component';
import { Covid19Component } from './covid19/covid19.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './product-dashboard/product-widget/product-widget.component';
import { DisplayComponent } from './display/display.component';
import { HeadersInterceptor } from './headers.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { FormComponent } from './form/form.component';
import { MystyleDirective } from './mystyle.directive';
import { ReversePipe } from './reverse.pipe';
import { AuthComponent } from './auth/auth.component';

import { PaginationComponent } from './pagination/pagination.component';
import { BasicComponent } from './basic/basic.component';
import { CustomPipe } from './custom.pipe';
import { SetbackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { HoverDirective } from './CustomDirective/hover.directive';
import { BetterhighlightDirective } from './CustomDirective/betterhighlight.directive';
import { RxjsoperatorComponent } from './rxjsoperator/rxjsoperator.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    AgePipe,
    TravelComponent,
    Travel1Component,
    Travel2Component,
    AboutComponent,
    LocationComponent,
    FeedbackComponent,
    RegisterComponent,
    Covid19Component,
    ViewchildComponent,
    CounterComponent,
    ProductDashboardComponent,
    ProductWidgetComponent,
    DisplayComponent,
    FormComponent,
    MystyleDirective,
    ReversePipe,
    AuthComponent,
    PaginationComponent,
    BasicComponent,
    CustomPipe,
    SetbackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    RxjsoperatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    AuthGuard,
    AdminGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
