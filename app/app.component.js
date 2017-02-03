"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var HEROES = [
    { id: 11, name: 'Mr. Nice', image: 'img1.png' },
    { id: 12, name: 'Narco', image: 'img2.png' },
    { id: 13, name: 'Bombasto', image: 'img3.png' },
    { id: 14, name: 'Celeritas', image: 'img4.png' },
    { id: 15, name: 'Magneta', image: 'img5.png' },
    { id: 16, name: 'Dynama', image: 'img6.png' },
    { id: 17, name: 'RubberMan', image: 'img1.png' },
    { id: 18, name: 'Dr IQ', image: 'img2.png' },
    { id: 19, name: 'Magma', image: 'img5.png' },
    { id: 20, name: 'Tornado', image: 'img4.png' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Tour of Heroes";
        this.heroes = HEROES;
    }
    /*mise en place de la méthode onSelect*/
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div id=\"main\">\n    <div class=\"flex-item\">\n      <h1>{{title}}</h1>\n      <h2>My heroes</h2>\n      <ul class=\"heroes\">\n        <li *ngFor=\"let hero of heroes\" [class.selected]=\"hero===selectedHero\" (click)=\"onSelect(hero)\" >\n          <span class=\"badge\">{{hero.id}}</span>\n          {{hero.name}}\n        </li>\n      </ul>\n    </div>\n    <div class=\"flex-item\">\n      <my-hero-detail [hero]='selectedHero'></my-hero-detail>\n    </div>\n  </div>\n    ",
            styles: ["\n    *{\n      font-family: Roboto;\n    }\n  #main{\n    display:flex;\n    justify-content: space-around;\n    margin-left:150px;\n  }\n  #main:last-child{\n    align-items: center;\n    margin-right:150px;\n  }\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map