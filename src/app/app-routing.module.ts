import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessnewsComponent } from './bussinessnews/bussinessnews.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [

  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //technews
  {path:'bussiness',component:BussinessnewsComponent}, //bussinessn
  {path:'feedback',component:FeedbackComponent}  //feedback
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
