var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var objects = [
    {
        name: "Marc",
        firstname: "Ramadison"
    },
    {
        name: "test1",
        firstname: "Ramadison"
    },
    {
        name: "test2",
        firstname: "Ramadison"
    },
    {
        name: "test3",
        firstname: "Ramadison"
    }
];
var fusionObject = function (ob) {
    var nb = 0;
    var uniqueObject = objects.reduce(function (result, object) {
        var _a;
        nb++;
        return __assign(__assign({}, result), (_a = {}, _a["name" + nb] = object.name, _a["firstname" + nb] = object.firstname, _a));
    }, {});
    return uniqueObject;
};
var fusionArray = function (arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1), arr2);
};
var fonction = function (parametre) {
    return parametre;
};
var Peronnage = /** @class */ (function () {
    function Peronnage(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    Peronnage.prototype.description = function () {
        return this.nom + " " + this.prenom + " " + this.age;
    };
    return Peronnage;
}());
var ob = {
    nom: "Marc",
    prenom: "RAMADISON",
    age: 22
};
var perso = new Peronnage("Marc", "Marc", 22);
console.log(perso.description());