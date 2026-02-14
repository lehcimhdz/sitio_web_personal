(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 7218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6054)), "/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/app/page.tsx"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4053)), "/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/app/page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 2217:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 1720:
/***/ (() => {



/***/ }),

/***/ 972:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4840));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7726));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4630));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 438));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9675));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6362));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8188));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5739))

/***/ }),

/***/ 438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8063);
/* harmony import */ var _data_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var modularize_import_loader_name_GraduationCap_from_default_as_default_join_esm_icons_graduation_cap_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6920);
/* harmony import */ var modularize_import_loader_name_Award_from_default_as_default_join_esm_icons_award_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8973);
/* harmony import */ var modularize_import_loader_name_BookOpen_from_default_as_default_join_esm_icons_book_open_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8937);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const About = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "about",
        className: "section-padding bg-slate-900/50",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-custom",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid md:grid-cols-2 gap-12 items-start",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        viewport: {
                            once: true
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-3xl font-bold mb-6",
                                children: "About Me"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "prose prose-invert prose-lg text-slate-400",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-4",
                                        children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.bio
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-6",
                                        children: "Currently, I am focused on architecting scalable backend systems and automating complex workflows. My background in both technical implementation and strategic analysis allows me to bridge the gap between business requirements and robust engineering solutions."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "When I'm not coding, I'm likely studying Mathematics or exploring new system architectures."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2
                        },
                        viewport: {
                            once: true
                        },
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: "text-xl font-bold mb-4 flex items-center gap-2 text-slate-200",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_GraduationCap_from_default_as_default_join_esm_icons_graduation_cap_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                className: "text-blue-500",
                                                size: 20
                                            }),
                                            "Education"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "space-y-4",
                                        children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .education */ .f3.map((edu, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "card p-4 hover:bg-slate-800/80 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "font-semibold text-slate-100",
                                                        children: edu.school
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-sm text-blue-400",
                                                        children: edu.degree
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-xs text-slate-500 mt-1",
                                                        children: edu.year
                                                    })
                                                ]
                                            }, index))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: "text-xl font-bold mb-4 flex items-center gap-2 text-slate-200",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Award_from_default_as_default_join_esm_icons_award_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                className: "text-blue-500",
                                                size: 20
                                            }),
                                            "Certifications"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .certifications */ .Ao.map((cert, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-slate-800 border border-slate-700 rounded-full text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_BookOpen_from_default_as_default_join_esm_icons_book_open_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        size: 14,
                                                        className: "text-blue-500"
                                                    }),
                                                    cert
                                                ]
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 9675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8063);
/* harmony import */ var _data_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9490);
/* harmony import */ var modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(238);
/* harmony import */ var modularize_import_loader_name_Github_from_default_as_default_join_esm_icons_github_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1619);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Contact = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "contact",
        className: "section-padding border-t border-slate-800",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-custom max-w-4xl mx-auto text-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                viewport: {
                    once: true
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl md:text-5xl font-bold mb-6 text-slate-100",
                        children: "Ready to build something scalable?"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-xl text-slate-400 mb-10 max-w-2xl mx-auto",
                        children: "I'm currently open to new opportunities as a Backend Developer or Full-Stack Engineer."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "mailto:bmichelcano@gmail.com",
                        className: "btn-primary text-lg px-8 py-4 mb-12 inline-flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                size: 20
                            }),
                            "Get in Touch"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col sm:flex-row items-center justify-center gap-8 text-slate-500 border-t border-slate-800/50 pt-12",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.social.linkedin,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-2 hover:text-blue-500 transition-colors",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        size: 20
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-medium",
                                        children: "Connect on LinkedIn"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.social.github,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center gap-2 hover:text-white transition-colors",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Github_from_default_as_default_join_esm_icons_github_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        size: 20
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-medium",
                                        children: "Check my Code"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ }),

/***/ 5739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8063);
/* harmony import */ var _data_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(517);
/* harmony import */ var modularize_import_loader_name_Building2_from_default_as_default_join_esm_icons_building_2_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3482);
/* harmony import */ var modularize_import_loader_name_Briefcase_from_default_as_default_join_esm_icons_briefcase_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(987);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Experience = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "experience",
        className: "section-padding bg-slate-900/50",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    viewport: {
                        once: true
                    },
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold mb-4",
                            children: "Professional Experience"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-20 h-1 bg-blue-600 rounded-full"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "space-y-12",
                    children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .experience */ .b8.map((job, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            viewport: {
                                once: true
                            },
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hidden md:grid md:grid-cols-[320px_auto_1fr] gap-8 items-start",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-right pt-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-slate-400 font-mono text-sm mb-2 flex items-center justify-end gap-2",
                                                    children: [
                                                        job.period,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            size: 14
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                    className: "text-lg font-semibold text-slate-200 flex items-center justify-end gap-2",
                                                    children: [
                                                        job.company,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Building2_from_default_as_default_join_esm_icons_building_2_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            size: 16,
                                                            className: "text-blue-500 shrink-0"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "relative flex justify-center h-full min-h-[150px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute top-0 bottom-[-48px] w-px bg-slate-800"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10 mt-2.5 relative"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "card hover:border-slate-700/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Briefcase_from_default_as_default_join_esm_icons_briefcase_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            size: 18,
                                                            className: "text-blue-400"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            className: "text-xl font-bold text-slate-100",
                                                            children: job.role
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-slate-400 mb-6 italic",
                                                    children: job.description
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                    className: "space-y-3",
                                                    children: job.achievements.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                            className: "flex items-start gap-3 text-slate-300 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "leading-relaxed",
                                                                    children: item
                                                                })
                                                            ]
                                                        }, i))
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "md:hidden relative pl-8 border-l border-slate-800 ml-3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute -left-[5px] top-0 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-slate-900"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "text-slate-400 font-mono text-xs mb-1 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Calendar_from_default_as_default_join_esm_icons_calendar_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            size: 12
                                                        }),
                                                        job.period
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-base font-semibold text-slate-200 mb-2",
                                                    children: job.company
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "card mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center gap-2 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Briefcase_from_default_as_default_join_esm_icons_briefcase_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                    size: 16,
                                                                    className: "text-blue-400"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                    className: "text-lg font-bold text-slate-100",
                                                                    children: job.role
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-slate-400 text-sm mb-4 italic",
                                                            children: job.description
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                            className: "space-y-3",
                                                            children: job.achievements.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                    className: "flex items-start gap-3 text-slate-300 text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "leading-relaxed",
                                                                            children: item
                                                                        })
                                                                    ]
                                                                }, i))
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);


/***/ }),

/***/ 8188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8063);
/* harmony import */ var modularize_import_loader_name_ArrowUp_from_default_as_default_join_esm_icons_arrow_up_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8042);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-black py-8 border-t border-gray-800",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col md:flex-row justify-between items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5
                            },
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-400 text-sm",
                                children: [
                                    "\xa9 ",
                                    currentYear,
                                    " Michel Cano Hern\xe1ndez. All rights reserved."
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion */ .E.div, {
                            className: "mt-4 md:mt-0 flex items-center gap-6",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion */ .E.button, {
                                onClick: scrollToTop,
                                className: "p-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 text-blue-400 hover:text-white transition-colors duration-300",
                                whileHover: {
                                    y: -3,
                                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)"
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ArrowUp_from_default_as_default_join_esm_icons_arrow_up_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    size: 20
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion */ .E.div, {
                    className: "mt-8 pt-6 border-t border-gray-800 text-center",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.4
                    },
                    viewport: {
                        once: true
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-gray-500 text-xs",
                        children: "Built with Next.js, React, Tailwind CSS, and Framer Motion"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 4840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8063);
/* harmony import */ var _data_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7094);
/* harmony import */ var modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9490);
/* harmony import */ var modularize_import_loader_name_Github_from_default_as_default_join_esm_icons_github_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1619);
/* harmony import */ var modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(238);
/* harmony import */ var modularize_import_loader_name_ArrowRight_from_default_as_default_join_esm_icons_arrow_right_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7631);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Hero = ()=>{
    const scrollToExperience = ()=>{
        const element = document.getElementById("experience");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "home",
        className: "min-h-screen flex items-center justify-center section-padding relative overflow-hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-800/10 blur-[100px] rounded-full pointer-events-none"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-custom relative z-10 w-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-4xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: "text-blue-500 font-mono text-sm tracking-wider mb-4",
                                children: [
                                    "Hi, I'm ",
                                    _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.name
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.h1, {
                            className: "text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight tracking-tight",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            children: [
                                "Data Engineer.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-slate-400",
                                    children: "Architecting scalable data platforms."
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.p, {
                            className: "text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.summary
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                            className: "flex flex-col sm:flex-row gap-4 mb-12",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: scrollToExperience,
                                    className: "btn-primary group",
                                    children: [
                                        "View Work",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ArrowRight_from_default_as_default_join_esm_icons_arrow_right_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            size: 18,
                                            className: "group-hover:translate-x-1 transition-transform"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "mailto:bmichelcano@gmail.com",
                                    className: "btn-secondary inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all",
                                    children: "Contact Me"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                            className: "flex flex-col sm:flex-row items-start sm:items-center gap-6 text-slate-500 text-sm",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.4
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_MapPin_from_default_as_default_join_esm_icons_map_pin_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            size: 16
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.location
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hidden sm:block w-1 h-1 bg-slate-700 rounded-full"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.social.github,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "hover:text-blue-500 transition-colors flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Github_from_default_as_default_join_esm_icons_github_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    size: 18
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "GitHub"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .personalInfo */ .M8.social.linkedin,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "hover:text-blue-500 transition-colors flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Linkedin_from_default_as_default_join_esm_icons_linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    size: 18
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "LinkedIn"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "mailto:bmichelcano@gmail.com",
                                            className: "hover:text-blue-500 transition-colors flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Mail_from_default_as_default_join_esm_icons_mail_lucide_react__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    size: 18
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Email"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 6362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8063);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7686);
/* harmony import */ var modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7382);
/* harmony import */ var modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6206);
/* harmony import */ var _data_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(536);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (id)=>{
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    const navLinks = [
        {
            name: "Experience",
            id: "experience"
        },
        {
            name: "Skills",
            id: "skills"
        },
        {
            name: "Portfolio",
            id: "portfolio"
        },
        {
            name: "About",
            id: "about"
        },
        {
            name: "Contact",
            id: "contact"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-slate-900/90 backdrop-blur-md border-slate-800 py-4" : "bg-transparent border-transparent py-6"}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "container-custom flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        className: "font-bold text-xl tracking-tight text-slate-100",
                        children: [
                            _data_content__WEBPACK_IMPORTED_MODULE_2__/* .personalInfo */ .M8.name,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-blue-500",
                                children: "."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:flex gap-8",
                        children: navLinks.map((link, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.button, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: index * 0.1
                                },
                                onClick: ()=>scrollToSection(link.id),
                                className: "text-sm font-medium text-slate-400 hover:text-blue-500 transition-colors",
                                children: link.name
                            }, link.id))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            className: "text-slate-300 hover:text-white p-2",
                            children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_X_from_default_as_default_join_esm_icons_x_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                size: 24
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Menu_from_default_as_default_join_esm_icons_menu_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                size: 24
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .AnimatePresence */ .M, {
                children: isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-custom py-6 flex flex-col gap-4",
                        children: navLinks.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>scrollToSection(link.id),
                                className: "text-left text-lg font-medium text-slate-400 hover:text-blue-500 py-2",
                                children: link.name
                            }, link.id))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 4630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8063);
/* harmony import */ var _data_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var modularize_import_loader_name_ArrowUpRight_from_default_as_default_join_esm_icons_arrow_up_right_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1443);
/* harmony import */ var modularize_import_loader_name_FolderGit2_from_default_as_default_join_esm_icons_folder_git_2_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6194);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const Portfolio = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "portfolio",
        className: "section-padding",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    viewport: {
                        once: true
                    },
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl md:text-4xl font-bold mb-4",
                            children: "Featured Projects"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-20 h-1 bg-blue-600 rounded-full"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .projects */ .q.map((project, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            viewport: {
                                once: true
                            },
                            className: "group card flex flex-col h-full bg-slate-900/50 hover:bg-slate-800 border-slate-800 hover:border-blue-500/30",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex justify-between items-start mb-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-3 bg-blue-500/10 rounded-lg text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_FolderGit2_from_default_as_default_join_esm_icons_folder_git_2_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                size: 24
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: project.link,
                                            className: "text-slate-500 hover:text-white transition-colors",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_ArrowUpRight_from_default_as_default_join_esm_icons_arrow_up_right_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                size: 24
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors",
                                    children: project.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-slate-400 text-sm mb-6 flex-grow leading-relaxed",
                                    children: project.description
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-wrap gap-2 mt-auto",
                                    children: project.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-xs font-mono text-blue-400/80",
                                            children: [
                                                "#",
                                                tag
                                            ]
                                        }, tagIndex))
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);


/***/ }),

/***/ 7726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8063);
/* harmony import */ var _data_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(536);
/* harmony import */ var modularize_import_loader_name_Database_from_default_as_default_join_esm_icons_database_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2875);
/* harmony import */ var modularize_import_loader_name_Server_from_default_as_default_join_esm_icons_server_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3475);
/* harmony import */ var modularize_import_loader_name_Code_from_default_as_default_join_esm_icons_code_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7634);
/* harmony import */ var modularize_import_loader_name_Layout_from_default_as_default_join_esm_icons_layout_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3019);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Skills = ()=>{
    const getIcon = (category)=>{
        switch(category){
            case "Backend & Systems":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Server_from_default_as_default_join_esm_icons_server_lucide_react__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    size: 24,
                    className: "text-blue-500"
                });
            case "Frontend":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Layout_from_default_as_default_join_esm_icons_layout_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    size: 24,
                    className: "text-purple-500"
                });
            case "Data & Automation":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Database_from_default_as_default_join_esm_icons_database_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    size: 24,
                    className: "text-emerald-500"
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modularize_import_loader_name_Code_from_default_as_default_join_esm_icons_code_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    size: 24,
                    className: "text-slate-500"
                });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "skills",
        className: "section-padding bg-slate-900 border-y border-slate-800",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .motion */ .E.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    viewport: {
                        once: true
                    },
                    className: "mb-12 text-center max-w-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl font-bold mb-4",
                            children: "Technical Expertise"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-slate-400",
                            children: "A focused stack built for reliability and scale. From low-level system design to user-facing interfaces."
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: _data_content__WEBPACK_IMPORTED_MODULE_1__/* .skills */ .nb.map((skillGroup, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__/* .motion */ .E.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: index * 0.1
                            },
                            viewport: {
                                once: true
                            },
                            className: "card bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "p-3 bg-slate-900 rounded-lg border border-slate-700",
                                            children: getIcon(skillGroup.category)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "text-xl font-bold text-slate-100",
                                            children: skillGroup.category
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: skillGroup.items.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "px-3 py-1.5 text-sm font-medium bg-slate-900 text-slate-300 border border-slate-700 rounded-md hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default",
                                            children: item
                                        }, i))
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
 // Added missing import
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);


/***/ }),

/***/ 536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ certifications),
/* harmony export */   M8: () => (/* binding */ personalInfo),
/* harmony export */   b8: () => (/* binding */ experience),
/* harmony export */   f3: () => (/* binding */ education),
/* harmony export */   nb: () => (/* binding */ skills),
/* harmony export */   q: () => (/* binding */ projects)
/* harmony export */ });
const personalInfo = {
    name: "Michel Cano",
    role: "Data Engineer",
    email: "bmichelcano@gmail.com",
    location: "Mexico City, Mexico",
    bio: "I build robust data pipelines and systems that eliminate manual work.",
    summary: "Data Engineer with 3+ years of experience transforming manual workflows into automated, scalable systems. I specialize in building ETL pipelines, optimizing database architectures, and integrating complex APIs to centralize critical institutional data.",
    social: {
        linkedin: "https://www.linkedin.com/in/michel-cano-hern\xe1ndez-5a0474225",
        github: "https://github.com/lehcimhdz",
        email: "mailto:bmichelcano@gmail.com"
    }
};
const skills = [
    {
        category: "Data Engineering & Automation",
        items: [
            "Python",
            "SQL (PostgreSQL)",
            "ETL Pipelines",
            "Pandas/NumPy",
            "Data Modeling",
            "Google Cloud APIs",
            "Web Scraping"
        ]
    },
    {
        category: "Backend Engineering",
        items: [
            "Django REST Framework",
            "Docker & Orchestration",
            "Nginx",
            "Linux",
            "API Design",
            "System Architecture"
        ]
    },
    {
        category: "Frontend & Tools",
        items: [
            "JavaScript (ES6+)",
            "Git/GitHub",
            "Chart.js",
            "Bash Scripting",
            "CI/CD Concepts"
        ]
    }
];
const experience = [
    {
        company: "Comisi\xf3n Ejecutiva de Atenci\xf3n a V\xedctimas de la Ciudad de M\xe9xico",
        role: "Data Engineer & Backend Developer",
        period: "October 2024 - Present",
        description: "Architected the central victim registry system, handling sensitive data for the entire agency.",
        achievements: [
            "Designed and implemented a relational database schema (PostgreSQL) to centralize scattered victim data.",
            "Built reliable ETL pipelines to sync legacy data with the new system.",
            "Developed a concurrency-safe logic for auto-generating government folios (CEAVI/RELOVI format).",
            "Automated document generation (ODT to PDF) processing thousands of files without manual intervention.",
            "Orchestrated the entire data platform using Docker Compose and Nginx."
        ]
    },
    {
        company: "Comisi\xf3n Ejecutiva de Atenci\xf3n a V\xedctimas de la Ciudad de M\xe9xico",
        role: "Python Automation Engineer",
        period: "April 2022 - October 2024",
        description: "Eliminated 80% of manual data entry through Python-based automation pipelines.",
        achievements: [
            "Built data ingestion pipelines using Pandas to validate and clean victim registry data.",
            "Automated the synchronization of local datasets with Google Sheets for real-time reporting.",
            "Developed scripts to batch-process 500+ legal cases annually, reducing error rates to near zero.",
            "Integrated Google Calendar and Gmail APIs to automate stakeholder communication workflows."
        ]
    },
    {
        company: "Espacio Pol\xedtico S.A.S.",
        role: "Legislative Data Analyst",
        period: "April 2021 - November 2021",
        description: " systematized unstructured legislative data for fintech clients.",
        achievements: [
            "Developed tracking systems to categorize and analyze high volumes of legislative bills.",
            "Monitored official gazettes to update compliance databases in real-time.",
            "Transformed complex regulatory text into structured data for executive dashboards."
        ]
    },
    {
        company: "Secretar\xeda de Econom\xeda M\xe9xico",
        role: "Economic Data Analyst",
        period: "July 2019 - January 2020",
        description: "Analyzed international trade datasets to support policy decisions.",
        achievements: [
            "Modeled bilateral trade data flows between Mexico and Pacific Alliance countries.",
            "Cleaned and processed macroeconomic datasets for high-level reporting."
        ]
    }
];
const projects = [
    {
        title: "Centralized Victim Data Platform",
        description: "A production-grade data system replacing disparate spreadsheets. Features robust data validation, concurrency control, and automated backups.",
        tags: [
            "PostgreSQL",
            "Django",
            "Docker",
            "Data Modeling"
        ],
        link: "#"
    },
    {
        title: "Document Generation Pipeline",
        description: "An automated pipeline transforming structured data into thousands of legal documents (PDFs), reducing processing time from weeks to minutes.",
        tags: [
            "Python",
            "ETL",
            "Jinja2",
            "LibreOffice Headless"
        ],
        link: "#"
    },
    {
        title: "Legislative Data Tracker",
        description: "System to ingest, parse, and categorize unstructured legislative text data for real-time compliance monitoring.",
        tags: [
            "Data Scraping",
            "NLP Concepts",
            "Unstructured Data"
        ],
        link: "#"
    }
];
const education = [
    {
        school: "Universidad Abierta y a Distancia de M\xe9xico (UnADM)",
        degree: "Bachelor's Degree, Mathematics",
        year: "Jan 2026 (Expected)"
    },
    {
        school: "Facultad de Estudios Superiores Acatl\xe1n",
        degree: "Licenciatura, Relaciones Internacionales",
        year: "2015 - 2019"
    }
];
const certifications = [
    "Python Data Associate",
    "Diplomado en Ciencia de Datos",
    "Diplomado Seguridad Ciudadana"
];


/***/ }),

/***/ 4053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Space_Grotesk_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_space_grotesk_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8758);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Space_Grotesk_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_space_grotesk_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Space_Grotesk_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_space_grotesk_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_Mono_arguments_subsets_latin_weight_400_500_700_variable_font_roboto_mono_variableName_robotoMono___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4242);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_Mono_arguments_subsets_latin_weight_400_500_700_variable_font_roboto_mono_variableName_robotoMono___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_Mono_arguments_subsets_latin_weight_400_500_700_variable_font_roboto_mono_variableName_robotoMono___WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7834);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);






const metadata = {
    title: "Michel Cano - Data Engineer",
    description: "Data Engineer specializing in ETL pipelines, Python automation, and scalable backend architectures.",
    keywords: "Data Engineer, Python, SQL, ETL, Automation, Backend, Michel Cano",
    authors: [
        {
            name: "Michel Cano"
        }
    ],
    openGraph: {
        title: "Michel Cano - Data Engineer",
        description: "Architecting scalable data platforms.",
        type: "website",
        locale: "en_US"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: "scroll-smooth",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: `${(next_font_google_target_css_path_src_app_layout_tsx_import_Space_Grotesk_arguments_subsets_latin_weight_300_400_500_600_700_variable_font_space_grotesk_variableName_spaceGrotesk___WEBPACK_IMPORTED_MODULE_3___default().variable)} ${(next_font_google_target_css_path_src_app_layout_tsx_import_Roboto_Mono_arguments_subsets_latin_weight_400_500_700_variable_font_roboto_mono_variableName_robotoMono___WEBPACK_IMPORTED_MODULE_4___default().variable)} ${(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_5___default().variable)} font-sans antialiased bg-black text-white m-0 p-0`,
            children: children
        })
    });
}


/***/ }),

/***/ 6054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/Hero.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/Hero.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Hero = (__default__);
;// CONCATENATED MODULE: ./src/components/Experience.tsx

const Experience_proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/Experience.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Experience_esModule, $$typeof: Experience_$$typeof } = Experience_proxy;
const Experience_default_ = Experience_proxy.default;


/* harmony default export */ const Experience = (Experience_default_);
;// CONCATENATED MODULE: ./src/components/Skills.tsx

const Skills_proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/Skills.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Skills_esModule, $$typeof: Skills_$$typeof } = Skills_proxy;
const Skills_default_ = Skills_proxy.default;


/* harmony default export */ const Skills = (Skills_default_);
;// CONCATENATED MODULE: ./src/components/Portfolio.tsx

const Portfolio_proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/Portfolio.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Portfolio_esModule, $$typeof: Portfolio_$$typeof } = Portfolio_proxy;
const Portfolio_default_ = Portfolio_proxy.default;


/* harmony default export */ const Portfolio = (Portfolio_default_);
;// CONCATENATED MODULE: ./src/components/About.tsx

const About_proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/About.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: About_esModule, $$typeof: About_$$typeof } = About_proxy;
const About_default_ = About_proxy.default;


/* harmony default export */ const About = (About_default_);
;// CONCATENATED MODULE: ./src/components/Contact.tsx

const Contact_proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/Contact.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Contact_esModule, $$typeof: Contact_$$typeof } = Contact_proxy;
const Contact_default_ = Contact_proxy.default;


/* harmony default export */ const Contact = (Contact_default_);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx

const Navbar_proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Navbar_esModule, $$typeof: Navbar_$$typeof } = Navbar_proxy;
const Navbar_default_ = Navbar_proxy.default;


/* harmony default export */ const Navbar = (Navbar_default_);
;// CONCATENATED MODULE: ./src/components/Footer.tsx

const Footer_proxy = (0,module_proxy.createProxy)(String.raw`/Users/michelcano/Documents/repositorios-personales/sitio_web_personal/src/components/Footer.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Footer_esModule, $$typeof: Footer_$$typeof } = Footer_proxy;
const Footer_default_ = Footer_proxy.default;


/* harmony default export */ const Footer = (Footer_default_);
;// CONCATENATED MODULE: ./src/app/page.tsx









function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Michel Cano",
        jobTitle: "Data Engineer",
        url: "https://michel-cano.netlify.app",
        sameAs: [
            "https://www.linkedin.com/in/michel-cano-hern\xe1ndez-5a0474225",
            "https://github.com/lehcimhdz"
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Mexico City",
            addressCountry: "MX"
        },
        knowsAbout: [
            "Data Engineering",
            "Python",
            "SQL",
            "ETL",
            "System Architecture"
        ]
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "bg-slate-900 min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Portfolio, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Contact, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [478,839], () => (__webpack_exec__(7218)));
module.exports = __webpack_exports__;

})();