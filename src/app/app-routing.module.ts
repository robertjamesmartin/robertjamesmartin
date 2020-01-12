import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { PoetryComponent } from './components/poetry/poetry.component';
import { FictionComponent } from './components/fiction/fiction.component';
import { HomeComponent } from './components/home/home.component';
import { RequestLyricsComponent } from './components/request-lyrics/request-lyrics.component';
import { RequestPoetryComponent } from './components/request-poetry/request-poetry.component';
import { RequestFictionComponent } from './components/request-fiction/request-fiction.component';

// CRUD Poetry
import { CreatePoetryComponent } from './components/create-poetry/create-poetry.component';
import { ViewPoetryComponent } from './components/view-poetry/view-poetry.component';
import { EditPoetryComponent } from './components/edit-poetry/edit-poetry.component';
import { ListPoetryComponent } from './components/list-poetry/list-poetry.component';

// CRUD Lyrics
import { CreateLyricsComponent } from './components/create-lyrics/create-lyrics.component';
import { ViewLyricsComponent } from './components/view-lyrics/view-lyrics.component';
import { EditLyricsComponent } from './components/edit-lyrics/edit-lyrics.component';
import { ListLyricsComponent } from './components/list-lyrics/list-lyrics.component';

// CRUD Fiction
import { CreateFictionComponent } from './components/create-fiction/create-fiction.component';
import { ViewFictionComponent } from './components/view-fiction/view-fiction.component';
import { EditFictionComponent } from './components/edit-fiction/edit-fiction.component';
import { ListFictionComponent } from './components/list-fiction/list-fiction.component';


import { MemoryComponent } from './components/memory/memory.component';
import { MoneyTalksBullshitWalksComponent } from './components/money-talks-bullshit-walks/money-talks-bullshit-walks.component';

// Import canActivate guard services
import { AuthGuard } from "./shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'lyrics', component: LyricsComponent },
  { path: 'poetry', component: PoetryComponent },
  { path: 'fiction', component: FictionComponent },
  { path: 'request-lyrics', component: RequestLyricsComponent },
  { path: 'request-poetry', component: RequestPoetryComponent },
  { path: 'request-fiction', component: RequestFictionComponent },
  { path: 'memory', component: MemoryComponent },
  { path: 'money-talks-bullshit-walks', component: MoneyTalksBullshitWalksComponent },
  { path: 'create-poetry', component: CreatePoetryComponent, canActivate: [AuthGuard] },
  { path: 'view-poetry', component: ViewPoetryComponent, canActivate: [AuthGuard] },
  { path: 'edit-poetry', component: EditPoetryComponent, canActivate: [AuthGuard] },
  { path: 'list-poetry', component: ListPoetryComponent, canActivate: [AuthGuard] },
  { path: 'create-lyrics', component: CreateLyricsComponent, canActivate: [AuthGuard] },
  { path: 'view-lyrics', component: ViewLyricsComponent, canActivate: [AuthGuard] },
  { path: 'edit-lyrics', component: EditLyricsComponent, canActivate: [AuthGuard] },
  { path: 'list-lyrics', component: ListLyricsComponent, canActivate: [AuthGuard] },
  { path: 'create-fiction', component: CreateFictionComponent, canActivate: [AuthGuard] },
  { path: 'view-fiction', component: ViewFictionComponent, canActivate: [AuthGuard] },
  { path: 'edit-fiction', component: EditFictionComponent, canActivate: [AuthGuard] },
  { path: 'list-fiction', component: ListFictionComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
