import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Auth Service
import { AuthService } from "./shared/services/auth.service";

// Admin component
import { JwtModule } from '@auth0/angular-jwt';

// Components
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { PoetryComponent } from './components/poetry/poetry.component';
import { HomeComponent } from './components/home/home.component';
import { RequestPoetryComponent } from './components/request-poetry/request-poetry.component';
import { RequestLyricsComponent } from './components/request-lyrics/request-lyrics.component';
import { RequestFictionComponent } from './components/request-fiction/request-fiction.component';
import { FictionComponent } from './components/fiction/fiction.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MemoryComponent } from './components/memory/memory.component';
import { MoneyTalksBullshitWalksComponent } from './components/money-talks-bullshit-walks/money-talks-bullshit-walks.component';
import { CreatePoetryComponent } from './components/create-poetry/create-poetry.component';
import { EditPoetryComponent } from './components/edit-poetry/edit-poetry.component';
import { ViewPoetryComponent } from './components/view-poetry/view-poetry.component';
import { ListPoetryComponent } from './components/list-poetry/list-poetry.component';
import { CreateLyricsComponent } from './components/create-lyrics/create-lyrics.component';
import { ViewLyricsComponent } from './components/view-lyrics/view-lyrics.component';
import { EditLyricsComponent } from './components/edit-lyrics/edit-lyrics.component';
import { ListLyricsComponent } from './components/list-lyrics/list-lyrics.component';
import { CreateFictionComponent } from './components/create-fiction/create-fiction.component';
import { ViewFictionComponent } from './components/view-fiction/view-fiction.component';
import { EditFictionComponent } from './components/edit-fiction/edit-fiction.component';
import { ListFictionComponent } from './components/list-fiction/list-fiction.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    LyricsComponent,
    PoetryComponent,
    HomeComponent,
    RequestPoetryComponent,
    RequestLyricsComponent,
    RequestFictionComponent,
    FictionComponent,
    MemoryComponent,
    MoneyTalksBullshitWalksComponent,
    CreatePoetryComponent,
    EditPoetryComponent,
    ViewPoetryComponent,
    ListPoetryComponent,
    CreateLyricsComponent,
    ViewLyricsComponent,
    EditLyricsComponent,
    ListLyricsComponent,
    CreateFictionComponent,
    ViewFictionComponent,
    EditFictionComponent,
    ListFictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFontAwesomeModule,
    JwtModule.forRoot({}),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
