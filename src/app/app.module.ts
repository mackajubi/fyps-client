import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* 3rd party modules */
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from "ng2-tooltip";
import { CKEditorModule } from 'ng2-ckeditor';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ImageUploadModule } from "angular2-image-upload";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Ng2OverlayModule } from 'ng2-overlay';
import { Ng2PopupModule } from 'ng2-popup';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

/* FIYPS Components */
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './components/header/header.component';
import { ForumsPageComponent } from './pages/forums-page/forums-page.component';
import { ReportsPageComponent } from './pages/reports-page/reports-page.component';
import { SrsPageComponent } from './pages/srs-page/srs-page.component';
import { ConceptPapersPageComponent } from './pages/concept-papers-page/concept-papers-page.component';
import { ArchivedProjectsPageComponent } from './pages/archived-projects-page/archived-projects-page.component';
import { RequirementsToolsPageComponent } from './pages/requirements-tools-page/requirements-tools-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArchivedProjectsPipe } from './filters/archived-projects.pipe';
import { ApiService } from './service/api.service';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UploadedFilesComponent } from './components/uploaded-files/uploaded-files.component';
import { DocumentReviewComponent } from './components/document-review/document-review.component';
import { ChatComponent } from './components/chat/chat.component';
import { RefreshComponent } from './components/refresh/refresh.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { SupervisorProfileComponent } from './components/supervisor-profile/supervisor-profile.component';
import { CoordinatorProfileComponent } from './components/coordinator-profile/coordinator-profile.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { HomeComponent } from './pages/home-page/home-page.component';
import { StatisticsBlockComponent } from './components/statistics-block/statistics-block.component';
import { ProgressScaleComponent } from './components/progress-scale/progress-scale.component';
import { SearchPipe } from './filters/search.pipe';
import { CoordinatorSearchPipe } from './filters/coordinator-search.pipe';
import { AllDocumentsComponent } from './components/all-documents/all-documents.component';
import { AddSupervisorPageComponent } from './pages/add-supervisor-page/add-supervisor-page.component';
import { AssignGroupPageComponent } from './pages/assign-group-page/assign-group-page.component';
import { SelectSupervisorComponent } from './components/select-supervisor/select-supervisor.component';
import { AllStudentGroupsComponent } from './pages/all-student-groups/all-student-groups.component';
import { AllLecturersComponent } from './pages/all-lecturers/all-lecturers.component';
import { ErrorLogsComponent } from './pages/error-logs/error-logs.component';
import { DatabaseLogsComponent } from './pages/database-logs/database-logs.component';
import { ServerLogsComponent } from './pages/server-logs/server-logs.component';
import { LogsComponent } from './components/logs/logs.component';
import { PdfReaderComponent } from './components/pdf-reader/pdf-reader.component';
import { AuthGuard } from './guard/auth.guard';
import { SddPageComponent } from './pages/sdd-page/sdd-page.component';
import { SupervisionGroupsComponent } from './components/supervision-groups/supervision-groups.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'fiyps',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
]

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'http://localhost:91/uploadFiles',
   method: 'post',
   //maxFilesize: 2,
   maxFilesize: 2,
   clickable: true,
   acceptedFiles: '.pdf,'
 };

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    BreadcrumbComponent,
    HeaderComponent,
    ForumsPageComponent,
    ReportsPageComponent,
    SrsPageComponent,
    ConceptPapersPageComponent,
    ArchivedProjectsPageComponent,
    RequirementsToolsPageComponent,
    FooterComponent,
    ArchivedProjectsPipe,
    ProfilePageComponent,
    UploadedFilesComponent,
    DocumentReviewComponent,
    ChatComponent,
    RefreshComponent,
    StudentProfileComponent,
    SupervisorProfileComponent,
    CoordinatorProfileComponent,
    AdminProfileComponent,
    HomeComponent,
    StatisticsBlockComponent,
    ProgressScaleComponent,
    SearchPipe,
    CoordinatorSearchPipe,
    AllDocumentsComponent,
    AddSupervisorPageComponent,
    AssignGroupPageComponent,
    SelectSupervisorComponent,
    AllStudentGroupsComponent,
    AllLecturersComponent,
    ErrorLogsComponent,
    DatabaseLogsComponent,
    ServerLogsComponent,
    LogsComponent,
    PdfReaderComponent,
    SddPageComponent,
    SupervisionGroupsComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,  
    NgxPaginationModule,
    TooltipModule,
    CKEditorModule,
    DropzoneModule,
    ImageUploadModule.forRoot(),
    PdfViewerModule,
    Ng2OverlayModule,
    Ng2PopupModule,
    Ng2SearchPipeModule
  ],
  providers:[
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    ApiService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
