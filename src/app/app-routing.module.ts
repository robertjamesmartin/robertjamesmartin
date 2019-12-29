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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
