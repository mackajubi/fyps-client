webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pptrs-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_tooltip__ = __webpack_require__("../../../../ng2-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_dropzone_wrapper__ = __webpack_require__("../../../../ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_overlay__ = __webpack_require__("../../../../ng2-overlay/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_page_login_page_component__ = __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_register_page_register_page_component__ = __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_page_dashboard_page_component__ = __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_forums_page_forums_page_component__ = __webpack_require__("../../../../../src/app/pages/forums-page/forums-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_reports_page_reports_page_component__ = __webpack_require__("../../../../../src/app/pages/reports-page/reports-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_srs_page_srs_page_component__ = __webpack_require__("../../../../../src/app/pages/srs-page/srs-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_concept_papers_page_concept_papers_page_component__ = __webpack_require__("../../../../../src/app/pages/concept-papers-page/concept-papers-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_archived_projects_page_archived_projects_page_component__ = __webpack_require__("../../../../../src/app/pages/archived-projects-page/archived-projects-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_requirements_tools_page_requirements_tools_page_component__ = __webpack_require__("../../../../../src/app/pages/requirements-tools-page/requirements-tools-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__filters_archived_projects_pipe__ = __webpack_require__("../../../../../src/app/filters/archived-projects.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_profile_page_profile_page_component__ = __webpack_require__("../../../../../src/app/pages/profile-page/profile-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_uploaded_files_uploaded_files_component__ = __webpack_require__("../../../../../src/app/components/uploaded-files/uploaded-files.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_document_review_document_review_component__ = __webpack_require__("../../../../../src/app/components/document-review/document-review.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_refresh_refresh_component__ = __webpack_require__("../../../../../src/app/components/refresh/refresh.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_student_profile_student_profile_component__ = __webpack_require__("../../../../../src/app/components/student-profile/student-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_supervisor_profile_supervisor_profile_component__ = __webpack_require__("../../../../../src/app/components/supervisor-profile/supervisor-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_coordinator_profile_coordinator_profile_component__ = __webpack_require__("../../../../../src/app/components/coordinator-profile/coordinator-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_admin_profile_admin_profile_component__ = __webpack_require__("../../../../../src/app/components/admin-profile/admin-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_home_page_home_page_component__ = __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_statistics_block_statistics_block_component__ = __webpack_require__("../../../../../src/app/components/statistics-block/statistics-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_progress_scale_progress_scale_component__ = __webpack_require__("../../../../../src/app/components/progress-scale/progress-scale.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__filters_search_pipe__ = __webpack_require__("../../../../../src/app/filters/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__filters_coordinator_search_pipe__ = __webpack_require__("../../../../../src/app/filters/coordinator-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_all_documents_all_documents_component__ = __webpack_require__("../../../../../src/app/components/all-documents/all-documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_add_supervisor_page_add_supervisor_page_component__ = __webpack_require__("../../../../../src/app/pages/add-supervisor-page/add-supervisor-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_assign_group_page_assign_group_page_component__ = __webpack_require__("../../../../../src/app/pages/assign-group-page/assign-group-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_select_supervisor_select_supervisor_component__ = __webpack_require__("../../../../../src/app/components/select-supervisor/select-supervisor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_all_student_groups_all_student_groups_component__ = __webpack_require__("../../../../../src/app/pages/all-student-groups/all-student-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_all_lecturers_all_lecturers_component__ = __webpack_require__("../../../../../src/app/pages/all-lecturers/all-lecturers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_error_logs_error_logs_component__ = __webpack_require__("../../../../../src/app/pages/error-logs/error-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_database_logs_database_logs_component__ = __webpack_require__("../../../../../src/app/pages/database-logs/database-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_server_logs_server_logs_component__ = __webpack_require__("../../../../../src/app/pages/server-logs/server-logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_logs_logs_component__ = __webpack_require__("../../../../../src/app/components/logs/logs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_pdf_reader_pdf_reader_component__ = __webpack_require__("../../../../../src/app/components/pdf-reader/pdf-reader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_sdd_page_sdd_page_component__ = __webpack_require__("../../../../../src/app/pages/sdd-page/sdd-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_supervision_groups_supervision_groups_component__ = __webpack_require__("../../../../../src/app/components/supervision-groups/supervision-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* 3rd party modules */










/* FIYPS Components */












































var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_16__pages_login_page_login_page_component__["a" /* LoginPageComponent */]
    },
    {
        path: 'fiyps',
        component: __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_55__guard_auth_guard__["a" /* AuthGuard */]],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_17__pages_register_page_register_page_component__["a" /* RegisterPageComponent */]
    },
    {
        path: 'forgotPassword',
        component: __WEBPACK_IMPORTED_MODULE_58__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
];
var DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: 'http://localhost:91/uploadFiles',
    method: 'post',
    //maxFilesize: 2,
    maxFilesize: 2,
    clickable: true,
    acceptedFiles: '.pdf,'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_register_page_register_page_component__["a" /* RegisterPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_dashboard_page_dashboard_page_component__["a" /* DashboardPageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_forums_page_forums_page_component__["a" /* ForumsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_reports_page_reports_page_component__["a" /* ReportsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_srs_page_srs_page_component__["a" /* SrsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_concept_papers_page_concept_papers_page_component__["a" /* ConceptPapersPageComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_archived_projects_page_archived_projects_page_component__["a" /* ArchivedProjectsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_requirements_tools_page_requirements_tools_page_component__["a" /* RequirementsToolsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_28__filters_archived_projects_pipe__["a" /* ArchivedProjectsPipe */],
                __WEBPACK_IMPORTED_MODULE_30__pages_profile_page_profile_page_component__["a" /* ProfilePageComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_uploaded_files_uploaded_files_component__["a" /* UploadedFilesComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_document_review_document_review_component__["a" /* DocumentReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_refresh_refresh_component__["a" /* RefreshComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_student_profile_student_profile_component__["a" /* StudentProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_supervisor_profile_supervisor_profile_component__["a" /* SupervisorProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_coordinator_profile_coordinator_profile_component__["a" /* CoordinatorProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_admin_profile_admin_profile_component__["a" /* AdminProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_home_page_home_page_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_statistics_block_statistics_block_component__["a" /* StatisticsBlockComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_progress_scale_progress_scale_component__["a" /* ProgressScaleComponent */],
                __WEBPACK_IMPORTED_MODULE_42__filters_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_43__filters_coordinator_search_pipe__["a" /* CoordinatorSearchPipe */],
                __WEBPACK_IMPORTED_MODULE_44__components_all_documents_all_documents_component__["a" /* AllDocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_add_supervisor_page_add_supervisor_page_component__["a" /* AddSupervisorPageComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_assign_group_page_assign_group_page_component__["a" /* AssignGroupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_select_supervisor_select_supervisor_component__["a" /* SelectSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_all_student_groups_all_student_groups_component__["a" /* AllStudentGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__pages_all_lecturers_all_lecturers_component__["a" /* AllLecturersComponent */],
                __WEBPACK_IMPORTED_MODULE_50__pages_error_logs_error_logs_component__["a" /* ErrorLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_51__pages_database_logs_database_logs_component__["a" /* DatabaseLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_52__pages_server_logs_server_logs_component__["a" /* ServerLogsComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_logs_logs_component__["a" /* LogsComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_pdf_reader_pdf_reader_component__["a" /* PdfReaderComponent */],
                __WEBPACK_IMPORTED_MODULE_56__pages_sdd_page_sdd_page_component__["a" /* SddPageComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_supervision_groups_supervision_groups_component__["a" /* SupervisionGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_58__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_tooltip__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_9_ngx_dropzone_wrapper__["b" /* DropzoneModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_image_upload__["a" /* ImageUploadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_overlay__["Ng2OverlayModule"],
                __WEBPACK_IMPORTED_MODULE_13_ng2_popup__["Ng2PopupModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng2_search_filter__["a" /* Ng2SearchPipeModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9_ngx_dropzone_wrapper__["a" /* DROPZONE_CONFIG */],
                    useValue: DEFAULT_DROPZONE_CONFIG
                },
                __WEBPACK_IMPORTED_MODULE_29__service_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_55__guard_auth_guard__["a" /* AuthGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/admin-profile/admin-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-profile/admin-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-profile/admin-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminProfileComponent = (function () {
    function AdminProfileComponent() {
    }
    AdminProfileComponent.prototype.ngOnInit = function () {
    };
    AdminProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-admin-profile',
            template: __webpack_require__("../../../../../src/app/components/admin-profile/admin-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-profile/admin-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminProfileComponent);
    return AdminProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/all-documents/all-documents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".all-docs-container .projects-wrapper .projects-inner-wrapper{\r\n    margin: 0px;\r\n}\r\n.all-docs-container > .projects-table-wrapper > table > tbody > tr:hover .group-members-td {\r\n    cursor: pointer;\r\n    background-color: #93de9352;\r\n}\r\n.project-chat-history > button{\r\n    width: 49%;\r\n    background-color: #4ed04e96  !important;\r\n    border-color: #4ed04e  !important;\r\n}\r\n.project-chat-history > button:hover,\r\n.project-chat-history > button:focus,\r\n.project-chat-history > button:active{\r\n    background-color: #10a112 !important;\r\n    border-color: #10a112 !important;\r\n    color: white !important;\r\n}\r\n.project-submission-time{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/all-documents/all-documents.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"all-docs-container\" *ngIf=\"userType == 'coordinator'\">\n  <div class=\"projects-wrapper\">\n    <div class=\"projects-inner-wrapper\">\n      <div class=\"projects-controls-wrapper animated fadeIn _delay5ms\">\n        <div class=\"dataTables_length\">\n          <form [formGroup]=\"projectsForm\">\n            <div class=\"col-md-4 col-sm-4 col-xs-12 _show\">\n              <label>Show</label>\n              <select class=\"form-control _search\" formControlName=\"size\" (ngModelChange)=\"_show(size = $event)\">\n                <option value=\"10\" ng-reflect-value=\"10\">10</option>\n                <option  value=\"25\" ng-reflect-value=\"25\">25</option>\n                <option  value=\"50\" ng-reflect-value=\"50\">50</option>\n                <option  value=\"100\" ng-reflect-value=\"100\">100</option>\n              </select>\n              <label  class=\"_entries\"> entries of <strong>{{ total }}</strong></label> \n            </div>\n            <div  class=\"dataTables_filter col-sm-3 col-xs-12\">\n              <input  class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"Search\" formControlName=\"search\" type=\"search\" >\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"projects-table-wrapper\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th class=\"count\">#</th>\n              <th class=\"group-name\">Groups</th>\n              <th class=\"group-members-th\">Members</th>\n              <th class=\"group-supervisor-th\">Supervisor</th>\n              <th class=\"project-submission-time\">Submission Time</th>\n              <th class=\"project-file\">File</th>\n              <th class=\"project-chat-history\">Chat</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"animated fadeInUp _delay{{ i + 3}}ms\" *ngFor=\"let project of projects | filter:search | paginate: {id: 'allDocs', itemsPerPage: pageSize, currentPage: page }; let i = index;\">\n              <td class=\"count\">{{ i + 1 }}</td>\n              <td class=\"group-name\">{{ project.group_name }}</td>\n              <td class=\"group-members-td\">\n                <ul class=\"project-group-members\" (click)=\"_viewGroup(project.id)\">\n                  <li *ngFor=\"let member of project.members; let i = index;\">{{ member.name }}</li>\n                </ul>\n              </td>\n              <td class=\"project-supervisor\">{{ project.supervisor }}</td>\n              <td class=\"project-submission-time\">{{ project.submissionTime }}</td>\n              <td class=\"project-file\">{{ project.file }}</td>\n              <td class=\"project-chat-history\">\n                <button class=\"btn btn-info\" (click)=\"_chat(project.id)\">Chat</button>\n                <button class=\"btn btn-info\" (click)=\"_projectChatHistory(project.id)\">Histoy</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"_pagiantionContainer has-text-centered\">\n          <pagination-controls id=\"allDocs\" (pageChange)=\"page = $event\"></pagination-controls>\n        </div>    \n      </div>    \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/all-documents/all-documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllDocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllDocumentsComponent = (function () {
    function AllDocumentsComponent() {
        this.userType = null;
        this.projects = null;
        this.onChat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.onViewGroup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.onHistory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.show = null;
    }
    AllDocumentsComponent.prototype.ngOnInit = function () {
        if (this.projects) {
            this.isDesc = false;
            this.column = 'group_name';
            this.page = 1;
            this.pageSize = 10;
            this.direction = -1;
            this.total = this.projects.length;
        }
        this.projectsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("10")
        });
    };
    /* Switch table size */
    AllDocumentsComponent.prototype._show = function (size) {
        console.log(size);
        this.pageSize = size;
    };
    AllDocumentsComponent.prototype._viewGroup = function (id) {
        console.log("View group: " + id);
        this.onViewGroup.emit(id);
    };
    /* Chat with the group */
    AllDocumentsComponent.prototype._chat = function (id) {
        console.log("Chat with group: " + id);
        this.onChat.emit(id);
    };
    /* Chat with the group */
    AllDocumentsComponent.prototype._projectChatHistory = function (id) {
        console.log("View Chat group chat history: " + id);
        this.onHistory.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AllDocumentsComponent.prototype, "userType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AllDocumentsComponent.prototype, "projects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AllDocumentsComponent.prototype, "onChat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AllDocumentsComponent.prototype, "onViewGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AllDocumentsComponent.prototype, "onHistory", void 0);
    AllDocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-all-documents',
            template: __webpack_require__("../../../../../src/app/components/all-documents/all-documents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/all-documents/all-documents.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllDocumentsComponent);
    return AllDocumentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/breadcrumb/breadcrumb.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumb-wrapper{\r\n    background: #e8e8e8;\r\n    width: 100%;\r\n    height: 30px;\r\n    display: inline-block;\r\n    margin-bottom: 8px;\r\n}\r\n.breadcrumb{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n._cat{\r\n    color:black;\r\n    font-weight: 600;\r\n}\r\n._hide{\r\n    display: none;\r\n}\r\n.new-forum{\r\n    text-transform: capitalize;\r\n    display: inline-block;\r\n    padding: 2px 13px;\r\n    margin-top: 1px;\r\n    margin-right: 2px;  \r\n    background-color: #10a112bf;\r\n    border-color: #10a112bf;   \r\n    transition: all .3s ease-in-out;\r\n}\r\n.new-forum:hover,\r\n.new-forum:focus,\r\n.new-forum:active,\r\n.open > .dropdown-toggle.new-forum {\r\n    background-color: #10a112;\r\n    border-color: #10a112;\r\n    box-shadow: 1px 1px 2px 0px #0c690d85;\r\n}\r\n.new-post-form-group{\r\n    margin-bottom: 4px;\r\n}\r\nlabel{\r\n    width: 100%;\r\n    font-weight: 500;\r\n}\r\n._warning{\r\n    color: red !important;\r\n}\r\ntextarea[name=\"message\"]{\r\n    resize: none;\r\n    text-align: left;\r\n}\r\n.form-control{\r\n    text-transform: capitalize;\r\n}\r\n.new-post-submit-btn,\r\n.new-post-close-btn{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content\r\n}\r\n.new-post-close-btn:hover,\r\n.new-post-close-btn:focus,\r\n.new-post-close-btn:active{\r\n    background-color: #ffffff;\r\n    border-color: #ffffff;\r\n    color: black;\r\n}\r\nbutton[disabled], html input[disabled] {\r\n    cursor: default;\r\n    background-color: #0cc10c30;\r\n    border-color: #0cc10ccc;\r\n}\r\n.new-post-close-btn{\r\n    border-color: #0b0b0b;\r\n    background-color: #424242;\r\n    color: white;\r\n}\r\n.message-box {\r\n    z-index: 10000;\r\n}\r\n.mb-title > strong{\r\n    margin-left: 10px;\r\n}\r\n.message-box.new-post-ms-box > .mb-container {\r\n    top: 0px;\r\n    background: rgba(0, 0, 0, 0.74);\r\n}\r\n.pop-up-container{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    position: absolute;\r\n}\r\n.pop-up-container > ng2-popup > .ng2-popup-overlay > .popup-container.opened {\r\n    left: 5px !important;\r\n    top: 8px !important;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumb-wrapper\">\n    <!--\n    <ul class=\"breadcrumb\">\n        <li class=\"_cat pointer\" (click)=\"_return(_cat)\">{{ _cat }}</li>                   \n        <li class=\"{{ _hide }}\" >{{ _new_path }}</li>\n        <li *ngIf=\"currentGroup\">{{ currentGroup }}</li>\n        <li *ngIf=\"currentGroupFile\">{{ currentGroupFile }}</li>\n    </ul>\n    -->\n    <ul class=\"breadcrumb\">\n        <li class=\"_cat\" *ngFor=\"let crumb of breadcrumb\">\n            <span class=\"pointer animated fadeInLeft _delay4ms\">{{ crumb.name }} </span>\n        </li>      \n    </ul>    \n    <button class=\"message-control btn btn-info pull-right new-forum animated fadeInRight\" *ngIf=\"showNewForumBtn\" data-box=\"#new-post\" (click)=\"_showForm()\">new post</button>\n</div>\n<!-- NEW FORUM POST MESSAGE BOX -->\n<div class=\"message-box new-post-ms-box animated fadeIn\" data-sound=\"alert\" id=\"new-post\"> \n    <div class=\"mb-container\">\n        <div class=\"pop-up-container\">\n            <ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup>    \n        </div>\n        <div class=\"mb-middle\">\n            <div class=\"mb-title\"><span class=\"fas fa-share-alt\"></span><strong>Share</strong> ?</div>            \n            <div class=\"mb-content\">\n                <form [formGroup]=\"newPostForm\" (ngSubmit)=\"_submitForm(newPostForm.value)\">\n                    <div class=\"form-group new-post-form-group\">\n                        <label for=\"title\">Title\n                            <span class=\"pull-right\"> \n                            <span *ngIf=\"currentTitleSize != maxLengthTitle; else titleWarning\"><strong>{{ currentTitleSize }}</strong></span>\n                            <ng-template #titleWarning><strong class=\"_warning\">{{ currentTitleSize }}</strong> </ng-template>/ {{ maxLengthTitle }}\n                            </span>                            \n                        </label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"title\" maxlength=\"{{ maxLengthTitle }}\" (ngModelChange)=\"_titleSize($event)\">\n                    </div>\n                    <div class=\"form-group new-post-form-group\">\n                        <label for=\"message\">Message \n                            <span class=\"pull-right\"> \n                            <span *ngIf=\"currentSize != maxLength; else warning\"><strong>{{ currentSize }}</strong></span>\n                            <ng-template #warning><strong class=\"_warning\">{{ currentSize }}</strong> </ng-template>/ {{ maxLength }}\n                            </span>\n                        </label>\n                        <textarea class=\"form-control _widget-scrollbar\" maxlength=\"{{ maxLength }}\" formControlName=\"message\" (ngModelChange)=\"_messageSize($event)\" name=\"message\" rows=\"25\"></textarea>\n                    </div>\n                    <div class=\"mb-footer\">\n                        <button class=\"pull-right btn btn-success btn-block _a new-post-submit-btn\" type=\"submit\" [disabled]=\"!newPostForm.valid\">Post</button>                        \n                        <button class=\"pull-left btn btn-default mb-control-close new-post-close-btn\" (click)=\"_hideForm()\">Close</button>\n                    </div>                    \n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- END NEW FORUM POST MESSAGE BOX -->"

/***/ }),

/***/ "../../../../../src/app/components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(api) {
        this.api = api;
        //@Input() _cat: String = null;
        //@Input() _new_path: String = null;
        //@Input() _hide: String = null;
        this.breadcrumb = [];
        this.maxLengthTitle = 90; // The other 10 characters are attached from the API
        this.maxLength = 20000;
        this.currentTitleSize = 0;
        this.currentSize = 0;
        this.showNewForumBtn = false;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshPosts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    Object.defineProperty(BreadcrumbComponent.prototype, "setBreadcrumb", {
        set: function (currentGroup) {
            console.log("update the breadcrumb");
            console.log(currentGroup);
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.breadcrumb = [];
            _this.api._getBreadcrumb().subscribe(function (item) {
                _this.breadcrumb.push(item);
            });
        }, 100);
        this.newPostForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxLengthTitle)
            ])),
            message: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(50),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxLength)
            ]))
        });
    };
    /* Show the form */
    BreadcrumbComponent.prototype._showForm = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#new-post").show();
    };
    /* Remove the form */
    BreadcrumbComponent.prototype._hideForm = function () {
        this.newPostForm.setValue({
            title: "",
            message: ""
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__("#new-post").hide();
    };
    /* Track the Title size*/
    BreadcrumbComponent.prototype._titleSize = function (title) {
        this.currentTitleSize = title.length;
    };
    /* Track the message size*/
    BreadcrumbComponent.prototype._messageSize = function (message) {
        this.currentSize = message.length;
    };
    /* Submit post */
    BreadcrumbComponent.prototype._submitForm = function (data) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"]({
            type: "POST",
            data: data,
            url: this.api.getForumPostsEndpoint(),
            error: (function (err) {
                _this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
            }),
            success: (function (data) {
                if (data['data'] === 'success') {
                    _this.openPopup('Your post has been successfully shared');
                    _this.newPostForm.setValue({
                        title: '',
                        message: ''
                    });
                    _this.refreshPosts.emit();
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Return to the pages' landing page */
    BreadcrumbComponent.prototype._return = function (category) {
        if (category === 'Archived Projects') {
            this.api._setHomeValue('home');
        }
    };
    /* Pop over */
    BreadcrumbComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    BreadcrumbComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], BreadcrumbComponent.prototype, "setBreadcrumb", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BreadcrumbComponent.prototype, "showNewForumBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BreadcrumbComponent.prototype, "refreshPosts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"])
    ], BreadcrumbComponent.prototype, "popup", void 0);
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-breadcrumb',
            template: __webpack_require__("../../../../../src/app/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-save-btn > button{\r\n    padding: 2px 17px;\r\n    text-transform: capitalize;\r\n    display: inline-block;\r\n    margin-top: 0px;\r\n    background-color: #93de93;\r\n    border-color: #10a112bf;\r\n    transition: all .3s ease-in-out;\r\n    margin-bottom: 4px;\r\n    font-size: inherit;\r\n}\r\n.chat-save-btn > button:hover, \r\n.chat-save-btn > button:focus, \r\n.chat-save-btn > button:active{\r\n    background-color: #10a112;\r\n    border-color: #10a112;\r\n    box-shadow: 1px 1px 2px 0px #0c690d85;\r\n}\r\n.chat-content{\r\n    border: 1px solid #bfbfbf;\r\n    border-top: 0px;\r\n    padding: 4px;\r\n    padding-top: 5px;\r\n    height: 250px;\r\n    max-height: 250px;\r\n    background-color: #ffffffeb;\r\n}\r\n.chat{\r\n    width: 100%;\r\n    max-width: 60%;\r\n    margin-bottom: 5px;\r\n    border-radius: 0px 10px;\r\n    transition: all .5s ease-in-out;\r\n}\r\n.chat.pull-right{\r\n    border-radius: 10px 0px;\r\n}\r\n.chat-msg-header{\r\n    border-bottom: 1px solid #e8e8e8;\r\n    width: 100%;\r\n    display: inline-block;\r\n    background: #000000de;\r\n    border-radius: 0px 25px 0px 0px;\r\n    margin-bottom: -5px;\r\n}\r\n.current-user{\r\n    background: #11a112c7;\r\n    border-radius: 25px 0px 0px 0px;\r\n    padding-right: 10px;\r\n}\r\n.current-user > div > img{\r\n    box-shadow: 0px 0px 3px 0.5px #21212159;\r\n    background: #97e397;\r\n}\r\n.chat-msg-owner-img-wrapper{\r\n    padding: 0px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 2px 4px;\r\n}\r\n.chat-msg-owner-img-wrapper > img{\r\n    border: 0px;\r\n    padding: 1px;\r\n    border-radius: 50%;\r\n    transition: all .5s ease-in-out;\r\n    box-shadow: 0px 0px 3px 0.5px #97e397;\r\n    max-width: 30px;\r\n    background: #97e397;\r\n}\r\n.chat-msg-owner-name-time{\r\n    padding: 0px;\r\n    padding-top: 3px;\r\n    padding-left: 10px;\r\n}\r\n.chat-msg-owner-name{\r\n    font-weight: 600;\r\n    color: white;\r\n    font-size: 11px;\r\n    text-transform: capitalize;\r\n}\r\n.align-right{\r\n    text-align: right;\r\n    color: black;\r\n    font-weight: 700;\r\n}\r\n.chat-msg-time{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 0px;\r\n    font-weight: 600;\r\n    color: #10a112;\r\n    font-size: 11px; \r\n}\r\n.chat-message > pre{\r\n    background: transparent;\r\n    padding: 0px;\r\n    border: 0px;\r\n}\r\n.current-user > div > .chat-msg-time{\r\n    color: #e04b4a;\r\n}\r\n.current-user > .chat-message{\r\n    border-bottom-right-radius: 10px;\r\n}\r\n.chat-message{\r\n    width: 100%;\r\n    display: inline-block;\r\n    padding: 0px 20px;\r\n    text-align: justify;\r\n    border: 1px solid #bfbfbf;\r\n    border-bottom-right-radius: 25px;\r\n    border-bottom-left-radius: 25px;\r\n    background: white;\r\n}\r\n.chat-save-btn{\r\n    margin-top: 4px;\r\n    text-align: right;\r\n    margin-bottom: 6px;\r\n}\r\n.new-chat-textarea{\r\n    margin-right: 7px;\r\n}\r\n.new-chat-form-group{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    width: 100%;\r\n}\r\n.new-chat-form-group > span{\r\n    line-height: 26px;\r\n    padding: 0px 10px;\r\n}\r\ntextarea[name=\"chatMsg\"]{\r\n    resize: none;\r\n    text-align: left;\r\n    transition: all .6s ease-in-out;\r\n}\r\ntextarea[name=\"chatMsg\"]:focus{\r\n    border:2px solid #34c334;\r\n}\r\n.form-control {\r\n    width: 99.7%;\r\n    margin: 0px auto;\r\n    margin-left: 4px;\r\n    background-color: #ffffffeb;\r\n}\r\n.chat-warning{\r\n    color: red !important;\r\n}\r\n.speech{\r\n    position: relative;\r\n    width: 200px;\r\n    height: 100px;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    background-color: #fff;\r\n    border: 8px solid #666;\r\n    border-radius: 30px;\r\n    box-shadow: 2px 2px 4px #888;\r\n}\r\n.speech:before {\r\n    content: ' ';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    left: 30px;\r\n    top: 100px;\r\n    border: 25px solid;\r\n    border-color: #666 transparent transparent #666;\r\n}\r\n.speech:after {\r\n    content: ' ';\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    left: 38px;\r\n    top: 100px;\r\n    border: 15px solid;\r\n    border-color: #fff transparent transparent #fff;\r\n}\r\nthought {\r\n    position: relative;\r\n    width: 130px;\r\n    height: 100px;\r\n    text-align: center;\r\n    line-height: 100px;\r\n    background-color: #fff;\r\n    border: 8px solid #666;\r\n    border-radius: 58px;\r\n    box-shadow: 2px 2px 4px #888;\r\n}\r\n  \r\n.thought:before,\r\n.thought:after {\r\n    left: 10px;\r\n    top: 70px;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: #fff;\r\n    border: 8px solid #666;\r\n    border-radius: 28px;\r\n}\r\n  \r\n.thought:after {\r\n    width: 20px;\r\n    height: 20px;\r\n    left: 5px;\r\n    top: 100px;\r\n    border-radius: 18px;\r\n}\r\n.closed{\r\n    -webkit-transform: unset !important;\r\n            transform: unset !important;\r\n    transition: all 2s ease-in-out;\r\n}\r\n.nochats-default-container{\r\n    text-align: center;\r\n    background: rgba(255, 255, 255, 0.71);\r\n    margin: 0px 1px;\r\n    overflow: hidden;\r\n}\r\n.nochats-default-container > img{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n/* Media queries */\r\n@media only screen and (max-width: 768px){\r\n    .chat{\r\n        max-width: 80%;\r\n    }\r\n    .chat-save-btn {\r\n        /*margin-bottom: 88px;*/\r\n   }    \r\n}\r\n@media only screen and (max-width: 500px){\r\n    .chat{\r\n        max-width: 95%;\r\n    }    \r\n    .chat-save-btn {\r\n         /*margin-bottom: 88px;*/\r\n    }\r\n}\r\n@media (max-width: 349){\r\n    .chat-save-btn{\r\n         /*margin-bottom: 105px; */\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup> \n<div class=\"chat-wrapper\" *ngIf=\"userType == '1' || userType == '2'\">\n  <div class=\"chat-header\" (click)=\"_slideToggle('chat-container','chat-header-icon')\">\n    <div class=\"chat-header-icon\">\n      <i class=\"fas fa-caret-down icon\"></i>\n    </div>\n    <div class=\"chat-header-title\">\n      <h4>Chat</h4>\n    </div>\n  </div>\n  <div class=\"chat-container\">\n    <fiyps-refresh [visibility]=\"visibility\"></fiyps-refresh>\n    <div class=\"chat-content _widget-scrollbar\" *ngIf=\"totalChats\">\n      <div class=\"chat\" *ngFor=\"let chat of chats\" [ngClass]=\"{'pull-right': chat.msgOwner == username}\">\n        <div class=\"chat-msg-header\" [ngClass]=\"{'current-user': chat.msgOwner == username}\">\n          <!--\n          <div class=\"chat-msg-owner-img-wrapper col-xs-1\" [ngClass]=\"{'pull-right': chat.msgOwner == username}\">\n            <img src=\"/assets/img/users/{{ chat.img }}\" class=\"img-thumbnail\" />\n          </div>\n        -->\n          <div class=\"chat-msg-owner-name-time col-md-3 col-xs-3\" [ngClass]=\"{'pull-right': chat.msgOwner == username}\">\n            <div class=\"chat-msg-owner-name\" [ngClass]=\"{'align-right': chat.msgOwner == username}\">\n              {{ chat.msgOwner }}\n            </div>\n            <div class=\"chat-msg-time col-md-2\" [ngClass]=\"{'pull-right': chat.msgOwner == username}\">\n              {{ chat.time }}\n            </div>\n          </div> \n        </div>\n        <div class=\"chat-message\">\n          <pre> {{ chat.msgBody }} </pre>\n        </div>       \n      </div>\n    </div>\n    <div class=\"nochats-default-container animated fadeIn _delay4ms\" *ngIf=\"!totalChats\">\n      <img src=\"./assets/img/defaults/noChatsTemp.fw.png\" class=\"img-fluid\" />\n    </div>\n    <div class=\"new-chat-textarea\">\n      <form [formGroup]=\"newChatForm\" class=\"form-horizontal\" (ngSubmit)=\"_submitChat(newChatForm.value)\">\n        <div class=\"form-group new-chat-form-group\">\n          <span class=\"pull-right\"> \n            <span *ngIf=\"currentSize != maxLength; else warning\"><strong>{{ currentSize }}</strong></span>\n            <ng-template #warning><strong class=\"chat-warning\">{{ currentSize }}</strong> </ng-template>/ {{ maxLength }}\n          </span>\n          <textarea class=\"form-control chatMsg _scrollbar\" maxlength=\"{{ maxLength }}\" formControlName=\"chatMsg\" (ngModelChange)=\"_chatMsgSize(character = $event)\" name=\"chatMsg\" [rows]=\"rows\"></textarea>\n        </div>\n        <div class=\"chat-save-btn\">\n          <button class=\"btn btn-info\" [disabled]=\"!newChatForm.valid\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n  \n  "

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = (function () {
    function ChatComponent(api) {
        this.api = api;
        this.currentSize = 0;
        this.chatMsg = null;
        this.maxLength = 600;
        this.username = null;
        this.userImg = null;
        this.visibility = false;
        this.rows = 6;
        this.totalChats = 0;
        this.userType = null;
        this.deliverableTypeId = null;
        this.groupDetails = null;
        this.username = this.api._getUserName();
        this.userImg = this.api._getUserImg();
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.newChatForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            chatMsg: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(this.maxLength)
            ]))
        });
    };
    /* Toggle container visibility */
    ChatComponent.prototype._slideToggle = function (container, icon, maxSize) {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".chat-header-icon > .icon").toggleClass("closed");
        this.api._slideToggle(container, icon, maxSize);
    };
    /* Track the number of characters the user has typed */
    ChatComponent.prototype._chatMsgSize = function (msg) {
        this.currentSize = msg.length;
        this.chatMsg = msg;
    };
    /* Submit the user's chat */
    ChatComponent.prototype._submitChat = function (data) {
        this.commitChat(data.chatMsg);
    };
    /* Handle submits with the enter btn */
    ChatComponent.prototype.enterBtnSubmit = function (event) {
        if (event.keyCode == 13) {
            this.commitChat(this.chatMsg);
        }
    };
    /* commit the chat data to the db */
    ChatComponent.prototype.commitChat = function (data) {
        var _this = this;
        var d = { 'data': data };
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: "POST",
            data: d,
            url: this.api.getChatEndPoint() + "/" + this.deliverableTypeId + "/" + this.userType + "/" + this.groupDetails + "?token=" + this.api._getToken(),
            error: (function (error) {
                console.log("Request error::", error);
            })
        }).done(function (data) {
            if (data['data']) {
                /* Retrieve the latest chats */
                _this.newChatForm.reset();
                _this._fetch();
            }
            else {
                if (data['invalidData']) {
                    _this.openPopup("Please avoid writing messages with html tags");
                }
            }
        });
    };
    /* Fetch the chats */
    ChatComponent.prototype._fetch = function () {
        var _this = this;
        this.visibility = true;
        this.api._fetchChats(this.deliverableTypeId, this.groupDetails).subscribe(function (data) {
            if (data['data']) {
                if (data['data'] != 'empty') {
                    _this.chats = data['data'];
                    console.log(_this.chats);
                }
                else {
                    _this.chats = [];
                }
                _this.totalChats = _this.chats.length;
            }
            else if (data['error']) {
                console.log("Error:", data['error']);
            }
        });
        setTimeout(function () {
            _this.visibility = false;
        }, 500);
    };
    /* Pop over */
    ChatComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    ChatComponent.prototype.ngOnChanges = function () {
        if (this.userType == '1') {
            this.groupDetails = this.api._getUserName();
        }
        if (this.groupDetails) {
            this._fetch();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChatComponent.prototype, "userType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChatComponent.prototype, "deliverableTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ChatComponent.prototype, "groupDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"])
    ], ChatComponent.prototype, "popup", void 0);
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-chat',
            template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/coordinator-profile/coordinator-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/coordinator-profile/coordinator-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  coordinator-profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/coordinator-profile/coordinator-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoordinatorProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoordinatorProfileComponent = (function () {
    function CoordinatorProfileComponent() {
    }
    CoordinatorProfileComponent.prototype.ngOnInit = function () {
    };
    CoordinatorProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-coordinator-profile',
            template: __webpack_require__("../../../../../src/app/components/coordinator-profile/coordinator-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/coordinator-profile/coordinator-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoordinatorProfileComponent);
    return CoordinatorProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/document-review/document-review.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resize-container{\r\n    padding: 0px;\r\n    position: absolute;\r\n    right: 12px;\r\n    margin-top: -37px;\r\n}\r\n.resize-container > button{\r\n    background: transparent;\r\n    border: 1px solid #98e398;\r\n}\r\n.resize-container > button:hover,\r\n.resize-container > button:active{\r\n    background: transparent;\r\n    border: 1px solid #98e398;\r\n}\r\n.defaults-container{\r\n    text-align: center;\r\n    padding: 20px;\r\n    padding-top: 121px;\r\n    height: 443px;\r\n    overflow: hidden;\r\n}\r\n.defaults-container  >img{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/document-review/document-review.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<p>\n    Building handcrafted forms can be costly and time-consuming, especially if you need a great number of them, they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.\n\n    It may be more economical to create the forms dynamically, based on metadata that describes the business object model.\n    \n    This cookbook shows you how to use formGroup to dynamically render a simple form with different control types and validation. It's a primitive start. It might evolve to support a much richer variety of questions, more graceful rendering, and superior user experience. All such greatness has humble beginnings.\n    \n    The example in this cookbook is a dynamic form to build an online application experience for heroes seeking employment. The agency is constantly tinkering with the application process. You can create the forms on the fly without changing the application code.          \n</p>\n-->\n<ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup> \n<div class=\"document-review-wrapper\" *ngIf=\"userType == '1' || userType == '2'\">\n<!--\n    <iframe \n      height=\"500\"\n      class=\"doc\" \n      src=\"https://docs.google.com/gview?url=http://writing.engr.psu.edu/workbooks/formal_report_template.doc&embedded=true\"\n    ></iframe>\n-->\n  \n    <div class=\"document-review-header\">\n        <span (click)=\"_slideToggle('document-review-display-section','document-review-header-icon')\">\n            <div class=\"document-review-header-icon\">\n                <i class=\"fas fa-caret-down icon\"></i>\n            </div>\n            <div class=\"document-review-header-title\">\n                <h4>Document Review</h4>\n                <span>{{ filename }}</span>\n            </div>\n        </span>\n        <div class=\"resize-container\">\n            <tooltip-content #full [animation]=\"true\">\n                <small>fullscreen</small>\n            </tooltip-content>       \n            <button *ngIf=\"!fullscreen\" class=\"btn btn-primary animated fadeIn _delay3ms\" [tooltip]=\"full\" (click)=\"toggleFullScreen('full')\">\n                <img src=\"/assets/img/icons/ic_fullscreen_white_24dp/web/ic_fullscreen_white_24dp_1x.png\" class=\"img-fluid\">\n            </button>\n            <tooltip-content #restore [animation]=\"true\">\n                <small>restore</small>\n            </tooltip-content>       \n            <button *ngIf=\"fullscreen\" class=\"btn btn-primary animated fadeIn _delay4ms\" [tooltip]=\"restore\" (click)=\"toggleFullScreen('restore')\">\n                <img src=\"/assets/img/icons/ic_fullscreen_exit_white_24dp/web/ic_fullscreen_exit_white_24dp_1x.png\" class=\"img-fluid\">\n            </button>\n        </div>\n    </div>\n    <div class=\"document-review-display-section _scrollbar\" *ngIf=\"fileId\">\n        <!--\n        <fiyps-refresh [visibility]=\"visibility\"></fiyps-refresh>\n        \n        <form [formGroup]=\"docReviewForm\" (ngSubmit)=\"onSubmit(docReviewForm)\">\n            <ckeditor\n                formControlName=\"content\"\n                [(ngModel)]=\"content\"\n                [config]=\"{uiColor: '#0cc10cc4'}\"\n                [readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (save)=\"onSave($event)\"\n                (editorChange)=\"onEditorChange($event)\"\n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                debounce=\"500\">\n            </ckeditor>\n        </form>\n        -->\n        <fiyps-pdf-reader [deliverableTypeId]=\"deliverableTypeId\" [studentGroupId]=\"studentGroupId\" [params]=\"fileId\"></fiyps-pdf-reader>\n        <div *ngIf=\"userType == '2'\" class=\"document-review-save-btn pull-right\">\n            <button class=\"btn btn-info\" (click)=\"_approveFile()\">Approve</button>\n        </div>\n    </div>\n    <div class=\"defaults-container animated fadeIn _delay4ms\" *ngIf=\"!fileId\">\n        <img src=\"./assets/img/defaults/noDocumentReview.fw.png\" class=\"img-fluid\" />\n    </div>   \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/document-review/document-review.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DocumentReviewComponent = (function () {
    function DocumentReviewComponent(api) {
        this.api = api;
        this.fullscreen = false;
        this.visibility = false;
        this.fileId = null;
        this.studentGroupId = null;
        this.filename = null;
        this.refreshUploadsTable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.userType = null;
        this.selectedFileId = null;
        this.deliverableTypeId = null;
    }
    DocumentReviewComponent.prototype.ngOnInit = function () {
    };
    /* Toggle container visibility */
    DocumentReviewComponent.prototype._slideToggle = function (container, icon, maxSize) {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("." + icon + " > .icon").toggleClass("closed");
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".document-review-wrapper > .defaults-container").slideToggle("fast", "linear");
        this.api._slideToggle(container, icon, maxSize);
    };
    /*
      onSave(event){
        event.preventDefault();
        console.log("Data recieved from the form.")
        console.log(event)
      }
    */
    /* Approve file event */
    DocumentReviewComponent.prototype._approveFile = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"]({
            type: "GET",
            url: this.api.getApproveDeliverableEndPoint() + "/" + this.fileId + "/" + this.studentGroupId + "?token=" + this.api._getToken(),
            error: (function (error) {
                _this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
            }),
            success: (function (data) {
                _this.openPopup('Deliverable approved');
                _this.refreshUploadsTable.emit();
            })
        });
    };
    /* Handle toggle fullscreen */
    DocumentReviewComponent.prototype.toggleFullScreen = function (mode) {
        if (mode === 'full') {
            this.fullscreen = true;
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".pdfViewerContainer").addClass("fullscreen-pdfViewerContainer");
        }
        else if (mode === 'restore') {
            this.fullscreen = false;
            __WEBPACK_IMPORTED_MODULE_1_jquery__(".pdfViewerContainer").removeClass("fullscreen-pdfViewerContainer");
        }
    };
    /* Pop over */
    DocumentReviewComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    DocumentReviewComponent.prototype.ngOnChanges = function () {
        if (this.selectedFileId) {
            /* Fetch the file */
            this.filename = this.selectedFileId['name'];
            this.fileId = this.selectedFileId['id'];
            this.studentGroupId = this.selectedFileId['studentGroupId'];
            console.log(this.studentGroupId);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentReviewComponent.prototype, "refreshUploadsTable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DocumentReviewComponent.prototype, "userType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DocumentReviewComponent.prototype, "selectedFileId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DocumentReviewComponent.prototype, "deliverableTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2PopupComponent"])
    ], DocumentReviewComponent.prototype, "popup", void 0);
    DocumentReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-document-review',
            template: __webpack_require__("../../../../../src/app/components/document-review/document-review.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/document-review/document-review.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], DocumentReviewComponent);
    return DocumentReviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"_footer\">\n  <div>\n      &copy; 2017-2018 college of computing & information sciences. Built with <i class=\"fas fa-heart\"></i> by BSE18-10. All rights reserved\n  </div>\n</div> "

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "._date,\r\n._time{\r\n    color: white;\r\n}\r\n._date > a,\r\n._time > a{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n._time > a{\r\n    font-size: 18px;\r\n    background-color: transparent;\r\n}\r\n._time > a:hover {\r\n    background: transparent;\r\n}\r\n._date > a:hover {\r\n    background: transparent;\r\n}\r\n@media only screen and (max-width: 1024px){\r\n    .x-navigation.x-navigation-panel li.xn-icon-button {\r\n        width: -webkit-fit-content;\r\n        width: -moz-fit-content;\r\n        width: fit-content;\r\n    }\r\n}\r\n\r\n@media (max-width: 446px){\r\n    ._date{\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START X-NAVIGATION VERTICAL -->\n<ul class=\"x-navigation x-navigation-horizontal x-navigation-panel\">\n    <!-- TOGGLE NAVIGATION -->  \n    <li class=\"xn-icon-button\">\n        <a class=\"x-navigation-minimize _a\"><span class=\"fa fa-outdent\"></span></a>\n    </li> \n    <!-- END TOGGLE NAVIGATION -->\n    <!-- SIGN OUT -->\n    <li class=\"xn-icon-button pull-right\">\n        <a class=\"mb-control _a\" data-box=\"#mb-signout\"><span class=\"fa fa-sign-out-alt\"></span></a>                        \n    </li> \n    <!-- END SIGN OUT -->\n    <li class=\"xn-icon-button _time\">                   \n       <a>{{ time | date:'mediumTime' }}</a>\n    </li>       \n    <li class=\"xn-icon-button _date\">                   \n       <a class=\"animated fadeInDown\">{{ today | date:'fullDate' }}</a>\n    </li>\n    <!-- MESSAGES -->\n    <li class=\"xn-icon-button pull-right\">\n        <a href=\"#\"><span class=\"fa fa-comments\"></span></a>\n        <div class=\"informer informer-danger\">4</div>\n        <div class=\"panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\"><span class=\"fa fa-comments\"></span> Messages</h3>                                \n                <div class=\"pull-right\">\n                    <span class=\"label label-danger\">4 new</span>\n                </div>\n            </div>\n            <div class=\"panel-body list-group list-group-contacts scroll\" style=\"height: 200px;\">\n                <a href=\"#\" class=\"list-group-item\">\n                    <div class=\"list-group-status status-online\"></div>\n                    <img src=\"assets/img/users/user2.jpg\" class=\"pull-left\" alt=\"John Doe\"/>\n                    <span class=\"contacts-title\">John Doe</span>\n                    <p>Praesent placerat tellus id augue condimentum</p>\n                </a>\n                <a href=\"#\" class=\"list-group-item\">\n                    <div class=\"list-group-status status-away\"></div>\n                    <img src=\"assets/img/users/user3.jpg\" class=\"pull-left\" alt=\"Nadia Ali\"/>\n                    <span class=\"contacts-title\">Nadia Ali</span>\n                    <p>Mauris vel eros ut nunc rhoncus cursus sed</p>\n                </a>\n                <a href=\"#\" class=\"list-group-item\">\n                    <div class=\"list-group-status status-offline\"></div>\n                    <img src=\"assets/img/users/user6.jpg\" class=\"pull-left\" alt=\"Darth Vader\"/>\n                    <span class=\"contacts-title\">Darth Vader</span>\n                    <p>I want my money back!</p>\n                </a>\n            </div>     \n            <div class=\"panel-footer text-center\">\n                <a class=\"pointer\">Show all messages</a>\n            </div>                            \n        </div>                        \n    </li>\n    <!-- END MESSAGES -->         \n</ul>\n<!-- END X-NAVIGATION VERTICAL -->                     \n<!-- MESSAGE BOX-->\n<div class=\"message-box _scrollbar _delay3ms fadeIn\" data-sound=\"alert\" id=\"mb-signout\">\n    <div class=\"mb-container\">\n        <div class=\"mb-middle\">\n            <div class=\"mb-title\"><span class=\"fas fa-sign-out-alt\"></span> Log <strong>Out</strong> ?</div>            \n            <div class=\"mb-content\">\n                <p>Are you sure you want to log out?</p>                    \n                <p>Press No if you want to continue work. Press Yes to logout current user.</p>\n            </div>\n            <div class=\"mb-footer\">\n                <div class=\"pull-right\">\n                    <a class=\"btn btn-success btn-lg _a\" (click)=\"_sigout()\" >Yes</a>\n                    <button class=\"btn btn-default btn-lg mb-control-close\">No</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- END MESSAGE BOX-->\n<!-- START PRELOADS -->\n<audio id=\"audio-alert\" src=\"assets/audio/alert.mp3\" preload=\"auto\"></audio>\n<audio id=\"audio-fail\" src=\"assets/audio/fail.mp3\" preload=\"auto\"></audio>\n<!-- END PRELOADS -->   "

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(http, route) {
        this.http = http;
        this.route = route;
        this.today = Date.now();
        this.time = this.today;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Clock
        setInterval(function () {
            _this.time = Date.now();
        }, 1000);
    };
    HeaderComponent.prototype._sigout = function () {
        this.route.navigate(['/']);
        //this.api_service._checkSession();
        /*
        if(this.api_service._getLoggedInStatus){
          this.http.post( this.api_service.apiUrl+"/signout", this.api_service._getSession())
          .subscribe(
            data => {
              console.log(data['token'])
              if((data['status']) && (data['status']) == 'sign-out'){
                console.log(data['status'])
              }else if(data['error']){
                console.log(data['error'])
              }
              this.api_service._usetLoggedInStatus();
              this.route.navigate(['/']);
            }
          );
        }else{
          console.log("User already signed out");
          setTimeout(() =>{
            this.api_service._usetLoggedInStatus();
            this.route.navigate(['/']);
          },2000)
        }
        */
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inner-wrapper{\r\n    background-color: #ffffff5c;\r\n    padding-left: 4px;\r\n}\r\n@media(max-width: 1024px){\r\n    .inner-wrapper > p{\r\n        margin: 0 0 10px;\r\n        font-size: 11px !important;\r\n        font-weight: 600;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"component-wrapper animated fadeIn\">\n  <div class=\"refresh-wrapper\">\n    <fiyps-refresh [visibility]=\"visibility\"></fiyps-refresh>\n  </div>\n  <div class=\"inner-wrapper\">\n    <p *ngFor=\"let l of logs\">{{ l.log }}</p>\n  </div>\n</div>\n<fiyps-footer class=\"_min-footer\"></fiyps-footer>"

/***/ }),

/***/ "../../../../../src/app/components/logs/logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogsComponent = (function () {
    function LogsComponent(api) {
        this.api = api;
        this.logs = null;
        this.visibility = false;
        this._fetch();
    }
    LogsComponent.prototype.ngOnInit = function () {
    };
    LogsComponent.prototype._fetch = function () {
        var _this = this;
        this.visibility = true;
        this.logs = this.api._fetchLogFiles();
        setTimeout(function () {
            console.log("Wait for 2 seconds");
            _this.visibility = false;
        }, 1500);
    };
    LogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-logs',
            template: __webpack_require__("../../../../../src/app/components/logs/logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logs/logs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pdf-reader/pdf-reader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pdf-reader-container{\r\n  height: 100%;\r\n  /*position: absolute;*/\r\n  z-index: 3;\r\n  background: rgba(0, 0, 0, 0.87);\r\n  padding: 0px;\r\n  left: 0;\r\n  width: 100%;\r\n  min-height: 442px;\r\n}\r\n.pdfViewerContainer {\r\n    padding: 18px 5% 3px 5%;\r\n    background: transparent;\r\n    transition: all .4s ease-in-out;\r\n    padding-bottom: 3px !important;\r\n    height: 413px;\r\n}\r\n.pdfControlsContainer{\r\n    text-align: right;\r\n    background-color: #f6f6f6;\r\n    padding: 0px;\r\n}\r\n.pdfPagination{\r\n    width: -webkit-fit-content !important;\r\n    width: -moz-fit-content !important;\r\n    width: fit-content !important;\r\n    margin-left: auto;\r\n    margin-right: auto;  \r\n    border: 0px;\r\n    font-size: 14px;\r\n    background-color: transparent;\r\n    padding-right: 64px;\r\n}\r\n.totalPages{\r\n    font-weight: 900;\r\n}\r\n.pdfPageNumber{\r\n    color: black;\r\n    font-weight: 900;\r\n    display: inline-block;\r\n    height: 24px;\r\n    text-align: center;\r\n    width: 60px !important;\r\n    margin-top: -2px;\r\n    padding-right: 0px;\r\n}\r\n.btn-container{\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin-bottom: 115px;\r\n    padding-right: 11px;\r\n}\r\n.btn-primary{\r\ndisplay: none;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  height: 36px;\r\n  width: 36px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  box-shadow: 0px 2px 2px 0px black !important;\r\n  margin-bottom: 6px;\r\n}\r\n.pdfPrevBtn,\r\n.pdfNextBtn{\r\n    background-color: rgba(77, 208, 77, 0.74);\r\n    border-color: rgb(77, 208, 77);\r\n}\r\n.btn-container > button > img{\r\n  width: 16px;\r\n}\r\n.btn-container > .btn-primary:hover, \r\n.btn-container > .btn-primary:focus, \r\n.btn-container > .btn-primary:active {\r\n    background-color: #4dcf4d;\r\n    border-color: #4dcf4d;\r\n}\r\n.btn-container > .btn-primary.pdfCloseBtn {\r\n  background-color: rgba(224, 75, 74, 0.74);\r\n  border-color: #e04b4a;\r\n}\r\n.btn-container > .btn-primary.pdfCloseBtn:hover, \r\n.btn-container > .btn-primary.pdfCloseBtn:focus, \r\n.btn-container > .btn-primary.pdfCloseBtn:active {\r\n  background-color: #e04b4a;\r\n}\r\n.pdfViewerContainer{\r\n    padding: 18px 5% 3px 5%;\r\n    background: transparent; \r\n    transition: all .4s ease-in-out;\r\n}\r\n.show{\r\n    display: block;\r\n}\r\n@media(min-width: 768px){\r\n    .pdf-reader-container{\r\n        min-height: 442px;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pdf-reader/pdf-reader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 pdf-reader-container\">\n  <fiyps-refresh [visibility]=\"visibility\"></fiyps-refresh>\n  <div *ngIf=\"isLoaded\" class=\"pdfControlsContainer\">\n    <tooltip-content #goTo [animation]=\"true\">\n      <small>Go to</small>\n    </tooltip-content> \n    <span class=\"form-control pdfPagination\"><input [tooltip]=\"goTo\"  [(ngModel)]=\"pdfPage\" type=\"number\" [max]=\"totalPages\" [min]=\"min\" class=\"form-control pdfPageNumber\" value=\"{{ pdfPage }}\" /> / <span class=\"totalPages\">{{ totalPages }}</span></span>\n    <div class=\"btn-container\">\n      <tooltip-content #close [animation]=\"true\">\n        <small>Close</small>\n      </tooltip-content> \n      <button class=\"btn btn-primary animated fadeInRight _delay2ms pdfCloseBtn\" *ngIf=\"!deliverableTypeId\" [tooltip]=\"close\" (click)=\"_close()\"><img src=\"/assets/img/icons/ic_clear_black_24dp/web/ic_clear_black_24dp_1x.png\" class=\"img-fluid\"></button>      \n      <tooltip-content #prev [animation]=\"true\">\n        <small>Previous</small>\n      </tooltip-content>       \n      <button class=\"btn btn-primary animated fadeInRight _delay3ms pdfPrevBtn\" [tooltip]=\"prev\" [disabled]=\"pdfPage === 1\" (click)=\"_prevPage()\">\n        <img src=\"/assets/img/icons/ic_remove_white_24dp/web/ic_remove_white_24dp_1x.png\" class=\"img-fluid\">\n      </button>\n      <tooltip-content #next [animation]=\"true\">\n        <small>Next</small>\n      </tooltip-content>       \n      <button class=\"btn btn-primary animated fadeInRight _delay4ms pdfNextBtn\" [tooltip]=\"next\" [disabled]=\"pdfPage === totalPages\" (click)=\"_nextPage()\">\n        <img src=\"/assets/img/icons/ic_add_white_24dp/web/ic_add_white_24dp_1x.png\" class=\"img-fluid\">\n      </button>\n    </div>\n  </div>\n  <div class=\"pdfViewerContainer _widget-scrollbar {{ fullscreen }} \">\n    <pdf-viewer [src]=\"url\" \n        [page]=\"pdfPage\"\n        [render-text]=\"true\"\n        [show-all]=\"false\"\n        [original-size]=\"originalSize\"\n        [autoresize]=\"autoResize\"\n        style=\"display: block;margin-left:auto;margin-right:auto;max-width: 80%\"\n        (on-progress)=\"_handleOnProgress($event)\"\n        (page-rendered)=\"_handlePageRendered($event)\"\n        (after-load-complete)=\"_handleLoadComplete($event)\"\n    ></pdf-viewer>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pdf-reader/pdf-reader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfReaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PdfReaderComponent = (function () {
    function PdfReaderComponent(api_service) {
        this.api_service = api_service;
        this.params = [];
        this.studentGroupId = null;
        this.deliverableTypeId = null;
        this.groupName = null;
        this.fullscreen = null;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.userType = null;
        this.visibility = false;
        this.pdfPage = 1;
        this.autoResize = true;
        this.originalSize = false;
        this.rotation = [0, 90, 180];
        this.currentPageLoaded = 0;
        this.totalPages = 0;
        this.isLoaded = false;
        this.progressTotal = 0;
        this.progressLoaded = 0;
        this.url = '';
        this.min = 1;
        this.userType = this.api_service._getUserType();
        console.log("user type from the pdf reader: ", this.userType);
    }
    PdfReaderComponent.prototype.ngOnInit = function () {
        var height = __WEBPACK_IMPORTED_MODULE_2_jquery__(window).height();
        setInterval(function () {
            //$(".pdfViewerContainer").css('height',height - 115);
        }, 1000);
    };
    /* Close the Pdf view */
    PdfReaderComponent.prototype._close = function () {
        this.onClose.emit();
    };
    /* Navgate to the previous page */
    PdfReaderComponent.prototype._prevPage = function () {
        this.pdfPage--;
    };
    /* Navigate to the next page */
    PdfReaderComponent.prototype._nextPage = function () {
        this.pdfPage++;
    };
    /* Handling events fired off when the pdf is loading */
    PdfReaderComponent.prototype._handleOnProgress = function (progressData) {
        this.progressTotal = progressData.total;
        this.progressLoaded = progressData.loaded;
    };
    /* Recieve page number of the currently rendered page */
    PdfReaderComponent.prototype._handlePageRendered = function (e) {
        this.currentPageLoaded = e.detail.pageNumber;
        this.visibility = false;
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".btn-primary").addClass("show");
        }, 1500);
    };
    /* Handle after load complete event */
    PdfReaderComponent.prototype._handleLoadComplete = function (pdf) {
        this.totalPages = pdf.numPages;
        this.isLoaded = true;
    };
    /* Build the url for retrieving the document */
    PdfReaderComponent.prototype._fetch = function () {
        this.visibility = false;
        this.url = this.api_service._getApiUrl() + this.api_service.ep_readPDF + "/" + this.params + "/" + this.studentGroupId + "/" + this.deliverableTypeId + "/" + this.userType + "?token=" + this.api_service._getToken();
    };
    PdfReaderComponent.prototype._fetchArchivedProjectsFile = function () {
        this.visibility = false;
        this.url = this.api_service._getApiUrl() + this.api_service.ep_readPDF + "/" + this.params + "/" + this.studentGroupId + "/" + this.groupName + "?token=" + this.api_service._getToken();
    };
    /* Detect changes */
    PdfReaderComponent.prototype.ngOnChanges = function () {
        if (this.params != null && this.deliverableTypeId) {
            this._fetch();
        }
        else {
            console.log("Here");
            this._fetchArchivedProjectsFile();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PdfReaderComponent.prototype, "params", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PdfReaderComponent.prototype, "studentGroupId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PdfReaderComponent.prototype, "deliverableTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PdfReaderComponent.prototype, "groupName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PdfReaderComponent.prototype, "fullscreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PdfReaderComponent.prototype, "onClose", void 0);
    PdfReaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-pdf-reader',
            template: __webpack_require__("../../../../../src/app/components/pdf-reader/pdf-reader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pdf-reader/pdf-reader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]])
    ], PdfReaderComponent);
    return PdfReaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/progress-scale/progress-scale.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress-wrapper{\r\n    padding: 0px;\r\n    box-shadow: 0px 1px 1px 0px #272b30;\r\n    margin-bottom: 10px;\r\n    margin-top: 1px;\r\n}\r\n.search-wrapper{\r\n    padding-right: 2px;\r\n    padding-left: 1px;\r\n}\r\n.search-bar{\r\n    display: flow-root;\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    background-color: #0cc10cba;\r\n}\r\n._show{\r\n    padding: 0px;\r\n    padding-left: 12px;\r\n}\r\n.form-control._search{\r\n    border: 1px solid #1e212687;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    display: inline-block;\r\n}\r\n\r\n.table > thead > tr > th {\r\n    background: #0cc10c6b;\r\n    color: #23252a;\r\n    padding: 6px 8px;    \r\n}\r\n.form-control {\r\n    background: #f9f9f9 !important;\r\n    border: 1px solid #1e212687;\r\n    font-size: 14px;\r\n    text-align: center;\r\n}\r\n.progress-wrapper-bars{\r\n    padding: 0px;\r\n}\r\n.count{\r\n    border: 2px solid #4dd04d;\r\n    background-color: #4dd04d;\r\n    padding: 8px 13px !important;\r\n}\r\n.count,\r\n.inactive-count{\r\n    float: left;\r\n}\r\n.count,\r\n.inactive-count,\r\n.end,\r\n.complete{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 14px;\r\n    font-weight: 600;\r\n}\r\n.end{\r\n    border: 2px solid #26282d;\r\n    background-color: #24262b;\r\n    color: white;\r\n}\r\n.end,\r\n.complete{\r\n    float: right;\r\n    right: 0;\r\n    padding: 8px 6px;\r\n}\r\n.doc{\r\n    text-align: center;\r\n    transition: all .5s ease-in-out;\r\n    text-transform: capitalize;\r\n    font-weight: 600;\r\n    height: 16px;\r\n}\r\n.stripe{\r\n    border-color:#4dd04d;\r\n}\r\n.date{\r\n    text-align: center;\r\n    transition: all .5s ease-in-out;\r\n    font-weight: 800;\r\n    height: 16px;\r\n    margin-top: 3px;\r\n}\r\n.inactive-stripe{\r\n    border-color: #da4e4c;\r\n}\r\n.stripe,\r\n.inactive-stripe{\r\n    border-width: 3px;\r\n    border-style: solid;\r\n}\r\n.inactive-count{\r\n    border-color: #da4e4c;\r\n    color: white ;\r\n    background-color: #da4e4c;\r\n    padding: 10px 15px !important;\r\n}\r\n.complete{\r\n    border: 2px solid #4dd04d;\r\n    background-color: #4dd04d;\r\n    color: black;\r\n}\r\n.table {\r\n    margin-bottom: 37px;\r\n}\r\n.table-striped>tbody>tr:nth-child(odd) {\r\n    background-color: #f9f9f9db;\r\n}\r\n.table-striped>tbody>tr {\r\n    background-color: #ffffff63;\r\n}\r\ntable > tbody > tr:hover{\r\n    cursor: pointer;\r\n}\r\ntable > tbody > tr > td{\r\n    padding-top: 0px;\r\n    padding-bottom: 0px;\r\n    vertical-align: middle;\r\n    font-size: 14px;\r\n}\r\ntable > tbody > tr:hover .count,\r\ntable > tbody > tr:hover .complete{\r\n    box-shadow: 0 0 0 0 #4dd04d;\r\n    -webkit-animation: pulse 1.4s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n            animation: pulse 1.4s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n.progress-group-tb{\r\n    text-transform: uppercase;\r\n}\r\n.hide{\r\n    display: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/progress-scale/progress-scale.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-wrapper col-xs-12\">\n    <div class=\"search-bar\">\n      <form [formGroup]=\"searchForm\" class=\"form-horizontal\">\n        <div class=\"slideBtn pull-left\" (click)=\"_slideToggle('inner-progress-wrapper','slideBtn > button')\">\n          <button class=\"btn btn-info\"><i class=\"fas fa-caret-down icon\"></i></button>\n        </div>\n        <div class=\"col-md-4 col-sm-4 col-xs-10 _show animated fadeIn\">\n          <label>Show</label>\n          <select class=\"form-control _search\" formControlName=\"size\" (ngModelChange)=\"_show($event)\">\n            <option value=\"5\" ng-reflect-value=\"5\">5</option>\n            <option value=\"10\" ng-reflect-value=\"10\">10</option>\n            <option  value=\"25\" ng-reflect-value=\"25\">25</option>\n            <option  value=\"50\" ng-reflect-value=\"50\">50</option>\n            <option  value=\"100\" ng-reflect-value=\"100\">100</option>\n          </select>\n          <label  class=\"_entries\"> entries of <strong>{{ total }}</strong></label> \n        </div>\n        <div  class=\"col-md-5 col-sm-6 col-xs-12 search-wrapper pull-right animated fadeIn\">\n          <input  class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"Search\" formControlName=\"search\" type=\"search\" >\n        </div>\n      </form>\n    </div>\n    <div class=\"inner-progress-wrapper\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th class=\"progress-count-tb\">#</th>\n            <th>Group</th>\n            <th>Progress</th>\n          </tr>\n        </thead>      \n        <tbody>\n          <tr class=\"records animated fadeInUp _delay{{ i + 3 }}ms\" *ngFor=\"let p of progress | progressScaleFilter:search | paginate: {id: 'archiveProjects', itemsPerPage: pageSize, currentPage: page }; let i = index\">\n            <td class=\"progress-count-tb\">{{ i + 1 }}</td>\n            <td class=\"progress-group-tb\">{{ p.group }}</td>\n            <td>\n              <div *ngFor=\"let s of p.status; let i = index\" class=\"progress-wrapper-bars col-xs-4\" [ngClass]=\"{'progress-concept-paper': i == 0}\">\n                <div class=\"_count{{ i + 1}}\" [ngClass]=\"{'count': s.flag == true,'inactive-count': s.flag == false}\">{{ i + 1 }}</div>\n                <h5 class=\"doc\">{{ s.doc }}</h5>\n                <div class=\"_bar{{ i + 1 }}\" [ngClass]=\"{'stripe': s.flag == true ,'inactive-stripe': s.flag == false}\"></div>\n                <h5 class=\"date\">{{ s.date }}</h5>\n                <div [ngClass]=\"{'end': s.flag == false,'complete': s.flag == true}\" *ngIf=\" i == 2 \">end</div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"_pagiantionContainer has-text-centered\">\n        <pagination-controls id=\"archiveProjects\" (pageChange)=\"page = $event\"></pagination-controls>\n      </div>     \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/progress-scale/progress-scale.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressScaleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgressScaleComponent = (function () {
    function ProgressScaleComponent(api) {
        this.api = api;
        this.progress = null;
        this.show = null;
    }
    ProgressScaleComponent.prototype.ngOnInit = function () {
        if (this.progress) {
            console.log("Data has been sent");
            this.isDesc = false;
            this.column = 'group';
            this.page = 1;
            this.pageSize = 10;
            this.direction = -1;
            this.total = this.progress.length;
        }
        this._sort(this.column);
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](""),
            size: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("10")
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            setTimeout(function () {
                //$(".records").show();
            }, 2000);
        });
    };
    /* Switch table size */
    ProgressScaleComponent.prototype._show = function (size) {
        console.log(size);
        this.pageSize = size;
    };
    /* Re-arrange in descending or ascending order */
    ProgressScaleComponent.prototype._sort = function (field) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = field;
        this.direction = this.isDesc ? 1 : -1;
    };
    /* Toggle inner container visibility */
    ProgressScaleComponent.prototype._slideToggle = function (className, icon) {
        __WEBPACK_IMPORTED_MODULE_1_jquery__("._show").toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".search-wrapper").toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_1_jquery__("." + icon + " > .icon").toggleClass("closed");
        this.api._slideToggle(className, icon, '');
    };
    /* pending */
    ProgressScaleComponent.prototype._animatedProgressBars = function () {
        var count = 1;
        for (count; count <= this.total; count++) {
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("._count1").delay(200).removeClass("empty");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("._bar1").removeClass("emptyBars");
            }, 600);
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("._count2").delay(200).removeClass("empty");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("._bar2").removeClass("emptyBars");
            }, 1300);
            setTimeout(function () {
                __WEBPACK_IMPORTED_MODULE_1_jquery__("._count3").delay(200).removeClass("empty");
                __WEBPACK_IMPORTED_MODULE_1_jquery__("._bar3").removeClass("emptyBars");
            }, 1900);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProgressScaleComponent.prototype, "progress", void 0);
    ProgressScaleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-progress-scale',
            template: __webpack_require__("../../../../../src/app/components/progress-scale/progress-scale.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/progress-scale/progress-scale.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]])
    ], ProgressScaleComponent);
    return ProgressScaleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/refresh/refresh.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".refresh-wrapper{\r\n    background: #ffffffeb url(" + escape(__webpack_require__("../../../../../src/assets/img/loaders/default.gif")) + ") no-repeat center;\r\n    height: 100%;\r\n    z-index: 1;\r\n    position: absolute;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/refresh/refresh.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visibility\" class=\"refresh-wrapper\"></div>"

/***/ }),

/***/ "../../../../../src/app/components/refresh/refresh.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RefreshComponent = (function () {
    function RefreshComponent() {
        this.visibility = false;
    }
    RefreshComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], RefreshComponent.prototype, "visibility", void 0);
    RefreshComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-refresh',
            template: __webpack_require__("../../../../../src/app/components/refresh/refresh.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/refresh/refresh.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RefreshComponent);
    return RefreshComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/select-supervisor/select-supervisor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select-container{\r\n    vertical-align: middle;\r\n    padding: 0px;\r\n    width: 100%;\r\n}\r\n.disabled{\r\n    cursor: not-allowed;\r\n}\r\n@media (max-width: 570px){\r\n    .select{\r\n        font-size: 10px;\r\n        font-weight: 700;   \r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/select-supervisor/select-supervisor.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"selectForm\">\n  <div class=\"col-md-4 col-sm-4 col-xs-12 select-container\">\n    <select [size]=\"size\" class=\"form-control select\" placeholder=\"Assign a supervisor\" formControlName=\"supervisor\" (ngModelChange)=\"_selectSupervisor(details = $event)\">\n      <option [value]=\"default\" class=\"disabled\" selected>Assign a supervisor</option>\n      <option *ngFor=\"let s of supervisors\" value=\"{{ s.name }}\">{{ s.name }}</option>\n    </select>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/select-supervisor/select-supervisor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectSupervisorComponent = (function () {
    function SelectSupervisorComponent(api) {
        this.api = api;
        this.supervisors = null;
        this.groupCountData = null;
        this.size = 1;
        this.currentSelection = null;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.onCount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        // Fetch the data from the service.
        this.supervisors = this.api._getSupervisors();
    }
    SelectSupervisorComponent.prototype.ngOnInit = function () {
        this.selectForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            supervisor: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("Assign a supervisor"),
        });
    };
    /* On selecting a supervisor */
    SelectSupervisorComponent.prototype._selectSupervisor = function (data) {
        var _this = this;
        if (this.currentSelection == null && data != "default") {
            console.log("first time");
            this._updateSupervisor(data);
        }
        else if (data != "default") {
            console.log(this.currentSelection);
            this.supervisors.filter(function (item) {
                if (item.name == _this.currentSelection) {
                    _this.currentSelection = null;
                    _this.onCount.emit(parseInt(item.groupsCount) - 1);
                    _this.supervisors = _this.api._onSupervisorChange(data);
                    _this._updateSupervisor(data);
                }
            });
        }
    };
    SelectSupervisorComponent.prototype._updateSupervisor = function (data) {
        var _this = this;
        this.supervisors.filter(function (item) {
            if (item.name == data) {
                _this.currentSelection = data;
                _this.onCount.emit(parseInt(item.groupsCount) + 1);
                _this.supervisors = _this.api._onSupervisorSelect(data);
                _this.onSelect.emit(item);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SelectSupervisorComponent.prototype, "onSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SelectSupervisorComponent.prototype, "onCount", void 0);
    SelectSupervisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-select-supervisor',
            template: __webpack_require__("../../../../../src/app/components/select-supervisor/select-supervisor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/select-supervisor/select-supervisor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]])
    ], SelectSupervisorComponent);
    return SelectSupervisorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/statistics-block/statistics-block.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statistics-block{\r\n    padding: 0px;\r\n    padding-right: 13px;\r\n}\r\n.block{\r\n    box-shadow: 0px 1px 1px 0px #272b30;\r\n    padding: 14px 10px;\r\n    background: #ffffff00 url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.png")) + ") left top repeat;\r\n    cursor: pointer;\r\n    transition: all .5s ease-in-out;\r\n    margin-bottom: 12px;\r\n}\r\n.block:hover .icon{\r\n    font-size: 50px;\r\n}\r\n.lastBlock{\r\n    padding-right: 0px;\r\n}\r\nh4{\r\n    line-height: 30px;\r\n    font-size: 20px;\r\n    text-transform: capitalize;\r\n    font-weight: 600;\r\n    color: #f6f6f6;\r\n    transition: all .3s ease-in-out;\r\n}\r\n.statistics{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-size: 30px;\r\n    line-height: 30px;\r\n    display: inline-block;\r\n    color: #f6f6f6;\r\n}\r\n.icon{\r\n    display: inline-block;\r\n    line-height: 30px;\r\n    vertical-align: bottom;\r\n    font-size: 46px;\r\n    position: absolute;\r\n    right: 19px;\r\n    top: 42px;\r\n    color: #ffffff63;\r\n    transition: all .3s ease-in-out;\r\n}\r\n.lastBlock > div > .icon{\r\n    right: 7px;\r\n}\r\n.red{\r\n    background-color: #e04b4a;\r\n}\r\n.green{\r\n    background-color: #4dd04d;\r\n}\r\n.yellow{\r\n    background-color: #f9d868;\r\n}\r\n.black{\r\n    background-color: #212329;\r\n}\r\n.yellow > h4,\r\n.yellow > div{\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/statistics-block/statistics-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"statistics-block col-sm-3 {{ lastBlock }}\">\n  <div class=\"block {{ color }}\">\n    <h4> {{ name }}</h4>\n    <div class=\"statistics\">\n      {{ count }}\n    </div>\n    <div class=\"icon\">\n      <i class=\"fas fa-signal\"></i>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/statistics-block/statistics-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatisticsBlockComponent = (function () {
    function StatisticsBlockComponent() {
        this.name = null;
        this.count = null;
        this.lastBlock = null;
        this.color = null;
    }
    StatisticsBlockComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticsBlockComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticsBlockComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticsBlockComponent.prototype, "lastBlock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], StatisticsBlockComponent.prototype, "color", void 0);
    StatisticsBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-statistics-block',
            template: __webpack_require__("../../../../../src/app/components/statistics-block/statistics-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/statistics-block/statistics-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatisticsBlockComponent);
    return StatisticsBlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/student-profile/student-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student-profile/student-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  student-profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/student-profile/student-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentProfileComponent = (function () {
    function StudentProfileComponent() {
    }
    StudentProfileComponent.prototype.ngOnInit = function () {
    };
    StudentProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-student-profile',
            template: __webpack_require__("../../../../../src/app/components/student-profile/student-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/student-profile/student-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentProfileComponent);
    return StudentProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/supervision-groups/supervision-groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".groupnames-defaults-container{\r\n    height: 85%;\r\n    padding-top: 29px;\r\n    text-align: center;\r\n    background: rgba(255, 255, 255, 0.78);\r\n}\r\n._nameSearch{\r\n    width: 96%;\r\n    margin: 6px;\r\n}\r\n.groupname{\r\n    cursor: pointer;\r\n}\r\n.hightlight,\r\n.groupname:hover{\r\n    font-weight: 800;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervision-groups/supervision-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup> \n<div class=\"_nameSearch\">\n  <tooltip-content #searchField [animation]=\"true\" placement=\"bottom\">\n    <small>search</small>\n  </tooltip-content>                \n  <input [tooltip]=\"searchField\" class=\"form-control\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"search\" aria-controls=\"DataTables_Table_0\" aria-label=\"Search\">\n</div>\n<table *ngIf=\"total\" class=\"table table-striped\">\n  <tbody>\n    <tr *ngFor=\"let group of groups | filter:search ; let i = index;\" class=\"animated fadeInUp _delay{{ i + 1 }}ms\">               \n      <td class=\"groupname _{{ i }}\"  (click)=\"_reviewGroup(i,group.groupname)\">{{ group.groupname }}</td>\n    </tr>\n  </tbody>\n</table>\n<div *ngIf=\"!total\" class=\"groupnames-defaults-container\">\n  <img src=\"./assets/img/defaults/search.jpg\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/supervision-groups/supervision-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisionGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupervisionGroupsComponent = (function () {
    function SupervisionGroupsComponent(api) {
        this.api = api;
        this.groups = null;
        this.total = 0;
        this.selectedGroup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
    }
    SupervisionGroupsComponent.prototype.ngOnInit = function () {
        this._fetch();
    };
    /* Fetch the groups partaining the supervision id */
    SupervisionGroupsComponent.prototype._fetch = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            type: "GET",
            url: this.api.getFetchGroupsEndPoint(),
            error: (function (e) {
                _this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
            }),
            success: (function (data) {
                console.log("the data sent over:", data);
                if (data['data']) {
                    if (data['data'] != 'empty') {
                        _this.groups = data['data'];
                    }
                    else {
                        _this.groups = [];
                    }
                }
                else {
                    _this.openPopup('Server Error.Please contact our IT Support team at mactechlabs1@gmail.com');
                    _this.groups = [];
                }
                _this.total = _this.groups.length;
            })
        });
    };
    /* handle group details of the selected group */
    SupervisionGroupsComponent.prototype._reviewGroup = function (classname, groupname) {
        this.selectedGroup.emit({ groupname: groupname });
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".groupname").removeClass("hightlight");
        __WEBPACK_IMPORTED_MODULE_2_jquery__("._" + classname + "").addClass("hightlight");
    };
    /* Pop over */
    SupervisionGroupsComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SupervisionGroupsComponent.prototype, "selectedGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2PopupComponent"])
    ], SupervisionGroupsComponent.prototype, "popup", void 0);
    SupervisionGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fyps-supervision-groups',
            template: __webpack_require__("../../../../../src/app/components/supervision-groups/supervision-groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/supervision-groups/supervision-groups.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */]])
    ], SupervisionGroupsComponent);
    return SupervisionGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/supervisor-profile/supervisor-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/supervisor-profile/supervisor-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  supervisor-profile works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/supervisor-profile/supervisor-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupervisorProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SupervisorProfileComponent = (function () {
    function SupervisorProfileComponent() {
    }
    SupervisorProfileComponent.prototype.ngOnInit = function () {
    };
    SupervisorProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-supervisor-profile',
            template: __webpack_require__("../../../../../src/app/components/supervisor-profile/supervisor-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/supervisor-profile/supervisor-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupervisorProfileComponent);
    return SupervisorProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/uploaded-files/uploaded-files.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".uploads-table{\r\n    overflow: hidden;\r\n    max-height: 250px;\r\n    width: 100%;\r\n    background: #ffffffb5;\r\n}\r\n.uploads-table > div{\r\n    padding: 0px;\r\n    min-height: 250px;\r\n    max-height: 250px;\r\n    overflow: hidden;\r\n}\r\n.uploads-table > div:first-child {\r\n    overflow: auto;\r\n}\r\n.uploads-table > div > table > thead > tr > th{\r\n    background: #0cc10c6b;\r\n    color: #23252a;\r\n    padding: 6px 8px;\r\n    text-align: center;\r\n}\r\n.uploads-table > div  > table > tbody > tr{\r\n    transition: all .4s ease-in-out;\r\n}\r\n.uploads-table > div  > table > tbody > tr:hover{\r\n    cursor: pointer;\r\n    background-color: #93de9352;\r\n}\r\n.file-name{\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n    text-align: left !important;\r\n}\r\n.other-tables{\r\n    cursor: default;\r\n}\r\n.uploads-table > div  > table > tbody > tr > td{\r\n    padding: 2px 8px;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n.remove-btn{\r\n    background: #e04b4a9c !important;;\r\n    border: 1px solid #e04b4a !important;;\r\n    padding: 1px 16px;\r\n    transition: all .4s ease-in-out;\r\n}\r\n.remove-btn:hover{\r\n    background: #e04a4a !important;\r\n}\r\n.drop-zone-wrapper{\r\n    cursor: pointer;\r\n    border: 2px dashed #4d4f53;\r\n    min-height: 241px;\r\n    max-height: 250px;\r\n    text-align: center;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.png")) + ") left top repeat rgba(238, 237, 236, 0.38);\r\n    margin: 5px;\r\n}\r\n.drop-zone-wrapper:hover .fa-cloud-upload-alt{\r\n    color: #000000;\r\n}\r\n.fa-cloud-upload-alt{\r\n    transition: all .5s ease-in-out;\r\n    color: #2123284a;\r\n    font-size: 56px;\r\n    position: absolute;\r\n    margin: 37px -33px;\r\n}\r\n.auto{\r\n    height: auto !important;\r\n}\r\n.confirm-delete-title{\r\n    /*font-size: 17px !important;*/\r\n}\r\n.confrim-delete-form > div{\r\n    display: inline-block;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;  \r\n}\r\n.confrim-delete-form > div:first-child{\r\n   margin-top: 0px;\r\n   margin-right: 70px;\r\n}\r\n.confrim-delete-form > div > label{\r\n\r\n}\r\n#mb-confirm-delete{\r\n    max-height: unset !important;\r\n}\r\n.defaults-container{\r\n    text-align: center;\r\n    padding: 0px;\r\n    padding-top: 20px;\r\n    overflow: hidden;\r\n    padding: 20px;\r\n    padding-bottom: 0px;\r\n}\r\n.fullWidth{\r\n    width: 100%;\r\n}\r\n.extra-left-margin{\r\n    margin-left: -15px;\r\n}\r\n.ready-for-submission-btn{\r\n    background-color: rgba(16, 160, 18, 0.76);\r\n    color: white;\r\n    font-size: 10px;\r\n    font-weight: 600;\r\n    border: 0px;\r\n    padding: 1px 5px;\r\n    width: 100%;\r\n    word-wrap: break-word;\r\n    cursor: default;\r\n}\r\n.submit-file-overlay{\r\n    height: 20px;\r\n    z-index: 2;\r\n    width: 15.3%;\r\n    position: absolute;\r\n    margin-left: -5px;\r\n    cursor: pointer;\r\n}\r\n@media(max-width:767px){\r\n    .extra-left-margin-all-pages{\r\n        margin-left: -15px;\r\n    }    \r\n    \r\n}\r\n@media(max-width:425px){\r\n    .defaults-container > img{\r\n        width: 100%\r\n    }\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/uploaded-files/uploaded-files.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup> \n<div class=\"uploads-wrapper\" *ngIf=\"userType == '1' || userType == '2'\" [ngClass]=\"{'extra-left-margin': userType == 1, 'extra-left-margin-all-pages': userType == '1' || userType == '2' || userType == '3' }\">\n    <div class=\"uploads-header\" (click)=\"_slideToggle('upload-wrapper','uploads-header-icon','upload-info')\">\n      <div class=\"uploads-header-icon\">\n        <i class=\"fas fa-caret-down icon\"></i>\n      </div>\n      <div class=\"uploads-header-title\">\n        <h4>Uploads</h4>\n      </div>\n      <div class=\"upload-info pull-right\" *ngIf=\"userType == '1'\">\n        max file size of <span>3 MB</span>\n      </div>\n    </div>\n    <div class=\"upload-wrapper\">\n      <div class=\"uploads-table\">\n        <div class=\"col-sm-10 _scrollbar\"  [ngClass]=\"{'fullWidth':userType == 2}\">\n          <fiyps-refresh [visibility]=\"visibility\"></fiyps-refresh>\n          <tooltip-content #fileRead>\n            <span>open this file</span>\n          </tooltip-content>           \n          <tooltip-content #fileDelete>\n            <span>delete the file</span>\n          </tooltip-content>           \n          <table *ngIf=\"fileFound\" class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>File</th>\n                <th>Date modified</th>\n                <th>size</th>\n                <th *ngIf=\"userType == '1'\" class=\"remove-btn-td\">Remove</th>\n                <th class=\"approved\">Approved</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let file of files; let i = index;\" class=\"animated fadeInUp _delay{{ i + 1 }}ms\">\n                <td class=\"other-tables\"> {{ i + 1 }}</td>               \n                <td class=\"file-name\" (click)=\"_readFile(file.id,file.studentGroupId,file.name)\" [tooltip]=\"fileRead\" >{{ file.name }}</td>\n                <td class=\"other-tables\">{{ file.uploadDate }}</td>\n                <td class=\"other-tables\">{{ file.fileSize }}</td>\n                <td *ngIf=\"userType == '1'\" [tooltip]=\"fileDelete\" class=\"remove-btn-td\">\n                  <button class=\"btn btn-info mb-control remove-btn\" data-box=\"#mb-confirm-delete\" (click)=\"_removeFile(file.id)\">\n                    <i class=\"fas fa-times\"></i>\n                  </button>\n                </td>\n                <td class=\"other-tables\"> \n                  <button *ngIf=\"file.approvalFlag == 'true' \" class=\"btn btn-primary ready-for-submission-btn\">\n                    <div *ngIf=\"userType =='1' && file.submitted =='false'\" [ngClass]=\"{'submit-file-overlay':userType == '1'}\" (click)=\"_submitForGrading(file.name,file.id,file.approvalFlag)\"></div>\n                      <span *ngIf=\"file.submitted =='false' else elseBlock\">Ready for submission </span>\n                      <ng-template #elseBlock>\n                        <span>Has been submitted for grading </span>\n                      </ng-template> \n                  </button>    \n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div *ngIf=\"!fileFound\" class=\"col-xs-12 defaults-container animated fadeIn _delay4ms \">\n            <img src=\"./assets/img/defaults/noResults.png\" class=\"img-fluid\" />\n          </div>\n        </div>\n        <div class=\"col-sm-2\" *ngIf=\"userType == '1'\">\n          <div class=\"drop-zone-wrapper _scrollbar\" >\n            <i class=\"fas fa-cloud-upload-alt\"></i>\n            <dropzone \n              [config]=\"config\" \n              (error)=\"onUploadError($event)\" \n              (success)=\"onUploadSuccess($event)\"></dropzone>   \n          </div>\n        </div>\n        <!-- MESSAGE BOX-->\n        <div class=\"message-box _scrollbar animated fadeIn\" id=\"mb-confirm-delete\">\n          <div class=\"mb-container\">\n            <div class=\"mb-middle\">\n              <div class=\"mb-title confirm-delete-title\">Do you want to procced <strong>?</strong></div>            \n              <div class=\"mb-content\">\n                <form [formGroup]=\"confirmDeleteForm\" class=\"confrim-delete-form\">\n                  <div class=\"radio\">\n                    <label><input type=\"radio\" formControlName=\"yes\" class=\"mb-control-close\" (click)=\"_yes()\">Yes</label>\n                  </div>\n                  <div class=\"radio\">\n                    <label><input type=\"radio\" formControlName=\"no\" class=\"mb-control-close\" (click)=\"_no()\">No</label>\n                  </div>          \n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- END MESSAGE BOX-->  \n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/uploaded-files/uploaded-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadedFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadedFilesComponent = (function () {
    function UploadedFilesComponent(api) {
        this.api = api;
        this.files = null;
        this.fileFound = false;
        this.visibility = false;
        this.deleteSeletedFile = 0;
        this.config = {};
        this.selectedFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.userType = null;
        this.deliverableTypeId = null;
        this.groupDetails = null;
        this.refreshUploadsTableFiles = null;
    }
    UploadedFilesComponent.prototype.ngOnInit = function () {
        this.confirmDeleteForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            yes: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("yes", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            no: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("no", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
        });
        this.config = {
            url: this.api._getUploadFilesEndPoint() + "?token=" + this.api._getToken() + "&deliverableTypeId=" + this.deliverableTypeId + "&userType=" + this.userType,
            method: 'post',
            maxFilesize: 3,
            clickable: true,
            acceptedFiles: '.pdf,'
        };
    };
    /* On upload error of the file */
    UploadedFilesComponent.prototype.onUploadError = function (event) {
        console.log("Request failed::" + event);
    };
    /* Toggle container visibility */
    UploadedFilesComponent.prototype._slideToggle = function (container, icon, maxSize) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__("." + icon + " > .icon").toggleClass("closed");
        this.api._slideToggle(container, icon, maxSize);
    };
    /* On successful upload of the file */
    UploadedFilesComponent.prototype.onUploadSuccess = function (event) {
        var _this = this;
        this.visibility = true;
        this._fetchFiles();
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".dz-wrapper").css("height", "auto");
        setTimeout(function () {
            _this.visibility = false;
        }, 500);
    };
    /* Fetch files from the api */
    UploadedFilesComponent.prototype._fetchFiles = function () {
        var _this = this;
        this.api._fetchUploadedFiles(this.deliverableTypeId, this.groupDetails).subscribe(function (data) {
            if (data['data']) {
                console.log(data['data']);
                if ((data['data'] != 'empty')) {
                    _this.fileFound = true;
                    _this.files = data['data'].reverse();
                }
                else {
                    _this.fileFound = false;
                    _this.files = [];
                }
            }
            else if (data['error']) {
                _this.openPopup(data['error']);
            }
        }, function (error) { return console.log(error); });
    };
    /* Remove the selected file */
    UploadedFilesComponent.prototype._removeFile = function (id) {
        this.deleteSeletedFile = id;
        console.log(id);
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#mb-confirm-delete").addClass("open");
    };
    /* Remove the selected file */
    UploadedFilesComponent.prototype._yes = function (rep) {
        var _this = this;
        //empty the deleteSelectedFile variable
        console.log("Delete the selected id" + rep);
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#mb-confirm-delete").removeClass("open");
        console.log("Go ahead and delete this file:", this.deleteSeletedFile);
        __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
            type: "POST",
            url: this.api.getDeleteFileEndpoint(this.deleteSeletedFile),
            error: (function (err) {
                _this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
            }),
            success: (function (data) {
                if (data['data'] == "success") {
                    console.log("File has been successfully deleted");
                    _this.openPopup('File successfully deleted');
                    _this._fetchFiles();
                }
                else if (data['error']) {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Handle no responses */
    UploadedFilesComponent.prototype._no = function (rep) {
        //empty the deleteSelectedFile variable
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#mb-confirm-delete").removeClass("open");
        this.deleteSeletedFile = null;
    };
    /* Handle Read file event */
    UploadedFilesComponent.prototype._readFile = function (id, studentGroupId, name) {
        this.selectedFile.emit({ 'id': id, 'studentGroupId': studentGroupId, 'name': name });
    };
    /* Handle submission events */
    UploadedFilesComponent.prototype._submitForGrading = function (filename, id, approval) {
        var _this = this;
        if (approval == 'true') {
            __WEBPACK_IMPORTED_MODULE_2_jquery__["ajax"]({
                type: 'POST',
                url: this.api.getSubmitDeliverableEndpoint(id),
                error: (function (err) {
                    _this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
                }),
                success: (function (data) {
                    if (data['data']) {
                        _this.openPopup("The " + filename + " has been successfully submitted for grading");
                        _this._fetchFiles();
                    }
                    else {
                        _this.openPopup(data['data']);
                    }
                })
            });
        }
        else {
            this.openPopup("This file is not ready for submission");
        }
    };
    /* Pop over */
    UploadedFilesComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    UploadedFilesComponent.prototype.ngOnChanges = function () {
        if (this.userType == '1') {
            this.groupDetails = this.api._getUserName();
        }
        if (this.groupDetails || (this.refreshUploadsTableFiles != 0)) {
            this._fetchFiles();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UploadedFilesComponent.prototype, "selectedFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UploadedFilesComponent.prototype, "userType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UploadedFilesComponent.prototype, "deliverableTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], UploadedFilesComponent.prototype, "groupDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], UploadedFilesComponent.prototype, "refreshUploadsTableFiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"])
    ], UploadedFilesComponent.prototype, "popup", void 0);
    UploadedFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-uploaded-files',
            template: __webpack_require__("../../../../../src/app/components/uploaded-files/uploaded-files.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/uploaded-files/uploaded-files.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]])
    ], UploadedFilesComponent);
    return UploadedFilesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filters/archived-projects.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedProjectsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArchivedProjectsPipe = (function () {
    function ArchivedProjectsPipe() {
    }
    ArchivedProjectsPipe.prototype.transform = function (archivedPros, term) {
        if (term === undefined)
            return archivedPros;
        return archivedPros.filter(function (item) {
            if (item.name.toLowerCase().includes(term.toLowerCase())) {
                return item.name.toLowerCase().includes(term.toLowerCase());
            }
            else if (item.projectTitle.toLowerCase().includes(term.toLowerCase())) {
                return item.projectTitle.toLowerCase().includes(term.toLowerCase());
            }
            else if (item.supervisor.toLowerCase().includes(term.toLowerCase())) {
                return item.supervisor.toLowerCase().includes(term.toLowerCase());
            }
        });
    };
    ArchivedProjectsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'archivedProjectsFilter'
        })
    ], ArchivedProjectsPipe);
    return ArchivedProjectsPipe;
}());



/***/ }),

/***/ "../../../../../src/app/filters/coordinator-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoordinatorSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CoordinatorSearchPipe = (function () {
    function CoordinatorSearchPipe() {
    }
    CoordinatorSearchPipe.prototype.transform = function (projects, term) {
        if (term === undefined)
            return projects;
        return projects.filter(function (item) {
            if (item.group_name.toLowerCase().includes(term.toLowerCase())) {
                return item.group_name.toLowerCase().includes(term.toLowerCase());
            }
            else if (item.supervisor.toLowerCase().includes(term.toLowerCase())) {
                return item.supervisor.toLowerCase().includes(term.toLowerCase());
            }
            else if (item.submissionTime.toLowerCase().includes(term.toLowerCase())) {
                return item.submissionTime.toLowerCase().includes(term.toLowerCase());
            }
            else if (item.file.toLowerCase().includes(term.toLowerCase())) {
                return item.file.toLowerCase().includes(term.toLowerCase());
            }
        });
    };
    CoordinatorSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'progressScaleFilter'
        })
    ], CoordinatorSearchPipe);
    return CoordinatorSearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/filters/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, term) {
        if (term == undefined)
            return value;
        return value.filter(function (item) {
            return item.group.toLowerCase().includes(term.toLowerCase());
            /*
            if(item.group.toLowerCase().includes(term.toLowerCase())){
              return item.group.toLowerCase().includes(term.toLowerCase());
            }else{
              console.log("search among dates");
              return item.status.filter( res =>{
                return res.date.toLowerCase().includes(term.toLowerCase());
              });
            }
            */
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterGroup'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(api_service, route) {
        this.api_service = api_service;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        /*
          When the auth guard returns false, it cancels the route...
        */
        setTimeout(function () {
            if (!_this.api_service._hasToke()) {
                _this.route.navigate(['/']);
                return false;
            }
        }, 0);
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/pages/add-supervisor-page/add-supervisor-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-supervisor-wrapper{\r\n    margin: 6px 8px 15px;\r\n    border: 1px solid #2022285c;\r\n    border-top: 1px solid #20222814;\r\n    box-shadow: 0px 2px 3px 0px #202228a6;\r\n}\r\n.table {\r\n    margin-bottom: 37px;\r\n}\r\n.header-wrapper{\r\n    display: flow-root;\r\n    background-color: #4ed04e;\r\n}\r\n.form-horizontal{\r\n    display: none;\r\n    visibility: hidden;\r\n    margin-top: 35px;\r\n    padding-top: 8px;\r\n    background-color: #f5f5f4;\r\n}\r\n.visible{\r\n    visibility: visible;\r\n}\r\n.header-wrapper > button {\r\n    border: 1px solid transparent;\r\n    padding: 3px 23px 4px;\r\n    cursor: pointer;\r\n    margin-top: 3px;\r\n    margin-right: 2px;\r\n    border-radius: 2px;\r\n    transition: all .5s ease-in-out;\r\n}\r\n.header-wrapper > button:hover {\r\n    border-color: white !important;\r\n}\r\n.btn-info.pull-right > .icon{\r\n    color: white;\r\n}\r\n.clear{\r\n    background-color:#e04b4a !important;\r\n    border-color:#e04b4a !important;\r\n    color: white !important;\r\n    font-weight: 600px;\r\n}\r\n.names,\r\n.course{\r\n    text-transform: capitalize;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\ntbody > tr > td,\r\n.email > a{\r\n    transition: all .5s ease-in-out;\r\n}\r\n/* Media Queries */\r\n@media (max-width: 768px){\r\n    .header-wrapper > button {\r\n        padding: 8px 23px 12px;\r\n    }\r\n}\r\n@media (max-width: 500px){\r\n    .count{\r\n        display: none;\r\n    }  \r\n    .names,\r\n    .email > a{\r\n        padding-left: 4px;\r\n        padding-right: 0px;\r\n    }\r\n}\r\n@media (max-width: 452px){\r\n    .course{\r\n        display: none;\r\n    } \r\n}\r\n@media (max-width: 432px){\r\n    .form-horizontal{\r\n        padding-left: 2px;\r\n        padding-right: 2px;\r\n    } \r\n}\r\n@media (max-width: 402px){\r\n    .names,\r\n    .email > a,\r\n    .contact{\r\n        font-size: 10.5px;\r\n        font-weight: 600;\r\n    } \r\n}\r\n@media (max-width: 346px){\r\n    .names,\r\n    .email > a,\r\n    .contact{\r\n        font-size: 9px !important;\r\n        font-weight: 800 !important;\r\n    } \r\n}\r\n@media (max-width: 314px){\r\n   \r\n    .contact{\r\n        display: none;\r\n    } \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/add-supervisor-page/add-supervisor-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-supervisor-wrapper\">\n  <div class=\"projects-controls-wrapper animated fadeIn _delay5ms\">\n    <div class=\"header-wrapper\">\n      <div class=\"slideBtn pull-left\" (click)=\"_slideToggle('inner-container','slideBtn > button')\">\n        <button class=\"btn btn-info\"><i class=\"fas fa-caret-down icon\"></i></button>\n      </div>\n      <button class=\"btn btn-info pull-right\" (click)=\"_showForm()\"><i class=\"fas fa-user-plus icon\"></i></button>     \n      <form [formGroup]=\"addSupervisorForm\" class=\"form-horizontal animated _delay4ms\" (ngSubmit)=\"_addSupervisor(addSupervisorForm.value)\">\n        <div class=\"form-group name _form-group\">\n          <label class=\"col-sm-2 col-xs-2\" for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control col-sm-6 animated fadeInDown _delay5ms\" maxlength=\"{{ maxNameLength }}\" formControlName=\"name\" (ngModelChange)=\"_nameSize(name = $event)\">\n          <span> \n            <span *ngIf=\"nameSize != maxNameLength; else nameWarning\"><strong>{{ nameSize }}</strong></span>\n            <ng-template #nameWarning><strong class=\"_warning\">{{ nameSize }}</strong> </ng-template>/ {{ maxNameLength }}\n          </span>  \n        </div>\n        <div class=\"form-group course-input _form-group\">\n          <label class=\"col-sm-2 col-xs-2\" for=\"course\">Course</label>\n          <input type=\"text\" class=\"form-control col-sm-6 animated fadeInDown _delay4ms\" maxlength=\"{{ maxCourseLength }}\" formControlName=\"course\" (ngModelChange)=\"_courseSize(course = $event)\">\n          <span> \n            <span *ngIf=\"courseSize != maxCourseLength; else courseWarning\"><strong>{{ courseSize }}</strong></span>\n            <ng-template #courseWarning><strong class=\"_warning\">{{ courseSize }}</strong> </ng-template>/ {{ maxCourseLength }}\n          </span>  \n        </div>    \n        <div class=\"form-group email _form-group\">\n          <label class=\"col-sm-2 col-xs-2\" for=\"email\">email</label>\n          <input type=\"email\" class=\"form-control col-sm-6 animated fadeInDown _delay3ms\" maxlength=\"{{ maxEmailLength }}\" formControlName=\"email\" (ngModelChange)=\"_emailSize(email = $event)\">\n          <span> \n            <span *ngIf=\"emailSize != maxEmailLength; else emailWarning\"><strong>{{ emailSize }}</strong></span>\n            <ng-template #emailWarning><strong class=\"_warning\">{{ emailSize }}</strong> </ng-template>/ {{ maxEmailLength }}\n          </span>                            \n        </div>\n        <div class=\"form-group contact-input _form-group\">\n          <label class=\"col-sm-2 col-xs-2\" for=\"contact\">phone number</label>\n          <input type=\"text\" class=\"form-control col-sm-6 animated fadeInDown _delay2ms\" maxlength=\"{{ maxContactLength }}\" formControlName=\"contact\" (ngModelChange)=\"_contactSize(contact = $event)\">\n          <span> \n            <span *ngIf=\"contactSize != maxContactLength; else contactWarning\"><strong>{{ contactSize }}</strong></span>\n            <ng-template #contactWarning><strong class=\"_warning\">{{ contactSize }}</strong> </ng-template>/ {{ maxContactLength }}\n          </span>                            \n        </div>\n        <div class=\"form-group sup submit-btn-container\">\n          <div class=\"col-md-6 col-xs-6\">\n            <button class=\"btn btn-info btn-block profile-submit pointer clear\" (click)=\"_hideForm()\"> done ! </button>\n          </div>\n          <div class=\"col-md-6 col-xs-6\">\n            <button class=\"btn btn-info btn-block pointer profile-submit\" type=\"submit\" [disabled]=\"!addSupervisorForm.valid\">submit</button>\n          </div>\n        </div>      \n      </form>\n    </div>\n    <div class=\"dataTables_length\">\n      <form [formGroup]=\"searchForm\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12 _show\">\n          <label>Show</label>\n          <select class=\"form-control _search\" formControlName=\"size\" (ngModelChange)=\"_show(size = $event)\">\n            <option value=\"10\" ng-reflect-value=\"10\">10</option>\n            <option  value=\"25\" ng-reflect-value=\"25\">25</option>\n            <option  value=\"50\" ng-reflect-value=\"50\">50</option>\n            <option  value=\"100\" ng-reflect-value=\"100\">100</option>\n          </select>\n          <label  class=\"_entries\"> entries of <strong>{{ total }}</strong></label> \n        </div>\n        <div  class=\"dataTables_filter col-sm-3 col-xs-12\">\n          <input  class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"Search\" formControlName=\"search\" type=\"search\" >\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"inner-container\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th class=\"count\">#</th>\n          <th>name</th>\n          <th class=\"course\">Course</th>\n          <th class=\"contact\">contact</th>\n          <th>email</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of supervisors | paginate: {id: 'supervisor', itemsPerPage: pageSize, currentPage: page }; let i = index\" class=\"animated fadeInUp _delay{{ i + 3 }}ms\">\n          <td class=\"count\">{{ i + 1 }}</td>\n          <td class=\"names\">{{ s.name }}</td>\n          <td class=\"course\">{{ s.course }}</td>\n          <td class=\"contact\">{{ s.contact }}</td>\n          <td class=\"email\"><a href=\"mailto:{{ s.email }}\">{{ s.email }}</a></td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"_pagiantionContainer has-text-centered\">\n      <pagination-controls id=\"supervisor\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>   \n  </div>\n</div>\n<fiyps-footer class=\"_min-footer\"></fiyps-footer>  "

/***/ }),

/***/ "../../../../../src/app/pages/add-supervisor-page/add-supervisor-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSupervisorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSupervisorPageComponent = (function () {
    function AddSupervisorPageComponent(api) {
        this.api = api;
        this.maxNameLength = 40;
        this.minNameLength = 10;
        this.maxEmailLength = 40;
        this.minEmailLength = 15;
        this.maxContactLength = 15;
        this.minContactLength = 10;
        this.maxCourseLength = 40;
        this.minCourseLength = 2;
        this.nameSize = 0;
        this.emailSize = 0;
        this.contactSize = 0;
        this.courseSize = 0;
        this.show = null;
    }
    AddSupervisorPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(".form-horizontal").hide();
        });
        this.addSupervisorForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(this.maxNameLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(this.minNameLength)
            ])),
            course: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("BSE", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(this.minCourseLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(this.maxCourseLength)
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(this.maxEmailLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(this.minEmailLength)
            ])),
            contact: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(this.maxContactLength),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(this.minContactLength)
            ])),
        });
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("25")
        });
        this._fetch();
        if (this.supervisors) {
            this.isDesc = false;
            this.column = 'name';
            this.page = 1;
            this.pageSize = 25;
            this.direction = -1;
            this.total = this.supervisors.length;
        }
    };
    /* Toggle inner container visibility */
    AddSupervisorPageComponent.prototype._slideToggle = function (className, icon) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__("._show").toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".dataTables_filter").toggleClass("hide");
        __WEBPACK_IMPORTED_MODULE_2_jquery__("." + icon + " > .icon").toggleClass("closed");
        this.api._slideToggle(className, icon, '');
    };
    /* Switch table size */
    AddSupervisorPageComponent.prototype._show = function (size) {
        console.log(size);
        this.pageSize = size;
    };
    /* Fetch data */
    AddSupervisorPageComponent.prototype._fetch = function () {
        this.supervisors = [
            {
                'id': 1,
                'name': 'Nsabagwa Mary',
                'course': 'ALL',
                'contact': '0700111987',
                'email': 'mnsabagwa@cit.ac.ug'
            },
            {
                'id': 2,
                'name': 'Paul Bakaki',
                'course': 'CS',
                'contact': '0700231987',
                'email': 'pbakaki@gmail.com'
            },
            {
                'id': 3,
                'name': 'Grace Kobusinge',
                'course': 'BIS',
                'contact': '0700111887',
                'email': 'gkobusinge@cit.mak.ac.ug'
            },
            {
                'id': 4,
                'name': 'Agaba Joab Ezra',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'jagaba@cit.mak.ac.ug'
            },
            {
                'id': 5,
                'name': 'Grace B. Kamulegeya',
                'course': '	BSE',
                'contact': '0700111987',
                'email': 'kougaus@gmail.com'
            },
            {
                'id': 6,
                'name': 'Engineer Bainomugisha',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'baino@cit.mak.ac.ug'
            },
            {
                'id': 7,
                'name': 'Mercy Amiyo',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'mamiyo@cit.mak.ac.ug'
            },
            {
                'id': 8,
                'name': 'Emmanuel Eilu',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'eiluemma@yahoo.co.uk'
            },
            {
                'id': 9,
                'name': 'Irene Nakiyimba',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'inakiyimba@cit.mak.ac.ug'
            },
            {
                'id': 10,
                'name': 'Richard Mayanja',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'rmayanja@cit.mak.ac.ug'
            },
            {
                'id': 11,
                'name': 'Amina Zawedde',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'sazawedde@cit.ac.ug'
            },
            {
                'id': 12,
                'name': 'Emmanuel Mugejera',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'emugejera@cit.mak.ac.ug'
            },
            {
                'id': 13,
                'name': 'Paul Ssemalulu',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'pssemaluulu@cit.mak.ac.ug'
            },
            {
                'id': 14,
                'name': 'Fiona Tulinayo',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'ftulinayo@cit.mak.ac.ug'
            },
            {
                'id': 15,
                'name': 'Marriette Katarahweirwe',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'kmarriette@cit.mak.ac.ug'
            },
            {
                'id': 16,
                'name': 'Halim Chongomweru',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'hchongomweru@cis.ac.ug'
            },
            {
                'id': 17,
                'name': 'Diana Nakiyinji',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'dnakiyingi@cit.mak.ac.ug'
            },
            {
                'id': 18,
                'name': 'Drake K Mirembe',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'dmiremebe@cit.mak.ac.ug'
            },
            {
                'id': 19,
                'name': 'Ruth Mbabazi Mutebi',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'rmbabazi@cis.mak.ac.ug'
            },
            {
                'id': 20,
                'name': 'Nasser Kimbugwe',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'mkimbugwe@cis.mak.ac.ug'
            },
            {
                'id': 21,
                'name': 'Innocent Ndibatya',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'indibatya@cis.mak.ac.ug'
            },
            {
                'id': 22,
                'name': 'Henry Serugunda',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'hserugunda@cis.mak.ac.ug'
            },
            {
                'id': 23,
                'name': 'Dr John Ngubiri',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'ngubiri@cis.mak.ac.ug'
            },
            {
                'id': 24,
                'name': 'rose Nakibuule',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'rnakibuule@cis.mak.ac.ug'
            },
            {
                'id': 25,
                'name': 'Michael Kizito',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'mkizito@cis.ac.ug'
            },
        ];
    };
    /* Track name size*/
    AddSupervisorPageComponent.prototype._nameSize = function (name) {
        this.nameSize = name.length;
    };
    /* Track course size*/
    AddSupervisorPageComponent.prototype._courseSize = function (course) {
        this.courseSize = course.length;
    };
    /* Track email size*/
    AddSupervisorPageComponent.prototype._emailSize = function (email) {
        this.emailSize = email.length;
    };
    /* Track contact size*/
    AddSupervisorPageComponent.prototype._contactSize = function (contact) {
        this.contactSize = contact.length;
    };
    /* Show form */
    AddSupervisorPageComponent.prototype._showForm = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".form-horizontal").removeClass("fadeOutUp").addClass("visible").show();
    };
    /* Hide Form */
    AddSupervisorPageComponent.prototype._hideForm = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".form-horizontal").addClass("fadeOutUp").removeClass("visible").hide();
    };
    /* Submit new supervisor data */
    AddSupervisorPageComponent.prototype._addSupervisor = function (data) {
        var id = this.supervisors.length + 1;
        this.supervisors.push({
            'id': id,
            'name': data.name,
            'course': data.course,
            'email': data.email,
            'contact': data.contact,
        });
        this.supervisors.reverse();
        this.addSupervisorForm.setValue({
            'name': '',
            'course': '',
            'email': '',
            'contact': ''
        });
    };
    AddSupervisorPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-add-supervisor-page',
            template: __webpack_require__("../../../../../src/app/pages/add-supervisor-page/add-supervisor-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/add-supervisor-page/add-supervisor-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */]])
    ], AddSupervisorPageComponent);
    return AddSupervisorPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/all-lecturers/all-lecturers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".all-lecturers-wrapper{\r\n    box-shadow: 0px 1px 1px 0px #272b30;\r\n    margin: 3px 8px 15px;\r\n    display: flow-root;\r\n}\r\n.table-wrapper{\r\n    background-color: rgba(241, 241, 241, 0.66);\r\n}\r\ntable{\r\n    margin-bottom: 37px;\r\n}\r\ntable > tbody > tr > td{\r\n    vertical-align: middle;\r\n}\r\n.action-th{\r\n    text-align: center;\r\n}\r\n.action-td{\r\n    vertical-align: middle;\r\n}\r\n.action-td > div{\r\n    padding: 0px;\r\n}\r\n.action-td > div > button{\r\n    width: 100%;\r\n}\r\n.action-td > div:first-child{\r\n    text-align: right;\r\n}\r\n.edit:hover{\r\n    background-color: green !important;\r\n}\r\n.action-td > div:last-child{\r\n    padding-left: 4px;\r\n}\r\n.mb-title.confirm-delete-title{\r\n    font-size: 21px !important;\r\n}\r\n.mb-title.confirm-delete-title > strong{\r\n    font-size: 21px;\r\n    margin-left: 5px;\r\n}\r\n@media (max-width: 670px){\r\n    table > tbody > tr > td,\r\n    table > thead > tr > th{\r\n        font-size: 10px !important;\r\n        font-weight: 800 !important;\r\n    }\r\n    .action-th{\r\n        width: 50%;\r\n    }\r\n}\r\n@media (max-width: 495px){\r\n    .action-td > div{\r\n        width: 100%;\r\n    }\r\n    .action-td{\r\n        text-align: center;\r\n    }\r\n    .action-td > div:first-child{\r\n        text-align: unset;\r\n    }    \r\n    .action-td > div:first-child{\r\n        margin-bottom: 4px;\r\n    }    \r\n    .action-td > div:last-child{\r\n        padding-left: 0px;\r\n    }    \r\n}\r\n@media (max-width: 443px){\r\n    .course-th,\r\n    .course-td{\r\n        display: none;\r\n    }    \r\n}\r\n@media (max-width: 390px){\r\n    .count{\r\n        width: 5px;\r\n        padding: 0px !important;\r\n        padding-left: 2px !important;\r\n    }\r\n}\r\n@media (max-width: 367px){\r\n    .email-th,\r\n    .email-td{\r\n        display: none;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/all-lecturers/all-lecturers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"all-lecturers-wrapper\">\n    <div class=\"projects-controls-wrapper animated fadeIn _delay5ms\">\n      <div class=\"dataTables_length\">\n        <form [formGroup]=\"groupsForm\">\n          <div class=\"col-md-4 col-sm-4 col-xs-12 _show\">\n            <label>Show</label>\n            <select class=\"form-control _search\" formControlName=\"size\" (ngModelChange)=\"_show(size = $event)\">\n              <option value=\"10\" ng-reflect-value=\"10\">10</option>\n              <option  value=\"25\" ng-reflect-value=\"25\">25</option>\n              <option  value=\"50\" ng-reflect-value=\"50\">50</option>\n              <option  value=\"100\" ng-reflect-value=\"100\">100</option>\n            </select>\n            <label  class=\"_entries\"> entries of <strong>{{ total }}</strong></label> \n          </div>\n          <div  class=\"dataTables_filter col-sm-3 col-xs-12\">\n            <input  class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"Search\" formControlName=\"search\" type=\"search\" >\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"table-wrapper\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th class=\"count\">#</th>\n            <th class=\"name-th\">name</th>\n            <th class=\"course-th\">course</th>\n            <th class=\"email-th\">email</th>\n            <th class=\"action-th\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"animated fadeInUp _delay{{ i + 3}}ms\" *ngFor=\"let s of supervisors | filter:search | paginate: {id:'allStudents',itemsPerPage: pageSize, currentPage: page }; let i = index;\">\n            <td class=\"count\">{{ i + 1 }}</td>\n            <td class=\"name-td\">{{ s.name }}</td>\n            <td class=\"course-td\">{{ s.course }}</td>\n            <td class=\"email-td\">{{ s.email }}</td>\n            <td class=\"action-td\">\n              <div class=\"col-sm-6 col-xs-6\"><button class=\"btn btn-info edit\" (click)=\"edit(s.id)\">Edit</button></div>\n              <div class=\"col-sm-6 col-xs-6\"><button class=\"btn btn-danger mb-control remove\" data-box=\"#mb-confirm-delete\" (click)=\"showPopup(s.id)\">remove</button></div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"_pagiantionContainer has-text-centered\">\n        <pagination-controls id=\"allStudents\" (pageChange)=\"page = $event\"></pagination-controls>\n      </div>\n    </div>\n  </div>\n  <!-- MESSAGE BOX-->\n  <div class=\"message-box _scrollbar animated fadeIn\" id=\"mb-confirm-delete\">\n    <div class=\"mb-container\">\n      <div class=\"mb-middle\">\n        <div class=\"mb-title confirm-delete-title\">Do you want to procced <strong>?</strong></div>            \n        <div class=\"mb-content\">\n          <form [formGroup]=\"confirmDeleteForm\" class=\"confrim-delete-form\">\n            <div class=\"radio\">\n              <label><input type=\"radio\" formControlName=\"yes\" class=\"mb-control-close\" (click)=\"_yes()\">Yes</label>\n            </div>\n            <div class=\"radio\">\n              <label><input type=\"radio\" formControlName=\"no\" class=\"mb-control-close\" (click)=\"_no()\">No</label>\n            </div>          \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END MESSAGE BOX--> \n  <fiyps-footer class=\"_min-footer\"></fiyps-footer>  "

/***/ }),

/***/ "../../../../../src/app/pages/all-lecturers/all-lecturers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllLecturersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllLecturersComponent = (function () {
    function AllLecturersComponent(api) {
        this.api = api;
        this.userType = null;
        this.supervisors = null;
        this.identifier = null;
        this.show = null;
        this.userType = this.api._getUserType();
    }
    AllLecturersComponent.prototype.ngOnInit = function () {
        this._fetch();
        if (this.supervisors) {
            this.isDesc = false;
            this.column = 'group_name';
            this.page = 1;
            this.pageSize = 10;
            this.direction = -1;
            this.total = this.supervisors.length;
        }
        this.groupsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("10")
        });
        this.confirmDeleteForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            yes: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("yes", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            no: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("no", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
        });
    };
    /* Fetch data */
    AllLecturersComponent.prototype._fetch = function () {
        this.supervisors = [
            {
                'id': 1,
                'name': 'Nsabagwa Mary',
                'course': 'ALL',
                'contact': '0700111987',
                'email': 'mnsabagwa@cit.ac.ug'
            },
            {
                'id': 2,
                'name': 'Paul Bakaki',
                'course': 'CS',
                'contact': '0700231987',
                'email': 'pbakaki@gmail.com'
            },
            {
                'id': 3,
                'name': 'Grace Kobusinge',
                'course': 'BIS',
                'contact': '0700111887',
                'email': 'gkobusinge@cit.mak.ac.ug'
            },
            {
                'id': 4,
                'name': 'Agaba Joab Ezra',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'jagaba@cit.mak.ac.ug'
            },
            {
                'id': 5,
                'name': 'Grace B. Kamulegeya',
                'course': '	BSE',
                'contact': '0700111987',
                'email': 'kougaus@gmail.com'
            },
            {
                'id': 6,
                'name': 'Engineer Bainomugisha',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'baino@cit.mak.ac.ug'
            },
            {
                'id': 7,
                'name': 'Mercy Amiyo',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'mamiyo@cit.mak.ac.ug'
            },
            {
                'id': 8,
                'name': 'Emmanuel Eilu',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'eiluemma@yahoo.co.uk'
            },
            {
                'id': 9,
                'name': 'Irene Nakiyimba',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'inakiyimba@cit.mak.ac.ug'
            },
            {
                'id': 10,
                'name': 'Richard Mayanja',
                'course': 'BIS',
                'contact': '0700111987',
                'email': 'rmayanja@cit.mak.ac.ug'
            },
            {
                'id': 11,
                'name': 'Amina Zawedde',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'sazawedde@cit.ac.ug'
            },
            {
                'id': 12,
                'name': 'Emmanuel Mugejera',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'emugejera@cit.mak.ac.ug'
            },
            {
                'id': 13,
                'name': 'Paul Ssemalulu',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'pssemaluulu@cit.mak.ac.ug'
            },
            {
                'id': 14,
                'name': 'Fiona Tulinayo',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'ftulinayo@cit.mak.ac.ug'
            },
            {
                'id': 15,
                'name': 'Marriette Katarahweirwe',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'kmarriette@cit.mak.ac.ug'
            },
            {
                'id': 16,
                'name': 'Halim Chongomweru',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'hchongomweru@cis.ac.ug'
            },
            {
                'id': 17,
                'name': 'Diana Nakiyinji',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'dnakiyingi@cit.mak.ac.ug'
            },
            {
                'id': 18,
                'name': 'Drake K Mirembe',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'dmiremebe@cit.mak.ac.ug'
            },
            {
                'id': 19,
                'name': 'Ruth Mbabazi Mutebi',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'rmbabazi@cis.mak.ac.ug'
            },
            {
                'id': 20,
                'name': 'Nasser Kimbugwe',
                'course': 'BSE',
                'contact': '0700111987',
                'email': 'mkimbugwe@cis.mak.ac.ug'
            },
            {
                'id': 21,
                'name': 'Innocent Ndibatya',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'indibatya@cis.mak.ac.ug'
            },
            {
                'id': 22,
                'name': 'Henry Serugunda',
                'course': 'BIT',
                'contact': '0700111987',
                'email': 'hserugunda@cis.mak.ac.ug'
            },
            {
                'id': 23,
                'name': 'Dr John Ngubiri',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'ngubiri@cis.mak.ac.ug'
            },
            {
                'id': 24,
                'name': 'rose Nakibuule',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'rnakibuule@cis.mak.ac.ug'
            },
            {
                'id': 25,
                'name': 'Michael Kizito',
                'course': 'CS',
                'contact': '0700111987',
                'email': 'mkizito@cis.ac.ug'
            },
        ];
    };
    AllLecturersComponent.prototype._show = function (size) {
        console.log(size);
        this.pageSize = size;
    };
    AllLecturersComponent.prototype.edit = function (id) {
        this.identifier = id;
        console.log("Edit this group: " + this.identifier);
    };
    AllLecturersComponent.prototype.showPopup = function (id) {
        this.identifier = id;
        console.log("Show the popup for confirmation: " + this.identifier);
    };
    /* Remove the selected file */
    AllLecturersComponent.prototype._yes = function () {
        console.log("Delete the selected id" + this.identifier);
        //empty the deleteSelectedFile variable
    };
    AllLecturersComponent.prototype._no = function () {
        this.identifier = null;
        console.log("don't Delete the selected id" + this.identifier);
        //empty the deleteSelectedFile variable
    };
    AllLecturersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-all-lecturers',
            template: __webpack_require__("../../../../../src/app/pages/all-lecturers/all-lecturers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/all-lecturers/all-lecturers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], AllLecturersComponent);
    return AllLecturersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/all-student-groups/all-student-groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".all-students-groups-wrapper{\r\n    box-shadow: 0px 1px 1px 0px #272b30;\r\n    margin: 3px 8px 15px;\r\n    display: flow-root;\r\n}\r\ntable{\r\n    margin-bottom: 37px;\r\n}\r\n.table-wrapper{\r\n    background-color: rgba(241, 241, 241, 0.66);\r\n}\r\n.action-th{\r\n    text-align: center;\r\n}\r\n.action-td{\r\n    vertical-align: middle;\r\n}\r\n.action-td > div{\r\n    padding: 0px;\r\n}\r\n.action-td > div > button{\r\n    width: 100%;\r\n}\r\n.action-td > div:first-child{\r\n    text-align: right;\r\n}\r\n.edit:hover{\r\n    background-color: green !important;\r\n}\r\n.action-td > div:last-child{\r\n    padding-left: 4px;\r\n}\r\n.mb-title.confirm-delete-title{\r\n    font-size: 21px !important;\r\n}\r\n.mb-title.confirm-delete-title > strong{\r\n    font-size: 21px;\r\n    margin-left: 5px;\r\n}\r\n@media (max-width: 415px){\r\n    .action-td > div{\r\n        width: 100%;\r\n    }\r\n    .action-td > div:first-child{\r\n        margin-bottom: 4px;\r\n    }    \r\n    .action-td > div:last-child{\r\n        padding-left: 0px;\r\n    }    \r\n}\r\n@media (max-width: 362px){\r\n    .action-td{\r\n        text-align: center;\r\n    }\r\n    .action-td > div:first-child{\r\n        text-align: unset;\r\n    }\r\n\r\n}\r\n@media (max-width: 292px){\r\n    .period{\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/all-student-groups/all-student-groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"all-students-groups-wrapper\">\n  <div class=\"projects-controls-wrapper animated fadeIn _delay5ms\">\n    <div class=\"dataTables_length\">\n      <form [formGroup]=\"groupsForm\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12 _show\">\n          <label>Show</label>\n          <select class=\"form-control _search\" formControlName=\"size\" (ngModelChange)=\"_show(size = $event)\">\n            <option value=\"10\" ng-reflect-value=\"10\">10</option>\n            <option  value=\"25\" ng-reflect-value=\"25\">25</option>\n            <option  value=\"50\" ng-reflect-value=\"50\">50</option>\n            <option  value=\"100\" ng-reflect-value=\"100\">100</option>\n          </select>\n          <label  class=\"_entries\"> entries of <strong>{{ total }}</strong></label> \n        </div>\n        <div  class=\"dataTables_filter col-sm-3 col-xs-12\">\n          <input  class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"Search\" formControlName=\"search\" type=\"search\" >\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"table-wrapper\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th class=\"count\">#</th>\n          <th class=\"group-name\">Groups</th>\n          <th class=\"group-members-th\">Members</th>\n          <th class=\"period\">Period</th>\n          <th class=\"action-th\">Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"animated fadeInUp _delay{{ i + 3}}ms\" *ngFor=\"let group of groups | filter:search | paginate: {id:'allStudents',itemsPerPage: pageSize, currentPage: page }; let i = index;\">\n          <td class=\"count\">{{ i + 1 }}</td>\n          <td class=\"group-name\">{{ group.group_name }}</td>\n          <td class=\"group-members-td\">\n            <ul class=\"project-group-members\">\n              <li *ngFor=\"let member of group.members; let i = index;\">{{ member.name }}</li>\n            </ul>\n          </td>\n          <td class=\"period\">{{ group.period }}</td>\n          <td class=\"action-td\">\n            <div class=\"col-sm-6 col-xs-6\"><button class=\"btn btn-info edit\" (click)=\"edit(group.id)\">Edit</button></div>\n            <div class=\"col-sm-6 col-xs-6\"><button class=\"btn btn-danger mb-control remove\" data-box=\"#mb-confirm-delete\" (click)=\"showPopup(group.id)\">remove</button></div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"_pagiantionContainer has-text-centered\">\n      <pagination-controls id=\"allStudents\" (pageChange)=\"page = $event\"></pagination-controls>\n    </div>\n  </div>\n</div>\n<!-- MESSAGE BOX-->\n<div class=\"message-box _scrollbar animated fadeIn\" id=\"mb-confirm-delete\">\n  <div class=\"mb-container\">\n    <div class=\"mb-middle\">\n      <div class=\"mb-title confirm-delete-title\">Do you want to procced <strong>?</strong></div>            \n      <div class=\"mb-content\">\n        <form [formGroup]=\"confirmDeleteForm\" class=\"confrim-delete-form\">\n          <div class=\"radio\">\n            <label><input type=\"radio\" formControlName=\"yes\" class=\"mb-control-close\" (click)=\"_yes()\">Yes</label>\n          </div>\n          <div class=\"radio\">\n            <label><input type=\"radio\" formControlName=\"no\" class=\"mb-control-close\" (click)=\"_no()\">No</label>\n          </div>          \n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END MESSAGE BOX--> \n<fiyps-footer class=\"_min-footer\"></fiyps-footer>  "

/***/ }),

/***/ "../../../../../src/app/pages/all-student-groups/all-student-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllStudentGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllStudentGroupsComponent = (function () {
    function AllStudentGroupsComponent(api) {
        this.api = api;
        this.userType = null;
        this.groups = null;
        this.identifier = null;
        this.show = null;
        this.userType = this.api._getUserType();
    }
    AllStudentGroupsComponent.prototype.ngOnInit = function () {
        this._fetch();
        if (this.groups) {
            this.isDesc = false;
            this.column = 'group_name';
            this.page = 1;
            this.pageSize = 10;
            this.direction = -1;
            this.total = this.groups.length;
        }
        this.groupsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("10")
        });
        this.confirmDeleteForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            yes: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("yes", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            no: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("no", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
        });
    };
    /* Fetch data */
    AllStudentGroupsComponent.prototype._fetch = function () {
        this.groups = [
            {
                'id': 1,
                'group_name': 'BSE17-2',
                'period': '2017',
                'members': [
                    {
                        'id': 1,
                        'name': 'Muhatsi Shaffic'.toLowerCase(),
                        'img': 'user.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'Remo Samuel'.toLowerCase(),
                        'img': 'user4.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'Paul Odur Gerald'.toLowerCase(),
                        'img': 'user5.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'Okurut Jonathan'.toLowerCase(),
                        'img': 'user7.jpg'
                    },
                ],
            },
            {
                'id': 2,
                'group_name': 'BSE17-3',
                'period': '2017',
                'members': [
                    {
                        'id': 1,
                        'name': 'Othieno John'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Bonyo Joseph'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Sitati Ben'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Kiberu Frank'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 3,
                'group_name': 'BSE17-4',
                'period': '2017',
                'members': [
                    {
                        'id': 1,
                        'name': 'Mugabira Anthony'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kisakye Daniel'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Kizza Peter'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Nsubuga Ronald'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 4,
                'group_name': 'BSE17-6',
                'period': '2017',
                'members': [
                    {
                        'id': 1,
                        'name': 'Iga Kogongo edward',
                    },
                    {
                        'id': 2,
                        'name': 'mugeere paul',
                    },
                    {
                        'id': 3,
                        'name': 'opio solomon',
                    },
                    {
                        'id': 4,
                        'name': 'lubwama enock',
                    },
                ]
            },
            {
                'id': 5,
                'group_name': 'BSE17-7',
                'period': '2017',
                'members': [
                    {
                        'id': 1,
                        'name': 'Katusiime Lisa',
                    },
                    {
                        'id': 2,
                        'name': 'Mugume Davies Arthur',
                    },
                    {
                        'id': 3,
                        'name': 'Emmanuel Okiria',
                    },
                    {
                        'id': 4,
                        'name': '	Omiat Isaac',
                    },
                ]
            },
            {
                'id': 6,
                'group_name': 'BSE17-8',
                'period': '2017',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bbosa Ronald',
                    },
                    {
                        'id': 2,
                        'name': 'Semujju Stuart Dereck',
                    },
                    {
                        'id': 3,
                        'name': 'Matano Ali',
                    },
                    {
                        'id': 4,
                        'name': 'Kimbowa Charles',
                    },
                ]
            },
            {
                'id': 7,
                'group_name': 'BSE18-9',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'BOGERE HUDSON'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NDUNGUTSE PAUL'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'TUMUHAIRWE DEUS'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 8,
                'group_name': 'BSE18-10',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Orach John Kevin',
                    },
                    {
                        'id': 2,
                        'name': 'Kigozi Moses',
                    },
                    {
                        'id': 3,
                        'name': 'Batte Moses',
                    },
                    {
                        'id': 4,
                        'name': 'Kato Paul',
                    },
                ]
            },
            {
                'id': 9,
                'group_name': 'BSE18-11',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABWIRE SANDRA REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSEBBUGGA DAVID'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'EBUKALI DAVID'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAAYA ABRAHAM'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 10,
                'group_name': 'BSE18-12',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'KASULE JOSHUA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KABOGGOZA STEPHEN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'ATUHAIRE MERCY'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NUWAMANYA ALEX'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 11,
                'group_name': 'BSE18-13',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'ARINAITWE ADAM'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KAHANGA LENIN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WANYOTO DENIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'MUDDE ENOCK'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 12,
                'group_name': 'BSE18-14',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'OKIDI DENISH'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSESANGA SHAFIK'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SEGAWA CHRISTOPHER'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OCHIENG JOHN BAPTIST'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 13,
                'group_name': 'BSE18-15',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bazzekuketta Timothy',
                    },
                    {
                        'id': 2,
                        'name': 'Namazzi Lornalex Zaake',
                    },
                    {
                        'id': 3,
                        'name': 'Ntege Edward',
                    },
                    {
                        'id': 4,
                        'name': 'Muwanga Mohammed',
                    },
                ]
            },
            {
                'id': 14,
                'group_name': 'BSE18-16',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Viola Bazanye Namuganyi',
                    },
                    {
                        'id': 2,
                        'name': 'Moses Gasana',
                    },
                    {
                        'id': 3,
                        'name': 'Martha Lukabwe',
                    },
                    {
                        'id': 4,
                        'name': 'Morine Amutorine',
                    },
                ]
            },
            {
                'id': 15,
                'group_name': 'BSE18-17',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kiplimo k Peter',
                    },
                    {
                        'id': 2,
                        'name': 'Wamanga Isaac',
                    },
                    {
                        'id': 3,
                        'name': 'Kabali Shafique',
                    },
                    {
                        'id': 4,
                        'name': 'Asia Rogers',
                    },
                ]
            },
            {
                'id': 16,
                'group_name': 'BSE18-18',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'ASINGWIRE CUTHBERT'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NANSAMBU ERNEST'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SSEBANYIIGA FRANCIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OPIO ISAAC RONALD'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 17,
                'group_name': 'BSE18-19',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kawuma Patrick',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Liz Mirembe',
                    },
                    {
                        'id': 3,
                        'name': 'Abaho Micheal',
                    },
                    {
                        'id': 4,
                        'name': 'Namugaanyi Emily',
                    },
                ]
            },
            {
                'id': 18,
                'group_name': 'BSE18-20',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Batte Derick',
                    },
                    {
                        'id': 2,
                        'name': 'Henry Tebajjukira',
                    },
                    {
                        'id': 3,
                        'name': 'Nanjekye Joannah',
                    },
                    {
                        'id': 4,
                        'name': 'Ronald Kasujja',
                    },
                ]
            },
            {
                'id': 19,
                'group_name': 'BSE18-21',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'BYAMUKAMA TADEO'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KALEEBI LINDAH REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WALUGEMBE EVEREST'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAKABANDA SAMALIE'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 20,
                'group_name': 'BSE18-22',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kakande Joshwa',
                    },
                    {
                        'id': 2,
                        'name': 'Muwonge Andrew',
                    },
                    {
                        'id': 3,
                        'name': 'Byamukama Oscar',
                    },
                    {
                        'id': 4,
                        'name': 'ssuuna sadat',
                    },
                ]
            },
            {
                'id': 21,
                'group_name': 'BSE18-23',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABATEESA MILLY'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NAMWEBYA FARIDAH'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 22,
                'group_name': 'BSE18-24',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kisitu Cornelius',
                    }
                ]
            },
            {
                'id': 23,
                'group_name': 'BSE18-25',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'KAYONDO NASIIFU'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'MURUNGI CISSY'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NAKACHWA HELLEN'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'SEMPA JONATHAN'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 24,
                'group_name': 'BSE18-26',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'SEBUYEGE MARTIN'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kayemba Lawrence'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 25,
                'group_name': 'BSE18-27',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSGONJE ISMAIL'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'AGABA PETER'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 26,
                'group_name': 'BSE18-28',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Karamagi Phillip',
                    },
                    {
                        'id': 2,
                        'name': 'Lubega Mark',
                    },
                    {
                        'id': 3,
                        'name': 'Karungi Emilly',
                    },
                    {
                        'id': 4,
                        'name': 'Sande Marcellinus',
                    },
                ]
            },
            {
                'id': 27,
                'group_name': 'BSE18-29',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'kyagambiddwa sirajje',
                    },
                    {
                        'id': 2,
                        'name': 'kimuli samuel',
                    },
                    {
                        'id': 3,
                        'name': 'mugoya edrin',
                    },
                    {
                        'id': 4,
                        'name': 'muhumuza arthur',
                    },
                ]
            },
            {
                'id': 28,
                'group_name': 'BSE18-30',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kemigisha Florence',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Samuel',
                    },
                    {
                        'id': 3,
                        'name': 'Semakula Kraiba',
                    },
                    {
                        'id': 4,
                        'name': 'Ziwa Ali',
                    },
                ]
            },
            {
                'id': 29,
                'group_name': 'BSE18-31',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'thembo emmanuel',
                    },
                    {
                        'id': 2,
                        'name': 'mukama godson',
                    },
                    {
                        'id': 3,
                        'name': 'nshimye joseph',
                    },
                    {
                        'id': 4,
                        'name': 'tinyefuza gordon',
                    },
                ]
            },
            {
                'id': 30,
                'group_name': 'BSE18-32',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'TWEHAMYE SILUS'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KANAMWANJI JULIUS'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'MUGABIRWE CATHBERT'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 31,
                'group_name': 'BSE18-33',
                'period': '2018',
                'members': [
                    {
                        'id': 1,
                        'name': 'Ekalet Sam',
                    },
                    {
                        'id': 2,
                        'name': 'Malinga John Robert',
                    },
                    {
                        'id': 3,
                        'name': 'Rubahinya Oreb',
                    },
                    {
                        'id': 4,
                        'name': 'Simon Orupia',
                    },
                ]
            },
        ];
    };
    AllStudentGroupsComponent.prototype._show = function (size) {
        console.log(size);
        this.pageSize = size;
    };
    AllStudentGroupsComponent.prototype.edit = function (id) {
        this.identifier = id;
        console.log("Edit this group: " + this.identifier);
    };
    AllStudentGroupsComponent.prototype.showPopup = function (id) {
        this.identifier = id;
        console.log("Show the popup for confirmation: " + this.identifier);
    };
    /* Remove the selected file */
    AllStudentGroupsComponent.prototype._yes = function () {
        console.log("Delete the selected id" + this.identifier);
        //empty the deleteSelectedFile variable
    };
    AllStudentGroupsComponent.prototype._no = function () {
        this.identifier = null;
        console.log("don't Delete the selected id" + this.identifier);
        //empty the deleteSelectedFile variable
    };
    AllStudentGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-all-student-groups',
            template: __webpack_require__("../../../../../src/app/pages/all-student-groups/all-student-groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/all-student-groups/all-student-groups.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], AllStudentGroupsComponent);
    return AllStudentGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/archived-projects-page/archived-projects-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.page-content{\r\n    height: 100% !important;\r\n}\r\n._project-member-img{\r\n    width: 55px;\r\n    padding: 0px;\r\n    border-radius: 0px;\r\n    margin-left: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.details-span{\r\n    margin-top: 5px;\r\n}\r\n.member-name{\r\n    text-transform: capitalize;\r\n}\r\n.description{\r\n    display: block;\r\n}\r\n._project-supervisor-img{\r\n    width: 100px;\r\n    padding: 0px;\r\n    margin-left: 40px;\r\n}\r\n.group-members-heading-container > .header{\r\n    text-align: center;\r\n    padding-top: 8px;\r\n    line-height: 14px;\r\n    font-weight: 800;\r\n}\r\n/* Media Queries */\r\n@media only screen and (max-width: 480px){\r\n    .group-members-th,\r\n    .group-members-td,\r\n    .project-supervisor{\r\n        display: none;\r\n    }\r\n    .project-title{\r\n        width: 74%;\r\n    }      \r\n}\r\n@media only screen and (max-width: 340px){\r\n    .project-title{\r\n        width: 65%;\r\n    }    \r\n}\r\n@media only screen and (max-width: 339px){\r\n    ._pagiantionContainer {\r\n        margin-right: 2px;\r\n    }    \r\n}\r\n@media only screen and (max-width: 299px){\r\n    ._pagiantionContainer {\r\n        margin-right: -4px;\r\n        float: unset;\r\n        margin-left: 2px;\r\n    }    \r\n    .ngx-pagination li {\r\n        margin-top: 2px;\r\n    }    \r\n}\r\n@media only screen and (max-width: 269px){\r\n    .group-name{\r\n        display: none;\r\n    }   \r\n    .project-title{\r\n        width: 90%;\r\n    } \r\n}\r\n@media only screen and (max-width: 256px){\r\n    .page-content{\r\n        min-width: 246px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/archived-projects-page/archived-projects-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-up-container\">\n  <ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup>\n</div>\n<div class=\"pdf-reader-component-contianer\"  *ngIf=\"showFile\">\n  <fiyps-pdf-reader [fullscreen]=\"'fullscreen-pdfViewerContainer'\" (onClose)=\"onClose($event)\" [groupName]=\"groupName\" [deliverableTypeId]=\"deliverableTypeId\" [studentGroupId]=\"studentGroupId\" [params]=\"fileId\"></fiyps-pdf-reader>\n</div>\n<div class=\"projects-wrapper\">\n  <div class=\"projects-inner-wrapper\" *ngIf=\"homeBtn =='home'\">\n    <div class=\"projects-controls-wrapper animated fadeIn _delay5ms\">\n      <div class=\"dataTables_length\">\n        <form [formGroup]=\"archivedProjectsForm\">\n          <div class=\"col-md-4 col-sm-4 col-xs-12 _show\">\n            <label>Show</label>\n            <select class=\"form-control _search\" formControlName=\"size\" (ngModelChange)=\"_show(size = $event)\">\n              <option value=\"10\" ng-reflect-value=\"10\">10</option>\n              <option  value=\"25\" ng-reflect-value=\"25\">25</option>\n              <option  value=\"50\" ng-reflect-value=\"50\">50</option>\n              <option  value=\"100\" ng-reflect-value=\"100\">100</option>\n            </select>\n            <label  class=\"_entries\"> entries of <strong>{{ total }}</strong></label> \n          </div>\n          <div  class=\"dataTables_filter col-sm-3 col-xs-12\">\n            <input  class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"Search\" formControlName=\"search\" type=\"search\" >\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"projects-table-wrapper\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th class=\"count\">#</th>\n            <th class=\"group-name\">Groups</th>\n            <th class=\"group-members-th\">Members</th>\n            <th class=\"project-title\">Project Titles</th>\n            <th class=\"project-supervisor\">Supervisors</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"animated fadeInUp _delay{{ i + 3}}ms\" (click)=\"_viewGroup(project.groupId)\" *ngFor=\"let project of archivedProjects | archivedProjectsFilter:search | paginate: {id: 'archiveProjects', itemsPerPage: pageSize, currentPage: page }; let i = index;\">\n            <td class=\"count\">{{ i + 1 }}</td>\n            <td class=\"group-name\">{{ project.name }}</td>\n            <td class=\"group-members-td\">\n              <ul class=\"project-group-members\">\n                <li *ngFor=\"let member of project.members; let i = index;\">{{ member.name }}</li>\n              </ul>\n            </td>\n            <td class=\"project-title\">{{ project.projectTitle }}</td>\n            <td class=\"project-supervisor\">{{ project.supervisor }}</td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"_pagiantionContainer has-text-centered\">\n        <pagination-controls id=\"archiveProjects\" (pageChange)=\"page = $event\"></pagination-controls>\n      </div>    \n    </div>    \n  </div>\n  <div class=\"projects-inner-wrapper\" *ngIf=\"homeBtn =='details'\">\n    <div class=\"project-details\">\n      <div class=\"col-sm-3\">\n        <div class=\"group-members-heading-container\">\n          <h2 class=\"header\">Group Members</h2>\n        </div> \n        <div class=\"col-xs-12\" >\n          <table class=\"table table-striped\">\n            <tbody>\n              <tr *ngFor=\"let member of projectDetails[0].groupMembers; let i = index;\" class=\"animated fadeInUp _delay{{ i + 2 }}ms\">\n                <td>{{ i + 1 }}</td>\n                <td>\n                  <span class=\"member-name \">{{ member.name }}</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"col-sm-5\">\n        <div class=\"col-xs-12\">\n          <h5 class=\"col-xs-3\">Group Name:</h5>\n          <span class=\"col-xs-8 details-span animated fadeInDown _delay5ms\">{{ projectDetails[0].groupName }}</span>\n        </div>\n        <div class=\"col-xs-12\">\n          <h5 class=\"col-xs-3\">Project Title: </h5>\n          <span class=\"col-xs-8 details-span animated fadeInDown _delay4ms\">{{ projectDetails[0].projectTitle }}</span>\n        </div>\n        <div class=\"col-xs-12\">\n          <h5 class=\"col-xs-3\">Blog Url:</h5>\n          <span class=\"col-xs-8 details-span animated fadeInDown _delay2ms\"><a [href]=\"projectDetails[0].blogUrl\" target=\"_blank\">{{ projectDetails[0].blogUrl }}</a></span>\n        </div>\n        <div class=\"col-xs-12 description\">\n          <h5 class=\"col-xs-3\">Project Description:</h5>\n          <span class=\"col-xs-8 details-span animated fadeIn _delay04s\">\n            <pre>\n              {{ projectDetails[0].projectDescription }}\n            </pre>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"col-xs-12\">\n          <img src=\"/assets/img/users/{{ projectDetails.supervisor_img }}\" *ngIf=\"projectDetails.supervisor_img; else defaultSupervisorImg\" class=\"_project-supervisor-img animated fadeIn _delay06s\"/> \n          <ng-template #defaultSupervisorImg><img src=\"/assets/img/users/no-image.jpg\" class=\"_project-supervisor-img animated fadeIn _delay06s\"/></ng-template>\n        </div>\n        <div class=\"col-xs-12 group-name\">\n          <h5 class=\"col-xs-3\">Name: </h5>\n          <span class=\"col-xs-8 details-span animated fadeInRight _delay2ms\">{{ projectDetails[0].supervisor }}</span>\n        </div>\n        <div class=\"col-xs-12 group-name\">\n          <h5 class=\"col-xs-3\">Email:</h5>\n          <span class=\"col-xs-8 details-span animated fadeInRight _delay3ms\"><a href=\"mailto:amwotil@cis.mak.ac.ug\">amwotil@cis.mak.ac.ug</a></span>\n        </div>\n        <div class=\"col-xs-12 group-name\">\n          <h5 class=\"col-xs-3\">Contact:</h5>\n          <span class=\"col-xs-8 details-span animated fadeInRight _delay4ms\">{{ projectDetails[0].supervisorContact }}</span>\n        </div>\n        <div class=\"col-xs-12 group-name\">\n          <h5 class=\"col-xs-3\">Department:</h5>\n          <span class=\"col-xs-8 details-span animated fadeInRight _delay5ms\">{{ projectDetails[0].department }}</span>\n        </div>\n      </div>\n      <div class=\"project-files\">\n        <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th class=\"count\">#</th>\n                <th class=\"file-name\">Name</th>\n                <th class=\"file-data-published\">Date Published</th>\n                <th class=\"file-document-path\">Document</th>\n                <th class=\"file-mark\">Marks</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let file of projectDetails[0].deliverables; let i = index;\" (click)=\"_readDocument(projectDetails[0].groupName,projectDetails[0].groupId,file.id,file.filePath)\" class=\"animated fadeInUp _delay{{ i + 2 }}ms\">\n                <td class=\"count\">{{ i + 1 }}</td>\n                <td class=\"file-name\">{{ file.name }}</td>\n                <td class=\"file-data-published\">{{ file.dateSubmitted }}</td>\n                <td class=\"file-document-path\">{{ file.filePath }}</td>\n                <td class=\"file-mark\">{{ file.score }}</td>\n              </tr>\n            </tbody>\n          </table>        \n      </div>     \n    </div>\n  </div>\n</div>\n<fiyps-footer class=\"_min-footer\"></fiyps-footer>  "

/***/ }),

/***/ "../../../../../src/app/pages/archived-projects-page/archived-projects-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedProjectsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArchivedProjectsPageComponent = (function () {
    function ArchivedProjectsPageComponent(api) {
        this.api = api;
        this.archivedProjects = null;
        this.projectDetails = null;
        this.show = null;
        this.deliverableTypeId = null;
        this.studentGroupId = null;
        this.fileId = null;
        this.groupName = null;
        this.showFile = false;
        this.showDetails = 'home';
        this.homeBtn = null;
        this.homeBtn = this.api._getHomeValue();
        console.log(this.homeBtn);
    }
    ArchivedProjectsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //$(".archived-projects-wrapper").css('height',window.outerHeight - 100);
        setInterval(function () {
            _this.homeBtn = _this.api._getHomeValue();
        }, 1000);
        this.archivedProjectsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("10")
        });
        this._fetch();
        if (this.archivedProjects) {
            this.isDesc = false;
            this.column = 'group_name';
            this.page = 1;
            this.pageSize = 10;
            this.direction = -1;
            this.total = this.archivedProjects.length;
        }
        this._sort(this.column);
    };
    /* Fetch data */
    ArchivedProjectsPageComponent.prototype._fetch = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: "GET",
            url: this.api.getArchivedProjects(),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data'] && data['groups'] && data['groupNames']) {
                    _this.archivedProjects = data['data'];
                    var groups = data['groups'];
                    var groupNames = data['groupNames'];
                    var count = 0;
                    _this.archivedProjects.filter(function (pro) {
                        pro.members = groups[count];
                        pro.name = data['groupNames'][count];
                        count++;
                    });
                    _this._show(10);
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Switch table size */
    ArchivedProjectsPageComponent.prototype._show = function (size) {
        console.log(size);
        this.pageSize = size;
    };
    /* Search archived Projects */
    ArchivedProjectsPageComponent.prototype._searchArchivedProjects = function (term) {
        console.log("Search Option");
        console.log(term);
    };
    /* Re-arrange in descending or ascending order */
    ArchivedProjectsPageComponent.prototype._sort = function (field) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = field;
        this.direction = this.isDesc ? 1 : -1;
    };
    /* View details about a particular group */
    ArchivedProjectsPageComponent.prototype._viewGroup = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: "GET",
            url: this.api.getArchivedProjectDetails(id),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    _this.projectDetails = data['data'];
                    _this.projectDetails.filter(function (item) {
                        item.groupMembers = data['groupMembers'];
                        item.groupName = data['groupName'];
                        item.deliverables = data['groupDeliverables'];
                    });
                    _this.api._updateBreadcrumb(2, _this.projectDetails[0]['groupName'], '');
                    _this.showDetails = 'details';
                    _this.homeBtn = 'details';
                    _this.api._setHomeValue('details');
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Read the Group's selected documentation */
    ArchivedProjectsPageComponent.prototype._readDocument = function (groupName, groupId, id, path) {
        this.api._updateBreadcrumb(3, path, '');
        this.studentGroupId = groupId;
        this.fileId = id;
        this.groupName = groupName;
        this.showFile = true;
    };
    /* Pop over */
    ArchivedProjectsPageComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    /* Handle the pdf viewer on close event */
    ArchivedProjectsPageComponent.prototype.onClose = function ($event) {
        console.log("Close the pdf view");
        this.showFile = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ArchivedProjectsPageComponent.prototype, "showDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"])
    ], ArchivedProjectsPageComponent.prototype, "popup", void 0);
    ArchivedProjectsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-archived-projects-page',
            template: __webpack_require__("../../../../../src/app/pages/archived-projects-page/archived-projects-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/archived-projects-page/archived-projects-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], ArchivedProjectsPageComponent);
    return ArchivedProjectsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/assign-group-page/assign-group-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".assign-groups-wrapper{\r\n    margin:6px 10px 18px;\r\n    border: 1px solid #2022285c;\r\n    border-top: 1px solid #20222814;\r\n    box-shadow: 0px 2px 3px 0px #202228a6;\r\n}\r\n.groups-allocated-td{\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n.group-members-td{\r\n    padding-left: 12px !important;\r\n}\r\ntable > tbody > tr > td,\r\ntable > thead > tr > th{\r\n    transition: all .5s ease-in-out;\r\n}\r\n@media (max-width: 448px){\r\n    .group-title-sup{\r\n        display: none;  \r\n    }\r\n    table > tbody > tr > td,\r\n    table > thead > tr > th{\r\n        font-size: 9px;\r\n        font-weight: 900;\r\n    }    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/assign-group-page/assign-group-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"assign-groups-wrapper\">\n  <div class=\"projects-controls-wrapper animated fadeIn _delay5ms\">\n    <div class=\"dataTables_length\">\n      <form [formGroup]=\"groupsForm\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12 _show\">\n          <label>Show</label>\n          <select class=\"form-control _search\" formControlName=\"size\" (ngModelChange)=\"_show(size = $event)\">\n            <option value=\"10\" ng-reflect-value=\"10\">10</option>\n            <option  value=\"25\" ng-reflect-value=\"25\">25</option>\n            <option  value=\"50\" ng-reflect-value=\"50\">50</option>\n            <option  value=\"100\" ng-reflect-value=\"100\">100</option>\n          </select>\n          <label  class=\"_entries\"> entries of <strong>{{ total }}</strong></label> \n        </div>\n        <div  class=\"dataTables_filter col-sm-3 col-xs-12\">\n          <input  class=\"form-control\" [(ngModel)]=\"search\" placeholder=\"Search\" formControlName=\"search\" type=\"search\" >\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"projects-table-wrapper\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th class=\"count\">#</th>\n          <th class=\"group-name\">Groups</th>\n          <th class=\"group-members-th\">Members</th>\n          <th class=\"group-title-sup\">Title</th>\n          <th class=\"select-supervisor-th\">supervisors</th>\n          <th class=\"select-groups-allocated-th\">groups allocated</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"animated fadeInUp _delay{{ i + 3}}ms\" *ngFor=\"let group of groups | filter:search | paginate: {itemsPerPage: pageSize, currentPage: page }; let i = index;\">\n          <td class=\"count\">{{ i + 1 }}</td>\n          <td class=\"group-name\">{{ group.group_name }}</td>\n          <td class=\"group-members-td\">\n            <ul class=\"project-group-members\">\n              <li *ngFor=\"let member of group.members; let i = index;\">{{ member.name }}</li>\n            </ul>\n          </td>\n          <td class=\"group-title-sup\">{{ group.title }}</td>\n          <td class=\"select-supervisor\">\n            <fiyps-select-supervisor (onSelect)=\"onSelect(name = $event)\" (onCount)=\"onCount(count = $event,i)\" ></fiyps-select-supervisor>\n          </td>\n          <td class=\"select-allocated-td animated fadeIn\" id=\"_td-{{i}}\"></td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"_pagiantionContainer has-text-centered\">\n      <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\n    </div>    \n    <div class=\"submit-container\">\n      <button class=\"btn btn-info\" (click)=\"_onSave()\"> save </button>\n    </div>    \n  </div>\n</div>\n<fiyps-footer class=\"_min-footer\"></fiyps-footer>  "

/***/ }),

/***/ "../../../../../src/app/pages/assign-group-page/assign-group-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignGroupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssignGroupPageComponent = (function () {
    function AssignGroupPageComponent(api) {
        this.api = api;
        this.userType = null;
        this.groups = null;
        this.show = null;
        this.userType = this.api._getUserType();
    }
    AssignGroupPageComponent.prototype.ngOnInit = function () {
        this._fetch();
        if (this.groups) {
            this.isDesc = false;
            this.column = 'group_name';
            this.page = 1;
            this.pageSize = 10;
            this.direction = -1;
            this.total = this.groups.length;
        }
        this.groupsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](""),
            size: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("10")
        });
    };
    /* Fetch data */
    AssignGroupPageComponent.prototype._fetch = function () {
        this.groups = [
            {
                'id': 1,
                'group_name': 'BSE18-2',
                'title': 'MUK guide',
                'members': [
                    {
                        'id': 1,
                        'name': 'Muhatsi Shaffic'.toLowerCase(),
                        'img': 'user.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'Remo Samuel'.toLowerCase(),
                        'img': 'user4.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'Paul Odur Gerald'.toLowerCase(),
                        'img': 'user5.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'Okurut Jonathan'.toLowerCase(),
                        'img': 'user7.jpg'
                    },
                ],
            },
            {
                'id': 2,
                'group_name': 'BSE18-3',
                'title': 'customer ordering and billing system',
                'members': [
                    {
                        'id': 1,
                        'name': 'Othieno John'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Bonyo Joseph'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Sitati Ben'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Kiberu Frank'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 3,
                'group_name': 'BSE18-4',
                'title': 'Electronic Tollbooth monitoring system: A case study of KCCA',
                'members': [
                    {
                        'id': 1,
                        'name': 'Mugabira Anthony'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kisakye Daniel'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Kizza Peter'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Nsubuga Ronald'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 4,
                'group_name': 'BSE18-6',
                'title': 'A centralized solid waste managements system: a case study of NOREMA Services Limited',
                'members': [
                    {
                        'id': 1,
                        'name': 'Iga Kogongo edward',
                    },
                    {
                        'id': 2,
                        'name': 'mugeere paul',
                    },
                    {
                        'id': 3,
                        'name': 'opio solomon',
                    },
                    {
                        'id': 4,
                        'name': 'lubwama enock',
                    },
                ]
            },
            {
                'id': 5,
                'group_name': 'BSE18-7',
                'title': 'Awesome SMS Gateway System',
                'members': [
                    {
                        'id': 1,
                        'name': 'Katusiime Lisa',
                    },
                    {
                        'id': 2,
                        'name': 'Mugume Davies Arthur',
                    },
                    {
                        'id': 3,
                        'name': 'Emmanuel Okiria',
                    },
                    {
                        'id': 4,
                        'name': '	Omiat Isaac',
                    },
                ]
            },
            {
                'id': 6,
                'group_name': 'BSE18-8',
                'title': 'An embedded system for a smart poultry farm',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bbosa Ronald',
                    },
                    {
                        'id': 2,
                        'name': 'Semujju Stuart Dereck',
                    },
                    {
                        'id': 3,
                        'name': 'Matano Ali',
                    },
                    {
                        'id': 4,
                        'name': 'Kimbowa Charles',
                    },
                ]
            },
            {
                'id': 7,
                'group_name': 'BSE18-9',
                'title': 'Milk market predictor',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'BOGERE HUDSON'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NDUNGUTSE PAUL'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'TUMUHAIRWE DEUS'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 8,
                'group_name': 'BSE18-10',
                'title': 'Firefox voice plugin',
                'members': [
                    {
                        'id': 1,
                        'name': 'Orach John Kevin',
                    },
                    {
                        'id': 2,
                        'name': 'Kigozi Moses',
                    },
                    {
                        'id': 3,
                        'name': 'Batte Moses',
                    },
                    {
                        'id': 4,
                        'name': 'Kato Paul',
                    },
                ]
            },
            {
                'id': 9,
                'group_name': 'BSE18-11',
                'title': 'Car SMS Security System',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABWIRE SANDRA REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSEBBUGGA DAVID'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'EBUKALI DAVID'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAAYA ABRAHAM'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 10,
                'group_name': 'BSE18-12',
                'title': 'Home automation and security system',
                'members': [
                    {
                        'id': 1,
                        'name': 'KASULE JOSHUA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KABOGGOZA STEPHEN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'ATUHAIRE MERCY'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NUWAMANYA ALEX'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 11,
                'group_name': 'BSE18-13',
                'title': 'Crop disease surveillance system (CDSS)',
                'members': [
                    {
                        'id': 1,
                        'name': 'ARINAITWE ADAM'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KAHANGA LENIN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WANYOTO DENIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'MUDDE ENOCK'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 12,
                'group_name': 'BSE18-14',
                'title': 'Mobile phone language translator',
                'members': [
                    {
                        'id': 1,
                        'name': 'OKIDI DENISH'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSESANGA SHAFIK'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SEGAWA CHRISTOPHER'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OCHIENG JOHN BAPTIST'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 13,
                'group_name': 'BSE18-15',
                'title': 'Vision mobile news App',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bazzekuketta Timothy',
                    },
                    {
                        'id': 2,
                        'name': 'Namazzi Lornalex Zaake',
                    },
                    {
                        'id': 3,
                        'name': 'Ntege Edward',
                    },
                    {
                        'id': 4,
                        'name': 'Muwanga Mohammed',
                    },
                ]
            },
            {
                'id': 14,
                'group_name': 'BSE18-16',
                'title': 'Regional disease outbreak indicator',
                'members': [
                    {
                        'id': 1,
                        'name': 'Viola Bazanye Namuganyi',
                    },
                    {
                        'id': 2,
                        'name': 'Moses Gasana',
                    },
                    {
                        'id': 3,
                        'name': 'Martha Lukabwe',
                    },
                    {
                        'id': 4,
                        'name': 'Morine Amutorine',
                    },
                ]
            },
            {
                'id': 15,
                'group_name': 'BSE18-17',
                'title': 'Troubleshooting by example application (TBEA)',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kiplimo k Peter',
                    },
                    {
                        'id': 2,
                        'name': 'Wamanga Isaac',
                    },
                    {
                        'id': 3,
                        'name': 'Kabali Shafique',
                    },
                    {
                        'id': 4,
                        'name': 'Asia Rogers',
                    },
                ]
            },
            {
                'id': 16,
                'group_name': 'BSE18-18',
                'title': 'Mobile Traffic Monitoring System',
                'members': [
                    {
                        'id': 1,
                        'name': 'ASINGWIRE CUTHBERT'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NANSAMBU ERNEST'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SSEBANYIIGA FRANCIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OPIO ISAAC RONALD'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 17,
                'group_name': 'BSE18-19',
                'title': 'Trade and logistics management system for exporters and importers and freight forwarding companies',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kawuma Patrick',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Liz Mirembe',
                    },
                    {
                        'id': 3,
                        'name': 'Abaho Micheal',
                    },
                    {
                        'id': 4,
                        'name': 'Namugaanyi Emily',
                    },
                ]
            },
            {
                'id': 18,
                'group_name': 'BSE18-20',
                'title': 'Farmer-aid vending machine',
                'members': [
                    {
                        'id': 1,
                        'name': 'Batte Derick',
                    },
                    {
                        'id': 2,
                        'name': 'Henry Tebajjukira',
                    },
                    {
                        'id': 3,
                        'name': 'Nanjekye Joannah',
                    },
                    {
                        'id': 4,
                        'name': 'Ronald Kasujja',
                    },
                ]
            },
            {
                'id': 19,
                'group_name': 'BSE18-21',
                'title': 'Automobile navigation System (to be rephrased)',
                'members': [
                    {
                        'id': 1,
                        'name': 'BYAMUKAMA TADEO'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KALEEBI LINDAH REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WALUGEMBE EVEREST'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAKABANDA SAMALIE'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 20,
                'group_name': 'BSE18-22',
                'title': 'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kakande Joshwa',
                    },
                    {
                        'id': 2,
                        'name': 'Muwonge Andrew',
                    },
                    {
                        'id': 3,
                        'name': 'Byamukama Oscar',
                    },
                    {
                        'id': 4,
                        'name': 'ssuuna sadat',
                    },
                ]
            },
            {
                'id': 21,
                'group_name': 'BSE18-23',
                'title': 'Taxi Stage Location System',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABATEESA MILLY'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NAMWEBYA FARIDAH'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 22,
                'group_name': 'BSE18-24',
                'title': 'Automatic Pest Control and Irrigation',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kisitu Cornelius',
                    }
                ]
            },
            {
                'id': 23,
                'group_name': 'BSE18-25',
                'title': 'Boda Boda registration and tracking: (embedded with GPS)',
                'members': [
                    {
                        'id': 1,
                        'name': 'KAYONDO NASIIFU'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'MURUNGI CISSY'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NAKACHWA HELLEN'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'SEMPA JONATHAN'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 24,
                'group_name': 'BSE18-26',
                'title': 'navigation',
                'supervisor': 'Doreen Tuheirwe',
                'members': [
                    {
                        'id': 1,
                        'name': 'SEBUYEGE MARTIN'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kayemba Lawrence'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 25,
                'group_name': 'BSE18-27',
                'title': 'Mobile-Energy Saving System (MESS)',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSGONJE ISMAIL'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'AGABA PETER'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 26,
                'group_name': 'BSE18-28',
                'title': 'QualiHewa (Air pollution detection and measuring)',
                'members': [
                    {
                        'id': 1,
                        'name': 'Karamagi Phillip',
                    },
                    {
                        'id': 2,
                        'name': 'Lubega Mark',
                    },
                    {
                        'id': 3,
                        'name': 'Karungi Emilly',
                    },
                    {
                        'id': 4,
                        'name': 'Sande Marcellinus',
                    },
                ]
            },
            {
                'id': 27,
                'group_name': 'BSE18-29',
                'title': 'RFID Security Access and Control System for Red Cross Uganda',
                'members': [
                    {
                        'id': 1,
                        'name': 'kyagambiddwa sirajje',
                    },
                    {
                        'id': 2,
                        'name': 'kimuli samuel',
                    },
                    {
                        'id': 3,
                        'name': 'mugoya edrin',
                    },
                    {
                        'id': 4,
                        'name': 'muhumuza arthur',
                    },
                ]
            },
            {
                'id': 28,
                'group_name': 'BSE18-30',
                'title': 'Doberman Surveillance',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kemigisha Florence',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Samuel',
                    },
                    {
                        'id': 3,
                        'name': 'Semakula Kraiba',
                    },
                    {
                        'id': 4,
                        'name': 'Ziwa Ali',
                    },
                ]
            },
            {
                'id': 29,
                'group_name': 'BSE18-31',
                'title': 'MoBET',
                'members': [
                    {
                        'id': 1,
                        'name': 'thembo emmanuel',
                    },
                    {
                        'id': 2,
                        'name': 'mukama godson',
                    },
                    {
                        'id': 3,
                        'name': 'nshimye joseph',
                    },
                    {
                        'id': 4,
                        'name': 'tinyefuza gordon',
                    },
                ]
            },
            {
                'id': 30,
                'group_name': 'BSE18-32',
                'title': 'Clinical diagnosis and treatment decision system',
                'members': [
                    {
                        'id': 1,
                        'name': 'TWEHAMYE SILUS'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KANAMWANJI JULIUS'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'MUGABIRWE CATHBERT'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 31,
                'group_name': 'BSE18-33',
                'title': 'MOS Data recovery software',
                'members': [
                    {
                        'id': 1,
                        'name': 'Ekalet Sam',
                    },
                    {
                        'id': 2,
                        'name': 'Malinga John Robert',
                    },
                    {
                        'id': 3,
                        'name': 'Rubahinya Oreb',
                    },
                    {
                        'id': 4,
                        'name': 'Simon Orupia',
                    },
                ]
            },
        ];
    };
    AssignGroupPageComponent.prototype._show = function (size) {
        console.log(size);
        this.pageSize = size;
    };
    AssignGroupPageComponent.prototype.onSelect = function (details) {
        console.log("details recieved: ");
        console.log(details);
        this.supervisorData.push(details);
    };
    AssignGroupPageComponent.prototype.onCount = function (count, td) {
        $("#_td-" + td + "").html(count).addClass("groups-allocated-td");
    };
    AssignGroupPageComponent.prototype._onSave = function () {
        if (this.supervisorData) {
            console.log("save ");
            console.log(this.supervisorData);
        }
    };
    AssignGroupPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-assign-group-page',
            template: __webpack_require__("../../../../../src/app/pages/assign-group-page/assign-group-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/assign-group-page/assign-group-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], AssignGroupPageComponent);
    return AssignGroupPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/concept-papers-page/concept-papers-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".doc {\r\n    width: 100%;\r\n    height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/concept-papers-page/concept-papers-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 groupName _widget-scrollbar\" *ngIf=\"userType == '2' || userType == '3'\">\n      <fyps-supervision-groups (selectedGroup)=\"receiveSelectedGroup($event)\"></fyps-supervision-groups>\n    </div>\n    <div [ngClass]=\"{'col-sm-12': userType == '1','col-sm-9': userType == '2' || userType == '3'}\" class=\"no-right-padding\">\n      <fiyps-uploaded-files [refreshUploadsTableFiles]=\"refreshUploadsTableFiles\" [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'1'\" (selectedFile)=\"onSelectedFile($event)\" [userType]=\"userType\"></fiyps-uploaded-files>\n    </div>\n  </div>\n  <fiyps-document-review (refreshUploadsTable)=\"refreshFilesTable($event)\" [deliverableTypeId]=\"'1'\" [selectedFileId]=\"selectedFileId\" [userType]=\"userType\"></fiyps-document-review>\n  <fiyps-chat [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'1'\" [userType]=\"userType\"></fiyps-chat>\n  <fiyps-all-documents \n    [projects]=\"projects\" \n    [userType]=\"userType\"\n    (onViewGroup)=\"_viewGroup($event)\"\n    (onChat)=\"_chat($event)\"\n    (onHistory)=\"_history($event)\"\n    ></fiyps-all-documents>\n  <fiyps-footer class=\"_min-footer\"></fiyps-footer>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/concept-papers-page/concept-papers-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptPapersPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConceptPapersPageComponent = (function () {
    function ConceptPapersPageComponent(api) {
        this.api = api;
        this.userType = null;
        this.selectedFileId = null;
        this.groupDetails = null;
        this.refreshUploadsTableFiles = 0;
        this.userType = this.api._getUserType();
    }
    ConceptPapersPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".page-content").addClass("fit-content");
        this._fetch();
    };
    /* Fetch data */
    ConceptPapersPageComponent.prototype._fetch = function () {
        this.projects = [
            {
                'id': 1,
                'group_name': 'BSE18-2',
                'title': 'MUK guide',
                'supervisor': 'David Bamutura',
                'supervisor_img': 'user6.jpg',
                'department': 'Department of Networks',
                'submissionTime': '01/10/17 12:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Muhatsi Shaffic'.toLowerCase(),
                        'img': 'user.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'Remo Samuel'.toLowerCase(),
                        'img': 'user4.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'Paul Odur Gerald'.toLowerCase(),
                        'img': 'user5.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'Okurut Jonathan'.toLowerCase(),
                        'img': 'user7.jpg'
                    },
                ],
            },
            {
                'id': 2,
                'group_name': 'BSE18-3',
                'title': 'customer ordering and billing system',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '02/10/17 12:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Othieno John'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Bonyo Joseph'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Sitati Ben'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Kiberu Frank'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 3,
                'group_name': 'BSE18-4',
                'title': 'Electronic Tollbooth monitoring system: A case study of KCCA',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 02:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Mugabira Anthony'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kisakye Daniel'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Kizza Peter'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Nsubuga Ronald'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 4,
                'group_name': 'BSE18-6',
                'title': 'A centralized solid waste managements system: a case study of NOREMA Services Limited',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 05:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Iga Kogongo edward',
                    },
                    {
                        'id': 2,
                        'name': 'mugeere paul',
                    },
                    {
                        'id': 3,
                        'name': 'opio solomon',
                    },
                    {
                        'id': 4,
                        'name': 'lubwama enock',
                    },
                ]
            },
            {
                'id': 5,
                'group_name': 'BSE18-7',
                'title': 'Awesome SMS Gateway System',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 05:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Katusiime Lisa',
                    },
                    {
                        'id': 2,
                        'name': 'Mugume Davies Arthur',
                    },
                    {
                        'id': 3,
                        'name': 'Emmanuel Okiria',
                    },
                    {
                        'id': 4,
                        'name': '	Omiat Isaac',
                    },
                ]
            },
            {
                'id': 6,
                'group_name': 'BSE18-8',
                'title': 'An embedded system for a smart poultry farm',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 05:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bbosa Ronald',
                    },
                    {
                        'id': 2,
                        'name': 'Semujju Stuart Dereck',
                    },
                    {
                        'id': 3,
                        'name': 'Matano Ali',
                    },
                    {
                        'id': 4,
                        'name': 'Kimbowa Charles',
                    },
                ]
            },
            {
                'id': 7,
                'group_name': 'BSE18-9',
                'title': 'Milk market predictor',
                'supervisor': 'Steven Odongo',
                'submissionTime': '02/10/17 05:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'BOGERE HUDSON'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NDUNGUTSE PAUL'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'TUMUHAIRWE DEUS'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 8,
                'group_name': 'BSE18-10',
                'title': 'Firefox voice plugin',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 03:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Orach John Kevin',
                    },
                    {
                        'id': 2,
                        'name': 'Kigozi Moses',
                    },
                    {
                        'id': 3,
                        'name': 'Batte Moses',
                    },
                    {
                        'id': 4,
                        'name': 'Kato Paul',
                    },
                ]
            },
            {
                'id': 9,
                'group_name': 'BSE18-11',
                'title': 'Car SMS Security System',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:00',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABWIRE SANDRA REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSEBBUGGA DAVID'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'EBUKALI DAVID'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAAYA ABRAHAM'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 10,
                'group_name': 'BSE18-12',
                'title': 'Home automation and security system',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:30',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'KASULE JOSHUA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KABOGGOZA STEPHEN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'ATUHAIRE MERCY'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NUWAMANYA ALEX'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 11,
                'group_name': 'BSE18-13',
                'title': 'Crop disease surveillance system (CDSS)',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '02/10/17 09:30',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'ARINAITWE ADAM'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KAHANGA LENIN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WANYOTO DENIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'MUDDE ENOCK'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 12,
                'group_name': 'BSE18-14',
                'title': 'Mobile phone language translator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 10:30',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'OKIDI DENISH'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSESANGA SHAFIK'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SEGAWA CHRISTOPHER'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OCHIENG JOHN BAPTIST'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 13,
                'group_name': 'BSE18-15',
                'title': 'Vision mobile news App',
                'supervisor': 'David Bamutura',
                'submissionTime': '03/10/17 11:30',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bazzekuketta Timothy',
                    },
                    {
                        'id': 2,
                        'name': 'Namazzi Lornalex Zaake',
                    },
                    {
                        'id': 3,
                        'name': 'Ntege Edward',
                    },
                    {
                        'id': 4,
                        'name': 'Muwanga Mohammed',
                    },
                ]
            },
            {
                'id': 14,
                'group_name': 'BSE18-16',
                'title': 'Regional disease outbreak indicator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:35',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Viola Bazanye Namuganyi',
                    },
                    {
                        'id': 2,
                        'name': 'Moses Gasana',
                    },
                    {
                        'id': 3,
                        'name': 'Martha Lukabwe',
                    },
                    {
                        'id': 4,
                        'name': 'Morine Amutorine',
                    },
                ]
            },
            {
                'id': 15,
                'group_name': 'BSE18-17',
                'title': 'Troubleshooting by example application (TBEA)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:37',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kiplimo k Peter',
                    },
                    {
                        'id': 2,
                        'name': 'Wamanga Isaac',
                    },
                    {
                        'id': 3,
                        'name': 'Kabali Shafique',
                    },
                    {
                        'id': 4,
                        'name': 'Asia Rogers',
                    },
                ]
            },
            {
                'id': 16,
                'group_name': 'BSE18-18',
                'title': 'Mobile Traffic Monitoring System',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '03/10/17 11:38',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'ASINGWIRE CUTHBERT'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NANSAMBU ERNEST'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SSEBANYIIGA FRANCIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OPIO ISAAC RONALD'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 17,
                'group_name': 'BSE18-19',
                'title': 'Trade and logistics management system for exporters and importers and freight forwarding companies',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:39',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kawuma Patrick',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Liz Mirembe',
                    },
                    {
                        'id': 3,
                        'name': 'Abaho Micheal',
                    },
                    {
                        'id': 4,
                        'name': 'Namugaanyi Emily',
                    },
                ]
            },
            {
                'id': 18,
                'group_name': 'BSE18-20',
                'title': 'Farmer-aid vending machine',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 11:40',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Batte Derick',
                    },
                    {
                        'id': 2,
                        'name': 'Henry Tebajjukira',
                    },
                    {
                        'id': 3,
                        'name': 'Nanjekye Joannah',
                    },
                    {
                        'id': 4,
                        'name': 'Ronald Kasujja',
                    },
                ]
            },
            {
                'id': 19,
                'group_name': 'BSE18-21',
                'title': 'Automobile navigation System (to be rephrased)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:41',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'BYAMUKAMA TADEO'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KALEEBI LINDAH REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WALUGEMBE EVEREST'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAKABANDA SAMALIE'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 20,
                'group_name': 'BSE18-22',
                'title': 'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:42',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kakande Joshwa',
                    },
                    {
                        'id': 2,
                        'name': 'Muwonge Andrew',
                    },
                    {
                        'id': 3,
                        'name': 'Byamukama Oscar',
                    },
                    {
                        'id': 4,
                        'name': 'ssuuna sadat',
                    },
                ]
            },
            {
                'id': 21,
                'group_name': 'BSE18-23',
                'title': 'Taxi Stage Location System',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:43',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABATEESA MILLY'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NAMWEBYA FARIDAH'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 22,
                'group_name': 'BSE18-24',
                'title': 'Automatic Pest Control and Irrigation',
                'supervisor': 'Odongo Steven Eyub',
                'submissionTime': '03/10/17 11:44',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kisitu Cornelius',
                    }
                ]
            },
            {
                'id': 23,
                'group_name': 'BSE18-25',
                'title': 'Boda Boda registration and tracking: (embedded with GPS)',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 11:45',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'KAYONDO NASIIFU'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'MURUNGI CISSY'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NAKACHWA HELLEN'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'SEMPA JONATHAN'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 24,
                'group_name': 'BSE18-26',
                'title': 'navigation',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 11:48',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'SEBUYEGE MARTIN'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kayemba Lawrence'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 25,
                'group_name': 'BSE18-27',
                'title': 'Mobile-Energy Saving System (MESS)',
                'supervisor': 'Drake Mirembe',
                'submissionTime': '03/10/17 12:48',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSGONJE ISMAIL'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'AGABA PETER'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 26,
                'group_name': 'BSE18-28',
                'title': 'QualiHewa (Air pollution detection and measuring)',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:08',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Karamagi Phillip',
                    },
                    {
                        'id': 2,
                        'name': 'Lubega Mark',
                    },
                    {
                        'id': 3,
                        'name': 'Karungi Emilly',
                    },
                    {
                        'id': 4,
                        'name': 'Sande Marcellinus',
                    },
                ]
            },
            {
                'id': 27,
                'group_name': 'BSE18-29',
                'title': 'RFID Security Access and Control System for Red Cross Uganda',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:15',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'kyagambiddwa sirajje',
                    },
                    {
                        'id': 2,
                        'name': 'kimuli samuel',
                    },
                    {
                        'id': 3,
                        'name': 'mugoya edrin',
                    },
                    {
                        'id': 4,
                        'name': 'muhumuza arthur',
                    },
                ]
            },
            {
                'id': 28,
                'group_name': 'BSE18-30',
                'title': 'Doberman Surveillance',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 12:12',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kemigisha Florence',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Samuel',
                    },
                    {
                        'id': 3,
                        'name': 'Semakula Kraiba',
                    },
                    {
                        'id': 4,
                        'name': 'Ziwa Ali',
                    },
                ]
            },
            {
                'id': 29,
                'group_name': 'BSE18-31',
                'title': 'MoBET',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:15',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'thembo emmanuel',
                    },
                    {
                        'id': 2,
                        'name': 'mukama godson',
                    },
                    {
                        'id': 3,
                        'name': 'nshimye joseph',
                    },
                    {
                        'id': 4,
                        'name': 'tinyefuza gordon',
                    },
                ]
            },
            {
                'id': 30,
                'group_name': 'BSE18-32',
                'title': 'Clinical diagnosis and treatment decision system',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '03/10/17 12:16',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'TWEHAMYE SILUS'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KANAMWANJI JULIUS'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'MUGABIRWE CATHBERT'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 31,
                'group_name': 'BSE18-33',
                'title': 'MOS Data recovery software',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:20',
                'file': 'Concept Paper',
                'members': [
                    {
                        'id': 1,
                        'name': 'Ekalet Sam',
                    },
                    {
                        'id': 2,
                        'name': 'Malinga John Robert',
                    },
                    {
                        'id': 3,
                        'name': 'Rubahinya Oreb',
                    },
                    {
                        'id': 4,
                        'name': 'Simon Orupia',
                    },
                ]
            },
        ];
    };
    ConceptPapersPageComponent.prototype._viewGroup = function (id) {
        console.log("Group id: " + id);
    };
    /* Chat with the group */
    ConceptPapersPageComponent.prototype._chat = function (id) {
        console.log("Chat id recieved: " + id);
    };
    /* Chat with the group */
    ConceptPapersPageComponent.prototype._history = function (id) {
        console.log("chat history id: " + id);
    };
    /* Handle selected file */
    ConceptPapersPageComponent.prototype.onSelectedFile = function (id) {
        this.selectedFileId = id;
        console.log("The selected file", id);
    };
    /* Recieve the details for the group you have selected */
    ConceptPapersPageComponent.prototype.receiveSelectedGroup = function (event) {
        this.groupDetails = event['groupname'];
    };
    ConceptPapersPageComponent.prototype.refreshFilesTable = function (event) {
        console.log("There is need to update the uploads filee table");
        /* We've made it a number so that angular can detect the increment and effect a GET Request */
        this.refreshUploadsTableFiles++;
    };
    ConceptPapersPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-concept-papers-page',
            template: __webpack_require__("../../../../../src/app/pages/concept-papers-page/concept-papers-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/concept-papers-page/concept-papers-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], ConceptPapersPageComponent);
    return ConceptPapersPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\r\n  background: #efefee url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.png")) + ") left top repeat !important;\r\n}\r\n/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n  font-family: Open Sans;\r\n  font-size: 12px;\r\n}\r\n.page-container{\r\n  padding-bottom: 0px;\r\n  display: none;\r\n  background: #1b1e2400;\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  background-color: #ffffff00;\r\n  background: transparent url(" + escape(__webpack_require__("../../../../../src/assets/img/muk.png")) + ") center no-repeat;\r\n  background-attachment: fixed;\r\n  height: 94%;\r\n  /*height: 94% !important;*/\r\n  transition: all .5s ease-in-out;\r\n}\r\n.login-container .login-box .login-body .login-title {\r\n  text-align: left;\r\n}\r\n.btn-info {\r\n  background-color: rgba(17, 133, 255, 0.72);\r\n  border-color: rgba(17, 133, 255, 0.72);\r\n}\r\n.btn-info:hover,\r\n.btn-info:focus,\r\n.btn-info:active,\r\n.btn-info.active, .open >\r\n.dropdown-toggle.btn-info {\r\n  background-color: #1185FF;\r\n  border-color: #1185FF;\r\n}\r\n.x-navigation > li.xn-logo > a:first-child {\r\n  background: #0cc10ccc;\r\n}\r\n.x-navigation > li.xn-logo > a:first-child:hover {\r\n  background-color: #0cc10ccc;\r\n}\r\n.x-navigation li.active > a {\r\n  background: #0cc10ccc;\r\n}\r\n.x-navigation li.xn-title {\r\n  text-align: center;\r\n}\r\n.xn-logo > a > div,\r\n.xn-logo > a > img{\r\n  display: inline-block;\r\n  margin-top: -11px;\r\n  font-size: 18px;\r\n  vertical-align: middle;\r\n}\r\n.xn-logo > a > img{\r\n  width: 49px;\r\n}\r\n.xn-text{\r\n  margin-left: 8px;\r\n}\r\n._icon{\r\n  font-size: 16px;\r\n}\r\n.panel-body.list-group{\r\n  height: 200px;\r\n}\r\n.progress-bar.progress-bar-danger{\r\n  width: 50%;\r\n}\r\n.progress-bar.progress-bar-warning{\r\n  width: 80%;\r\n}\r\n.progress-bar.progress-bar-success{\r\n  width: 100%;\r\n}\r\n.progress.progress-small.progress-striped.active > .progress-bar.progress-bar-success{\r\n  width: 95%;\r\n}\r\n.panel-body.list-group.scroll{\r\n  height: 200px;\r\n}\r\n.panel-controls{\r\n  margin-top: 2px;\r\n}\r\n.chart-holder{\r\n  height: 200px;\r\n}\r\n.panel-body > .chart-holder{\r\n  height: 200px;\r\n}\r\n.progress.progress-small.progress-striped.active > .progress-bar.progress-bar-danger {\r\n  width: 85%;\r\n}\r\n.progress.progress-small.progress-striped.active > .progress-bar.progress-bar-warning {\r\n  width: 40%;\r\n}\r\n.progress.progress-small.progress-striped.active > .progress-bar.progress-bar-warning {\r\n  width: 72%;\r\n}\r\n.progress.progress-small.progress-striped.active > .progress-bar.progress-bar-success {\r\n  width: 100%;\r\n}\r\n.progress.progress-small.progress-striped > .progress-bar.progress-bar-success {\r\n  width: 100%;\r\n}\r\n.progress-list > .progress > .progress-bar-primary{\r\n  width: 75%;\r\n}\r\n.progress-list > .progress > ._2{\r\n  width: 90%;\r\n}\r\n.progress-list > .progress > .progress-bar-danger{\r\n  width: 5%;\r\n}\r\n.progress-list > .progress > .progress-bar-warning{\r\n  width: 50%;\r\n}\r\n.dashboard-map-seles{\r\n  width: 100%; \r\n  height: 200px;\r\n}\r\nul.panel-controls > li > a {\r\n  border-radius: 50%;\r\n}\r\n.panel-add{\r\n  color: white !important;\r\n  font-size: 11px;\r\n  background-color: rgba(17, 133, 255, 0.75);\r\n  border-color: rgba(17, 133, 255, 0.92) !important;\r\n  box-shadow: 0px 1px 2px 1px rgba(105, 105, 105, 0.52);       \r\n}\r\n.panel-add:hover,\r\n.panel-add:active{\r\n  border-color: #1185FF !important;\r\n  background-color: #1185FF;\r\n  box-shadow: 0px 1px 2px 1px #696969d6;  \r\n}\r\n\r\n.page-content{\r\n  background: rgba(245, 245, 245, 0.95);\r\n  height: -webkit-fit-content !important;\r\n  height: -moz-fit-content !important;\r\n  height: fit-content !important;\r\n}\r\n.navLinks.active{\r\n  background-color: #0b0b0c;\r\n}\r\n._a,\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\n._individualDetailsContainer{\r\n  padding: 0px !important;\r\n}\r\n._img{\r\n  text-align: center !important;\r\n  border: 0px !important;\r\n  padding: 7px 3px 0px 3px !important;\r\n}\r\n._img > img{\r\n  width: 165px;\r\n  height: 165px;\r\n  text-align: center;\r\n  display: initial;\r\n  margin: 0px;\r\n  /*border-radius: 50%;*/\r\n  padding: 2px;\r\n}\r\n._pass{\r\n  width: 100%  !important;\r\n  text-align: center;\r\n  background-color: transparent !important;\r\n  font-weight: 700;\r\n}\r\n._passportContainer{\r\n  height: 100% !important;\r\n}\r\n.form-control {\r\n  font-size: 12px;\r\n  width: 100% !important;\r\n}\r\n._panel{\r\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.43);\r\n  border: 1px solid white;\r\n  border-radius: 1px;\r\n}\r\n.box.box-info {\r\n  padding: 0px;\r\n/*    border-top: 4px solid #127ef0;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;*/\r\n  background-color: white;\r\n  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.43);\r\n  margin: 0px 0px 6px 7px;\r\n}\r\n.box-header.with-border {\r\n  border-bottom: 1px solid #f4f4f4;\r\n}\r\n.box-header,\r\n.box-body > .form-group > input,\r\n.nav.navbar-nav > li > a,\r\n.navbar-nav >.user-menu >.dropdown-menu > li.user-header,\r\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header> p,\r\n.navbar-nav>.user-menu>.dropdown-menu>li.user-header>img,\r\n.user-footer, .user-footer > div,\r\n.navbar-nav>.user-menu>.dropdown-menu>.user-footer .btn-default {\r\n  transition: all 0.5s ease-in-out;\r\n  -moz-transition: all 0.5s ease-in-out;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n}\r\n.box-header {\r\n  color: #444;\r\n  display: block;\r\n  padding: 10px;\r\n  position: relative;\r\n  height: 42px;\r\n}\r\n.box-header > .box-tools {\r\n  text-align: right;\r\n  padding: 0px;\r\n}\r\n.box-header>.box-tools {\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 4px;\r\n}\r\n.box-body {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  padding: 10px;\r\n}\r\n.form-container{\r\n  background-color: white;\r\n}\r\n.nav-tabs-custom {\r\n  margin-bottom: 20px;\r\n  background: #fff;\r\n  box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n  border-radius: 3px;\r\n}\r\n.nav-tabs-custom>.nav-tabs {\r\n  margin: 0;\r\n  border-bottom-color: #f4f4f4;\r\n  border-top-right-radius: 3px;\r\n  border-top-left-radius: 3px;\r\n}\r\n.nav-tabs {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.nav {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n.nav-tabs-custom>.nav-tabs>li:first-of-type {\r\n  margin-left: 0;\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.active {\r\n  border-top-color: rgba(18, 126, 240, 0.98);\r\n}\r\n.nav-tabs-custom>.nav-tabs>li {\r\n  border-top: 3px solid transparent;\r\n  margin-bottom: -2px;\r\n  margin-right: 5px;\r\n}\r\n.nav-tabs-custom>.nav-tabs>li:first-of-type.active>a {\r\n  border-left-color: transparent;\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.active>a {\r\n  border-top-color: transparent;\r\n  border-left-color: #f4f4f4;\r\n  border-right-color: #f4f4f4;\r\n}\r\n.nav-tabs-custom>.nav-tabs>li.active>a,\r\n.nav-tabs-custom>.nav-tabs>li.active:hover>a {\r\n  background-color: #fff;\r\n  color: #444;\r\n}\r\n.nav-tabs-custom>.nav-tabs>li>a,\r\n.nav-tabs-custom>.nav-tabs>li>a:hover {\r\n  background: transparent;\r\n  margin: 0;\r\n}\r\n.nav-tabs-custom>.nav-tabs>li>a {\r\n  color: #444;\r\n  border-radius: 0;\r\n}\r\n._individuals-body{\r\n  padding: 0px 0px 0px 1px;\r\n}\r\n.box-header>.fa,\r\n.box-header>.glyphicon,\r\n.box-header>.ion,\r\n.box-header .box-title {\r\n  display: inline-block;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  line-height: 1;\r\n}\r\n._bio {\r\n  padding: 3px 0px 0px 0px;\r\n}\r\n.tab-content{\r\n  display: inline-block;\r\n  height: 100%;\r\n  margin: -18px 0px -25px 0px;\r\n  width: 100% !important;\r\n}\r\n._namesContainer{\r\n    margin-left: -5px;\r\n}\r\n._btn {\r\n  font-size: 11px;\r\n  display: block;\r\n  float: left;\r\n  width: 30px;\r\n  height: 31px;\r\n  text-align: center;\r\n  border: 1px solid #BBB;\r\n  border-radius: 50%;\r\n  margin-left: 3px;\r\n  transition: all 200ms ease;\r\n  background-color: white;\r\n}\r\n.btn.btn-box-tool > i{\r\n  margin-left: -4px;\r\n}\r\n.btn .fa, .btn .glyphicon {\r\n  font-size: 11px;\r\n  margin-right: 5px;\r\n}\r\n.nav-tabs > li > a {\r\n  padding: 7px 10px;\r\n}\r\n.profile-controls{\r\n  display: inline-block;\r\n}\r\n.profile-controls > a{\r\n  display: none;\r\n}\r\n.profile .profile-controls a.profile-control-right,\r\n.profile .profile-controls a.profile-control-left{\r\n  top: 124px;\r\n}\r\n.profile .profile-controls a.profile-control-right:hover{\r\n  border: 1px solid #32353c;\r\n  background-color: #32353c;\r\n}\r\n.profile .profile-controls a.profile-control-right{\r\n  right: 0px;\r\n  text-align: right;\r\n  padding-right: 5px;\r\n  border: 1px solid #1f2127;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  border-radius: 1px;\r\n  padding: 0px 4px;\r\n  text-decoration: none;\r\n  margin-right: 4px;\r\n  margin-left: 4px;  \r\n}\r\n.profile .profile-controls a.profile-control-left{\r\n  left: 0px;\r\n  text-align: left;\r\n  padding-left: 5px;\r\n  text-decoration: none;\r\n}\r\n.profile .profile-controls a {\r\n  width: 72px;\r\n  height: 30px;\r\n  font-size: 12px;\r\n  color: #DDD;\r\n  border: 0px;\r\n} \r\n.profile .profile-data .profile-data-name {\r\n  font-size: 12px;\r\n  font-weight: 500;\r\n  text-transform: capitalize;\r\n}\r\n.page-container .page-content .page-content-wrap {\r\n  margin-top: -7px;\r\n  padding-right: 0px;\r\n  padding-bottom: 33px;\r\n}\r\n.page-sidebar{\r\n  height: 100% !important;\r\n}\r\n.page-container .page-sidebar {\r\n  background: #1c1f25 url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.png")) + ") left top repeat;\r\n}\r\n.as.active{\r\n  background: #121418;\r\n  color: #ffffff;\r\n}\r\n.dataTables_length label, .dataTables_filter label {\r\n  color: black;\r\n}\r\n._panel-body{\r\n  padding: 0px !important;\r\n}\r\n.alert {\r\n  margin-bottom: -2px;\r\n  line-height: 7px;\r\n  border-radius: 0px;\r\n}\r\n.btn-info[disabled], .btn-info.disabled {\r\n  background: rgba(17, 133, 255, 0.72);\r\n  border-color: rgba(17, 133, 255, 0.72);\r\n}\r\n/* Data tables */\r\n.dataTables_length {\r\n  width: 100%;\r\n  border-bottom: 1px solid #E5E5E5;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n}\r\n.dataTables_length label,\r\n.dataTables_filter label {\r\n  color: black;\r\n}\r\n.dataTables_filter {\r\n  width: initial;\r\n  padding: 0px 0px 0px;\r\n  border-bottom: 0px;\r\n}\r\n._search{\r\n  width: initial !important;\r\n}\r\n._detailsContainer{\r\n  width: 99% !important;\r\n}\r\n._collapseNamesContainer,\r\n._collapseHomeDetailsContainer{\r\n  display: none;\r\n}\r\n.panel .panel-body {\r\n  overflow-x: auto;\r\n  overflow-y: auto !important;\r\n}\r\n._firstTab{\r\n  border-left: 0px !important;\r\n}\r\n.nav-tabs-custom > .nav-tabs > li.active {\r\n  border-top-color: rgba(18, 126, 240, 0.98);\r\n  border-left: 1px solid #e5e5e5;\r\n  border-right: 1px solid #e5e5e5;\r\n}\r\n._first{\r\n  margin-left: -8px;\r\n}\r\n._space{\r\n  margin: 0px 22px;\r\n}\r\n._faIcons{\r\n  margin-left: 7px;\r\n}\r\n._leftAlign{\r\n  text-align: left;\r\n}\r\n._alertContainer {\r\n  display: none;\r\n  padding-right: 4px;\r\n}\r\n.alert-warning{\r\n  background-color: rgba(18, 126, 240, 0.62);\r\n  border-color: rgba(18, 126, 240, 0.8);\r\n  margin-left: 2px;\r\n  padding-top: 2px;\r\n  padding-bottom: 3px;\r\n  color: white;\r\n  height: 36px;\r\n  margin-bottom: 5px;\r\n}\r\n._refresh_btn{\r\n  border: 1px solid #127ef0;\r\n  background-color: #127ef0;\r\n  color: white;\r\n  text-transform: capitalize;\r\n}\r\n._refresh_btn:hover{\r\n  color: inherit;\r\n}\r\n.alert-dismissable .close, \r\n.alert-dismissible .close {\r\n  top: -1px;\r\n  right: -34px;\r\n  color: black;\r\n  line-height: 29px;\r\n  padding: 0px 10px;\r\n}\r\n._no-padding{\r\n  padding: 0px !important;\r\n}\r\n._scheduled-meeting-total{\r\n  position: absolute;\r\n  width: 21px;\r\n  margin-top: 6px;\r\n  margin-left: 7px;\r\n  padding-top: 2.1px;\r\n  height: 21px;\r\n  display: inline-block;\r\n  text-align: center;\r\n  color: #e04b4a;\r\n  font-weight: 600;\r\n  box-shadow: 0 0 0 0 #e04b4a;\r\n  border-radius: 50%;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n  -webkit-animation: pulse 1.4s infinite cubic-bezier(0.66, 0, 0, 1);\r\n  animation: pulse 1.4s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n  /*\r\n  ._scheduled-meeting-total:hover{\r\n    -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;\r\n  }\r\n  */\r\n  @-webkit-keyframes pulse {to {box-shadow: 0 0 0 10px rgba(18, 126, 240, 0);}}\r\n  @keyframes pulse {to {box-shadow: 0 0 0 10px rgba(18, 126, 240, 0);}}\r\n\r\n.btn-success {\r\n  background-color: rgba(39, 163, 93, 0.59);\r\n  border-color: rgb(10, 113, 55);\r\n}\r\n/* Media Queries */\r\n@media only screen and (max-width: 1024px){\r\n  .page-container .page-sidebar.scroll {\r\n    height: -webkit-fit-content !important;\r\n    height: -moz-fit-content !important;\r\n    height: fit-content !important;\r\n  }\r\n}\r\n@media only screen and (max-width: 420px){\r\n  .page-container{\r\n    background-position-y: 57%;\r\n    overflow-x: auto;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"root-container\">\n    <!-- START PAGE CONTAINER -->\n    <div class=\"page-container page-navigation-top-fixed animated fadeIn _delay10ms _dashboard-main-scrollbar\">\n        <!-- START PAGE SIDEBAR -->\n        <div class=\"page-sidebar page-sidebar-fixed scroll mCustomScrollbar _mCS_1 mCS-autoHide\">\n            <!-- START X-NAVIGATION -->\n            <ul class=\"x-navigation\">\n                <li class=\"xn-logo\">\n                    <a class=\"pointer\">\n                        <div class=\"animated fadeInLeft _delay10ms\">{{ cocis }}</div>          \n                        <img src=\"../../../assets/img/muk.png\" class=\"animate fadeIn _delay10ms\"/>\n                        <div class=\"animated fadeInRight _delay10ms\"> {{ appName }} </div>                  \n                    </a>\n                    <a class=\"x-navigation-control pointer\"></a>\n                </li>\n                <li class=\"xn-profile\">\n                    <a class=\"profile-mini pointer\">\n                        <img src=\"data:image/gif;base64,{{user_image}}\" class=\"animated fadeIn _delay4ms\" alt=\"{{ username }}\">\n                        <!--<img src=\"/assets/img/users/{{ user_image }}\" alt=\"{{ username }}\" />-->\n                    </a>\n                    <div class=\"profile\">\n                        <div class=\"profile-image\">\n                            <img src=\"data:image/gif;base64,{{user_image}}\" class=\"animated fadeIn _delay4ms\" alt=\"{{ username }}\">\n                            <!--<img src=\"/assets/img/users/{{ user_image }}\" alt=\"{{ username }}\"/>-->\n                        </div>\n                        <div class=\"profile-controls\">\n                            <a class=\"profile-control-left animated fadeInLeft _delay6ms\">{{ username }}</a>\n                            <a class=\"profile-control-right pointer animated fadeInRight _delay6ms profile as\" (click)=\"_navSwitch('Profile','profile')\">Profile</a>\n                        </div>                     \n                    </div>                                                                        \n                </li>    \n                <li *ngIf=\"userType == '2' || userType == '3'\">\n                    <a (click)=\"_navSwitch('Home','home')\" class=\"home as pointer active\"><span class=\"fas fa-home _icon\"></span> <span class=\"xn-text\">Home</span></a>                   \n                </li>    \n                <li *ngIf=\"userType != 'sysAdmin'\">\n                    <a (click)=\"_navSwitch('Forum','forum')\" class=\"forum as pointer\"><span class=\"far fa-comments _icon\"></span> <span class=\"xn-text\">Forum</span></a>                   \n                </li>    \n                <li *ngIf=\"userType != 'sysAdmin'\">\n                    <a (click)=\"_navSwitch('Archived Projects','arcPros')\" class=\"arcPros as pointer\"><span class=\"far fa-folder _icon\"></span> <span class=\"xn-text\">Archived Projects</span></a>                   \n                </li>    \n                <li *ngIf=\"userType != 'sysAdmin'\">\n                    <a (click)=\"_navSwitch('Concept Paper','conPp')\" class=\"conPp as pointer\"><span class=\"far fa-lightbulb _icon\"></span> <span class=\"xn-text\">Concept Paper</span></a>                   \n                </li>    \n                <li *ngIf=\"userType != 'sysAdmin'\">\n                    <a (click)=\"_navSwitch('Requirements Tools','reqTls')\" class=\"reqTls as pointer\"><span class=\"fas fa-wrench _icon\"></span> <span class=\"xn-text\">Requirements Tools</span></a>                   \n                </li>    \n                <li *ngIf=\"userType != 'sysAdmin'\"> \n                    <a (click)=\"_navSwitch('Software Requirements Specifications','srs')\" class=\"srs as pointer\"><span class=\"far fa-file-code _icon\"></span> <span class=\"xn-text\">SRS</span></a>                   \n                </li>    \n                <li *ngIf=\"userType != 'sysAdmin'\"> \n                    <a (click)=\"_navSwitch('Software Design Document','sdd')\" class=\"sdd as pointer\"><span class=\"far fa-object-group _icon\"></span> <span class=\"xn-text\">SDD</span></a>                   \n                </li>    \n                <li *ngIf=\"userType != 'sysAdmin'\">\n                    <a (click)=\"_navSwitch('Report','report')\" class=\"report as pointer\"><span class=\"fas fa-book _icon\"></span> <span class=\"xn-text\">Report</span></a>                   \n                </li>\n                <li class=\"xn-openable\" *ngIf=\"userType === 'coordinator'\">\n                    <a class=\"pointer\" (click)=\"_activeCategory('Supervisors')\"> <span class=\"xn-text\">Supervisors</span></a>\n                    <ul>\n                        <li><a (click)=\"_navSwitchInnerOne('Add','add')\" class=\"add as pointer\"><span class=\"fas _icon fa-user-plus\"></span><span class=\"xn-text\">Add</span></a></li>\n                        <li><a (click)=\"_navSwitchInnerOne('Assign groups','assignGroup')\" class=\"assignGroup as pointer\"><span class=\"fas _icon fa-pencil-alt\"></span><span class=\"xn-text\">Assign groups</span></a></li>\n                    </ul>\n                </li>  \n                <li class=\"xn-openable\" *ngIf=\"userType == 'sysAdmin'\">\n                    <a class=\"pointer\" (click)=\"_activeCategory('Users')\"> <span class=\"xn-text\">Users</span></a>\n                    <ul>\n                        <li><a (click)=\"_navSwitchInnerOne('student','student')\" class=\"student as pointer\"><span class=\"fas _icon fa-users\"></span><span class=\"xn-text\">Students</span></a></li>\n                        <li><a (click)=\"_navSwitchInnerOne('supervisors','supervisors')\" class=\"supervisors as pointer\"><span class=\"fas _icon fa-edit\"></span><span class=\"xn-text\">Supervisors</span></a></li>\n                    </ul>\n                </li>                \n                <li class=\"xn-openable\" *ngIf=\"userType == 'sysAdmin'\">\n                    <a class=\"pointer\" (click)=\"_activeCategory('System Logs')\"> <span class=\"xn-text\">System Logs</span></a>\n                    <ul>\n                        <li><a (click)=\"_navSwitchInnerOne('Server','serverLog')\" class=\"serverLog as pointer\"><span class=\"fas _icon fa-server\"></span><span class=\"xn-text\">Server</span></a></li>\n                        <li><a (click)=\"_navSwitchInnerOne('Database','databaseLog')\" class=\"databaseLog as pointer\"><span class=\"fas _icon fa-database\"></span><span class=\"xn-text\">Database</span></a></li>\n                        <li><a (click)=\"_navSwitchInnerOne('Error','errorLogs')\" class=\"errorLogs as pointer\"><span class=\"fas _icon fa-exclamation-circle\"></span><span class=\"xn-text\">Error</span></a></li>\n                    </ul>\n                </li>\n            </ul>        \n            <!-- END X-NAVIGATION -->\n        </div>\n        <!-- PAGE CONTENT -->\n        <div class=\"page-content\">\n            <!-- START X-NAVIGATION VERTICAL -->\n            <fiyps-header></fiyps-header>                  \n            <!-- START BREADCRUMB -->\n            <fiyps-breadcrumb [showNewForumBtn]=\"showNewForumBtn\" (refreshPosts)=\"onRefreshPosts($event)\" (event)=\"_handleBreadcrumbEvent($event)\" ></fiyps-breadcrumb>\n            <!-- PAGE CONTENT WRAPPER -->\n            <div class=\"page-content-wrap animated fadeIn _delay10ms\" [ngSwitch]=\"switchValue\">\n                <div class=\"_alertContainer animated slideInDown\">\n                    <div class=\"alert alert-warning alert-dismissable\">\n                        <!--<a class=\"pointer btn btn-secondary _refresh_btn\" (click)=\"_refreshToken()\">Refresh</a> -->\n                        <a class=\"pointer btn btn-secondary _refresh_btn\">Refresh</a>\n                        <a class=\"close pointer\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n                    </div>\n                </div>\n                <fiyps-home-page *ngSwitchCase=\"'Home'\"></fiyps-home-page>\n                <fiyps-forums-page [refreshPosts]=\"refreshPosts\" [user_image]=\"user_image\" [user_name]=\"username\" *ngSwitchCase=\"'Forum'\"></fiyps-forums-page>\n                <fiyps-archived-projects-page showDetails=\"{{ showDetails }}\" *ngSwitchCase=\"'Archived Projects'\"></fiyps-archived-projects-page>\n                <fiyps-concept-papers-page *ngSwitchCase=\"'Concept Paper'\"></fiyps-concept-papers-page>              \n                <fiyps-requirements-tools-page *ngSwitchCase=\"'Requirements Tools'\"></fiyps-requirements-tools-page>\n                <fiyps-srs-page *ngSwitchCase=\"'Software Requirements Specifications'\"></fiyps-srs-page>                          \n                <fiyps-sdd-page *ngSwitchCase=\"'Software Design Document'\"></fiyps-sdd-page>                          \n                <fiyps-reports-page *ngSwitchCase=\"'Report'\"></fiyps-reports-page>                          \n                <fiyps-profile-page (onUserImageChange)=\"onUserImageChange($event)\" *ngSwitchCase=\"'Profile'\"></fiyps-profile-page>                          \n                <fiyps-add-supervisor-page *ngSwitchCase=\"'Add'\"></fiyps-add-supervisor-page>                          \n                <fiyps-assign-group-page *ngSwitchCase=\"'Assign groups'\"></fiyps-assign-group-page> \n                <fiyps-all-student-groups *ngSwitchCase=\"'student'\"></fiyps-all-student-groups>     \n                <fiyps-all-lecturers *ngSwitchCase=\"'supervisors'\"></fiyps-all-lecturers>  \n                <fiyps-server-logs *ngSwitchCase=\"'Server'\"></fiyps-server-logs>  \n                <fiyps-database-logs *ngSwitchCase=\"'Database'\"></fiyps-database-logs>  \n                <fiyps-error-logs *ngSwitchCase=\"'Error'\"></fiyps-error-logs>  \n            </div>\n            <fiyps-footer></fiyps-footer>\n            <!-- END PAGE CONTENT WRAPPER -->                                \n        </div>            \n        <!-- END PAGE CONTENT -->\n    </div>\n    <!-- END PAGE CONTAINER -->\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard-page/dashboard-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardPageComponent = (function () {
    function DashboardPageComponent(http, api, route) {
        var _this = this;
        this.http = http;
        this.api = api;
        this.route = route;
        this.userType = null;
        this._activeClass = null;
        this.appName = null;
        this.cocis = null;
        this.username = null;
        this.user_image = null;
        this.user_role = null;
        this.switchValue = null;
        this.sidebarInnerSectionClasses = null;
        this.flag = "_flag";
        this.showNewForumBtn = false;
        this.refreshPosts = 0;
        /* Archived Projects Breadcrumb variables */
        this.showDetails = false;
        this.userType = this.api._getUserType();
        this.appName = "FIYPS";
        this.cocis = "COCIS";
        this.username = this.api._getUserName();
        this.user_image = this.api._getUserImg();
        this.sidebarInnerSectionClasses = ["serverLog", "databaseLog", "errorLogs", "systemLogs", "student", "add", "assignGroup", "home", "forum", "arcPros", "conPp", "reqTls", "srs", "sdd", "report", "profile"];
        this.loadAPI = new Promise(function (resolve) {
            _this.loadScript();
            resolve(true);
        });
    }
    DashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__("html").css('background', "url(../../../assets/img/bg.png) left top repeat rgba(238, 237, 236, 0.38)");
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".page-container").css('display', 'block');
        }, 100);
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".profile-controls > a").fadeIn();
        }, 2500);
        this.api._getBreadcrumb().subscribe(function (item) {
            _this.switchValue = item['name'];
            _this._activeClass = item['className'];
            _this._navSwitch(_this.switchValue, _this._activeClass);
        });
    };
    /* Load 3rd party Scripts */
    DashboardPageComponent.prototype.loadScript = function () {
        var isFound = false;
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; ++i) {
            if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
                isFound = true;
            }
        }
        if (!isFound) {
            var dynamicScripts = ["assets/js/plugins/jquery/jquery.min.js", "assets/js/plugins/jquery/jquery-ui.min.js", "assets/js/plugins/bootstrap/bootstrap.min.js", "assets/js/plugins/icheck/icheck.min.js", "assets/js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js", "assets/js/plugins/scrolltotop/scrolltopcontrol.js", "assets/js/plugins/morris/raphael-min.js", "assets/js/plugins/morris/morris.min.js", "assets/js/plugins/rickshaw/d3.v3.js", "assets/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js", "assets/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js", "assets/js/plugins/bootstrap/bootstrap-datepicker.js", "assets/js/plugins/datatables/jquery.dataTables.min.js", "assets/js/plugins/moment.min.js", "assets/js/plugins/daterangepicker/daterangepicker.js", "assets/js/plugins.js", "assets/js/actions.js", "assets/js/demo_dashboard.js"];
            for (var i = 0; i < dynamicScripts.length; i++) {
                var node = document.createElement('script');
                node.src = dynamicScripts[i];
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
    };
    DashboardPageComponent.prototype._navSwitch = function (activated, className) {
        this.switchValue = activated;
        this.api._updateBreadcrumb(1, this.switchValue, className);
        this._sidebarSettings(className);
        if (activated === 'Forum') {
            console.log("The forum page has been accessed");
            this.showNewForumBtn = true;
        }
        else {
            this.showNewForumBtn = false;
        }
    };
    DashboardPageComponent.prototype._handleBreadcrumbEvent = function (e) {
        this.showDetails = e;
        console.log(this.showDetails);
    };
    DashboardPageComponent.prototype._activeCategory = function (category) {
        this.api._updateBreadcrumb(1, category, '');
    };
    DashboardPageComponent.prototype._navSwitchInnerOne = function (activated, className) {
        this.switchValue = activated;
        this.api._updateBreadcrumb(2, this.switchValue, className);
        this._sidebarSettings(className);
    };
    DashboardPageComponent.prototype._sidebarSettings = function (className) {
        var _this = this;
        this.sidebarInnerSectionClasses.filter(function (item) {
            if (item == className) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__(".as").removeClass('active');
                _this._activeClass = className;
                __WEBPACK_IMPORTED_MODULE_4_jquery__("." + className + "").addClass('active');
            }
        });
    };
    /*
      _refreshToken(){
        if(this.api_service._getLoggedInStatus){
          this.http.post( this.api_service.apiUrl+"/signout", this.api_service._getSession())
          .subscribe(
            data => {
              console.log(data['token'])
              if((data['status']) && (data['status']) == 'sign-out'){
                console.log(data['status'])
              }else if(data['error']){
                console.log(data['error'])
              }
              this.api_service._usetLoggedInStatus();
              $("._alertContainer").hide(0);
              this.route.navigate(['/']);
            }
          );
        }else{
          console.log("User already signed out");
          setTimeout(() =>{
            this.api_service._usetLoggedInStatus();
            this.route.navigate(['/']);
          },2000)
        }
    
      */
    /* Handle the refresh post event */
    DashboardPageComponent.prototype.onRefreshPosts = function (event) {
        this.refreshPosts++;
    };
    /* Handle user image change event */
    DashboardPageComponent.prototype.onUserImageChange = function (event) {
        this.user_image = event;
    };
    DashboardPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-dashboard-page',
            template: __webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard-page/dashboard-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/database-logs/database-logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/database-logs/database-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<fiyps-logs></fiyps-logs>"

/***/ }),

/***/ "../../../../../src/app/pages/database-logs/database-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatabaseLogsComponent = (function () {
    function DatabaseLogsComponent() {
    }
    DatabaseLogsComponent.prototype.ngOnInit = function () {
    };
    DatabaseLogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-database-logs',
            template: __webpack_require__("../../../../../src/app/pages/database-logs/database-logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/database-logs/database-logs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatabaseLogsComponent);
    return DatabaseLogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/error-logs/error-logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/error-logs/error-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<fiyps-logs></fiyps-logs>"

/***/ }),

/***/ "../../../../../src/app/pages/error-logs/error-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorLogsComponent = (function () {
    function ErrorLogsComponent() {
    }
    ErrorLogsComponent.prototype.ngOnInit = function () {
    };
    ErrorLogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-error-logs',
            template: __webpack_require__("../../../../../src/app/pages/error-logs/error-logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/error-logs/error-logs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorLogsComponent);
    return ErrorLogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.png")) + ") left top repeat rgba(251, 251, 251, 0.4);\r\n}\r\n.login-container .login-box {\r\n    width: 84%;\r\n    padding-top: 26px;\r\n    height: 100%;\r\n    transition: all .8s ease-in-out;\r\n}\r\n.login-container .login-box .login-body .form-control {\r\n    background: rgba(0, 0, 0, 0.75) !important;\r\n}\r\n.login-container .login-box .login-body {\r\n    background: rgba(0, 0, 0, 0.84) !important;\r\n    margin-bottom: 39px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    float: unset;\r\n    width: 50%;    \r\n    padding: 0px;\r\n    padding-bottom: 20px;\r\n}\r\n.login-box > div > div{\r\n    border: 1px solid #f3f3f2;\r\n    display: flow-root;\r\n}\r\nstrong{\r\n    font-size: 19px;\r\n}\r\n._headings{\r\n    font-weight: 600;\r\n}\r\n.btn-info {\r\n    background-color: #0cc10c6b !important;\r\n    border-color: #0cc10ccc !important;\r\n}\r\n.btn-info:hover{\r\n    background-color: #0cc10ccc !important;\r\n    border-color: #0cc10ccc !important;\r\n}\r\n.form-horizontal {\r\n    background: #f5f5f500 !important;\r\n    height: 100%;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    padding-top: 16px;\r\n}\r\n.form-group{\r\n    width: 100% !important;;\r\n}\r\n._login-general-info{\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    background-color: rgba(255, 255, 255, 0) !important;\r\n    margin-bottom: 56px;\r\n    height: 89%;\r\n    text-align: justify;\r\n    font-size: 13px;\r\n}\r\n._sm-login-btn{\r\n    display: none;\r\n    position: absolute;\r\n    margin-left: -10px;\r\n    z-index: 1;\r\n    font-size: 13px;\r\n}\r\n._sm-login-btn:hover{\r\n    background-color: #0cc10ccc !important;\r\n    border-color: #0cc10ccc !important;\r\n}\r\n._resetTitle{\r\n  text-align: center !important;\r\n  margin-bottom: 10px !important;\r\n}  \r\n.btn-link._a{\r\n    text-transform: capitalize;\r\n}\r\n.alert {\r\n    line-height: unset;\r\n    padding: 6px 17px;\r\n    background-color: rgba(12, 193, 12, 0.8);\r\n    border: 2px solid white;\r\n    margin-top: 21px;\r\n}\r\n.alert-danger {\r\n    background-color: #E04B4A !important;\r\n}\r\n._strong > a{\r\n    color: rgba(12, 193, 12, 0.8);\r\n    font-size: 14px;\r\n    transition: all .3s ease-in-out;\r\n}\r\n._strong > a:hover,\r\n._strong > a:focus,\r\n._strong > a:active{\r\n    color: rgb(10, 228, 10);\r\n}\r\n._cocis{\r\n    margin-left: 84px;\r\n}\r\n._resetInfo{\r\n    color: #FFF !important;\r\n    font-size: 14px !important;\r\n    font-weight: 300 !important;\r\n    margin-bottom: 8px !important;\r\n    padding: 0px 9px;\r\n}\r\n.mail-not-sent-advice-ul{\r\n    list-style: square;\r\n}\r\n.mail-not-sent-advice-ul > li{\r\n    margin-top: 9px;\r\n}\r\n.progress{\r\n    width: 100%;\r\n    float: left;\r\n    height: 3px;\r\n    border-radius: 0px;\r\n}\r\n.status-bar{\r\n    background-color: rgb(3, 119, 3);\r\n}\r\n.progress.active .progress-bar, .progress-bar.active {\r\n    -webkit-animation: progress-bar-stripes 3s linear infinite;\r\n    animation: progress-bar-stripes .3s linear infinite;\r\n}\r\n/* Media queries */\r\n@media only screen and (max-width: 900px){\r\n    .login-container .login-box {\r\n        width: 100%;\r\n    }\r\n    ._reset{\r\n        font-size: 13px !important;\r\n        font-weight: 500 !important;\r\n    }\r\n    ._resetInfo {\r\n        font-size: 13px !important;\r\n        font-weight: 500 !important;\r\n    }    \r\n}\r\n@media only screen and (max-width: 768px){\r\n    ._cocis{\r\n        margin-left: unset;\r\n    }\r\n    ._login-wrapper{\r\n        display: none;\r\n        width: 100%;\r\n    }\r\n    .login-container .login-box {\r\n        margin-bottom: 57px;\r\n        padding-top: 3px;\r\n    }\r\n    ._login-general-info{\r\n        width: 100%;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n    }\r\n    ._sm-login-btn{\r\n        display: unset;\r\n    }        \r\n    .login-container .login-box .login-body {\r\n        width: 100%;    \r\n    }       \r\n}\r\n@media only screen and (max-width: 340px){\r\n    ._login-general-info{\r\n       margin-bottom: 70px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\"> \n  <div class=\"login-box animated fadeIn _delay5ms\">\n      <div class=\"login-logo\">\n          <div>\n              <div class=\"_cocis animated fadeIn _delay10ms\">\n                  <div>College Of Computing </div>\n                  <div> & </div>\n                  <div>Information Sciences </div>\n              </div>\n              <div class=\"_sm-logo animated fadeInLeft _delay10ms\">COCIS</div>          \n              <img src=\"../../../assets/img/muk.png\" class=\"\"/>\n              <div class=\"_sm-logo animated fadeInRight _delay10ms\">FIYPS </div>\n              <div class=\"_pptrs animated fadeIn _delay10ms\">\n                  <div>Final Year Projects</div>\n                  <div>system </div>\n                  <div class=\"_tracking\"></div>\n              </div>                \n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"animated fadeIn _delay3ms\">\n              <div class=\"login-body \">\n                  <div class=\"progress animated fadeIn _delay2ms\" *ngIf=\"showProgressBar\">\n                    <div class=\"progress-bar progress-bar-striped active status-bar\" role=\"progressbar\"\n                    aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%\"></div>\n                  </div>               \n                  <div class=\"login-title _resetTitle\">Reset Password</div>\n                  <form [formGroup]=\"forgotPasswardForm\" (ngSubmit)=\"_resetPassword(forgotPasswardForm.value)\" class=\"form-horizontal\">\n                      <div class=\"form-group\">\n                          <div class=\"col-md-12\">\n                              <input type=\"email\" class=\"form-control\" formControlName=\"username\" placeholder=\"username / group name\" required/>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <div class=\"col-md-6\">\n                          <a routerLink=\"/\" class=\"btn btn-link btn-block _a\">return</a>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <button class=\"btn btn-info btn-block _a\" type=\"submit\" [disabled]=\"!forgotPasswardForm.valid\">Reset</button>\n                        </div>\n                      </div>                    \n                      <div class=\"form-group animated fadeInUp _delay2ms\">\n                        <div class=\"form-group animated bounceIn _delay2ms\" *ngIf=\"invalid\">\n                            <div class=\"col-md-12\">\n                                <div class=\"alert alert-danger\" role=\"alert\">\n                                  Invalid email. Please try again\n                                </div>\n                            </div>\n                        </div>                 \n                        <div class=\"col-md-12\" *ngIf=\"mailSent\">\n                          <div class=\"alert alert-success\" role=\"alert\">\n                              <span>Check your email </span>\n                          </div>\n                        </div>\n                      </div> \n                      <div class=\"login-title _resetInfo\" *ngIf=\"mailSent\">\n                        If you don't receive an email please try the following:\n                        <ul class=\"mail-not-sent-advice-ul\">\n                          <li>check your internet connection.</li>\n                          <li>If that doesn't work, contacts our IT Team at <strong class=\"_strong\"><a href=\"mailto:'{{ mailto }}'\">{{ mail }}</a></strong> for assistance.</li>\n                        </ul>\n                      </div>         \n                    </form>\n              </div>\n          </div>\n      </div>\n      <fiyps-footer></fiyps-footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.url = null;
        this.invalid = false;
        this.invalidCount = null;
        this.mailSent = false;
        this.switch = 'login';
        this.smBtn = 'login';
        this.mailto = null;
        this.mail = null;
        this.showProgressBar = false;
        this.invalid = false;
        this.url = this.api._getLoginEndpoint();
        this.mail = "mactechlabs1@gmail.com";
        this.mailto = "mactechlabs1@gmail.com?subject=Haven't received the new password";
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_5_jquery__(".login-box").show(0);
        });
        this.forgotPasswardForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2),
            ])),
        });
    };
    ForgotPasswordComponent.prototype._resetPassword = function (username) {
        var _this = this;
        console.log(username);
        this.showProgressBar = true;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"]({
            url: this.api.getResetPasswordEndpoint(),
            type: 'GET',
            data: username,
            error: (function (error) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    _this.invalid = false;
                    _this.mailSent = true;
                }
                else if (data['error']) {
                    console.log(data['error']);
                    _this.invalid = true;
                    _this.mailSent = false;
                }
                _this.showProgressBar = false;
            })
        });
    };
    /* Pop over */
    ForgotPasswordComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_6_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ng2_popup__["Ng2PopupComponent"])
    ], ForgotPasswordComponent.prototype, "popup", void 0);
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forums-page/forums-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".animated-forum-element{\r\n    font-size: 14px;\r\n    font-weight: 800;\r\n}\r\n.forum-wrapper{\r\n  background-color: rgba(241, 241, 241, 0);\r\n  height: 100%;\r\n  width: 100%;\r\n  display: inline-block;\r\n  padding-bottom: 1px;\r\n}\r\n.forum-wrapper > div{\r\n    padding: 0px;\r\n}\r\n.forum-wrapper > div:first-child{\r\n    padding-left: 9px;\r\n    padding-top: 5px;\r\n}\r\n.forum-wrapper > div:last-child{\r\n    padding-left: 3px;\r\n    padding-right: 2px;\r\n    float: right;\r\n    width: 30%;\r\n}\r\n.date{\r\n    width: 101px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n.forum-main-section-wrapper{\r\n    background-color: #f5f5f5a8;\r\n    margin-bottom: 40px;\r\n    box-shadow: 0px 1px 1px 0px #202228a6;\r\n    border-top: 0px;\r\n    transition: all 1s ease-in-out;\r\n}\r\n.forum-header-wrapper{\r\n    width: 100%;\r\n    display: flow-root;\r\n    background-color: #0cc10cba;\r\n}\r\n.forum-header-owner-img,\r\n.forum-header-owner,\r\n.forum-header-title,\r\n.forum-header-post-time{\r\n    display: inline-block;\r\n    padding-top: 5px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.forum-header-title{\r\n    font-weight: 600;\r\n    color: black;\r\n    text-transform: capitalize;\r\n}\r\n.forum-header-owner-img{\r\n    width: 45px;\r\n    height: 48px;\r\n    padding: 0px;\r\n    margin-left: 5px;\r\n    margin-top: 3px;\r\n}\r\n.img-thumbnail{\r\n    border: 0px;\r\n    padding: 2px;\r\n    background-color: #1214186e;\r\n    border-radius: 50%;\r\n    transition: all .5s ease-in-out;\r\n}\r\n.forum-header-owner{\r\n    vertical-align: middle;\r\n    padding: 0px;\r\n    padding-left: 5px;\r\n    padding-top: 7px;\r\n    margin-right: 7px;\r\n}\r\n.forum-header-owner > h3{\r\n    margin-bottom: 0px;\r\n    font-size: 1.3rem;\r\n    color: #1b1e24c2;\r\n    font-weight: 500;\r\n}\r\n.forum-header-owner > h3:last-child{\r\n    font-size: 12px;\r\n    color: black;\r\n    font-weight: 600;\r\n    margin-top: 3px;\r\n}\r\n.forum-header-post-time{\r\n    float: right;\r\n    font-size: .9rem;\r\n    font-weight: 700;\r\n    color: #1e2127;\r\n    transition: all .3s ease-in-out;\r\n}\r\n.forum-content{\r\n    clear: both;\r\n    text-align: justify;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    max-height: 200px;\r\n    overflow: hidden;\r\n    padding: 0px 5px;\r\n    background: #F5F5F5;\r\n    width: 100%;\r\n}\r\n.forum-response-section-header{\r\n    padding: 3px 0px 8px 0px;\r\n    height: 30px;\r\n    margin-top: 1px;\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n    border-top: 1px solid #b9babb;\r\n}\r\n.forum-response-section-header > h4{\r\n    display: inline-block;\r\n    vertical-align: baseline;\r\n}\r\n.forum-response-section-header > div{\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    margin-left: 10px;\r\n}\r\n.forum-response-section-header > div > .forum-response-icon{\r\n    display: inline-block;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    font-size: 19px;\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.forum-response-section-header > div > .forum-response-icon:hover{\r\n    -webkit-animation: pulse 1.7s infinite cubic-bezier(0.66, 0, 0, 1);\r\n    animation: pulse 1.4s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n.message{\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    border: 0px;\r\n    padding: 10px;\r\n    overflow-wrap: break-word;\r\n}\r\n.archivedPosts{\r\n    width: 100% !important;\r\n    padding-left: 8px !important;\r\n    padding-right: 8px !important;\r\n}\r\n@-webkit-keyframes pulse {to {box-shadow: 0 0 0 6px #10a11200;}}\r\n@keyframes pulse {to {box-shadow: 0 0 0 6px #10a11200;}}\r\n.forum-response-icon.fa-smile{\r\n    box-shadow: 0 0 0 0 #10a112b3;\r\n    border: 1px solid #add8ac;\r\n    color: #10a112; \r\n}\r\n.forum-response-icon.fa-frown{\r\n    box-shadow: 0 0 0 0 #e04a4a9e;\r\n    border: 1px solid #e04b4a;\r\n    color: #e04b4a;\r\n}\r\n.forum-response-section-header > span{\r\n    font-weight: 600;\r\n}\r\n.forum-read-more-btn{\r\n    margin-top: -1px;\r\n    margin-right: 2px;\r\n    background-color: #10a1124d !important;\r\n    border-color: #10a1124d !important;\r\n    padding: 2px 10px;\r\n    height: 25px !important;\r\n    font-size: inherit;\r\n    color: white !important;\r\n    font-weight: 550;\r\n}\r\n.forum-read-more-btn:hover,\r\n.forum-read-more-btn:focus,\r\n.forum-read-more-btn:active,\r\n.open > .dropdown-toggle.forum-read-more-btn {\r\n    background-color: #10a112c2 !important;\r\n    border-color: #10a1124d !important;\r\n}\r\n.forum-response-content-wrapper,\r\n.forum-new-comment-wrapper{\r\n    width: 97%;\r\n    display: none;\r\n}\r\n.forum-response-content-wrapper{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    overflow-x: hidden;\r\n    margin-bottom: 20px;\r\n    padding-top: 17px;\r\n}\r\n.new-forum-post-comment{\r\n    clear: both;\r\n    padding: 4px 3px;\r\n}\r\n.top-border{\r\n    border-top: 1px solid #7fca7f96 !important;\r\n    margin: 2px !important;\r\n}\r\n.forum-new-comment-wrapper{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.forum-response{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    border: 0px;\r\n}\r\n.forum-response-header{\r\n    display: flow-root;\r\n    border: 1px solid #aedaad59;\r\n    background-color: #0cc10c59;\r\n}\r\n.forum-response-header-img,\r\n.forum-response-post-time,\r\n.forum-response-header-owner{\r\n    height: 100%;\r\n    padding-top: 5px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n.datePosted{\r\n    margin-left: 10px;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    position: absolute;\r\n    width: 110px;\r\n    border: 3px solid #1214188a;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    background-color: #F5F5F5;\r\n}\r\n.timeline-bar{\r\n    border: 1px solid #aedaad59;\r\n    background-color: #0cc10c59;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 30px;\r\n    position: absolute;\r\n}\r\n.forum-response-post-time{\r\n    padding-top: 6px;\r\n    position: absolute;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: 114px;\r\n    border: 2px solid #1214188a;\r\n    margin-left: 156px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    text-align: center;\r\n    background-color: #F5F5F5;\r\n}\r\n.forum-response-post-time > p{\r\n    font-weight: 800;\r\n    padding: 0px;\r\n}\r\n.forum-response-header-img{\r\n    width: 38px;\r\n    height: 41px;\r\n    padding: 0px;\r\n    margin-left: 5px;\r\n    margin-top: 1px;\r\n}\r\n.forum-response-header-img > img{\r\n    background-color: #4dd04d;\r\n}\r\n.forum-response-header-owner > h3{\r\n    margin-bottom: 0px;\r\n    font-size: inherit;\r\n    color: #1b1e24c2;\r\n    font-weight: 500;\r\n}\r\n.forum-response-header-owner > h3:last-child{\r\n    color: black;\r\n    font-weight: 600;\r\n    margin-top: 4px;\r\n}\r\n.forum-response-content{\r\n    clear: both;\r\n    padding: 4px;\r\n    border: 1px solid #7fca7f96;\r\n    margin-left: 291px;\r\n    margin-bottom: 44px;\r\n}\r\n.readMore{\r\n    height: 100%;\r\n    max-height: unset;\r\n}\r\ntextarea[name=\"comment\"]{\r\n    resize: none;\r\n}\r\nlabel{\r\n    width: 100%;\r\n}\r\nspan > strong{\r\n    color: black;\r\n}\r\n.submit-btn-wrapper{\r\n    text-align: right;\r\n    margin-bottom: 4px;\r\n}\r\n.new-comment-form-group{\r\n    margin-bottom: 4px;\r\n    width: 100%;\r\n}\r\n.new-comment-submit-btn{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    font-size: inherit;\r\n}\r\n.comment-warning{\r\n    color: red !important;\r\n}\r\nbutton[disabled], html input[disabled] {\r\n    cursor: default;\r\n    background-color: #0cc10c30;\r\n    border-color: #0cc10ccc;\r\n}\r\n.forum-archived-header{\r\n    padding-top: 5px;\r\n}\r\n.forum-archived-header > h3{\r\n    margin-left: 6px;\r\n    font-size: 1.3rem;\r\n    margin-bottom: 5px;\r\n}\r\n.table > tbody > tr > td{\r\n    vertical-align: middle;\r\n    text-transform: capitalize;\r\n}\r\n.forum-archived-post-wrapper > div > div{\r\n    height: 100%;\r\n}\r\n.forum-archived-post-wrapper > div > div:last-child{\r\n    display: unset;\r\n}\r\n.forum-archived-post-wrapper > div > div > div:last-child{\r\n    margin-bottom: -18px;\r\n}\r\n.table-hover > tbody > tr:hover{\r\n    background-color: #4dd04d63;\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n    .forum-archived-wrapper{\r\n        display: none;\r\n    }\r\n}\r\n@media only screen and (max-width: 530px){\r\n    .forum-header-title{\r\n        width: 100%;\r\n        line-height: 0px;\r\n    }\r\n    .forum-header-post-time{\r\n        margin-top: -74px;\r\n        line-height: 4px;\r\n    }\r\n    .forum-response-post-time{\r\n        line-height: 4px;\r\n        font-weight: 700;\r\n        padding: 0px;\r\n        margin-top: 18px\r\n    }\r\n}\r\n@media only screen and (max-width: 400px){\r\n    .forum-header-title{\r\n        width: 100%;\r\n        line-height: 0px;\r\n        padding: 6px 0px 0px 0px;\r\n        font-size: 11px;\r\n    }\r\n    .new-comment > h3{\r\n        margin-left: 35px;\r\n    }\r\n}\r\n@media only screen and (max-width: 338px){\r\n    .forum-wrapper{\r\n        margin-bottom: 18px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forums-page/forums-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-up-container\">\n  <ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup>\n</div>\n<div class=\"forum-wrapper\">\n  <!-- Latest posts -->\n  <div class=\"col-md-8 col-sm-8 col-xs-12 animated fadeIn _delay5ms\" *ngIf=\"!showArchive\"> \n    <div *ngFor=\"let post of forums; let i = index;\" class=\"forum-main-section-wrapper\">\n      <div class=\"forum-header-wrapper\">\n        <div class=\"forum-header-owner col-md-3 col-xs-3\">\n          <h3 class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\">{{ post.owner }}</h3>\n        </div>\n        <div class=\"forum-header-title col-md-6 col-xs-12\">\n          <p class=\"animated-forum-element animated fadeInDown _delay{{ i + 1 }}ms\">{{ post.title }}</p>\n        </div>\n        <div class=\"forum-header-post-time col-md-2\">\n          <p class=\"animated-forum-element animated fadeInRight _delay{{ i + 1 }}ms\">{{ post.date }}</p>\n        </div>\n      </div>\n      <div class=\"forum-content _widget-scrollbar _{{ post.forumPostId }}\">\n        <pre class=\"message animated fadeIn _delay{{ i + 1 }}ms\">{{ post.message }}</pre>\n      </div>\n      <div class=\"forum-response-section-header\">\n        <div (click)=\"_readComments(post.forumPostId)\" class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\"><i class=\"far fa-comment-alt forum-response-icon\"></i></div>\n        <span class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\">{{ commentsCount[i] }}</span>\n        <div class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\" (click)=\"_like(i,likesCount[i],post.forumPostId)\"><i class=\"far fa-smile forum-response-icon\"></i></div>\n        <span class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\">{{ likesCount[i] }}</span>\n        <div class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\" (click)=\"_dislike(i,dislikesCount[i],post.forumPostId)\"><i class=\"far fa-frown forum-response-icon\"></i></div>\n        <span class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\">{{ dislikesCount[i] }}</span>\n        <button class=\"btn btn-info forum-read-more-btn pull-right animated-forum-element animated fadeInRight _delay{{ i + 1 }}ms {{ post.forumPostId }}\" (click)=\"_readMore(post.forumPostId)\">{{ readMoreBtn }}</button>\n      </div>    \n      <div class=\"forum-response-content-wrapper {{ post.forumPostId }}\">\n        <div *ngFor=\"let comment of comments;\" class=\"forum-response animated fadeIn _delay3ms\">\n          <div class=\"datePosted\">\n            <p>{{ comment.datePosted }}</p>\n          </div>\n          <!--<div class=\"timeline-bar\"></div>-->\n          <div class=\"forum-response-post-time col-md-2 pull-right\">\n            <p>{{ comment.commentTime }}</p>\n          </div>\n          <div class=\"forum-response-content\">\n            <p>{{ comment.comment }}</p>\n          </div>       \n        </div>\n      </div>\n      <div class=\"forum-new-comment-wrapper new-forum-post-comment {{ post.forumPostId }}\">\n        <div class=\"forum-response-content top-border\">\n          <form [formGroup]=\"commentForm\" (ngSubmit)=\"_submitComment(commentForm.value,post.forumPostId,commentsCount[i],i)\">\n            <div class=\"form-group new-comment-form-group\">\n              <label for=\"comment\">Want to particupate? \n                <span class=\"pull-right\"> \n                  <span *ngIf=\"currentSize != maxLength; else warning\"><strong>{{ currentSize }}</strong></span>\n                  <ng-template #warning><strong class=\"comment-warning\">{{ currentSize }}</strong> </ng-template>/ {{ maxLength }}\n                </span>\n              </label>\n              <textarea placeholder=\"say something!!\" class=\"form-control comment _scrollbar\" maxlength=\"{{ maxLength }}\" formControlName=\"comment\" (ngModelChange)=\"_commentSize(character = $event)\" name=\"comment\" rows=\"3\"></textarea>\n            </div>\n            <div class=\"submit-btn-wrapper\">\n              <button class=\"btn btn-success btn-block _a new-comment-submit-btn\" type=\"submit\" [disabled]=\"!commentForm.valid\">Send</button>\n            </div>\n          </form>\n        </div> \n      </div>\n    </div>\n  </div>\n  <!-- Display an archived post's content -->\n  <div class=\"col-md-12 forum-archived-post-wrapper archivedPosts animated fadeIn _delay5ms\" *ngIf=\"showArchive\">\n    <div class=\"forum-main-section-wrapper\">\n      <div class=\"forum-header-wrapper\">\n        <div class=\"forum-header-owner col-md-3 col-xs-3\">\n          <h3 class=\"animated-forum-element animated fadeIn _delay{{ i + 1 }}ms\">{{ archive.owner }}</h3>\n        </div>        \n        <div class=\"forum-header-title col-md-6\">\n          <p class=\"animated-forum-element animated fadeInDown\">{{ archive.title }}</p>\n        </div>\n        <div class=\"forum-header-post-time col-md-2\">\n          <p class=\"animated-forum-element animated fadeInDown\">{{ archive.time }}</p>\n        </div>\n      </div>\n      <div>\n        <pre class=\"message animated-forum-element animated fadeIn\">{{ archive.message }}</pre>\n      </div>\n      <div class=\"forum-response-section-header\">\n        <div class=\"animated-forum-element animated fadeInDown\"><i class=\"far fa-comment-alt forum-response-icon\"></i></div>\n        <span class=\"animated-forum-element animated fadeInDown\">{{ archive.commentsCount }}</span>\n        <div class=\"animated-forum-element animated fadeInDown\"><i class=\"far fa-smile forum-response-icon\"></i></div>\n        <span class=\"animated-forum-element animated fadeInDown\">{{ archive.likes }}</span>\n        <div class=\"animated-forum-element animated fadeInDown\"><i class=\"far fa-frown forum-response-icon\"></i></div>\n        <span class=\"animated-forum-element animated fadeInDown\">{{ archive.dislikes }}</span>\n      </div>    \n      <div *ngIf=\"archivedComments\" class=\"forum-response-content-wrapper _widget-scrollbar animated-forum-element animated fadeInUp\">\n        <div *ngFor=\"let comment of archivedComments;\" class=\"forum-response\">     \n          <div class=\"datePosted\">\n            <p>{{ comment.datePosted }}</p>\n          </div>\n          <!--<div class=\"timeline-bar\"></div>-->\n          <div class=\"forum-response-post-time col-md-2 pull-right\">\n            <p>{{ comment.commentTime }}</p>\n          </div>\n          <div class=\"forum-response-content\">\n            <p>{{ comment.comment }}</p>\n          </div>       \n        </div>\n      </div>\n    </div>\n  </div>  \n  <!-- Archived Posts list -->\n  <div class=\"col-md-3 col-sm-3 forum-archived-wrapper\" *ngIf=\"!showArchive\">\n    <div class=\"forum-archived-header\">\n      <h3>Archived posts</h3>\n    </div>\n    <div class=\"forum-archived-content\">\n      <table class=\"table table-striped table-hover\">\n        <tbody>\n          <tr *ngFor=\"let post of archivedPosts; let i = index;\" class=\"pointer\" (click)=\"_readArchivedPost(post.id)\">\n            <td class=\"date\">{{ post.date }} 20{{ post.year }}</td>\n            <td>{{ post.title }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/forums-page/forums-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumsPageComponent = (function () {
    /* Archived posts variables */
    function ForumsPageComponent(api) {
        this.api = api;
        this.user_name = null;
        this.user_image = null;
        this.refreshPosts = 0;
        this.forums = null;
        this.archivedPosts = null;
        this.archive = null;
        this.archivedComments = [];
        this.showArchive = false;
        this.currentComment = -1;
        this.currentReadMoreBtn = -1;
        this.readMoreBtn = null;
        this.currentSize = 0;
        this.maxLength = 200;
        this.today = Date.now();
        this.comments = [];
        this.commentsCount = [];
        this.likesCount = [];
        this.dislikesCount = [];
        this.readMoreBtn = 'read more';
        this._fetchPost();
    }
    ForumsPageComponent.prototype.ngOnInit = function () {
        this.commentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            comment: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(this.maxLength)
            ]))
        });
        this._fetchArchivedPosts();
    };
    /* Read archived posts */
    ForumsPageComponent.prototype._readArchivedPost = function (id) {
        var _this = this;
        console.log("");
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".animated-forum-element").hide();
        var Id = parseInt(id) + 1;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "GET",
            url: this.api.getArchivedPostsDetails(id),
            error: (function (err) {
                _this.api.getRequestError();
            }),
            success: (function (data) {
                console.log("Here is the data sent from the api stream::", data);
                if (data['data']) {
                    _this.archive = data['data'];
                    _this.archive.filter(function (post) {
                        post.message = atob(post['message']);
                    });
                    _this.archive = _this.archive[0];
                    _this.showArchive = true;
                    if (data['comments'] && data['comments'][0] != 'none') {
                        console.log("Comments are here::", data['comments']);
                        _this.archivedComments = data['comments'];
                    }
                    else {
                        _this.commentsCount = [];
                        console.log("There are no comments");
                    }
                }
                else {
                    _this.api.getRequestError();
                }
            })
        });
    };
    /* Read all the content for a particular post */
    ForumsPageComponent.prototype._readMore = function (id) {
        /* Reset them all to the default */
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".forum-content").removeClass("readMore");
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".forum-read-more-btn").html("read more");
        if (this.currentReadMoreBtn == id) {
            this.currentReadMoreBtn = -1;
        }
        else {
            console.log("Here is the id supplied::", id);
            __WEBPACK_IMPORTED_MODULE_4_jquery__("._" + id + "").addClass("readMore");
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".forum-read-more-btn." + id + "").html("show less");
            this.currentReadMoreBtn = id;
        }
    };
    /* Fetch comments */
    ForumsPageComponent.prototype._fetchComment = function (id) {
        var _this = this;
        this.comments = [];
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "GET",
            url: this.api.getFetchCommentsEndpoint(id),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                console.log(data);
                if (data['data']) {
                    _this.comments = data['data'];
                }
                else {
                    _this.openPopup("No comments yet.But you can be the first");
                    _this.comments = [];
                }
            })
        });
    };
    /* Display the comments for a particular post */
    ForumsPageComponent.prototype._readComments = function (id) {
        this._fetchComment(id);
        this.currentSize = 0;
        //$(".comment").attr('val',"");
        this.commentForm.setValue({ comment: "" });
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".forum-response-content-wrapper").slideUp(300);
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".forum-new-comment-wrapper").hide(200);
        if (this.currentComment == id) {
            this.currentComment = -1;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__("." + id + "").show(0);
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".forum-new-comment-wrapper." + id + "").show(0); //activate the option for generating a comment.
            this.currentComment = id;
        }
    };
    /* Register a like on a post */
    ForumsPageComponent.prototype._like = function (index, likes, forumPostId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "GET",
            url: this.api.getForumLikesCount(forumPostId, likes),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    _this.likesCount[index] = data['data'];
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Register a Dislike on a post */
    ForumsPageComponent.prototype._dislike = function (index, dislikes, forumPostId) {
        var _this = this;
        console.log("I dislikes this post");
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "GET",
            url: this.api.getForumDislikesCount(forumPostId, dislikes),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    _this.dislikesCount[index] = data['data'];
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Track the number of characters the user has typed */
    ForumsPageComponent.prototype._commentSize = function (comment) {
        this.currentSize = comment.length;
    };
    /* Submit the user's comment */
    ForumsPageComponent.prototype._submitComment = function (formData, id, commentsCount, index) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "POST",
            data: formData,
            url: this.api.getPostCommentsEndpoint(id, commentsCount),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data'] === 'success') {
                    _this.openPopup("You've successfully comment on this post");
                    _this._fetchComment(id);
                    _this._updateCommentsCount(index, id);
                    _this.commentForm.patchValue({
                        comment: ''
                    });
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Update the comments for this post */
    ForumsPageComponent.prototype._updateCommentsCount = function (index, forumPostId) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "GET",
            url: this.api.getForumCommentsCount(forumPostId),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    if (data['data'] != 'empty') {
                        _this.commentsCount[index] = data['data'][0]['commentsCount'];
                    }
                    else {
                        _this.openPopup(data['error']);
                    }
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Fetch the most recent posts */
    ForumsPageComponent.prototype._fetchPost = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "GET",
            url: this.api.getForumPostsEndpoint(),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data'] && data['textFiles']) {
                    _this.forums = data['data'];
                    var textFiles = data['textFiles'].reverse();
                    _this.forums.reverse();
                    _this._empty();
                    var count = 0;
                    _this.forums.filter(function (post) {
                        _this.commentsCount.push(post.commentsCount);
                        _this.likesCount.push(post.likes);
                        _this.dislikesCount.push(post.dislikes);
                        post.message = atob(textFiles[count]['fileText']);
                        count++;
                    });
                }
                else {
                    _this.forums = [];
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Fetch archived posts */
    ForumsPageComponent.prototype._fetchArchivedPosts = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "GET",
            url: this.api.getArchivedPosts(),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data'] != 'empty') {
                    _this.archivedPosts = data['data'].reverse();
                }
                else {
                    _this.archivedPosts = [];
                }
            })
        });
    };
    /* Empty the count variables */
    ForumsPageComponent.prototype._empty = function () {
        this.commentsCount = [];
        this.likesCount = [];
        this.dislikesCount = [];
    };
    /* Pop over */
    ForumsPageComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    /* Handle variables that change */
    ForumsPageComponent.prototype.ngOnChanges = function () {
        if (this.refreshPosts != 0) {
            this._fetchPost();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ForumsPageComponent.prototype, "user_name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ForumsPageComponent.prototype, "user_image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ForumsPageComponent.prototype, "refreshPosts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_popup__["Ng2PopupComponent"])
    ], ForumsPageComponent.prototype, "popup", void 0);
    ForumsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-forums-page',
            template: __webpack_require__("../../../../../src/app/pages/forums-page/forums-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forums-page/forums-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], ForumsPageComponent);
    return ForumsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-wrapper{\r\n    margin: 6px 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n  <fiyps-statistics-block [color]=\"'red'\" [name]=\"'registered groups'\" [count]=\"'50'\"></fiyps-statistics-block>\n  <fiyps-statistics-block [color]=\"'green'\" [name]=\"'concept paper'\" [count]=\"'45'\"></fiyps-statistics-block>\n  <fiyps-statistics-block [color]=\"'yellow'\" [name]=\"'SRS'\" [count]=\"'9'\"></fiyps-statistics-block>\n  <fiyps-statistics-block [color]=\"'black'\" [lastBlock]=\"'lastBlock'\" [name]=\"'reports'\" [count]=\"'0'\"></fiyps-statistics-block>\n  <fiyps-progress-scale [progress]=\"progress\" ></fiyps-progress-scale>\n  <fiyps-footer class=\"_min-footer\"></fiyps-footer> \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._fetch();
    };
    /* Fetch data */
    HomeComponent.prototype._fetch = function () {
        this.progress = [
            {
                'id': 1,
                'group': 'Bse18-1',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 2,
                'group': 'Bse18-2',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 3,
                'group': 'Bse18-3',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 4,
                'group': 'Bse18-4',
                'status': [
                    {
                        'id': 1,
                        'flag': false,
                        'doc': 'concept Paper',
                        'date': ''
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 5,
                'group': 'Bse18-5',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 6,
                'group': 'Bse18-6',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '23/10/17 10:50'
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 7,
                'group': 'Bse18-7',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 14:00'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 8,
                'group': 'Bse18-8',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 9,
                'group': 'Bse18-9',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 3,
                        'flag': true,
                        'doc': 'report',
                        'date': '24/10/17 12:50'
                    },
                ]
            },
            {
                'id': 10,
                'group': 'Bse18-10',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 11,
                'group': 'Bse18-11',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 12,
                'group': 'Bse18-12',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 13,
                'group': 'Bse18-13',
                'status': [
                    {
                        'id': 1,
                        'flag': false,
                        'doc': 'concept Paper',
                        'date': ''
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 14,
                'group': 'Bse18-14',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 15,
                'group': 'Bse18-15',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '23/10/17 04:50'
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 16,
                'group': 'Bse18-16',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 17,
                'group': 'Bse18-17',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 18,
                'group': 'Bse18-18',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '30/10/17 15:50'
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 19,
                'group': 'Bse18-19',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 20,
                'group': 'Bse18-20',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 21,
                'group': 'Bse18-21',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 22,
                'group': 'Bse18-22',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '26/10/17 18:50'
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 23,
                'group': 'Bse18-23',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 24,
                'group': 'Bse18-24',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 25,
                'group': 'Bse18-25',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 26,
                'group': 'Bse18-26',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 27,
                'group': 'Bse18-27',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 28,
                'group': 'Bse18-28',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '27/10/17 11:05'
                    },
                    {
                        'id': 3,
                        'flag': true,
                        'doc': 'report',
                        'date': '05/12/17 07:00'
                    },
                ]
            },
            {
                'id': 29,
                'group': 'Bse18-29',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '20/10/17 01:20'
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 30,
                'group': 'Bse18-30',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 31,
                'group': 'Bse18-31',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 32,
                'group': 'Bse18-32',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 33,
                'group': 'Bse18-33',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 34,
                'group': 'Bse18-34',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 35,
                'group': 'Bse18-35',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': false,
                        'doc': 'SRS',
                        'date': ''
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
            {
                'id': 36,
                'group': 'Bse18-36',
                'status': [
                    {
                        'id': 1,
                        'flag': true,
                        'doc': 'concept Paper',
                        'date': '1/10/17 10:50'
                    },
                    {
                        'id': 2,
                        'flag': true,
                        'doc': 'SRS',
                        'date': '19/10/17 19:45'
                    },
                    {
                        'id': 3,
                        'flag': false,
                        'doc': 'report',
                        'date': ''
                    },
                ]
            },
        ];
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-home-page',
            template: __webpack_require__("../../../../../src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.png")) + ") left top repeat rgba(251, 251, 251, 0.4);\r\n}\r\n.login-container .login-box {\r\n    width: 84%;\r\n    padding-top: 26px;\r\n    height: 100%;\r\n    transition: all .8s ease-in-out;\r\n}\r\n.login-container .login-box .login-body .form-control {\r\n    background: rgba(0, 0, 0, 0.75) !important;\r\n}\r\n.login-container .login-box .login-body {\r\n    background: rgba(0, 0, 0, 0.84) !important;\r\n    margin-bottom: 39px;\r\n}\r\nstrong{\r\n    font-size: 19px;\r\n}\r\n._headings{\r\n    font-weight: 600;\r\n}\r\n.btn-info {\r\n    background-color: #0cc10c6b !important;\r\n    border-color: #0cc10ccc !important;\r\n}\r\n.btn-info:hover{\r\n    background-color: #0cc10ccc !important;\r\n    border-color: #0cc10ccc !important;\r\n}\r\n.form-horizontal {\r\n    background: #f5f5f500 !important;\r\n    height: 100%;\r\n}\r\n.form-group{\r\n    width: 100% !important;;\r\n}\r\n._login-general-info{\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    background-color: rgba(255, 255, 255, 0) !important;\r\n    margin-bottom: 56px;\r\n    height: 89%;\r\n    text-align: justify;\r\n    font-size: 13px;\r\n}\r\n._sm-login-btn{\r\n    display: none;\r\n    position: absolute;\r\n    margin-left: -10px;\r\n    z-index: 1;\r\n    font-size: 13px;\r\n}\r\n._sm-login-btn:hover{\r\n    background-color: #0cc10ccc !important;\r\n    border-color: #0cc10ccc !important;\r\n}\r\n\r\n/* Media queries */\r\n@media only screen and (max-width: 900px){\r\n    .login-container .login-box {\r\n        width: 100%;\r\n    }\r\n}\r\n@media only screen and (max-width: 768px){\r\n    ._login-wrapper{\r\n        display: none;\r\n        width: 100%;\r\n    }\r\n    .login-container .login-box {\r\n        margin-bottom: 57px;\r\n        padding-top: 3px;\r\n    }\r\n    ._login-general-info{\r\n        width: 100%;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n    }\r\n    ._sm-login-btn{\r\n        display: unset;\r\n    }           \r\n}\r\n@media only screen and (max-width: 340px){\r\n    ._login-general-info{\r\n       margin-bottom: 70px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\"> \r\n    <button class=\"btn btn-info _sm-login-btn animated fadeInDown\" (click)=\"_smLogin()\">{{ smBtn }}</button>\r\n    <div class=\"login-box animated fadeIn _delay5ms\">\r\n        <div class=\"login-logo\">\r\n            <div>\r\n                <div class=\"_cocis animated fadeIn _delay10ms\">\r\n                    <div>College Of Computing </div>\r\n                    <div> & </div>\r\n                    <div>Information Sciences </div>\r\n                </div>\r\n                <div class=\"_sm-logo animated fadeInLeft _delay10ms\">COCIS</div>          \r\n                <img src=\"../../../assets/img/muk.png\" class=\"\"/>\r\n                <div class=\"_sm-logo animated fadeInRight _delay10ms\">FIYPS </div>\r\n                <div class=\"_pptrs animated fadeIn _delay10ms\">\r\n                    <div>Final Year Projects</div>\r\n                    <div>system </div>\r\n                    <div class=\"_tracking\"></div>\r\n                </div>                \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 fadeIn _widget-scrollbar _login-general-info\">\r\n                <h5 class=\"_headings\">What is Lorem Ipsum?</h5>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n                </p>\r\n                <h5 class=\"_headings\">Why do we use it?</h5>\r\n                <p>\r\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).                    \r\n                </p>\r\n                <h5 class=\"_headings\">What is Lorem Ipsum?</h5>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n                </p>\r\n                <h5 class=\"_headings\">Why do we use it?</h5>\r\n                <p>\r\n                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).                    \r\n                </p>\r\n            </div>\r\n            <div class=\"col-sm-6 fadeIn _login-wrapper\">\r\n                <div class=\"login-body \">\r\n                    <div class=\"login-title \"><strong>Welcome</strong>, Please login</div>\r\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"_login(loginForm.value)\" class=\"form-horizontal\">\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-12\">\r\n                                <input type=\"text\" class=\"form-control\" formControlName=\"username\" placeholder=\"username / group name\" required/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-12\">\r\n                                <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group wow bounceIn _delay2ms\" *ngIf=\"invalid\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"alert alert-danger\" role=\"alert\">\r\n                                    Invalid email / Password (maximum tries: 3): {{ invalidCount }}\r\n                                    <span *ngIf=\"invalidCount == 1; else elseBlock\">try</span> \r\n                                    <ng-template #elseBlock>tries</ng-template>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group wow fadeInDown _delay2ms\" *ngIf=\"redirect\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"alert alert-danger\" role=\"alert\">\r\n                                    <span id=\"redirect\">Will be redirected to change password</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>          \r\n                        <div class=\"form-group\">\r\n                            <div class=\"col-md-6\">\r\n                                <a routerLink=\"/register\" class=\"btn btn-link btn-block _a\">Register Group</a>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <a routerLink=\"/forgotPassword\" class=\"btn btn-link btn-block _a\">Forgot your password?</a>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <button class=\"btn btn-info btn-block _a\" type=\"submit\" [disabled]=\"!loginForm.valid\">Log In</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <fiyps-footer></fiyps-footer>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/pages/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_popup__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPageComponent = (function () {
    function LoginPageComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.url = null;
        this.invalid = false;
        this.invalidCount = null;
        this.redirect = false;
        this.switch = 'login';
        this.smBtn = 'login';
        this.invalidCount = 0;
        this.redirect = false;
        this.invalid = false;
        this.url = this.api._getLoginEndpoint();
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_5_jquery__(".login-box").show(0);
        });
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("a.mwotil", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2),
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]("mwotil", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(2),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(22)
            ]))
        });
    };
    LoginPageComponent.prototype._smLogin = function () {
        if (this.switch == 'login') {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("._login-general-info").hide();
            __WEBPACK_IMPORTED_MODULE_5_jquery__("._login-wrapper").fadeIn(500);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("._login-general-info").show(500);
            __WEBPACK_IMPORTED_MODULE_5_jquery__("._login-wrapper").hide();
        }
        this.smBtn = this.smBtn == 'login' ? 'General Information' : 'login';
        this.switch = this.switch == 'login' ? 'gen-info' : 'login';
    };
    LoginPageComponent.prototype._login = function (user) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["ajax"]({
            url: this.url,
            type: 'GET',
            data: user,
            error: (function (error) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                console.log(data);
                if (data['token']) {
                    _this.api._setToken(data['token']);
                    _this.api._setUserType(data['user'].userType); //student
                    _this.api._setUserImg(data['user'].pic);
                    _this.api._setUserName(data['user'].username);
                    if (data['user'].userType == 1) {
                        _this.api._setBreadcrumb(1, 'Forum', 'forum');
                    }
                    else if ((data['user'].userType == 2) || (data['user'].userType == 3)) {
                        _this.api._setBreadcrumb(1, 'Home', 'home');
                    }
                    //this.redirect = true;
                    //this.invalid = false;
                    console.log("here");
                    setTimeout(function () {
                        _this.router.navigate(['/fiyps']);
                    }, 1000);
                }
                else if (data['error']) {
                    console.log(data['error']);
                    _this.invalidCount = _this.invalidCount + 1;
                    _this.invalid = true;
                    if (_this.invalidCount == 3) {
                        console.log("maximum try count reached::", _this.invalidCount);
                        _this.redirect = true;
                        setTimeout(function () {
                            _this.router.navigate(['/forgotPassword']);
                        }, 3000);
                    }
                }
            })
        });
    };
    /* Pop over */
    LoginPageComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_6_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ng2_popup__["Ng2PopupComponent"])
    ], LoginPageComponent.prototype, "popup", void 0);
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-login-page',
            template: __webpack_require__("../../../../../src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__service_api_service__["a" /* ApiService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/profile-page/profile-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-wrapper{\r\n    padding: 4px;\r\n    padding-bottom: 0px;\r\n    box-shadow: 0px 1px 1px 0px #272b30;\r\n    margin: 6px 10px;\r\n}\r\n.inner-wrapper{\r\n    background: #ffffff00;\r\n}\r\n.change-pwd-container{\r\n    float: unset;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n}\r\n.change-pwd-container > button{\r\n    margin-bottom: 20px;\r\n    box-shadow: 0px 1px 1px 0px rgba(39, 43, 48, 0.53);\r\n    background-color: rgba(27, 30, 36, 0.89);\r\n    border-color: rgba(27, 30, 36, 0.24);    \r\n}\r\n.change-pwd-container > button:hover,\r\n.change-pwd-container > button:active{\r\n    background-color: rgb(27, 30, 36);\r\n    border-color: rgb(27, 30, 36);    \r\n}\r\n/* Student */\r\n.profile-img{\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n.profile-img > div{\r\n    height: 133px;\r\n}\r\n.profile-img > div > img{\r\n    width: 136px;\r\n    padding: 0px;\r\n}\r\n.browse-img{\r\n    width: 270px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: 126px !important;\r\n    margin-top: 10px;\r\n    display: inline-table;\r\n    transition: all .4s ease-in-out;    \r\n}\r\n.profile-course{\r\n    padding: 0px;\r\n}\r\n.profile-course > h4{\r\n    text-align: left;\r\n    margin-top: 3px;\r\n    padding: 0px;\r\n    font-size: 13px;\r\n}\r\n.profile-course > h4 > span{\r\n    font-size: 1.2rem;\r\n    padding: 2px 0px 0px 10px;\r\n    font-weight: 600;\r\n}\r\n\r\n.incorrect-pwd{\r\n    border-color: #E04B4A;\r\n}\r\n.correct-pwd{\r\n    border-color: #0cc10ccc !important;\r\n}\r\n.valid-tick{\r\n    color: #0cc10ccc;\r\n    border: 2px solid #0cc10ccc;\r\n    padding: 1px 3px;\r\n    font-size: 15px;\r\n    border-radius: 50%;\r\n    margin-left: 10px;\r\n    display: none;\r\n}\r\n.new-pwd{\r\n    margin: 10px 0px;\r\n}\r\n.confirm-pwd{\r\n    margin-left: 3%;\r\n}\r\n.visible{\r\n    visibility: visible !important;\r\n}\r\n.new-pwd-label{\r\n    width: 92px;\r\n}\r\n.old-pwd,\r\n.new-pwd,\r\n.confirm-pwd{\r\n    text-align: center;\r\n    width: 41%;\r\n    display: inline-block;\r\n    margin-bottom: -2px;\r\n}\r\n.new-pwd,\r\n.confirm-pwd{\r\n    margin-bottom: -2px;\r\n}\r\n._sm-course{\r\n    display: none;\r\n}\r\n.labels-group{\r\n    background: #0cc10c6b;\r\n    color: #23252a;\r\n    padding: 8px 0px;\r\n}\r\n.labels-group > div{\r\n    padding: 0px;\r\n}\r\n.field-containers{\r\n    display: inline-block;\r\n    padding: 0px;\r\n}\r\n.hash-label,\r\n.hash-field{\r\n    width: 3%;\r\n}\r\n.hash-field{\r\n    padding-top: 6px;\r\n}\r\n.name-label{\r\n\r\n}\r\n.reg-no-label{\r\n\r\n}\r\n.contact-label{\r\n\r\n}\r\n.email-label{\r\n\r\n}\r\n.name-field{\r\n    width: 89%; \r\n}\r\n.reg-no-field,\r\n.contact-field{\r\n    width: 99%;   \r\n}\r\n.email-field{\r\n    width: 100%;   \r\n}\r\n.name-field,\r\n.reg-no-field,\r\n.contact-field,\r\n.email-field{\r\n    padding: 6px;\r\n    border: 0px;\r\n    border-bottom: 1px solid #d5d5d5; \r\n}\r\ntextarea[name=\"description\"]{\r\n    resize: none;\r\n}\r\n.profile-tbody > tr > td > .form-group > div{\r\n    padding: 0px;\r\n}\r\n/* Supervisor */\r\n.sup.profile-password{\r\n    width: 70%;\r\n    margin-left: auto !important;\r\n    margin-right: auto !important;\r\n    padding-left: 15px;\r\n    transition: all .5s ease-in-out;\r\n    margin-bottom: 20px;\r\n    margin-top: -15px;\r\n}\r\n/* Student table */\r\n.student-table{\r\n    margin-top: 6px;\r\n}\r\n.student-table > thead > tr > th{\r\n    text-align: center;\r\n}\r\n.td-container{\r\n    padding: 3px;\r\n    text-align: right;\r\n    padding-right: 0;\r\n    padding-bottom: 4px;\r\n}\r\n.update-group-sumbit-btn{\r\n    border-width: 1px;\r\n    background-color: rgba(12, 193, 12, 0.8);\r\n    border-color: rgb(255, 255, 255);\r\n    border-top-color: #ffffff;  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profile-page/profile-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-up-container\">\n  <ng2-popup class=\"animated fadeInDown _delay4ms\" #popup></ng2-popup>\n</div>\n<div class=\"profile-wrapper animated fadeIn _delay7ms\">\n  <div class=\"col-sm-12 profile-img\">\n    <div>\n      <!--<img src=\"./assets/img/users/{{ userImg }}\" class=\"img-thumbnail animated fadeIn _delay4ms\" />-->\n      <img src=\"data:image/gif;base64,{{ userImg }}\" class=\"img-thumbnail animated fadeIn _delay4ms\" />\n    </div>\n    <div class=\"browse-img\">\n        <image-upload\n        [max]=\"imgMaxUpload\"\n        [url]=\"url\"\n        [headers]=\"{Authorization: token}\"\n        [maxFileSize]=\"1048576\"\n        [fileTooLargeMessage]=\"'Image too large!'\"\n        [buttonCaption]=\"'Update image'\"\n        [dropBoxMessage]=\"'Drop image here'\"\n        [extensions]=\"['jpg','png','gif','jpeg']\"\n        [class]=\"'customClass'\"      \n        (removed)=\"onRemoved($event)\"\n        (uploadFinished)=\"onUploadFinished($event)\"\n        (uploadStateChanged)=\"onUploadStateChanged($event)\">\n      </image-upload>       \n    </div>\n  </div>  \n  <div class=\"inner-wrapper\" *ngIf=\"userType == '1'\">\n    <div class=\"col-sm-12 profile-course\">\n      <h4 class=\"col-sm-12\">\n        Course:\n        <span class=\"\">{{ course }}</span>\n        <span class=\"_sm-course\">{{ course }}</span>        \n      </h4>\n    </div>\n    <form [formGroup]=\"studentForm\" class=\"form-horizontal\" (submit)=\"_submitGeneralStudentData(studentForm.value)\">\n      <div class=\"form-group project-title\">\n        <label for=\"title\">Project Title\n          <span> \n          <span *ngIf=\"titleSize != maxTitleLength; else titleWarning\"><strong>{{ titleSize }}</strong></span>\n          <ng-template #titleWarning><strong class=\"_warning\">{{ titleSize }}</strong> </ng-template>/ {{ maxTitleLength }}\n          </span>                            \n        </label>\n        <input type=\"text\" class=\"form-control\" maxlength=\"{{ maxTitleLength }}\" formControlName=\"projectTitle\" (ngModelChange)=\"_titleSize(title = $event)\">\n      </div>\n      <div class=\"form-group project-title\">\n        <label for=\"title\">Project Blog\n          <span> \n          <span *ngIf=\"blogUrlLength != maxBlogUrlLength; else blogWarning\"><strong>{{ blogUrlLength }}</strong></span>\n          <ng-template #blogWarning><strong class=\"_warning\">{{ blogUrlLength }}</strong> </ng-template>/ {{ maxBlogUrlLength }}\n          </span>                            \n        </label>\n        <input type=\"text\" class=\"form-control\" maxlength=\"{{ maxBlogUrlLength }}\" formControlName=\"blogUrl\" (ngModelChange)=\"_blogUrlSize(blog = $event)\">\n      </div>\n      <div class=\"form-group project-description\">\n        <label for=\"message\">Project Description \n          <span> \n          <span *ngIf=\"descSize != maxDescLength; else warning\"><strong>{{ descSize }}</strong></span>\n          <ng-template #warning><strong class=\"_warning\">{{ descSize }}</strong> </ng-template>/ {{ maxDescLength }}\n          </span>\n        </label>\n        <textarea class=\"form-control _scrollbar\" maxlength=\"{{ maxDescLength }}\" formControlName=\"projectDescription\" (ngModelChange)=\"_descSize(desc = $event)\" name=\"description\" rows=\"5\"></textarea>\n      </div>\n      <div class=\"form-group sup submit-btn-container\">\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-info btn-block pointer profile-submit\" type=\"submit\">Save</button>\n        </div>\n      </div>          \n    </form> \n    <div class=\"col-sm-12 change-pwd-container\">\n      <button class=\"btn btn-primary\" (click)=\"_showChangePwdContainer()\">\n        {{ changePwdText }}\n      </button>\n    </div>\n    <form *ngIf=\"changePwd\" [formGroup]=\"passwordForm\" class=\"form-horizontal\" (ngSubmit)=\"_updatePwd(passwordForm.value)\">\n      <div class=\"form-group sup profile-password\">\n        <label for=\"oldPassword\">Change Password </label>\n        <div class=\"old-password\" *ngIf=\"!pwdValid\">\n          <input type=\"password\" class=\"form-control col-sm-6 old-pwd animate fadeInRight _delay3ms  incorrect-pwd\" placeholder=\"old\" formControlName=\"oldPassword\" minlength=\"{{ minPwdLength }}\" maxlength=\"{{ maxPwdLength }}\" (ngModelChange)=\"_oldPassword(oldPwd = $event)\">\n          <button class=\"btn btn-primay col-sm-6 validate-btn\" (click)=\"_validatePwd()\" type=\"clear\">Validate</button>\n        </div>\n      </div>    \n      <div *ngIf=\"pwdValid\" class=\"form-group contact _form-group\">\n        <label class=\"col-sm-2\" for=\"new\">New</label>\n        <input type=\"password\" class=\"form-control col-sm-6 pwd animate fadeInUp _delay3ms\" placeholder=\"new\" formControlName=\"newPassword\" minlength=\"{{ minPwdLength }}\" maxlength=\"{{ maxPwdLength }}\">\n      </div>\n      <div *ngIf=\"pwdValid\" class=\"form-group contact _form-group\">\n        <label class=\"col-sm-2\" for=\"new\">Confirm</label>\n        <input type=\"password\" class=\"form-control col-sm-6 pwd animate fadeInUp _delay3ms\" placeholder=\"confirm\" formControlName=\"confirmPassword\" minlength=\"{{ minPwdLength }}\" maxlength=\"{{ maxPwdLength }}\">\n      </div>\n      <div class=\"form-group sup submit-btn-container\" *ngIf=\"pwdValid\">\n          <div class=\"col-md-12\">\n            <button class=\"btn btn-info btn-block pointer profile-submit\" [disabled]=\"!passwordForm.valid\" type=\"submit\">change password</button>\n          </div>\n        </div>            \n    </form>      \n    <form id=\"groupDetailsForm\">\n      <table class=\"table table-striped student-table\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Registration No:</th>\n            <th>Contact</th>\n            <th>Email</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let member of groupMembers; let i = index\" class=\"animated fadeInUp _delay{{ i + 1 }}ms\">\n            <td>{{ i + 1 }}</td>\n            <td><input type=\"text\" name=\"name\" class=\"form-control\" id=\"_name{{ member.id }}\" required [value]=\"member.name\" /></td>\n            <td><input type=\"text\" name=\"regNo\" class=\"form-control\" id=\"_regNo{{ member.id }}\" required [value]=\"member.regNo\" /></td>\n            <td><input type=\"text\" name=\"phoneNo\" class=\"form-control\" id=\"_phoneNo{{ member.id }}\" required [value]=\"member.phoneNo\" /></td>\n            <td><input type=\"email\" name=\"email\" class=\"form-control\" id=\"_email{{ member.id }}\" required [value]=\"member.email\" /></td>\n            <td class=\"td-container\">\n              <button class=\"btn btn-primary update-group-sumbit-btn\" (click)=\"_submitGroupUpdates($event,member.id)\">Save</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>     \n    </form>\n  </div>\n  <div class=\"inner-wrapper\" *ngIf=\"userType == '2' || userType == '3'\">\n    <form [formGroup]=\"supervisorForm\" class=\"form-horizontal\" (ngSubmit)=\"_updateSupervisor(supervisorForm.value)\">\n      <div class=\"form-group name _form-group\">\n        <label class=\"col-sm-2\" for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control col-sm-6 animated fadeInRight _delay2ms\" maxlength=\"{{ maxNameLength }}\" formControlName=\"name\" (ngModelChange)=\"_nameSize(name = $event)\">\n        <span> \n          <span *ngIf=\"nameSize != maxNameLength; else nameWarning\"><strong>{{ nameSize }}</strong></span>\n          <ng-template #nameWarning><strong class=\"_warning\">{{ nameSize }}</strong> </ng-template>/ {{ maxNameLength }}\n        </span>  \n      </div>\n      <div class=\"form-group name _form-group\">\n        <label class=\"col-sm-2\" for=\"username\">username</label>\n        <input type=\"text\" class=\"form-control col-sm-6 animated fadeInRight _delay2ms\" maxlength=\"{{ maxUsernameLength }}\" formControlName=\"username\" (ngModelChange)=\"_username(name = $event)\">\n        <span> \n          <span *ngIf=\"usernameSize != maxUsernameLength; else usernameWarning\"><strong>{{ usernameSize }}</strong></span>\n          <ng-template #usernameWarning><strong class=\"_warning\">{{ usernameSize }}</strong> </ng-template>/ {{ maxUsernameLength }}\n        </span>  \n      </div>\n      <div class=\"form-group email _form-group\">\n        <label class=\"col-sm-2\" for=\"email\">email</label>\n        <input type=\"email\" class=\"form-control col-sm-6 animated fadeInRight _delay3ms\" maxlength=\"{{ maxEmailLength }}\" formControlName=\"email\" (ngModelChange)=\"_emailSize(email = $event)\">\n        <span> \n          <span *ngIf=\"emailSize != maxEmailLength; else emailWarning\"><strong>{{ emailSize }}</strong></span>\n          <ng-template #emailWarning><strong class=\"_warning\">{{ emailSize }}</strong> </ng-template>/ {{ maxEmailLength }}\n        </span>                            \n      </div>\n      <div class=\"form-group course _form-group\">\n        <label class=\"col-sm-2\" for=\"course\">Course</label>\n        <input type=\"text\" class=\"form-control col-sm-6 animated fadeInRight _delay4ms\" maxlength=\"{{ maxCourseLength }}\" formControlName=\"course\" (ngModelChange)=\"_courseSize(course = $event)\">\n        <span> \n          <span *ngIf=\"courseSize != maxCourseLength; else courseWarning\"><strong>{{ courseSize }}</strong></span>\n          <ng-template #courseWarning><strong class=\"_warning\">{{ courseSize }}</strong> </ng-template>/ {{ maxCourseLength }}\n        </span>  \n      </div>\n      <div class=\"form-group course _form-group\">\n        <label class=\"col-sm-2\" for=\"course\">Department</label>\n        <input type=\"text\" class=\"form-control col-sm-6 animated fadeInRight _delay5ms\" maxlength=\"{{ maxDeparmentLength }}\" formControlName=\"department\" (ngModelChange)=\"_departmentSize(dept = $event)\">\n        <span> \n          <span *ngIf=\"departmentSize != maxDeparmentLength; else departmentWarning\"><strong>{{ courseSize }}</strong></span>\n          <ng-template #departmentWarning><strong class=\"_warning\">{{ departmentSize }}</strong> </ng-template>/ {{ maxDeparmentLength }}\n        </span>  \n      </div>\n      <div class=\"form-group contact _form-group\">\n        <label class=\"col-sm-2\" for=\"contact\">phone number</label>\n        <input type=\"text\" class=\"form-control col-sm-6 animated fadeInRight _delay6ms\" maxlength=\"{{ maxContactLength }}\" formControlName=\"contact\" (ngModelChange)=\"_contactSize(contact = $event)\">\n        <span> \n          <span *ngIf=\"contactSize != maxContactLength; else contactWarning\"><strong>{{ contactSize }}</strong></span>\n          <ng-template #contactWarning><strong class=\"_warning\">{{ contactSize }}</strong> </ng-template>/ {{ maxContactLength }}\n        </span>                            \n      </div>\n      <div class=\"form-group sup submit-btn-container\">\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-info btn-block pointer profile-submit\" type=\"submit\" [disabled]=\"!supervisorForm.valid\">Update</button>\n        </div>\n      </div>      \n    </form>   \n    <div class=\"col-sm-12 change-pwd-container\">\n      <button class=\"btn btn-primary\" (click)=\"_showChangePwdContainer()\">\n        {{ changePwdText }}\n      </button>\n    </div>\n    <form *ngIf=\"changePwd\" [formGroup]=\"passwordForm\" class=\"form-horizontal\" (ngSubmit)=\"_updatePwd(passwordForm.value)\">\n      <div class=\"form-group sup profile-password\">\n        <label for=\"oldPassword\">Change Password </label>\n        <div class=\"old-password\" *ngIf=\"!pwdValid\">\n          <input type=\"password\" class=\"form-control col-sm-6 old-pwd animate fadeInRight _delay3ms  incorrect-pwd\" placeholder=\"old\" formControlName=\"oldPassword\" minlength=\"{{ minPwdLength }}\" maxlength=\"{{ maxPwdLength }}\" (ngModelChange)=\"_oldPassword(oldPwd = $event)\">\n          <button class=\"btn btn-primay col-sm-6 validate-btn\" (click)=\"_validatePwd()\" type=\"clear\">Validate</button>\n        </div>\n      </div>    \n      <div *ngIf=\"pwdValid\" class=\"form-group contact _form-group\">\n        <label class=\"col-sm-2\" for=\"new\">New</label>\n        <input type=\"password\" class=\"form-control col-sm-6 pwd animate fadeInUp _delay3ms\" placeholder=\"new\" formControlName=\"newPassword\" minlength=\"{{ minPwdLength }}\" maxlength=\"{{ maxPwdLength }}\">\n      </div>\n      <div *ngIf=\"pwdValid\" class=\"form-group contact _form-group\">\n        <label class=\"col-sm-2\" for=\"new\">Confirm</label>\n        <input type=\"password\" class=\"form-control col-sm-6 pwd animate fadeInUp _delay3ms\" placeholder=\"confirm\" formControlName=\"confirmPassword\" minlength=\"{{ minPwdLength }}\" maxlength=\"{{ maxPwdLength }}\">\n      </div>\n      <div class=\"form-group sup submit-btn-container\" *ngIf=\"pwdValid\">\n          <div class=\"col-md-12\">\n            <button class=\"btn btn-info btn-block pointer profile-submit\" [disabled]=\"!passwordForm.valid\" type=\"submit\">change password</button>\n          </div>\n        </div>            \n    </form>  \n  </div>\n  <fiyps-footer class=\"_min-footer\"></fiyps-footer> \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/profile-page/profile-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup__ = __webpack_require__("../../../../ng2-popup/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePageComponent = (function () {
    function ProfilePageComponent(api, formBuilder, router) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.url = null;
        this.token = null;
        this.imgMaxUpload = 1;
        this.userType = null;
        this.userImg = null;
        this.course = null;
        this.groupMembers = [];
        this.groupDetailsValid = false;
        this.redirect = false;
        this.titleSize = 0;
        this.descSize = 0;
        this.nameSize = 0;
        this.usernameSize = 0;
        this.emailSize = 0;
        this.contactSize = 0;
        this.courseSize = 0;
        this.departmentSize = 0;
        this.blogUrlLength = 0;
        this.maxTitleLength = 100;
        this.maxDescLength = 500;
        this.maxPwdLength = 15;
        this.maxNameLength = 45;
        this.maxUsernameLength = 45;
        this.maxEmailLength = 45;
        this.maxContactLength = 15;
        this.maxCourseLength = 45;
        this.maxDeparmentLength = 45;
        this.maxBlogUrlLength = 100;
        this.minTitleLength = 10;
        this.minDescLength = 500;
        this.minPwdLength = 2;
        this.minNameLength = 10;
        this.minUsernameLength = 2;
        this.minEmailLength = 15;
        this.minContactLength = 10;
        this.minCourseLength = 2;
        this.minDeparmentLength = 4;
        this.minBlogUrlLength = 10;
        this.oldPassword = null;
        this.formFields = null;
        this.changePwdText = "change password ?";
        this.changePwd = false;
        this.pwdValid = false;
        this.onUserImageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"];
        this.url = this.api.getUploadProfileImageEndpoint();
        this.token = this.api._getToken();
        this.userType = this.api._getUserType();
        this.oldPassword = this.api._getUserPwd();
        this.userImg = this.api._getUserImg();
        this.formFields = ['names', 'regNos', 'contacts', 'emails'];
    }
    ProfilePageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".new-pwd").hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".confirm-pwd").hide();
        });
        this._fetchProfileDetails();
        /* Student's form */
        this.studentForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            projectTitle: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("Final Year Projects System", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minTitleLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxTitleLength)
            ])),
            projectDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("Having discovered, with the Survey we conducted that the current system does not enable Supervisors to track and monitor the progress level of their individual Student groups per deliverable being handled till project completion:- We saw the need for a platform to enable Supervisors, Students as well as Coordinators to smoothly overcome all these difficulties among others. By providing functionality that enables", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minDescLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxDescLength)
            ])),
            blogUrl: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("Having discovered, with the Survey we conducted that the current system does not enable Supervisors to track and monitor the progress level of their individual Student groups per deliverable being handled till project completion:- We saw the need for a platform to enable Supervisors, Students as well as Coordinators to smoothly overcome all these difficulties among others. By providing functionality that enables", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minBlogUrlLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxBlogUrlLength)
            ])),
        });
        /* Supervisor's form */
        this.supervisorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minNameLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxNameLength)
            ])),
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minUsernameLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxUsernameLength)
            ])),
            course: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minCourseLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxCourseLength)
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minEmailLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxEmailLength)
            ])),
            contact: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minContactLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxContactLength)
            ])),
            department: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minDeparmentLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxDeparmentLength)
            ])),
        });
        this.passwordForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            oldPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minPwdLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxPwdLength)
            ])),
            newPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minPwdLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxPwdLength)
            ])),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(this.minPwdLength),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(this.maxPwdLength)
            ])),
        });
    };
    /* Track the Title size*/
    ProfilePageComponent.prototype._titleSize = function (title) {
        this.titleSize = title.length;
    };
    /* Track name size*/
    ProfilePageComponent.prototype._nameSize = function (name) {
        this.nameSize = name.length;
    };
    /* Track name size*/
    ProfilePageComponent.prototype._username = function (name) {
        this.usernameSize = name.length;
    };
    /* Track course size*/
    ProfilePageComponent.prototype._courseSize = function (course) {
        this.courseSize = course.length;
    };
    /* Track course size*/
    ProfilePageComponent.prototype._departmentSize = function (dept) {
        this.departmentSize = dept.length;
    };
    /* Track email size*/
    ProfilePageComponent.prototype._emailSize = function (email) {
        this.emailSize = email.length;
    };
    /* Track contact size*/
    ProfilePageComponent.prototype._contactSize = function (contact) {
        this.contactSize = contact.length;
    };
    /* Track the Description size*/
    ProfilePageComponent.prototype._descSize = function (description) {
        this.descSize = description.length;
    };
    /* Track the Description size*/
    ProfilePageComponent.prototype._blogUrlSize = function (url) {
        this.blogUrlLength = url.length;
    };
    /* Show change pwd container */
    ProfilePageComponent.prototype._showChangePwdContainer = function () {
        this.changePwd = !this.changePwd;
        this.changePwdText = this.changePwd == true ? 'Have changed my mine' : 'change password ?';
        if (!this.changePwd) {
            this.pwdValid = false;
        }
    };
    ProfilePageComponent.prototype._validatePwd = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: "GET",
            url: this.api.getValidatePassword(this.oldPassword),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    _this.openPopup(data['data']);
                    _this.pwdValid = true;
                    _this.passwordForm.patchValue({
                        'oldPassword': _this.oldPassword
                    });
                }
                else if (data['error']) {
                    _this.openPopup(data['error']);
                    _this.pwdValid = false;
                }
            })
        });
    };
    /* validate old password */
    ProfilePageComponent.prototype._oldPassword = function (oldPwd) {
        this.oldPassword = oldPwd;
    };
    /* Update the password */
    ProfilePageComponent.prototype._updatePwd = function (data) {
        var _this = this;
        if (data['newPassword'] === data['confirmPassword'] && this.passwordForm.valid) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".pwd").addClass('correct-pwd');
            __WEBPACK_IMPORTED_MODULE_3_jquery__["get"]({
                type: "POST",
                url: this.api.getValidatePassword(data['newPassword']),
                error: (function (err) {
                    _this.openPopup(_this.api.getRequestError());
                }),
                success: (function (data) {
                    console.log("Here is the data sent back", data);
                    if (data['data']) {
                        _this.openPopup("Update was successfull.Please login a fresh");
                    }
                    else {
                        _this.openPopup(data['error']);
                    }
                }),
            });
        }
        else if (data['newPassword'] != data['confirmPassword'] && this.passwordForm.invalid) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(".pwd").removeClass('correct-pwd');
            this.openPopup("Passwords don't match");
        }
    };
    /* Update the profile */
    ProfilePageComponent.prototype._submitForm = function (data) {
        console.log("Supervisor's data");
        console.log(data);
        /*
        $.ajax({
          type: "POST",
          data: data,
          url: this.api.getProfileEndpoint(),
          error: ((err) =>{
            this.openPopup(this.api.getRequestError());
          }),
          success: ((data) =>{
            if (data['data']){
              this.openPopup("Update was successfull.You will be signed out in 2 seconds");
              setTimeout(() =>{
                // Sign out the user
                this.route.navigate['/'];
              },2000);
            }else{
              this.openPopup(data['error']);
            }
          })
        });
        */
    };
    /* Update Supervisor's details */
    ProfilePageComponent.prototype._updateSupervisor = function (data) {
        this.redirect = true;
        this._commitUpdates(data);
    };
    /* Image upload complete */
    ProfilePageComponent.prototype.imageFinishedUploading = function (file) {
        console.log(JSON.stringify(file.serverResponse));
    };
    /* Image removed */
    ProfilePageComponent.prototype.onRemoved = function (file) {
        console.log("image has been removed");
    };
    /* can be used to activate the update btn after the image has been update */
    ProfilePageComponent.prototype.onUploadStateChanged = function (state) {
        console.log(JSON.stringify(state));
    };
    /* Profile image upload complete */
    ProfilePageComponent.prototype.onUploadFinished = function (event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: 'GET',
            url: this.api.getProfileImageEndpoint(),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['img']) {
                    _this.userImg = data['img'];
                    _this.onUserImageChange.emit(_this.userImg);
                }
                else {
                    _this.openPopup(data['error']);
                }
            }),
        });
    };
    /* Populate the data forms */
    ProfilePageComponent.prototype._fetchProfileDetails = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: "GET",
            url: this.api.getProfileEndpoint(),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data'] || (data['groupMembers'] && data['groupDetails'])) {
                    if (_this.userType == '2' || _this.userType == '3') {
                        _this.supervisorForm.patchValue({
                            'name': data['data'][0]['name'],
                            'username': data['data'][0]['username'],
                            'email': data['data'][0]['email'],
                            'contact': data['data'][0]['contact'],
                            'course': data['data'][0]['course'],
                            'department': data['data'][0]['department'],
                        });
                    }
                    else if (_this.userType == '1' && (data['groupMembers'] && data['groupDetails'])) {
                        _this.groupMembers = data['groupMembers'];
                        _this.course = data['groupDetails'][0]['course'];
                        _this.studentForm.patchValue({
                            'projectTitle': data['groupDetails'][0]['projectTitle'],
                            'projectDescription': data['groupDetails'][0]['projectDescription'],
                            'blogUrl': data['groupDetails'][0]['blogUrl']
                        });
                        _this.groupDetailsValid = true;
                    }
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Save group changes */
    ProfilePageComponent.prototype._submitGroupUpdates = function (event, id) {
        event.preventDefault();
        console.log("The id::", id);
        var name = __WEBPACK_IMPORTED_MODULE_3_jquery__('#_name' + id + "").val();
        var regNo = __WEBPACK_IMPORTED_MODULE_3_jquery__('#_regNo' + id + "").val();
        var phoneNo = __WEBPACK_IMPORTED_MODULE_3_jquery__('#_phoneNo' + id + "").val();
        var email = __WEBPACK_IMPORTED_MODULE_3_jquery__('#_email' + id + "").val();
        if ((name == '') || (regNo == '') || (phoneNo == '') || (email == '')) {
            this.openPopup("Please fill in all the fields");
        }
        else {
            var data = { 'id': id, 'name': name, 'regNo': regNo, 'phoneNo': phoneNo, 'email': email };
            console.log("here is the complete object::", data);
            this.redirect = false;
            this._commitUpdates(data);
        }
        console.log("name::", name);
        console.log("regNo::", regNo);
        console.log("phoneNo::", phoneNo);
        console.log("email::", email);
    };
    /* commit the changes to the backend */
    ProfilePageComponent.prototype._commitUpdates = function (data) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: "POST",
            data: data,
            url: this.api.getProfileEndpoint(),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    if (_this.redirect) {
                        _this.openPopup("Update was successfull.You will be signed out in 2 seconds");
                    }
                    else {
                        _this.openPopup("Update was successfull.");
                    }
                    setTimeout(function () {
                        // Sign out the user
                        if (_this.redirect) {
                            _this.router.navigate(['/']);
                        }
                    }, 2000);
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Submit student group general data */
    ProfilePageComponent.prototype._submitGeneralStudentData = function (data) {
        var _this = this;
        console.log("Upload this data::", data);
        __WEBPACK_IMPORTED_MODULE_3_jquery__["ajax"]({
            type: "POST",
            data: data,
            url: this.api.getUpdateStudentGroupDetailsEndpoint(),
            error: (function (err) {
                _this.openPopup(_this.api.getRequestError());
            }),
            success: (function (data) {
                if (data['data']) {
                    if (_this.redirect) {
                        _this.openPopup("Update was successfull.You will be signed out in 2 seconds");
                    }
                    else {
                        _this.openPopup("Update was successfull.");
                    }
                }
                else {
                    _this.openPopup(data['error']);
                }
            })
        });
    };
    /* Pop over */
    ProfilePageComponent.prototype.openPopup = function (msg) {
        this.popup.open(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2MessagePopupComponent"], {
            message: msg,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProfilePageComponent.prototype, "onUserImageChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_popup__["Ng2PopupComponent"])
    ], ProfilePageComponent.prototype, "popup", void 0);
    ProfilePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-profile-page',
            template: __webpack_require__("../../../../../src/app/pages/profile-page/profile-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/profile-page/profile-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-container {\r\n    float: left;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    background: url(" + escape(__webpack_require__("../../../../../src/assets/img/bg.png")) + ") left top repeat rgba(251, 251, 251, 0.4);\r\n}\r\n.register-container .register-box {\r\n    padding-top: 26px;\r\n    padding-bottom: 57px;\r\n        display: flow-root;\r\n}\r\n.register-logo{\r\n    cursor: pointer;\r\n}\r\n.register-container .register-box .register-logo {\r\n    width: 100%;\r\n    height: 50px;\r\n    margin-bottom: 47px;\r\n    text-align: center;\r\n}\r\n.register-title{\r\n    text-align: center;\r\n}\r\n.register-title > strong{\r\n    font-weight: 600;\r\n    font-size: 1.3rem;\r\n}\r\n.register-body{\r\n    background-color: white;\r\n    box-shadow: 0px 1px 3px -1px black;\r\n    display: flow-root;\r\n}\r\n._labelsGroup{\r\n    background: rgba(12, 193, 12, 0.42);\r\n    color: #23252a;\r\n    vertical-align: inherit;\r\n    text-transform: capitalize;\r\n    font-size: 12px;\r\n    padding: 8px;\r\n    font-weight: bold;\r\n}\r\n.btn-info {\r\n    background-color: rgba(12, 193, 12, 0.42) !important;;\r\n    border-color: #0cc10ccc !important;;\r\n    color: black;\r\n    font-size: 13px;\r\n}\r\n.btn-info:hover {\r\n    background-color: #0cc10ccc !important;;\r\n    border-color: #0cc10ccc !important;;\r\n\r\n}\r\n.login-logo > div {\r\n    padding-left:23px;\r\n}\r\n.home-link{\r\n    float: left;\r\n    color: #198c19;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n    transition: all .9s ease-in-out;\r\n    font-size: 13px;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    border: 2px;\r\n    border-bottom: 2px solid rgba(255, 0, 0, 0.35);\r\n}\r\n.home-link:hover{\r\n    border-bottom: 2px solid red;\r\n}\r\n.register-logo > div{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-radius: 2px;\r\n    padding: 0px 5px 4px 5px;\r\n    transition: all 0.3s ease-in-out;\r\n    color: green;\r\n}\r\n.register-logo > div > img{\r\n    width: 82px;\r\n    vertical-align: text-bottom;\r\n}\r\n._logo-name-container{\r\n    display: inline-block;\r\n}\r\n._logo-name-container > div{\r\n    font-size: 1.7rem;\r\n    text-align: left;\r\n    line-height: 24px;\r\n    text-transform: capitalize;\r\n    margin-left: 11px;\r\n}\r\n._course-select-container{\r\n    margin: 0px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n    width:  100%;\r\n}\r\n.step-control-btns{\r\n    padding: 0px;\r\n    text-align: center;\r\n    margin-bottom: 4px;\r\n}\r\n.step-control-btns > button{\r\n\r\n}\r\n.disable-step{\r\n    background-color: rgba(0, 0, 0, 0.27) !important;\r\n    border-color: rgba(0, 0, 0, 0) !important;\r\n}\r\n.activate-step{\r\n    background-color: #3ebb2f !important;\r\n    border-color: #3ebb2f !important;\r\n}\r\n.form-horizontal .form-group {\r\n    /*width: 100% !important;*/\r\n    vertical-align: bottom;\r\n}\r\n.form-control {\r\n    background: #f9f9f9 !important;\r\n    border: 1px solid #c3c3c3 !important;;\r\n    font-size: inherit !important;\r\n}\r\n.form-group {\r\n    margin-bottom: 6px;\r\n    width: 25%;\r\n    display: inline-block;\r\n}\r\n.form-group > div {\r\n    padding: 0px;\r\n    margin-top: 6px;\r\n}\r\n.names-form-group,\r\n._Input,\r\n._withDelBtn{\r\n    padding: 0px;\r\n}\r\n.form-group > div{\r\n    padding: 0px;\r\n}\r\n._course-label{\r\n    margin-left: auto;\r\n    display: inline-block;\r\n    padding: 5px 6px;\r\n    font-size: 13px;\r\n}\r\n._course-select{\r\n    display: inline-block;\r\n    width: 211px;\r\n}\r\n._register-btn-container{\r\n    width: 114px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.register-box > .row{\r\n    transition: all .6s ease-in-out;\r\n    margin-top: 20px;\r\n}\r\n._labels {\r\n    text-align: center;\r\n}\r\nlabel > span {\r\n    margin-left: 0px;\r\n}\r\n.hash-field{\r\n    margin-left: -18px;\r\n}\r\n.name-field{\r\n    width: 83%;\r\n    margin-bottom: 6px;\r\n}\r\n.regNo-field{\r\n    width: 99%;\r\n}\r\n.phoneNo-field{\r\n    width: 99%;\r\n}\r\n._withDelBtn{\r\n    width: 23%;\r\n}\r\n.email-field{\r\n    width: 83%;\r\n    margin-bottom: 6px;\r\n}\r\n.control-btn-form-group{\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    width: 100%;\r\n}\r\n.submit{\r\n    margin-top: 6px;\r\n}\r\n.btn {\r\n    transition: all 300ms ease-in-out;\r\n}\r\n.btn-success {\r\n    background-color: #9ae3a4 !important;\r\n    border-color: #9ae3a4 !important;\r\n}\r\n.btn-success:hover, \r\n.btn-success:focus, \r\n.btn-success:active, \r\n.btn-success.active, .open > \r\n.dropdown-toggle.btn-success {\r\n    background-color: #3ebb2f !important; /* #99e599;*/\r\n    border-color: #0cc10c12 !important;\r\n}\r\n.add{\r\n    width: 36px;\r\n    height: 36px;\r\n    padding: 0px;\r\n    border-radius: 50%;\r\n    box-shadow: 0px 2px 2px 1px #2f2f2fa8;\r\n}\r\n._delDiv{\r\n    padding-left: 7px;\r\n}\r\n._removeBtn{\r\n\r\n}\r\n\r\n.wizard .anchor li a._first:before,\r\n.wizard .anchor li a._second:before {\r\n    background: #3ebb2f;\r\n}\r\n\r\n.wizard .anchor li a._first:after,\r\n.wizard .anchor li a._second:after {\r\n    border: 3px solid #3ebb2f;\r\n    color: #DDD;\r\n}\r\n\r\n\r\n@media only screen and (min-width: 1230px){\r\n    .register-box > .row{\r\n        padding: 0px 238px;\r\n    }\r\n}\r\n@media only screen and (min-width: 1061px){\r\n    .register-box > .row{\r\n        padding: 0px 208px;\r\n    }\r\n}\r\n@media only screen and (max-width: 1060px){\r\n    .register-box > .row{\r\n        padding: 0px 111px;\r\n    }\r\n}\r\n@media only screen and (max-width: 900px){\r\n    .register-box > .row{\r\n        padding: 0px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\"> \n    <div class=\"register-box animated fadeIn _delay8ms\">\n        <div class=\"login-logo\">\n          <div routerLink=\"/\">\n            <div class=\"_cocis animated fadeIn _delay10ms\">\n              <div>College Of Computing </div>\n              <div> & </div>\n              <div>Information Sciences </div>\n            </div>\n            <div class=\"_sm-logo animated fadeInLeft _delay10ms\">COCIS</div>          \n            <img src=\"../../../assets/img/muk.png\" class=\"\"/>\n            <div class=\"_sm-logo animated fadeInRight _delay10ms\">FIYPS </div>\n            <div class=\"_pptrs animated fadeIn _delay10ms\">\n              <div>Final Year Projects</div>\n              <div>system </div>\n              <div class=\"_tracking\"></div>\n            </div>                \n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12 \">\n                <div class=\"register-body\">\n                    <div class=\"register-title \">\n                      <a routerLink=\"/\" class=\"home-link btn btn-primary\">return home</a>\n                      <strong>Register Group Members</strong>\n                    </div><!--\n                    <form [formGroup]=\"registrationForm\" (ngSubmit)=\"_login(registrationForm)\" class=\"form-horizontal\">\n                        <div class=\"form-group col-sm-12 _course-select-container\">\n                          <div class=\"_course-label\">\n                              <span class=\"_caret\">*</span> Course\n                          </div>\n                          <div class=\"_course-select\">\n                              <select value=\"select course\" class=\"form-control\">\n                                <option>BSE</option>\n                                <option>BIT</option>\n                                <option>BCS</option>\n                              </select>\n                          </div>\n                        </div>\n                        <table class=\"table table-striped\">\n                          <thead>\n                            <tr>\n                              <th>#</th>\n                              <th>Name</th>\n                              <th>Registration No</th>\n                              <th>Phone No</th>\n                              <th>Email</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td><span class=\"_caret\">*</span>1</td>\n                              <td>\n                                <div class=\"form-group\">\n                                  <div class=\"col-md-12\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" required/>\n                                  </div>\n                                </div>                                \n                              </td>\n                              <td>\n                                <div class=\"form-group\">\n                                  <div class=\"col-md-12\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"registration number\" required/>\n                                  </div>\n                                </div>                                \n                              </td>\n                              <td>\n                                <div class=\"form-group\">\n                                  <div class=\"col-md-12\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"phone number\" required/>\n                                  </div>\n                                </div>                                \n                              </td>\n                              <td>\n                                <div class=\"form-group\">\n                                  <div class=\"col-md-12\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"email\" required/>\n                                  </div>\n                                </div>                                \n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                        <div class=\"form-group animated bounceIn _delay2ms\" *ngIf=\"invalid\">\n                            <div class=\"col-md-12\">\n                                <div class=\"alert alert-danger\" role=\"alert\">\n                                    Invalid email / Password (maximum tries: 3): {{ invalidCount }}\n                                    <span *ngIf=\"invalidCount == 1; else elseBlock\">try</span> \n                                    <ng-template #elseBlock>tries</ng-template>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group animated fadeInDown _delay2ms\" *ngIf=\"redirect\">\n                            <div class=\"col-md-12\">\n                                <div class=\"alert alert-danger\" role=\"alert\">\n                                    <span id=\"redirect\">Will be redirected to change password</span>\n                                </div>\n                            </div>\n                        </div>          \n                        <div class=\"form-group\">\n                          <div class=\"_register-btn-container\">\n                              <button class=\"btn btn-info btn-block _a\" type=\"submit\" [disabled]=\"!registrationForm.valid\">Submit</button>\n                          </div>\n                        </div>\n                    </form>-->\n                    <!-- STATUS WIZARD -->\n                    <div class=\"block\">\n                      <div class=\"wizard\">\n                        <ul class=\"steps_2 anchor\">\n                          <li>\n                            <a class=\"pointer\" [ngClass]=\"{'_first': stepOne}\">\n                              <span class=\"stepNumber\">1</span>\n                              <span class=\"stepDesc\">Step 1<br /><small>Select your course</small></span>\n                            </a>\n                          </li>\n                          <li>\n                            <a class=\"pointer _second\" [ngClass]=\"{'_second': complete}\">\n                              <span class=\"stepNumber\">2</span>\n                              <span class=\"stepDesc\">Step 2<br /><small>Fill in group details</small></span>\n                            </a>\n                          </li>\n                        </ul>                        \n                      </div>\n                    </div>      \n                    <!-- END STATUS WIZARD -->                    \n                    <!-- START SELECT COURSE  -->                                 \n                    <div *ngIf=\"!stepOne\" class=\"col-sm-12 _course-select-container\">\n                      <div class=\"_course-label\">\n                        <span class=\"_caret\">*</span> Course\n                      </div>\n                      <div class=\"_course-select\">\n                        <select value=\"select course\" [(ngModel)]=\"course\" class=\"form-control\">\n                          <option>BSE</option>\n                          <option>BIT</option>\n                          <option>BCS</option>\n                        </select>\n                      </div>\n                    </div>                    \n                    <!-- END SELECT COURSE  -->                                 \n                    <!-- START REGISTRATION FORM -->\n                    <form *ngIf=\"stepOne\" [formGroup]=\"registrationForm\" class=\"form-horizontal\" (ngSubmit)=\"_submit(registrationForm)\">                    \n                      <div class=\"col-lg-12\">\n                        <p class=\"instructions\">\n                          Create a group with a minimum of <span> 1 </span> member and a maximum of <span>{{ maxGroupMembers }}</span> members.\n                        </p>\n                      </div>\n                      <div class=\"col-lg-12 _labelsGroup\">\n                        <div class=\"col-xs-3 _labels\">\n                          <span class=\"hash-field col-xs-2\">#</span>\n                          <span class=\"_nameLabel col-xs-10\">\n                            Name\n                          </span>\n                        </div>\n                        <div class=\"col-xs-3 _labels\">\n                          registration no\n                        </div>\n                        <div class=\"col-xs-3 _labels\">\n                          phone no\n                        </div>\n                        <div class=\"col-xs-3 _labels\">\n                          email\n                        </div>\n                      </div>\n                      <div formArrayName=\"names\" class=\"col-xs-3 _withSize form-group names-form-group\">\n                        <div *ngFor=\"let nameControl of registrationForm.controls.names.controls; let i=index;\" class=\"animated fadeInDown _delay3ms\">\n                          <label class=\"hash-value col-xs-2 animated fadeInDown _delay3ms\"><span class=\"_caret\">*</span>{{ i + 1 }}</label>\n                          <input type=\"text\" name=\"name[{{nameId}}]\" class=\"col-xs-10 form-control name-field animated fadeInDown _delay3ms\" [formControlName]=\"i\">\n                        </div>                                            \n                      </div>\n                      <div formArrayName=\"regNos\" class=\"col-xs-3 _Input form-group\">\n                        <div *ngFor=\"let regNoControl of registrationForm.controls.regNos.controls; let i=index;\" class=\"animated fadeInDown _delay3ms\">\n                          <input type=\"text\" name=\"regNo[{{regNoId}}]\" [formControlName]=\"i\" class=\"form-control regNo-field\">\n                        </div>\n                      </div>\n                      <div formArrayName=\"phoneNos\" class=\"col-xs-3 _Input form-group\">\n                        <div *ngFor=\"let phoneNoControl of registrationForm.controls.phoneNos.controls; let i=index;\" class=\"animated fadeInDown _delay3ms\">\n                          <input type=\"text\" name=\"phoneNo[{{phoneNoId}}]\" [formControlName]=\"i\" class=\"form-control phoneNo-field\">\n                        </div>\n                      </div>\n                      <div formArrayName=\"emails\" class=\"col-xs-3 _withDelBtn form-group\">\n                        <div *ngFor=\"let emailControl of registrationForm.controls.emails.controls; let i=index;\" class=\"animated fadeInDown _delay3ms\">\n                          <input type=\"text\" name=\"email[{{emailId}}]\" class=\"col-xs-10 form-control email-field animated fadeInDown _delay3ms\" [formControlName]=\"i\">\n                          <div class=\"_delDiv col-xs-2\">\n                            <button class=\"btn btn-danger _removeBtn animated fadeInDown _delay3ms\" type=\"button\" (click)=\"_remove(i)\"><i class=\"fa fa-times\"></i></button>\n                          </div>\n                        </div>\n                      </div> \n                      <div class=\"form-group control-btn-form-group\">\n                        <button type=\"button\" class=\"animated fadeInLeft _delay3ms btn btn-success _register-btn-container add col-lg-1\" *ngIf=\"groupMembers < maxGroupMembers\" (click)=\"_add()\"><i class=\"fa fa-plus\"></i> </button>\n                        <button type=\"submit\" class=\"animated fadeInRight _delay3ms btn btn-info btn-block submit _register-btn-container pointer col-lg-2 pull-right _save\" [disabled]=\"!registrationForm.valid\">Save</button> \n                      </div>\n                    </form> \n                    <!-- END REGISTRATION FORM -->\n                    <div class=\"col-sm-12 step-control-btns\">\n                      <button class=\"btn btn-success\" [disabled]=\"!stepOne\" [ngClass]=\"{'disable-step': stepOne == false && course == null, 'activate-step': stepOne == true && course != null}\" (click)=\"_previous()\">Previous</button>\n                      <button class=\"btn btn-success\" [disabled]=\"(stepOne) || (stepOne == false && course == null)\" [ngClass]=\"{'disable-step': stepOne == true && course != null, 'activate-step': stepOne == false && course != null }\" (click)=\"_next()\">Next</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <fiyps-footer></fiyps-footer>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/pages/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPageComponent = (function () {
    function RegisterPageComponent(http, router, api) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.invalid = false;
        this.invalidCount = null;
        this.redirect = false;
        this.course = null;
        this.apiEndPoint = "/groupRegistration";
        this.status = null;
        this.stepOne = false;
        this.complete = false;
        this.groupMembers = 1;
        this.maxGroupMembers = 4;
        this.formElements = ['names', 'regNos', 'phoneNos', 'emails'];
        this.invalidCount = 0;
        this.redirect = false;
        this.invalid = false;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".register-box").show(0);
        });
        /* Form builder */
        this.registrationForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            'names': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormArray"]([new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(45),
                ]))]),
            'regNos': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormArray"]([new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(16),
                ]))]),
            'phoneNos': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormArray"]([new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(16),
                ]))]),
            'emails': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormArray"]([new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(45)
                ]))])
        });
    };
    /* Capture the selected course*/
    RegisterPageComponent.prototype._selectedCourse = function (course) {
        this.course = course;
        console.log("Selected course: " + this.course);
    };
    /* Generates a new form input row ...row[name,regNo,phoneNo,email] */
    RegisterPageComponent.prototype._add = function () {
        if (this.groupMembers < this.maxGroupMembers) {
            var elements = this.formElements;
            var counter = 0;
            for (counter; counter < elements.length; counter++) {
                this.registrationForm.get(elements[counter]).push(new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''));
            }
            this.groupMembers++;
        }
    };
    /* Deletes a form input row */
    RegisterPageComponent.prototype._remove = function (i) {
        this.groupMembers--;
        var elements = this.formElements;
        var counter = 0;
        for (counter; counter < elements.length; counter++) {
            this.registrationForm.get(elements[counter]).removeAt(i);
        }
    };
    /* Commit to the database */
    RegisterPageComponent.prototype._submit = function (registrationForm) {
        var _this = this;
        var size = registrationForm.value[this.formElements[0]].length;
        var elementsNum = this.formElements.length;
        var data = {};
        var counter = 0;
        for (counter; counter < elementsNum; counter++) {
            var innerCounter = 0;
            var element = '';
            for (innerCounter; innerCounter < size; innerCounter++) {
                element = element + registrationForm.value[this.formElements[counter]][innerCounter] + ":";
            }
            data[this.formElements[counter]] = element;
        }
        data['size'] = size;
        data['course'] = this.course;
        console.log(data);
        __WEBPACK_IMPORTED_MODULE_4_jquery__["ajax"]({
            type: "POST",
            url: this.api._getApiUrl() + this.apiEndPoint,
            data: data,
        }).done(function (data) {
            if (data.ok) {
                _this.status = data.ok;
                console.log(_this.status);
                _this.complete = true;
                //$(alertId).html("successful");
            }
            else {
                _this.status = data.error;
                console.log(_this.status);
                //$(alertId).html("Server Error. Please contact our Maintenance Team: kindsolutionsltd@gmail.com ");
            }
        });
    };
    RegisterPageComponent.prototype._unSetAlert = function (alertName, alertId) {
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(alertId).html("Processing Request");
        }, 3000);
    };
    /* Go to the previous step */
    RegisterPageComponent.prototype._previous = function () {
        console.log("Move back to the previous step");
        if (this.course != null && this.stepOne) {
            console.log("student has picked a course");
            this.stepOne = false;
        }
    };
    /* Go to the next step */
    RegisterPageComponent.prototype._next = function () {
        console.log("Move to the next step");
        console.log("Course selected: ", this.course);
        if (this.course != null) {
            this.stepOne = true;
            console.log("Both flags have been set");
        }
    };
    RegisterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-register-page',
            template: __webpack_require__("../../../../../src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_5__service_api_service__["a" /* ApiService */]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/reports-page/reports-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/reports-page/reports-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 groupName _widget-scrollbar\" *ngIf=\"userType == '2' || userType == '3'\">\n      <fyps-supervision-groups (selectedGroup)=\"receiveSelectedGroup($event)\"></fyps-supervision-groups>\n    </div>\n    <div [ngClass]=\"{'col-sm-12': userType == '1','col-sm-9': userType == '2' || userType == '3'}\" class=\"no-right-padding\">\n      <fiyps-uploaded-files [refreshUploadsTableFiles]=\"refreshUploadsTableFiles\" [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'4'\" (selectedFile)=\"onSelectedFile($event)\" [userType]=\"userType\"></fiyps-uploaded-files>\n    </div>\n  </div>\n  <fiyps-document-review (refreshUploadsTable)=\"refreshFilesTable($event)\" [deliverableTypeId]=\"'4'\" [selectedFileId]=\"selectedFileId\" [userType]=\"userType\"></fiyps-document-review>\n  <fiyps-chat [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'4'\" [userType]=\"userType\"></fiyps-chat>\n  <fiyps-all-documents \n    [projects]=\"projects\" \n    [userType]=\"userType\"\n    (onViewGroup)=\"_viewGroup($event)\"\n    (onChat)=\"_chat($event)\"\n    (onHistory)=\"_history($event)\"\n    ></fiyps-all-documents>\n  <fiyps-footer class=\"_min-footer\"></fiyps-footer>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/reports-page/reports-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsPageComponent = (function () {
    function ReportsPageComponent(api) {
        this.api = api;
        this.userType = null;
        this.selectedFileId = null;
        this.groupDetails = null;
        this.refreshUploadsTableFiles = 0;
        this.userType = this.api._getUserType();
    }
    ReportsPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".page-content").addClass("fit-content");
        this._fetch();
    };
    /* Fetch data */
    ReportsPageComponent.prototype._fetch = function () {
        this.projects = [
            {
                'id': 1,
                'group_name': 'BSE18-2',
                'title': 'MUK guide',
                'supervisor': 'David Bamutura',
                'supervisor_img': 'user6.jpg',
                'department': 'Department of Networks',
                'submissionTime': '01/10/17 12:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Muhatsi Shaffic'.toLowerCase(),
                        'img': 'user.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'Remo Samuel'.toLowerCase(),
                        'img': 'user4.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'Paul Odur Gerald'.toLowerCase(),
                        'img': 'user5.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'Okurut Jonathan'.toLowerCase(),
                        'img': 'user7.jpg'
                    },
                ],
            },
            {
                'id': 2,
                'group_name': 'BSE18-3',
                'title': 'customer ordering and billing system',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '02/10/17 12:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Othieno John'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Bonyo Joseph'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Sitati Ben'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Kiberu Frank'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 3,
                'group_name': 'BSE18-4',
                'title': 'Electronic Tollbooth monitoring system: A case study of KCCA',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 02:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Mugabira Anthony'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kisakye Daniel'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Kizza Peter'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Nsubuga Ronald'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 4,
                'group_name': 'BSE18-6',
                'title': 'A centralized solid waste managements system: a case study of NOREMA Services Limited',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 05:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Iga Kogongo edward',
                    },
                    {
                        'id': 2,
                        'name': 'mugeere paul',
                    },
                    {
                        'id': 3,
                        'name': 'opio solomon',
                    },
                    {
                        'id': 4,
                        'name': 'lubwama enock',
                    },
                ]
            },
            {
                'id': 5,
                'group_name': 'BSE18-7',
                'title': 'Awesome SMS Gateway System',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 05:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Katusiime Lisa',
                    },
                    {
                        'id': 2,
                        'name': 'Mugume Davies Arthur',
                    },
                    {
                        'id': 3,
                        'name': 'Emmanuel Okiria',
                    },
                    {
                        'id': 4,
                        'name': '	Omiat Isaac',
                    },
                ]
            },
            {
                'id': 6,
                'group_name': 'BSE18-8',
                'title': 'An embedded system for a smart poultry farm',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 05:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bbosa Ronald',
                    },
                    {
                        'id': 2,
                        'name': 'Semujju Stuart Dereck',
                    },
                    {
                        'id': 3,
                        'name': 'Matano Ali',
                    },
                    {
                        'id': 4,
                        'name': 'Kimbowa Charles',
                    },
                ]
            },
            {
                'id': 7,
                'group_name': 'BSE18-9',
                'title': 'Milk market predictor',
                'supervisor': 'Steven Odongo',
                'submissionTime': '02/10/17 05:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'BOGERE HUDSON'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NDUNGUTSE PAUL'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'TUMUHAIRWE DEUS'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 8,
                'group_name': 'BSE18-10',
                'title': 'Firefox voice plugin',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 03:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Orach John Kevin',
                    },
                    {
                        'id': 2,
                        'name': 'Kigozi Moses',
                    },
                    {
                        'id': 3,
                        'name': 'Batte Moses',
                    },
                    {
                        'id': 4,
                        'name': 'Kato Paul',
                    },
                ]
            },
            {
                'id': 9,
                'group_name': 'BSE18-11',
                'title': 'Car SMS Security System',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:00',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABWIRE SANDRA REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSEBBUGGA DAVID'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'EBUKALI DAVID'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAAYA ABRAHAM'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 10,
                'group_name': 'BSE18-12',
                'title': 'Home automation and security system',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:30',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'KASULE JOSHUA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KABOGGOZA STEPHEN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'ATUHAIRE MERCY'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NUWAMANYA ALEX'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 11,
                'group_name': 'BSE18-13',
                'title': 'Crop disease surveillance system (CDSS)',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '02/10/17 09:30',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'ARINAITWE ADAM'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KAHANGA LENIN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WANYOTO DENIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'MUDDE ENOCK'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 12,
                'group_name': 'BSE18-14',
                'title': 'Mobile phone language translator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 10:30',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'OKIDI DENISH'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSESANGA SHAFIK'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SEGAWA CHRISTOPHER'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OCHIENG JOHN BAPTIST'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 13,
                'group_name': 'BSE18-15',
                'title': 'Vision mobile news App',
                'supervisor': 'David Bamutura',
                'submissionTime': '03/10/17 11:30',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bazzekuketta Timothy',
                    },
                    {
                        'id': 2,
                        'name': 'Namazzi Lornalex Zaake',
                    },
                    {
                        'id': 3,
                        'name': 'Ntege Edward',
                    },
                    {
                        'id': 4,
                        'name': 'Muwanga Mohammed',
                    },
                ]
            },
            {
                'id': 14,
                'group_name': 'BSE18-16',
                'title': 'Regional disease outbreak indicator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:35',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Viola Bazanye Namuganyi',
                    },
                    {
                        'id': 2,
                        'name': 'Moses Gasana',
                    },
                    {
                        'id': 3,
                        'name': 'Martha Lukabwe',
                    },
                    {
                        'id': 4,
                        'name': 'Morine Amutorine',
                    },
                ]
            },
            {
                'id': 15,
                'group_name': 'BSE18-17',
                'title': 'Troubleshooting by example application (TBEA)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:37',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kiplimo k Peter',
                    },
                    {
                        'id': 2,
                        'name': 'Wamanga Isaac',
                    },
                    {
                        'id': 3,
                        'name': 'Kabali Shafique',
                    },
                    {
                        'id': 4,
                        'name': 'Asia Rogers',
                    },
                ]
            },
            {
                'id': 16,
                'group_name': 'BSE18-18',
                'title': 'Mobile Traffic Monitoring System',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '03/10/17 11:38',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'ASINGWIRE CUTHBERT'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NANSAMBU ERNEST'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SSEBANYIIGA FRANCIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OPIO ISAAC RONALD'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 17,
                'group_name': 'BSE18-19',
                'title': 'Trade and logistics management system for exporters and importers and freight forwarding companies',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:39',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kawuma Patrick',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Liz Mirembe',
                    },
                    {
                        'id': 3,
                        'name': 'Abaho Micheal',
                    },
                    {
                        'id': 4,
                        'name': 'Namugaanyi Emily',
                    },
                ]
            },
            {
                'id': 18,
                'group_name': 'BSE18-20',
                'title': 'Farmer-aid vending machine',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 11:40',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Batte Derick',
                    },
                    {
                        'id': 2,
                        'name': 'Henry Tebajjukira',
                    },
                    {
                        'id': 3,
                        'name': 'Nanjekye Joannah',
                    },
                    {
                        'id': 4,
                        'name': 'Ronald Kasujja',
                    },
                ]
            },
            {
                'id': 19,
                'group_name': 'BSE18-21',
                'title': 'Automobile navigation System (to be rephrased)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:41',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'BYAMUKAMA TADEO'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KALEEBI LINDAH REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WALUGEMBE EVEREST'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAKABANDA SAMALIE'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 20,
                'group_name': 'BSE18-22',
                'title': 'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:42',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kakande Joshwa',
                    },
                    {
                        'id': 2,
                        'name': 'Muwonge Andrew',
                    },
                    {
                        'id': 3,
                        'name': 'Byamukama Oscar',
                    },
                    {
                        'id': 4,
                        'name': 'ssuuna sadat',
                    },
                ]
            },
            {
                'id': 21,
                'group_name': 'BSE18-23',
                'title': 'Taxi Stage Location System',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:43',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABATEESA MILLY'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NAMWEBYA FARIDAH'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 22,
                'group_name': 'BSE18-24',
                'title': 'Automatic Pest Control and Irrigation',
                'supervisor': 'Odongo Steven Eyub',
                'submissionTime': '03/10/17 11:44',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kisitu Cornelius',
                    }
                ]
            },
            {
                'id': 23,
                'group_name': 'BSE18-25',
                'title': 'Boda Boda registration and tracking: (embedded with GPS)',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 11:45',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'KAYONDO NASIIFU'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'MURUNGI CISSY'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NAKACHWA HELLEN'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'SEMPA JONATHAN'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 24,
                'group_name': 'BSE18-26',
                'title': 'navigation',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 11:48',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'SEBUYEGE MARTIN'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kayemba Lawrence'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 25,
                'group_name': 'BSE18-27',
                'title': 'Mobile-Energy Saving System (MESS)',
                'supervisor': 'Drake Mirembe',
                'submissionTime': '03/10/17 12:48',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSGONJE ISMAIL'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'AGABA PETER'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 26,
                'group_name': 'BSE18-28',
                'title': 'QualiHewa (Air pollution detection and measuring)',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:08',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Karamagi Phillip',
                    },
                    {
                        'id': 2,
                        'name': 'Lubega Mark',
                    },
                    {
                        'id': 3,
                        'name': 'Karungi Emilly',
                    },
                    {
                        'id': 4,
                        'name': 'Sande Marcellinus',
                    },
                ]
            },
            {
                'id': 27,
                'group_name': 'BSE18-29',
                'title': 'RFID Security Access and Control System for Red Cross Uganda',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:15',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'kyagambiddwa sirajje',
                    },
                    {
                        'id': 2,
                        'name': 'kimuli samuel',
                    },
                    {
                        'id': 3,
                        'name': 'mugoya edrin',
                    },
                    {
                        'id': 4,
                        'name': 'muhumuza arthur',
                    },
                ]
            },
            {
                'id': 28,
                'group_name': 'BSE18-30',
                'title': 'Doberman Surveillance',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 12:12',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kemigisha Florence',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Samuel',
                    },
                    {
                        'id': 3,
                        'name': 'Semakula Kraiba',
                    },
                    {
                        'id': 4,
                        'name': 'Ziwa Ali',
                    },
                ]
            },
            {
                'id': 29,
                'group_name': 'BSE18-31',
                'title': 'MoBET',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:15',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'thembo emmanuel',
                    },
                    {
                        'id': 2,
                        'name': 'mukama godson',
                    },
                    {
                        'id': 3,
                        'name': 'nshimye joseph',
                    },
                    {
                        'id': 4,
                        'name': 'tinyefuza gordon',
                    },
                ]
            },
            {
                'id': 30,
                'group_name': 'BSE18-32',
                'title': 'Clinical diagnosis and treatment decision system',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '03/10/17 12:16',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'TWEHAMYE SILUS'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KANAMWANJI JULIUS'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'MUGABIRWE CATHBERT'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 31,
                'group_name': 'BSE18-33',
                'title': 'MOS Data recovery software',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:20',
                'file': 'Reports',
                'members': [
                    {
                        'id': 1,
                        'name': 'Ekalet Sam',
                    },
                    {
                        'id': 2,
                        'name': 'Malinga John Robert',
                    },
                    {
                        'id': 3,
                        'name': 'Rubahinya Oreb',
                    },
                    {
                        'id': 4,
                        'name': 'Simon Orupia',
                    },
                ]
            },
        ];
    };
    ReportsPageComponent.prototype._viewGroup = function (id) {
        console.log("Group id: " + id);
    };
    /* Chat with the group */
    ReportsPageComponent.prototype._chat = function (id) {
        console.log("Chat id recieved: " + id);
    };
    /* Chat with the group */
    ReportsPageComponent.prototype._history = function (id) {
        console.log("chat history id: " + id);
    };
    /* Handle selected file */
    ReportsPageComponent.prototype.onSelectedFile = function (id) {
        this.selectedFileId = id;
    };
    /* Recieve the details for the group you have selected */
    ReportsPageComponent.prototype.receiveSelectedGroup = function (event) {
        this.groupDetails = event['groupname'];
    };
    ReportsPageComponent.prototype.refreshFilesTable = function (event) {
        console.log("There is need to update the uploads filee table");
        /* We've made it a number so that angular can detect the increment and effect a GET Request */
        this.refreshUploadsTableFiles++;
    };
    ReportsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-reports-page',
            template: __webpack_require__("../../../../../src/app/pages/reports-page/reports-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/reports-page/reports-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], ReportsPageComponent);
    return ReportsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/requirements-tools-page/requirements-tools-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/requirements-tools-page/requirements-tools-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 groupName _widget-scrollbar\" *ngIf=\"userType == '2' || userType == '3'\">\n      <fyps-supervision-groups (selectedGroup)=\"receiveSelectedGroup($event)\"></fyps-supervision-groups>\n    </div>\n    <div [ngClass]=\"{'col-sm-12': userType == '1','col-sm-9': userType == '2' || userType == '3'}\" class=\"no-right-padding\">\n      <fiyps-uploaded-files [refreshUploadsTableFiles]=\"refreshUploadsTableFiles\" [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'5'\" (selectedFile)=\"onSelectedFile($event)\" [userType]=\"userType\"></fiyps-uploaded-files>\n    </div>\n  </div>\n  <fiyps-document-review (refreshUploadsTable)=\"refreshFilesTable($event)\" [deliverableTypeId]=\"'5'\" [selectedFileId]=\"selectedFileId\" [userType]=\"userType\"></fiyps-document-review>\n  <fiyps-chat [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'5'\" [userType]=\"userType\"></fiyps-chat>\n  <fiyps-all-documents \n    [projects]=\"projects\" \n    [userType]=\"userType\"\n    (onViewGroup)=\"_viewGroup($event)\"\n    (onChat)=\"_chat($event)\"\n    (onHistory)=\"_history($event)\"\n    ></fiyps-all-documents>\n  <fiyps-footer class=\"_min-footer\"></fiyps-footer>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/requirements-tools-page/requirements-tools-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequirementsToolsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequirementsToolsPageComponent = (function () {
    function RequirementsToolsPageComponent(api) {
        this.api = api;
        this.userType = null;
        this.selectedFileId = null;
        this.groupDetails = null;
        this.refreshUploadsTableFiles = 0;
        this.userType = this.api._getUserType();
    }
    RequirementsToolsPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".page-content").addClass("fit-content");
        this._fetch();
    };
    /* Fetch data */
    RequirementsToolsPageComponent.prototype._fetch = function () {
        this.projects = [
            {
                'id': 1,
                'group_name': 'BSE18-2',
                'title': 'MUK guide',
                'supervisor': 'David Bamutura',
                'supervisor_img': 'user6.jpg',
                'department': 'Department of Networks',
                'submissionTime': '01/10/17 12:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Muhatsi Shaffic'.toLowerCase(),
                        'img': 'user.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'Remo Samuel'.toLowerCase(),
                        'img': 'user4.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'Paul Odur Gerald'.toLowerCase(),
                        'img': 'user5.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'Okurut Jonathan'.toLowerCase(),
                        'img': 'user7.jpg'
                    },
                ],
            },
            {
                'id': 2,
                'group_name': 'BSE18-3',
                'title': 'customer ordering and billing system',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '02/10/17 12:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Othieno John'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Bonyo Joseph'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Sitati Ben'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Kiberu Frank'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 3,
                'group_name': 'BSE18-4',
                'title': 'Electronic Tollbooth monitoring system: A case study of KCCA',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 02:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Mugabira Anthony'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kisakye Daniel'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Kizza Peter'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Nsubuga Ronald'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 4,
                'group_name': 'BSE18-6',
                'title': 'A centralized solid waste managements system: a case study of NOREMA Services Limited',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 05:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Iga Kogongo edward',
                    },
                    {
                        'id': 2,
                        'name': 'mugeere paul',
                    },
                    {
                        'id': 3,
                        'name': 'opio solomon',
                    },
                    {
                        'id': 4,
                        'name': 'lubwama enock',
                    },
                ]
            },
            {
                'id': 5,
                'group_name': 'BSE18-7',
                'title': 'Awesome SMS Gateway System',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 05:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Katusiime Lisa',
                    },
                    {
                        'id': 2,
                        'name': 'Mugume Davies Arthur',
                    },
                    {
                        'id': 3,
                        'name': 'Emmanuel Okiria',
                    },
                    {
                        'id': 4,
                        'name': '	Omiat Isaac',
                    },
                ]
            },
            {
                'id': 6,
                'group_name': 'BSE18-8',
                'title': 'An embedded system for a smart poultry farm',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 05:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bbosa Ronald',
                    },
                    {
                        'id': 2,
                        'name': 'Semujju Stuart Dereck',
                    },
                    {
                        'id': 3,
                        'name': 'Matano Ali',
                    },
                    {
                        'id': 4,
                        'name': 'Kimbowa Charles',
                    },
                ]
            },
            {
                'id': 7,
                'group_name': 'BSE18-9',
                'title': 'Milk market predictor',
                'supervisor': 'Steven Odongo',
                'submissionTime': '02/10/17 05:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'BOGERE HUDSON'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NDUNGUTSE PAUL'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'TUMUHAIRWE DEUS'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 8,
                'group_name': 'BSE18-10',
                'title': 'Firefox voice plugin',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 03:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Orach John Kevin',
                    },
                    {
                        'id': 2,
                        'name': 'Kigozi Moses',
                    },
                    {
                        'id': 3,
                        'name': 'Batte Moses',
                    },
                    {
                        'id': 4,
                        'name': 'Kato Paul',
                    },
                ]
            },
            {
                'id': 9,
                'group_name': 'BSE18-11',
                'title': 'Car SMS Security System',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:00',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABWIRE SANDRA REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSEBBUGGA DAVID'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'EBUKALI DAVID'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAAYA ABRAHAM'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 10,
                'group_name': 'BSE18-12',
                'title': 'Home automation and security system',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:30',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'KASULE JOSHUA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KABOGGOZA STEPHEN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'ATUHAIRE MERCY'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NUWAMANYA ALEX'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 11,
                'group_name': 'BSE18-13',
                'title': 'Crop disease surveillance system (CDSS)',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '02/10/17 09:30',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'ARINAITWE ADAM'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KAHANGA LENIN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WANYOTO DENIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'MUDDE ENOCK'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 12,
                'group_name': 'BSE18-14',
                'title': 'Mobile phone language translator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 10:30',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'OKIDI DENISH'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSESANGA SHAFIK'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SEGAWA CHRISTOPHER'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OCHIENG JOHN BAPTIST'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 13,
                'group_name': 'BSE18-15',
                'title': 'Vision mobile news App',
                'supervisor': 'David Bamutura',
                'submissionTime': '03/10/17 11:30',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bazzekuketta Timothy',
                    },
                    {
                        'id': 2,
                        'name': 'Namazzi Lornalex Zaake',
                    },
                    {
                        'id': 3,
                        'name': 'Ntege Edward',
                    },
                    {
                        'id': 4,
                        'name': 'Muwanga Mohammed',
                    },
                ]
            },
            {
                'id': 14,
                'group_name': 'BSE18-16',
                'title': 'Regional disease outbreak indicator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:35',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Viola Bazanye Namuganyi',
                    },
                    {
                        'id': 2,
                        'name': 'Moses Gasana',
                    },
                    {
                        'id': 3,
                        'name': 'Martha Lukabwe',
                    },
                    {
                        'id': 4,
                        'name': 'Morine Amutorine',
                    },
                ]
            },
            {
                'id': 15,
                'group_name': 'BSE18-17',
                'title': 'Troubleshooting by example application (TBEA)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:37',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kiplimo k Peter',
                    },
                    {
                        'id': 2,
                        'name': 'Wamanga Isaac',
                    },
                    {
                        'id': 3,
                        'name': 'Kabali Shafique',
                    },
                    {
                        'id': 4,
                        'name': 'Asia Rogers',
                    },
                ]
            },
            {
                'id': 16,
                'group_name': 'BSE18-18',
                'title': 'Mobile Traffic Monitoring System',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '03/10/17 11:38',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'ASINGWIRE CUTHBERT'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NANSAMBU ERNEST'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SSEBANYIIGA FRANCIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OPIO ISAAC RONALD'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 17,
                'group_name': 'BSE18-19',
                'title': 'Trade and logistics management system for exporters and importers and freight forwarding companies',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:39',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kawuma Patrick',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Liz Mirembe',
                    },
                    {
                        'id': 3,
                        'name': 'Abaho Micheal',
                    },
                    {
                        'id': 4,
                        'name': 'Namugaanyi Emily',
                    },
                ]
            },
            {
                'id': 18,
                'group_name': 'BSE18-20',
                'title': 'Farmer-aid vending machine',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 11:40',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Batte Derick',
                    },
                    {
                        'id': 2,
                        'name': 'Henry Tebajjukira',
                    },
                    {
                        'id': 3,
                        'name': 'Nanjekye Joannah',
                    },
                    {
                        'id': 4,
                        'name': 'Ronald Kasujja',
                    },
                ]
            },
            {
                'id': 19,
                'group_name': 'BSE18-21',
                'title': 'Automobile navigation System (to be rephrased)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:41',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'BYAMUKAMA TADEO'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KALEEBI LINDAH REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WALUGEMBE EVEREST'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAKABANDA SAMALIE'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 20,
                'group_name': 'BSE18-22',
                'title': 'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:42',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kakande Joshwa',
                    },
                    {
                        'id': 2,
                        'name': 'Muwonge Andrew',
                    },
                    {
                        'id': 3,
                        'name': 'Byamukama Oscar',
                    },
                    {
                        'id': 4,
                        'name': 'ssuuna sadat',
                    },
                ]
            },
            {
                'id': 21,
                'group_name': 'BSE18-23',
                'title': 'Taxi Stage Location System',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:43',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABATEESA MILLY'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NAMWEBYA FARIDAH'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 22,
                'group_name': 'BSE18-24',
                'title': 'Automatic Pest Control and Irrigation',
                'supervisor': 'Odongo Steven Eyub',
                'submissionTime': '03/10/17 11:44',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kisitu Cornelius',
                    }
                ]
            },
            {
                'id': 23,
                'group_name': 'BSE18-25',
                'title': 'Boda Boda registration and tracking: (embedded with GPS)',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 11:45',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'KAYONDO NASIIFU'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'MURUNGI CISSY'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NAKACHWA HELLEN'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'SEMPA JONATHAN'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 24,
                'group_name': 'BSE18-26',
                'title': 'navigation',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 11:48',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'SEBUYEGE MARTIN'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kayemba Lawrence'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 25,
                'group_name': 'BSE18-27',
                'title': 'Mobile-Energy Saving System (MESS)',
                'supervisor': 'Drake Mirembe',
                'submissionTime': '03/10/17 12:48',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSGONJE ISMAIL'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'AGABA PETER'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 26,
                'group_name': 'BSE18-28',
                'title': 'QualiHewa (Air pollution detection and measuring)',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:08',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Karamagi Phillip',
                    },
                    {
                        'id': 2,
                        'name': 'Lubega Mark',
                    },
                    {
                        'id': 3,
                        'name': 'Karungi Emilly',
                    },
                    {
                        'id': 4,
                        'name': 'Sande Marcellinus',
                    },
                ]
            },
            {
                'id': 27,
                'group_name': 'BSE18-29',
                'title': 'RFID Security Access and Control System for Red Cross Uganda',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:15',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'kyagambiddwa sirajje',
                    },
                    {
                        'id': 2,
                        'name': 'kimuli samuel',
                    },
                    {
                        'id': 3,
                        'name': 'mugoya edrin',
                    },
                    {
                        'id': 4,
                        'name': 'muhumuza arthur',
                    },
                ]
            },
            {
                'id': 28,
                'group_name': 'BSE18-30',
                'title': 'Doberman Surveillance',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 12:12',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kemigisha Florence',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Samuel',
                    },
                    {
                        'id': 3,
                        'name': 'Semakula Kraiba',
                    },
                    {
                        'id': 4,
                        'name': 'Ziwa Ali',
                    },
                ]
            },
            {
                'id': 29,
                'group_name': 'BSE18-31',
                'title': 'MoBET',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:15',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'thembo emmanuel',
                    },
                    {
                        'id': 2,
                        'name': 'mukama godson',
                    },
                    {
                        'id': 3,
                        'name': 'nshimye joseph',
                    },
                    {
                        'id': 4,
                        'name': 'tinyefuza gordon',
                    },
                ]
            },
            {
                'id': 30,
                'group_name': 'BSE18-32',
                'title': 'Clinical diagnosis and treatment decision system',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '03/10/17 12:16',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'TWEHAMYE SILUS'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KANAMWANJI JULIUS'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'MUGABIRWE CATHBERT'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 31,
                'group_name': 'BSE18-33',
                'title': 'MOS Data recovery software',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:20',
                'file': 'Requirements tools',
                'members': [
                    {
                        'id': 1,
                        'name': 'Ekalet Sam',
                    },
                    {
                        'id': 2,
                        'name': 'Malinga John Robert',
                    },
                    {
                        'id': 3,
                        'name': 'Rubahinya Oreb',
                    },
                    {
                        'id': 4,
                        'name': 'Simon Orupia',
                    },
                ]
            },
        ];
    };
    RequirementsToolsPageComponent.prototype._viewGroup = function (id) {
        console.log("Group id: " + id);
    };
    /* Chat with the group */
    RequirementsToolsPageComponent.prototype._chat = function (id) {
        console.log("Chat id recieved: " + id);
    };
    /* Chat with the group */
    RequirementsToolsPageComponent.prototype._history = function (id) {
        console.log("chat history id: " + id);
    };
    /* Handle selected file */
    RequirementsToolsPageComponent.prototype.onSelectedFile = function (id) {
        this.selectedFileId = id;
    };
    /* Recieve the details for the group you have selected */
    RequirementsToolsPageComponent.prototype.receiveSelectedGroup = function (event) {
        this.groupDetails = event['groupname'];
    };
    RequirementsToolsPageComponent.prototype.refreshFilesTable = function (event) {
        console.log("There is need to update the uploads filee table");
        /* We've made it a number so that angular can detect the increment and effect a GET Request */
        this.refreshUploadsTableFiles++;
    };
    RequirementsToolsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-requirements-tools-page',
            template: __webpack_require__("../../../../../src/app/pages/requirements-tools-page/requirements-tools-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/requirements-tools-page/requirements-tools-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], RequirementsToolsPageComponent);
    return RequirementsToolsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/sdd-page/sdd-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sdd-page/sdd-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 groupName _widget-scrollbar\" *ngIf=\"userType == '2' || userType == '3'\">\n      <fyps-supervision-groups (selectedGroup)=\"receiveSelectedGroup($event)\"></fyps-supervision-groups>\n    </div>\n    <div [ngClass]=\"{'col-sm-12': userType == '1','col-sm-9': userType == '2' || userType == '3'}\" class=\"no-right-padding\">\n      <fiyps-uploaded-files [refreshUploadsTableFiles]=\"refreshUploadsTableFiles\" [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'3'\" (selectedFile)=\"onSelectedFile($event)\" [userType]=\"userType\"></fiyps-uploaded-files>\n    </div>\n  </div>\n  <fiyps-document-review (refreshUploadsTable)=\"refreshFilesTable($event)\" [deliverableTypeId]=\"'3'\" [selectedFileId]=\"selectedFileId\" [userType]=\"userType\"></fiyps-document-review>\n  <fiyps-chat [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'3'\" [userType]=\"userType\"></fiyps-chat>\n  <fiyps-all-documents \n    [projects]=\"projects\" \n    [userType]=\"userType\"\n    (onViewGroup)=\"_viewGroup($event)\"\n    (onChat)=\"_chat($event)\"\n    (onHistory)=\"_history($event)\"\n    ></fiyps-all-documents>\n  <fiyps-footer class=\"_min-footer\"></fiyps-footer>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/sdd-page/sdd-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SddPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SddPageComponent = (function () {
    function SddPageComponent(api) {
        this.api = api;
        this.userType = null;
        this.selectedFileId = null;
        this.groupDetails = null;
        this.refreshUploadsTableFiles = 0;
        this.userType = this.api._getUserType();
    }
    SddPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".page-content").addClass("fit-content");
        this._fetch();
    };
    /* Fetch data */
    SddPageComponent.prototype._fetch = function () {
        this.projects = [
            {
                'id': 1,
                'group_name': 'BSE18-2',
                'title': 'MUK guide',
                'supervisor': 'David Bamutura',
                'supervisor_img': 'user6.jpg',
                'department': 'Department of Networks',
                'submissionTime': '01/10/17 12:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Muhatsi Shaffic'.toLowerCase(),
                        'img': 'user.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'Remo Samuel'.toLowerCase(),
                        'img': 'user4.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'Paul Odur Gerald'.toLowerCase(),
                        'img': 'user5.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'Okurut Jonathan'.toLowerCase(),
                        'img': 'user7.jpg'
                    },
                ],
            },
            {
                'id': 2,
                'group_name': 'BSE18-3',
                'title': 'customer ordering and billing system',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '02/10/17 12:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Othieno John'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Bonyo Joseph'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Sitati Ben'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Kiberu Frank'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 3,
                'group_name': 'BSE18-4',
                'title': 'Electronic Tollbooth monitoring system: A case study of KCCA',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 02:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Mugabira Anthony'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kisakye Daniel'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Kizza Peter'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Nsubuga Ronald'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 4,
                'group_name': 'BSE18-6',
                'title': 'A centralized solid waste managements system: a case study of NOREMA Services Limited',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Iga Kogongo edward',
                    },
                    {
                        'id': 2,
                        'name': 'mugeere paul',
                    },
                    {
                        'id': 3,
                        'name': 'opio solomon',
                    },
                    {
                        'id': 4,
                        'name': 'lubwama enock',
                    },
                ]
            },
            {
                'id': 5,
                'group_name': 'BSE18-7',
                'title': 'Awesome SMS Gateway System',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Katusiime Lisa',
                    },
                    {
                        'id': 2,
                        'name': 'Mugume Davies Arthur',
                    },
                    {
                        'id': 3,
                        'name': 'Emmanuel Okiria',
                    },
                    {
                        'id': 4,
                        'name': '	Omiat Isaac',
                    },
                ]
            },
            {
                'id': 6,
                'group_name': 'BSE18-8',
                'title': 'An embedded system for a smart poultry farm',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bbosa Ronald',
                    },
                    {
                        'id': 2,
                        'name': 'Semujju Stuart Dereck',
                    },
                    {
                        'id': 3,
                        'name': 'Matano Ali',
                    },
                    {
                        'id': 4,
                        'name': 'Kimbowa Charles',
                    },
                ]
            },
            {
                'id': 7,
                'group_name': 'BSE18-9',
                'title': 'Milk market predictor',
                'supervisor': 'Steven Odongo',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'BOGERE HUDSON'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NDUNGUTSE PAUL'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'TUMUHAIRWE DEUS'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 8,
                'group_name': 'BSE18-10',
                'title': 'Firefox voice plugin',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 03:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Orach John Kevin',
                    },
                    {
                        'id': 2,
                        'name': 'Kigozi Moses',
                    },
                    {
                        'id': 3,
                        'name': 'Batte Moses',
                    },
                    {
                        'id': 4,
                        'name': 'Kato Paul',
                    },
                ]
            },
            {
                'id': 9,
                'group_name': 'BSE18-11',
                'title': 'Car SMS Security System',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABWIRE SANDRA REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSEBBUGGA DAVID'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'EBUKALI DAVID'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAAYA ABRAHAM'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 10,
                'group_name': 'BSE18-12',
                'title': 'Home automation and security system',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'KASULE JOSHUA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KABOGGOZA STEPHEN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'ATUHAIRE MERCY'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NUWAMANYA ALEX'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 11,
                'group_name': 'BSE18-13',
                'title': 'Crop disease surveillance system (CDSS)',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '02/10/17 09:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'ARINAITWE ADAM'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KAHANGA LENIN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WANYOTO DENIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'MUDDE ENOCK'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 12,
                'group_name': 'BSE18-14',
                'title': 'Mobile phone language translator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 10:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'OKIDI DENISH'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSESANGA SHAFIK'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SEGAWA CHRISTOPHER'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OCHIENG JOHN BAPTIST'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 13,
                'group_name': 'BSE18-15',
                'title': 'Vision mobile news App',
                'supervisor': 'David Bamutura',
                'submissionTime': '03/10/17 11:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bazzekuketta Timothy',
                    },
                    {
                        'id': 2,
                        'name': 'Namazzi Lornalex Zaake',
                    },
                    {
                        'id': 3,
                        'name': 'Ntege Edward',
                    },
                    {
                        'id': 4,
                        'name': 'Muwanga Mohammed',
                    },
                ]
            },
            {
                'id': 14,
                'group_name': 'BSE18-16',
                'title': 'Regional disease outbreak indicator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:35',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Viola Bazanye Namuganyi',
                    },
                    {
                        'id': 2,
                        'name': 'Moses Gasana',
                    },
                    {
                        'id': 3,
                        'name': 'Martha Lukabwe',
                    },
                    {
                        'id': 4,
                        'name': 'Morine Amutorine',
                    },
                ]
            },
            {
                'id': 15,
                'group_name': 'BSE18-17',
                'title': 'Troubleshooting by example application (TBEA)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:37',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kiplimo k Peter',
                    },
                    {
                        'id': 2,
                        'name': 'Wamanga Isaac',
                    },
                    {
                        'id': 3,
                        'name': 'Kabali Shafique',
                    },
                    {
                        'id': 4,
                        'name': 'Asia Rogers',
                    },
                ]
            },
            {
                'id': 16,
                'group_name': 'BSE18-18',
                'title': 'Mobile Traffic Monitoring System',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '03/10/17 11:38',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'ASINGWIRE CUTHBERT'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NANSAMBU ERNEST'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SSEBANYIIGA FRANCIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OPIO ISAAC RONALD'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 17,
                'group_name': 'BSE18-19',
                'title': 'Trade and logistics management system for exporters and importers and freight forwarding companies',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:39',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kawuma Patrick',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Liz Mirembe',
                    },
                    {
                        'id': 3,
                        'name': 'Abaho Micheal',
                    },
                    {
                        'id': 4,
                        'name': 'Namugaanyi Emily',
                    },
                ]
            },
            {
                'id': 18,
                'group_name': 'BSE18-20',
                'title': 'Farmer-aid vending machine',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 11:40',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Batte Derick',
                    },
                    {
                        'id': 2,
                        'name': 'Henry Tebajjukira',
                    },
                    {
                        'id': 3,
                        'name': 'Nanjekye Joannah',
                    },
                    {
                        'id': 4,
                        'name': 'Ronald Kasujja',
                    },
                ]
            },
            {
                'id': 19,
                'group_name': 'BSE18-21',
                'title': 'Automobile navigation System (to be rephrased)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:41',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'BYAMUKAMA TADEO'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KALEEBI LINDAH REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WALUGEMBE EVEREST'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAKABANDA SAMALIE'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 20,
                'group_name': 'BSE18-22',
                'title': 'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:42',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kakande Joshwa',
                    },
                    {
                        'id': 2,
                        'name': 'Muwonge Andrew',
                    },
                    {
                        'id': 3,
                        'name': 'Byamukama Oscar',
                    },
                    {
                        'id': 4,
                        'name': 'ssuuna sadat',
                    },
                ]
            },
            {
                'id': 21,
                'group_name': 'BSE18-23',
                'title': 'Taxi Stage Location System',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:43',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABATEESA MILLY'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NAMWEBYA FARIDAH'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 22,
                'group_name': 'BSE18-24',
                'title': 'Automatic Pest Control and Irrigation',
                'supervisor': 'Odongo Steven Eyub',
                'submissionTime': '03/10/17 11:44',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kisitu Cornelius',
                    }
                ]
            },
            {
                'id': 23,
                'group_name': 'BSE18-25',
                'title': 'Boda Boda registration and tracking: (embedded with GPS)',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 11:45',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'KAYONDO NASIIFU'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'MURUNGI CISSY'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NAKACHWA HELLEN'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'SEMPA JONATHAN'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 24,
                'group_name': 'BSE18-26',
                'title': 'navigation',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 11:48',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'SEBUYEGE MARTIN'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kayemba Lawrence'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 25,
                'group_name': 'BSE18-27',
                'title': 'Mobile-Energy Saving System (MESS)',
                'supervisor': 'Drake Mirembe',
                'submissionTime': '03/10/17 12:48',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSGONJE ISMAIL'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'AGABA PETER'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 26,
                'group_name': 'BSE18-28',
                'title': 'QualiHewa (Air pollution detection and measuring)',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:08',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Karamagi Phillip',
                    },
                    {
                        'id': 2,
                        'name': 'Lubega Mark',
                    },
                    {
                        'id': 3,
                        'name': 'Karungi Emilly',
                    },
                    {
                        'id': 4,
                        'name': 'Sande Marcellinus',
                    },
                ]
            },
            {
                'id': 27,
                'group_name': 'BSE18-29',
                'title': 'RFID Security Access and Control System for Red Cross Uganda',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:15',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'kyagambiddwa sirajje',
                    },
                    {
                        'id': 2,
                        'name': 'kimuli samuel',
                    },
                    {
                        'id': 3,
                        'name': 'mugoya edrin',
                    },
                    {
                        'id': 4,
                        'name': 'muhumuza arthur',
                    },
                ]
            },
            {
                'id': 28,
                'group_name': 'BSE18-30',
                'title': 'Doberman Surveillance',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 12:12',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kemigisha Florence',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Samuel',
                    },
                    {
                        'id': 3,
                        'name': 'Semakula Kraiba',
                    },
                    {
                        'id': 4,
                        'name': 'Ziwa Ali',
                    },
                ]
            },
            {
                'id': 29,
                'group_name': 'BSE18-31',
                'title': 'MoBET',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:15',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'thembo emmanuel',
                    },
                    {
                        'id': 2,
                        'name': 'mukama godson',
                    },
                    {
                        'id': 3,
                        'name': 'nshimye joseph',
                    },
                    {
                        'id': 4,
                        'name': 'tinyefuza gordon',
                    },
                ]
            },
            {
                'id': 30,
                'group_name': 'BSE18-32',
                'title': 'Clinical diagnosis and treatment decision system',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '03/10/17 12:16',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'TWEHAMYE SILUS'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KANAMWANJI JULIUS'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'MUGABIRWE CATHBERT'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 31,
                'group_name': 'BSE18-33',
                'title': 'MOS Data recovery software',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:20',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Ekalet Sam',
                    },
                    {
                        'id': 2,
                        'name': 'Malinga John Robert',
                    },
                    {
                        'id': 3,
                        'name': 'Rubahinya Oreb',
                    },
                    {
                        'id': 4,
                        'name': 'Simon Orupia',
                    },
                ]
            },
        ];
    };
    SddPageComponent.prototype._viewGroup = function (id) {
        console.log("Group id: " + id);
    };
    /* Chat with the group */
    SddPageComponent.prototype._chat = function (id) {
        console.log("Chat id recieved: " + id);
    };
    /* Chat with the group */
    SddPageComponent.prototype._history = function (id) {
        console.log("chat history id: " + id);
    };
    /* Handle selected file */
    SddPageComponent.prototype.onSelectedFile = function (id) {
        this.selectedFileId = id;
    };
    /* Recieve the details for the group you have selected */
    SddPageComponent.prototype.receiveSelectedGroup = function (event) {
        this.groupDetails = event['groupname'];
    };
    SddPageComponent.prototype.refreshFilesTable = function (event) {
        console.log("There is need to update the uploads filee table");
        /* We've made it a number so that angular can detect the increment and effect a GET Request */
        this.refreshUploadsTableFiles++;
    };
    SddPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-sdd-page',
            template: __webpack_require__("../../../../../src/app/pages/sdd-page/sdd-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/sdd-page/sdd-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], SddPageComponent);
    return SddPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/server-logs/server-logs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/server-logs/server-logs.component.html":
/***/ (function(module, exports) {

module.exports = "<fiyps-logs></fiyps-logs>"

/***/ }),

/***/ "../../../../../src/app/pages/server-logs/server-logs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerLogsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerLogsComponent = (function () {
    function ServerLogsComponent() {
    }
    ServerLogsComponent.prototype.ngOnInit = function () {
    };
    ServerLogsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-server-logs',
            template: __webpack_require__("../../../../../src/app/pages/server-logs/server-logs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/server-logs/server-logs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServerLogsComponent);
    return ServerLogsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/srs-page/srs-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/srs-page/srs-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 groupName _widget-scrollbar\" *ngIf=\"userType == '2' || userType == '3'\">\n      <fyps-supervision-groups (selectedGroup)=\"receiveSelectedGroup($event)\"></fyps-supervision-groups>\n    </div>\n    <div [ngClass]=\"{'col-sm-12': userType == '1','col-sm-9': userType == '2' || userType == '3'}\" class=\"no-right-padding\">\n      <fiyps-uploaded-files [refreshUploadsTableFiles]=\"refreshUploadsTableFiles\" [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'2'\" (selectedFile)=\"onSelectedFile($event)\" [userType]=\"userType\"></fiyps-uploaded-files>\n    </div>\n  </div>\n  <fiyps-document-review (refreshUploadsTable)=\"refreshFilesTable($event)\" [deliverableTypeId]=\"'2'\" [selectedFileId]=\"selectedFileId\" [userType]=\"userType\"></fiyps-document-review>\n  <fiyps-chat [groupDetails]=\"groupDetails\" [deliverableTypeId]=\"'2'\" [userType]=\"userType\"></fiyps-chat>\n  <fiyps-all-documents \n    [projects]=\"projects\" \n    [userType]=\"userType\"\n    (onViewGroup)=\"_viewGroup($event)\"\n    (onChat)=\"_chat($event)\"\n    (onHistory)=\"_history($event)\"\n    ></fiyps-all-documents>\n  <fiyps-footer class=\"_min-footer\"></fiyps-footer>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/srs-page/srs-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SrsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_api_service__ = __webpack_require__("../../../../../src/app/service/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SrsPageComponent = (function () {
    function SrsPageComponent(api) {
        this.api = api;
        this.userType = null;
        this.selectedFileId = null;
        this.groupDetails = null;
        this.refreshUploadsTableFiles = 0;
        this.userType = this.api._getUserType();
    }
    SrsPageComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".page-content").addClass("fit-content");
        this._fetch();
    };
    /* Fetch data */
    SrsPageComponent.prototype._fetch = function () {
        this.projects = [
            {
                'id': 1,
                'group_name': 'BSE18-2',
                'title': 'MUK guide',
                'supervisor': 'David Bamutura',
                'supervisor_img': 'user6.jpg',
                'department': 'Department of Networks',
                'submissionTime': '01/10/17 12:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Muhatsi Shaffic'.toLowerCase(),
                        'img': 'user.jpg'
                    },
                    {
                        'id': 2,
                        'name': 'Remo Samuel'.toLowerCase(),
                        'img': 'user4.jpg'
                    },
                    {
                        'id': 3,
                        'name': 'Paul Odur Gerald'.toLowerCase(),
                        'img': 'user5.jpg'
                    },
                    {
                        'id': 4,
                        'name': 'Okurut Jonathan'.toLowerCase(),
                        'img': 'user7.jpg'
                    },
                ],
            },
            {
                'id': 2,
                'group_name': 'BSE18-3',
                'title': 'customer ordering and billing system',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '02/10/17 12:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Othieno John'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Bonyo Joseph'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Sitati Ben'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Kiberu Frank'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 3,
                'group_name': 'BSE18-4',
                'title': 'Electronic Tollbooth monitoring system: A case study of KCCA',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 02:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Mugabira Anthony'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kisakye Daniel'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'Kizza Peter'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'Nsubuga Ronald'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 4,
                'group_name': 'BSE18-6',
                'title': 'A centralized solid waste managements system: a case study of NOREMA Services Limited',
                'supervisor': 'Mary Nsabagwa',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Iga Kogongo edward',
                    },
                    {
                        'id': 2,
                        'name': 'mugeere paul',
                    },
                    {
                        'id': 3,
                        'name': 'opio solomon',
                    },
                    {
                        'id': 4,
                        'name': 'lubwama enock',
                    },
                ]
            },
            {
                'id': 5,
                'group_name': 'BSE18-7',
                'title': 'Awesome SMS Gateway System',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Katusiime Lisa',
                    },
                    {
                        'id': 2,
                        'name': 'Mugume Davies Arthur',
                    },
                    {
                        'id': 3,
                        'name': 'Emmanuel Okiria',
                    },
                    {
                        'id': 4,
                        'name': '	Omiat Isaac',
                    },
                ]
            },
            {
                'id': 6,
                'group_name': 'BSE18-8',
                'title': 'An embedded system for a smart poultry farm',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bbosa Ronald',
                    },
                    {
                        'id': 2,
                        'name': 'Semujju Stuart Dereck',
                    },
                    {
                        'id': 3,
                        'name': 'Matano Ali',
                    },
                    {
                        'id': 4,
                        'name': 'Kimbowa Charles',
                    },
                ]
            },
            {
                'id': 7,
                'group_name': 'BSE18-9',
                'title': 'Milk market predictor',
                'supervisor': 'Steven Odongo',
                'submissionTime': '02/10/17 05:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'BOGERE HUDSON'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NDUNGUTSE PAUL'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'TUMUHAIRWE DEUS'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 8,
                'group_name': 'BSE18-10',
                'title': 'Firefox voice plugin',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '02/10/17 03:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Orach John Kevin',
                    },
                    {
                        'id': 2,
                        'name': 'Kigozi Moses',
                    },
                    {
                        'id': 3,
                        'name': 'Batte Moses',
                    },
                    {
                        'id': 4,
                        'name': 'Kato Paul',
                    },
                ]
            },
            {
                'id': 9,
                'group_name': 'BSE18-11',
                'title': 'Car SMS Security System',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:00',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABWIRE SANDRA REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSEBBUGGA DAVID'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'EBUKALI DAVID'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAAYA ABRAHAM'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 10,
                'group_name': 'BSE18-12',
                'title': 'Home automation and security system',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '02/10/17 09:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'KASULE JOSHUA'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KABOGGOZA STEPHEN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'ATUHAIRE MERCY'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NUWAMANYA ALEX'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 11,
                'group_name': 'BSE18-13',
                'title': 'Crop disease surveillance system (CDSS)',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '02/10/17 09:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'ARINAITWE ADAM'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KAHANGA LENIN'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WANYOTO DENIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'MUDDE ENOCK'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 12,
                'group_name': 'BSE18-14',
                'title': 'Mobile phone language translator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 10:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'OKIDI DENISH'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'SSESANGA SHAFIK'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SEGAWA CHRISTOPHER'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OCHIENG JOHN BAPTIST'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 13,
                'group_name': 'BSE18-15',
                'title': 'Vision mobile news App',
                'supervisor': 'David Bamutura',
                'submissionTime': '03/10/17 11:30',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Bazzekuketta Timothy',
                    },
                    {
                        'id': 2,
                        'name': 'Namazzi Lornalex Zaake',
                    },
                    {
                        'id': 3,
                        'name': 'Ntege Edward',
                    },
                    {
                        'id': 4,
                        'name': 'Muwanga Mohammed',
                    },
                ]
            },
            {
                'id': 14,
                'group_name': 'BSE18-16',
                'title': 'Regional disease outbreak indicator',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:35',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Viola Bazanye Namuganyi',
                    },
                    {
                        'id': 2,
                        'name': 'Moses Gasana',
                    },
                    {
                        'id': 3,
                        'name': 'Martha Lukabwe',
                    },
                    {
                        'id': 4,
                        'name': 'Morine Amutorine',
                    },
                ]
            },
            {
                'id': 15,
                'group_name': 'BSE18-17',
                'title': 'Troubleshooting by example application (TBEA)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:37',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kiplimo k Peter',
                    },
                    {
                        'id': 2,
                        'name': 'Wamanga Isaac',
                    },
                    {
                        'id': 3,
                        'name': 'Kabali Shafique',
                    },
                    {
                        'id': 4,
                        'name': 'Asia Rogers',
                    },
                ]
            },
            {
                'id': 16,
                'group_name': 'BSE18-18',
                'title': 'Mobile Traffic Monitoring System',
                'supervisor': 'Rose Nakibuule',
                'submissionTime': '03/10/17 11:38',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'ASINGWIRE CUTHBERT'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NANSAMBU ERNEST'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'SSEBANYIIGA FRANCIS'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'OPIO ISAAC RONALD'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 17,
                'group_name': 'BSE18-19',
                'title': 'Trade and logistics management system for exporters and importers and freight forwarding companies',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:39',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kawuma Patrick',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Liz Mirembe',
                    },
                    {
                        'id': 3,
                        'name': 'Abaho Micheal',
                    },
                    {
                        'id': 4,
                        'name': 'Namugaanyi Emily',
                    },
                ]
            },
            {
                'id': 18,
                'group_name': 'BSE18-20',
                'title': 'Farmer-aid vending machine',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 11:40',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Batte Derick',
                    },
                    {
                        'id': 2,
                        'name': 'Henry Tebajjukira',
                    },
                    {
                        'id': 3,
                        'name': 'Nanjekye Joannah',
                    },
                    {
                        'id': 4,
                        'name': 'Ronald Kasujja',
                    },
                ]
            },
            {
                'id': 19,
                'group_name': 'BSE18-21',
                'title': 'Automobile navigation System (to be rephrased)',
                'supervisor': 'Joab Ezra Agaba',
                'submissionTime': '03/10/17 11:41',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'BYAMUKAMA TADEO'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KALEEBI LINDAH REBECCA'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WALUGEMBE EVEREST'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'NAKABANDA SAMALIE'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 20,
                'group_name': 'BSE18-22',
                'title': 'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:42',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kakande Joshwa',
                    },
                    {
                        'id': 2,
                        'name': 'Muwonge Andrew',
                    },
                    {
                        'id': 3,
                        'name': 'Byamukama Oscar',
                    },
                    {
                        'id': 4,
                        'name': 'ssuuna sadat',
                    },
                ]
            },
            {
                'id': 21,
                'group_name': 'BSE18-23',
                'title': 'Taxi Stage Location System',
                'supervisor': 'Steven Odongo',
                'submissionTime': '03/10/17 11:43',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'NABATEESA MILLY'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'NAMWEBYA FARIDAH'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 22,
                'group_name': 'BSE18-24',
                'title': 'Automatic Pest Control and Irrigation',
                'supervisor': 'Odongo Steven Eyub',
                'submissionTime': '03/10/17 11:44',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kisitu Cornelius',
                    }
                ]
            },
            {
                'id': 23,
                'group_name': 'BSE18-25',
                'title': 'Boda Boda registration and tracking: (embedded with GPS)',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 11:45',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'KAYONDO NASIIFU'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'MURUNGI CISSY'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'NAKACHWA HELLEN'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'SEMPA JONATHAN'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 24,
                'group_name': 'BSE18-26',
                'title': 'navigation',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 11:48',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'SEBUYEGE MARTIN'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'Kayemba Lawrence'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 25,
                'group_name': 'BSE18-27',
                'title': 'Mobile-Energy Saving System (MESS)',
                'supervisor': 'Drake Mirembe',
                'submissionTime': '03/10/17 12:48',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'SSGONJE ISMAIL'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'AGABA PETER'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                    {
                        'id': 4,
                        'name': 'WAMPAMBA NOHO'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 26,
                'group_name': 'BSE18-28',
                'title': 'QualiHewa (Air pollution detection and measuring)',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:08',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Karamagi Phillip',
                    },
                    {
                        'id': 2,
                        'name': 'Lubega Mark',
                    },
                    {
                        'id': 3,
                        'name': 'Karungi Emilly',
                    },
                    {
                        'id': 4,
                        'name': 'Sande Marcellinus',
                    },
                ]
            },
            {
                'id': 27,
                'group_name': 'BSE18-29',
                'title': 'RFID Security Access and Control System for Red Cross Uganda',
                'supervisor': 'Nsabagwa Mary',
                'submissionTime': '03/10/17 12:15',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'kyagambiddwa sirajje',
                    },
                    {
                        'id': 2,
                        'name': 'kimuli samuel',
                    },
                    {
                        'id': 3,
                        'name': 'mugoya edrin',
                    },
                    {
                        'id': 4,
                        'name': 'muhumuza arthur',
                    },
                ]
            },
            {
                'id': 28,
                'group_name': 'BSE18-30',
                'title': 'Doberman Surveillance',
                'supervisor': 'Doreen Tuheirwe',
                'submissionTime': '03/10/17 12:12',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Kemigisha Florence',
                    },
                    {
                        'id': 2,
                        'name': 'Mukasa Samuel',
                    },
                    {
                        'id': 3,
                        'name': 'Semakula Kraiba',
                    },
                    {
                        'id': 4,
                        'name': 'Ziwa Ali',
                    },
                ]
            },
            {
                'id': 29,
                'group_name': 'BSE18-31',
                'title': 'MoBET',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:15',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'thembo emmanuel',
                    },
                    {
                        'id': 2,
                        'name': 'mukama godson',
                    },
                    {
                        'id': 3,
                        'name': 'nshimye joseph',
                    },
                    {
                        'id': 4,
                        'name': 'tinyefuza gordon',
                    },
                ]
            },
            {
                'id': 30,
                'group_name': 'BSE18-32',
                'title': 'Clinical diagnosis and treatment decision system',
                'supervisor': 'Grace B. Kamulegeya',
                'submissionTime': '03/10/17 12:16',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'TWEHAMYE SILUS'.toLowerCase(),
                    },
                    {
                        'id': 2,
                        'name': 'KANAMWANJI JULIUS'.toLowerCase(),
                    },
                    {
                        'id': 3,
                        'name': 'MUGABIRWE CATHBERT'.toLowerCase(),
                    },
                ]
            },
            {
                'id': 31,
                'group_name': 'BSE18-33',
                'title': 'MOS Data recovery software',
                'supervisor': 'Agaba Joab Ezra',
                'submissionTime': '03/10/17 12:20',
                'file': 'SRS',
                'members': [
                    {
                        'id': 1,
                        'name': 'Ekalet Sam',
                    },
                    {
                        'id': 2,
                        'name': 'Malinga John Robert',
                    },
                    {
                        'id': 3,
                        'name': 'Rubahinya Oreb',
                    },
                    {
                        'id': 4,
                        'name': 'Simon Orupia',
                    },
                ]
            },
        ];
    };
    SrsPageComponent.prototype._viewGroup = function (id) {
        console.log("Group id: " + id);
    };
    /* Chat with the group */
    SrsPageComponent.prototype._chat = function (id) {
        console.log("Chat id recieved: " + id);
    };
    /* Chat with the group */
    SrsPageComponent.prototype._history = function (id) {
        console.log("chat history id: " + id);
    };
    /* Handle selected file */
    SrsPageComponent.prototype.onSelectedFile = function (id) {
        this.selectedFileId = id;
    };
    /* Recieve the details for the group you have selected */
    SrsPageComponent.prototype.receiveSelectedGroup = function (event) {
        this.groupDetails = event['groupname'];
    };
    SrsPageComponent.prototype.refreshFilesTable = function (event) {
        console.log("There is need to update the uploads filee table");
        /* We've made it a number so that angular can detect the increment and effect a GET Request */
        this.refreshUploadsTableFiles++;
    };
    SrsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fiyps-srs-page',
            template: __webpack_require__("../../../../../src/app/pages/srs-page/srs-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/srs-page/srs-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_api_service__["a" /* ApiService */]])
    ], SrsPageComponent);
    return SrsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_from__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        //private apiUrl: string = "http://localhost:91";
        this.apiUrl = "http://fyps.pythonanywhere.com";
        this.ep_login = '/login';
        this.ep_resetPassword = '/resetPassword';
        this.ep_uploadFiles = '/uploadFiles';
        this.ep_chats = '/chat';
        this.ep_fetchFiles = '/fetchFiles';
        this.ep_readPDF = '/pdf';
        this.ep_approveDeliverable = '/approveDeliverable';
        this.ep_fetchAllGroups = '/fetchAllGroups';
        this.ep_deleteFile = "/deleteFile";
        this.ep_submitDeliverable = "/submitDeliverable";
        this.ep_forumPosts = "/forumPosts";
        this.ep_comments = "/comments";
        this.ep_fetchForumCommentsCount = "/fetchForumCommentsCount";
        this.ep_forumLikesCount = "/forumLikesCount";
        this.ep_forumDislikesCount = "/forumDislikesCount";
        this.ep_archivedPost = "/archivedPost";
        this.ep_archivedProjects = "/archivedProjects";
        this.ep_profile = "/profile";
        this.ep_validatePassword = "/validatePassword";
        this.ep_uploadProfileImage = "/profileImageUploads";
        this.ep_fetchProfileImage = "/fetchProfileImage";
        this.ep_updateStudentGroupDetails = "/updateStudentGroupDetails";
        this.Token = null;
        this.homeBtn = 'home';
        this.breadcrumb = [];
        this.userType = null; //supervisor
        this.userPwd = null;
        this.userName = null;
        this.userImg = null;
        this.supervisors = null;
        this.logs = null;
        this.requestError = "Request failed.Please contact our IT Support team at mactechlabs1@gmail.com";
        //Remove these lines once the backend is implemented...
        this._setUserPwd('123456');
        this._setSupervisors('data');
    }
    ApiService.prototype.getUpdateStudentGroupDetailsEndpoint = function () {
        return this.apiUrl + this.ep_updateStudentGroupDetails + "/" + this.userType + "?token=" + this.Token;
    };
    ApiService.prototype.getResetPasswordEndpoint = function () {
        return this.apiUrl + this.ep_resetPassword;
    };
    ApiService.prototype.getProfileImageEndpoint = function () {
        return this.apiUrl + this.ep_fetchProfileImage + "/" + this.userType + "?token=" + this.Token;
    };
    ApiService.prototype.getUploadProfileImageEndpoint = function () {
        return this.apiUrl + this.ep_uploadProfileImage + "/" + this.userType + "?token=" + this.Token;
    };
    ApiService.prototype.getValidatePassword = function (password) {
        return this.apiUrl + this.ep_validatePassword + "/" + this.userType + "/" + password + "?token=" + this.Token;
    };
    ApiService.prototype.getProfileEndpoint = function () {
        return this.apiUrl + this.ep_profile + "/" + this.userType + "?token=" + this.Token;
    };
    ApiService.prototype.getArchivedProjectDetails = function (id) {
        return this.apiUrl + this.ep_archivedProjects + "/" + id + "?token=" + this.Token;
    };
    ApiService.prototype.getArchivedProjects = function () {
        return this.apiUrl + this.ep_archivedProjects + "?token=" + this.Token;
    };
    ApiService.prototype.getRequestError = function () {
        return this.requestError;
    };
    ApiService.prototype.getArchivedPostsDetails = function (id) {
        return this.apiUrl + this.ep_archivedPost + "/" + id + "?token=" + this.Token;
    };
    ApiService.prototype.getArchivedPosts = function () {
        return this.apiUrl + this.ep_archivedPost + "?token=" + this.Token;
    };
    ApiService.prototype.getForumLikesCount = function (forumPostId, likes) {
        return this.apiUrl + this.ep_forumLikesCount + "/" + forumPostId + "/" + likes + "?token=" + this.Token;
    };
    ApiService.prototype.getForumDislikesCount = function (forumPostId, dislikes) {
        return this.apiUrl + this.ep_forumDislikesCount + "/" + forumPostId + "/" + dislikes + "?token=" + this.Token;
    };
    ApiService.prototype.getForumCommentsCount = function (forumPostId) {
        return this.apiUrl + this.ep_fetchForumCommentsCount + "/" + forumPostId + "?token=" + this.Token;
    };
    ApiService.prototype.getPostCommentsEndpoint = function (id, commentsCount) {
        return this.apiUrl + this.ep_comments + "/" + id + "/" + commentsCount + "?token=" + this.Token;
    };
    ApiService.prototype.getFetchCommentsEndpoint = function (id) {
        return this.apiUrl + this.ep_comments + "/" + id + "?token=" + this.Token;
    };
    ApiService.prototype.getForumPostsEndpoint = function () {
        return this.apiUrl + this.ep_forumPosts + "?token=" + this.Token;
    };
    ApiService.prototype.getSubmitDeliverableEndpoint = function (id) {
        return this.apiUrl + this.ep_submitDeliverable + "/" + id + "?token=" + this.Token;
    };
    ApiService.prototype.getDeleteFileEndpoint = function (deleteSeletedFile) {
        return this.apiUrl + this.ep_deleteFile + "/" + deleteSeletedFile + "?token=" + this.Token;
    };
    ApiService.prototype.getFetchGroupsEndPoint = function () {
        return this.apiUrl + this.ep_fetchAllGroups + "/" + this.userType + "?token=" + this.Token;
    };
    ApiService.prototype.getApproveDeliverableEndPoint = function () {
        return this.apiUrl + this.ep_approveDeliverable;
    };
    ApiService.prototype.getChatEndPoint = function () {
        return this.apiUrl + this.ep_chats;
    };
    ApiService.prototype._getLoginEndpoint = function () {
        return this.apiUrl + this.ep_login;
    };
    ApiService.prototype._getUploadFilesEndPoint = function () {
        return this.apiUrl + this.ep_uploadFiles;
    };
    ApiService.prototype._setSupervisors = function (data) {
        //this.supervisors = data
        this.supervisors = [
            {
                'id': 1,
                'name': 'Nsabagwa Mary',
                'groupsCount': 2
            },
            {
                'id': 2,
                'name': 'Paul Bakaki',
                'groupsCount': 4
            },
            {
                'id': 3,
                'name': 'Grace Kobusinge',
                'groupsCount': 0
            },
            {
                'id': 4,
                'name': 'Agaba Joab Ezra',
                'groupsCount': 0
            },
            {
                'id': 5,
                'name': 'Grace B. Kamulegeya',
                'groupsCount': 1
            },
            {
                'id': 6,
                'name': 'Engineer Bainomugisha',
                'groupsCount': 10
            },
            {
                'id': 7,
                'name': 'Mercy Amiyo',
                'groupsCount': 0
            },
            {
                'id': 8,
                'name': 'Emmanuel Eilu',
                'groupsCount': 9
            },
            {
                'id': 9,
                'name': 'Irene Nakiyimba',
                'groupsCount': 0
            },
            {
                'id': 10,
                'name': 'Richard Mayanja',
                'groupsCount': 3
            },
            {
                'id': 11,
                'name': 'Amina Zawedde',
                'groupsCount': 0
            },
            {
                'id': 12,
                'name': 'Emmanuel Mugejera',
                'groupsCount': 1
            },
            {
                'id': 13,
                'name': 'Paul Ssemalulu',
                'groupsCount': 2
            },
            {
                'id': 14,
                'name': 'Fiona Tulinayo',
                'groupsCount': 3
            },
            {
                'id': 15,
                'name': 'Marriette Katarahweirwe',
                'groupsCount': 5
            },
            {
                'id': 16,
                'name': 'Halim Chongomweru',
                'groupsCount': 0
            },
            {
                'id': 17,
                'name': 'Diana Nakiyinji',
                'groupsCount': 1
            },
            {
                'id': 18,
                'name': 'Drake K Mirembe',
                'groupsCount': 0
            },
            {
                'id': 19,
                'name': 'Ruth Mbabazi Mutebi',
                'groupsCount': 7
            },
            {
                'id': 20,
                'name': 'Nasser Kimbugwe',
                'groupsCount': 0
            },
            {
                'id': 21,
                'name': 'Innocent Ndibatya',
                'groupsCount': 0
            },
            {
                'id': 22,
                'name': 'Henry Serugunda',
                'groupsCount': 0
            },
            {
                'id': 23,
                'name': 'Dr John Ngubiri',
                'groupsCount': 0
            },
            {
                'id': 24,
                'name': 'rose Nakibuule',
                'groupsCount': 0
            },
            {
                'id': 25,
                'name': 'Michael Kizito',
                'groupsCount': 0
            },
        ];
    };
    ApiService.prototype._onSupervisorSelect = function (name) {
        this.supervisors.filter(function (item) {
            if (item.name == name) {
                item.groupsCount = parseInt(item.groupsCount) + 1;
            }
        });
        return this.supervisors;
    };
    ApiService.prototype._onSupervisorChange = function (name) {
        this.supervisors.filter(function (item) {
            if (item.name == name) {
                item.groupsCount = parseInt(item.groupsCount) - 1;
            }
        });
        return this.supervisors;
    };
    ApiService.prototype._getSupervisors = function () {
        return this.supervisors;
    };
    ApiService.prototype._getApiUrl = function () {
        return this.apiUrl;
    };
    ApiService.prototype._setToken = function (token) {
        if (token) {
            this.Token = token;
        }
    };
    ApiService.prototype._getToken = function () {
        return this.Token;
    };
    ApiService.prototype._hasToke = function () {
        if (this.Token) {
            return true;
        }
        else {
            return false;
        }
    };
    ApiService.prototype._setUserImg = function (img) {
        this.userImg = img;
    };
    ApiService.prototype._getUserImg = function () {
        return this.userImg;
    };
    ApiService.prototype._setUserName = function (userName) {
        this.userName = userName;
    };
    ApiService.prototype._getUserName = function () {
        return this.userName;
    };
    ApiService.prototype._setUserPwd = function (pwd) {
        this.userPwd = pwd;
    };
    ApiService.prototype._getUserPwd = function () {
        return this.userPwd;
    };
    ApiService.prototype._setUserType = function (user) {
        this.userType = user;
    };
    ApiService.prototype._getUserType = function () {
        return this.userType;
    };
    ApiService.prototype._setBreadcrumb = function (level, pathName, className) {
        this.breadcrumb = [
            {
                'level': level,
                'name': pathName,
                'className': className
            }
        ];
    };
    ApiService.prototype._updateBreadcrumb = function (level, name, className) {
        var _this = this;
        var flag = false;
        this.breadcrumb.filter(function (item) {
            if (item.level == level) {
                flag = true;
                item.name = name;
            }
            if ((parseInt(level) == 1) && (_this.breadcrumb.length > 1)) {
                _this._setHomeValue('home');
                var size = _this.breadcrumb.length;
                for (var i = 1; i < size; i++) {
                    _this.breadcrumb.pop();
                }
            }
        });
        if (!flag) {
            this.breadcrumb.push({ 'level': level, 'name': name });
        }
    };
    ApiService.prototype._getBreadcrumb = function () {
        if (this.breadcrumb) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].from(this.breadcrumb);
        }
    };
    ApiService.prototype._setHomeValue = function (value) {
        this.homeBtn = value;
    };
    ApiService.prototype._getHomeValue = function () {
        return this.homeBtn;
    };
    /* Toggle container visibility */
    ApiService.prototype._slideToggle = function (container, icon, maxSize) {
        $("." + container + "").slideToggle("fast", "linear");
        if (maxSize) {
            $("." + maxSize + "").toggleClass("hide");
        }
    };
    ApiService.prototype._fetchLogFiles = function () {
        this.logs = [
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:05:49 -0800] "GET /twiki/bin/edit/Main/Double_bounce_sender?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12846',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:06:51 -0800] "GET /twiki/bin/rdiff/TWiki/NewUserTemplate?rev1=1.3&rev2=1.2 HTTP/1.1" 200 4523',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:10:02 -0800] "GET /mailman/listinfo/hsdivision HTTP/1.1" 200 6291',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:11:58 -0800] "GET /twiki/bin/view/TWiki/WikiSyntax HTTP/1.1" 200 7352',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:20:55 -0800] "GET /twiki/bin/view/Main/DCCAndPostFix HTTP/1.1" 200 5253',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:23:12 -0800] "GET /twiki/bin/oops/TWiki/AppendixFileSystem?template=oopsmore¶m1=1.12¶m2=1.12 HTTP/1.1" 200 11382',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:24:16 -0800] "GET /twiki/bin/view/Main/PeterThoeny HTTP/1.1" 200 4924',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:29:16 -0800] "GET /twiki/bin/edit/Main/Header_checks?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:30:29 -0800] "GET /twiki/bin/attach/Main/OfficeLocations HTTP/1.1" 401 12851',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:31:48 -0800] "GET /twiki/bin/view/TWiki/WebTopicEditTemplate HTTP/1.1" 200 3732',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:32:50 -0800] "GET /twiki/bin/view/Main/WebChanges HTTP/1.1" 200 40520',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:33:53 -0800] "GET /twiki/bin/edit/Main/Smtpd_etrn_restrictions?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:35:19 -0800] "GET /mailman/listinfo/business HTTP/1.1" 200 6379',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:36:22 -0800] "GET /twiki/bin/rdiff/Main/WebIndex?rev1=1.2&rev2=1.1 HTTP/1.1" 200 46373',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:37:27 -0800] "GET /twiki/bin/view/TWiki/DontNotify HTTP/1.1" 200 4140',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:39:24 -0800] "GET /twiki/bin/view/Main/TokyoOffice HTTP/1.1" 200 3853',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:43:54 -0800] "GET /twiki/bin/view/Main/MikeMannix HTTP/1.1" 200 3686',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:45:56 -0800] "GET /twiki/bin/attach/Main/PostfixCommands HTTP/1.1" 401 12846',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:47:12 -0800] "GET /robots.txt HTTP/1.1" 200 68',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:47:46 -0800] "GET /twiki/bin/rdiff/Know/ReadmeFirst?rev1=1.5&rev2=1.4 HTTP/1.1" 200 5724',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:49:04 -0800] "GET /twiki/bin/view/Main/TWikiGroups?rev=1.2 HTTP/1.1" 200 5162',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:50:54 -0800] "GET /twiki/bin/rdiff/Main/ConfigurationVariables HTTP/1.1" 200 59679',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:52:35 -0800] "GET /twiki/bin/edit/Main/Flush_service_name?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:53:46 -0800] "GET /twiki/bin/rdiff/TWiki/TWikiRegistration HTTP/1.1" 200 34395',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:54:55 -0800] "GET /twiki/bin/rdiff/Main/NicholasLee HTTP/1.1" 200 7235',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:56:39 -0800] "GET /twiki/bin/view/Sandbox/WebHome?rev=1.6 HTTP/1.1" 200 8545',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:16:58:54 -0800] "GET /mailman/listinfo/administration HTTP/1.1" 200 6459',
            },
            {
                'log': 'lordgun.org - - [07/Mar/2004:17:01:53 -0800] "GET /razor.html HTTP/1.1" 200 2869',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:09:01 -0800] "GET /twiki/bin/search/Main/SearchResult?scope=text®ex=on&search=Joris%20*Benschop[^A-Za-z] HTTP/1.1" 200 4284',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:10:20 -0800] "GET /twiki/bin/oops/TWiki/TextFormattingRules?template=oopsmore¶m1=1.37¶m2=1.37 HTTP/1.1" 200 11400',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:13:50 -0800] "GET /twiki/bin/edit/TWiki/DefaultPlugin?t=1078688936 HTTP/1.1" 401 12846',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:16:00 -0800] "GET /twiki/bin/search/Main/?scope=topic®ex=on&search=^g HTTP/1.1" 200 3675',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:17:27 -0800] "GET /twiki/bin/search/TWiki/?scope=topic®ex=on&search=^d HTTP/1.1" 200 5773',
            },
            {
                'log': 'lj1036.inktomisearch.com - - [07/Mar/2004:17:18:36 -0800] "GET /robots.txt HTTP/1.0" 200 68',
            },
            {
                'log': 'lj1090.inktomisearch.com - - [07/Mar/2004:17:18:41 -0800] "GET /twiki/bin/view/Main/LondonOffice HTTP/1.0" 200 3860',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:21:44 -0800] "GET /twiki/bin/attach/TWiki/TablePlugin HTTP/1.1" 401 12846',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:22:49 -0800] "GET /twiki/bin/view/TWiki/ManagingWebs?rev=1.22 HTTP/1.1" 200 9310',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:23:54 -0800] "GET /twiki/bin/statistics/Main HTTP/1.1" 200 808',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:26:30 -0800] "GET /twiki/bin/view/TWiki/WikiCulture HTTP/1.1" 200 5935',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:27:37 -0800] "GET /twiki/bin/edit/Main/WebSearch?t=1078669682 HTTP/1.1" 401 12846',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:28:45 -0800] "GET /twiki/bin/oops/TWiki/ResetPassword?template=oopsmore¶m1=1.4¶m2=1.4 HTTP/1.1" 200 11281',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:29:59 -0800] "GET /twiki/bin/view/TWiki/ManagingWebs?skin=print HTTP/1.1" 200 8806',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:31:39 -0800] "GET /twiki/bin/edit/Main/UvscanAndPostFix?topicparent=Main.WebHome HTTP/1.1" 401 12846',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:35:35 -0800] "GET /twiki/bin/view/TWiki/KlausWriessnegger HTTP/1.1" 200 3848',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:39:39 -0800] "GET /twiki/bin/view/Main/SpamAssassin HTTP/1.1" 200 4081',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:42:15 -0800] "GET /twiki/bin/oops/TWiki/RichardDonkin?template=oopsmore¶m1=1.2¶m2=1.2 HTTP/1.1" 200 11281',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:46:17 -0800] "GET /twiki/bin/rdiff/TWiki/AlWilliams?rev1=1.3&rev2=1.2 HTTP/1.1" 200 4485',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:47:43 -0800] "GET /twiki/bin/rdiff/TWiki/AlWilliams?rev1=1.2&rev2=1.1 HTTP/1.1" 200 5234',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:50:44 -0800] "GET /twiki/bin/view/TWiki/SvenDowideit HTTP/1.1" 200 3616',
            },
            {
                'log': '64.242.88.10 - - [07/Mar/2004:17:53:45 -0800] "GET /twiki/bin/search/Main/SearchResult?scope=text®ex=on&search=Office%20*Locations[^A-Za-z] HTTP/1.1" 200 7771',
            },
            {
                'log': '[Sun Mar 7 16:02:00 2004] [notice] Apache/1.3.29 (Unix) configured -- resuming normal operations',
            },
            {
                'log': '[Sun Mar 7 16:02:00 2004] [info] Server built: Feb 27 2004 13:56:37',
            },
            {
                'log': '[Sun Mar 7 16:02:00 2004] [notice] Accept mutex: sysvsem (Default: sysvsem)',
            },
            {
                'log': '[Sun Mar 7 16:05:49 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
            },
            {
                'log': '[Sun Mar 7 16:45:56 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
            },
            {
                'log': '[Sun Mar 7 17:13:50 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
            },
            {
                'log': '[Sun Mar 7 17:21:44 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
            },
            {
                'log': '[Sun Mar 7 17:23:53 2004] statistics: Use of uninitialized value in concatenation (.) or string at /home/httpd/twiki/lib/TWiki.pm line 528.',
            },
            {
                'log': '[Sun Mar 7 17:23:53 2004] statistics: Can\'t create file /home/httpd/twiki/data/Main/WebStatistics.txt - Permission denied',
            },
        ];
        return this.logs;
    };
    ApiService.prototype._fetchChats = function (deliverableTypeId, groupDetails) {
        return this.http.get(this.apiUrl + this.ep_chats + "/" + deliverableTypeId + "/" + this.userType + "/" + groupDetails + "?token=" + this._getToken(), '').map(function (res) { return res.json(); });
    };
    ApiService.prototype._fetchUploadedFiles = function (deliverableTypeId, groupdetails) {
        return this.http.get(this.apiUrl + this.ep_fetchFiles + "/" + deliverableTypeId + "/" + this.userType + "/" + groupdetails + "?token=" + this._getToken(), '').map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/assets/img/bg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.5f387a445a8947c4b607.png";

/***/ }),

/***/ "../../../../../src/assets/img/loaders/default.gif":
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhIAAgAIQAADQyNKyqrGxqbNTW1ExOTOzu7ISChDw+PMTGxHx6fOTi5Dw6PHRydFxaXPz+/MzOzDQ2NLSytGxubNza3PT29JSWlERCROzq7GRiZNTS1P///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBAAaACwAAAAAIAAgAAAFUqAmjuSoMBaEIWXrutMBQQAdvbgr0UAPHJScULTo0Y6PofDgaw6UOcOxBiA4oLhCo3l4YnGUgERSuXzP6LR6zW673/C4fE6v2+/4vH7P7/v/fiEAIfkECQQAGgAsAAAAACAAIACENDI0nJqcXF5c1NLU7OrsREZEbG5s9Pb0PDo8vLq8bGps3Nrc9PL0VFJUdHZ0/P78NDY0pKKkZGJk7O7sTEpMdHJ0/Pr8PD48zMrM3N7c////AAAAAAAAAAAAAAAAAAAABVSgJo4kiSnQVS1l67oJBMgAMrx4axX0DAiPnFCzoBkhjGEu06NdDkrcQ+ADzBzR3KJglTUI2dwkYDBEoOG0es1uu9/wuHxOr9vv+Lx+z+/7/4CBfiEAIfkECQQAGgAsAAAAACAAIACENDI0pKKkZGZk3NrcTEpM7O7shIaEPD48vLq85ObkXFpc/Pr8dHJ0VFJUjI6MzMrMNDY0bGps5OLkTE5M9Pb0REJExMLE7Ors/P78lJKU////AAAAAAAAAAAAAAAAAAAABVSgJo5kqSEKVBmF6b5kAADQ3CRwTl7H7AMCjE5noRlrEMkw9/jNaoMljEI4ziYUKczSe0Ie2lzCIWBkcOG0es1uu9/wuHxOr9vv+Lx+z+/7/4CBfCEAIfkECQQAFQAsAAAAACAAIACENDI0nJqcdHJ0zM7MXF5c5ObkPD48hIaE5OLkvLq81NbU9PL0REZENDY0pKKkdHZ01NLUZGJkREJElJaU/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVBgJY5kKVKKQplsayYSADCJa5tDA+h7cP+Vh2y4gwBtBJ1y5zi6DsRhzckqMHZYworKQggMBsJkwS2bz+i0es1uu9/wuHxOr9vv+Lx+z+/bQgAh+QQJBAAVACwAAAAAIAAgAIQ0MjScmpzMzsxsbmzk5uRUVlQ8Pjz08vS8vryEhoQ8Ojzs7uw0NjS0srTU1tR0dnTs6uxEQkT8+vzMysyUkpT///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFUWAljmQ5LgJhrqwpJQwADE5rm5QcA0xw/5WIjKeDAG0K4hAwObYewxhDsXCyIIUdwICwtiSIQGNS9ZrP6LR6zW673/C4fE6v2+/4vH7P7/tbIQAh+QQJBAAYACwAAAAAIAAgAIQ0MjSUlpTExsRsamzk5uRUUlQ8Pjy8vrx8enzU1tTs7uw8OjykoqSEhoQ0NjTMzsxsbmzs6uxEQkTEwsR8fnzc2tz08vSsqqz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAFUCAmjmRpnmhaTsgQWGpcMg5gF4ksK4ZdAw6BTlWx+YALwhBlMfyMgMMSdalZAQbFFPVoICgQRG5LLpvP6LR6zW673/C4fE6v2+/4vH7PP4UAACH5BAkEABcALAAAAAAgACAAhDQyNJyanMzOzGxqbOzq7ERCRMTGxKyqrISChPz6/Dw+PNza3HRydExOTDQ2NKSipGxubPTy9ERGRMzKzLSytPz+/Nze3P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVQ4CWOZGmeaGouz0GosBkAtDLF+OI4NFAYOBiFxuMpBMHUhNejSSLJUwJSBBRfUVPiARk0aIhKFmaxjM/otHrNbrvf8Lh8Tq/b7/i8fs/v30MAIfkECQQAFwAsAAAAACAAIACENDI0rKqsbGps1NbUTEpM9PL0vL68hIaEPDo8tLa05OLkXFpc/P78lJKUNDY0rK6sdHJ03NrcVFJU9Pb0zMrMPD48lJaU////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU3gJY5kaZ5oqq5sSS2OlLTtgAAOAAQMrTY6nO7gS1mEOoeDVzQpKsmooWkaCAjQ5IOKmlgdkAJ3TC6bz+i0es1uu9/wuHxOr9vv+DwqBAAh+QQJBAAYACwAAAAAIAAgAIQ0MjScnpzU0tRsamzs6uxERkS8uryMjoz09vREQkQ8Ojzk4uR0dnTEwsT8/vw0NjSsqqxsbmz08vRUUlSUlpT8+vzk5uTExsT///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAFVCAmjmRpnmiqriy6CEgrIwzwJJfMBkAPFBKdKmLzDYLC06H3KFKSJ8LEx7RATQhDoNC8Wa+mCqQJaIBPjsMjEju73/C4fE6v2+/4vH7P7/v/gIFuIQAh+QQJBAAdACwAAAAAIAAgAIQ0MjScnpzU0tRsamy0trRUUlTs6uw8PjysqqzEwsT09vSMioykpqS8vrxkYmRERkT8/vw0NjSkoqTk4uR8fny8urxUVlT08vREQkSsrqzMysz8+vyUkpT///8AAAAAAAAFWGAnjmRpnmiqrmzrthsRCC+rOAAQMbXa5DmMoYeq6I6HCdF0sQAjgAVkWboEBkBAg2qCMA5QzoZr0jgjFLKJk3uoS5PCIfOu2+/4vH7P7/v/gIGCg4SFbyEAIfkECQQAHQAsAAAAACAAIACENDI0nJ6cbGps1NbUTE5M7O7stLK0hIKEXFpcPDo85OLk/Pr8rKqsfH58vL68lJKUZGJk7OrsNDY0pKKkbG5sVFJU9Pb0tLa0jIqMXF5cPD485Obk/P78////AAAAAAAABVtgJ45kaZ5oqq5s677we1GHEqsOoBPWjWI6HabnK+UkAOSjWOIYIDoJIsJsNpCADKdaCiQJW+7IghEENuISBZAYpEUcpITxFk00EGp9z+/7/4CBgoOEhYaHiIAhACH5BAkEACIALAAAAAAgACAAhTQyNJyenGxqbNTS1FRSVOzu7LS2tISGhERCRNze3KyurHx6fFxeXPz6/MTGxJSSlDw6PHRydOTm5DQ2NKSipGxubNza3FRWVPT29Ly+vIyKjExKTOTi5LSytGRiZPz+/MzKzJSWlP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZqQJFwSCwaj8ikcslsOp/QqHRKrUo5DIimYS0eAGBQlxgCTCaD8RDzEFQeCfXQAd5g5KKMGXGXfwILYngiDRoRgnIKEwAIg3oTF4N5ARKSlpdCBhQFgx1gHoMBZgSDGAcRaZiqq6ytrq9LQQAh+QQJBAAjACwAAAAAIAAgAIU0MjScnpzU0tRkZmS8urzs6uxMSkyMioz09vQ8Pjy0srTMyszc2tx0cnQ8OjysqqzEwsT08vRUVlSUlpT8/vx8enw0NjSkoqTU1tS8vrzs7uyMjoz8+vxERkS0trTMzszc3tx0dnRcXlz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGacCRcEgsGo/IpHLJbDqf0Kh0Sq1ar9isVdDpQLTCEAAgAo8e44l5xMBQ1pqGhGAOjBPmjIW8/ngQa4EjGAcKZhwJABZfWggOY3RgCxUXb4KXmFUICwWHIgAJIGAFexaGWhQbDgMRma4jQQAh+QQJBAAeACwAAAAAIAAgAIQ0MjScmpxkZmTMzsxMSkzs7uzMysyEgoSsqqxUVlT8+vyMjow8PjykoqR0dnTc3txUUlT09vS0srQ0NjTU1tRMTkz08vSMioysrqxcXlz8/vyUkpSkpqR8enz///8AAAAFXqAnjmRpnmiqrmzrvnAsz3Rt33iu76JCFTyPAMB47CKACUDC20wywKBUg1kYdxIAoMLDKAk8ReNAkZqllIGGh9BueA6lgEdJQAznvEyB4Vh4AUkOPBdaczsFBw5XKSEAIfkECQQAHQAsAAAAACAAIACENDI0pKKk1NbUZGZkREZE9PL0xMLEhIaEPD485OLkVFZU/Pr8zMrMrKqsbG5sTE5MjI6MNDY03N7cTEpM9Pb0xMbEREJE7Ors/P78zM7MrK6sdHJ0lJKU////AAAAAAAABV1gJ45kaZ5oqq5s675wLM90bd94ru98r0qJXiAC0PAGAMCGZyAQGL7owneIKC67QrLIc0QIwR1GQomadZQpb0gQ7BaPJEQmkaA4AEQm1iAGUAllMRtJAzwZEwQVMCEAIfkECQQAHQAsAAAAACAAIACENDI0nJ6c1NLUbGps7OrsREZEfH589Pb0xMLEVFJU3N7cdHZ09PL0TE5MjIqM/P78zMrMNDY0tLK03NrcdHJ07O7sTEpM/Pr8xMbEVFZU5OLkfHp8jI6M////AAAAAAAABWRgJ45kaZ5oqq5s675wLM90bd94ru987/+tg+DAYyQADZ4AwORdFhGK7wF0Iia8xyASwewuBWaAJ2kMCNW0SUOhKFBU2YYpLR0oEcMlxmE6TBBMAFgwFxISRCUVFgAZDDxCiSghACH5BAkEAB4ALAAAAAAgACAAhDQyNKSipGxubNTS1Ozq7ExOTISChMTCxPT29FxaXOTi5IyOjDw+PKyurHR2dMzKzPz+/GRiZDQ2NNza3PTy9FRWVIyKjMTGxPz6/FxeXOTm5JSSlLSytHx6fP///wAAAAVkoCeOZGmeaKqubOu+cCzPdG3feK7vfO//wKAwpel0NDwHQNLhWQAACw/RaCCGQszkChtcIChEAlCgvBqSKGqSBjxeBmgGhelIBJiXIlN5p8AkGBsCFzwcaQyAORdQBT0HAUgvIQAh+QQJBAAfACwAAAAAIAAgAIQ0MjScnpxkZmTc2tzs7uxUUlSEhoTEwsQ8Pjzk5uSsrqx0cnT8+vyMjozk4uRkYmRERkR8enw0NjSkpqTc3tz09vRUVlSMiozMysxEQkTs6uy0srR0dnT8/vyUkpT///8FXOAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/0AYQ6Fg8BoAwIUXAUg4PEcBsKjsKpCkYtexODE8zQQM1Fh5F0BmwENIAAGeBwCh9AhGVP4qkBg6OwdJEgk7GlkPZyshACH5BAkEABsALAAAAAAgACAAhDQyNJyanNTW1GxqbExOTOzu7LSytLy+vDw+POTi5IyKjFxeXPz6/MTGxOzq7DQ2NKSipHRydFRWVPTy9Ly6vMTCxERCROTm5JSSlGRiZPz+/P///wAAAAAAAAAAAAAAAAVZ4CaOZGmeaKqubOu+cCzPdG3feK7vvMoIl94C8DDwHsQFzwIAKHgD4mHZDPAokkWBx4g8JJNdAgmY6hiDB2G701wYvdEFUuFpCMT6GdE07hoRGHBxhIWGOSEAIfkECQQAFwAsAAAAACAAIACENDI0nJ6cbGps3NrcTE5MhIKE9PL0xMLEPDo8rK6sdHZ0pKak5OLk/P78fH58NDY0pKKkXF5clJKU9Pb0PD48fHp85Obk////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU3gJY5kaZ5oqq5s675wLM90bd94ru+mFSGKyc4BKC52FcADANkFigQDUingSYoOnmNZ3TEEjwOvIVAOdgbEMsELICJSnnxOr9vv+LwuBAAh+QQJBAAXACwAAAAAIAAgAIQ0MjScmpxsbmzU1tSEgoTs7uxERkSsqqx8enzs6uw8OjykoqTc3tyMjoz8+vycnpx0cnTc2txUVlR8fnw8PjyUkpT8/vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFT+AljmRpnmiqrmzrvnAsz3Rt3200CYuDiwwFYIiw/CrDoSLxeyQBlMLv8Az8Ls5h43qBJBncxtBgvIoBEu6lQIAM1PC4fE6v2+/4vH4vCgEAIfkECQQAFgAsAAAAACAAIACENDI0pKak3NrcjIqMVFJUxMbE9PL0REJEtLK0/Pr8PDo87OrsXFpczM7MNDY0rKqs3N7cVFZU9Pb0vLq8/P781NLU////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVCgJY5kaZ5oqq5s675wLM80LFUCVZvTAQARwW4EUQAcR0JiaAn8ng7hEHGsOhZMJ3TAtDSsAR1TEnEcCt1RomFIu9/wuHxOr9vv+Lx+zyeFAAAh+QQJBAAXACwAAAAAIAAgAIQ0MjScmpzU1tRsamz08vRUUlS8urxEQkSsqqzk4uSEgoQ8OjykoqT8+vw0NjScnpzc2tx8enxcXlzEwsTk5uSUkpT8/vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFWeAljmRpnmiqrmzrviqlHE7xNDAKHUDfD7gcySIBOIxIhpCUOPp6DslyBDlafYWpiMDzWSNaUQDpFYQvjcr1MDmPEoiAgeCu2+/4vH7P7/v/gIGCg4SFhiUhACH5BAkEABkALAAAAAAgACAAhDQyNJyanGRmZMzOzLy6vISChERGROzq7ERCRLSytHRydDw6PKSmpMzKzIyOjPT29DQ2NJyenGxqbNTW1MTCxISGhFRSVHx6fPz6/P///wAAAAAAAAAAAAAAAAAAAAAAAAVVYCaOZGmeaKqubJseSUQ8LpssQG4MddpAAGAQceidFLlgMmA0WZQ54KVZEiSFEAeVlEgqIZPtCFOAQhjiEuUiqITT8Lh8Tq/b7/i8fs/v+/+AgYJ5IQAh+QQJBAAVACwAAAAAIAAgAIQ0MjSkpqRsamzU1tRUUlTs7uw8Pjy0trSMiozs6uxkYmT8/vw0NjSsrqx8enzc2txUVlT08vRERkS8uryUlpT///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFUGAljmRpnmiqruPSQIyEFGyNADhORLU6MACgkNJLBXJIRRHVCDqBguUpYUDiGtLTQRh0LLKnB0LgOHzB6LR6zW673/C4fE6v2+/4vH7P79dDACH5BAkEABcALAAAAAAgACAAhDQyNKSipNTW1GxqbPTy9Ly+vExOTHx+fOTi5LSytHRydPz6/MzKzFxeXOzq7DQ2NKSmpGxubFRSVIyOjOTm5Pz+/MzOzP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVS4CWOZGmeKElZTuqiTgQAj0K8+LU0cz8sORdj9qDNBMFUokcEFJIowaNYpCGgp8qBCZhgUYuA4WGAVL7otHrNbrvf8Lh8Tq/b7/i8fs/v+/8lIQAh+QQJBAAXACwAAAAAIAAgAIQ0MjSsqqxkZmTk4uRMSkw8Pjy8vrx8fnz09vR0dnTs7uxcXlxERkTExsQ8Ojy0srRsbmzk5uRMTkxEQkSUkpT8+vzMysz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFTuAljmRpnihpLM50RGlsBkBdM7AsK45tHzpZw2djBGMWYk1yTCEkRAelmbIUfAIENRWhQBKPynZMLpvP6LR6zW673/C4fE6v2+/4vN4dAgAh+QQJBAAXACwAAAAAIAAgAIQ0MjScnpzU0tRsamxcWlzs7uxERkS0trSEhoT8+vw8Ojzk4uTMysyUkpQ0NjSkpqTc2txkYmT09vRMSky8vryMioz8/vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFU+AljqPFBA9ErmxLFhEAOACSuHg70DId5EDRoieTTYJABo/GROYKvKKD4MxVmD1KFZdoOGiGwxYoEUAk47R6zW673/C4fE6v2+/4vH7P7/v/gHQhACH5BAkEABIALAAAAAAgACAAhDQyNJyenNTS1Ozq7FRWVExOTOTi5Pz6/Dw6PMzKzGxqbDQ2NKSipNTW1PTy9OTm5Pz+/GxubP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVWoCSOpOQEUcQ4Zeu6RrEAdGG8eAsp9EwrkJxQMkD4ZgvEYJh7IGm9BxN3IPQAM8JhikssfNgEN9dQIBCRxnjNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhCEAOw=="

/***/ }),

/***/ "../../../../../src/assets/img/muk.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "muk.36aedd79a4c7beb29e36.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map