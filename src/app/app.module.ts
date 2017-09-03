import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TechologiesComponent } from './pages/techologies/techologies.component';
import { UsersComponent } from './pages/users/users.component';
import { RepoComponent } from './pages/repo/repo.component';

const routes = RouterModule.forRoot([
  { path: '', redirectTo: '/technologies', pathMatch: 'full' },
  {
    path: 'technologies',
    component: TechologiesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'repo',
    component: RepoComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechologiesComponent,
    UsersComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
