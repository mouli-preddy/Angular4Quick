import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TechologiesComponent } from './pages/techologies/techologies.component';
import { UsersComponent } from './pages/users/users.component';
import { RepoComponent } from './pages/repo/repo.component';

import { RepositoryService } from './services/repository.service';
import { RepoHeaderComponent } from './pages/repo/repo-header/repo-header.component';
import { LanguagesComponent } from './pages/techologies/languages/languages.component';
import { ProjectCardComponent } from './pages/repo/project-card/project-card.component';

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
    path: 'repo/:key',
    component: RepoComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechologiesComponent,
    UsersComponent,
    RepoComponent,
    RepoHeaderComponent,
    LanguagesComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FormsModule
  ],
  providers: [
    RepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
