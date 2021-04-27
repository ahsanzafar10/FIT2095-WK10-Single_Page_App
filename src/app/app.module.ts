import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { UdpateactorComponent } from './udpateactor/udpateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { Actor2movieComponent } from './actor2movie/actor2movie.component';
import { Error404Component } from './error404/error404.component';


const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UdpateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  { path: "listmovies", "component": ListmovieComponent},
  { path: "addmovie", component: AddmovieComponent},
  {path: "deletemovie", component: DeletemovieComponent},
  {path: "actor2movie", component: Actor2movieComponent},
  {path: '**', component:Error404Component}
];


@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UdpateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmovieComponent,
    Actor2movieComponent,
    Error404Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes, {useHash:true}), HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
