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
"[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:7:4",
        "data-orchids-name": "div",
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:20:4",
        "data-orchids-name": "div",
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:33:4",
        "data-orchids-name": "div",
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:43:4",
        "data-orchids-name": "div",
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:53:4",
        "data-orchids-name": "div",
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:66:4",
        "data-orchids-name": "div",
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/card.tsx:76:4",
        "data-orchids-name": "div",
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/orchids-projects/contextfort-website/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input(param) {
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        "data-orchids-id": "src/components/ui/input.tsx:7:4",
        "data-orchids-name": "input",
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/orchids-projects/contextfort-website/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/badge.tsx:38:4",
        "data-orchids-name": "Comp",
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/orchids-projects/contextfort-website/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/orchids-projects/contextfort-website/src/components/ui/badge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
        "data-orchids-id": "src/app/page.tsx:54:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/page.tsx:56:6",
                "data-orchids-name": "div",
                className: "fixed inset-0 z-0 pointer-events-none opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    size: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "data-orchids-id": "src/app/page.tsx:60:6",
                "data-orchids-name": "nav",
                className: "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:61:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:62:10",
                            "data-orchids-name": "div",
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/page.tsx:63:12",
                                    "data-orchids-name": "div",
                                    className: "w-8 h-8 bg-primary flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        "data-orchids-id": "src/app/page.tsx:64:14",
                                        "data-orchids-name": "Shield",
                                        className: "w-5 h-5 text-background"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/app/page.tsx:66:12",
                                    "data-orchids-name": "span",
                                    className: "text-xl font-bold tracking-tighter",
                                    children: "CONTEXTFORT"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:68:10",
                            "data-orchids-name": "div",
                            className: "hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    "data-orchids-id": "src/app/page.tsx:69:12",
                                    "data-orchids-name": "a",
                                    href: "#how-it-works",
                                    className: "hover:text-primary transition-colors",
                                    children: "How it works"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    "data-orchids-id": "src/app/page.tsx:70:12",
                                    "data-orchids-name": "a",
                                    href: "#features",
                                    className: "hover:text-primary transition-colors",
                                    children: "Features"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:71:12",
                                    "data-orchids-name": "Button",
                                    variant: "ghost",
                                    className: "text-muted-foreground hover:text-primary",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:76:14",
                                        "data-orchids-name": "a",
                                        href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Book a demo"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:80:12",
                                    "data-orchids-name": "Button",
                                    variant: "ghost",
                                    className: "text-muted-foreground hover:text-primary",
                                    children: "Download extension"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/page.tsx:86:12",
                                    "data-orchids-name": "Button",
                                    variant: "ghost",
                                    className: "text-muted-foreground hover:text-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                            "data-orchids-id": "src/app/page.tsx:90:14",
                                            "data-orchids-name": "Github",
                                            className: "w-4 h-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        "Github"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/app/page.tsx:98:6",
                "data-orchids-name": "section",
                className: "relative pt-32 pb-20 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:99:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:100:10",
                        "data-orchids-name": "div",
                        className: "grid lg:grid-cols-2 gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src/app/page.tsx:101:12",
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
                                        "data-orchids-id": "src/app/page.tsx:106:14",
                                        "data-orchids-name": "div",
                                        className: "inline-flex items-center gap-3 px-4 py-2 mb-8 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-white/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:107:16",
                                                "data-orchids-name": "span",
                                                className: "text-sm font-semibold text-black tracking-tight",
                                                children: "Backed by"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:108:16",
                                                "data-orchids-name": "div",
                                                className: "w-6 h-6 bg-[#ff6600] flex items-center justify-center font-bold text-white text-xs",
                                                children: "Y"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:109:16",
                                                "data-orchids-name": "span",
                                                className: "text-sm font-semibold text-black tracking-tight",
                                                children: "Combinator"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src/app/page.tsx:111:14",
                                        "data-orchids-name": "h1",
                                        className: "text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight",
                                        children: [
                                            "Visibility & Controls ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:112:38",
                                                "data-orchids-name": "span",
                                                className: "text-primary italic",
                                                children: "for Browser Agents"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/app/page.tsx:114:14",
                                        "data-orchids-name": "p",
                                        className: "text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed",
                                        children: "Through a simple and powerful browser extension"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/page.tsx:117:14",
                                        "data-orchids-name": "div",
                                        className: "flex flex-wrap gap-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:118:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        "data-orchids-id": "src/app/page.tsx:119:18",
                                                        "data-orchids-name": "img",
                                                        src: "https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai",
                                                        className: "w-5 h-5 rounded-sm",
                                                        alt: "Comet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/page.tsx:120:18",
                                                        "data-orchids-name": "span",
                                                        className: "text-sm font-semibold",
                                                        children: "Comet"
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
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:122:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        "data-orchids-id": "src/app/page.tsx:123:18",
                                                        "data-orchids-name": "img",
                                                        src: "https://www.google.com/s2/favicons?sz=64&domain=openai.com",
                                                        className: "w-5 h-5 rounded-sm",
                                                        alt: "Atlas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/page.tsx:124:18",
                                                        "data-orchids-name": "span",
                                                        className: "text-sm font-semibold",
                                                        children: "Atlas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/page.tsx:126:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-colors cursor-default",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        "data-orchids-id": "src/app/page.tsx:127:18",
                                                        "data-orchids-name": "img",
                                                        src: "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
                                                        className: "w-5 h-5 rounded-sm",
                                                        alt: "Claude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/page.tsx:128:18",
                                                        "data-orchids-name": "span",
                                                        className: "text-sm font-semibold",
                                                        children: "Claude"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/page.tsx:131:14",
                                        "data-orchids-name": "div",
                                        className: "flex flex-col sm:flex-row gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/app/page.tsx:132:16",
                                                "data-orchids-name": "Button",
                                                size: "lg",
                                                className: "bg-primary text-background hover:bg-primary/90 rounded-none px-8",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    "data-orchids-id": "src/app/page.tsx:137:18",
                                                    "data-orchids-name": "a",
                                                    href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2-LisBxMgnCRJ-LKKb-R3pFbF841mGLD05pQdMbsBW-4MJvb0Jy2ksFKVYziMHfKcECrF9yIHt",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Book a demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/app/page.tsx:141:16",
                                                "data-orchids-name": "Button",
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground",
                                                children: "Download extension"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/app/page.tsx:148:16",
                                                "data-orchids-name": "Button",
                                                size: "lg",
                                                variant: "outline",
                                                className: "border-primary/50 hover:bg-primary/10 rounded-none px-8 text-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                                        "data-orchids-id": "src/app/page.tsx:153:18",
                                                        "data-orchids-name": "Github",
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this),
                                                    "View github repo"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                "data-orchids-id": "src/app/page.tsx:161:12",
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
                                    "data-orchids-id": "src/app/page.tsx:168:14",
                                    "data-orchids-name": "div",
                                    className: "aspect-square relative flex items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:169:16",
                                            "data-orchids-name": "div",
                                            className: "absolute inset-0 bg-primary/5 rounded-full animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:170:16",
                                            "data-orchids-name": "div",
                                            className: "absolute inset-4 border border-white/5 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:171:16",
                                            "data-orchids-name": "div",
                                            className: "absolute inset-12 border border-white/5 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:172:16",
                                            "data-orchids-name": "div",
                                            className: "absolute inset-24 border border-primary/10 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            "data-orchids-id": "src/app/page.tsx:175:16",
                                            "data-orchids-name": "motion.div",
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "absolute inset-0 z-10 origin-center",
                                            style: {
                                                background: 'conic-gradient(from 0deg, transparent 0deg, oklch(0.7 0.2 150 / 0.2) 360deg)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:182:16",
                                            "data-orchids-name": "div",
                                            className: "relative z-20 w-full max-w-md",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                "data-orchids-id": "src/app/page.tsx:183:18",
                                                "data-orchids-name": "Card",
                                                className: "bg-black/40 backdrop-blur-xl border-white/10 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/app/page.tsx:184:20",
                                                        "data-orchids-name": "div",
                                                        className: "p-4 border-b border-white/10 flex items-center justify-between bg-white/5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/app/page.tsx:185:22",
                                                                "data-orchids-name": "div",
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                                                        "data-orchids-id": "src/app/page.tsx:186:24",
                                                                        "data-orchids-name": "Terminal",
                                                                        className: "w-4 h-4 text-primary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        "data-orchids-id": "src/app/page.tsx:187:24",
                                                                        "data-orchids-name": "span",
                                                                        className: "text-xs font-mono font-bold tracking-widest",
                                                                        children: "REALTIME_DETECTION_FEED"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                        lineNumber: 187,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                lineNumber: 185,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                "data-orchids-id": "src/app/page.tsx:189:22",
                                                                "data-orchids-name": "div",
                                                                className: "flex gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src/app/page.tsx:190:24",
                                                                        "data-orchids-name": "div",
                                                                        className: "w-2 h-2 rounded-full bg-red-500/50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src/app/page.tsx:191:24",
                                                                        "data-orchids-name": "div",
                                                                        className: "w-2 h-2 rounded-full bg-yellow-500/50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                        lineNumber: 191,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        "data-orchids-id": "src/app/page.tsx:192:24",
                                                                        "data-orchids-name": "div",
                                                                        className: "w-2 h-2 rounded-full bg-green-500/50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/app/page.tsx:195:20",
                                                        "data-orchids-name": "div",
                                                        className: "p-4 font-mono text-[10px] space-y-3 min-h-[240px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                            "data-orchids-id": "src/app/page.tsx:196:22",
                                                            "data-orchids-name": "AnimatePresence",
                                                            initial: false,
                                                            children: activeLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    "data-orchids-id": "src/app/page.tsx:198:26@activeLogs",
                                                                    "data-orchids-name": "motion.div",
                                                                    initial: {
                                                                        opacity: 0,
                                                                        y: -10
                                                                    },
                                                                    animate: {
                                                                        opacity: 1,
                                                                        y: 0
                                                                    },
                                                                    exit: {
                                                                        opacity: 0,
                                                                        scale: 0.95
                                                                    },
                                                                    className: "flex items-center justify-between border-l-2 border-primary/20 pl-3 py-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            "data-orchids-id": "src/app/page.tsx:205:28@activeLogs",
                                                                            "data-orchids-name": "div",
                                                                            className: "flex flex-col",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    "data-orchids-id": "src/app/page.tsx:206:30@activeLogs",
                                                                                    "data-orchids-name": "span",
                                                                                    className: "text-muted-foreground",
                                                                                    children: [
                                                                                        "[",
                                                                                        log.timestamp,
                                                                                        "]"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                    lineNumber: 206,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    "data-orchids-id": "src/app/page.tsx:207:30@activeLogs",
                                                                                    "data-orchids-name": "div",
                                                                                    className: "flex items-center gap-2",
                                                                                    children: [
                                                                                        log.type === "AGENT" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                                                            "data-orchids-id": "src/app/page.tsx:208:56@activeLogs",
                                                                                            "data-orchids-name": "Bot",
                                                                                            className: "w-3 h-3 text-red-400"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                            lineNumber: 208,
                                                                                            columnNumber: 57
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                            "data-orchids-id": "src/app/page.tsx:208:99@activeLogs",
                                                                                            "data-orchids-name": "User",
                                                                                            className: "w-3 h-3 text-blue-400"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                            lineNumber: 208,
                                                                                            columnNumber: 177
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            "data-orchids-id": "src/app/page.tsx:209:32@activeLogs",
                                                                                            "data-orchids-name": "span",
                                                                                            className: log.type === "AGENT" ? "text-red-400 font-bold" : "text-blue-400",
                                                                                            children: log.type
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                            lineNumber: 209,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            "data-orchids-id": "src/app/page.tsx:212:32@activeLogs",
                                                                                            "data-orchids-name": "span",
                                                                                            className: "text-white",
                                                                                            children: log.action
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                            lineNumber: 212,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                    lineNumber: 207,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                            lineNumber: 205,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            "data-orchids-id": "src/app/page.tsx:215:28@activeLogs",
                                                                            "data-orchids-name": "div",
                                                                            className: "text-right",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    "data-orchids-id": "src/app/page.tsx:216:30@activeLogs",
                                                                                    "data-orchids-name": "span",
                                                                                    className: "block text-muted-foreground uppercase",
                                                                                    children: "Confidence"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                    lineNumber: 216,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    "data-orchids-id": "src/app/page.tsx:217:30@activeLogs",
                                                                                    "data-orchids-name": "span",
                                                                                    className: "text-primary",
                                                                                    children: [
                                                                                        log.confidence,
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                                    lineNumber: 217,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, log.id, true, {
                                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/app/page.tsx:232:6",
                "data-orchids-name": "section",
                id: "how-it-works",
                className: "py-24 border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:233:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:234:10",
                            "data-orchids-name": "div",
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src/app/page.tsx:235:12",
                                    "data-orchids-name": "h2",
                                    className: "text-3xl font-bold mb-4",
                                    children: "How it works"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src/app/page.tsx:236:12",
                                    "data-orchids-name": "p",
                                    className: "text-muted-foreground max-w-2xl mx-auto",
                                    children: "We analyze interaction behavior to separate AI agents from humans"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:241:10",
                            "data-orchids-name": "div",
                            className: "grid md:grid-cols-3 gap-8",
                            children: [
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                        "data-orchids-id": "src/app/page.tsx:244:22",
                                        "data-orchids-name": "Activity",
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 23
                                    }, this),
                                    title: "Event Micro-analysis",
                                    desc: "Tracking millisecond precision in DOM interactions and event dispatch sequences."
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        "data-orchids-id": "src/app/page.tsx:249:22",
                                        "data-orchids-name": "Layers",
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 23
                                    }, this),
                                    title: "Agent Signature Bank",
                                    desc: "Heuristic matching against known agent frameworks like Playwright, Puppeteer, and Selenium."
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                        "data-orchids-id": "src/app/page.tsx:254:22",
                                        "data-orchids-name": "Cpu",
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 23
                                    }, this),
                                    title: "Behavioral Prediction",
                                    desc: "Using lightweight on-device ML to predict if the next sequence of events matches 'agent intent'."
                                }
                            ].map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    "data-orchids-id": "src/app/page.tsx:259:14",
                                    "data-orchids-name": "Card",
                                    className: "bg-white/5 border-white/10 p-8 hover:border-primary/50 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:260:16",
                                            "data-orchids-name": "div",
                                            className: "w-12 h-12 bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-background transition-colors",
                                            children: feature.icon
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            "data-orchids-id": "src/app/page.tsx:263:16",
                                            "data-orchids-name": "h3",
                                            className: "text-xl font-bold mb-3",
                                            children: feature.title
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            "data-orchids-id": "src/app/page.tsx:264:16",
                                            "data-orchids-name": "p",
                                            className: "text-sm text-muted-foreground leading-relaxed",
                                            children: feature.desc
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/app/page.tsx:272:6",
                "data-orchids-name": "section",
                id: "features",
                className: "py-24 bg-white/[0.02]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:273:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:274:10",
                        "data-orchids-name": "div",
                        className: "grid lg:grid-cols-2 gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/page.tsx:275:12",
                                "data-orchids-name": "div",
                                className: "order-2 lg:order-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/page.tsx:276:14",
                                    "data-orchids-name": "div",
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:277:16",
                                            "data-orchids-name": "div",
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/page.tsx:278:18",
                                                    "data-orchids-name": "div",
                                                    className: "bg-primary/5 border border-primary/20 p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            "data-orchids-id": "src/app/page.tsx:279:20",
                                                            "data-orchids-name": "Eye",
                                                            className: "w-8 h-8 text-primary mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            "data-orchids-id": "src/app/page.tsx:280:20",
                                                            "data-orchids-name": "h4",
                                                            className: "font-bold mb-2",
                                                            children: "AI Agent Tracking"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            "data-orchids-id": "src/app/page.tsx:281:20",
                                                            "data-orchids-name": "p",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Monitor every click, scroll, and navigation event dispatched by AI agents in real-time."
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 281,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/page.tsx:283:18",
                                                    "data-orchids-name": "div",
                                                    className: "bg-white/5 border border-white/10 p-6 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            "data-orchids-id": "src/app/page.tsx:284:20",
                                                            "data-orchids-name": "Lock",
                                                            className: "w-8 h-8 text-primary mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            "data-orchids-id": "src/app/page.tsx:285:20",
                                                            "data-orchids-name": "h4",
                                                            className: "font-bold mb-2",
                                                            children: "Context Verification"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            "data-orchids-id": "src/app/page.tsx:286:20",
                                                            "data-orchids-name": "p",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Detect and prevent mixing of sensitive context when agents navigate across multiple pages."
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/page.tsx:289:16",
                                            "data-orchids-name": "div",
                                            className: "space-y-4 pt-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/page.tsx:290:18",
                                                    "data-orchids-name": "div",
                                                    className: "bg-white/5 border border-white/10 p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            "data-orchids-id": "src/app/page.tsx:291:20",
                                                            "data-orchids-name": "Zap",
                                                            className: "w-8 h-8 text-primary mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            "data-orchids-id": "src/app/page.tsx:292:20",
                                                            "data-orchids-name": "h4",
                                                            className: "font-bold mb-2",
                                                            children: "Behavioral Analysis"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            "data-orchids-id": "src/app/page.tsx:293:20",
                                                            "data-orchids-name": "p",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Identify interaction patterns that distinguish generative agents from human behavior."
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/page.tsx:295:18",
                                                    "data-orchids-name": "div",
                                                    className: "bg-primary/5 border border-primary/20 p-6 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            "data-orchids-id": "src/app/page.tsx:296:20",
                                                            "data-orchids-name": "Globe",
                                                            className: "w-8 h-8 text-primary mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            "data-orchids-id": "src/app/page.tsx:297:20",
                                                            "data-orchids-name": "h4",
                                                            className: "font-bold mb-2",
                                                            children: "Granular Control"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            "data-orchids-id": "src/app/page.tsx:298:20",
                                                            "data-orchids-name": "p",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Block specific AI-driven actions while maintaining a seamless experience for real users."
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/page.tsx:303:12",
                                "data-orchids-name": "div",
                                className: "order-1 lg:order-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        "data-orchids-id": "src/app/page.tsx:304:14",
                                        "data-orchids-name": "Badge",
                                        className: "bg-primary text-background mb-4",
                                        children: "CAPABILITIES"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src/app/page.tsx:305:14",
                                        "data-orchids-name": "h2",
                                        className: "text-4xl font-bold mb-6 leading-tight",
                                        children: [
                                            "Visibility & Controls ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/app/page.tsx:305:90",
                                                "data-orchids-name": "span",
                                                className: "text-primary italic",
                                                children: "for Browser Agents"
                                            }, void 0, false, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 156
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        "data-orchids-id": "src/app/page.tsx:306:14",
                                        "data-orchids-name": "ul",
                                        className: "space-y-4",
                                        children: [
                                            "Track AI agent events such as clicks, navigation etc.",
                                            "Detect cross-page context mixing",
                                            "Identify non-human browser behavior",
                                            "Session-level visibility into AI activity",
                                            "Block specific AI-driven actions"
                                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                "data-orchids-id": "src/app/page.tsx:314:18",
                                                "data-orchids-name": "li",
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        "data-orchids-id": "src/app/page.tsx:315:20",
                                                        "data-orchids-name": "div",
                                                        className: "w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            "data-orchids-id": "src/app/page.tsx:316:22",
                                                            "data-orchids-name": "CheckCircle2",
                                                            className: "w-3 h-3 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/app/page.tsx:318:20",
                                                        "data-orchids-name": "span",
                                                        className: "text-muted-foreground text-sm",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/app/page.tsx:328:6",
                "data-orchids-name": "section",
                id: "waitlist",
                className: "py-24 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:329:8",
                        "data-orchids-name": "div",
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:330:8",
                        "data-orchids-name": "div",
                        className: "container mx-auto px-6 relative z-10 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/page.tsx:331:10",
                            "data-orchids-name": "div",
                            className: "max-w-3xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    "data-orchids-id": "src/app/page.tsx:332:12",
                                    "data-orchids-name": "h2",
                                    className: "text-4xl md:text-5xl font-bold mb-10",
                                    children: "Want to deploy them across your enterprise or want to add more specific controls tailored for your enterprise?"
                                }, void 0, false, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/page.tsx:333:12",
                                    "data-orchids-name": "div",
                                    className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            "data-orchids-id": "src/app/page.tsx:334:14",
                                            "data-orchids-name": "Input",
                                            placeholder: "Enter your work email",
                                            className: "bg-white/5 border-white/10 h-12 rounded-none focus-visible:ring-primary",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            "data-orchids-id": "src/app/page.tsx:340:14",
                                            "data-orchids-name": "Button",
                                            size: "lg",
                                            className: "bg-primary text-background hover:bg-primary/90 h-12 rounded-none px-8 font-bold",
                                            children: "Join Waitlist"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                "data-orchids-id": "src/app/page.tsx:349:6",
                "data-orchids-name": "footer",
                className: "py-12 border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/app/page.tsx:350:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/page.tsx:351:10",
                        "data-orchids-name": "div",
                        className: "flex flex-col md:flex-row justify-between items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/page.tsx:352:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/page.tsx:353:14",
                                        "data-orchids-name": "div",
                                        className: "w-6 h-6 bg-primary flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            "data-orchids-id": "src/app/page.tsx:354:16",
                                            "data-orchids-name": "Shield",
                                            className: "w-4 h-4 text-background"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 354,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/app/page.tsx:356:14",
                                        "data-orchids-name": "span",
                                        className: "text-lg font-bold tracking-tighter uppercase",
                                        children: "ContextFort"
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/page.tsx:358:0",
                                "data-orchids-name": "div",
                                className: "flex gap-6 text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:359:16",
                                        "data-orchids-name": "a",
                                        href: "https://x.com/ContextFort",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-primary transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                            "data-orchids-id": "src/app/page.tsx:360:18",
                                            "data-orchids-name": "Twitter",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        "data-orchids-id": "src/app/page.tsx:362:16",
                                        "data-orchids-name": "a",
                                        href: "https://www.linkedin.com/company/contextfort/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "hover:text-primary transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            "data-orchids-id": "src/app/page.tsx:363:18",
                                            "data-orchids-name": "Linkedin",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 358,
                                columnNumber: 1
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$orchids$2d$projects$2f$contextfort$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/app/page.tsx:366:12",
                                "data-orchids-name": "p",
                                className: "text-xs text-muted-foreground",
                                children: "© 2026 Context Fort, Inc. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/orchids-projects/contextfort-website/src/app/page.tsx",
        lineNumber: 54,
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

//# sourceMappingURL=orchids-projects_contextfort-website_src_74fdd514._.js.map