Function.prototype.bind||(Function.prototype.bind=function(e){if("Function"!==this.__class__)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var r=Array.prototype.slice.call(arguments,1),t=this,n=function(){},o=function(){return t.apply(this instanceof n?this:e,r.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),o.prototype=new n,o}),Array.prototype.forEach||(Array.prototype.forEach=function(e,r){if(null==this)throw new TypeError("Array.prototype.forEach called on null or undefined");var t=Object(this),n=t.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var o=1<arguments.length?r:void 0,i=0;i<n;i++){var a;i in t&&(a=t[i],e.call(o,a,i,t))}}),Array.prototype.every||(Array.prototype.every=function(e,r){var t,n;if(null==this)throw new TypeError("Array.prototype.every called on null or undefined");var o=Object(this),i=o.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(t=1<arguments.length?r:void 0,n=0;n<i;){var a;if(n in o)if(a=o[n],!e.call(t,a,n,o))return!1;n++}return!0}),Array.prototype.filter||(Array.prototype.filter=function(e,r){if(null==this)throw new TypeError("Array.prototype.filter called on null or undefined");var t=Object(this),n=t.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var o=[],i=1<arguments.length?r:void 0,a=0;a<n;a++)if(a in t){var c=t[a];e.call(i,c,a,t)&&o.push(c)}return o}),Array.isArray||(Array.isArray=function(e){return null!=e&&"Array"===e.__class__}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,r){if(null==this)throw new TypeError("Array.prototype.indexOf called on null or undefined");var t,n=Object(this),o=n.length>>>0;if(0===o)return-1;var i=+r||0;if(Math.abs(i)===1/0&&(i=0),o<=i)return-1;for(t=Math.max(0<=i?i:o-Math.abs(i),0);t<o;){if(t in n&&n[t]===e)return t;t++}return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(e,r){if(null==this)throw new TypeError("Array.prototype.lastIndexOf called on null or undefined");var t,n,o=Object(this),i=o.length>>>0;if(0===i)return-1;for(t=i-1,1<arguments.length&&((t=Number(r))!=t?t=0:0!=t&&t!=1/0&&t!=-1/0&&(t=(0<t||-1)*Math.floor(Math.abs(t)))),n=0<=t?Math.min(t,i-1):i-Math.abs(t);0<=n;n--)if(n in o&&o[n]===e)return n;return-1}),Array.prototype.map||(Array.prototype.map=function(e,r){var t,n;if(null==this)throw new TypeError("Array.prototype.map called on null or undefined");var o=Object(this),i=o.length>>>0;if("Function"!==e.__class__)throw new TypeError(e+" is not a function");t=1<arguments.length?r:void 0,n=new Array(i);for(var a=0;a<i;a++){var c,l;a in o&&(c=o[a],l=e.call(t,c,a,o),n[a]=l)}return n}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e,r){if(null==this)throw new TypeError("Array.prototype.reduceRight called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");var t,n=Object(this),o=(n.length>>>0)-1;if(1<arguments.length)t=r;else{for(;0<=o&&!(o in n);)o--;if(o<0)throw new TypeError("Reduce of empty array with no initial value");t=n[o--]}for(;0<=o;o--)o in n&&(t=e(t,n[o],o,n));return t}),Array.prototype.reduce||(Array.prototype.reduce=function(e,r){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");var t,n=Object(this),o=n.length>>>0,i=0;if(1<arguments.length)t=r;else{for(;i<o&&!(i in n);)i++;if(o<=i)throw new TypeError("Reduce of empty array with no initial value");t=n[i++]}for(;i<o;i++)i in n&&(t=e(t,n[i],i,n));return t}),Object.create||(Object.create=function(){function i(){}var a=Object.prototype.hasOwnProperty;return function(e){if(Object(e)!==e&&null!==e)throw TypeError("Object prototype may only be an Object or null");i.prototype=e;var r=new i;if(i.prototype=null,1<arguments.length){var t=Object(arguments[1]);for(var n in t)if(a.call(t,n)){var o=t[n];if(Object(o)!==o)throw TypeError(n+"must be an object");if("get"in o||"set"in o)throw new TypeError("getters & setters can not be defined on this javascript engine");"value"in o&&(r[n]=t[n])}}return r}}()),Array.prototype.some||(Array.prototype.some=function(e,r){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("Function"!==e.__class__)throw new TypeError(e+" is not a function");for(var t=Object(this),n=t.length>>>0,o=1<arguments.length?r:void 0,i=0;i<n;i++)if(i in t&&e.call(o,t[i],i,t))return!0;return!1}),Object.defineProperty||(Object.defineProperty=function(e,r,t){if(Object(e)!==e)throw new TypeError("Object.defineProperty can only be called on Objects.");if(Object(t)!==t)throw new TypeError("Property description can only be an Object.");if("get"in t||"set"in t)throw new TypeError("getters & setters can not be defined on this javascript engine");return"value"in t&&(e[r]=t.value),e}),Object.defineProperties||(Object.defineProperties=function(e,r){function t(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function n(e){if(Object(e)!==e)throw new TypeError("Descriptor can only be an Object.");var r={};if(t(e,"enumerable")&&(r.enumerable=!!e.enumerable),t(e,"configurable")&&(r.configurable=!!e.configurable),t(e,"value")&&(r.value=e.value),t(e,"writable")&&(r.writable=!!e.writable),t(e,"get"))throw new TypeError("getters & setters can not be defined on this javascript engine");if(t(e,"set"))throw new TypeError("getters & setters can not be defined on this javascript engine");return r}if(Object(e)!==e)throw new TypeError("Object.defineProperties can only be called on Objects.");if(Object(r)!==r)throw new TypeError("Properties can only be an Object.");var o=Object(r);for(propName in o)if(hasOwnProperty.call(o,propName)){var i=n(o[propName]);e[propName]=i.value}return e}),Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(e,r){if(Object(e)!==e)throw new TypeError("Object.getOwnPropertyDescriptor can only be called on Objects.");var t;if(!Object.prototype.hasOwnProperty.call(e,r))return t;(t={enumerable:Object.prototype.propertyIsEnumerable.call(e,r),configurable:!0}).value=e[r];var n=e.reflect.find(r).type;return t.writable=!("readonly"===n),t}),Object.freeze||(Object.freeze=function(e){if(Object(e)!==e)throw new TypeError("Object.freeze can only be called on Objects.");return e}),Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){if(Object(e)!==e)throw new TypeError("Object.getOwnPropertyNames can only be called on Objects.");var r=[],t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;for(var o in e)t.call(e,o)&&r.push(o);for(var i=e.reflect.properties,a=e.reflect.methods.concat(i),c=0;c<a.length;c++){o=a[c].name;t.call(e,o)&&!n.call(e,o)&&r.push(o)}return r}),Object.getPrototypeOf||(Object.getPrototypeOf=function(e){if(Object(e)!==e)throw new TypeError("Object.getPrototypeOf can only be called on Objects.");return e.__proto__}),Object.isFrozen||(Object.isFrozen=function(e){if(Object(e)!==e)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)!==e)throw new TypeError("Object.isExtensible can only be called on Objects.");return!0}),Object.preventExtensions||(Object.preventExtensions=function(e){if(Object(e)!==e)throw new TypeError("Object.preventExtensions can only be called on Objects.");return e}),Object.isSealed||(Object.isSealed=function(e){if(Object(e)!==e)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.seal||(Object.seal=function(e){if(Object(e)!==e)throw new TypeError("Object.seal can only be called on Objects.");return e}),Object.keys||(Object.keys=function(e){if(Object(e)!==e)throw new TypeError("Object.keys can only be called on Objects.");var r=Object.prototype.hasOwnProperty,t=[];for(var n in e)r.call(e,n)&&t.push(n);return t}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var r=meta[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,r){var t,n,o,i,a,c=gap,l=r[e];switch(l&&"object"==typeof l&&"function"==typeof l.toJSON&&(l=l.toJSON(e)),"function"==typeof rep&&(l=rep.call(r,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?l+"":"null";case"boolean":case"null":return l+"";case"object":if(!l)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(l)){for(i=l.length,t=0;t<i;t+=1)a[t]=str(t,l)||"null";return o=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+c+"]":"["+a.join(",")+"]",gap=c,o}if(rep&&"object"==typeof rep)for(i=rep.length,t=0;t<i;t+=1)"string"==typeof rep[t]&&((o=str(n=rep[t],l))&&a.push(quote(n)+(gap?": ":":")+o));else for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&((o=str(n,l))&&a.push(quote(n)+(gap?": ":":")+o));return o=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+c+"}":"{"+a.join(",")+"}",gap=c,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta,rep;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value),"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,r,t){var n;if(indent=gap="","number"==typeof t)for(n=0;n<t;n+=1)indent+=" ";else"string"==typeof t&&(indent=t);if((rep=r)&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,r){var t,n,o=e[r];if(o&&"object"==typeof o)for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(void 0!==(n=walk(o,t))?o[t]=n:delete o[t]);return reviver.call(e,r,o)}var j;if(text+="",rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();;

				(function(){
					try {
						!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 20);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var write_1 = __webpack_require__(2), eventHandler_1 = __webpack_require__(31), Component = function() {
        function Component(type, params) {
            this.type = type, this.params = params, this.listeners = [], this.params = params || {};
        }
        return Component.prototype.init = function() {
            this.debug("initializing");
            for (var _i = 0, _a = Object.keys(this.params); _i < _a.length; _i++) {
                var key = _a[_i];
                this.inner[key] = this.params[key];
            }
        }, Component.prototype.getValue = function() {
            return null;
        }, Component.prototype.setValue = function(val) {}, Component.prototype.getClassName = function() {
            return this.constructor.name;
        }, Component.prototype.setSize = function(width, height) {
            this.inner.size = [ width, height ];
        }, Component.prototype.setProps = function(props) {
            for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
                var key = _a[_i];
                this.inner[key] = props[key];
            }
        }, Component.prototype.send = function(eventName) {
            this.debug("sending " + eventName + " event. " + this.listeners.length + " listeners");
            for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                var handler = _a[_i];
                if (handler.name === eventName) handler.fn();
            }
        }, Component.prototype.on = function(eventName, fn) {
            var listener = new eventHandler_1.EventHandler();
            listener.name = eventName, listener.fn = fn, this.listeners.push(listener);
        }, Component.prototype.debug = function(str) {
            write_1.write("[" + this.getClassName() + "] " + str);
        }, Component;
    }(), CompositeComponent = function(_super) {
        function CompositeComponent(type) {
            var _this = _super.call(this, type) || this;
            return _this.children = [], _this;
        }
        return __extends(CompositeComponent, _super), CompositeComponent.prototype.init = function() {
            _super.prototype.init.call(this);
        }, CompositeComponent.prototype.add = function(component) {
            return (component.parent = this).children.push(component), this.mountChild(component), 
            component.init(), component;
        }, CompositeComponent.prototype.send = function(eventName) {
            _super.prototype.send.call(this, eventName);
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                _a[_i].send(eventName);
            }
        }, CompositeComponent.prototype.mountChild = function(component) {
            return this.debug("mounting child <" + component.getClassName() + "> with params " + JSON.stringify(component.params, null, 2)), 
            component;
        }, CompositeComponent;
    }(exports.Component = Component), CompositeComponentContainer = function(_super) {
        function CompositeComponentContainer() {
            return null !== _super && _super.apply(this, arguments) || this;
        }
        return __extends(CompositeComponentContainer, _super), CompositeComponentContainer.prototype.mountChild = function(component) {
            return (component = _super.prototype.mountChild.call(this, component)).inner = this.inner.add(component.type, void 0, void 0, component.params), 
            component;
        }, CompositeComponentContainer;
    }(exports.CompositeComponent = CompositeComponent);
    exports.CompositeComponentContainer = CompositeComponentContainer;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(path) {
        return new File(path);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.write = function(text) {
        if (0) $.writeln(text);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Group = function(_super) {
        function Group() {
            return _super.call(this, "group") || this;
        }
        return __extends(Group, _super), Group.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.orientation = "row", this.inner.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP ];
        }, Group;
    }(__webpack_require__(0).CompositeComponentContainer);
    exports.Group = Group;
}, function(module, exports, __webpack_require__) {
    "use strict";
    function translation(en, translations, locale) {
        if (locale = locale || app.locale) for (var _i = 0, translations_1 = translations; _i < translations_1.length; _i++) {
            var trans = translations_1[_i];
            if (0 === locale.indexOf(trans.locale)) return trans.strings;
        }
        return en;
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.translation = translation, exports.tranEnRu = function(tran) {
        for (var en = {}, ru = {}, _i = 0, _a = Object.keys(tran); _i < _a.length; _i++) {
            var key = _a[_i];
            en[key] = tran[key][0], ru[key] = tran[key][1];
        }
        return translation(en, [ {
            locale: "ru",
            strings: ru
        } ]);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1), clean_1 = __webpack_require__(22), validateShutter_1 = __webpack_require__(23);
    exports.default = function(file, opts) {
        validateShutter_1.default(), opts = __assign({
            compatibility: Compatibility.ILLUSTRATOR10,
            saveMultipleArtboards: !1
        }, opts), clean_1.default();
        var saveOpts = new EPSSaveOptions();
        saveOpts.preview = EPSPreview.None, saveOpts.cmykPostScript = !1, saveOpts.compatibility = opts.compatibility, 
        saveOpts.embedAllFonts = !1, saveOpts.embedLinkedFiles = !1, saveOpts.includeDocumentThumbnails = !1, 
        saveOpts.postScript = EPSPostScriptLevelEnum.LEVEL3, saveOpts.saveMultipleArtboards = opts.saveMultipleArtboards, 
        app.activeDocument.saveAs(toFile_1.default(file), saveOpts);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var path = __webpack_require__(7);
    exports.parse = function(filePath) {
        var basename = path.basename(filePath), ext = path.extname(filePath), dir = path.dirname(filePath);
        return {
            name: basename.slice(0, -ext.length),
            dir: dir,
            ext: ext,
            basename: basename
        };
    };
    var path_1 = __webpack_require__(7);
    exports.join = path_1.join, exports.basename = path_1.basename, exports.dirname = path_1.dirname, 
    exports.extname = path_1.extname;
}, function(module, exports, __webpack_require__) {
    (function(process) {
        function normalizeArray(parts, allowAboveRoot) {
            for (var up = 0, i = parts.length - 1; 0 <= i; i--) {
                var last = parts[i];
                if ("." === last) parts.splice(i, 1); else if (".." === last) parts.splice(i, 1), 
                up++; else if (up) parts.splice(i, 1), up--;
            }
            if (allowAboveRoot) for (;up--; up) parts.unshift("..");
            return parts;
        }
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, splitPath = function(filename) {
            return splitPathRe.exec(filename).slice(1);
        };
        function filter(xs, f) {
            if (xs.filter) return xs.filter(f);
            for (var res = [], i = 0; i < xs.length; i++) if (f(xs[i], i, xs)) res.push(xs[i]);
            return res;
        }
        exports.resolve = function() {
            for (var resolvedPath = "", resolvedAbsolute = !1, i = arguments.length - 1; -1 <= i && !resolvedAbsolute; i--) {
                var path = 0 <= i ? arguments[i] : process.cwd();
                if ("string" != typeof path) throw new TypeError("Arguments to path.resolve must be strings"); else if (!path) continue;
                resolvedPath = path + "/" + resolvedPath, resolvedAbsolute = "/" === path.charAt(0);
            }
            return (resolvedAbsolute ? "/" : "") + (resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
                return !!p;
            }), !resolvedAbsolute).join("/")) || ".";
        }, exports.normalize = function(path) {
            var isAbsolute = exports.isAbsolute(path), trailingSlash = "/" === substr(path, -1);
            if (!(path = normalizeArray(filter(path.split("/"), function(p) {
                return !!p;
            }), !isAbsolute).join("/")) && !isAbsolute) path = ".";
            if (path && trailingSlash) path += "/";
            return (isAbsolute ? "/" : "") + path;
        }, exports.isAbsolute = function(path) {
            return "/" === path.charAt(0);
        }, exports.join = function() {
            var paths = Array.prototype.slice.call(arguments, 0);
            return exports.normalize(filter(paths, function(p, index) {
                if ("string" != typeof p) throw new TypeError("Arguments to path.join must be strings");
                return p;
            }).join("/"));
        }, exports.relative = function(from, to) {
            function trim(arr) {
                for (var start = 0; start < arr.length && "" === arr[start]; start++) ;
                for (var end = arr.length - 1; 0 <= end && "" === arr[end]; end--) ;
                if (end < start) return []; else return arr.slice(start, end - start + 1);
            }
            from = exports.resolve(from).substr(1), to = exports.resolve(to).substr(1);
            for (var fromParts = trim(from.split("/")), toParts = trim(to.split("/")), length = Math.min(fromParts.length, toParts.length), samePartsLength = length, i = 0; i < length; i++) if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break;
            }
            var outputParts = [];
            for (i = samePartsLength; i < fromParts.length; i++) outputParts.push("..");
            return (outputParts = outputParts.concat(toParts.slice(samePartsLength))).join("/");
        }, exports.sep = "/", exports.delimiter = ":", exports.dirname = function(path) {
            var result = splitPath(path), root = result[0], dir = result[1];
            if (!root && !dir) return ".";
            if (dir) dir = dir.substr(0, dir.length - 1);
            return root + dir;
        }, exports.basename = function(path, ext) {
            var f = splitPath(path)[2];
            if (ext && f.substr(-1 * ext.length) === ext) f = f.substr(0, f.length - ext.length);
            return f;
        }, exports.extname = function(path) {
            return splitPath(path)[3];
        };
        var substr = "b" === "ab".substr(-1) ? function(str, start, len) {
            return str.substr(start, len);
        } : function(str, start, len) {
            if (start < 0) start = str.length + start;
            return str.substr(start, len);
        };
    }).call(exports, __webpack_require__(25));
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(art) {
        if (!art) {
            var doc = app.activeDocument, artIndex = doc.artboards.getActiveArtboardIndex();
            art = doc.artboards[artIndex];
        }
        var _a = art.artboardRect, left = _a[0], top = _a[1];
        return {
            left: left,
            top: top,
            width: _a[2] - left,
            height: top - _a[3]
        };
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1);
    function withFile(filePath, fn, openFlag, required) {
        if (void 0 === openFlag) openFlag = "w";
        if (void 0 === required) required = !0;
        var file = toFile_1.default(filePath);
        if (file.open(openFlag, void 0, void 0)) try {
            return file.encoding = "UTF-8", file.lineFeed = "Unix", fn(file);
        } catch (e) {
            throw e;
        } finally {
            file.close();
        } else {
            if (required) throw new Error("can't open file " + filePath);
            return fn(void 0);
        }
    }
    exports.withFile = withFile, exports.default = function(filePath, content) {
        withFile(filePath, function(file) {
            file.write(content);
        }, "w");
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.callMenu = function(menuCommand) {
        try {
            app.executeMenuCommand(menuCommand);
        } catch (e) {
            if (1200 !== e.number) throw e;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var StaticText = function(_super) {
        function StaticText(defaultValue) {
            var _this = _super.call(this, "statictext") || this;
            return _this.defaultValue = defaultValue, _this;
        }
        return __extends(StaticText, _super), StaticText.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP ], 
            this.setValue(this.defaultValue);
        }, StaticText.prototype.getValue = function() {
            return this.inner.text;
        }, StaticText.prototype.setValue = function(val) {
            this.inner.text = val;
        }, StaticText;
    }(__webpack_require__(0).Component);
    exports.StaticText = StaticText;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1);
    exports.default = function(file) {
        !function(file) {
            var jpegOpts = new ExportOptionsJPEG();
            jpegOpts.antiAliasing = !0, jpegOpts.artBoardClipping = !0, jpegOpts.qualitySetting = 100, 
            jpegOpts.horizontalScale = 100, jpegOpts.verticalScale = 100, app.activeDocument.exportFile(toFile_1.default(file), ExportType.JPEG, jpegOpts);
        }(file);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var write_1 = __webpack_require__(2), getArtboardSize_1 = __webpack_require__(8), resizeScale_1 = __webpack_require__(26);
    exports.default = function(resolution, fast) {
        var artboardSize = getArtboardSize_1.default(), oldResolution = artboardSize.width * artboardSize.height, newResolution = 1e6 * resolution, scale = Math.ceil(100 * Math.sqrt(newResolution / oldResolution));
        if (write_1.write("Resizing from resolution " + oldResolution / 1e6 + " to resolution " + newResolution / 1e6 + ". Scale factor: " + scale), 
        fast) resizeScale_1.resizeScaleFast(scale); else resizeScale_1.default(scale);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var write_1 = __webpack_require__(2), withAction_1 = __webpack_require__(15);
    function doAction(action, name) {
        for (var _i = 0, actions_1 = name ? [ name ] : action.actions; _i < actions_1.length; _i++) {
            var act = actions_1[_i];
            write_1.write("doAction: [" + action.setName + "->" + action.setName + "]"), app.doScript(act, action.setName, !1);
        }
    }
    exports.default = doAction, exports.loadAndDoAction = function(action, name) {
        withAction_1.default(action, function() {
            doAction(action, name);
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var isFunction_1 = __webpack_require__(27), disposeAction_1 = __webpack_require__(28), ensureAction_1 = __webpack_require__(29);
    function withActions(sets, fn) {
        try {
            for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
                var set = sets_1[_i];
                ensureAction_1.default(set.content);
            }
            fn(sets);
        } finally {
            for (var _a = 0, sets_2 = sets; _a < sets_2.length; _a++) {
                set = sets_2[_a];
                disposeAction_1.default(set.setName);
            }
        }
    }
    exports.withActions = withActions, exports.default = function(actionDef, params, fn) {
        if (isFunction_1.default(params)) fn = params, params = {};
        withActions([ __assign({}, actionDef, {
            content: function(content, params) {
                return params = params || {}, content.replace(/<%=\s*([^} ]*)\s*%>/gi, function(substr, key) {
                    if (!params[key]) throw new Error("Param " + key + " does not exists");
                    return params[key];
                });
            }(actionDef.content, params)
        }) ], function(acts) {
            fn(acts[0]);
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Component_1 = __webpack_require__(0);
    function toItem(value) {
        return value instanceof String || "string" == typeof value ? {
            key: value,
            text: value
        } : value;
    }
    exports.toItem = toItem;
    var CheckBox = function(_super) {
        function CheckBox(value, selected) {
            if (void 0 === selected) selected = !1;
            var _this = _super.call(this, "checkbox") || this;
            return _this.value = value, _this.selected = selected, _this.item = toItem(value), 
            _this;
        }
        return __extends(CheckBox, _super), CheckBox.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP ], 
            this.inner.text = this.item.text, this.setValue(this.selected);
        }, CheckBox.prototype.getValue = function() {
            return this.inner.value;
        }, CheckBox.prototype.setValue = function(val) {
            this.inner.value = val;
        }, CheckBox;
    }(Component_1.Component);
    exports.CheckBox = CheckBox;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    }), __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Panel = function(_super) {
        function Panel(opts) {
            var _this = _super.call(this, "panel") || this;
            return _this.opts = opts, _this.opts = __assign({
                orientation: "row"
            }, opts || {}), _this;
        }
        return __extends(Panel, _super), Panel.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.orientation = this.opts.orientation, 
            this.inner.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP ];
        }, Panel;
    }(__webpack_require__(0).CompositeComponentContainer);
    exports.Panel = Panel;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(obj) {
        var result = [];
        if (!obj) return result;
        try {
            for (var length_1 = obj.length, i = 0; i < length_1; i++) try {
                result.push(obj[i]);
            } catch (e) {}
        } catch (e) {
            return result;
        }
        return result;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Button = function(_super) {
        function Button(label) {
            var _this = _super.call(this, "button") || this;
            return _this.label = label, _this;
        }
        return __extends(Button, _super), Button.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.inner.text = this.label, this.inner.onClick = function() {
                if (_this.debug("clicked"), _this.onClick) _this.onClick();
            };
        }, Button.prototype.getValue = function() {
            return this.inner.text;
        }, Button.prototype.setValue = function(val) {
            this.inner.text = val;
        }, Button;
    }(__webpack_require__(0).Component);
    exports.Button = Button;
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(21);
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var jpeg_1 = __webpack_require__(12), shutterEps_1 = __webpack_require__(5), openFile_1 = __webpack_require__(24), path_1 = __webpack_require__(6), resizeToResolution_1 = __webpack_require__(13), toFile_1 = __webpack_require__(1), CheckBox_1 = __webpack_require__(16), CheckBoxPanel_1 = __webpack_require__(32), FieldComponent_1 = __webpack_require__(33), RadioButtonPanel_1 = __webpack_require__(34), JpegExportStrings_1 = __webpack_require__(36), PrepareForStockStrings_1 = __webpack_require__(37), prepareForStock_1 = __webpack_require__(38), FileProcessor_1 = __webpack_require__(50), PrepareForStockProcessor = function(_super) {
        function PrepareForStockProcessor() {
            return _super.call(this, {
                title: PrepareForStockStrings_1.default.prepareForStock,
                version: "1.0.3"
            }) || this;
        }
        return __extends(PrepareForStockProcessor, _super), PrepareForStockProcessor.prototype.onInit = function() {
            this.fieldFormat = this.dlg.add(new FieldComponent_1.FieldComponent(PrepareForStockStrings_1.default.format, new RadioButtonPanel_1.RadioButtonPanel([ "eps 8", "eps 10" ], "eps 10"))), 
            this.fieldPreview = this.dlg.add(new FieldComponent_1.FieldComponent(PrepareForStockStrings_1.default.preview, new CheckBox_1.CheckBox(PrepareForStockStrings_1.default.generatePreview, !0)));
            var items = Object.keys(prepareForStock_1.prepareForStockSteps).sort(function(k1, k2) {
                return prepareForStock_1.prepareForStockSteps[k1].order - prepareForStock_1.prepareForStockSteps[k2].order;
            }).map(function(k) {
                return {
                    key: k,
                    text: PrepareForStockStrings_1.default[k]
                };
            });
            this.fieldActions = this.dlg.add(new FieldComponent_1.FieldComponent(PrepareForStockStrings_1.default.actions, new CheckBoxPanel_1.CheckBoxPanel(items, items.filter(function(i) {
                return "clipToArtboardSize" !== i.key;
            }).map(function(i) {
                return i.key;
            }), {
                orientation: "column"
            })));
        }, PrepareForStockProcessor.prototype.onProcess = function(file) {
            var _this = this, destDir = this.srcSelect.getValue().destDir, name = path_1.parse(file).name, finalFile = path_1.join(destDir, name + ".eps");
            if (!toFile_1.default(finalFile).exists) {
                var actions = this.fieldActions.ctrl.getValue(), epsV = this.fieldFormat.ctrl.getValue();
                this.fieldPreview.getValue();
                this.setStatus(PrepareForStockStrings_1.default.opening), openFile_1.default(file, function(document) {
                    if (0 <= Object.keys(prepareForStock_1.prepareForStockSteps).indexOf("deleteUnusedPanelItems")) prepareForStock_1.prepareForStockSteps.deleteUnusedPanelItems.fn();
                    for (var _i = 0, _a = Object.keys(prepareForStock_1.prepareForStockSteps).sort(function(k1, k2) {
                        return prepareForStock_1.prepareForStockSteps[k1].order - prepareForStock_1.prepareForStockSteps[k2].order;
                    }); _i < _a.length; _i++) {
                        var step = _a[_i];
                        if (0 <= actions.indexOf(step)) try {
                            _this.setStatus(PrepareForStockStrings_1.default[step]), prepareForStock_1.prepareForStockSteps[step].fn();
                        } catch (e) {
                            throw alert("[" + PrepareForStockStrings_1.default[step] + "] failed. " + e.message), 
                            e;
                        }
                    }
                    if (_this.setStatus(PrepareForStockStrings_1.default.saving), shutterEps_1.default(finalFile, {
                        compatibility: "eps 8" === epsV ? Compatibility.ILLUSTRATOR8 : Compatibility.ILLUSTRATOR10
                    }), _this.fieldPreview.getValue()) {
                        var previewFile = path_1.join(destDir, name + ".jpg");
                        if (!toFile_1.default(previewFile).exists) _this.setStatus(JpegExportStrings_1.default.exportJpeg), 
                        resizeToResolution_1.default(30), jpeg_1.default(previewFile);
                    }
                    _this.setStatus(PrepareForStockStrings_1.default.closing);
                });
            }
        }, PrepareForStockProcessor.prototype.processFiles = function(files) {
            _super.prototype.processFiles.call(this, files);
        }, PrepareForStockProcessor;
    }(FileProcessor_1.FileProcessor);
    new (exports.PrepareForStockProcessor = PrepareForStockProcessor)();
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        for (var i = 0; i < app.activeDocument.layers.length; i++) {
            var layer = app.activeDocument.layers[i];
            if ("Guides For Artboard" === layer.name) layer.remove();
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function() {
        if (app.activeDocument.rasterItems.length) throw new Error("File contains raster items.");
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1);
    exports.default = function(file, fn) {
        try {
            var document_1 = app.open(toFile_1.default(file));
            if (fn) try {
                fn(document_1);
            } finally {
                document_1.close(SaveOptions.DONOTSAVECHANGES);
            }
            return document_1;
        } catch (e) {
            throw new Error("Can't open file: " + file + ". Error: " + e);
        }
    };
}, function(module, exports) {
    var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
    }
    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
    }
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
        setTimeout(fun, 0);
        try {
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    !function() {
        try {
            if ("function" == typeof setTimeout) cachedSetTimeout = setTimeout; else cachedSetTimeout = defaultSetTimout;
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if ("function" == typeof clearTimeout) cachedClearTimeout = clearTimeout; else cachedClearTimeout = defaultClearTimeout;
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    }();
    var currentQueue, queue = [], draining = !1, queueIndex = -1;
    function cleanUpNextTick() {
        if (draining && currentQueue) {
            if (draining = !1, currentQueue.length) queue = currentQueue.concat(queue); else queueIndex = -1;
            if (queue.length) drainQueue();
        }
    }
    function drainQueue() {
        if (!draining) {
            var timeout = runTimeout(cleanUpNextTick);
            draining = !0;
            for (var len = queue.length; len; ) {
                for (currentQueue = queue, queue = []; ++queueIndex < len; ) if (currentQueue) currentQueue[queueIndex].run();
                queueIndex = -1, len = queue.length;
            }
            currentQueue = null, draining = !1, function(marker) {
                if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
                clearTimeout(marker);
                try {
                    cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }(timeout);
        }
    }
    function Item(fun, array) {
        this.fun = fun, this.array = array;
    }
    function noop() {}
    process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (1 < arguments.length) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
        if (queue.push(new Item(fun, args)), 1 === queue.length && !draining) runTimeout(drainQueue);
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
    process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, 
    process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
    process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
    process.listeners = function(name) {
        return [];
    }, process.binding = function(name) {
        throw new Error("process.binding is not supported");
    }, process.cwd = function() {
        return "/";
    }, process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
    }, process.umask = function() {
        return 0;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var write_1 = __webpack_require__(2), doAction_1 = __webpack_require__(14), getArtboardSize_1 = __webpack_require__(8), menu_1 = __webpack_require__(10), withAction_1 = __webpack_require__(15);
    exports.default = function(scaleW, scaleH) {
        scaleH = scaleH || scaleW, menu_1.callMenu("unlockAll"), menu_1.callMenu("selectall");
        var artboardSize = getArtboardSize_1.default(), newWidth = artboardSize.width * scaleW / 100, newHeight = artboardSize.height * scaleH / 100;
        write_1.write("Resizing to [" + newWidth + "x" + newHeight + "]"), withAction_1.default(__webpack_require__(30), {
            width: newWidth.toFixed(1),
            height: newHeight.toFixed(1)
        }, function(act) {
            doAction_1.default(act);
        }), app.activeDocument.fitArtboardToSelectedArt(app.activeDocument.artboards.getActiveArtboardIndex());
    }, exports.resizeScaleFast = function(scaleW, scaleH) {
        scaleH = scaleH || scaleW, menu_1.callMenu("unlockAll"), menu_1.callMenu("selectall"), 
        menu_1.callMenu("group"), app.activeDocument.activeLayer.groupItems[0].resize(scaleW, scaleH, void 0, void 0, void 0, void 0, scaleW, Transformation.TOPLEFT), 
        menu_1.callMenu("ungroup"), app.activeDocument.fitArtboardToSelectedArt(app.activeDocument.artboards.getActiveArtboardIndex());
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(functionToCheck) {
        return functionToCheck && "[object Function]" === {}.toString.call(functionToCheck);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(actionSetName) {
        try {
            app.unloadAction(actionSetName, "");
        } catch (e) {}
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var path = __webpack_require__(7), writeFile_1 = __webpack_require__(9);
    exports.default = function(actionContent) {
        var tempDir = Folder.temp.fsName, tempAction = path.join(tempDir, "temp.aia"), actionFile = new File(tempAction);
        try {
            writeFile_1.default(actionFile, actionContent), app.loadAction(actionFile);
        } finally {
            actionFile.remove();
        }
    };
}, function(module, exports) {
    module.exports = {
        setName: "__resize",
        actions: [ "resize" ],
        content: "/version 3\r\n/name [ 8\r\n\t5f5f726573697a65\r\n]\r\n/isOpen 1\r\n/actionCount 1\r\n/action-1 {\r\n\t/name [ 6\r\n\t\t726573697a65\r\n\t]\r\n\t/keyIndex 0\r\n\t/colorIndex 0\r\n\t/isOpen 1\r\n\t/eventCount 2\r\n\t/event-1 {\r\n\t\t/useRulersIn1stQuadrant 0\r\n\t\t/internalName (ai_plugin_transformPalette)\r\n\t\t/localizedName [ 15\r\n\t\t\t5472616e73666f726d2050616e656c\r\n\t\t]\r\n\t\t/isOpen 0\r\n\t\t/isOn 1\r\n\t\t/hasDialog 0\r\n\t\t/parameterCount 2\r\n\t\t/parameter-1 {\r\n\t\t\t/key 1954115685\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (enumerated)\r\n\t\t\t/name [ 15\r\n\t\t\t\t5363616c6520776964746820746f3a\r\n\t\t\t]\r\n\t\t\t/value 2\r\n\t\t}\r\n\t\t/parameter-2 {\r\n\t\t\t/key 1986096245\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (unit real)\r\n\t\t\t/value <%= width %>\r\n\t\t\t/unit 592476268\r\n\t\t}\r\n\t}\r\n\t/event-2 {\r\n\t\t/useRulersIn1stQuadrant 0\r\n\t\t/internalName (ai_plugin_transformPalette)\r\n\t\t/localizedName [ 15\r\n\t\t\t5472616e73666f726d2050616e656c\r\n\t\t]\r\n\t\t/isOpen 0\r\n\t\t/isOn 1\r\n\t\t/hasDialog 0\r\n\t\t/parameterCount 2\r\n\t\t/parameter-1 {\r\n\t\t\t/key 1954115685\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (enumerated)\r\n\t\t\t/name [ 16\r\n\t\t\t\t5363616c652068656967687420746f3a\r\n\t\t\t]\r\n\t\t\t/value 3\r\n\t\t}\r\n\t\t/parameter-2 {\r\n\t\t\t/key 1986096245\r\n\t\t\t/showInPalette 4294967295\r\n\t\t\t/type (unit real)\r\n\t\t\t/value <%= height %>\r\n\t\t\t/unit 592476268\r\n\t\t}\r\n\t}\r\n}\r\n"
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var EventHandler = function() {};
    exports.EventHandler = EventHandler;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var CheckBox_1 = __webpack_require__(16), Group_1 = __webpack_require__(3), CheckBoxPanel = function(_super) {
        function CheckBoxPanel(items, selectedItems, options) {
            var _this = _super.call(this, options) || this;
            return _this.items = items, _this.selectedItems = selectedItems, _this.options = options, 
            _this.checks = [], _this;
        }
        return __extends(CheckBoxPanel, _super), CheckBoxPanel.prototype.init = function() {
            _super.prototype.init.call(this);
            var height = (this.options || {}).height || 200;
            this.inner.alignChildren = "left", this.group = this.add(new Group_1.Group()), this.group.inner.orientation = "column", 
            this.group.inner.alignChildren = "left", this.group.inner.spacing = 5;
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.checks.push(this.group.add(new CheckBox_1.CheckBox(item, 0 <= this.selectedItems.indexOf(CheckBox_1.toItem(item).key))));
            }
            var panel = this.inner, scrollGroup = this.group.inner;
            scrollGroup.size = {
                height: height,
                width: 300,
                length: 2
            };
            var scrollBar = panel.add("scrollbar {stepdelta: 1}"), numItems = this.items.length, scrollGroupActualHeight = 0, itemHeight = 0;
            this.on("show", function() {
                panel.size.height = height, scrollBar.size.height = panel.size.height - 20, scrollBar.size.width = 20, 
                scrollBar.location = [ panel.size.width - 30, 8 ], itemHeight = scrollGroup.children[0].size[1] + scrollGroup.spacing, 
                scrollGroupActualHeight = panel.size[1] - panel.margins[1] - panel.margins[3], scrollBar.maxvalue = Math.ceil(numItems - scrollGroupActualHeight / itemHeight);
            }), scrollBar.onChanging = function() {
                var n, children = scrollGroup.children;
                for (n = 0; n < numItems; n++) children[n].location.y = (n - this.value) * itemHeight;
            };
        }, CheckBoxPanel.prototype.getValue = function() {
            return this.checks.filter(function(c) {
                return c.getValue();
            }).map(function(c) {
                return c.item.key;
            });
        }, CheckBoxPanel.prototype.setValue = function(val) {
            for (var _i = 0, _a = this.checks; _i < _a.length; _i++) {
                var check = _a[_i];
                check.setValue(0 <= val.indexOf(check.item.key));
            }
        }, CheckBoxPanel;
    }(__webpack_require__(17).Panel);
    exports.CheckBoxPanel = CheckBoxPanel;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Group_1 = __webpack_require__(3), StaticText_1 = __webpack_require__(11), FieldComponent = function(_super) {
        function FieldComponent(label, ctrl) {
            var _this = _super.call(this) || this;
            return _this.label = label, _this.ctrl = ctrl, _this;
        }
        return __extends(FieldComponent, _super), FieldComponent.prototype.init = function() {
            _super.prototype.init.call(this), this.text = this.add(new StaticText_1.StaticText(this.label + ":")), 
            this.text.setSize(130, 20), this.ctrl = this.add(this.ctrl);
        }, FieldComponent.prototype.getValue = function() {
            return this.ctrl.getValue();
        }, FieldComponent.prototype.setValue = function(val) {
            return this.ctrl.setValue(val);
        }, FieldComponent;
    }(Group_1.Group);
    exports.FieldComponent = FieldComponent;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Panel_1 = __webpack_require__(17), RadioButton_1 = __webpack_require__(35), RadioButtonPanel = function(_super) {
        function RadioButtonPanel(texts, selectedText) {
            var _this = _super.call(this) || this;
            return _this.texts = texts, _this.selectedText = selectedText, _this.radios = [], 
            _this;
        }
        return __extends(RadioButtonPanel, _super), RadioButtonPanel.prototype.init = function() {
            _super.prototype.init.call(this);
            for (var _i = 0, _a = this.texts; _i < _a.length; _i++) {
                var text = _a[_i];
                this.radios.push(this.add(new RadioButton_1.RadioButton(text, text === this.selectedText)));
            }
        }, RadioButtonPanel.prototype.getValue = function() {
            for (var _i = 0, _a = this.radios; _i < _a.length; _i++) {
                var radio = _a[_i];
                if (radio.getValue()) return radio.inner.text;
            }
        }, RadioButtonPanel.prototype.setValue = function(val) {
            for (var _i = 0, _a = this.radios; _i < _a.length; _i++) {
                var radio = _a[_i];
                radio.setValue(radio.inner.text === val);
            }
        }, RadioButtonPanel;
    }(Panel_1.Panel);
    exports.RadioButtonPanel = RadioButtonPanel;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var RadioButton = function(_super) {
        function RadioButton(text, selected) {
            if (void 0 === selected) selected = !1;
            var _this = _super.call(this, "radiobutton") || this;
            return _this.text = text, _this.selected = selected, _this;
        }
        return __extends(RadioButton, _super), RadioButton.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.text = this.text, this.setValue(this.selected);
        }, RadioButton.prototype.getValue = function() {
            return this.inner.value;
        }, RadioButton.prototype.setValue = function(val) {
            this.inner.value = val;
        }, RadioButton;
    }(__webpack_require__(0).Component);
    exports.RadioButton = RadioButton;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var translation_1 = __webpack_require__(4);
    exports.default = translation_1.tranEnRu({
        exportJpeg: [ "Export Jpeg", "Экспорт Jpeg" ],
        jpegResolution: [ "Jpeg Resolution", "Разрешение Jpeg" ],
        saving: [ "Saving", "Сохранение файла" ],
        closing: [ "Closing", "Закрытие файла" ],
        opening: [ "Opening", "Открытие файла" ],
        resizing: [ "Resizing", "Изменение размера" ]
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var translation_1 = __webpack_require__(4);
    exports.default = translation_1.tranEnRu({
        preview: [ "Preview", "Превью" ],
        generatePreview: [ "Generate Preview", "Добавить растровое превью" ],
        clipToArtboardSize: [ "Clip to Artboard Size", "Обрезать по размеру артборда" ],
        prepareForStock: [ "Prepare For Stock", "Подготовить для стоков" ],
        closeAllPath: [ "Close all paths", "Закрыть все пути" ],
        cleanupPath: [ "Cleanup Path", "Почистить пути" ],
        unlockAll: [ "Unlock all", "Разблокировать все" ],
        expandText: [ "Expand text", "Разобрать текст" ],
        convertToRgb: [ "Convert to RGB", "Конвертировать в RGB" ],
        deleteUnusedPanelItems: [ "Delete unused panel items", "Удалить неиспользуемые элементы" ],
        expandStyledObjects: [ "Expand Styled Objects", "Разобрать объекты со стилями" ],
        expandSymbolInstances: [ "Expand Symbol Instances", "Разобрать экземпляры символов" ],
        expandPatternObjects: [ "Expand Pattern Objects", "Разобрать объекты с узорами" ],
        expandBrushedObjects: [ "Expand Brushed Objects", "Разобрать объекты с кистями" ],
        saving: [ "Saving", "Сохранение файла" ],
        closing: [ "Closing", "Закрытие файла" ],
        opening: [ "Opening", "Открытие файла" ],
        format: [ "Format", "Формат" ],
        actions: [ "Actions", "Действия" ]
    });
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var ai_1 = __webpack_require__(39), closePaths_1 = __webpack_require__(40), jpeg_1 = __webpack_require__(12), shutterEps10_1 = __webpack_require__(41), shutterEps8_1 = __webpack_require__(42), clipToArtboardSize_1 = __webpack_require__(43), doAction_1 = __webpack_require__(14), getByName_1 = __webpack_require__(44), menu_1 = __webpack_require__(10), path_1 = __webpack_require__(6), resizeToResolution_1 = __webpack_require__(13), toArray_1 = __webpack_require__(18), toFile_1 = __webpack_require__(1), withSelection_1 = __webpack_require__(45), withTempRect_1 = __webpack_require__(46), cleanupAction = __webpack_require__(47), expandObjectAction = __webpack_require__(48), expandFillAction = __webpack_require__(49);
    exports.prepareForStockSteps = {
        unlockAll: {
            fn: function() {
                for (var _i = 0, _a = toArray_1.default(app.activeDocument.layers); _i < _a.length; _i++) {
                    _a[_i].locked = !1;
                }
                menu_1.callMenu("unlockAll");
            },
            order: 0
        },
        expandStyledObjects: {
            fn: function() {
                withTempRect_1.default(function(tempRect) {
                    for (var _loop_1 = function(style) {
                        withSelection_1.restoreSelection(function() {
                            style.applyTo(tempRect), menu_1.callMenu("Find Style menu item"), tempRect.selected = !1, 
                            menu_1.callMenu("expandStyle");
                        });
                    }, _i = 0, _a = toArray_1.default(app.activeDocument.graphicStyles); _i < _a.length; _i++) {
                        _loop_1(_a[_i]);
                    }
                });
            },
            order: 2
        },
        expandSymbolInstances: {
            fn: function() {
                withSelection_1.default(app.activeDocument.symbolItems, function() {
                    if (app.selection && app.selection.length) doAction_1.loadAndDoAction(expandObjectAction);
                });
            },
            order: 3
        },
        expandPatternObjects: {
            fn: function() {
                withTempRect_1.default(function(tempRect) {
                    for (var _loop_2 = function(pattern) {
                        var swatch = getByName_1.default(app.activeDocument.swatches, pattern.name);
                        if (swatch) withSelection_1.restoreSelection(function() {
                            if (tempRect.fillColor = swatch.color, menu_1.callMenu("Find Fill Color menu item"), 
                            tempRect.selected = !1, app.selection && app.selection.length) doAction_1.loadAndDoAction(expandFillAction);
                        });
                    }, _i = 0, _a = toArray_1.default(app.activeDocument.patterns); _i < _a.length; _i++) {
                        _loop_2(_a[_i]);
                    }
                });
            },
            order: 4
        },
        expandBrushedObjects: {
            fn: function() {
                withSelection_1.restoreSelection(function() {
                    menu_1.callMenu("Brush Strokes menu item"), menu_1.callMenu("expandStyle");
                });
            },
            order: 5
        },
        expandText: {
            fn: function() {
                withSelection_1.restoreSelection(function() {
                    menu_1.callMenu("Text Objects menu item"), doAction_1.loadAndDoAction(expandObjectAction);
                });
            },
            order: 6
        },
        cleanupPath: {
            fn: function() {
                withSelection_1.restoreSelection(function() {
                    menu_1.callMenu("Stray Points menu item"), menu_1.callMenu("Cut");
                });
            },
            order: 7
        },
        closeAllPath: {
            fn: function() {
                closePaths_1.closePaths();
            },
            order: 8
        },
        convertToRgb: {
            fn: function() {
                menu_1.callMenu("selectall"), menu_1.callMenu("Colors9");
            },
            order: 9
        },
        deleteUnusedPanelItems: {
            fn: function() {
                doAction_1.loadAndDoAction(cleanupAction);
            },
            order: 10
        },
        clipToArtboardSize: {
            fn: function() {
                clipToArtboardSize_1.default();
            },
            order: 11
        }
    }, exports.prepareForStock = function(finalFile, args) {
        for (var params = __assign({
            unlockAll: !0,
            expandStyledObjects: !0,
            expandSymbolInstances: !0,
            expandPatternObjects: !0,
            expandBrushedObjects: !0,
            expandText: !0,
            cleanupPath: !0,
            closeAllPath: !0,
            convertToRgb: !0,
            deleteUnusedPanelItems: !0,
            clipToArtboardSize: !1,
            format: "eps8",
            preview: !0
        }, args), _i = 0, _a = Object.keys(exports.prepareForStockSteps).sort(function(k1, k2) {
            return exports.prepareForStockSteps[k1].order - exports.prepareForStockSteps[k2].order;
        }); _i < _a.length; _i++) {
            var step = _a[_i];
            if (params[step]) exports.prepareForStockSteps[step].fn();
        }
        if ("eps8" === params.format) shutterEps8_1.default(finalFile); else if ("eps10" === params.format) shutterEps10_1.default(finalFile); else ai_1.default(finalFile);
        var _b = path_1.parse(finalFile), name = _b.name, dir = _b.dir;
        if (params.preview) {
            var previewFile = path_1.join(dir, name + ".jpg");
            if (!toFile_1.default(previewFile).exists) resizeToResolution_1.default(30), jpeg_1.default(previewFile);
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1);
    exports.default = function(file) {
        var saveOpts = new IllustratorSaveOptions();
        saveOpts.embedLinkedFiles = !1, saveOpts.saveMultipleArtboards = !1, app.activeDocument.saveAs(toFile_1.default(file), saveOpts);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.closePaths = function() {
        for (var pathItems = app.activeDocument.pathItems, i = pathItems.length; i--; ) try {
            var pathItem = pathItems[i];
            if (!pathItem.closed) if (pathItem.pathPoints.length < 2) pathItem.remove(); else pathItem.closed = !0;
        } catch (e) {}
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var shutterEps_1 = __webpack_require__(5);
    exports.default = function(file, opts) {
        if (void 0 === opts) opts = {};
        opts.compatibility = Compatibility.ILLUSTRATOR10, shutterEps_1.default(file, opts);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var shutterEps_1 = __webpack_require__(5);
    exports.default = function(file, opts) {
        if (void 0 === opts) opts = {};
        opts.compatibility = Compatibility.ILLUSTRATOR8, shutterEps_1.default(file, opts);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var getArtboardSize_1 = __webpack_require__(8), menu_1 = __webpack_require__(10);
    exports.default = function() {
        app.activeDocument, menu_1.callMenu("selectall"), menu_1.callMenu("group"), menu_1.callMenu("deselectall");
        var size = getArtboardSize_1.default();
        app.activeDocument.pathItems.rectangle(size.top, size.left, size.width, size.height).selected = !0, 
        menu_1.callMenu("sendToFront"), menu_1.callMenu("selectall"), menu_1.callMenu("makeMask");
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(items, name, required) {
        if (void 0 === required) required = !1;
        try {
            return items.getByName(name);
        } catch (e) {
            if (required) throw e;
            return;
        }
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toArray_1 = __webpack_require__(18);
    function restoreSelection(fn) {
        var selection = app.selection;
        app.selection = void 0;
        try {
            fn();
        } finally {
            app.selection = selection;
        }
    }
    exports.restoreSelection = restoreSelection, exports.default = function(items, fn) {
        restoreSelection(function() {
            for (var _i = 0, _a = toArray_1.default(items); _i < _a.length; _i++) _a[_i].selected = !0;
            fn();
        });
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(fn) {
        var tempRect = app.activeDocument.pathItems.rectangle(0, 0, 1, 1);
        tempRect.name = "__tempRect", app.redraw();
        try {
            fn(tempRect);
        } finally {
            var tmpRect = app.activeDocument.pageItems.getByName("__tempRect");
            if (tmpRect) tmpRect.remove();
        }
    };
}, function(module, exports) {
    module.exports = {
        setName: "__cleanup",
        actions: [ "cleanup" ],
        content: "/version 3\r/name [ 9\r\t5f5f636c65616e7570\r]\r/isOpen 1\r/actionCount 1\r/action-1 {\r\t/name [ 7\r\t\t636c65616e7570\r\t]\r\t/keyIndex 0\r\t/colorIndex 0\r\t/isOpen 0\r\t/eventCount 8\r\t/event-1 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_symbol_palette)\r\t\t/localizedName [ 7\r\t\t\t53796d626f6c73\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (enumerated)\r\t\t\t/name [ 17\r\t\t\t\t53656c65637420416c6c20556e75736564\r\t\t\t]\r\t\t\t/value 12\r\t\t}\r\t}\r\t/event-2 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_symbol_palette)\r\t\t/localizedName [ 7\r\t\t\t53796d626f6c73\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 1\r\t\t/showDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (enumerated)\r\t\t\t/name [ 13\r\t\t\t\t44656c6574652053796d626f6c\r\t\t\t]\r\t\t\t/value 5\r\t\t}\r\t}\r\t/event-3 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_styles)\r\t\t/localizedName [ 14\r\t\t\t47726170686963205374796c6573\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 1\r\t\t\t/type (enumerated)\r\t\t\t/name [ 17\r\t\t\t\t53656c65637420416c6c20556e75736564\r\t\t\t]\r\t\t\t/value 14\r\t\t}\r\t}\r\t/event-4 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_styles)\r\t\t/localizedName [ 14\r\t\t\t47726170686963205374796c6573\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 1\r\t\t/showDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 1\r\t\t\t/type (enumerated)\r\t\t\t/name [ 12\r\t\t\t\t44656c657465205374796c65\r\t\t\t]\r\t\t\t/value 3\r\t\t}\r\t}\r\t/event-5 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_brush)\r\t\t/localizedName [ 5\r\t\t\t4272757368\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 1\r\t\t\t/type (enumerated)\r\t\t\t/name [ 17\r\t\t\t\t53656c65637420416c6c20556e75736564\r\t\t\t]\r\t\t\t/value 8\r\t\t}\r\t}\r\t/event-6 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_brush)\r\t\t/localizedName [ 5\r\t\t\t4272757368\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 1\r\t\t/showDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 1\r\t\t\t/type (enumerated)\r\t\t\t/name [ 12\r\t\t\t\t44656c657465204272757368\r\t\t\t]\r\t\t\t/value 3\r\t\t}\r\t}\r\t/event-7 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_swatches)\r\t\t/localizedName [ 8\r\t\t\t5377617463686573\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 1\r\t\t\t/type (enumerated)\r\t\t\t/name [ 17\r\t\t\t\t53656c65637420416c6c20556e75736564\r\t\t\t]\r\t\t\t/value 11\r\t\t}\r\t}\r\t/event-8 {\r\t\t/useRulersIn1stQuadrant 1\r\t\t/internalName (ai_plugin_swatches)\r\t\t/localizedName [ 8\r\t\t\t5377617463686573\r\t\t]\r\t\t/isOpen 0\r\t\t/isOn 1\r\t\t/hasDialog 1\r\t\t/showDialog 0\r\t\t/parameterCount 1\r\t\t/parameter-1 {\r\t\t\t/key 1835363957\r\t\t\t/showInPalette 1\r\t\t\t/type (enumerated)\r\t\t\t/name [ 13\r\t\t\t\t44656c65746520537761746368\r\t\t\t]\r\t\t\t/value 3\r\t\t}\r\t}\r}\r"
    };
}, function(module, exports) {
    module.exports = {
        setName: "__expandObject",
        actions: [ "expandObject" ],
        content: "/version 3\r/name [ 14\r\t5f5f657870616e644f626a656374\r]\r/isOpen 1\r/actionCount 1\r/action-1 {\r\t/name [ 12\r\t\t657870616e644f626a656374\r\t]\r\t/keyIndex 0\r\t/colorIndex 0\r\t/isOpen 0\r\t/eventCount 1\r\t/event-1 {\r\t\t/useRulersIn1stQuadrant 0\r\t\t/internalName (ai_plugin_expand)\r\t\t/localizedName [ 6\r\t\t\t457870616e64\r\t\t]\r\t\t/isOpen 1\r\t\t/isOn 1\r\t\t/hasDialog 1\r\t\t/showDialog 0\r\t\t/parameterCount 4\r\t\t/parameter-1 {\r\t\t\t/key 1868720756\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 1\r\t\t}\r\t\t/parameter-2 {\r\t\t\t/key 1718185068\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t\t/parameter-3 {\r\t\t\t/key 1937011307\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t\t/parameter-4 {\r\t\t\t/key 1936553064\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t}\r}\r"
    };
}, function(module, exports) {
    module.exports = {
        setName: "__expandFill",
        actions: [ "expandFill" ],
        content: "/version 3\r/name [ 12\r\t5f5f657870616e6446696c6c\r]\r/isOpen 1\r/actionCount 1\r/action-1 {\r\t/name [ 10\r\t\t657870616e6446696c6c\r\t]\r\t/keyIndex 0\r\t/colorIndex 0\r\t/isOpen 0\r\t/eventCount 1\r\t/event-1 {\r\t\t/useRulersIn1stQuadrant 0\r\t\t/internalName (ai_plugin_expand)\r\t\t/localizedName [ 6\r\t\t\t457870616e64\r\t\t]\r\t\t/isOpen 1\r\t\t/isOn 1\r\t\t/hasDialog 1\r\t\t/showDialog 0\r\t\t/parameterCount 4\r\t\t/parameter-1 {\r\t\t\t/key 1868720756\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t\t/parameter-2 {\r\t\t\t/key 1718185068\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 1\r\t\t}\r\t\t/parameter-3 {\r\t\t\t/key 1937011307\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t\t/parameter-4 {\r\t\t\t/key 1936553064\r\t\t\t/showInPalette 4294967295\r\t\t\t/type (boolean)\r\t\t\t/value 0\r\t\t}\r\t}\r}\r"
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Button_1 = __webpack_require__(19), Dialog_1 = __webpack_require__(51), DirectorySelectInOut_1 = __webpack_require__(52), Group_1 = __webpack_require__(3), Progressbar_1 = __webpack_require__(61), CommonStrings_1 = __webpack_require__(62), FileProcessor = function() {
        function FileProcessor(opts) {
            this.opts = opts, this.opts = __assign({
                title: CommonStrings_1.default.processFiles,
                filesFilter: /\.(eps|ai|svg)$/i
            }, opts || {});
            var _a = this.opts, title = _a.title, version = _a.version;
            this.dlg = new Dialog_1.Dialog(title + (version ? " " + version : "")), this.init(), 
            this.dlg.show();
        }
        return FileProcessor.prototype.onCanceled = function() {}, FileProcessor.prototype.onProcess = function(file, index) {}, 
        FileProcessor.prototype.onComplete = function() {}, FileProcessor.prototype.onInit = function() {}, 
        FileProcessor.prototype.processFiles = function(files) {
            for (var index = 0, total = files.length, _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var filePath = files_1[_i];
                if (this.stopSignal) return alert(CommonStrings_1.default.operationCanceled), void (this.stopSignal = null);
                this.checkStop(), index++, this.currentStatus = CommonStrings_1.default.processing + " " + index + " " + CommonStrings_1.default.of + " " + total + " [" + filePath.match(/[^\/]*$/g)[0] + "].", 
                this.progBar.setLabel(this.currentStatus), this.progBar.setValue(index / total * 100), 
                this.dlg.update(), this.onProcess(filePath, index), $.gc();
            }
        }, FileProcessor.prototype.setStatus = function(info) {
            this.checkStop(), this.progBar.setLabel(this.currentStatus + (info ? " " + info : "")), 
            this.dlg.update();
        }, FileProcessor.prototype.init = function() {
            var _this = this;
            this.srcSelect = this.dlg.add(new DirectorySelectInOut_1.DirectorySelectInOut()), 
            this.onInit(), this.progBar = this.dlg.add(new Progressbar_1.Progressbar()), this.progBar.inner.alignment = "left", 
            this.progBar.label.inner.alignment = "left", this.progBar.setSize(530, 10);
            var btnGroup = this.dlg.add(new Group_1.Group());
            this.btnCancel = btnGroup.add(new Button_1.Button(CommonStrings_1.default.cancel)), 
            this.btnStart = btnGroup.add(new Button_1.Button(CommonStrings_1.default.start)), 
            this.btnCancel.onClick = function() {
                if (_this.isRunning) _this.btnCancel.setValue(CommonStrings_1.default.canceling + "..."), 
                _this.stopSignal = new Error(CommonStrings_1.default.operationCanceled); else _this.onCanceled(), 
                _this.dlg.close();
            }, this.btnStart.onClick = function() {
                if (!_this.isRunning) try {
                    _this.isRunning = !0;
                    var _a = _this.srcSelect.getValue(), srcDir = _a.srcDir, inputFiles = (_a.destDir, 
                    new Folder(srcDir).getFiles(_this.opts.filesFilter));
                    if (0 === inputFiles.length) throw new Error("No eps or ai files in dir: [" + srcDir + "]");
                    _this.processFiles(inputFiles.map(function(f) {
                        return f.absoluteURI;
                    })), _this.progBar.setLabel(CommonStrings_1.default.done);
                } catch (e) {
                    alert(e);
                } finally {
                    _this.complete(), _this.dlg.close();
                }
            };
        }, FileProcessor.prototype.complete = function() {
            this.isRunning = !1, this.stopSignal = null, this.onComplete();
        }, FileProcessor.prototype.checkStop = function() {
            if ($.sleep(50), this.stopSignal) throw this.stopSignal;
        }, FileProcessor;
    }();
    exports.FileProcessor = FileProcessor;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Dialog = function(_super) {
        function Dialog(title) {
            var _this = _super.call(this, "dialog") || this;
            return _this.title = title, _this.inner = new Window(_this.type, title), _this.inner.onShow = function() {
                return _this.send("show");
            }, _this.inner.maximumSize.height = 600, _this;
        }
        return __extends(Dialog, _super), Dialog.prototype.mountChild = function(component) {
            if ((component = _super.prototype.mountChild.call(this, component)).type) component.inner = this.inner.add(component.type, void 0, "");
            return component;
        }, Dialog.prototype.show = function() {
            this.inner.show();
        }, Dialog.prototype.close = function() {
            this.inner.close();
        }, Dialog.prototype.update = function() {
            this.inner.update();
        }, Dialog;
    }(__webpack_require__(0).CompositeComponent);
    exports.Dialog = Dialog;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    }), __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var settings_1 = __webpack_require__(53), Component_1 = __webpack_require__(0), DirectorySelect_1 = __webpack_require__(58), DirectorySelectInOut = function(_super) {
        function DirectorySelectInOut(opts) {
            var _this = _super.call(this, "") || this;
            return _this.opts = opts, _this.opts = __assign({
                srcDirLabel: "Source Directory",
                destDirLabel: "Destination Directory"
            }, opts || {}), _this;
        }
        return __extends(DirectorySelectInOut, _super), DirectorySelectInOut.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.srcSelect = this.parent.add(new DirectorySelect_1.DirectorySelect(this.opts.srcDirLabel, settings_1.getSettings("lastSrcDir"))), 
            this.destSelect = this.parent.add(new DirectorySelect_1.DirectorySelect(this.opts.destDirLabel, settings_1.getSettings("lastDestDir"))), 
            this.srcSelect.onChange = function(newPath) {
                if (settings_1.setSettings("lastSrcDir", newPath), _this.destSelect.setValue(newPath), 
                _this.debug("changed"), _this.onChange) _this.onChange();
            }, this.destSelect.onChange = function(newPath) {
                settings_1.setSettings("lastDestDir", newPath);
            };
        }, DirectorySelectInOut.prototype.getValue = function() {
            return {
                srcDir: this.srcSelect.getValue(),
                destDir: this.destSelect.getValue()
            };
        }, DirectorySelectInOut.prototype.setValue = function(val) {
            this.srcSelect.setValue(val.srcDir), this.destSelect.setValue(val.destDir);
        }, DirectorySelectInOut;
    }(Component_1.Component);
    exports.DirectorySelectInOut = DirectorySelectInOut;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var getCurrentFile_1 = __webpack_require__(54), path_1 = __webpack_require__(6), readFileJson_1 = __webpack_require__(55), writeFileJson_1 = __webpack_require__(57);
    exports.setSettings = function(key, value) {
        var _a, _b = path_1.parse(getCurrentFile_1.default()), dir = _b.dir, name = _b.name, settingsFile = path_1.join(dir, name + ".json"), currentSettings = readFileJson_1.default(settingsFile, !1);
        writeFileJson_1.default(settingsFile, __assign({}, currentSettings, ((_a = {})[key] = value, 
        _a)));
    }, exports.getSettings = function(key) {
        var _a = path_1.parse(getCurrentFile_1.default()), dir = _a.dir, name = _a.name, settingsFile = path_1.join(dir, name + ".json");
        return readFileJson_1.default(settingsFile, !1)[key];
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1);
    exports.default = function() {
        return toFile_1.default($.fileName).fsName;
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var readFile_1 = __webpack_require__(56);
    exports.default = function(filePath, required) {
        if (void 0 === required) required = !0;
        var content = readFile_1.default(filePath, required);
        return content ? JSON.parse(content) : {};
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var toFile_1 = __webpack_require__(1), writeFile_1 = __webpack_require__(9);
    exports.default = function(filePath, required) {
        if (void 0 === required) required = !0;
        return toFile_1.default(filePath), writeFile_1.withFile(filePath, function(file) {
            return file ? file.read() : "";
        }, "r", required);
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var writeFile_1 = __webpack_require__(9);
    exports.default = function(filePath, obj) {
        writeFile_1.default(filePath, JSON.stringify(obj));
    };
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var DirectorySelect = function(_super) {
        function DirectorySelect(label, basePath) {
            if (void 0 === basePath) basePath = Folder.desktop.fsName;
            return _super.call(this, label, basePath) || this;
        }
        return __extends(DirectorySelect, _super), DirectorySelect.prototype.select = function() {
            var newPath = Folder.selectDialog(this.label);
            if (newPath) return newPath.fsName; else return "";
        }, DirectorySelect;
    }(__webpack_require__(59).SelectDialog);
    exports.DirectorySelect = DirectorySelect;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var translation_1 = __webpack_require__(4), Button_1 = __webpack_require__(19), EditText_1 = __webpack_require__(60), Group_1 = __webpack_require__(3), StaticText_1 = __webpack_require__(11), strings = translation_1.tranEnRu({
        choose: [ "Choose...", "Выбрать..." ]
    }), SelectDialog = function(_super) {
        function SelectDialog(label, basePath) {
            if (void 0 === basePath) basePath = "~/Desktop";
            var _this = _super.call(this) || this;
            return _this.label = label, _this.basePath = basePath, _this;
        }
        return __extends(SelectDialog, _super), SelectDialog.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.text = this.add(new StaticText_1.StaticText(this.label)), 
            this.text.setSize(130, 20), this.input = this.add(new EditText_1.EditText(this.basePath)), 
            this.btn = this.add(new Button_1.Button(strings.choose)), this.btn.onClick = function() {
                var selected = _this.select();
                if (selected) if (_this.setValue(selected), _this.debug("changed"), _this.onChange) _this.onChange(selected);
            };
        }, SelectDialog.prototype.getValue = function() {
            return this.input.getValue();
        }, SelectDialog.prototype.setValue = function(val) {
            this.input.setValue(val);
        }, SelectDialog;
    }(Group_1.Group);
    exports.SelectDialog = SelectDialog;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    }), __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            return t;
        }).apply(this, arguments);
    };
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var EditText = function(_super) {
        function EditText(defaultValue, params) {
            var _this = _super.call(this, "edittext", __assign({
                size: [ 300, 20 ]
            }, params || {})) || this;
            return _this.defaultValue = defaultValue, _this;
        }
        return __extends(EditText, _super), EditText.prototype.init = function() {
            var _this = this;
            _super.prototype.init.call(this), this.setValue(this.defaultValue), this.inner.onChanging = function() {
                if (_this.onChanging) _this.onChanging();
            };
        }, EditText.prototype.getValue = function() {
            return this.inner.text;
        }, EditText.prototype.setValue = function(val) {
            this.inner.text = val;
        }, EditText;
    }(__webpack_require__(0).Component);
    exports.EditText = EditText;
}, function(module, exports, __webpack_require__) {
    "use strict";
    var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        })(d, b);
    }, function(d, b) {
        function __() {
            this.constructor = d;
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
        new __());
    });
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var Component_1 = __webpack_require__(0), StaticText_1 = __webpack_require__(11), Progressbar = function(_super) {
        function Progressbar() {
            return _super.call(this, "progressbar") || this;
        }
        return __extends(Progressbar, _super), Progressbar.prototype.init = function() {
            _super.prototype.init.call(this), this.inner.minvalue = 0, this.inner.maxvalue = 100, 
            this.label = this.parent.add(new StaticText_1.StaticText("")), this.label.setSize(400, 20), 
            this.setSize(400, 10);
        }, Progressbar.prototype.getValue = function() {
            return this.inner.value;
        }, Progressbar.prototype.setValue = function(val) {
            this.inner.value = val;
        }, Progressbar.prototype.getLabel = function() {
            return this.label.getValue();
        }, Progressbar.prototype.setLabel = function(val) {
            this.label.setValue(val);
        }, Progressbar;
    }(Component_1.Component);
    exports.Progressbar = Progressbar;
}, function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var translation_1 = __webpack_require__(4);
    exports.default = translation_1.tranEnRu({
        choose: [ "Choose...", "Выбрать..." ],
        sourceDirectory: [ "Source directory", "Откуда" ],
        destinationDirectory: [ "Destination directory", "Куда" ],
        cancel: [ "Cancel", "Отменить" ],
        canceling: [ "Canceling", "Отмена" ],
        start: [ "Start", "Старт" ],
        of: [ "of", "из" ],
        done: [ "Done", "Готово" ],
        processing: [ "Processing", "Обработка файла" ],
        processFiles: [ "Process Files", "Обработка файла" ],
        operationCanceled: [ "Operation Canceled", "Операция отменена" ]
    });
} ]);
					} catch (e) {
						alert(e.message);
						return;
					}
				})();
			