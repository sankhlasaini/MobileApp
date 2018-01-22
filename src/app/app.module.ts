import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule, DateAdapter, NativeDateAdapter } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { PostLoginHeaderComponent } from './components/postLogin/post-login-header/post-login-header.component';
import { PreLoginLayoutComponent } from './components/preLogin/pre-login-layout/pre-login-layout.component';
import { PreLoginContentComponent } from './components/preLogin/pre-login-content/pre-login-content.component';
import { SelectionDialogComponent } from './components/preLogin/selection-dialog/selection-dialog.component';
import { ClientSpeakDialogComponent } from './components/preLogin/client-speak-dialog/client-speak-dialog.component';
import { WhitePaperDialogComponent } from './components/preLogin/white-paper-dialog/white-paper-dialog.component';
import { CaseStudyDialogComponent } from './components/preLogin/case-study-dialog/case-study-dialog.component';
import { NewsFeedDialogComponent } from './components/preLogin/news-feed-dialog/news-feed-dialog.component';
import { LoginComponent } from './components/loginComponents/login/login.component';
import { SignUpComponent } from './components/loginComponents/sign-up/sign-up.component';
import { LoginLayoutComponent } from './components/loginComponents/login-layout/login-layout.component';
import { AuthGuard } from 'app/AuthGuard/auth.guard';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { DashboardComponent } from './components/postLogin/dashboard/dashboard.component';
import { ProfileComponent } from './components/postLogin/profile/profile.component';
import { ProfileService } from 'app/services/profile.service';
import { LoginService } from 'app/services/login.service';
import { SharedService } from 'app/services/shared.service';
import { PincodeComponent } from './components/postLogin/pincode/pincode.component';
import { DataTableModule } from 'angular2-datatable';
import { GovtInfoComponent } from './components/postLogin/govt-info/govt-info.component';
import { HospitalComponent } from './components/postLogin/hospital/hospital.component';

let providers = {

  'google': {
    'clientId': '1095703142723-oombd1h7u6lqvvptouu7bvq8dssr09tu.apps.googleusercontent.com'
  },
  'facebook': {
    'clientId': '1764235857200435',
    'apiVersion': 'v2.9' //like v2.4 
  }
};

@NgModule({
  declarations: [
    AppComponent,
    PostLoginHeaderComponent,
    PreLoginLayoutComponent,
    PreLoginContentComponent,
    SelectionDialogComponent,
    ClientSpeakDialogComponent,
    WhitePaperDialogComponent,
    CaseStudyDialogComponent,
    NewsFeedDialogComponent,
    LoginComponent,
    SignUpComponent,
    LoginLayoutComponent,
    DashboardComponent,
    ProfileComponent,
    PincodeComponent,
    GovtInfoComponent,
    HospitalComponent,
  ],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    MdNativeDateModule,
    DataTableModule
  ],
  entryComponents: [
    SelectionDialogComponent,
    ClientSpeakDialogComponent,
    WhitePaperDialogComponent,
    CaseStudyDialogComponent,
    NewsFeedDialogComponent,
  ],

  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    AuthGuard, ProfileService, LoginService, SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
