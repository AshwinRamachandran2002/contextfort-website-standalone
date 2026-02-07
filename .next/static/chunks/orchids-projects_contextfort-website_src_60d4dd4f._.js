(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/orchids-projects/contextfort-website/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/orchids-projects/contextfort-website/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/button.tsx:52:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/orchids-projects/contextfort-website/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LOG_ENTRIES = [
    {
        id: 1,
        type: "HUMAN",
        action: "Mouse Move",
        timestamp: "10:24:01",
        confidence: 99.8
    },
    {
        id: 2,
        type: "AGENT",
        action: "DOM Interaction",
        timestamp: "10:24:05",
        confidence: 98.2
    },
    {
        id: 3,
        type: "AGENT",
        action: "Fast Form Fill",
        timestamp: "10:24:08",
        confidence: 99.5
    },
    {
        id: 4,
        type: "HUMAN",
        action: "Scroll",
        timestamp: "10:24:12",
        confidence: 97.4
    },
    {
        id: 5,
        type: "AGENT",
        action: "API Call Hook",
        timestamp: "10:24:15",
        confidence: 100
    }
];
function LandingPage() {
    _s();
    const [activeLogs, setActiveLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(LOG_ENTRIES.slice(0, 3));
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            const interval = setInterval({
                "LandingPage.useEffect.interval": ()=>{
                    setActiveLogs({
                        "LandingPage.useEffect.interval": (prev)=>{
                            const next = [
                                ...prev
                            ];
                            const last = LOG_ENTRIES[Math.floor(Math.random() * LOG_ENTRIES.length)];
                            return [
                                {
                                    ...last,
                                    id: Date.now()
                                },
                                ...next.slice(0, 4)
                            ];
                        }
                    }["LandingPage.useEffect.interval"]);
                }
            }["LandingPage.useEffect.interval"], 3000);
            return ({
                "LandingPage.useEffect": ()=>clearInterval(interval)
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/app/page.tsx:53:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/page.tsx:55:6",
                "data-orchids-name": "div",
                className: "fixed inset-0 z-0 pointer-events-none opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    size: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "data-orchids-id": "src/app/page.tsx:59:6",
                "data-orchids-name": "nav",
                className: "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:60:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            "data-orchids-id": "src/app/page.tsx:61:10",
                            "data-orchids-name": "a",
                            href: "/",
                            className: "flex items-center gap-3 hover:opacity-80 transition-opacity",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/page.tsx:62:12",
                                    "data-orchids-name": "div",
                                    className: "w-8 h-8 bg-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        "data-orchids-id": "src/app/page.tsx:63:14",
                                        "data-orchids-name": "Shield",
                                        className: "w-5 h-5 text-background"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/app/page.tsx:65:12",
                                    "data-orchids-name": "span",
                                    className: "text-xl font-bold tracking-tighter uppercase",
                                    children: "ContextFort"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:67:10",
                            "data-orchids-name": "div",
                            className: "hidden md:flex items-center gap-4 text-sm font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:68:12",
                                    "data-orchids-name": "Button",
                                    variant: "ghost",
                                    asChild: true,
                                    className: "text-muted-foreground hover:text-primary transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:69:14",
                                        "data-orchids-name": "a",
                                        href: "#how-it-works",
                                        children: "How it works"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:71:12",
                                    "data-orchids-name": "Button",
                                    variant: "ghost",
                                    asChild: true,
                                    className: "text-muted-foreground hover:text-primary transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:72:14",
                                        "data-orchids-name": "a",
                                        href: "/blog",
                                        children: "Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:74:12",
                                    "data-orchids-name": "Button",
                                    asChild: true,
                                    className: "bg-primary text-background hover:bg-primary/90 rounded-none transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:75:14",
                                        "data-orchids-name": "a",
                                        href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Book a demo"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:79:12",
                                    "data-orchids-name": "Button",
                                    asChild: true,
                                    variant: "outline",
                                    className: "border-primary/50 hover:bg-primary/10 rounded-none transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:80:14",
                                        "data-orchids-name": "a",
                                        href: "https://github.com/ContextFort-AI/ContextFort",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "GitHub"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/app/page.tsx:89:6",
                "data-orchids-name": "section",
                className: "relative pt-32 pb-20 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:90:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:91:10",
                        "data-orchids-name": "div",
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src/app/page.tsx:92:12",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/page.tsx:97:14",
                                        "data-orchids-name": "div",
                                        className: "inline-flex items-center gap-3 px-4 py-2 mb-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-white/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:98:16",
                                                "data-orchids-name": "span",
                                                className: "text-sm font-semibold text-black tracking-tight",
                                                children: "Backed by"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:99:16",
                                                "data-orchids-name": "div",
                                                className: "w-6 h-6 bg-[#ff6600] flex items-center justify-center font-bold text-white text-xs",
                                                children: "Y"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:100:16",
                                                "data-orchids-name": "span",
                                                className: "text-sm font-semibold text-black tracking-tight",
                                                children: "Combinator"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/app/page.tsx:102:14",
                                        "data-orchids-name": "h1",
                                        className: "text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:103:16",
                                                "data-orchids-name": "span",
                                                className: "md:whitespace-nowrap",
                                                children: "Visibility & Controls"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:103:84",
                                                "data-orchids-name": "span",
                                                className: "text-primary italic md:whitespace-nowrap",
                                                children: "for Browser Agents"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 152
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/app/page.tsx:105:14",
                                        "data-orchids-name": "p",
                                        className: "text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed",
                                        children: "Through a simple and powerful browser extension"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/page.tsx:108:14",
                                        "data-orchids-name": "div",
                                        className: "flex flex-wrap items-center gap-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:109:16",
                                                "data-orchids-name": "span",
                                                className: "text-sm text-muted-foreground font-medium",
                                                children: "Purpose built for:"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:110:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        "data-orchids-id": "src/app/page.tsx:111:18",
                                                        "data-orchids-name": "img",
                                                        src: "https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai",
                                                        className: "w-5 h-5 rounded-sm",
                                                        alt: "Comet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/page.tsx:112:18",
                                                        "data-orchids-name": "span",
                                                        className: "text-sm font-semibold",
                                                        children: "Comet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:114:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        "data-orchids-id": "src/app/page.tsx:115:18",
                                                        "data-orchids-name": "img",
                                                        src: "https://www.google.com/s2/favicons?sz=64&domain=openai.com",
                                                        className: "w-5 h-5 rounded-sm",
                                                        alt: "Atlas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/page.tsx:116:18",
                                                        "data-orchids-name": "span",
                                                        className: "text-sm font-semibold",
                                                        children: "Atlas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:118:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        "data-orchids-id": "src/app/page.tsx:119:18",
                                                        "data-orchids-name": "img",
                                                        src: "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
                                                        className: "w-5 h-5 rounded-sm",
                                                        alt: "Claude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/page.tsx:120:18",
                                                        "data-orchids-name": "span",
                                                        className: "text-sm font-semibold",
                                                        children: "Claude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/page.tsx:123:16",
                                        "data-orchids-name": "div",
                                        className: "flex flex-col sm:flex-row gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/app/page.tsx:124:18",
                                                "data-orchids-name": "Button",
                                                size: "lg",
                                                className: "bg-primary text-background hover:bg-primary/90 rounded-none px-8",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "data-orchids-id": "src/app/page.tsx:129:20",
                                                    "data-orchids-name": "a",
                                                    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Book a demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/app/page.tsx:133:18",
                                                "data-orchids-name": "Button",
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "data-orchids-id": "src/app/page.tsx:139:20",
                                                    "data-orchids-name": "a",
                                                    href: "https://chromewebstore.google.com/detail/contextfort/jkocglijncodiiljpdnoiegfcgeadllg",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Try chrome extension"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/app/page.tsx:143:18",
                                                "data-orchids-name": "Button",
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "data-orchids-id": "src/app/page.tsx:149:20",
                                                    "data-orchids-name": "a",
                                                    href: "https://github.com/ContextFort-AI/ContextFort",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                            "data-orchids-id": "src/app/page.tsx:150:22",
                                                            "data-orchids-name": "Github",
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 23
                                                        }, this),
                                                        "View github repo"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src/app/page.tsx:159:12",
                                "data-orchids-name": "motion.div",
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 1,
                                    delay: 0.2
                                },
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/page.tsx:165:14",
                                    "data-orchids-name": "div",
                                    className: "relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        "data-orchids-id": "src/app/page.tsx:166:16",
                                        "data-orchids-name": "iframe",
                                        src: "https://www.youtube.com/embed/1YtEGVZKMeo?autoplay=1&mute=0&loop=1&playlist=1YtEGVZKMeo&controls=1&modestbranding=1&rel=0",
                                        allow: "autoplay; encrypted-media",
                                        allowFullScreen: true,
                                        className: "absolute inset-0 h-full w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/app/page.tsx:179:6",
                "data-orchids-name": "section",
                id: "how-it-works",
                className: "py-24 border-t border-white/5 bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:180:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:181:10",
                            "data-orchids-name": "div",
                            className: "text-center mb-16",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src/app/page.tsx:182:12",
                                "data-orchids-name": "h2",
                                className: "text-4xl font-bold mb-4",
                                children: "How it works"
                            }, void 0, false, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:186:10",
                            "data-orchids-name": "div",
                            className: "mb-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src/app/page.tsx:187:12",
                                    "data-orchids-name": "h2",
                                    className: "text-3xl font-bold mb-8 text-center",
                                    children: "ContextFort provides security teams with Visibility into agent sessions"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    "data-orchids-id": "src/app/page.tsx:188:12",
                                    "data-orchids-name": "ul",
                                    className: "text-lg text-muted-foreground mb-12 max-w-3xl mx-auto space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            "data-orchids-id": "src/app/page.tsx:189:14",
                                            "data-orchids-name": "li",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    "data-orchids-id": "src/app/page.tsx:190:16",
                                                    "data-orchids-name": "CheckCircle2",
                                                    className: "w-6 h-6 text-primary flex-shrink-0 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/page.tsx:191:16",
                                                    "data-orchids-name": "span",
                                                    children: "When control is handed over"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            "data-orchids-id": "src/app/page.tsx:193:14",
                                            "data-orchids-name": "li",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    "data-orchids-id": "src/app/page.tsx:194:16",
                                                    "data-orchids-name": "CheckCircle2",
                                                    className: "w-6 h-6 text-primary flex-shrink-0 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/page.tsx:195:16",
                                                    "data-orchids-name": "span",
                                                    children: "Which pages the agent visits during a session"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            "data-orchids-id": "src/app/page.tsx:197:14",
                                            "data-orchids-name": "li",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    "data-orchids-id": "src/app/page.tsx:198:16",
                                                    "data-orchids-name": "CheckCircle2",
                                                    className: "w-6 h-6 text-primary flex-shrink-0 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/page.tsx:199:16",
                                                    "data-orchids-name": "span",
                                                    children: "What it does on each page (what was clicked and where text was input)"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/page.tsx:202:12",
                                    "data-orchids-name": "div",
                                    className: "max-w-4xl mx-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        "data-orchids-id": "src/app/page.tsx:203:14",
                                        "data-orchids-name": "img",
                                        src: "/visibility-demo.gif",
                                        alt: "Visibility Demo",
                                        className: "w-full rounded-lg border border-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:208:10",
                            "data-orchids-name": "div",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src/app/page.tsx:209:12",
                                    "data-orchids-name": "h2",
                                    className: "text-3xl font-bold mb-8 text-center",
                                    children: "ContextFort also offers Controls for security teams to act on based on what the visibility layer captures"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    "data-orchids-id": "src/app/page.tsx:210:12",
                                    "data-orchids-name": "ul",
                                    className: "text-lg text-muted-foreground mb-12 max-w-3xl mx-auto space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            "data-orchids-id": "src/app/page.tsx:211:14",
                                            "data-orchids-name": "li",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    "data-orchids-id": "src/app/page.tsx:212:16",
                                                    "data-orchids-name": "CheckCircle2",
                                                    className: "w-6 h-6 text-primary flex-shrink-0 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/page.tsx:213:16",
                                                    "data-orchids-name": "span",
                                                    children: 'Block specific actions on specific pages (e.g., prevent the agent from clicking "Submit" on email)'
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            "data-orchids-id": "src/app/page.tsx:215:14",
                                            "data-orchids-name": "li",
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    "data-orchids-id": "src/app/page.tsx:216:16",
                                                    "data-orchids-name": "CheckCircle2",
                                                    className: "w-6 h-6 text-primary flex-shrink-0 mt-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/app/page.tsx:217:16",
                                                    "data-orchids-name": "span",
                                                    children: "Block risky cross-site flows in a single session (e.g., block navigation to Atlassian after interacting with StackOverflow), or apply a stricter policy and block bringing any external context to Atlassian entirely"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/page.tsx:220:12",
                                    "data-orchids-name": "div",
                                    className: "grid md:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            "data-orchids-id": "src/app/page.tsx:221:14",
                                            "data-orchids-name": "img",
                                            src: "/first.gif",
                                            alt: "Controls Demo 1",
                                            className: "w-full rounded-lg border border-white/10"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            "data-orchids-id": "src/app/page.tsx:222:14",
                                            "data-orchids-name": "img",
                                            src: "/second.gif",
                                            alt: "Controls Demo 2",
                                            className: "w-full rounded-lg border border-white/10"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/app/page.tsx:229:6",
                "data-orchids-name": "section",
                id: "enterprise",
                className: "py-24 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:230:8",
                        "data-orchids-name": "div",
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:231:8",
                        "data-orchids-name": "div",
                        className: "container mx-auto px-6 relative z-10 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:232:10",
                            "data-orchids-name": "div",
                            className: "max-w-3xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/app/page.tsx:233:12",
                                    "data-orchids-name": "p",
                                    className: "text-xl text-muted-foreground mb-10 max-w-2xl mx-auto",
                                    children: "If you need cloud/self-hosted management for an enterprise deployment, contact us."
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:236:12",
                                    "data-orchids-name": "Button",
                                    size: "lg",
                                    className: "bg-primary text-background hover:bg-primary/90 h-12 rounded-none px-8 font-bold",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:241:14",
                                        "data-orchids-name": "a",
                                        href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Book Demo"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                "data-orchids-id": "src/app/page.tsx:250:6",
                "data-orchids-name": "footer",
                className: "py-12 border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:251:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:252:10",
                        "data-orchids-name": "div",
                        className: "flex flex-col md:flex-row justify-between items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/page.tsx:253:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/page.tsx:254:14",
                                        "data-orchids-name": "div",
                                        className: "w-6 h-6 bg-primary flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            "data-orchids-id": "src/app/page.tsx:255:16",
                                            "data-orchids-name": "Shield",
                                            className: "w-4 h-4 text-background"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/app/page.tsx:257:14",
                                        "data-orchids-name": "span",
                                        className: "text-lg font-bold tracking-tighter uppercase",
                                        children: "ContextFort"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/page.tsx:259:0",
                                "data-orchids-name": "div",
                                className: "flex gap-6 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:260:16",
                                        "data-orchids-name": "a",
                                        href: "https://x.com/ContextFort",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-primary transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                            "data-orchids-id": "src/app/page.tsx:261:18",
                                            "data-orchids-name": "Twitter",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 260,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:263:16",
                                        "data-orchids-name": "a",
                                        href: "https://www.linkedin.com/company/contextfort/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-primary transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            "data-orchids-id": "src/app/page.tsx:264:18",
                                            "data-orchids-name": "Linkedin",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 259,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/app/page.tsx:267:12",
                                "data-orchids-name": "p",
                                className: "text-xs text-muted-foreground",
                                children: "© 2026 Context Fort, Inc. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(LandingPage, "69y52uYb2Y8uumwiXOuKitWgelI=");
_c = LandingPage;
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=orchids-projects_contextfort-website_src_60d4dd4f._.js.map