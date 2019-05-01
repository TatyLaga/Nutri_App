webpackJsonp([10],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provreport_provreport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the HistoricalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricalPage = /** @class */ (function () {
    function HistoricalPage(navCtrl, db, http, navParams, ProvReport) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.http = http;
        this.navParams = navParams;
        this.ProvReport = ProvReport;
        this.data = this.ProvReport.getReportList;
        this.objectKeys = Object.keys;
    }
    HistoricalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoricalPage');
    };
    /*consulta(){
      const rootRef = firebase.database().ref();
      const oneRef = rootRef.child('Reportes_Paciente')
      const twoRef = rootRef.child('Reportes_Paciente').orderByChild('email').equalTo('adminp@admin.com')
      console.log(oneRef.orderByValue);
    }*/
    HistoricalPage.prototype.consul = function () {
        var _this = this;
        this.db.object('/Reports').valueChanges().subscribe(function (datas) {
            console.log("datas Loquis", datas);
            _this.reports = datas;
            console.log("arry Report", _this.reports);
            var mapped = Object.keys(_this.reports).map(function (key) { return ({ type: key, value: _this.reports[key] }); });
            console.log("Hola mapedss", mapped);
            _this.reports = mapped;
        }, function (err) {
            console.log("probleme : ", err);
        });
    };
    HistoricalPage.prototype.showUserData = function () {
        var user = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser;
        if (user != null) {
            user.providerData.forEach(function (profile) {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });
        }
    };
    HistoricalPage.prototype.userData = function () {
        var _this = this;
        this.db.object('/users').valueChanges().subscribe(function (datas) {
            console.log("datas", datas);
            var mapped = Object.keys(datas).map(function (key) { return ({ type: key, value: datas[key] }); });
            console.log("Hola maped", mapped);
            _this.users = mapped;
        }, function (err) {
            console.log("probleme : ", err);
        });
    };
    HistoricalPage.prototype.dataTry = function () {
        var myUserId = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.uid;
        var topUserPostsRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('user/' + myUserId).orderByChild('uid');
        console.log("muestra", topUserPostsRef);
    };
    HistoricalPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HistoricalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historical',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/historical/historical.html"*/'<!--\n  Generated template for the HistoricalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="light">\n      <ion-title>\n\n          <img src="../../assets//imgs/LogoNutrivigilancia.png" height="45" (click)="home();">\n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bgContent">\n    <div class="login-content">\n\n        <!-- Logo -->\n        <div padding-horizontal text-center class="animated fadeInDown">\n          <div class="logo"><img src="../../assets//imgs/IconoNT.png" height="120"></div>\n          <h2 ion-text class="text-primary">\n            <strong>Nutrivigilancia</strong>\n          </h2>\n        </div>\n<button ion-button icon-start ion-button block (click)="consul()" class="center"><a href="https://console.firebase.google.com/u/2/project/nutrivigilancia2019/database/nutrivigilancia2019/data/Reports" target="_blank"> Ver los reportes</a></button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/historical/historical.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_provreport_provreport__["a" /* ProvreportProvider */]])
    ], HistoricalPage);
    return HistoricalPage;
}());

//# sourceMappingURL=historical.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaranfdaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__naranjo_naranjo__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fda_fda__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NaranfdaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NaranfdaPage = /** @class */ (function () {
    function NaranfdaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NaranfdaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NaranfdaPage');
    };
    NaranfdaPage.prototype.naranjo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__naranjo_naranjo__["a" /* NaranjoPage */]);
    };
    NaranfdaPage.prototype.fda = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__fda_fda__["a" /* FdaPage */]);
    };
    NaranfdaPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    NaranfdaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-naranfda',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/naranfda/naranfda.html"*/'<!--\n  Generated template for the NaranfdaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="light">\n      <ion-title>\n\n          <img src="../../assets//imgs/LogoNutrivigilancia.png" height="45" (click)="home();">\n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<h1>Análisis de Causalidad</h1>\n<p>Seleccione el algoritmo que desea emplear para identificar la causalidad de la reacción adversa</p>\n<button ion-button (click)="fda();">Algoritmo FDA</button>\n<button ion-button (click)="naranjo();">Algoritmo Naranjo</button>\n</ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/naranfda/naranfda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NaranfdaPage);
    return NaranfdaPage;
}());

//# sourceMappingURL=naranfda.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provregister_provregister__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, _register, _users, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._register = _register;
        this._users = _users;
        this.alertCtrl = alertCtrl;
        this.password = "";
        this.user = {
            name: '',
            rol: '',
            email: '',
        };
        this.nameU = '';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Registro',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.register = function () {
        this._users.addUser(this.user);
        this._register.registerEmailAndPassword(this.user.email, this.user.password);
        console.log("Usuario guardado");
        this.presentAlert('Usuario Registrado');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */], { nameU: this.user.name });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/register/register.html"*/'<ion-content padding class="bgContent">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"><img src="../../assets//imgs/IconoNT.png" height="60"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Nutrivigilancia</strong>\n        Registro\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Nombre\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="user.name" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n            <ion-icon name="build" item-start class="text-primary"></ion-icon>\n            Rol</ion-label>\n        <ion-select  [(ngModel)]="user.rol" name="rol">\n\n      <ion-option value="medico">Médico</ion-option>\n      <ion-option value="farmaceutico">Farmacéutico</ion-option>\n      <ion-option value="nutricionista">Nutricionista</ion-option>\n      <ion-option value="laboratorio">Laboratorio o fabricante</ion-option>\n      <ion-option value="paciente">Paciente o cuidador</ion-option>\n    </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="at" item-start class="text-primary"></ion-icon>\n          Correo\n        </ion-label>\n        <ion-input type="text" [(ngModel)]="user.email" name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="user.password" name="pasword"></ion-input>\n      </ion-item>\n    </form>\n\n    <div>\n      <button ion-button icon-start block color="secundary" tappable (click)="register()">\n        <ion-icon class="login" name="log-in"></ion-icon>\n        Registrarse\n      </button>\n    </div>\n\n  </div>\n\n\n  </ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provregister_provregister__["a" /* ProvregisterProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home2_home2__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RolPage = /** @class */ (function () {
    function RolPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RolPage');
    };
    RolPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    RolPage.prototype.home2 = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home2_home2__["a" /* Home2Page */]);
    };
    RolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rol',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/rol/rol.html"*/'<ion-content padding class="bgContent">\n    <div class="login-content">\n\n      <!-- Logo -->\n      <div padding-horizontal text-center class="animated fadeInDown">\n        <div class="logo"><img src="../../assets//imgs/IconoNT.png" height="120"></div>\n        <h2 ion-text class="text-primary">\n          <strong>Nutrivigilancia</strong>\n        </h2>\n      </div>\n\n     <div>\n        <ion-row>\n            <ion-col col-4>\n\n                <button ion-button icon-only large round (click)="home2()">\n                  <ion-icon name="pulse"></ion-icon>\n                </button>\n                <ion-label>Médico</ion-label>\n\n            </ion-col>\n            <ion-col col-4>\n\n                  <button ion-button icon-only large round (click)="home2()">\n                    <ion-icon name="beaker"></ion-icon>\n                  </button>\n                  <ion-label>Farmacéutico</ion-label>\n\n              </ion-col>\n              <ion-col col-4>\n\n                    <button ion-button icon-only large round (click)="home2()">\n                      <ion-icon name="medkit"></ion-icon>\n                    </button>\n                    <ion-label>Personal de Enfermería</ion-label>\n\n                </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n              <ion-col col-4>\n\n                  <button ion-button icon-only large round (click)="home2()">\n                    <ion-icon name="nutrition"></ion-icon>\n                  </button>\n                  <ion-label>Nutricionista</ion-label>\n\n              </ion-col>\n              <ion-col col-4>\n\n                    <button ion-button icon-only large round (click)="home2()">\n                      <ion-icon name="flask"></ion-icon>\n                    </button>\n                    <ion-label>Laboratorio</ion-label>\n\n                </ion-col>\n                <ion-col col-4>\n\n                      <button ion-button icon-only large round (click)="home()">\n                        <ion-icon name="person"></ion-icon>\n                      </button>\n                      <ion-label>Paciente</ion-label>\n\n                  </ion-col>\n\n            </ion-row>\n     </div>\n\n     <button ion-button icon-start ion-button block  class="myButton2">\n        <ion-icon name="git-branche"></ion-icon> <br> <label>Escoger Rol</label>\n  </button>\n    </div>\n  </ion-content>\n\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/rol/rol.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RolPage);
    return RolPage;
}());

//# sourceMappingURL=rol.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__naranjo_naranjo__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fda_fda__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historical_historical__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__report2other_report2other__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Home2Page = /** @class */ (function () {
    function Home2Page(navCtrl, dbUser, afAuth, navParams, http, af, userProv) {
        this.navCtrl = navCtrl;
        this.dbUser = dbUser;
        this.afAuth = afAuth;
        this.navParams = navParams;
        this.http = http;
        this.af = af;
        this.userProv = userProv;
        this.user = {};
        this.profile = {};
        this.checkUser = this.checkUser.bind(this);
        //get name
        this.name = navParams.get('nameU');
    }
    Home2Page_1 = Home2Page;
    Home2Page.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().onAuthStateChanged(this.checkUser);
        this.getUserFirstName();
        console.log('The Users first name is ' + this.getUserFirstName());
    };
    Home2Page.prototype.checkUser = function (user) {
        if (!user) {
            console.log("user is not logged in");
            console.log("user isot logged ot logged in");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            console.log("user is logged in");
            console.log("user is logged in" + user.email);
            var nameMail = document.getElementById('correo');
            nameMail.innerHTML = "Bienvenido " + user.email + "!";
            return;
        }
    };
    Home2Page.prototype.logOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase_app__["auth"]().signOut().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        });
    };
    Home2Page.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    Home2Page.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
    };
    Home2Page.prototype.report = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__report2other_report2other__["a" /* Report2otherPage */]);
    };
    Home2Page.prototype.naranjo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__naranjo_naranjo__["a" /* NaranjoPage */]);
    };
    Home2Page.prototype.fda = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__fda_fda__["a" /* FdaPage */]);
    };
    Home2Page.prototype.historical = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__historical_historical__["a" /* HistoricalPage */]);
    };
    Home2Page.prototype.home = function () {
        this.navCtrl.setRoot(Home2Page_1);
    };
    Home2Page.prototype.getCurrentUser = function () {
        this.afAuth.authState.subscribe(function (data) {
            console.log('info ' + data.displayName);
            return data.uid;
        });
        this.userProv.getUser().valueChanges().subscribe(function (data) {
            console.log("datas Loquis", data);
        });
    };
    Home2Page.prototype.getUserFirstName = function () {
        this.profileData = this.af.object("users/" + this.getCurrentUser());
        return this.profileData;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], Home2Page.prototype, "slides", void 0);
    Home2Page = Home2Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home2',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/home2/home2.html"*/'<!-- -->\n<ion-header>\n\n    <ion-navbar color="light">\n        <ion-title>\n          <img src="../../assets//imgs/LogoNutrivigilancia.png" height="52" (click)="home();" >\n          <a class="cerrarSesion" (click)="logOut();">Cerrar Sesión</a>\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n  <ion-content >\n\n  </ion-content>\n\n  <ion-content padding >\n    <ion-slides  autoplay="1000" loop="true" speed="1500" pager="true" (ionSlideDidChange)="slideChanged()" class="center3">\n      <ion-slide>\n        <img src="../../assets//imgs/index1.jpg" alt="img1">\n      </ion-slide>\n      <ion-slide>\n        <img src="../../assets//imgs/index2.jpg" alt="img2">\n      </ion-slide>\n      <ion-slide>\n        <img src="../../assets//imgs/index3.jpg" alt="img3">\n      </ion-slide>\n      <ion-slide>\n        <img src="../../assets//imgs/index4.jpg" alt="img4">\n      </ion-slide>\n    </ion-slides>\n    <h2 class="center2"><strong>App de Nutrivigilancia</strong> </h2>\n\n    <h3 id="correo">\n\n    </h3>\n\n\n    <h4 class="center">Aplicación para gestión y reporte de eventos adversos asociadas a\n      nutriciones artificiales (nutriciones enterales y parenterales), fórmulas\n      infantiles y suplementos dietarios.</h4>\n\n      <button ion-button icon-start ion-button block (click)="report();" class="myButton2">\n          <ion-icon name="ios-create"></ion-icon> <br> <label>Generar reporte</label>\n    </button>\n\n    <button ion-button icon-start ion-button block (click)="naranjo();" class="myButton" >\n          <ion-icon name="list-box"></ion-icon> <br> <label>Algoritmo Naranjo</label>\n       </button>\n\n    <button ion-button icon-start ion-button block (click)="fda();" class="myButton">\n              <ion-icon name="ios-paper"></ion-icon> <br> <label>Algoritmo FDA</label>\n    </button>\n\n    <button ion-button icon-start ion-button block (click)="historical();" class="myButton" >\n            <ion-icon name="ios-folder-open"></ion-icon> <br> <label>Histórico</label>\n    </button>\n\n\n  </ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/home2/home2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_7__angular_fire_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */]])
    ], Home2Page);
    return Home2Page;
    var Home2Page_1;
}());

//# sourceMappingURL=home2.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report2otherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_provreport_provreport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__naranfda_naranfda__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera_ngx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the Report2otherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Report2otherPage = /** @class */ (function () {
    function Report2otherPage(navCtrl, navParams, alertController, http, afd, reportProvider, alertCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.http = http;
        this.afd = afd;
        this.reportProvider = reportProvider;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.report = {
            nombreR: '',
            celularR: '',
            institucionR: '',
            tipoDocumentoR: '',
            numeroDocumentoR: '',
            ciudadR: '',
            date: '',
            nombreP: '',
            edadP: '',
            emailP: '',
            celularP: '',
            generoP: '',
            pesoP: '',
            estaturaP: '',
            imcP: '',
            antecedentesP: '',
            problemasSaludP: '',
            embarazoP: '',
            trimestreP: '',
            tipoProductoP: '',
            marcaP: '',
            laboratorioP: '',
            registroSanitarioP: '',
            loteP: '',
            fechaVencimientoP: '',
            dosisP: '',
            frecuenciaP: '',
            inicioConsumoP: '',
            finalizaConsumoP: '',
            problemCalidadP: '',
            descripcionProblCalidadP: '',
            describe: '',
            cie10: '',
            dateEventAdv: '',
            dateEventAdvFin: '',
            desagradable: '',
            urgencia: '',
            icapacidad: '',
            hospitaliza: '',
            peligorVida: '',
            consumoProductos: '',
        };
        this.today = Date.now();
        this.textoBuscar = '';
    }
    Report2otherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Report Paciente');
        this.getDeptos();
        this.getCie10();
    };
    Report2otherPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    Report2otherPage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Reporte',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    Report2otherPage.prototype.enviarReporte = function () {
        this.reportProvider.addReport(this.report);
        this.presentAlert('Reporte enviado. presione "Ok" para continuar');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__naranfda_naranfda__["a" /* NaranfdaPage */]);
    };
    Report2otherPage.prototype.envi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__naranfda_naranfda__["a" /* NaranfdaPage */]);
    };
    Report2otherPage.prototype.getDeptos = function () {
        var _this = this;
        this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json').map(function (res) { return res.json(); }).subscribe(function (deptos) {
            _this.deptos = deptos;
        }, function (err) {
            console.log(err);
        });
    };
    Report2otherPage.prototype.imc = function () {
        console.log(this.report.pesoP);
        console.log(this.report.pesoP);
        var result = (this.report.pesoP / (Math.pow(this.report.estaturaP / 100, 2))).toFixed(1);
        var scoreCont = document.getElementById('showResult');
        console.log(result);
        if (result < 18.5.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Inferior al Normal";
        }
        if (result >= 18.5.toString() && result <= 24.9.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Normal";
        }
        if (result >= 25.0.toString() && result <= 29.9.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Superior al Normal";
        }
        if (result > 30.0.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Obesidad";
        }
    };
    Report2otherPage.prototype.buscar = function (event) {
        this.textoBuscar = event.value;
    };
    Report2otherPage.prototype.capture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cameraOptions, result, image, pictures, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        cameraOptions = {
                            quality: 50,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures = Object(__WEBPACK_IMPORTED_MODULE_9_firebase__["storage"])().ref('pictures');
                        pictures.putString(image, 'data_url');
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Report2otherPage.prototype.enviar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Reporte Enviado',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__naranfda_naranfda__["a" /* NaranfdaPage */]);
                        return [2 /*return*/];
                }
            });
        });
    };
    Report2otherPage.prototype.getCie10 = function () {
        var _this = this;
        this.http.get('https://raw.githubusercontent.com/cayasso/cie10/master/cie10-array.json').map(function (res) { return res.json(); }).subscribe(function (cie10) {
            _this.cie10 = cie10;
            console.log(cie10);
        }, function (err) {
            console.log(err);
        });
    };
    Report2otherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report2other',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/report2other/report2other.html"*/'<!--\n  Generated template for the Report2otherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="light">\n      <ion-title>\n\n          <img src="../../assets//imgs/LogoNutrivigilancia.png" height="45" (click)="home();">\n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <p>Fecha del reporte</p>\n    <p>{{today | date}}</p>\n</ion-item>\n\n<div>\n\n  <h1>Datos del Generador del Reporte</h1>\n\n</div>\n<ion-item>\n  <ion-label floating>Nombre</ion-label>\n  <ion-input [(ngModel)]="report.nombreR" name="namR"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Celular</ion-label>\n  <ion-input [(ngModel)]="report.celularR" name="celularR"></ion-input>\n</ion-item>\n\n<ion-item>\n      <ion-label floating>Institución</ion-label>\n      <ion-input [(ngModel)]="report.institucionR" name="institucionR"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Tipo Documento de Identidad</ion-label>\n  <ion-select [(ngModel)]="report.tipoDocumentoR" name="tipoDocumentoR">\n      <ion-option value="cedula">Cédula</ion-option>\n      <ion-option value="ti">TI</ion-option>\n      <ion-option value="pasaporte">Pasaporte</ion-option>\n      <ion-option value="rc">RC</ion-option>\n      <ion-option value="otro">Otro</ion-option>\n  </ion-select>\n</ion-item>\n\n<ion-item>\n    <ion-label floating>Número Documento</ion-label>\n    <ion-input [(ngModel)]="report.numeroDocumentoR" name="numeroDocumentoR"></ion-input>\n</ion-item>\n\n\n  <label for="color">Ciudad</label>\n  <input list="colors" name="color">\n  <datalist id="colors">\n    <option  *ngFor="let depto of deptos" >\n      {{depto.municipio}}-{{depto.departamento}}\n    </option>\n  </datalist>\n\n\n<ion-item></ion-item>\n\n    <h1>Datos del Paciente o usuario</h1>\n\n\n<ion-item>\n  <ion-label floating>Nombre y Apellido (solo las iniciales)</ion-label>\n  <ion-input [(ngModel)]="report.nombreP" name="nombreP"></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label floating>Edad</ion-label>\n  <ion-input [(ngModel)]="report.edadP" name="edadP"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Correo</ion-label>\n  <ion-input [(ngModel)]="report.emailP" name="emailP"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Celular</ion-label>\n  <ion-input [(ngModel)]="report.celularP"  name="celularP"></ion-input>\n</ion-item>\n\n<ion-list radio-group [(ngModel)]="report.generoP" name="generoP">\n  <ion-list-header>Género</ion-list-header>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>M</ion-label>\n        <ion-radio value="masculino"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>F</ion-label>\n        <ion-radio value="femenino"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Otro</ion-label>\n        <ion-radio value="otro"></ion-radio>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-list>\n\n<ion-item>\n  <ion-label floating>Peso (Kg)</ion-label>\n  <ion-input id="pesoP" name="pesoP" [(ngModel)]="report.pesoP" type="number"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Estatura (Cm)</ion-label>\n  <ion-input id="estaturaP" name="estaturaP" [(ngModel)]="report.estaturaP" type="number"></ion-input>\n</ion-item>\n\n<ion-row>\n  <ion-col>\n    <ion-item>\n      <button ion-button (click)="imc();">Calcular IMC</button>\n      <p  id="showResult"></p>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n<ion-list radio-group [(ngModel)]="report.antecedentesP" name="antecedentesP">\n    <ion-col>\n     Antecedentes de reacciones alérgicas (confirmados)\n </ion-col>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>si</ion-label>\n          <ion-radio value="si"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value="no"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n</ion-list>\n<ion-item>\n  <ion-label>¿Cuál?</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-list radio-group [(ngModel)]="report.problemasSaludP" name="problemasSaludP">\n  <ion-col>\n    Problemas de salud (diferentes al evento adverso actual)\n  </ion-col>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>si</ion-label>\n        <ion-radio value="si"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>No</ion-label>\n        <ion-radio value="no"></ion-radio>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-list>\n<ion-item>\n    <ion-label>¿Cuál?</ion-label>\n    <ion-input></ion-input>\n</ion-item>\n\n<ion-list radio-group [(ngModel)]="report.embarazoP" name="embarazoP">\n  <ion-list-header>\n    Estado de embarazo\n  </ion-list-header>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>si</ion-label>\n        <ion-radio value="si"></ion-radio>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>No</ion-label>\n        <ion-radio value="no"></ion-radio>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-list>\n\n<ion-list radio-group [(ngModel)]="report.trimestreP" name="trimestreP">\n  <ion-list-header>\n    Trimestre\n  </ion-list-header>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>Primero</ion-label>\n        <ion-radio value="primero"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n    <ion-col>\n      <ion-item>\n        <ion-label>Segundo</ion-label>\n        <ion-radio value="segundo"></ion-radio>\n      </ion-item>\n    </ion-col>\n\n    <ion-col>\n      <ion-item>\n        <ion-label>Tercero</ion-label>\n        <ion-radio value="tercero"></ion-radio>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n</ion-list>\n\n<ion-item></ion-item>\n\n   <h1>Información del Producto Relacionado con la Reacción Adversa</h1>\n\n\n<ion-item>\n  <ion-label floating>Seleccione el tipo de producto</ion-label>\n  <ion-select  [(ngModel)]="report.tipoProductoP" name="tipoProductoP">\n  <ion-option value="nutricionEnteral">Nutrición Enteral</ion-option>\n  <ion-option value="nutricionParenteral">Nutrición Parenteral</ion-option>\n  <ion-option value="suplementoDietario">Suplemento Dietario</ion-option>\n  <ion-option value="formulaInfantil">Fórmula Infantil</ion-option>\n  </ion-select>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Nombre y/o Marca</ion-label>\n  <ion-input [(ngModel)]="report.marcaP" name="marcaP"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Fabricante (Nombre del Laboratorio)</ion-label>\n  <ion-input [(ngModel)]="report.laboratorioP" name="laboratorioP"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Número de Registro Sanitario</ion-label>\n  <ion-input [(ngModel)]="report.registroSanitarioP" name="registroSanitarioP"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Número de Lote</ion-label>\n  <ion-input [(ngModel)]="report.loteP" name="loteP"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Fecha de Vencimiento del Producto</ion-label>\n  <ion-datetime displayFormat="DD/MM/YYYY" min="2000" max="2050-12-31" [(ngModel)]="report.fechaVencimientoP" name="fechaVencimientoP"></ion-datetime>\n</ion-item>\n\n<p>Dosis y frecuencia</p>\n<ion-item>\n    <ion-label floating>Unidad de Dosis</ion-label>\n    <ion-input [(ngModel)]="report.dosisP" name="dosisP"></ion-input>\n</ion-item>\n<ion-item>\n    <ion-label floating>Unidad de frecuencia</ion-label>\n    <ion-input [(ngModel)]="report.frecuenciaP" name="frecuenciaP"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Fecha de incio de consumo</ion-label>\n  <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="report.inicioConsumoP" name="inicioConsumoP"></ion-datetime>\n</ion-item>\n\n<ion-item>\n  <ion-label floating>Fecha de finalización de consumo</ion-label>\n  <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="report.finalizaConsumoP" name="finalizaConsumoP"></ion-datetime>\n</ion-item>\n\n<ion-list radio-group [(ngModel)]="report.problemCalidadP" name="problemCalidadP">\n  <ion-label>¿Detectó algún problema de calidad del producto?</ion-label>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Si</ion-label>\n          <ion-radio value="si"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value="no"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n</ion-list>\n\n<ion-item>\n  <ion-label floating>Describa el problema de calidad, si es el caso</ion-label>\n  <ion-textarea [(ngModel)]="report.descripcionProblCalidadP" name="descripcionProblCalidadP"></ion-textarea>\n</ion-item>\n\n\n  <h4>Tomar o subir fotografía del producto sospechoso </h4>\n\n<ion-row>\n  <ion-col col-6>\n    <ion-item>\n      <button ion-button icon-only large round (click)="capture()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-col>\n\n</ion-row>\n<p aling="center"></p>\n\n\n<h1>Información del evento Adverso</h1>\n\n<p>Descripción del evento adverso</p>\n      <ion-item>\n          <ion-textarea [(ngModel)]="report.describe" name="describe"></ion-textarea>\n      </ion-item>\n\n\n      <label for="cie10">seleccione el CIE10</label>\n      <input list="cie10s" name="cie10" [(ngModel)]="report.cie10" name="cie10">\n      <datalist id="cie10s">\n        <option  *ngFor="let ci of cie10" >\n          {{ci.c}}-{{ci.d}}\n        </option>\n      </datalist>\n\n\n      <ion-item>\n        <ion-label>Fecha de incio del evento adverso</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="report.dateEventAdv" name="dateEventAdv"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Fecha de desaparició del evento adverso</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="report.dateEventAdvFin" name="dateEventAdvFin"></ion-datetime>\n      </ion-item>\n\n      <h2>Seriedad del evento adverso</h2>\n\n<ion-list radio-group>\n     <p>Seleccione 1 o varias de las siguientes opciones con respecto al evento adverso</p>\n            <ion-list radio-group [(ngModel)]="report.desagradable" name="desagradable">\n               <ion-label>¿Era sólo desagradable?</ion-label>\n                <ion-row>\n                      <ion-col>\n                        <ion-item>\n                            <ion-label>Si</ion-label>\n                            <ion-radio value="yes"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n\n                      <ion-col>\n                          <ion-item>\n                              <ion-label>No</ion-label>\n                              <ion-radio value="no"></ion-radio>\n                          </ion-item>\n                      </ion-col>\n               </ion-row>\n            </ion-list>\n\n\n\n<ion-list radio-group [(ngModel)]="report.urgencia" name="urgencia">\n      <ion-label>¿Requirió consulta médica o urgencias?</ion-label>\n                <ion-row>\n                    <ion-col>\n                      <ion-item>\n                          <ion-label>Si</ion-label>\n                          <ion-radio value="yes"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-item>\n                            <ion-label>No</ion-label>\n                            <ion-radio value="no"></ion-radio>\n                        </ion-item>\n                    </ion-col>\n            </ion-row>\n</ion-list>\n\n<ion-list radio-group [(ngModel)]="report.icapacidad" name="icapacidad">\n      <ion-label>¿Generó incapacidad médica?</ion-label>\n                <ion-row>\n                    <ion-col>\n                      <ion-item>\n                          <ion-label>Si</ion-label>\n                          <ion-radio value="yes"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-item>\n                            <ion-label>No</ion-label>\n                            <ion-radio value="no"></ion-radio>\n                        </ion-item>\n                    </ion-col>\n            </ion-row>\n </ion-list>\n\n\n<ion-list radio-group [(ngModel)]="report.hospitaliza" name="hospitaliza">\n    <ion-label>¿Ocasionó o prolongó hospitalización?</ion-label>\n              <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio value="yes"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio value="no"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n          </ion-row>\n</ion-list>\n\n<ion-list radio-group [(ngModel)]="report.peligorVida" name="peligorVida">\n    <ion-label>¿Amenazó la vida?</ion-label>\n            <ion-row>\n                <ion-col>\n                  <ion-item>\n                      <ion-label>Si</ion-label>\n                      <ion-radio value="yes"></ion-radio>\n                  </ion-item>\n                </ion-col>\n\n                <ion-col>\n                    <ion-item>\n                        <ion-label>No</ion-label>\n                        <ion-radio value="no"></ion-radio>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n  </ion-list>\n</ion-list>\n\n<ion-item>\n  <ion-label floating >\n      <ion-icon name="build" item-start class="text-primary"></ion-icon>\n      Consumo de otros productos</ion-label>\n  <ion-select name="otrosProductos" [(ngModel)]="report.consumoProductos" name="consumoProductos">\n\n<ion-option value="alcohol">Alcohol</ion-option>\n<ion-option value="cigarrillo">Cigarrillo</ion-option>\n<ion-option value="cafe">Café</ion-option>\n<ion-option value="marihuana">Marihuana</ion-option>\n<ion-option value="otrasDrogas">Otros Drogas</ion-option>\n</ion-select>\n</ion-item>\n\n<h2>Consecuencias y Evolución del evento adverso </h2>\n<ion-row>\n  <ion-col col-6>\n    <ion-item>\n      <button ion-button icon-only large round (click)="capture()">\n        <ion-icon name="camera"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-col>\n\n</ion-row>\n<p aling="center"></p>\n<p aling="center"><img></p>\n\n<button ion-button icon-start ion-button block class="center3" (click)="enviar()">\n    Enviar Reporte\n</button>\n</ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/report2other/report2other.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_5__providers_provreport_provreport__["a" /* ProvreportProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera_ngx__["a" /* Camera */]])
    ], Report2otherPage);
    return Report2otherPage;
}());

//# sourceMappingURL=report2other.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_provreport_provreport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__naranfda_naranfda__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera_ngx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, navParams, alertController, http, afd, reportProvider, alertCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertController = alertController;
        this.http = http;
        this.afd = afd;
        this.reportProvider = reportProvider;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.report = {
            nombreR: '',
            celularR: '',
            institucionR: '',
            tipoDocumentoR: '',
            numeroDocumentoR: '',
            ciudadR: '',
            date: '',
            nombreP: '',
            edadP: '',
            emailP: '',
            celularP: '',
            generoP: '',
            pesoP: '',
            estaturaP: '',
            imcP: '',
            antecedentesP: '',
            problemasSaludP: '',
            embarazoP: '',
            trimestreP: '',
            tipoProductoP: '',
            marcaP: '',
            laboratorioP: '',
            registroSanitarioP: '',
            loteP: '',
            fechaVencimientoP: '',
            dosisP: '',
            frecuenciaP: '',
            inicioConsumoP: '',
            finalizaConsumoP: '',
            problemCalidadP: '',
            descripcionProblCalidadP: '',
        };
        this.today = Date.now();
        this.textoBuscar = '';
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Report Paciente');
        this.getDeptos();
    };
    ReportPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    ReportPage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Reporte',
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    };
    ReportPage.prototype.enviarReporte = function () {
        this.reportProvider.addReport(this.report);
        this.presentAlert('Reporte enviado. presione "Ok" para continuar');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__naranfda_naranfda__["a" /* NaranfdaPage */]);
    };
    ReportPage.prototype.envi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__naranfda_naranfda__["a" /* NaranfdaPage */]);
    };
    ReportPage.prototype.getDeptos = function () {
        var _this = this;
        this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json').map(function (res) { return res.json(); }).subscribe(function (deptos) {
            _this.deptos = deptos;
        }, function (err) {
            console.log(err);
        });
    };
    ReportPage.prototype.imc = function () {
        console.log(this.report.pesoP);
        console.log(this.report.pesoP);
        var result = (this.report.pesoP / (Math.pow(this.report.estaturaP / 100, 2))).toFixed(1);
        var scoreCont = document.getElementById('showResult');
        console.log(result);
        if (result < 18.5.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Inferior al Normal";
        }
        if (result >= 18.5.toString() && result <= 24.9.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Normal";
        }
        if (result >= 25.0.toString() && result <= 29.9.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Superior al Normal";
        }
        if (result > 30.0.toString()) {
            scoreCont.innerHTML = "IMC = " + result + ": Obesidad";
        }
    };
    ReportPage.prototype.buscar = function (event) {
        this.textoBuscar = event.value;
    };
    ReportPage.prototype.capture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cameraOptions, result, image, pictures, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        cameraOptions = {
                            quality: 50,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(cameraOptions)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        pictures = Object(__WEBPACK_IMPORTED_MODULE_9_firebase__["storage"])().ref('pictures');
                        pictures.putString(image, 'data_url');
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/report/report.html"*/'<!--\n  Generated template for the ReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="light">\n      <ion-title>\n          <img src="../../assets//imgs/LogoNutrivigilancia.png" height="45" (click)="home();">\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item>\n      <p>Fecha del reporte</p>\n      <p>{{today | date}}</p>\n  </ion-item>\n\n<div>\n\n    <h1>Datos del Generador del Reporte</h1>\n\n</div>\n  <ion-item>\n    <ion-label floating>Nombre</ion-label>\n    <ion-input [(ngModel)]="report.nombreR" name="namR"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Celular</ion-label>\n    <ion-input [(ngModel)]="report.celularR" name="celularR"></ion-input>\n  </ion-item>\n\n  <ion-item>\n        <ion-label floating>Institución</ion-label>\n        <ion-input [(ngModel)]="report.institucionR" name="institucionR"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Tipo Documento de Identidad</ion-label>\n    <ion-select [(ngModel)]="report.tipoDocumentoR" name="tipoDocumentoR">\n        <ion-option value="cedula">Cédula</ion-option>\n        <ion-option value="ti">TI</ion-option>\n        <ion-option value="pasaporte">Pasaporte</ion-option>\n        <ion-option value="rc">RC</ion-option>\n        <ion-option value="otro">Otro</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Número Documento</ion-label>\n      <ion-input [(ngModel)]="report.numeroDocumentoR" name="numeroDocumentoR"></ion-input>\n  </ion-item>\n\n\n    <label for="color">Ciudad</label>\n    <input list="colors" name="color">\n    <datalist id="colors">\n      <option  *ngFor="let depto of deptos" >\n        {{depto.municipio}}-{{depto.departamento}}\n      </option>\n    </datalist>\n\n\n  <ion-item></ion-item>\n\n      <h1>Datos del Paciente o usuario</h1>\n\n\n  <ion-item>\n    <ion-label floating>Nombre y Apellido (solo las iniciales)</ion-label>\n    <ion-input [(ngModel)]="report.nombreP" name="nombreP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n      <ion-label floating>Edad</ion-label>\n    <ion-input [(ngModel)]="report.edadP" name="edadP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Correo</ion-label>\n    <ion-input [(ngModel)]="report.emailP" name="emailP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Celular</ion-label>\n    <ion-input [(ngModel)]="report.celularP"  name="celularP"></ion-input>\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="report.generoP" name="generoP">\n    <ion-list-header>Género</ion-list-header>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>M</ion-label>\n          <ion-radio value="masculino"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>F</ion-label>\n          <ion-radio value="femenino"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>Otro</ion-label>\n          <ion-radio value="otro"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n  <ion-item>\n    <ion-label floating>Peso (Kg)</ion-label>\n    <ion-input id="pesoP" name="pesoP" [(ngModel)]="report.pesoP" type="number"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Estatura (Cm)</ion-label>\n    <ion-input id="estaturaP" name="estaturaP" [(ngModel)]="report.estaturaP" type="number"></ion-input>\n  </ion-item>\n\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <button ion-button (click)="imc();">Calcular IMC</button>\n        <p  id="showResult"></p>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-list radio-group [(ngModel)]="report.antecedentesP" name="antecedentesP">\n      <ion-col>\n       Antecedentes de reacciones alérgicas (confirmados)\n   </ion-col>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>si</ion-label>\n            <ion-radio value="si"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>No</ion-label>\n            <ion-radio value="no"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  </ion-list>\n  <ion-item>\n    <ion-label>¿Cuál?</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="report.problemasSaludP" name="problemasSaludP">\n    <ion-col>\n      Problemas de salud (diferentes al evento adverso actual)\n    </ion-col>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>si</ion-label>\n          <ion-radio value="si"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value="no"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <ion-item>\n      <ion-label>¿Cuál?</ion-label>\n      <ion-input></ion-input>\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="report.embarazoP" name="embarazoP">\n    <ion-list-header>\n      Estado de embarazo\n    </ion-list-header>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>si</ion-label>\n          <ion-radio value="si"></ion-radio>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label>No</ion-label>\n          <ion-radio value="no"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n  <ion-list radio-group [(ngModel)]="report.trimestreP" name="trimestreP">\n    <ion-list-header>\n      Trimestre\n    </ion-list-header>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Primero</ion-label>\n          <ion-radio value="primero"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label>Segundo</ion-label>\n          <ion-radio value="segundo"></ion-radio>\n        </ion-item>\n      </ion-col>\n\n      <ion-col>\n        <ion-item>\n          <ion-label>Tercero</ion-label>\n          <ion-radio value="tercero"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n  <ion-item></ion-item>\n\n     <h1>Información del Producto Relacionado con la Reacción Adversa</h1>\n\n\n  <ion-item>\n    <ion-label floating>Seleccione el tipo de producto</ion-label>\n    <ion-select  [(ngModel)]="report.tipoProductoP" name="tipoProductoP">\n    <ion-option value="nutricionEnteral">Nutrición Enteral</ion-option>\n    <ion-option value="nutricionParenteral">Nutrición Parenteral</ion-option>\n    <ion-option value="suplementoDietario">Suplemento Dietario</ion-option>\n    <ion-option value="formulaInfantil">Fórmula Infantil</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Nombre y/o Marca</ion-label>\n    <ion-input [(ngModel)]="report.marcaP" name="marcaP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Fabricante (Nombre del Laboratorio)</ion-label>\n    <ion-input [(ngModel)]="report.laboratorioP" name="laboratorioP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Número de Registro Sanitario</ion-label>\n    <ion-input [(ngModel)]="report.registroSanitarioP" name="registroSanitarioP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Número de Lote</ion-label>\n    <ion-input [(ngModel)]="report.loteP" name="loteP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Fecha de Vencimiento del Producto</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" min="2000" max="2050-12-31" [(ngModel)]="report.fechaVencimientoP" name="fechaVencimientoP"></ion-datetime>\n  </ion-item>\n\n  <p>Dosis y frecuencia</p>\n  <ion-item>\n      <ion-label floating>Unidad de Dosis</ion-label>\n      <ion-input [(ngModel)]="report.dosisP" name="dosisP"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating>Unidad de frecuencia</ion-label>\n      <ion-input [(ngModel)]="report.frecuenciaP" name="frecuenciaP"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Fecha de incio de consumo</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="report.inicioConsumoP" name="inicioConsumoP"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Fecha de finalización de consumo</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="report.finalizaConsumoP" name="finalizaConsumoP"></ion-datetime>\n  </ion-item>\n\n  <ion-list radio-group [(ngModel)]="report.problemCalidadP" name="problemCalidadP">\n    <ion-label>¿Detectó algún problema de calidad del producto?</ion-label>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Si</ion-label>\n            <ion-radio value="si"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>No</ion-label>\n            <ion-radio value="no"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  </ion-list>\n\n  <ion-item>\n    <ion-label floating>Describa el problema de calidad, si es el caso</ion-label>\n    <ion-textarea [(ngModel)]="report.descripcionProblCalidadP" name="descripcionProblCalidadP"></ion-textarea>\n  </ion-item>\n\n\n    <h4>Tomar o subir fotografía del producto sospechoso </h4>\n\n  <ion-row>\n    <ion-col col-6>\n      <ion-item>\n        <button ion-button icon-only large round (click)="capture()">\n          <ion-icon name="camera"></ion-icon>\n        </button>\n      </ion-item>\n    </ion-col>\n\n  </ion-row>\n  <p aling="center"></p>\n\n  <button ion-button icon-start ion-button block class="center3" (click)="enviarReporte()">\n      Enviar Reporte\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/report/report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_5__providers_provreport_provreport__["a" /* ProvreportProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera_ngx__["a" /* Camera */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 232:
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
webpackEmptyAsyncContext.id = 232;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fda/fda.module": [
		859,
		9
	],
	"../pages/historical/historical.module": [
		860,
		8
	],
	"../pages/home2/home2.module": [
		861,
		7
	],
	"../pages/login/login.module": [
		862,
		6
	],
	"../pages/naranfda/naranfda.module": [
		863,
		5
	],
	"../pages/naranjo/naranjo.module": [
		864,
		4
	],
	"../pages/register/register.module": [
		865,
		3
	],
	"../pages/report/report.module": [
		866,
		2
	],
	"../pages/report2other/report2other.module": [
		867,
		1
	],
	"../pages/rol/rol.module": [
		868,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 276;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvregisterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProvregisterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProvregisterProvider = /** @class */ (function () {
    function ProvregisterProvider(afRegister) {
        this.afRegister = afRegister;
        console.log('Hello ProvregisterProvider Provider');
    }
    ProvregisterProvider.prototype.registerEmailAndPassword = function (email, password) {
        this.afRegister.auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage); // log error, this must be changed to be shown on page
            // ...
        });
    };
    ProvregisterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["AngularFireAuth"]])
    ], ProvregisterProvider);
    return ProvregisterProvider;
}());

//# sourceMappingURL=provregister.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(_users, afAuth) {
        this._users = _users;
        this.afAuth = afAuth;
        afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log("user Entra como", user);
            }
        });
    }
    AuthProvider.prototype.signInWithEmail = function (credentials) {
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthProvider.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_fire_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_pipes__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_filtro_pipes_filtro__ = __webpack_require__(835);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["a" /* PipesPipe */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_filtro_pipes_filtro__["a" /* PipesFiltroPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipes_pipes__["a" /* PipesPipe */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_filtro_pipes_filtro__["a" /* PipesFiltroPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(446);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_fda_fda__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_historical_historical__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_naranjo_naranjo__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_report_report__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_proveedorcountry_proveedorcountry__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_provreport_provreport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_provregister_provregister__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_naranfda_naranfda__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_rol_rol__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home2_home2__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_report2other_report2other__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera_ngx__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2__ = __webpack_require__(856);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__config__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_pipes_module__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//Firebase





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_fda_fda__["a" /* FdaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_historical_historical__["a" /* HistoricalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_naranjo_naranjo__["a" /* NaranjoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_naranfda_naranfda__["a" /* NaranfdaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_rol_rol__["a" /* RolPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_report2other_report2other__["a" /* Report2otherPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fda/fda.module#FdaPageModule', name: 'FdaPage', segment: 'fda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historical/historical.module#HistoricalPageModule', name: 'HistoricalPage', segment: 'historical', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home2/home2.module#Home2PageModule', name: 'Home2Page', segment: 'home2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/naranfda/naranfda.module#NaranfdaPageModule', name: 'NaranfdaPage', segment: 'naranfda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/naranjo/naranjo.module#NaranjoPageModule', name: 'NaranjoPage', segment: 'naranjo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report2other/report2other.module#Report2otherPageModule', name: 'Report2otherPage', segment: 'report2other', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rol/rol.module#RolPageModule', name: 'RolPage', segment: 'rol', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_29__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_25_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_27__config__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_fda_fda__["a" /* FdaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_historical_historical__["a" /* HistoricalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_naranjo_naranjo__["a" /* NaranjoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_naranfda_naranfda__["a" /* NaranfdaPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_rol_rol__["a" /* RolPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_home2_home2__["a" /* Home2Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_report2other_report2other__["a" /* Report2otherPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera_ngx__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_proveedorcountry_proveedorcountry__["a" /* ProveedorcountryProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_provreport_provreport__["a" /* ProvreportProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_provregister_provregister__["a" /* ProvregisterProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_report__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__naranjo_naranjo__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fda_fda__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historical_historical__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dbUser, afAuth, navParams, http, af, userProv) {
        this.navCtrl = navCtrl;
        this.dbUser = dbUser;
        this.afAuth = afAuth;
        this.navParams = navParams;
        this.http = http;
        this.af = af;
        this.userProv = userProv;
        this.user = {};
        this.profile = {};
        this.checkUser = this.checkUser.bind(this);
        //get name
        this.name = navParams.get('nameU');
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewWillEnter = function () {
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().onAuthStateChanged(this.checkUser);
        this.getUserFirstName();
        console.log('The Users first name is ' + this.getUserFirstName());
    };
    HomePage.prototype.checkUser = function (user) {
        if (!user) {
            console.log("user is not logged in");
            console.log("user isot logged ot logged in");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        }
        else {
            console.log("user is logged in");
            console.log("user is logged in" + user.email);
            var nameMail = document.getElementById('correo');
            nameMail.innerHTML = "Bienvenido " + user.email + "!";
            return;
        }
    };
    HomePage.prototype.logOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_firebase_app__["auth"]().signOut().then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        });
    };
    HomePage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
    };
    HomePage.prototype.report = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__report_report__["a" /* ReportPage */]);
    };
    HomePage.prototype.naranjo = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__naranjo_naranjo__["a" /* NaranjoPage */]);
    };
    HomePage.prototype.fda = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__fda_fda__["a" /* FdaPage */]);
    };
    HomePage.prototype.historical = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__historical_historical__["a" /* HistoricalPage */]);
    };
    HomePage.prototype.home = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.getCurrentUser = function () {
        this.afAuth.authState.subscribe(function (data) {
            console.log('info ' + data.displayName);
            return data.uid;
        });
        this.userProv.getUser().valueChanges().subscribe(function (data) {
            console.log("datas Loquis", data);
        });
    };
    HomePage.prototype.getUserFirstName = function () {
        this.profileData = this.af.object("users/" + this.getCurrentUser());
        return this.profileData;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/home/home.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="light">\n      <ion-title>\n        <img src="../../assets//imgs/LogoNutrivigilancia.png" height="52" (click)="home();" >\n        <a class="cerrarSesion" (click)="logOut();">Cerrar Sesión</a>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n<ion-content >\n\n</ion-content>\n\n<ion-content padding >\n  <ion-slides  autoplay="1000" loop="true" speed="1500" pager="true" (ionSlideDidChange)="slideChanged()" class="center3">\n    <ion-slide>\n      <img src="../../assets//imgs/index1.jpg" alt="img1">\n    </ion-slide>\n    <ion-slide>\n      <img src="../../assets//imgs/index2.jpg" alt="img2">\n    </ion-slide>\n    <ion-slide>\n      <img src="../../assets//imgs/index3.jpg" alt="img3">\n    </ion-slide>\n    <ion-slide>\n      <img src="../../assets//imgs/index4.jpg" alt="img4">\n    </ion-slide>\n  </ion-slides>\n  <h2 class="center2"><strong>App de Nutrivigilancia</strong> </h2>\n\n  <h3 id="correo">\n\n  </h3>\n\n\n  <h4 class="center">Aplicación para gestión y reporte de eventos adversos asociadas a\n    nutriciones artificiales (nutriciones enterales y parenterales), fórmulas\n    infantiles y suplementos dietarios.</h4>\n\n    <button ion-button icon-start ion-button block (click)="report();" class="myButton2">\n        <ion-icon name="ios-create"></ion-icon> <br> <label>Generar reporte</label>\n  </button>\n\n  <button ion-button icon-start ion-button block (click)="naranjo();" class="myButton" >\n        <ion-icon name="list-box"></ion-icon> <br> <label>Algoritmo Naranjo</label>\n     </button>\n\n  <button ion-button icon-start ion-button block (click)="fda();" class="myButton">\n            <ion-icon name="ios-paper"></ion-icon> <br> <label>Algoritmo FDA</label>\n  </button>\n\n  <button ion-button icon-start ion-button block (click)="historical();" class="myButton" >\n          <ion-icon name="ios-folder-open"></ion-icon> <br> <label>Histórico</label>\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_8__angular_fire_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(_afDB, afAuth) {
        var _this = this;
        this._afDB = _afDB;
        this.afAuth = afAuth;
        this.users = {};
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    UserProvider.prototype.addUser = function (user) {
        if (!this.userId)
            return;
        this.users = this._afDB.object("/users/" + this.userId);
        this.users.set({ user: user });
    };
    UserProvider.prototype.getUser = function () {
        return this._afDB.object("/users");
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["AngularFireAuth"]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProvreportProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProvreportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProvreportProvider = /** @class */ (function () {
    function ProvreportProvider(_afDB, afAuth) {
        var _this = this;
        this._afDB = _afDB;
        this.afAuth = afAuth;
        this.reports = {};
        this.naranjos = {};
        this.fdas = {};
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    ProvreportProvider.prototype.addReport = function (report) {
        if (!this.userId)
            return;
        this.reports.userId = this.userId;
        this.reports = this._afDB.list("/Reports/" + this.userId + "/user_Reports");
        return this.reports.push({ report: report });
    };
    ProvreportProvider.prototype.addNaranjo = function (naranjo) {
        this.naranjos.userId = this.userId;
        this.naranjos = this._afDB.list("/Reports/" + this.userId + "/algoritmo_Naranjos");
        return this.naranjos.push({ naranjo: naranjo });
    };
    ProvreportProvider.prototype.addFDA = function (fda) {
        this.fdas.userId = this.userId;
        this.fdas = this._afDB.list("/Reports/" + this.userId + "/Algoritmo_FDAs");
        return this.fdas.push({ fda: fda });
    };
    ProvreportProvider.prototype.getReportList = function () {
        if (!this.userId)
            return;
        this.reports = this._afDB.list("/Reports");
        return this.reports;
    };
    ProvreportProvider.prototype.updateReport = function (report) {
        return this.reports.update(report.key, report);
    };
    ProvreportProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["AngularFireAuth"]])
    ], ProvreportProvider);
    return ProvreportProvider;
}());

//# sourceMappingURL=provreport.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rol_rol__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, db, navParams, auth, userProv) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.auth = auth;
        this.userProv = userProv;
        this.errorMessage = '';
        this.email = "";
        this.password = "";
        this.name = "";
        //get name
        this.name = navParams.get('nameU');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('LoginPage');
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var credentials = {
            email: this.email,
            password: this.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () {
            return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__rol_rol__["a" /* RolPage */]);
        }, function (error) { return _this.loginError = error.message; });
    };
    LoginPage.prototype.forgotPassword = function () {
        var auth = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]();
        auth.sendPasswordResetEmail(this.email).then(function () {
            alert('Se ha enviado un correo, por favor siga los pasos');
        }).catch(function (error) {
            // An error happened.
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/login/login.html"*/'<ion-content padding class="bgContent">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"><img src="../../assets//imgs/IconoNT.png" height="120"></div>\n      <h2 ion-text class="text-primary">\n        <strong>Nutrivigilancia</strong>\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form (ngSubmit)="login()">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Correo\n        </ion-label>\n        <ion-input [(ngModel)]="email" name="email" type="text" value="" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Contraseña\n        </ion-label>\n        <ion-input [(ngModel)]="password" name="password" type="password" required></ion-input>\n      </ion-item>\n    </form>\n\n\n\n    <p text-right ion-text color="danger" tappable (click)="forgotPassword()"><strong>¿Olvidó su contraseña?</strong></p>\n\n    <div>\n      <button ion-button icon-start block color="primary" tappable (click)="login()">\n        <ion-icon class="login" name="log-in"></ion-icon>\n        Ingresar\n      </button>\n\n\n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="light" tappable (click)="register()">¿Eres Nuevo? <strong>Regístrate</strong></span>\n    </div>\n\n    <p id="demo"></p>\n\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PipesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PipesPipe = /** @class */ (function () {
    function PipesPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PipesPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLowerCase();
    };
    PipesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'pipes',
        })
    ], PipesPipe);
    return PipesPipe;
}());

//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesFiltroPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the PipesFiltroPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var PipesFiltroPipe = /** @class */ (function () {
    function PipesFiltroPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    PipesFiltroPipe.prototype.transform = function (arreglo, texto, columna) {
        if (texto === '') {
            return arreglo;
        }
        texto = texto.toLowerCase();
        return arreglo.filter(function (item) {
            return item[columna].toLowerCase().includes(texto);
        });
    };
    PipesFiltroPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'pipesFiltro',
        })
    ], PipesFiltroPipe);
    return PipesFiltroPipe;
}());

//# sourceMappingURL=pipes-filtro.js.map

/***/ }),

/***/ 853:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // side Menu navigation
        this.pages = [
            { title: 'Cerrar Sesión', component: "logout" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component == "logout") {
            __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().signOut().then(function () {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProveedorcountryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProveedorcountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProveedorcountryProvider = /** @class */ (function () {
    function ProveedorcountryProvider(http) {
        this.http = http;
        console.log('Hello ProveedorcountryProvider Provider');
    }
    ProveedorcountryProvider.prototype.getApiCountry = function () {
        return this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json');
    };
    ProveedorcountryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProveedorcountryProvider);
    return ProveedorcountryProvider;
}());

//# sourceMappingURL=proveedorcountry.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAltLcamXKZc8A_2YidiSSnZjidk6wqbWo",
        authDomain: "nutrivigilancia2019.firebaseapp.com",
        databaseURL: "https://nutrivigilancia2019.firebaseio.com",
        projectId: "nutrivigilancia2019",
        storageBucket: "nutrivigilancia2019.appspot.com",
        messagingSenderId: "64257478425"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FdaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provreport_provreport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FdaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FdaPage = /** @class */ (function () {
    function FdaPage(navCtrl, navParams, reportProvider, afd, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reportProvider = reportProvider;
        this.afd = afd;
        this.alertCtrl = alertCtrl;
        this.fda = {
            p1: " ",
            p2: " ",
            p3: " ",
        };
    }
    FdaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FdaPage');
    };
    FdaPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FdaPage.prototype.algoFDA = function () {
        for (var key in this.fda) {
            if (!this.fda.hasOwnProperty(key))
                continue;
            var value = this.fda[key];
            if (value) {
                //Resultado Dudosa
                while (this.fda.p1 == 0 && this.fda.p2 == 1 && this.fda.p3 == 0) {
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Dudosa";
                    this.reportProvider.addFDA(score);
                    break;
                }
                while (this.fda.p1 == 0 && this.fda.p2 == 0 && this.fda.p3 == 1) {
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Dudosa";
                    this.reportProvider.addFDA(score);
                    break;
                }
                while (this.fda.p1 == 0 && this.fda.p2 == 0 && this.fda.p3 == 0) {
                    //document.getElementById("showScore").innerHTML = "Dudosa";
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Dudosa";
                    this.reportProvider.addFDA(score);
                    break;
                }
                while (this.fda.p1 == 0 && this.fda.p2 == 1 && this.fda.p3 == 1) {
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Dudosa";
                    this.reportProvider.addFDA(score);
                    break;
                }
                //Resultado Posible
                while (this.fda.p1 == 1 && this.fda.p2 == 0 && this.fda.p3 == 0) {
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Posible";
                    this.reportProvider.addFDA(score);
                    break;
                }
                while (this.fda.p1 == 1 && this.fda.p2 == 0 && this.fda.p3 == 1) {
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Posible";
                    this.reportProvider.addFDA(score);
                    break;
                }
                //Resultado Probable
                while (this.fda.p1 == 1 && this.fda.p2 == 1 && this.fda.p3 == 0) {
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Probable";
                    this.reportProvider.addFDA(score);
                    break;
                }
                //Resultado Probada
                while (this.fda.p1 == 1 && this.fda.p2 == 1 && this.fda.p3 == 1) {
                    var score = document.getElementById("showScore");
                    score.innerHTML = "Probable";
                    this.reportProvider.addFDA(score);
                    break;
                }
                this.reportProvider.addFDA(score);
            }
        }
        this.reportProvider.addFDA(this.fda);
    };
    FdaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fda',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/fda/fda.html"*/'<!--\n  Generated template for the FdaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="light">\n      <ion-title>\n\n          <img src="../../assets//imgs/LogoNutrivigilancia.png" height="45" (click)="home();">\n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>Algoritmo de la FDA</h1> <h4>adaptado para nutriciones artificiales, fórmulas infantiles y suplementos dietarios</h4>\n\n\n\n    <div>\n      <ion-list radio-group [(ngModel)] = " fda.p1">\n        <p>1.¿La reacción tiene una asociación temporal razonable?</p>\n\n               <ion-row>\n                      <ion-col>\n                        <ion-item>\n                            <ion-label>Si</ion-label>\n                            <ion-radio  value="1"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n\n                      <ion-col>\n                          <ion-item>\n                              <ion-label>No</ion-label>\n                              <ion-radio  value="0"></ion-radio>\n                          </ion-item>\n                      </ion-col>\n\n\n              </ion-row>\n    </ion-list>\n    </div>\n\n    <div>\n    <ion-list radio-group [(ngModel)] = "fda.p2">\n        <p>2.¿Desaparece la reacción al suspender el productos?</p>\n\n               <ion-row>\n                      <ion-col>\n                        <ion-item>\n                            <ion-label>Si</ion-label>\n                            <ion-radio value="1"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n\n                      <ion-col>\n                          <ion-item>\n                              <ion-label>No</ion-label>\n                              <ion-radio value="0"></ion-radio>\n                          </ion-item>\n                      </ion-col>\n\n                     </ion-row>\n    </ion-list>\n    </div>\n\n    <div>\n    <ion-list radio-group [(ngModel)] = " fda.p3">\n        <p>3.¿La reacción reaparece al administrar el producto?</p>\n\n               <ion-row>\n                      <ion-col>\n                        <ion-item>\n                            <ion-label>Si</ion-label>\n                            <ion-radio  value="1"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n\n                      <ion-col>\n                          <ion-item>\n                              <ion-label>No</ion-label>\n                              <ion-radio  value="0"></ion-radio>\n                          </ion-item>\n                      </ion-col>\n\n              </ion-row>\n    </ion-list>\n    </div>\n\n\n\n\n        <button ion-button icon-start ion-button block class="center" (click)="algoFDA();" >\n            <ion-icon name="md-sync"></ion-icon>\n                Analizar Algoritmo FDA\n        </button>\n\n        <div >\n          <p >De acuerdo con el Algoritmo de la FDA adaptado para nutriciones artificiales, fórmulas\n              infantiles y suplementos dietarios la clasificación de la reacción es:</p>\n        <h1 id="showScore"></h1>\n\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/fda/fda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_provreport_provreport__["a" /* ProvreportProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FdaPage);
    return FdaPage;
}());

//# sourceMappingURL=fda.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaranjoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_provreport_provreport__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NaranjoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NaranjoPage = /** @class */ (function () {
    function NaranjoPage(navCtrl, navParams, reportProvider, afd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reportProvider = reportProvider;
        this.afd = afd;
        this.naranjo = {
            p1: '',
            p2: '',
            p3: '',
            p4: '',
            p5: '',
            p6: '',
            p7: '',
            p8: '',
            p9: '',
            p10: ''
        };
    }
    NaranjoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NaranjoPage');
    };
    NaranjoPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    NaranjoPage.prototype.analizarAlgoritmo = function () {
        var score = 0;
        for (var key in this.naranjo) {
            if (!this.naranjo.hasOwnProperty(key))
                continue;
            var value = this.naranjo[key];
            if (value) {
                score += parseInt(value);
            }
        }
        this.naranjo.score = score;
        this.reportProvider.addNaranjo(this.naranjo);
        var scoreCont = document.getElementById('showScore');
        if (score >= 9) {
            console.log("Probada");
            scoreCont.innerHTML = "Putuaci\u00F3n = " + score + " : Probada";
        }
        if (score >= 5 && score <= 8) {
            console.log("Probable");
            scoreCont.innerHTML = "Puntuaci\u00F3n = " + score + " : Probable";
        }
        if (score >= 1 && score <= 4) {
            console.log("Posible");
            scoreCont.innerHTML = "Puntuaci\u00F3n = " + score + "  : Posible";
        }
        if (score <= 0) {
            console.log("Dudosa");
            scoreCont.innerHTML = "Puntuaci\u00F3n = " + score + "  : Dudosa";
        }
        scoreCont.classList.remove('hidden');
        this.reportProvider.addNaranjo(this.naranjo);
    };
    NaranjoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-naranjo',template:/*ion-inline-start:"/home/jusk/workspace/Apps/NutriApp3/src/pages/naranjo/naranjo.html"*/'<!--\n  Generated template for the NaranjoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="light">\n      <ion-title>\n\n          <img src="../../assets//imgs/LogoNutrivigilancia.png" height="45" (click)="home();">\n\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <h1>Algoritmo Naranjo adaptado para nutriciones artificiales, fórmulas infantiles y suplementos dietarios</h1>\n\n <div>\n    <ion-list radio-group [(ngModel)] = " naranjo.p1 ">\n          <p>1. ¿Existen evidencias previas o concluyentes sobre la reacción?</p>\n\n                 <ion-row>\n                        <ion-col>\n                          <ion-item>\n                              <ion-label>Si</ion-label>\n                              <ion-radio  value="1" ></ion-radio>\n                          </ion-item>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-item>\n                                <ion-label>No</ion-label>\n                                <ion-radio  value="0" ></ion-radio>\n                            </ion-item>\n                        </ion-col>\n\n                </ion-row>\n    </ion-list>\n </div>\n\n <div>\n    <ion-list radio-group [(ngModel)] = " naranjo.p2">\n        <p>2. ¿La reacción apareció después de usar el producto sospechoso?</p>\n\n               <ion-row>\n                      <ion-col>\n                        <ion-item>\n                            <ion-label>Si</ion-label>\n                            <ion-radio   value="2"></ion-radio>\n                        </ion-item>\n                      </ion-col>\n\n                      <ion-col>\n                          <ion-item>\n                              <ion-label>No</ion-label>\n                              <ion-radio  value="-1"></ion-radio>\n                          </ion-item>\n                      </ion-col>\n\n              </ion-row>\n  </ion-list>\n</div>\n\n<div>\n  <ion-list radio-group  [(ngModel)] = " naranjo.p3">\n      <p>3. ¿La reacción mejoró al suspender el producto  o al administrar un antagonista especifico?</p>\n\n             <ion-row>\n                    <ion-col>\n                      <ion-item>\n                          <ion-label>Si</ion-label>\n                          <ion-radio value="1"></ion-radio>\n                      </ion-item>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-item>\n                            <ion-label>No</ion-label>\n                            <ion-radio  value="0"></ion-radio>\n                        </ion-item>\n                    </ion-col>\n\n                    </ion-row>\n</ion-list>\n</div>\n\n<div>\n<ion-list radio-group [(ngModel)] = " naranjo.p4">\n    <p>4. ¿La reacción reapareció al reutilizar el producto?</p>\n\n           <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio  value="2"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio  value="-1"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n\n          </ion-row>\n</ion-list>\n</div>\n\n<div>\n<ion-list radio-group [(ngModel)] = " naranjo.p5">\n    <p>5. ¿Existen causas alternativas, diferentes del producto, que puedan explicar la reacción?</p>\n\n           <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio  value="-1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio  value="2"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n\n\n          </ion-row>\n</ion-list>\n</div>\n\n<div>\n<ion-list radio-group [(ngModel)] = " naranjo.p6">\n    <p>6. ¿Se presentó la reacción después de administrar un placebo?</p>\n\n           <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio value="-1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio value="1"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n\n          </ion-row>\n</ion-list>\n</div>\n<div>\n<ion-list radio-group [(ngModel)] = " naranjo.p7">\n    <p>7. ¿Se determinó la presencia del producto en sangre u otros líquidos biológicos en concentraciones tóxicas?</p>\n\n           <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio  value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio  value="0"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n\n\n          </ion-row>\n</ion-list>\n</div>\n\n<div>\n<ion-list radio-group [(ngModel)] = " naranjo.p8">\n    <p>8. ¿La reacción fue más intensa al aumentar la dosis o fue menos intensa al disminuir la cantidad?</p>\n\n           <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio  value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio  value="0"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n\n          </ion-row>\n</ion-list>\n</div>\n\n<div>\n<ion-list radio-group [(ngModel)] = " naranjo.p9">\n    <p>9. ¿El paciente ha tenido reacciones similares al producto sospechoso, o a productos similares?</p>\n\n           <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio  value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio  value="0"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n\n\n          </ion-row>\n</ion-list>\n</div>\n\n<div>\n<ion-list radio-group [(ngModel)] = " naranjo.p10">\n    <p>10. ¿Se confirmó la reacción mediante alguna evidencia objetiva?</p>\n\n           <ion-row>\n                  <ion-col>\n                    <ion-item>\n                        <ion-label>Si</ion-label>\n                        <ion-radio  value="1"></ion-radio>\n                    </ion-item>\n                  </ion-col>\n\n\n                  <ion-col>\n                      <ion-item>\n                          <ion-label>No</ion-label>\n                          <ion-radio  value="0"></ion-radio>\n                      </ion-item>\n                  </ion-col>\n\n          </ion-row>\n</ion-list>\n</div>\n\n<button ion-button icon-start ion-button block class="center" (click)="analizarAlgoritmo();" >\n    <ion-icon name="md-sync"></ion-icon>\n    Analizar\n</button>\n\n<div >\n    <p >De acuerdo con el Algoritmo de Naranjo adaptado para para nutriciones artificiales, fórmulas infantiles y suplementos dietarios la clasificación de la reacción adversa es:</p>\n  <h1 id="showScore" class="hidden"></h1>\n\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jusk/workspace/Apps/NutriApp3/src/pages/naranjo/naranjo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_provreport_provreport__["a" /* ProvreportProvider */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]])
    ], NaranjoPage);
    return NaranjoPage;
}());

//# sourceMappingURL=naranjo.js.map

/***/ })

},[441]);
//# sourceMappingURL=main.js.map