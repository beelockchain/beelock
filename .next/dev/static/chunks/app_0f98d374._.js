(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/GradientGlowButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const GradientGlowButton = ({ children, className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        relative inline-flex rounded-full p-[1px] 
        ${className}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute inset-0 rounded-full   bg-[linear-gradient(200deg,#3ADCFF_0%,#050514_70%)]   [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]   [mask-composite:exclude]    "
            }, void 0, false, {
                fileName: "[project]/app/components/GradientGlowButton.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "   absolute   -top-[3px] md:-top-[4px]   -right-[6px] md:-right-[8px]   w-[75%] md:w-[80%]   h-full   rounded-full   bg-[linear-gradient(255deg,#3ADCFF_0%,rgba(58,220,255,0.35)_30%,transparent_60%)]   blur-[6px] md:blur-[8px]   opacity-90   pointer-events-none   "
            }, void 0, false, {
                fileName: "[project]/app/components/GradientGlowButton.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "   relative z-10   px-5 py-2 md:px-8 md:py-3   rounded-full   bg-[#090920]   border border-white/10   text-[9px] md:text-[10px] xl:text-[15px] lg:text-[15px]   text-white   transition-all   cursor-pointer   ",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/components/GradientGlowButton.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GradientGlowButton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = GradientGlowButton;
const __TURBOPACK__default__export__ = GradientGlowButton;
var _c;
__turbopack_context__.k.register(_c, "GradientGlowButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Topnav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GradientGlowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GradientGlowButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Topnav = ()=>{
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full relative z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "   w-full md:w-[90%] lg:w-[80%] xl:w-[72%] 2xl:w-[65%]   h-14 sm:h-16 lg:h-[72px]   flex justify-between items-center   bg-black rounded-none lg:rounded-full md:rounded-full px-3 sm:px-4 md:px-6 lg:px-8 mt-0 lg:mt-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/assets/images/Group 10.svg",
                            alt: "Logo",
                            className: "w-20 sm:w-24 md:w-28 lg:w-32"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Topnav.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 sm:gap-3 lg:gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GradientGlowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "scale-90 sm:scale-95 md:scale-100",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Topnav.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMenuOpen(!menuOpen),
                                    className: "md:hidden flex-shrink-0",
                                    "aria-label": "Toggle menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/images/menu-icon.png",
                                        alt: "Menu",
                                        width: 22,
                                        height: 22,
                                        className: "sm:w-6 sm:h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Topnav.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Topnav.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Topnav.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Topnav.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Topnav.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `md:hidden absolute left-0 right-0 top-14 sm:top-16 bg-black transition-all duration-300 ease-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col divide-y divide-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMenuOpen(false),
                            className: "px-6 py-4 text-white text-left hover:bg-white/5 transition",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Topnav.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMenuOpen(false),
                            className: "px-6 py-4 text-white text-left hover:bg-white/5 transition",
                            children: "Contact Us"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Topnav.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Topnav.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Topnav.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Topnav.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Topnav, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");
_c = Topnav;
const __TURBOPACK__default__export__ = Topnav;
var _c;
__turbopack_context__.k.register(_c, "Topnav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/faq.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GradientGlowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GradientGlowButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const FAQSection = ()=>{
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const faqs = [
        {
            q: "What makes Beelockchain different from other blockchain development companies?",
            a: "We are the world’s first AI-centered blockchain development company, integrating EVO AI into every layer from blueprint to deployment, ensuring smarter, faster, and more scalable solutions."
        },
        {
            q: "Do you offer custom blockchain development services?",
            a: "Yes. We build custom Layer-1, Layer-2, public, private, and hybrid blockchains tailored to your business needs."
        },
        {
            q: "Can you integrate AI into blockchain systems?",
            a: "Absolutely. EVO AI automates architecture design, testing, optimization, and predictive analysis across your blockchain environment."
        },
        {
            q: "Do you develop dApps and smart contracts?",
            a: "Yes. We design and develop secure, scalable smart contracts and AI-enhanced dApps across multiple chains."
        },
        {
            q: "What industries do you support?",
            a: "Finance, gaming, supply chain, healthcare, real estate, energy, government, logistics, and more."
        },
        {
            q: "Do you help with token launches and crypto exchanges?",
            a: "Yes, including token creation, exchange development, wallet integration, liquidity tools, and compliance guidance."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-[#00020f] md:py-20 py-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-10 md:gap-[120px] text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "md:hidden text-xl  text-center font-semibold text-white mb-6 mt-10 font-manrope",
                    children: "FAQs"
                }, void 0, false, {
                    fileName: "[project]/app/components/faq.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex md:w-[40%] flex-col gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[64px] font-bold leading-tight font-manrope",
                            children: [
                                "Frequently ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/components/faq.tsx",
                                    lineNumber: 49,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Asked ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/app/components/faq.tsx",
                                    lineNumber: 49,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Questions"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/faq.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start gap-2 font-poppins",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GradientGlowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    children: "Try For Free"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/faq.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-white/40 ml-4 font-pooppins",
                                    children: "No card required."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/faq.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/faq.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/faq.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-[60%] flex flex-col gap-4",
                    children: faqs.map((item, index)=>{
                        const isOpen = openIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-[14px] p-[0.8px] bg-[linear-gradient(160deg,#3ADCFF_0%,#050514_65%)] cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#050514] rounded-[13px] px-5 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenIndex(isOpen ? null : index),
                                        className: "w-full flex justify-between items-center gap-6 text-left cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm sm:text-base font-medium font-manrope",
                                                children: item.q
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/faq.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "3",
                                                viewBox: "0 0 16 3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1 1H15",
                                                    stroke: "white",
                                                    strokeOpacity: "0.6",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/faq.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/faq.tsx",
                                                lineNumber: 82,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 16 16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 1V15M1 8H15",
                                                    stroke: "white",
                                                    strokeOpacity: "0.6",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/faq.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/faq.tsx",
                                                lineNumber: 86,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/faq.tsx",
                                        lineNumber: 73,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/60 leading-relaxed font-poppins",
                                            children: item.a
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/faq.tsx",
                                            lineNumber: 97,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/faq.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/faq.tsx",
                                lineNumber: 72,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/app/components/faq.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/faq.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/faq.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/faq.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FAQSection, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FAQSection;
const __TURBOPACK__default__export__ = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AIProjectFinderSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const TypingLoader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-5 justify-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl px-6 py-4 rounded-3xl bg-black/90 border border-white/10 text-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-[10px] font-bold text-black",
                        children: "AI"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.25s]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.12s]"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/AIProjectFinderSection.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = TypingLoader;
const BlockchainChatbot = ()=>{
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [chatHistory, setChatHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeChat, setActiveChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        if (!input.trim() || isGenerating) return;
        const userInput = input;
        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: userInput,
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput('');
        setIsGenerating(true);
        // Track when we started generating
        const startTime = Date.now();
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userInput
                })
            });
            const data = await res.json();
            // Calculate how long the request took
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, 2000 - elapsedTime);
            // Wait for remaining time to ensure minimum 2 seconds
            await new Promise((resolve)=>setTimeout(resolve, remainingTime));
            const aiMessage = {
                id: Date.now() + 1,
                type: "ai",
                content: data.reply ?? "No response from AI",
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
        } catch (error) {
            // Calculate how long the request took
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, 2000 - elapsedTime);
            // Wait for remaining time to ensure minimum 2 seconds
            await new Promise((resolve)=>setTimeout(resolve, remainingTime));
            setMessages((prev)=>[
                    ...prev,
                    {
                        id: Date.now() + 1,
                        type: "ai",
                        content: "Something went wrong. Please try again.",
                        timestamp: new Date()
                    }
                ]);
        } finally{
            setIsGenerating(false);
        }
    };
    const generateBlockchainResponse = (question)=>{
        return "I'm an AI assistant here to help you shape your idea.";
    };
    const loadChat = (chatId)=>{
        setActiveChat(chatId);
        setMessages([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen bg-[#00020F]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-16 md:pt-24 pb-10 md:pb-16 px-4 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg md:text-3xl text-white font-bold mb-2 font-manrope",
                        children: "AI PROJECT FINDER"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-3xl md:text-5xl text-[#82888d] font-bold mb-3 font-manrope",
                        children: "Powered by EVO AI"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-white font-bold font-manrope",
                        children: "Have only a one-line idea? Start here"
                    }, void 0, false, {
                        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center px-3 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "   flex bg-black/40 backdrop-blur-xl   w-full max-w-6xl   h-[75vh] md:h-[520px]   rounded-2xl md:rounded-3xl   overflow-hidden   shadow-[0_0_0px_-10px_rgba(58,220,255,0.6),0_0_100px_-30px_rgba(58,220,255,0.4)]   ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white text-sm md:text-md font-semibold mt-4 md:mt-5 px-6 md:ml-20 font-manrope",
                                children: "AI Project Finder"
                            }, void 0, false, {
                                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto",
                                children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full flex flex-col items-center justify-center text-center px-4 md:px-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white text-lg md:text-xl font-semibold mb-2 font-manrope",
                                            children: "Discover the Magic AI"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-xs md:text-sm max-w-md font-manrope",
                                            children: "Exclusively for designers, developers, product teams & magicians!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-5xl mx-auto px-3 md:px-6 py-6 md:py-10 space-y-6 md:space-y-8",
                                    children: [
                                        messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex ${message.type === "user" ? "justify-start md:justify-end" : "justify-start"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `
        w-fit
        px-5 md:px-7
        py-4 md:py-5
        rounded-2xl md:rounded-3xl
        ${message.type === "user" ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white" : "bg-black/90 text-gray-100"}
      `,
                                                    children: message.content
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, message.id, false, {
                                                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))),
                                        isGenerating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TypingLoader, {}, void 0, false, {
                                            fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                            lineNumber: 191,
                                            columnNumber: 36
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 md:px-6 py-4 md:py-6 bg-black/20 backdrop-blur-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-3xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "   flex items-center gap-3 md:gap-4   bg-[#2c2c2c]   rounded-full px-4 md:px-6 py-2.5 md:py-3   shadow-2xl   ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/assets/images/Butterfly.gif",
                                                    alt: "icon",
                                                    className: "w-8 md:w-10 mix-blend-screen"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: input,
                                                    onChange: (e)=>setInput(e.target.value),
                                                    onKeyPress: (e)=>e.key === "Enter" && handleSubmit(),
                                                    placeholder: "Describe your idea!",
                                                    className: "flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-xs md:text-sm",
                                                    disabled: isGenerating
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSubmit,
                                                    disabled: isGenerating,
                                                    className: "   bg-gradient-to-r from-cyan-500 to-teal-500   hover:from-cyan-600 hover:to-teal-600   disabled:from-gray-500 disabled:to-gray-600   text-white   px-4 md:px-7 py-2   rounded-full   shadow-lg shadow-cyan-500/25   flex items-center gap-2   transition-all   ",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden md:inline font-manrope",
                                                            children: isGenerating ? "Generating..." : "Generate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/AIProjectFinderSection.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AIProjectFinderSection.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlockchainChatbot, "tNqrkunu3ihmPQ3CLnnJVNh6aN8=");
_c1 = BlockchainChatbot;
const __TURBOPACK__default__export__ = BlockchainChatbot;
var _c, _c1;
__turbopack_context__.k.register(_c, "TypingLoader");
__turbopack_context__.k.register(_c1, "BlockchainChatbot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NavLable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const NavLabel = ({ label, className = "", iconSrc = "/assets/images/lable-icon.svg" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex justify-center ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "   relative inline-flex items-center gap-1 rounded-xl   bg-linear-to-r from-[#0B0F1C] via-[#111827] to-[#0B0F1C]   shadow-[0_0_40px_rgba(0,255,255,0.15)]   ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "   absolute inset-0 rounded-xl   bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.15),transparent_40%)]   pointer-events-none   "
                }, void 0, false, {
                    fileName: "[project]/app/components/NavLable.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center justify-center w-10 h-10 rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: iconSrc,
                        alt: "",
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavLable.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/NavLable.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "   relative flex items-center w-[150px]   pl-2 pr-[11px] py-2 rounded-lg   border border-[#0B2A44]   overflow-hidden   ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white whitespace-nowrap font-manrope",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavLable.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   absolute right-0 top-0 h-full w-[160px]   rounded-tr-lg rounded-br-lg   bg-gradient-to-l from-white/[0.12] to-transparent   pointer-events-none   "
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavLable.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavLable.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NavLable.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/NavLable.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NavLabel;
const __TURBOPACK__default__export__ = NavLabel;
var _c;
__turbopack_context__.k.register(_c, "NavLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/whychooseus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GradientGlowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/GradientGlowButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavLable.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const Whychooseus = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-[#00020F] py-16 md:py-20 flex justify-center text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[1200px] xl:px-6 lg:px-6 md:px-1 hidden md:block ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Why Choose Us"
                        }, void 0, false, {
                            fileName: "[project]/app/components/whychooseus.tsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/whychooseus.tsx",
                        lineNumber: 14,
                        columnNumber: 14
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-12 gap-6 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3 flex flex-col gap-6 h-full translate-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/dark-btn.png",
                                            alt: "icon"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 27,
                                            columnNumber: 5
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex flex-col items-center justify-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "xl:text-6xl lg:text-6xl md:text-3xl  font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]",
                                                children: "EVO AI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 37,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/core-approch-icon.png",
                                                alt: "icon"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-[2] rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-6 sm:p-4 p-4 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "xl:text-2xl xl:text-2xl md:text-sm font-bold text-emerald-50",
                                                children: "Project Ideation & Planning"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative xl:h-72 lg:h-72 md:h-unset",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "xl:w-64 xl:h-80 lg:w-64 lg:h-80 md:w-34 md:h-30 xl:right-6 lg:right-6 md:right-1 bottom-2 relative overflow-hidden bg-transparent",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/images/floting-text.png",
                                                        alt: "Idea Light",
                                                        fill: true,
                                                        className: "xl:object-contain lg:object-contain md:object-unset"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/whychooseus.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/whychooseus.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 13
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/whychooseus.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-6 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative xl:w-[520px] lg:w-[520px] md:w-[350px] xl:w-[520px]  aspect-square",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/whychoose-center-img.png",
                                            alt: "AI Core",
                                            fill: true,
                                            priority: true,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 top-35 flex items-center justify-center z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GradientGlowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "md:text-[10px] md:px-0",
                                                children: "Know More"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/whychooseus.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/whychooseus.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3 flex flex-col gap-6 h-full -translate-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-[2] rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/images/small-logo.svg",
                                                alt: "Design Icon",
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16 mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 90,
                                                columnNumber: 14
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "xl:text-3xl lg:text-3xl md:text-lg font-semibold leading-tight",
                                                children: "Design & UI/UX"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "xl:text-emerald-50 lg:text-emerald-50 md:text-[10px] text-[20px] font-bold",
                                                        children: "Development Speed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/whychooseus.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-cyan-400 xl:text-xl lg:text-xl md:text-[10px]",
                                                        children: "3× faster with AI-assisted coding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/whychooseus.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 flex flex-col items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-[#66BAFF] text-center xl:text-3xl lg:text-3xl md:text-xl",
                                                children: "Execution Consistency"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-cyan-200 xl:text-xl lg:text-xl md:text-md",
                                                children: "Time-to-Market"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/small-avatar-icon.png",
                                                alt: "avatar",
                                                className: "w-auto h-auto rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "xl:text-2xl lg:text-2xl md:text-[10px] font-medium px-4 py-2 bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0] rounded-full",
                                            children: "Maintenance & Upgrades"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/whychooseus.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/whychooseus.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/whychooseus.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-[1200px] px-4 md:px-6  block md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12  md:mb-16 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavLable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            label: "Why Choose Us"
                        }, void 0, false, {
                            fileName: "[project]/app/components/whychooseus.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/whychooseus.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 grid-cols-1 xl:gap-6 lg:gap-6 md:gap-6  gap-4 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "   md:col-span-3 col-span-1   md:flex md:flex-col md:gap-4   grid grid-cols-2 gap-4   h-full md:translate-x-4   ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:flex-1 md:rounded-[32px] rounded-2xl border border-white/10   bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]   shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]   p-3 md:p-5 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/images/dark-btn.png",
                                            alt: "icon",
                                            className: "w-16 md:w-20"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl md:rounded-[28px] border border-white/10   bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]   shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]   p-3 md:p-5 flex flex-col items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl md:text-4xl font-semibold text-transparent bg-clip-text   bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]",
                                                children: "EVO AI"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 165,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/core-approch-icon.png",
                                                alt: "icon",
                                                className: "w-20 md:w-24"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 rounded-2xl md:rounded-[28px] border border-white/10   bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]   shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]   p-3 md:p-5 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base md:text-xl font-bold text-emerald-50",
                                                children: "Project Ideation & Planning"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-28 md:h-40",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/images/floting-text.png",
                                                    alt: "Idea",
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/whychooseus.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/whychooseus.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1 md:col-span-6 flex justify-center items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "   relative   w-full   h-[540px]   sm:h-[520px]   md:w-[520px]   ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/whychoose-center-img.png",
                                            alt: "AI Core",
                                            fill: true,
                                            priority: true,
                                            className: "hidden md:block object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/whychoose-center-imgmobile.png",
                                            alt: "AI Core Mobile",
                                            fill: true,
                                            priority: true,
                                            className: "block md:hidden object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-[15%] inset-0 flex items-center justify-center z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$GradientGlowButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                children: "Know More"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/whychooseus.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/whychooseus.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1 md:col-span-3 flex flex-col gap-4 h-full md:-translate-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-[1.8] rounded-2xl md:rounded-[28px] border border-white/10   bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]   shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]   p-3 md:p-5 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/images/small-logo.svg",
                                                alt: "Design",
                                                width: 64,
                                                height: 64,
                                                className: "w-10 md:w-12"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-2xl font-semibold",
                                                children: "Design & UI/UX"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs md:text-sm font-bold text-emerald-50",
                                                        children: "Development Speed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/whychooseus.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs md:text-lg text-cyan-400",
                                                        children: "3× faster with AI-assisted coding"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/whychooseus.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-[1] rounded-2xl md:rounded-[28px] border border-white/10   bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]   shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]   p-3 md:p-5 flex flex-col items-center justify-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm md:text-xl text-[#66BAFF] text-center",
                                                children: "Execution Consistency"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs md:text-base text-cyan-200",
                                                children: "Time-to-Market"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 270,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/assets/images/small-avatar-icon.png",
                                                alt: "avatar",
                                                className: "w-10 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/whychooseus.tsx",
                                                lineNumber: 273,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-[1] rounded-2xl md:rounded-[28px] border border-white/10   bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]   shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]   p-3 md:p-5 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-xs md:text-lg px-4 py-1.5 rounded-full font-medium   bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0]",
                                            children: "Maintenance & Upgrades"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/whychooseus.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/whychooseus.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/whychooseus.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/whychooseus.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/whychooseus.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/whychooseus.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Whychooseus;
const __TURBOPACK__default__export__ = Whychooseus;
var _c;
__turbopack_context__.k.register(_c, "Whychooseus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/BlueprintDiagram.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/BlueprintDiagram.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function clampSteps(steps = [], max = 6) {
    return (steps || []).slice(0, max);
}
const PHASE_COLORS = [
    {
        chip: "from-indigo-500 to-indigo-600",
        wire: "rgba(99,102,241,0.55)",
        dot: "#6366F1",
        grid: "rgba(99,102,241,0.08)"
    },
    {
        chip: "from-emerald-500 to-emerald-600",
        wire: "rgba(16,185,129,0.55)",
        dot: "#10B981",
        grid: "rgba(16,185,129,0.08)"
    },
    {
        chip: "from-amber-500 to-amber-600",
        wire: "rgba(245,158,11,0.55)",
        dot: "#F59E0B",
        grid: "rgba(245,158,11,0.08)"
    },
    {
        chip: "from-rose-500 to-rose-600",
        wire: "rgba(244,63,94,0.55)",
        dot: "#F43F5E",
        grid: "rgba(244,63,94,0.08)"
    }
];
const BlueprintDiagram = ({ blueprint, title })=>{
    _s();
    /* -------------------- HOOKS FIRST (ALWAYS) -------------------- */ const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const phaseRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const stepRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [paths, setPaths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Normalize phases safely
    const phases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlueprintDiagram.useMemo[phases]": ()=>{
            if (!blueprint?.phases?.length) return [];
            const allowed = new Set([
                "Discovery",
                "Architecture",
                "Development",
                "Launch"
            ]);
            return blueprint.phases.filter({
                "BlueprintDiagram.useMemo[phases]": (p)=>allowed.has((p.title || "").trim())
            }["BlueprintDiagram.useMemo[phases]"]).slice(0, 4).map({
                "BlueprintDiagram.useMemo[phases]": (p)=>({
                        ...p,
                        steps: clampSteps(p.steps, 6)
                    })
            }["BlueprintDiagram.useMemo[phases]"]);
        }
    }["BlueprintDiagram.useMemo[phases]"], [
        blueprint
    ]);
    const heading = title || blueprint?.title || "Blueprint";
    // Initialize stepRefs structure (SIDE EFFECT → useEffect)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlueprintDiagram.useEffect": ()=>{
            stepRefs.current = phases.map({
                "BlueprintDiagram.useEffect": (p)=>new Array((p.steps || []).length).fill(null)
            }["BlueprintDiagram.useEffect"]);
        }
    }["BlueprintDiagram.useEffect"], [
        phases
    ]);
    const buildRightAnglePath = (x1, y1, x2, y2)=>{
        const midX = (x1 + x2) / 2;
        return `M ${x1} ${y1} L ${midX} ${y1} L ${midX} ${y2} L ${x2} ${y2}`;
    };
    const recomputeWires = ()=>{
        const root = containerRef.current;
        if (!root) return;
        const rootRect = root.getBoundingClientRect();
        const newPaths = [];
        const centerOf = (el)=>{
            const r = el.getBoundingClientRect();
            return {
                x: r.left - rootRect.left + r.width / 2,
                y: r.top - rootRect.top + r.height / 2
            };
        };
        // Phase → Phase
        for(let i = 0; i < phases.length - 1; i++){
            const a = phaseRefs.current[i];
            const b = phaseRefs.current[i + 1];
            if (!a || !b) continue;
            const ar = a.getBoundingClientRect();
            const br = b.getBoundingClientRect();
            const start = {
                x: ar.right - rootRect.left,
                y: ar.top - rootRect.top + ar.height / 2
            };
            const end = {
                x: br.left - rootRect.left,
                y: br.top - rootRect.top + br.height / 2
            };
            newPaths.push({
                d: buildRightAnglePath(start.x, start.y, end.x, end.y),
                dots: [
                    start,
                    end
                ]
            });
        }
        // Phase → Steps
        phases.forEach((_, pi)=>{
            const chip = phaseRefs.current[pi];
            if (!chip) return;
            const chipRect = chip.getBoundingClientRect();
            const chipRight = chipRect.right - rootRect.left;
            const chipY = chipRect.top - rootRect.top + chipRect.height / 2;
            (stepRefs.current[pi] || []).forEach((stepEl)=>{
                if (!stepEl) return;
                const S = centerOf(stepEl);
                const start = {
                    x: chipRight,
                    y: chipY
                };
                const end = {
                    x: S.x - 24,
                    y: S.y
                };
                newPaths.push({
                    d: buildRightAnglePath(start.x, start.y, end.x, end.y) + ` L ${S.x} ${S.y}`,
                    dots: [
                        start,
                        {
                            x: S.x,
                            y: S.y
                        }
                    ]
                });
            });
        });
        setPaths(newPaths);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlueprintDiagram.useEffect": ()=>{
            recomputeWires();
            window.addEventListener("resize", recomputeWires);
            return ({
                "BlueprintDiagram.useEffect": ()=>window.removeEventListener("resize", recomputeWires)
            })["BlueprintDiagram.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BlueprintDiagram.useEffect"], [
        phases
    ]);
    /* -------------------- SAFE EARLY RETURN -------------------- */ if (!phases.length) return null;
    /* -------------------- JSX -------------------- */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white rounded-xl p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl sm:text-2xl font-extrabold text-gray-900",
                                children: heading
                            }, void 0, false, {
                                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-600 mt-1",
                                children: blueprint.service ? `Service: ${blueprint.service}` : "Blueprint"
                            }, void 0, false, {
                                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[11px] px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200",
                        children: "EVO AI"
                    }, void 0, false, {
                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            Array.isArray(blueprint.inputs) && blueprint.inputs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[12px] font-semibold text-gray-700 mb-2",
                        children: "Selected inputs"
                    }, void 0, false, {
                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: blueprint.inputs.map((it, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-full border border-gray-200 bg-white px-3 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold text-gray-500 uppercase",
                                        children: [
                                            it.id.replace(/_/g, " "),
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] text-gray-900",
                                        children: it.value
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, `${it.id}-${idx}`, true, {
                                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-[0.35]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:28px_28px]"
                        }, void 0, false, {
                            fileName: "[project]/app/components/BlueprintDiagram.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        children: paths.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: p.d,
                                        fill: "none",
                                        stroke: PHASE_COLORS[Math.min(i, PHASE_COLORS.length - 1)].wire,
                                        style: {
                                            filter: "drop-shadow(0 0 6px rgba(0,0,0,0.15))"
                                        },
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    p.dots.map((pt, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: pt.x,
                                            cy: pt.y,
                                            r: "4",
                                            fill: PHASE_COLORS[Math.min(i, PHASE_COLORS.length - 1)].dot,
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }, j, false, {
                                            fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, i, true, {
                                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative p-4 sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-4 gap-4",
                            children: phases.map((phase, pi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                phaseRefs.current[pi] = el;
                                            },
                                            className: `rounded-2xl bg-gradient-to-br ${PHASE_COLORS[pi].chip} text-white shadow-lg px-4 py-3`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-white-900 text-sm",
                                                        children: [
                                                            pi + 1,
                                                            ". ",
                                                            phase.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-black-500 mt-1",
                                                    children: [
                                                        phase.steps?.length || 0,
                                                        " nodes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 space-y-3",
                                            children: (phase.steps || []).map((step, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: (el)=>{
                                                        if (!stepRefs.current[pi]) stepRefs.current[pi] = [];
                                                        stepRefs.current[pi][si] = el;
                                                    },
                                                    className: "rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1.5 h-2.5 w-2.5 rounded-full bg-gray-300 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] font-semibold text-gray-500",
                                                                        children: [
                                                                            "NODE ",
                                                                            si + 1
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-800 leading-snug",
                                                                        children: step
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                                        lineNumber: 287,
                                                                        columnNumber: 27
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, `${pi}-${si}`, false, {
                                                    fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                            lineNumber: 295,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, phase.title, true, {
                                    fileName: "[project]/app/components/BlueprintDiagram.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/components/BlueprintDiagram.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/BlueprintDiagram.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 text-[11px] text-gray-400",
                children: "Evo AI"
            }, void 0, false, {
                fileName: "[project]/app/components/BlueprintDiagram.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/BlueprintDiagram.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlueprintDiagram, "C0xjPDlej+gE20QF3dd4dUv83kQ=");
_c = BlueprintDiagram;
const __TURBOPACK__default__export__ = BlueprintDiagram;
var _c;
__turbopack_context__.k.register(_c, "BlueprintDiagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/MacBookFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/MacBookFrame.tsx
__turbopack_context__.s([
    "MacBookFrame",
    ()=>MacBookFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi.js [app-client] (ecmascript) <export default as Wifi>");
;
;
const MacBookFrame = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "lg:min-h-screen w-full h-full bg-[#05070d] flex items-center justify-center p-2 sm:p-4 lg:p-8 overflow-x-hidden",
        style: {
            scrollbarGutter: "stable"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "origin-center w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(27,255,225,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.10),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_40%)]"
                }, void 0, false, {
                    fileName: "[project]/app/components/MacBookFrame.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[1200px] mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-[12px] sm:rounded-[18px] lg:rounded-[24px] bg-[#0b0f15] p-[3px] sm:p-[4px] lg:p-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.65)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.65)] border border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[10px] sm:rounded-[16px] lg:rounded-[20px] bg-black p-[2px] sm:p-[2px] lg:p-[3px] border border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-[8px] sm:rounded-[12px] lg:rounded-[16px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-7 sm:h-8 md:h-9 lg:h-10 w-full flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-6 text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] text-white/70 bg-black/40 border-b border-white/10 backdrop-blur",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/assets/images/logo-ai-blu.svg",
                                                            alt: "Icon",
                                                            className: "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 31,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-white/80 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]",
                                                            children: "Finder"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 32,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]",
                                                            children: "File"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 34,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden lg:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]",
                                                            children: "View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 35,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/MacBookFrame.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wifi$3e$__["Wifi"], {
                                                            className: "w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 opacity-100"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-4 h-2 sm:w-5 sm:h-2.5 md:w-5.5 md:h-2.5 lg:w-6 lg:h-3 rounded-sm border border-white/60",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-[1.5px] sm:inset-[2px] bg-white rounded-[1px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/MacBookFrame.tsx",
                                                                    lineNumber: 46,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute -right-[1.5px] sm:-right-[2px] md:-right-[2.5px] lg:-right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] sm:w-[2px] h-1 sm:h-1.5 md:h-1.5 lg:h-2 bg-white/70 rounded-[1px]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/MacBookFrame.tsx",
                                                                    lineNumber: 48,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden md:inline text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]",
                                                            children: "Mon Jun 22"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "md:hidden",
                                                                    children: "9:41"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/MacBookFrame.tsx",
                                                                    lineNumber: 56,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hidden md:inline",
                                                                    children: "9:41 AM"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/MacBookFrame.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                                            lineNumber: 55,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/MacBookFrame.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 sm:w-20 sm:h-3.5 lg:w-28 lg:h-5 bg-black/85 rounded-b-lg border-x border-b border-white/10 z-50"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-1.5 sm:px-2 py-2 sm:py-3 lg:py-4 flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full max-w-[1100px]",
                                                children: children
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/MacBookFrame.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_35%)]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MacBookFrame.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/MacBookFrame.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/MacBookFrame.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/MacBookFrame.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-1.5 sm:mt-2 lg:mt-3 h-1 sm:h-1.5 lg:h-2 w-2/3 rounded-full bg-black/50 blur-[1px]"
                        }, void 0, false, {
                            fileName: "[project]/app/components/MacBookFrame.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/MacBookFrame.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/MacBookFrame.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/MacBookFrame.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MacBookFrame;
var _c;
__turbopack_context__.k.register(_c, "MacBookFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Aiblueprint.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/App.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import html2canvas from "html2canvas";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BlueprintDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/BlueprintDiagram.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MacBookFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/MacBookFrame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
async function fetchBlueprint(service, answers) {
    const res = await fetch("/api/blueprint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            service,
            answers
        })
    });
    if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to generate blueprint");
    }
    return res.json();
}
const BlueprintGenerator = ()=>{
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('select');
    const [selectedService, setSelectedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showDropdown, setShowDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [blueprint, setBlueprint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [generatingProgress, setGeneratingProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const diagramRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const services = [
        'Blockchain App',
        'Crypto Token',
        'Smart Contract',
        'AI Integrated 2d/3d Game development',
        'Crypto Exchange',
        'NFT Marketplace',
        'Custom AI system',
        'Or a Hybrid solution'
    ];
    const serviceQuestions = {
        'Blockchain App': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ],
        'Crypto Token': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ],
        'Smart Contract': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ],
        'AI Integrated 2d/3d Game development': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ],
        'Crypto Exchange': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ],
        'NFT Marketplace': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ],
        'Custom AI system': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ],
        'Or a Hybrid solution': [
            {
                id: 'blockchain_type',
                question: 'What type of Blockchain Solution do you want to build?',
                type: 'single',
                options: [
                    'Crypto Exchange (CEX)',
                    'Decentralized Exchange (DEX)',
                    'NFT Marketplace',
                    'Crypto Wallet (Hot / Cold)',
                    'Token / Coin Creation',
                    'Prediction Market Solution',
                    'Gaming Development',
                    'DeFi Platform (Staking, Lending, Farming)',
                    'Web3 Solution',
                    'Enterprise Blockchain Solution',
                    'Not sure'
                ]
            },
            {
                id: 'use_case',
                question: 'What stage is your blockchain idea in?',
                type: 'single',
                options: [
                    'Just an idea',
                    'Concept / Wireframe ready',
                    'MVP already built',
                    'Live product needing upgrades',
                    'Enterprise requirement analysis'
                ]
            },
            {
                id: 'network',
                question: 'Which blockchain network do you prefer?',
                type: 'single',
                options: [
                    'Ethereum',
                    'BNB Chain',
                    'Polygon',
                    'Solana',
                    'Avalanche',
                    'Multi-chain',
                    'Not sure'
                ]
            },
            {
                id: 'features',
                question: 'What core features do you need?',
                type: 'multiple',
                options: [
                    'Smart Contracts',
                    'Token Standards (ERC-20 / ERC-721 / ERC-1155)',
                    'Wallet Integration',
                    'On-chain Transactions',
                    'Admin Dashboard',
                    'KYC / AML',
                    'Liquidity & Swaps',
                    'Staking / Rewards',
                    'API Integrations'
                ]
            },
            {
                id: 'Ai',
                question: 'Do you want AI integrated into the blockchain solution?',
                type: 'single',
                options: [
                    'No AI required',
                    'AI Chat / Support Assistant',
                    'AI Fraud Detection',
                    'AI Trading / Recommendation Engine',
                    'AI Analytics & Insights',
                    'AI Automation (Smart workflows)'
                ]
            },
            {
                id: 'timeline',
                question: 'Desired launch timeline?',
                type: 'single',
                options: [
                    '2–4 weeks (Rapid MVP)',
                    '1–3 months',
                    '3–6 months',
                    '6+ months',
                    'Planning phase only'
                ]
            }
        ]
    };
    const QUIZ_IDS = [
        "blockchain_type",
        "use_case",
        "network",
        "features",
        "Ai",
        "timeline"
    ];
    function answersToInputs(answers) {
        return QUIZ_IDS.map((id)=>{
            const v = answers?.[id];
            if (v == null) return {
                id,
                value: "-"
            };
            const value = Array.isArray(v) ? v.join(", ") : String(v);
            return {
                id,
                value
            };
        });
    }
    const currentQuestions = serviceQuestions[selectedService] || [];
    const currentQuestionData = currentQuestions[currentQuestion];
    const handleServiceSelect = (service)=>{
        setSelectedService(service);
        setShowDropdown(false);
        setCurrentStep('quiz');
        setCurrentQuestion(0);
        setAnswers({});
    };
    const handleAnswer = (questionId, answer, isMultiple = false)=>{
        if (isMultiple) {
            const current = answers[questionId] || [];
            const updated = current.includes(answer) ? current.filter((a)=>a !== answer) : [
                ...current,
                answer
            ];
            setAnswers({
                ...answers,
                [questionId]: updated
            });
        } else {
            setAnswers({
                ...answers,
                [questionId]: answer
            });
        }
    };
    const handleNext = ()=>{
        if (currentQuestion < currentQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            generateBlueprint();
        }
    };
    const handlePrevious = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const generateBlueprint = async ()=>{
        setCurrentStep("generating");
        setGeneratingProgress(10);
        try {
            const interval = setInterval(()=>{
                setGeneratingProgress((p)=>p < 90 ? p + 2 : p);
            }, 120);
            const generated = await fetchBlueprint(selectedService, answers);
            clearInterval(interval);
            setGeneratingProgress(100);
            setBlueprint(generated);
            setTimeout(()=>setCurrentStep("complete"), 300);
        } catch (e) {
            console.error(e);
            alert("Blueprint generation failed. Check server logs.");
            setCurrentStep("quiz");
            setGeneratingProgress(0);
        }
    };
    // const downloadPDF = async (): Promise<void> => {
    //   if (!diagramRef.current) return;
    //   try {
    //     const downloadBtn = document.querySelector('[data-download-btn]') as HTMLButtonElement | null;
    //     if (downloadBtn) {
    //       downloadBtn.disabled = true;
    //       downloadBtn.innerHTML = 'Generating PDF...';
    //     }
    //     const canvas = await html2canvas(diagramRef.current, {
    //       scale: 2,
    //       backgroundColor: "#ffffff",
    //       useCORS: true,
    //       logging: false,
    //       width: diagramRef.current.scrollWidth,
    //       height: diagramRef.current.scrollHeight
    //     });
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF({
    //       orientation: 'portrait',
    //       unit: 'mm',
    //       format: 'a4'
    //     });
    //     const imgWidth = 210;
    //     const pageHeight = 297;
    //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //     let heightLeft = imgHeight;
    //     let position = 0;
    //     pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //     heightLeft -= pageHeight;
    //     while (heightLeft >= 0) {
    //       position = heightLeft - imgHeight;
    //       pdf.addPage();
    //       pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    //       heightLeft -= pageHeight;
    //     }
    //     pdf.save(`${(selectedService || "Blueprint").replace(/\s+/g, "_")}_Blueprint.pdf`);
    //     if (downloadBtn) {
    //       downloadBtn.disabled = false;
    //       downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> Download Blueprint';
    //     }
    //   } catch (error) {
    //     console.error('Error generating PDF:', error);
    //     alert('Failed to generate PDF. Please try again.');
    //     const downloadBtn = document.querySelector('[data-download-btn]') as HTMLButtonElement | null;
    //     if (downloadBtn) {
    //       downloadBtn.disabled = false;
    //       downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg> Download Blueprint';
    //     }
    //   }
    // };
    const downloadPDF = async ()=>{
        if (!diagramRef.current) return;
        const downloadBtn = document.querySelector("[data-download-btn]");
        try {
            if (downloadBtn) {
                downloadBtn.disabled = true;
                downloadBtn.innerText = "Generating PDF...";
            }
            const node = diagramRef.current;
            // 🔒 wait for images inside the diagram
            const images = node.querySelectorAll("img");
            await Promise.all(Array.from(images).map((img)=>new Promise((resolve)=>{
                    if (img.complete) resolve(true);
                    img.onload = img.onerror = ()=>resolve(true);
                })));
            // 🎯 generate image
            const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(node, {
                backgroundColor: "#ffffff",
                pixelRatio: 2,
                cacheBust: true
            });
            // 📄 create PDF
            const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]("p", "mm", "a4");
            const pageWidth = 210;
            const pageHeight = 297;
            const img = new Image();
            img.src = dataUrl;
            await new Promise((res)=>img.onload = res);
            const imgHeight = img.height * pageWidth / img.width;
            let heightLeft = imgHeight;
            let position = 0;
            pdf.addImage(dataUrl, "PNG", 0, position, pageWidth, imgHeight);
            heightLeft -= pageHeight;
            while(heightLeft > 0){
                position -= pageHeight;
                pdf.addPage();
                pdf.addImage(dataUrl, "PNG", 0, position, pageWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save(`${(selectedService || "Blueprint").replace(/\s+/g, "_")}_Blueprint.pdf`);
        } catch (err) {
            console.error("PDF generation failed:", err);
            alert("Failed to generate PDF. Please try again.");
        } finally{
            if (downloadBtn) {
                downloadBtn.disabled = false;
                downloadBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Blueprint
      `;
            }
        }
    };
    const resetGenerator = ()=>{
        setCurrentStep('select');
        setSelectedService('');
        setCurrentQuestion(0);
        setAnswers({});
        setGeneratingProgress(0);
        setBlueprint(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "   text-center text-transparent bg-clip-text   bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_54%,#FFFFFF_60%)]   text-3xl sm:text-4xl lg:text-5xl md:text-6xl   font-semibold mb-5 sm:mb-14 md:mb-14 lg:mb-16   ",
                children: "EVO AI Blueprint Generator"
            }, void 0, false, {
                fileName: "[project]/app/components/Aiblueprint.tsx",
                lineNumber: 584,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$MacBookFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MacBookFrame"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto flex h-[450px] sm:h-[550px] md:h-[700px] lg:h-[700px] w-full flex-col items-center justify-start px-3 sm:px-4 py-6 sm:py-8 lg:py-10 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-7xl h-full flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl sm:rounded-2xl lg:rounded-[24px] border border-white/12 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl overflow-hidden h-full flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-white/10 bg-[#1d222e] px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs sm:text-sm text-white/35",
                                            children: " "
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 sm:gap-3 text-xs sm:text-sm",
                                            children: [
                                                currentStep === "generating" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/50 truncate max-w-[120px] sm:max-w-none",
                                                    children: "Generating..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)) : currentStep === "quiz" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/50 truncate max-w-[120px] sm:max-w-none",
                                                    children: [
                                                        "Q ",
                                                        currentQuestion + 1,
                                                        "/",
                                                        currentQuestions.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative bg-[#1d222e]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/assets/images/image-blue.gif",
                                                        alt: "Ready",
                                                        className: "mix-blend-screen object-contain h-12 w-12 md:h-20 md:w-20"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/25 hidden sm:inline",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/80 truncate max-w-[100px] sm:max-w-[200px] lg:max-w-none",
                                                    children: selectedService || "Blockchain App"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 sm:px-6 md:px-10 lg:px-10 xl:px-20 py-6 sm:py-8 lg:py-1 flex-1 overflow-y-auto overflow-x-hidden",
                                    children: [
                                        currentStep === "select" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col justify-start min-h-full mt-10 space-y-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-4 sm:mb-6 lg:mb-8 px-2",
                                                    children: [
                                                        "Select with ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-cyan-300",
                                                            children: "Seamless"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        "Power ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block ml-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/assets/images/sparkle.svg",
                                                                alt: "sparkle",
                                                                className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 inline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                lineNumber: 636,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 sm:mt-3 lg:mt-4 flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full max-w-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setShowDropdown((s)=>!s),
                                                                className: "group w-full rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 shadow-[0_12px_40px_-18px_rgba(0,255,255,0.35)] backdrop-blur-md transition hover:border-white/25",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold text-xs sm:text-sm lg:text-base truncate",
                                                                            style: {
                                                                                color: '#1BFFE1'
                                                                            },
                                                                            children: selectedService || "Blockchain App"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                            lineNumber: 649,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex items-center justify-center rounded-full bg-[#0b1222]/80 px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] flex-shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                className: `h-3 w-3 sm:h-4 sm:w-4 text-white/80 transition ${showDropdown ? "rotate-180" : ""}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                                lineNumber: 653,
                                                                                columnNumber: 29
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                            lineNumber: 652,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                lineNumber: 644,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: " absolute left-0 right-0 mt-2 overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-[#0b1222]/90 shadow-2xl backdrop-blur-xl z-10 max-h-[250px] sm:max-h-[300px] overflow-y-auto",
                                                                children: services.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleServiceSelect(item),
                                                                        className: "w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-white/85 hover:bg-white/10 border-b border-white/5 last:border-b-0 text-xs sm:text-sm",
                                                                        children: item
                                                                    }, item, false, {
                                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                        lineNumber: 665,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 642,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto flex h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/assets/images/generate.gif",
                                                        alt: "Animation",
                                                        className: "w-20 h-20 object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                            lineNumber: 632,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        currentStep === "quiz" && currentQuestionData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center mb-4 sm:mb-6 lg:mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-block px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 bg-cyan-400/10 text-cyan-300 rounded-full text-xs mb-3 sm:mb-4 lg:mb-6 border border-cyan-400/20 font-medium",
                                                            children: [
                                                                "Question ",
                                                                currentQuestion + 1,
                                                                " of ",
                                                                currentQuestions.length
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 692,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-4",
                                                            children: currentQuestionData.question
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full max-w-2xl mx-auto bg-white/10 rounded-full h-1.5 sm:h-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-r from-cyan-400 to-teal-300 h-1.5 sm:h-2 rounded-full transition-all duration-500",
                                                                style: {
                                                                    width: `${(currentQuestion + 1) / currentQuestions.length * 100}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto mt-4 sm:mt-6 lg:mt-8",
                                                    children: currentQuestionData.options.map((option)=>{
                                                        const isSelected = currentQuestionData.type === "multiple" ? (answers[currentQuestionData.id] || []).includes(option) : answers[currentQuestionData.id] === option;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAnswer(currentQuestionData.id, option, currentQuestionData.type === "multiple"),
                                                            className: `px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3.5 rounded-lg sm:rounded-xl text-left transition-all border backdrop-blur-md text-xs sm:text-sm ${isSelected ? "bg-cyan-400/20 border-cyan-400/50 text-white shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium leading-tight",
                                                                        children: option
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                        lineNumber: 733,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-400 flex-shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                            className: "w-2.5 h-2.5 sm:w-3 sm:h-3 text-black"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                            lineNumber: 736,
                                                                            columnNumber: 33
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                        lineNumber: 735,
                                                                        columnNumber: 31
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, option, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center pt-6 sm:pt-8 lg:pt-10 pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handlePrevious,
                                                            disabled: currentQuestion === 0,
                                                            className: "px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center gap-2 transition-all border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                    className: "w-3 h-3 sm:w-4 sm:h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                    lineNumber: 751,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Previous"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleNext,
                                                            disabled: !answers[currentQuestionData.id] || currentQuestionData.type === "multiple" && answers[currentQuestionData.id]?.length === 0,
                                                            className: "px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-500 hover:to-teal-400 disabled:opacity-30 disabled:cursor-not-allowed text-black rounded-full flex items-center justify-center gap-2 transition-all font-semibold shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)] text-xs sm:text-sm",
                                                            children: [
                                                                currentQuestion === currentQuestions.length - 1 ? "Generate Blueprint" : "Next",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-3 h-3 sm:w-4 sm:h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 754,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 745,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                            lineNumber: 690,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        currentStep === "generating" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center space-y-6 sm:space-y-8 lg:space-y-10 flex flex-col justify-center min-h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto flex h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/assets/images/generate.gif",
                                                        alt: "Generating",
                                                        className: "w-full h-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                        lineNumber: 774,
                                                        columnNumber: 7
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white px-4",
                                                    children: "Generating magic..."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-w-xl mx-auto space-y-3 sm:space-y-4 px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full bg-white/10 rounded-full h-2.5 sm:h-3 lg:h-3.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gradient-to-r from-cyan-400 to-teal-300 h-2.5 sm:h-3 lg:h-3.5 rounded-full transition-all duration-300",
                                                                style: {
                                                                    width: `${generatingProgress}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                lineNumber: 785,
                                                                columnNumber: 9
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 784,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/40 text-sm sm:text-base italic",
                                                            children: [
                                                                "Screen ",
                                                                Math.floor(generatingProgress / 17),
                                                                "/6"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                            lineNumber: 772,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        currentStep === "complete" && blueprint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center space-y-6 sm:space-y-8 lg:space-y-10 py-8 sm:py-12 lg:py-16",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: diagramRef,
                                                    className: "w-full max-w-6xl mx-auto bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BlueprintDiagram$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        title: `${selectedService} Blueprint`,
                                                        blueprint: {
                                                            ...blueprint,
                                                            inputs: answersToInputs(answers)
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                        lineNumber: 802,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mx-auto flex h-20 w-20 sm:h-20 sm:w-20 lg:h-20 lg:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-400 to-emerald-300 shadow-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Aiblueprint.tsx",
                                                        lineNumber: 812,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-[20px]  md:text-[28px] lg:text-[30px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4",
                                                            children: "Blueprint Generated!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/50 text-base sm:text-lg",
                                                            children: "Your comprehensive blueprint is ready for download"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center pt-4 sm:pt-6 lg:pt-8 px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: resetGenerator,
                                                            className: "px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 backdrop-blur-md font-medium text-sm sm:text-base",
                                                            children: "Create Another"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: downloadPDF,
                                                            "data-download-btn": true,
                                                            className: "px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-500 hover:to-teal-400 text-black rounded-full flex items-center justify-center gap-2 transition-all font-semibold shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)] text-sm sm:text-base",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "w-4 h-4 sm:w-5 sm:h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                                    lineNumber: 834,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                "Download Blueprint"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Aiblueprint.tsx",
                                            lineNumber: 799,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Aiblueprint.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Aiblueprint.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Aiblueprint.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/components/Aiblueprint.tsx",
                    lineNumber: 593,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/components/Aiblueprint.tsx",
                lineNumber: 592,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Aiblueprint.tsx",
        lineNumber: 583,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlueprintGenerator, "ldhgPlb2OF8IR0Up+hZznJBgdiA=");
_c = BlueprintGenerator;
const __TURBOPACK__default__export__ = BlueprintGenerator;
var _c;
__turbopack_context__.k.register(_c, "BlueprintGenerator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data/technologiesIcons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// data/technologies.js
// data/technologiesIcons.js
__turbopack_context__.s([
    "technologies",
    ()=>technologies
]);
const technologies = [
    {
        id: 1,
        label: "Ethereum",
        left: "0px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/eth-icon.png",
        category: "blockchain"
    },
    {
        id: 2,
        label: "Solana",
        left: "120.08px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/Solana-icon.png",
        category: "blockchain"
    },
    {
        id: 3,
        label: "Polygon",
        left: "240.19px",
        top: "0px",
        bg: "#25211d",
        icon: "/assets/icons/polygon-icon.png",
        category: "blockchain"
    },
    {
        id: 4,
        label: "BNB Chain",
        left: "360.27px",
        top: "0px",
        bg: "#28212c",
        icon: "/assets/icons/bnb-icon.png",
        category: "blockchain"
    },
    {
        id: 5,
        label: "Avalanche",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/avalanche-icon.png",
        category: "blockchain"
    },
    {
        id: 6,
        label: "Hyperledger",
        left: "0px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/hyper-icon.png",
        category: "blockchain"
    },
    {
        id: 7,
        label: "Polkadot",
        left: "120.08px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/polkadot-icon.png",
        category: "blockchain"
    },
    {
        id: 8,
        label: "Cosmos",
        left: "240.19px",
        top: "0px",
        bg: "#25211d",
        icon: "/assets/icons/cosmos-icon.png",
        category: "blockchain"
    },
    {
        id: 9,
        label: "Sui",
        left: "360.27px",
        top: "0px",
        bg: "#28212c",
        icon: "/assets/icons/sui-icon.png",
        category: "blockchain"
    },
    {
        id: 10,
        label: "Aptos",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/aptos-icon.png",
        category: "blockchain"
    },
    {
        id: 11,
        label: "Rust",
        left: "240.19px",
        top: "0px",
        bg: "#25211d",
        icon: "/assets/icons/rust-icon.png",
        category: "program"
    },
    {
        id: 12,
        label: "Solidity",
        left: "360.27px",
        top: "0px",
        bg: "#28212c",
        icon: "/assets/icons/solidity-icon.png",
        category: "program"
    },
    {
        id: 13,
        label: "Go",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/go-icon.png",
        category: "program"
    },
    {
        id: 14,
        label: "Python",
        left: "0px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/python-icon.png",
        category: "program"
    },
    {
        id: 15,
        label: "Java Script",
        left: "120.08px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/js-icon.png",
        category: "program"
    },
    {
        id: 16,
        label: "Typescript",
        left: "240.19px",
        top: "0px",
        bg: "#25211d",
        icon: "/assets/icons/ts-icon.png",
        category: "program"
    },
    {
        id: 17,
        label: "C++",
        left: "360.27px",
        top: "0px",
        bg: "#28212c",
        icon: "/assets/icons/cplus-icon.png",
        category: "program"
    },
    {
        id: 18,
        label: "Node JS",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/node-icon.png",
        category: "backend"
    },
    {
        id: 19,
        label: "web3js",
        left: "0px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/web3-icon.png",
        category: "backend"
    },
    {
        id: 20,
        label: "Ethers.js",
        left: "120.08px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/ethers-icon.png",
        category: "backend"
    },
    {
        id: 21,
        label: "IPFS",
        left: "240.19px",
        top: "0px",
        bg: "#25211d",
        icon: "/assets/icons/ipfs-icon.png",
        category: "backend"
    },
    {
        id: 22,
        label: "GraphQL",
        left: "360.27px",
        top: "0px",
        bg: "#28212c",
        icon: "/assets/icons/grapql-icon.png",
        category: "backend"
    },
    {
        id: 23,
        label: "Firebase",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/fire-icon.png",
        category: "backend"
    },
    {
        id: 24,
        label: "Hardhat",
        left: "240.19px",
        top: "0px",
        bg: "#25211d",
        icon: "/assets/icons/har-icon.png",
        category: "smart-contract"
    },
    {
        id: 25,
        label: "Foundry",
        left: "360.27px",
        top: "0px",
        bg: "#28212c",
        icon: "/assets/icons/found-icon.png",
        category: "smart-contract"
    },
    {
        id: 26,
        label: "Truffle",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/found-icon.png",
        category: "smart-contract"
    },
    {
        id: 27,
        label: "EVO AI Engine",
        left: "0px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/beelock-icon.png",
        category: "ai"
    },
    {
        id: 28,
        label: "TENSOR FLOW",
        left: "120.08px",
        top: "0px",
        bg: "#281d1d",
        icon: "/assets/icons/tensor-icon.png",
        category: "ai"
    },
    {
        id: 29,
        label: "Pytorch",
        left: "240.19px",
        top: "0px",
        bg: "#25211d",
        icon: "/assets/icons/pytorch-icon.png",
        category: "ai"
    },
    {
        id: 30,
        label: "LLM",
        left: "360.27px",
        top: "0px",
        bg: "#28212c",
        icon: "/assets/icons/llm-icon.png",
        category: "ai"
    },
    {
        id: 31,
        label: "Remix",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/remix-icon.png",
        category: "smart-contract"
    },
    {
        id: 32,
        label: "Openzeplin",
        left: "480.35px",
        top: "0px",
        bg: "#212121",
        icon: "/assets/icons/openz-icon.png",
        category: "smart-contract"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TechnologiesUsed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechnologiesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$technologiesIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/technologiesIcons.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* ================= DESKTOP GRID CONFIG ================= */ const TILE = 112; // w-28
const GAP = 2;
const COLUMNS = 10;
const GRID_WIDTH = COLUMNS * TILE + (COLUMNS - 1) * GAP;
function TechnologiesSection() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full bg-[#05060f] py-14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: " font-manrope text-center text-[36px] sm:text-[44px] lg:text-[56px] leading-tight font-bold text-neutral-100 mb-14 font-manrope",
                    children: "Technologies & Tools"
                }, void 0, false, {
                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex justify-center mb-14",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-20 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
                                color: "bg-cyan-400",
                                text: "Blockchain",
                                active: activeCategory === "blockchain",
                                onClick: ()=>setActiveCategory((p)=>p === "blockchain" ? null : "blockchain")
                            }, void 0, false, {
                                fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
                                color: "bg-yellow-300",
                                text: "Program",
                                active: activeCategory === "program",
                                onClick: ()=>setActiveCategory((p)=>p === "program" ? null : "program")
                            }, void 0, false, {
                                fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
                                color: "bg-blue-500",
                                text: "Smart Contract",
                                active: activeCategory === "smart-contract",
                                onClick: ()=>setActiveCategory((p)=>p === "smart-contract" ? null : "smart-contract")
                            }, void 0, false, {
                                fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
                                color: "bg-orange-500",
                                text: "Web3 & Backend",
                                active: activeCategory === "backend",
                                onClick: ()=>setActiveCategory((p)=>p === "backend" ? null : "backend")
                            }, void 0, false, {
                                fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {
                                color: "bg-rose-500",
                                text: "AI Technology",
                                active: activeCategory === "ai",
                                onClick: ()=>setActiveCategory((p)=>p === "ai" ? null : "ai")
                            }, void 0, false, {
                                fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/TechnologiesUsed.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:block relative h-[300px]",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$technologiesIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["technologies"].map((tech, index)=>{
                        const isCategoryActive = activeCategory === null || tech.category === activeCategory;
                        const isIconActive = tech.id === activeId;
                        const col = index % COLUMNS;
                        const row = Math.floor(index / COLUMNS);
                        const left = `calc(50% - ${GRID_WIDTH / 2}px + ${col * (TILE + GAP)}px)`;
                        const top = row * (TILE + GAP);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveId(tech.id),
                            className: `
                  absolute w-28 h-28 overflow-hidden
                  transition-all duration-300
                  ${isCategoryActive ? "opacity-100 scale-100" : "opacity-30 scale-[0.95]"}
                  ${isIconActive ? "outline outline-1 outline-cyan-400" : ""}
                  hover:scale-105 hover:opacity-100
                `,
                            style: {
                                left,
                                top,
                                backgroundColor: tech.bg
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-[20px] left-1/2 -translate-x-1/2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: tech.icon,
                                        alt: tech.label,
                                        className: "w-8 h-8 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-[68px] w-full text-center text-white/50 text-xs leading-4 font-poppins",
                                    children: tech.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, tech.id, true, {
                            fileName: "[project]/app/components/TechnologiesUsed.tsx",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden space-y-12",
                    children: [
                        {
                            key: "blockchain",
                            color: "bg-cyan-400"
                        },
                        {
                            key: "program",
                            color: "bg-yellow-300"
                        },
                        {
                            key: "smart-contract",
                            color: "bg-blue-500"
                        },
                        {
                            key: "backend",
                            color: "bg-orange-500"
                        },
                        {
                            key: "ai",
                            color: "bg-rose-500"
                        }
                    ].map(({ key, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-2 h-2 rounded-full ${color}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white/70 text-sm font-medium capitalize",
                                            children: key.replace("-", " ")
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$technologiesIcons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["technologies"].filter((tech)=>tech.category === key).map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-24 rounded-md flex flex-col items-center justify-center",
                                            style: {
                                                backgroundColor: tech.bg
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: tech.icon,
                                                    alt: tech.label,
                                                    className: "w-7 h-7 object-contain mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-white/60 text-center leading-tight px-1 font-poppins",
                                                    children: tech.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, tech.id, true, {
                                            fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                            lineNumber: 97,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/app/components/TechnologiesUsed.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/TechnologiesUsed.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/TechnologiesUsed.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/TechnologiesUsed.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(TechnologiesSection, "snzFGV7qx4EG4wENSFDz7oS24IQ=");
_c = TechnologiesSection;
/* ================= LEGEND ================= */ function Legend({ color, text, active = false, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: "flex items-center gap-4 select-none cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-5 h-5 rounded-sm ${color}`
            }, void 0, false, {
                fileName: "[project]/app/components/TechnologiesUsed.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-sm transition-colors font-manrope ${active ? "text-cyan-400" : "text-white/50"}`,
                children: text
            }, void 0, false, {
                fileName: "[project]/app/components/TechnologiesUsed.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/TechnologiesUsed.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c1 = Legend;
var _c, _c1;
__turbopack_context__.k.register(_c, "TechnologiesSection");
__turbopack_context__.k.register(_c1, "Legend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
const TechTrendsMarquee = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#00020F] h-20 sm:h-40 md:h-40 lg:h-60 flex justify-center items-center overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "flex ",
            speed: 50,
            direction: "right",
            children: [
                1,
                2
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-10 mx-10 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl  sm:text-2xl  md:text-2xl   lg:text-6xl font-extrabold tracking-widest   text-transparent   bg-clip-text   [-webkit-text-fill-color:transparent]   [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]   bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%]    animate-gradient-move",
                            children: "GENERATIVE AI"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Marquee.tsx",
                            lineNumber: 14,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/marqueeimg.png",
                            alt: "Plus Icon",
                            height: 200,
                            width: 144,
                            className: " w-16 h-16   sm:w-16 sm:h-16   md:w-18 md:h-18   lg:w-20 lg:h-20   xl:w-26 xl:h-26   object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Marquee.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl  sm:text-6xl  md:text-6xl   lg:text-6xl font-extrabold tracking-widest   text-transparent   bg-clip-text   [-webkit-text-fill-color:transparent]   [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]   bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%]    animate-gradient-move",
                            children: "TECH TRENDS"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Marquee.tsx",
                            lineNumber: 34,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/images/marqueeimg.png",
                            alt: "Plus Icon",
                            height: 200,
                            width: 204,
                            className: " w-16 h-16   sm:w-16 sm:h-16   md:w-18 md:h-18   lg:w-20 lg:h-20   xl:w-26 xl:h-26   object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Marquee.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/app/components/Marquee.tsx",
                    lineNumber: 11,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/app/components/Marquee.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Marquee.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TechTrendsMarquee;
const __TURBOPACK__default__export__ = TechTrendsMarquee;
var _c;
__turbopack_context__.k.register(_c, "TechTrendsMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/sections/Whatweprovide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Whatweprovide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ================= CONFIG ================= */ const ACTIVE_WIDTH = 520;
const EASE = "power3.out";
/* ================= DATA ================= */ const CARD_DATA = [
    {
        title: "Blockchain Development",
        content: [
            "Custom Blockchain Development",
            "Smart Contract Development",
            "Dapp Development",
            "Layer 1 Blockchain Development",
            "Layer 2 Blockchain Development",
            "NFT Marketplace Development",
            "Hyperledger Blockchain Development"
        ]
    },
    {
        title: "Crypto",
        content: [
            "Crypto Exchange Development ",
            "Crypto Wallet Development",
            "Token & Coin Creation",
            "ICO Development",
            "IDO Development",
            "Crypto Trading Bot Development"
        ]
    },
    {
        title: "Game Development",
        content: [
            "Play-to-Earn Game Development",
            "Move-to-Earn Game Development",
            "2D & 3D Game Development ",
            "NFT Game Development",
            "Casino Game Development",
            "Unreal Engine Game Development",
            "iGaming Software Development",
            "Poker Game Development"
        ]
    },
    {
        title: "Game Art ",
        content: [
            "3D Art",
            "2D Art",
            "Character Design",
            "Game Animation",
            "UI & UX Service"
        ]
    },
    {
        title: "Prediction Market",
        content: [
            "Prediction Market Software"
        ]
    }
];
function Whatweprovide() {
    _s();
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hoverTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* ---------- INITIAL ---------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Whatweprovide.useEffect": ()=>{
            cardRefs.current.forEach({
                "Whatweprovide.useEffect": (card)=>{
                    if (!card) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                        flexGrow: 1,
                        flexBasis: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card.querySelector(".collapsed-title"), {
                        rotate: -90,
                        opacity: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card.querySelector(".active-title"), {
                        opacity: 0,
                        y: 20
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card.querySelector(".content"), {
                        opacity: 0,
                        y: 30
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card.querySelector(".arrow-collapsed"), {
                        opacity: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card.querySelector(".arrow-active"), {
                        opacity: 0,
                        x: -10
                    });
                }
            }["Whatweprovide.useEffect"]);
        }
    }["Whatweprovide.useEffect"], []);
    /* ---------- ACTIVATE ---------- */ const activateCard = (index)=>{
        if (active === index) return;
        setActive(index);
        cardRefs.current.forEach((card, i)=>{
            if (!card) return;
            const collapsedTitle = card.querySelector(".collapsed-title");
            const activeTitle = card.querySelector(".active-title");
            const content = card.querySelector(".content");
            const arrowCollapsed = card.querySelector(".arrow-collapsed");
            const arrowActive = card.querySelector(".arrow-active");
            // 🚨 Always kill running tweens first
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf([
                card,
                collapsedTitle,
                activeTitle,
                content,
                arrowCollapsed,
                arrowActive
            ]);
            /* ------------------ NON-ACTIVE CARDS ------------------ */ if (i !== index) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                    flexGrow: 1,
                    flexBasis: 0,
                    duration: 0.45,
                    ease: EASE,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(collapsedTitle, {
                    opacity: 1,
                    rotate: -90,
                    duration: 0.3,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(activeTitle, {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(content, {
                    opacity: 0,
                    y: 30,
                    duration: 0.2,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowCollapsed, {
                    opacity: 1,
                    duration: 0.25,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowActive, {
                    opacity: 0,
                    x: -10,
                    duration: 0.2,
                    overwrite: "auto"
                });
                return; // ⬅️ VERY IMPORTANT
            }
            /* ------------------ ACTIVE CARD ------------------ */ // 1️⃣ WIDTH EXPANDS IMMEDIATELY
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                flexGrow: 0,
                flexBasis: ACTIVE_WIDTH,
                duration: 0.45,
                ease: EASE,
                overwrite: "auto"
            });
            // 2️⃣ LOCK TEXT ANIMATION ONLY
            isAnimating.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(collapsedTitle, {
                opacity: 0,
                duration: 0.18,
                overwrite: "auto"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(activeTitle, {
                opacity: 1,
                y: 0,
                delay: 0.12,
                overwrite: "auto"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(content, {
                opacity: 1,
                y: 0,
                delay: 0.2,
                overwrite: "auto"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowCollapsed, {
                opacity: 0,
                duration: 0.2,
                overwrite: "auto"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowActive, {
                opacity: 1,
                x: 0,
                delay: 0.2,
                overwrite: "auto",
                onComplete: ()=>{
                    isAnimating.current = false; // 🔓 unlock AFTER text settles
                }
            });
        });
    };
    /* ---------- RESET ---------- */ const resetAll = ()=>{
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(()=>{
            if (isAnimating.current) return;
            setActive(null);
            cardRefs.current.forEach((card)=>{
                if (!card) return;
                const targets = [
                    card,
                    card.querySelector(".collapsed-title"),
                    card.querySelector(".active-title"),
                    card.querySelector(".content"),
                    card.querySelector(".arrow-collapsed"),
                    card.querySelector(".arrow-active")
                ];
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(targets);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                    flexGrow: 1,
                    flexBasis: 0,
                    duration: 0.45,
                    ease: EASE,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card.querySelector(".collapsed-title"), {
                    opacity: 1,
                    rotate: -90,
                    duration: 0.3,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card.querySelector(".active-title"), {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card.querySelector(".content"), {
                    opacity: 0,
                    y: 30,
                    duration: 0.2,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card.querySelector(".arrow-collapsed"), {
                    opacity: 1,
                    duration: 0.25,
                    overwrite: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card.querySelector(".arrow-active"), {
                    opacity: 0,
                    x: -10,
                    duration: 0.2,
                    overwrite: "auto"
                });
            });
        }, 60); // 🧈 micro delay = smooth
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full h-full md:[h-300px] lg:h-[760px]  bg-[#05060f] overflow-hidden flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center text-transparent bg-clip-text bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_54%,#FFFFFF_60%)]   text-3xl md:text-6xl font-semibold mb-16",
                children: "What We Provide"
            }, void 0, false, {
                fileName: "[project]/app/sections/Whatweprovide.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex flex-1",
                onMouseLeave: resetAll,
                children: CARD_DATA.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            cardRefs.current[i] = el;
                        },
                        onMouseEnter: ()=>activateCard(i),
                        className: "relative flex-grow basis-0 cursor-pointer overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-b from-[#393939] via-[#0f244f] to-[#393939]"
                            }, void 0, false, {
                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 h-full p-10 pointer-events-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "collapsed-title absolute inset-0 flex items-center justify-center text-white text-3xl whitespace-nowrap",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "active-title absolute top-20 left-6 flex items-center gap-10 whitespace-nowrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-3xl",
                                                children: card.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "arrow-active",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/images/active-arrow.png",
                                                    alt: "Arrow Right Active",
                                                    width: 50,
                                                    height: 50
                                                }, void 0, false, {
                                                    fileName: "[project]/app/sections/Whatweprovide.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "content mt-28 space-y-4 text-[#1BFFE1] text-[20px] leading-7",
                                        children: card.content.map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "• ",
                                                    c
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "arrow-collapsed absolute bottom-6 left-1/2 -translate-x-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/initial-arrow.png",
                                            alt: "Arrow Right",
                                            width: 50,
                                            height: 50
                                        }, void 0, false, {
                                            fileName: "[project]/app/sections/Whatweprovide.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this),
                            i !== CARD_DATA.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#3FFFE1]/40 to-transparent z-20"
                            }, void 0, false, {
                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                lineNumber: 289,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/sections/Whatweprovide.tsx",
                lineNumber: 253,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden divide-y divide-white/10",
                children: CARD_DATA.map((card, i)=>{
                    const isOpen = active === i;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden bg-gradient-to-r from-[#2c2c2c] via-[#0f244f] to-[#2c2c2c]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActive(isOpen ? null : i),
                                className: "w-full flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/active-arrow.png",
                                            alt: "Active Arrow",
                                            width: 18,
                                            height: 18,
                                            className: "transition-transform duration-300 rotate-[45deg]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/sections/Whatweprovide.tsx",
                                            lineNumber: 315,
                                            columnNumber: 13
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/initial-arrow.png",
                                            alt: "Initial Arrow",
                                            width: 18,
                                            height: 18
                                        }, void 0, false, {
                                            fileName: "[project]/app/sections/Whatweprovide.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                                        lineNumber: 313,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-sm sm:text-base font-medium",
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                                        lineNumber: 334,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                lineNumber: 308,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `transition-all duration-300 ease-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 ml-4 pb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 text-[#1BFFE1] text-sm",
                                        children: card.content.map((c, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "• ",
                                                    c
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                                lineNumber: 348,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/sections/Whatweprovide.tsx",
                                    lineNumber: 345,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/sections/Whatweprovide.tsx",
                                lineNumber: 340,
                                columnNumber: 9
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/app/sections/Whatweprovide.tsx",
                        lineNumber: 303,
                        columnNumber: 7
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/sections/Whatweprovide.tsx",
                lineNumber: 298,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/sections/Whatweprovide.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s(Whatweprovide, "vLUNUFpPbUabfZ0s/1Jy4x0sIt0=");
_c = Whatweprovide;
var _c;
__turbopack_context__.k.register(_c, "Whatweprovide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_0f98d374._.js.map