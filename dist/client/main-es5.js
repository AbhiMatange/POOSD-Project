function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Navbar-->\r\n<mdb-navbar SideClass=\"navbar mb-5 navbar-expand-lg navbar-dark black\" [containerInside]=\"false\">\r\n\r\n  <!-- Navbar brand -->\r\n  <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">Knight's Path</a></mdb-navbar-brand>\r\n\r\n  <!-- Collapsible content -->\r\n  <links>\r\n\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect href=\"/\">Home<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <div *ngIf=\"isUserLoggedIn\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" href=\"/profile\" mdbWavesEffect>Profile</a>\r\n        </li> \r\n      </div>\r\n      <div *ngIf=\"isUserLoggedIn\">\r\n         <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" href=\"/planner\" mdbWavesEffect>Graduation Plan</a>\r\n        </li> \r\n      </div>\r\n    </ul>\r\n\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav ml-auto nav-flex-icons\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\">\r\n          <div class=\"btn-group\" mdbDropdown>\r\n            <mdb-icon fas icon=\"user\" mdbDropdownToggle></mdb-icon>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-primary\">\r\n              <div *ngIf=\"!isUserLoggedIn\">\r\n                <a class=\"dropdown-item\" href=\"/login\">Login</a> \r\n                <a class=\"dropdown-item\" href=\"/register\">Sign Up</a>\r\n              </div>\r\n              <div *ngIf=\"isUserLoggedIn\">\r\n                <a class=\"dropdown-item\" href=\"/logout\">Logout</a>\r\n              </div>\r\n             \r\n            </div>\r\n          </div>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </links>\r\n  <!-- Collapsible content -->\r\n\r\n</mdb-navbar>\r\n<!--/.Navbar-->\r\n\r\n<!-- main content container -->\r\n<div class=\"jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n\t</div>\r\n</div>\r\n\r\n<app-alerts></app-alerts>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class =\"text-center\">\r\n    <header>\r\n        <h1> Knight's Path</h1>\r\n    </header>\r\n    <h2> Want to see your course plan? </h2>\r\n    <p> You've come to the right place.</p>\r\n\r\n\r\n    <img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/8/81/University_of_Central_Florida_seal.svg/1200px-University_of_Central_Florida_seal.svg.png\"\r\n        style=\"width:40%;height:40%;\"\r\n    >\r\n\r\n    <footer>\r\n        <br>\r\n        2020 Knight's Path Course Planner\r\n        <br>\r\n        <a href=\"https://github.com/ellie7000/POOSD-Project\">Group 11\r\n            Project</a>&nbsp;\r\n    </footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div class=\"row\">\r\n  <div class=\"col-sm-8 offset-sm-2\">\r\n    <!-- Default form login -->\r\n    <form class=\"text-center border border-light p-5\">\r\n\r\n      <p class=\"h4 mb-4\">Sign in</p>\r\n\r\n      <!-- Username -->\r\n      <input\r\n        class=\"form-control mb-4\"\r\n        type=\"text\"\r\n        name=\"username\"\r\n        placeholder=\"Username *\"\r\n        [(ngModel)]=username>\r\n\r\n      <!-- Password -->\r\n      <input\r\n        class=\"form-control mb-4\"\r\n        type=\"password\"\r\n        name=\"password\"\r\n        placeholder=\"Password *\"\r\n        [(ngModel)]=password>\r\n\r\n      <!-- Sign in button -->\r\n      <button mdbBtn color=\"black\" block=\"true\" class=\"my-4\" type=\"submit\"\r\n        (click)=\"loginUser()\">Sign in</button>\r\n      <!-- Register -->\r\n      <p>Not a member?\r\n        <a href=\"/register\">Sign Up</a>\r\n      </p>\r\n\r\n    </form>\r\n    <!-- Default form login -->\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>logout works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/planner/planner.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/planner/planner.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPlannerPlannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"text-center\">\r\n     <div class=\"pb-4\">\r\n        <img src=\"https://i.pinimg.com/originals/bc/3a/f1/bc3af19f458ebfcb411463725fd1e8ab.png\"\r\n            style=\"width:10%;height:10%;\">\r\n    </div>\r\n    <h2>\r\n        My UCF Graduation Plan\r\n    </h2>\r\n    <button mdbBtn color=\"yellow\" (click)=\"basicModal.show()\">View</button>\r\n</div>\r\n\r\n<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\"\r\n    role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog-scrollable modal-frame modal-bottom modal-fluid\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <br>\r\n                <button type=\"button\" class=\"close pull-right\"\r\n                    aria-label=\"Close\" (click)=\"basicModal.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row flex-row flex-nowrap\">\r\n                        <div class=\"col-3\" *ngFor=\"let yearly of mp.value.entries()\">\r\n                            <div class=\"text-center\">\r\n                                <h2>{{yearly[0]}}</h2>\r\n                            </div>\r\n                            <div *ngFor=\"let semesterly of yearly[1].entries()\">\r\n                                <div class=\"pb-3\">\r\n                                    <mdb-card>\r\n                                        <div *ngIf=\"semesterly[0]==='SPRING'\">\r\n                                            <mdb-card-img\r\n                                                src=\"https://business.ucf.edu/wp-content/uploads/2014/11/millican-hall-reflecting-pond.jpg\"\r\n                                                alt=\"Card image cap\"></mdb-card-img>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"semesterly[0]==='SUMMER'\">\r\n                                            <mdb-card-img\r\n                                                src=\"https://www.ucf.edu/admissions/undergraduate/wp-content/uploads/sites/4/2018/09/Campus-VistsTours-header-1600x550-1600x500.jpg\"\r\n                                                alt=\"Card image cap\"></mdb-card-img>\r\n                                        </div>\r\n\r\n                                        <div *ngIf=\"semesterly[0]==='FALL'\">\r\n                                            <mdb-card-img\r\n                                                src=\"https://apopka-1x1yusplq.stackpathdns.com/wp-content/uploads/2019/10/785_university_of_central_florida_02.jpg\"\r\n                                                alt=\"Card image cap\"></mdb-card-img>\r\n                                        </div>\r\n\r\n                                        <mdb-card-body>\r\n\r\n                                            <mdb-card-title>\r\n                                                <h4>{{semesterly[0]}}\r\n                                                    {{yearly[0]}}</h4>\r\n                                            </mdb-card-title>\r\n\r\n                                            <mdb-card-text>\r\n                                                <ul>\r\n                                                    <span *ngFor=\"let c of\r\n                                                        semesterly[1]\">\r\n\r\n                                                        <li>{{c.courseInfo.name}}</li>\r\n                                                    </span></ul>\r\n                                            </mdb-card-text>\r\n\r\n                                        </mdb-card-body>\r\n                                    </mdb-card></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/course/course.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/course/course.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileCourseCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"modal-dialog-scrollable\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n                (click)=\"modalRef.hide()\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n            <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{course.name}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <h5>\r\n                Info:\r\n            </h5>\r\n            Course Code: {{course.courseCode}}\r\n            <br>\r\n            Credits: {{course.credits}}\r\n            <br>\r\n            <div *ngIf=\"listName==='coursesToTake'\">\r\n                Projected Grade: {{userGrade}}\r\n            </div>\r\n            <div *ngIf=\"listName==='coursesTaken'\">\r\n                Grade: {{userGrade}}\r\n            </div>\r\n            <select class=\"browser-default custom-select\"\r\n                [(ngModel)]=\"userGrade\">\r\n                <option *ngFor=\"let grade of grades\">\r\n                    {{ grade }}\r\n                </option>\r\n            </select>\r\n            <br>\r\n            Semester: {{userSemester}}\r\n            <select class=\"browser-default custom-select\"\r\n                [(ngModel)]=\"userSemester\">\r\n                <option *ngFor=\"let semester of semesters\">\r\n                    {{ semester }}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-danger\"\r\n                (click)=\"modalRef.hide(); onDelete()\" mdbWavesEffect>Delete</button>\r\n            <div *ngIf=\"listName==='coursesToTake'\">\r\n                <button mdbBtn type=\"button\" class=\"btn\" color=\"black\"\r\n                (click)=\"modalRef.hide(); onMove()\" mdbWavesEffect>Move To Taken List</button>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-success\"\r\n                (click)=\"modalRef.hide(); onSave()\" mdbWavesEffect>Save</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/courses/courses.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/courses/courses.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileCoursesCoursesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"modal-dialog-scrollable\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n                (click)=\"modalRef.hide()\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n            <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Courses I've Taken:</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <input class=\"form-control mb-10\"\r\n                type=\"text\"\r\n                placeholder=\"Search\"\r\n                name=\"filterSearch\"\r\n                [(ngModel)]=\"filterQuery\">\r\n\r\n            <div *ngFor=\"let course of courses | coursefilter :\r\n                filterQuery\">\r\n                <label>\r\n                    <input type=\"checkbox\" [default]=\"false\"\r\n                        value=\"{{course._id}}\" (click)=\"onAdd(course.name)\" />\r\n                    {{course.courseCode}}: {{course.name}}\r\n                </label>\r\n                <br>\r\n            </div>\r\n\r\n            <div *ngIf=\"courses.length == 0\">\r\n                <div class=\"text-center pt-4\">\r\n                    <div class=\"spinner-border\" role=\"status\">\r\n                        <span class=\"sr-only\">Loading...</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\"\r\n                (click)=\"modalRef.hide(); onSave()\" mdbWavesEffect>Save</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/major/major.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/major/major.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileMajorMajorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n            (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n        <h4 class=\"modal-title w-100\" id=\"myModalLabel\">My Major</h4>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n        <select class=\"browser-default custom-select\"\r\n            [(ngModel)]=\"userMajorName\">\r\n            <option selected>Select Major</option>\r\n            <option *ngFor=\"let major of majors\">\r\n                {{ major.name }}\r\n            </option>\r\n\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"modalRef.hide(); onSave()\" mdbWavesEffect>Save</button>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\">\r\n    <div class=\"pb-4\">\r\n        <img src=\"https://i.pinimg.com/originals/bc/3a/f1/bc3af19f458ebfcb411463725fd1e8ab.png\"\r\n            style=\"width:10%;height:10%;\">\r\n    </div>\r\n\r\n    <h2>\r\n        My Information\r\n    </h2>\r\n    <br>\r\n\r\n    <div class=\"row mb-2\">\r\n        <div class=\"col\">\r\n            <h4>\r\n                Major: {{major}} \r\n                <span class = \"pl-2\">\r\n                    <mdb-icon far icon=\"edit\" (click)=\"openMajor()\"></mdb-icon>\r\n                </span>\r\n            </h4>\r\n             <button mdbBtn color=\"yellow\" (click)=\"openRequiredCourses()\">Required Courses</button>\r\n        </div>\r\n    </div>\r\n\r\n    <br>\r\n    <h2>\r\n        Course Planner\r\n    </h2>\r\n    <br>\r\n\r\n    <div class=\"row mb-4\">\r\n        <div class=\"col\">\r\n            <h4>Courses I've Taken:</h4>\r\n            <ul class=\"list-group-flush\">\r\n                <div *ngFor=\"let course of coursesTaken\">\r\n                    <li class=\"list-group-item\">{{course.name}}\r\n                        <span class = \"pl-2\">\r\n                            <mdb-icon far icon=\"edit\" (click)=\"openCourse(course, 'coursesTaken')\"></mdb-icon>\r\n                        </span>\r\n                    </li>\r\n                </div>\r\n            </ul>\r\n            <button mdbBtn color=\"yellow\" (click)=\"openCourses('coursesTaken')\">Add</button>\r\n            \r\n\r\n        </div>\r\n         <div class=\"col\">\r\n            <h4>Courses I Will Take:</h4>\r\n            <ul class=\"list-group-flush\">\r\n                <div *ngFor=\"let course of coursesToTake\">\r\n                    <li class=\"list-group-item\">{{course.name}}\r\n                        <span class = \"pl-2\">\r\n                            <mdb-icon far icon=\"edit\" (click)=\"openCourse(course, 'coursesToTake')\"></mdb-icon>\r\n                        </span>\r\n                    </li>\r\n                </div>\r\n            </ul>\r\n            <button mdbBtn color=\"yellow\" (click)=\"openCourses('coursesToTake')\">Add</button>\r\n\r\n        </div>\r\n    </div>\r\n    \r\n    <h4>GPA:</h4>\r\n    <!--<element onclick=\"gpaCalc\"></element>-->\r\n    <input\r\n        class=\"form-control mb-4\"\r\n        type=\"number\"\r\n        name=\"gpa\"\r\n        placeholder=\"GPA\">\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/required-courses/required-courses.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/required-courses/required-courses.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileRequiredCoursesRequiredCoursesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"modal-dialog-scrollable\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"\r\n                (click)=\"modalRef.hide()\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n            <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Required Courses:</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n            <ul class=\"list-group list-group-flush\">\r\n                <div *ngFor=\"let course of courses\">\r\n                    <li class=\"list-group-item\">\r\n                        Course Name: {{course.name}}\r\n                        <br>\r\n                        Course Code: {{course.courseCode}}\r\n                        <br>\r\n                        Credits: {{course.credits}}\r\n                    </li>\r\n                </div>\r\n            </ul>\r\n\r\n            <div *ngIf=\"courses.length == 0\">\r\n                <div class=\"text-center pt-4\">\r\n                    <div class=\"spinner-border\" role=\"status\">\r\n                        <span class=\"sr-only\">Loading...</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success\"\r\n                (click)=\"modalRef.hide();onSave()\" mdbWavesEffect>Add To My List of Courses To Take</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div class=\"row\">\r\n  <div class=\"col-sm-8 offset-sm-2\">\r\n    <!-- Default form register -->\r\n    <form class=\"text-center border border-light p-5\">\r\n\r\n      <p class=\"h4 mb-4\">Sign up</p>\r\n\r\n      <div class=\"form-row mb-4\">\r\n        <div class=\"col\">\r\n          <!-- First name -->\r\n          <input\r\n            type=\"text\"\r\n            name=\"firstName\"\r\n            class=\"form-control\"\r\n            placeholder=\"First name *\"\r\n            [(ngModel)]=firstName>\r\n        </div>\r\n        <div class=\"col\">\r\n          <!-- Last name -->\r\n          <input\r\n            type=\"text\"\r\n            name=\"lastName\"\r\n            class=\"form-control\"\r\n            placeholder=\"Last name *\"\r\n            [(ngModel)]=lastName>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- E-mail -->\r\n      <input\r\n        type=\"email\"\r\n        name=\"email\"\r\n        class=\"form-control mb-4\"\r\n        placeholder=\"E-mail *\"\r\n        [(ngModel)]=email>\r\n\r\n      <!-- Username -->\r\n      <input\r\n        class=\"form-control mb-4\"\r\n        type=\"text\"\r\n        name=\"username\"\r\n        placeholder=\"Username *\"\r\n        [(ngModel)]=username>\r\n\r\n      <!-- Password -->\r\n      <input\r\n        class=\"form-control mb-4\"\r\n        type=\"password\"\r\n        name=\"password\"\r\n        placeholder=\"Password *\"\r\n        [(ngModel)]=password>\r\n\r\n      <!-- Sign up button -->\r\n      <button mdbBtn color=\"black\" block=\"true\" class=\"my-4\" type=\"submit\"\r\n        (click)=\"onSave()\">Sign Up</button>\r\n    </form>\r\n    <!-- Default form register -->\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");

    var AppComponent = function AppComponent(userService) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.userService = userService;
      this.title = 'client';
      this.userService.isUserLoggedIn.subscribe(function (value) {
        _this.isUserLoggedIn = value;
      });
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"], {
      static: true
    })], AppComponent.prototype, "modal", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var angular_alert_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-alert-module */
    "./node_modules/angular-alert-module/fesm2015/alerts.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _profile_major_major_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./profile/major/major.component */
    "./src/app/profile/major/major.component.ts");
    /* harmony import */


    var _profile_courses_courses_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./profile/courses/courses.component */
    "./src/app/profile/courses/courses.component.ts");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");
    /* harmony import */


    var _pipes_coursefilter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pipes/coursefilter.pipe */
    "./src/app/pipes/coursefilter.pipe.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _planner_planner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./planner/planner.component */
    "./src/app/planner/planner.component.ts");
    /* harmony import */


    var _profile_course_course_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./profile/course/course.component */
    "./src/app/profile/course/course.component.ts");
    /* harmony import */


    var _profile_required_courses_required_courses_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./profile/required-courses/required-courses.component */
    "./src/app/profile/required-courses/required-courses.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"], _profile_major_major_component__WEBPACK_IMPORTED_MODULE_10__["MajorComponent"], _profile_courses_courses_component__WEBPACK_IMPORTED_MODULE_11__["CoursesComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"], _pipes_coursefilter_pipe__WEBPACK_IMPORTED_MODULE_13__["CourseFilterPipe"], _planner_planner_component__WEBPACK_IMPORTED_MODULE_18__["PlannerComponent"], _profile_course_course_component__WEBPACK_IMPORTED_MODULE_19__["CourseComponent"], _profile_required_courses_required_courses_component__WEBPACK_IMPORTED_MODULE_20__["RequiredCoursesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing__WEBPACK_IMPORTED_MODULE_8__["appRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(), angular_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertsModule"].forRoot()],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
      exports: [_profile_major_major_component__WEBPACK_IMPORTED_MODULE_10__["MajorComponent"], _profile_courses_courses_component__WEBPACK_IMPORTED_MODULE_11__["CoursesComponent"], _profile_course_course_component__WEBPACK_IMPORTED_MODULE_19__["CourseComponent"], _profile_required_courses_required_courses_component__WEBPACK_IMPORTED_MODULE_20__["RequiredCoursesComponent"]],
      entryComponents: [_profile_major_major_component__WEBPACK_IMPORTED_MODULE_10__["MajorComponent"], _profile_courses_courses_component__WEBPACK_IMPORTED_MODULE_11__["CoursesComponent"], _profile_course_course_component__WEBPACK_IMPORTED_MODULE_19__["CourseComponent"], _profile_required_courses_required_courses_component__WEBPACK_IMPORTED_MODULE_20__["RequiredCoursesComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: appRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutingModule", function () {
      return appRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./logout/logout.component */
    "./src/app/logout/logout.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _planner_planner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./planner/planner.component */
    "./src/app/planner/planner.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    }, {
      path: 'logout',
      component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"]
    }, {
      path: 'planner',
      component: _planner_planner_component__WEBPACK_IMPORTED_MODULE_7__["PlannerComponent"]
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes);
    /***/

  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var angular_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-alert-module */
    "./node_modules/angular-alert-module/fesm2015/alerts.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(http, router, userService, alerts) {
        _classCallCheck(this, LoginComponent);

        this.http = http;
        this.router = router;
        this.userService = userService;
        this.alerts = alerts;
        this.username = "";
        this.password = "";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginUser",
        value: function loginUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.validate()) {
                      _context.next = 14;
                      break;
                    }

                    _context.prev = 1;
                    _context.next = 4;
                    return this.userService.login(this.username, this.password);

                  case 4:
                    data = _context.sent;
                    this.alerts.setMessage('Successful login', 'success');
                    this.router.navigateByUrl('/profile');
                    _context.next = 12;
                    break;

                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](1);
                    this.alerts.setMessage(_context.t0.error.message, 'error');

                  case 12:
                    _context.next = 15;
                    break;

                  case 14:
                    this.alerts.setMessage("Missing username and/or password", 'error');

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[1, 9]]);
          }));
        }
      }, {
        key: "validate",
        value: function validate() {
          var valid = true;

          if (this.isEmptyOrSpaces(this.username)) {
            valid = false;
          }

          if (this.isEmptyOrSpaces(this.password)) {
            valid = false;
          }

          return valid;
        }
      }, {
        key: "isEmptyOrSpaces",
        value: function isEmptyOrSpaces(str) {
          return str === null || str.match(/^ *$/) !== null || str.length == 0;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: angular_alert_module__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/logout/logout.component.css":
  /*!*********************************************!*\
    !*** ./src/app/logout/logout.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/logout/logout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/logout/logout.component.ts ***!
    \********************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var angular_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-alert-module */
    "./node_modules/angular-alert-module/fesm2015/alerts.js");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(http, router, userService, alerts) {
        _classCallCheck(this, LogoutComponent);

        this.http = http;
        this.router = router;
        this.userService = userService;
        this.alerts = alerts;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.userService.logout();

                  case 3:
                    this.alerts.setMessage('Successful logout', 'success');
                    this.router.navigateByUrl('/');
                    _context2.next = 10;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](0);
                    this.alerts.setMessage(_context2.t0.error.message, 'error');

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 7]]);
          }));
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: angular_alert_module__WEBPACK_IMPORTED_MODULE_5__["AlertsService"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/logout/logout.component.css")).default]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/pipes/coursefilter.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/pipes/coursefilter.pipe.ts ***!
    \********************************************/

  /*! exports provided: CourseFilterPipe */

  /***/
  function srcAppPipesCoursefilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseFilterPipe", function () {
      return CourseFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CourseFilterPipe =
    /*#__PURE__*/
    function () {
      function CourseFilterPipe() {
        _classCallCheck(this, CourseFilterPipe);
      }

      _createClass(CourseFilterPipe, [{
        key: "transform",
        value: function transform(courses, text) {
          if (!courses || !text || text === "") {
            return [];
          }

          text = text.toLowerCase();
          return courses.filter(function (course) {
            var nameHasFilter = course.name.toLowerCase().indexOf(text) > -1;
            var codeHasFilter = course.courseCode.toLowerCase().indexOf(text) > -1;
            return nameHasFilter || codeHasFilter;
          });
        }
      }]);

      return CourseFilterPipe;
    }();

    CourseFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'coursefilter'
    })], CourseFilterPipe);
    /***/
  },

  /***/
  "./src/app/planner/planner.component.css":
  /*!***********************************************!*\
    !*** ./src/app/planner/planner.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPlannerPlannerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5uZXIvcGxhbm5lci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/planner/planner.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/planner/planner.component.ts ***!
    \**********************************************/

  /*! exports provided: PlannerComponent */

  /***/
  function srcAppPlannerPlannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlannerComponent", function () {
      return PlannerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_courses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/courses.service */
    "./src/app/services/courses.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PlannerComponent =
    /*#__PURE__*/
    function () {
      function PlannerComponent(userService, coursesService, modalService) {
        _classCallCheck(this, PlannerComponent);

        this.userService = userService;
        this.coursesService = coursesService;
        this.modalService = modalService;
        this.courses = [];
        this.mp = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new Map());
        this.years = [];
        this.semesters = [];
        this.course = [];
      }

      _createClass(PlannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, c, courseInfo, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _c, _courseInfo, semToNum, map, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _c2, sp, year, season, mp1, mp2, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _year, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, semester, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _c3;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.userService.getUser();

                  case 2:
                    this.user = _context3.sent;

                    if (!this.user.coursesTaken) {
                      _context3.next = 33;
                      break;
                    }

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context3.prev = 7;
                    _iterator = this.user.coursesTaken[Symbol.iterator]();

                  case 9:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context3.next = 19;
                      break;
                    }

                    c = _step.value;
                    _context3.next = 13;
                    return this.coursesService.getCourse(c.courseId);

                  case 13:
                    courseInfo = _context3.sent;
                    c.courseInfo = courseInfo;
                    this.courses.push(c);

                  case 16:
                    _iteratorNormalCompletion = true;
                    _context3.next = 9;
                    break;

                  case 19:
                    _context3.next = 25;
                    break;

                  case 21:
                    _context3.prev = 21;
                    _context3.t0 = _context3["catch"](7);
                    _didIteratorError = true;
                    _iteratorError = _context3.t0;

                  case 25:
                    _context3.prev = 25;
                    _context3.prev = 26;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 28:
                    _context3.prev = 28;

                    if (!_didIteratorError) {
                      _context3.next = 31;
                      break;
                    }

                    throw _iteratorError;

                  case 31:
                    return _context3.finish(28);

                  case 32:
                    return _context3.finish(25);

                  case 33:
                    if (!this.user.coursesToTake) {
                      _context3.next = 63;
                      break;
                    }

                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context3.prev = 37;
                    _iterator2 = this.user.coursesToTake[Symbol.iterator]();

                  case 39:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context3.next = 49;
                      break;
                    }

                    _c = _step2.value;
                    _context3.next = 43;
                    return this.coursesService.getCourse(_c.courseId);

                  case 43:
                    _courseInfo = _context3.sent;
                    _c.courseInfo = _courseInfo;
                    this.courses.push(_c);

                  case 46:
                    _iteratorNormalCompletion2 = true;
                    _context3.next = 39;
                    break;

                  case 49:
                    _context3.next = 55;
                    break;

                  case 51:
                    _context3.prev = 51;
                    _context3.t1 = _context3["catch"](37);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context3.t1;

                  case 55:
                    _context3.prev = 55;
                    _context3.prev = 56;

                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }

                  case 58:
                    _context3.prev = 58;

                    if (!_didIteratorError2) {
                      _context3.next = 61;
                      break;
                    }

                    throw _iteratorError2;

                  case 61:
                    return _context3.finish(58);

                  case 62:
                    return _context3.finish(55);

                  case 63:
                    semToNum = {
                      "SPRING": 0,
                      "SUMMER": 1,
                      "FALL": 2
                    };
                    this.courses = this.courses.sort(function (a, b) {
                      var aa = a.semester.split(" ");
                      var bb = b.semester.split(" ");
                      var yra = +aa[1];
                      var yrb = +bb[1];

                      if (yra != yrb) {
                        return yra - yrb;
                      }

                      return semToNum[aa[0]] - semToNum[bb[0]];
                    });
                    map = new Map();
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context3.prev = 69;
                    _iterator3 = this.courses[Symbol.iterator]();

                  case 71:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                      _context3.next = 86;
                      break;
                    }

                    _c2 = _step3.value;
                    sp = _c2.semester.split(" ");

                    if (!(sp.length < 2)) {
                      _context3.next = 76;
                      break;
                    }

                    return _context3.abrupt("continue", 83);

                  case 76:
                    year = sp[1];
                    season = sp[0];
                    mp1 = map.get(year) || new Map();
                    map.set(year, mp1);
                    mp2 = mp1.get(season) || [];
                    mp2.push(_c2);
                    mp1.set(season, mp2);

                  case 83:
                    _iteratorNormalCompletion3 = true;
                    _context3.next = 71;
                    break;

                  case 86:
                    _context3.next = 92;
                    break;

                  case 88:
                    _context3.prev = 88;
                    _context3.t2 = _context3["catch"](69);
                    _didIteratorError3 = true;
                    _iteratorError3 = _context3.t2;

                  case 92:
                    _context3.prev = 92;
                    _context3.prev = 93;

                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                      _iterator3.return();
                    }

                  case 95:
                    _context3.prev = 95;

                    if (!_didIteratorError3) {
                      _context3.next = 98;
                      break;
                    }

                    throw _iteratorError3;

                  case 98:
                    return _context3.finish(95);

                  case 99:
                    return _context3.finish(92);

                  case 100:
                    _iteratorNormalCompletion4 = true;
                    _didIteratorError4 = false;
                    _iteratorError4 = undefined;
                    _context3.prev = 103;
                    _iterator4 = map.keys()[Symbol.iterator]();

                  case 105:
                    if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                      _context3.next = 155;
                      break;
                    }

                    _year = _step4.value;
                    this.years.push(_year);
                    _iteratorNormalCompletion5 = true;
                    _didIteratorError5 = false;
                    _iteratorError5 = undefined;
                    _context3.prev = 111;
                    _iterator5 = map.get(_year).keys()[Symbol.iterator]();

                  case 113:
                    if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                      _context3.next = 138;
                      break;
                    }

                    semester = _step5.value;
                    this.semesters.push(semester);
                    _iteratorNormalCompletion6 = true;
                    _didIteratorError6 = false;
                    _iteratorError6 = undefined;
                    _context3.prev = 119;

                    for (_iterator6 = map.get(_year).get(semester)[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                      _c3 = _step6.value;
                      // console.log(year + " " + semester + " ");
                      // console.log(c);
                      this.course.push(_c3);
                    }

                    _context3.next = 127;
                    break;

                  case 123:
                    _context3.prev = 123;
                    _context3.t3 = _context3["catch"](119);
                    _didIteratorError6 = true;
                    _iteratorError6 = _context3.t3;

                  case 127:
                    _context3.prev = 127;
                    _context3.prev = 128;

                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                      _iterator6.return();
                    }

                  case 130:
                    _context3.prev = 130;

                    if (!_didIteratorError6) {
                      _context3.next = 133;
                      break;
                    }

                    throw _iteratorError6;

                  case 133:
                    return _context3.finish(130);

                  case 134:
                    return _context3.finish(127);

                  case 135:
                    _iteratorNormalCompletion5 = true;
                    _context3.next = 113;
                    break;

                  case 138:
                    _context3.next = 144;
                    break;

                  case 140:
                    _context3.prev = 140;
                    _context3.t4 = _context3["catch"](111);
                    _didIteratorError5 = true;
                    _iteratorError5 = _context3.t4;

                  case 144:
                    _context3.prev = 144;
                    _context3.prev = 145;

                    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                      _iterator5.return();
                    }

                  case 147:
                    _context3.prev = 147;

                    if (!_didIteratorError5) {
                      _context3.next = 150;
                      break;
                    }

                    throw _iteratorError5;

                  case 150:
                    return _context3.finish(147);

                  case 151:
                    return _context3.finish(144);

                  case 152:
                    _iteratorNormalCompletion4 = true;
                    _context3.next = 105;
                    break;

                  case 155:
                    _context3.next = 161;
                    break;

                  case 157:
                    _context3.prev = 157;
                    _context3.t5 = _context3["catch"](103);
                    _didIteratorError4 = true;
                    _iteratorError4 = _context3.t5;

                  case 161:
                    _context3.prev = 161;
                    _context3.prev = 162;

                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                      _iterator4.return();
                    }

                  case 164:
                    _context3.prev = 164;

                    if (!_didIteratorError4) {
                      _context3.next = 167;
                      break;
                    }

                    throw _iteratorError4;

                  case 167:
                    return _context3.finish(164);

                  case 168:
                    return _context3.finish(161);

                  case 169:
                    console.log(this.years);
                    console.log(this.semesters);
                    console.log(this.course);
                    this.mp.next(map);

                  case 173:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[7, 21, 25, 33], [26,, 28, 32], [37, 51, 55, 63], [56,, 58, 62], [69, 88, 92, 100], [93,, 95, 99], [103, 157, 161, 169], [111, 140, 144, 152], [119, 123, 127, 135], [128,, 130, 134], [145,, 147, 151], [162,, 164, 168]]);
          }));
        }
      }]);

      return PlannerComponent;
    }();

    PlannerComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_courses_service__WEBPACK_IMPORTED_MODULE_4__["CoursesService"]
      }, {
        type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalService"]
      }];
    };

    PlannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-planner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./planner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/planner/planner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./planner.component.css */
      "./src/app/planner/planner.component.css")).default]
    })], PlannerComponent);
    /***/
  },

  /***/
  "./src/app/profile/course/course.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/profile/course/course.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileCourseCourseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY291cnNlL2NvdXJzZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/course/course.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/course/course.component.ts ***!
    \****************************************************/

  /*! exports provided: CourseComponent */

  /***/
  function srcAppProfileCourseCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseComponent", function () {
      return CourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var CourseComponent =
    /*#__PURE__*/
    function () {
      function CourseComponent(modalRef, userService) {
        _classCallCheck(this, CourseComponent);

        this.modalRef = modalRef;
        this.userService = userService;
        this.grades = ["A", "B", "C", "D", "F"];
        this.semesters = ["SPRING 2015", "SUMMER 2015", "FALL 2015", "SPRING 2016", "SUMMER 2016", "FALL 2016", "SPRING 2017", "SUMMER 2017", "FALL 2017", "SPRING 2018", "SUMMER 2018", "FALL 2018", "SPRING 2019", "SUMMER 2019", "FALL 2019", "SPRING 2020", "SUMMER 2020", "FALL 2020", "SPRING 2021", "SUMMER 2021", "FALL 2021", "SPRING 2022", "SUMMER 2022", "FALL 2022", "SPRING 2023", "SUMMER 2023", "FALL 2023", "SPRING 2024", "SUMMER 2024", "FALL 2024", "SPRING 2025", "SUMMER 2025", "FALL 2025"];
      }

      _createClass(CourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userGrade = this.userCourse.grade;
          this.userSemester = this.userCourse.semester;
        }
      }, {
        key: "onSave",
        value: function onSave() {
          this.userService.updateCourse(this.course._id, this.userSemester, this.userGrade, this.listName);
          window.location.reload();
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.userService.deleteCourse(this.course._id, this.userCourse.semester, this.userCourse.grade, this.listName);
          window.location.reload();
        }
      }, {
        key: "onMove",
        value: function onMove() {
          this.userService.moveCourse(this.course._id, this.userCourse.semester, this.userCourse.grade, this.listName);
          window.location.reload();
        }
      }]);

      return CourseComponent;
    }();

    CourseComponent.ctorParameters = function () {
      return [{
        type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/course/course.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./course.component.css */
      "./src/app/profile/course/course.component.css")).default]
    })], CourseComponent);
    /***/
  },

  /***/
  "./src/app/profile/courses/courses.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/profile/courses/courses.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileCoursesCoursesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY291cnNlcy9jb3Vyc2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profile/courses/courses.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/profile/courses/courses.component.ts ***!
    \******************************************************/

  /*! exports provided: CoursesComponent */

  /***/
  function srcAppProfileCoursesCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursesComponent", function () {
      return CoursesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/courses.service */
    "./src/app/services/courses.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var CoursesComponent =
    /*#__PURE__*/
    function () {
      function CoursesComponent(modalRef, courseService, userService) {
        _classCallCheck(this, CoursesComponent);

        this.modalRef = modalRef;
        this.courseService = courseService;
        this.userService = userService;
        this.courses = [];
      }

      _createClass(CoursesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.getCourses();

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getCourses",
        value: function getCourses() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.courseService._coursesPromise;

                  case 2:
                    this.courses = _context5.sent;

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onAdd",
        value: function onAdd(courseName) {
          this.userService.addCourse(this.courseService.coursesMap.get(courseName)._id, "", "", this.listName);
        }
      }, {
        key: "onSave",
        value: function onSave() {
          window.location.reload();
        }
      }]);

      return CoursesComponent;
    }();

    CoursesComponent.ctorParameters = function () {
      return [{
        type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"]
      }, {
        type: src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_3__["CoursesService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-courses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./courses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/courses/courses.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./courses.component.css */
      "./src/app/profile/courses/courses.component.css")).default]
    })], CoursesComponent);
    /***/
  },

  /***/
  "./src/app/profile/major/major.component.css":
  /*!***************************************************!*\
    !*** ./src/app/profile/major/major.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileMajorMajorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbWFqb3IvbWFqb3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/major/major.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/major/major.component.ts ***!
    \**************************************************/

  /*! exports provided: MajorComponent */

  /***/
  function srcAppProfileMajorMajorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MajorComponent", function () {
      return MajorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_major_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/major.service */
    "./src/app/services/major.service.ts");

    var MajorComponent =
    /*#__PURE__*/
    function () {
      function MajorComponent(modalRef, http, userService, majorService) {
        _classCallCheck(this, MajorComponent);

        this.modalRef = modalRef;
        this.http = http;
        this.userService = userService;
        this.majorService = majorService;
      }

      _createClass(MajorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.majorService._getMajorsPromise;

                  case 2:
                    this.majors = _context6.sent;

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "onSave",
        value: function onSave() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.userService.selectMajor(this.majorService.majorsMap.get(this.userMajorName)._id);

                  case 2:
                    window.location.reload();

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return MajorComponent;
    }();

    MajorComponent.ctorParameters = function () {
      return [{
        type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_services_major_service__WEBPACK_IMPORTED_MODULE_5__["MajorService"]
      }];
    };

    MajorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-major',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./major.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/major/major.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./major.component.css */
      "./src/app/profile/major/major.component.css")).default]
    })], MajorComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _profile_major_major_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../profile/major/major.component */
    "./src/app/profile/major/major.component.ts");
    /* harmony import */


    var _profile_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../profile/courses/courses.component */
    "./src/app/profile/courses/courses.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_major_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/major.service */
    "./src/app/services/major.service.ts");
    /* harmony import */


    var _services_courses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/courses.service */
    "./src/app/services/courses.service.ts");
    /* harmony import */


    var _course_course_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./course/course.component */
    "./src/app/profile/course/course.component.ts");
    /* harmony import */


    var _required_courses_required_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./required-courses/required-courses.component */
    "./src/app/profile/required-courses/required-courses.component.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(modalService, userService, majorService, coursesService) {
        _classCallCheck(this, ProfileComponent);

        this.modalService = modalService;
        this.userService = userService;
        this.majorService = majorService;
        this.coursesService = coursesService;
        this.coursesTaken = [];
        this.coursesToTake = [];
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, c, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _c4;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.userService.getUser();

                  case 2:
                    this.user = _context8.sent;
                    _context8.next = 5;
                    return this.majorService._getMajorsPromise;

                  case 5:
                    if (this.user.majorId) this.major = this.majorService.majorsMapId.get(this.user.majorId).name;

                    if (!this.user.coursesTaken) {
                      _context8.next = 36;
                      break;
                    }

                    _iteratorNormalCompletion7 = true;
                    _didIteratorError7 = false;
                    _iteratorError7 = undefined;
                    _context8.prev = 10;
                    _iterator7 = this.user.coursesTaken[Symbol.iterator]();

                  case 12:
                    if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                      _context8.next = 22;
                      break;
                    }

                    c = _step7.value;
                    _context8.t0 = this.coursesTaken;
                    _context8.next = 17;
                    return this.coursesService.getCourse(c.courseId);

                  case 17:
                    _context8.t1 = _context8.sent;

                    _context8.t0.push.call(_context8.t0, _context8.t1);

                  case 19:
                    _iteratorNormalCompletion7 = true;
                    _context8.next = 12;
                    break;

                  case 22:
                    _context8.next = 28;
                    break;

                  case 24:
                    _context8.prev = 24;
                    _context8.t2 = _context8["catch"](10);
                    _didIteratorError7 = true;
                    _iteratorError7 = _context8.t2;

                  case 28:
                    _context8.prev = 28;
                    _context8.prev = 29;

                    if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                      _iterator7.return();
                    }

                  case 31:
                    _context8.prev = 31;

                    if (!_didIteratorError7) {
                      _context8.next = 34;
                      break;
                    }

                    throw _iteratorError7;

                  case 34:
                    return _context8.finish(31);

                  case 35:
                    return _context8.finish(28);

                  case 36:
                    if (!this.user.coursesToTake) {
                      _context8.next = 66;
                      break;
                    }

                    _iteratorNormalCompletion8 = true;
                    _didIteratorError8 = false;
                    _iteratorError8 = undefined;
                    _context8.prev = 40;
                    _iterator8 = this.user.coursesToTake[Symbol.iterator]();

                  case 42:
                    if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                      _context8.next = 52;
                      break;
                    }

                    _c4 = _step8.value;
                    _context8.t3 = this.coursesToTake;
                    _context8.next = 47;
                    return this.coursesService.getCourse(_c4.courseId);

                  case 47:
                    _context8.t4 = _context8.sent;

                    _context8.t3.push.call(_context8.t3, _context8.t4);

                  case 49:
                    _iteratorNormalCompletion8 = true;
                    _context8.next = 42;
                    break;

                  case 52:
                    _context8.next = 58;
                    break;

                  case 54:
                    _context8.prev = 54;
                    _context8.t5 = _context8["catch"](40);
                    _didIteratorError8 = true;
                    _iteratorError8 = _context8.t5;

                  case 58:
                    _context8.prev = 58;
                    _context8.prev = 59;

                    if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                      _iterator8.return();
                    }

                  case 61:
                    _context8.prev = 61;

                    if (!_didIteratorError8) {
                      _context8.next = 64;
                      break;
                    }

                    throw _iteratorError8;

                  case 64:
                    return _context8.finish(61);

                  case 65:
                    return _context8.finish(58);

                  case 66:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[10, 24, 28, 36], [29,, 31, 35], [40, 54, 58, 66], [59,, 61, 65]]);
          }));
        }
      }, {
        key: "openMajor",
        value: function openMajor() {
          this.modalRef = this.modalService.show(_profile_major_major_component__WEBPACK_IMPORTED_MODULE_3__["MajorComponent"]);
        }
      }, {
        key: "openCourses",
        value: function openCourses(listName) {
          this.modalRef = this.modalService.show(_profile_courses_courses_component__WEBPACK_IMPORTED_MODULE_4__["CoursesComponent"], {
            data: {
              listName: listName
            }
          });
        }
      }, {
        key: "openCourse",
        value: function openCourse(course, listName) {
          var userCourse;
          if (listName === 'coursesTaken') userCourse = this.user.coursesTaken.find(function (c) {
            return c.courseId === course._id;
          });else if (listName === 'coursesToTake') userCourse = this.user.coursesToTake.find(function (c) {
            return c.courseId === course._id;
          });
          this.modalRef = this.modalService.show(_course_course_component__WEBPACK_IMPORTED_MODULE_8__["CourseComponent"], {
            data: {
              course: course,
              userCourse: userCourse,
              listName: listName
            }
          });
        }
      }, {
        key: "openRequiredCourses",
        value: function openRequiredCourses() {
          this.modalRef = this.modalService.show(_required_courses_required_courses_component__WEBPACK_IMPORTED_MODULE_9__["RequiredCoursesComponent"]);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalService"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_major_service__WEBPACK_IMPORTED_MODULE_6__["MajorService"]
      }, {
        type: _services_courses_service__WEBPACK_IMPORTED_MODULE_7__["CoursesService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/required-courses/required-courses.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/profile/required-courses/required-courses.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileRequiredCoursesRequiredCoursesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcmVxdWlyZWQtY291cnNlcy9yZXF1aXJlZC1jb3Vyc2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profile/required-courses/required-courses.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/profile/required-courses/required-courses.component.ts ***!
    \************************************************************************/

  /*! exports provided: RequiredCoursesComponent */

  /***/
  function srcAppProfileRequiredCoursesRequiredCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequiredCoursesComponent", function () {
      return RequiredCoursesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var RequiredCoursesComponent =
    /*#__PURE__*/
    function () {
      function RequiredCoursesComponent(modalRef, userService) {
        _classCallCheck(this, RequiredCoursesComponent);

        this.modalRef = modalRef;
        this.userService = userService;
        this.courses = [];
      }

      _createClass(RequiredCoursesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.userService.getUser();

                  case 2:
                    this.user = _context9.sent;
                    _context9.next = 5;
                    return this.userService.getUserMajorRequirements();

                  case 5:
                    this.courses = _context9.sent;
                    console.log(this.courses);

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "onSave",
        value: function onSave() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, c;

            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    console.log(this.courses);
                    _iteratorNormalCompletion9 = true;
                    _didIteratorError9 = false;
                    _iteratorError9 = undefined;
                    _context10.prev = 4;

                    for (_iterator9 = this.courses[Symbol.iterator](); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                      c = _step9.value;
                      this.userService.addCourse(c._id, "", "", "coursesToTake");
                    } //window.location.reload();


                    _context10.next = 12;
                    break;

                  case 8:
                    _context10.prev = 8;
                    _context10.t0 = _context10["catch"](4);
                    _didIteratorError9 = true;
                    _iteratorError9 = _context10.t0;

                  case 12:
                    _context10.prev = 12;
                    _context10.prev = 13;

                    if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                      _iterator9.return();
                    }

                  case 15:
                    _context10.prev = 15;

                    if (!_didIteratorError9) {
                      _context10.next = 18;
                      break;
                    }

                    throw _iteratorError9;

                  case 18:
                    return _context10.finish(15);

                  case 19:
                    return _context10.finish(12);

                  case 20:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[4, 8, 12, 20], [13,, 15, 19]]);
          }));
        }
      }]);

      return RequiredCoursesComponent;
    }();

    RequiredCoursesComponent.ctorParameters = function () {
      return [{
        type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    RequiredCoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-required-courses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./required-courses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/required-courses/required-courses.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./required-courses.component.css */
      "./src/app/profile/required-courses/required-courses.component.css")).default]
    })], RequiredCoursesComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-alert-module */
    "./node_modules/angular-alert-module/fesm2015/alerts.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(userService, router, alerts) {
        _classCallCheck(this, RegisterComponent);

        this.userService = userService;
        this.router = router;
        this.alerts = alerts;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.username = "";
        this.password = "";
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSave",
        value: function onSave() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var data;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    if (!this.validate()) {
                      _context11.next = 14;
                      break;
                    }

                    _context11.prev = 1;
                    _context11.next = 4;
                    return this.userService.register(this.firstName, this.lastName, this.email, this.username, this.password);

                  case 4:
                    data = _context11.sent;
                    this.router.navigateByUrl('/login');
                    this.alerts.setMessage("Successfully created account", 'success');
                    _context11.next = 12;
                    break;

                  case 9:
                    _context11.prev = 9;
                    _context11.t0 = _context11["catch"](1);
                    this.alerts.setMessage(_context11.t0.error.message, 'error');

                  case 12:
                    _context11.next = 15;
                    break;

                  case 14:
                    this.alerts.setMessage("Must fill out all fields", 'error');

                  case 15:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[1, 9]]);
          }));
        }
      }, {
        key: "validate",
        value: function validate() {
          var valid = true;

          if (this.isEmptyOrSpaces(this.username)) {
            valid = false;
          }

          if (this.isEmptyOrSpaces(this.password)) {
            valid = false;
          }

          if (this.isEmptyOrSpaces(this.email)) {
            valid = false;
          }

          if (this.isEmptyOrSpaces(this.firstName)) {
            valid = false;
          }

          if (this.isEmptyOrSpaces(this.lastName)) {
            valid = false;
          }

          return valid;
        }
      }, {
        key: "isEmptyOrSpaces",
        value: function isEmptyOrSpaces(str) {
          return str === null || str.match(/^ *$/) !== null || str.length == 0;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/courses.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/courses.service.ts ***!
    \*********************************************/

  /*! exports provided: CoursesService */

  /***/
  function srcAppServicesCoursesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoursesService", function () {
      return CoursesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CoursesService =
    /*#__PURE__*/
    function () {
      function CoursesService(http) {
        _classCallCheck(this, CoursesService);

        this.http = http;
        this.courses = [];
        this.coursesMap = new Map();
        this.coursesMapId = new Map();
        this.getCourses();
      }

      _createClass(CoursesService, [{
        key: "getCourses",
        value: function getCourses() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, m;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this._coursesPromise = this.http.get('http://localhost:4200/api/courses').toPromise();

                  case 2:
                    _iteratorNormalCompletion10 = true;
                    _didIteratorError10 = false;
                    _iteratorError10 = undefined;
                    _context12.prev = 5;
                    _context12.next = 8;
                    return this._coursesPromise;

                  case 8:
                    _context12.t0 = Symbol.iterator;
                    _iterator10 = _context12.sent[_context12.t0]();

                  case 10:
                    if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                      _context12.next = 17;
                      break;
                    }

                    m = _step10.value;
                    this.coursesMap.set(m.name, m);
                    this.coursesMapId.set(m._id, m);

                  case 14:
                    _iteratorNormalCompletion10 = true;
                    _context12.next = 10;
                    break;

                  case 17:
                    _context12.next = 23;
                    break;

                  case 19:
                    _context12.prev = 19;
                    _context12.t1 = _context12["catch"](5);
                    _didIteratorError10 = true;
                    _iteratorError10 = _context12.t1;

                  case 23:
                    _context12.prev = 23;
                    _context12.prev = 24;

                    if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                      _iterator10.return();
                    }

                  case 26:
                    _context12.prev = 26;

                    if (!_didIteratorError10) {
                      _context12.next = 29;
                      break;
                    }

                    throw _iteratorError10;

                  case 29:
                    return _context12.finish(26);

                  case 30:
                    return _context12.finish(23);

                  case 31:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this, [[5, 19, 23, 31], [24,, 26, 30]]);
          }));
        }
      }, {
        key: "getCourse",
        value: function getCourse(courseId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var course;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return course = this.http.get('http://localhost:4200/api/course/' + courseId).toPromise();

                  case 2:
                    return _context13.abrupt("return", course);

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }]);

      return CoursesService;
    }();

    CoursesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CoursesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CoursesService);
    /***/
  },

  /***/
  "./src/app/services/major.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/major.service.ts ***!
    \*******************************************/

  /*! exports provided: MajorService */

  /***/
  function srcAppServicesMajorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MajorService", function () {
      return MajorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MajorService =
    /*#__PURE__*/
    function () {
      function MajorService(http) {
        _classCallCheck(this, MajorService);

        this.http = http;
        this.majorsMap = new Map();
        this.majorsMapId = new Map();
        this.getMajors();
      }

      _createClass(MajorService, [{
        key: "getMajors",
        value: function getMajors() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, m;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    this._getMajorsPromise = this.http.get('http://localhost:8080/api/majors', {}).toPromise();
                    _context14.next = 3;
                    return this._getMajorsPromise;

                  case 3:
                    this.majors = _context14.sent;
                    _iteratorNormalCompletion11 = true;
                    _didIteratorError11 = false;
                    _iteratorError11 = undefined;
                    _context14.prev = 7;

                    for (_iterator11 = this.majors[Symbol.iterator](); !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                      m = _step11.value;
                      this.majorsMap.set(m.name, m);
                      this.majorsMapId.set(m._id, m);
                    }

                    _context14.next = 15;
                    break;

                  case 11:
                    _context14.prev = 11;
                    _context14.t0 = _context14["catch"](7);
                    _didIteratorError11 = true;
                    _iteratorError11 = _context14.t0;

                  case 15:
                    _context14.prev = 15;
                    _context14.prev = 16;

                    if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                      _iterator11.return();
                    }

                  case 18:
                    _context14.prev = 18;

                    if (!_didIteratorError11) {
                      _context14.next = 21;
                      break;
                    }

                    throw _iteratorError11;

                  case 21:
                    return _context14.finish(18);

                  case 22:
                    return _context14.finish(15);

                  case 23:
                    return _context14.abrupt("return", this._getMajorsPromise);

                  case 24:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this, [[7, 11, 15, 23], [16,, 18, 22]]);
          }));
        }
      }, {
        key: "getRequiredCourses",
        value: function getRequiredCourses(majorId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    return _context15.abrupt("return", this._getRequiredCoursesPromise = this.http.get('http://localhost:8080/api/major/' + majorId + '/requirements', {}).toPromise());

                  case 1:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }]);

      return MajorService;
    }();

    MajorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MajorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MajorService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, cookies) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.cookies = cookies;
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);

        if (cookies.get('sid')) {
          this.isUserLoggedIn.next(true);
        }
      }

      _createClass(UserService, [{
        key: "login",
        value: function login(username, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this._loginPromise = this.http.post('http://localhost:4200/api/login', {
                      "username": username,
                      "password": password
                    }).toPromise();

                  case 2:
                    this.isUserLoggedIn.next(true);
                    return _context16.abrupt("return", this._loginPromise);

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this._loginPromise = this.http.post('http://localhost:4200/api/logout', {}).toPromise();

                  case 2:
                    this.isUserLoggedIn.next(false);

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    return _context18.abrupt("return", this._getUserPromise = this.http.get('http://localhost:4200/api/user', {}).toPromise());

                  case 1:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "getUserMajorRequirements",
        value: function getUserMajorRequirements() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    return _context19.abrupt("return", this._getUserMajorRequirementsPromise = this.http.get('http://localhost:4200/api/user/majorRequirements', {}).toPromise());

                  case 1:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "addCourse",
        value: function addCourse(courseId, semester, grade, listName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    return _context20.abrupt("return", this._getAddCoursePromise = this.http.put('http://localhost:4200/api/user/course', {
                      "listName": listName,
                      "userCourse": {
                        "courseId": courseId,
                        "semester": semester,
                        "grade": grade
                      }
                    }).toPromise());

                  case 1:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "selectMajor",
        value: function selectMajor(majorId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    return _context21.abrupt("return", this._getSelectMajorPromise = this.http.put('http://localhost:4200/api/user/major', {
                      "majorId": majorId
                    }).toPromise());

                  case 1:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "register",
        value: function register(firstName, lastName, email, username, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    return _context22.abrupt("return", this._registerPromise = this.http.post('http://localhost:4200/api/signup', {
                      "name": firstName + " " + lastName,
                      "email": email,
                      "username": username,
                      "password": password
                    }).toPromise());

                  case 1:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "deleteCourse",
        value: function deleteCourse(courseId, semester, grade, listName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    return _context23.abrupt("return", this._getDeleteCoursePromise = this.http.put('http://localhost:4200/api/user/deleteCourse/', {
                      "listName": listName,
                      "userCourse": {
                        "courseId": courseId,
                        "semester": semester,
                        "grade": grade
                      }
                    }).toPromise());

                  case 1:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "updateCourse",
        value: function updateCourse(courseId, semester, grade, listName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    return _context24.abrupt("return", this._getUpdateCoursePromise = this.http.put('http://localhost:4200/api/user/updateCourse', {
                      "listName": listName,
                      "courseId": courseId,
                      "semester": semester,
                      "grade": grade
                    }).toPromise());

                  case 1:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "moveCourse",
        value: function moveCourse(courseId, semester, grade, listName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    return _context25.abrupt("return", this._getMoveCoursePromise = this.http.put('http://localhost:4200/api/user/moveCourse', {
                      "listName": listName,
                      "userCourse": {
                        "courseId": courseId,
                        "semester": semester,
                        "grade": grade
                      }
                    }).toPromise());

                  case 1:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Abhishek\Desktop\POOSDProject\POOSD-Project\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map