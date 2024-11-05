import './polyfills.server.mjs';
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  APP_INITIALIZER,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ConnectableObservable,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  DomSanitizer,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Host,
  HostBinding,
  HttpClient,
  HttpHeaders,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  LOCALE_ID,
  Location,
  NgForOf,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  RouterModule,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  Version,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  afterNextRender,
  afterRender,
  animate,
  animateChild,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  bootstrapApplication,
  combineLatest,
  computed,
  concat,
  debounceTime,
  defer,
  distinctUntilChanged,
  filter,
  forkJoin,
  forwardRef,
  from,
  fromEvent,
  getDOM,
  group,
  inject,
  isObservable,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  makeEnvironmentProviders,
  map,
  merge,
  mergeApplicationConfig,
  of,
  pairwise,
  provideClientHydration,
  provideHttpClient,
  provideRouter,
  provideServerRendering,
  provideZoneChangeDetection,
  query,
  setClassMetadata,
  shareReplay,
  signal,
  skip,
  startWith,
  state,
  style,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  tap,
  transition,
  trigger,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3ZCUASIX.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PTRYWQQD.mjs";

// node_modules/@fortawesome/free-solid-svg-icons/index.mjs
var faPerson = {
  prefix: "fas",
  iconName: "person",
  icon: [320, 512, [129485, "male"], "f183", "M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z"]
};
var faPeopleGroup = {
  prefix: "fas",
  iconName: "people-group",
  icon: [640, 512, [], "e533", "M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"]
};
var faTrash = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
};
var faEnvelope = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
};

// src/app/models/customer-email.ts
var CustomerEmail = class {
  customerName = "";
  customerId = "";
  message = "";
  emailId = "";
  isDraft = false;
  createdDate = /* @__PURE__ */ new Date();
  lastUpdatedDate = /* @__PURE__ */ new Date();
  constructor(customerName, customerId, message, emailId, isDraft, createdDate, lastUpdatedDate) {
    this.customerName = customerName;
    this.customerId = customerId;
    this.message = message;
    this.emailId = emailId;
    this.isDraft = isDraft;
    this.createdDate = createdDate;
    this.lastUpdatedDate = lastUpdatedDate;
  }
};

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceCssPixelValue(value) {
  if (value == null) {
    return "";
  }
  return typeof value === "string" ? value : `${value}px`;
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
  static {
    this.\u0275fac = function Platform_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Platform)(\u0275\u0275inject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Platform,
      factory: _Platform.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var PlatformModule = class _PlatformModule {
  static {
    this.\u0275fac = function PlatformModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlatformModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _PlatformModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var rtlScrollAxisType;
var scrollBehaviorSupported;
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.\u0275fac = function Directionality_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Directionality)(\u0275\u0275inject(DIR_DOCUMENT, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Directionality,
      factory: _Directionality.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
  static {
    this.\u0275fac = function Dir_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Dir)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: Directionality,
        useExisting: _Dir
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var BidiModule = class _BidiModule {
  static {
    this.\u0275fac = function BidiModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BidiModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BidiModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/collections.mjs
var DataSource = class {
};
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var ArrayDataSource = class extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }
  connect() {
    return isObservable(this._data) ? this._data : of(this._data);
  }
  disconnect() {
  }
};
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
var _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
var _DisposeViewRepeaterStrategy = class {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = _ViewRepeaterOperation.INSERTED;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
  }
};
var _RecycleViewRepeaterStrategy = class {
  constructor() {
    this.viewCacheSize = 20;
    this._viewCache = [];
  }
  /** Apply changes to the DOM. */
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;
      if (record.previousIndex == null) {
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
      } else if (currentIndex == null) {
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
        operation = _ViewRepeaterOperation.REMOVED;
      } else {
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = _ViewRepeaterOperation.MOVED;
      }
      if (itemViewChanged) {
        itemViewChanged({
          context: view?.context,
          operation,
          record
        });
      }
    });
  }
  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }
    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */
  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
    if (cachedView) {
      cachedView.context.$implicit = value;
      return void 0;
    }
    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */
  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);
    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */
  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */
  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view);
      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */
  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();
    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }
    return cachedView || null;
  }
};
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */
  notify(id, name) {
    for (let listener2 of this._listeners) {
      listener2(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */
  listen(listener2) {
    this._listeners.push(listener2);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener2 !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static {
    this.\u0275fac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UniqueSelectionDispatcher,
      factory: _UniqueSelectionDispatcher.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
var _c0 = ["contentWrapper"];
var _c1 = ["*"];
var VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
var FixedSizeVirtualScrollStrategy = class {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new Subject();
    this.scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */
  attach(viewport) {
    this._viewport = viewport;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */
  detach() {
    this._scrolledIndexChange.complete();
    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
    }
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onDataLengthChanged() {
    this._updateTotalContentSize();
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onContentRendered() {
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */
  onRenderedOffsetChanged() {
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */
  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */
  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }
    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */
  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }
    const renderedRange = this._viewport.getRenderedRange();
    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };
    const viewportSize = this._viewport.getViewportSize();
    const dataLength = this._viewport.getDataLength();
    let scrollOffset = this._viewport.measureScrollOffset();
    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
    if (newRange.end > dataLength) {
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }
      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }
    const startBuffer = scrollOffset - newRange.start * this._itemSize;
    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }
    this._viewport.setRenderedRange(newRange);
    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }
};
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
var CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(value) {
    this._itemSize = coerceNumberProperty(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */
  get minBufferPx() {
    return this._minBufferPx;
  }
  set minBufferPx(value) {
    this._minBufferPx = coerceNumberProperty(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */
  get maxBufferPx() {
    return this._maxBufferPx;
  }
  set maxBufferPx(value) {
    this._maxBufferPx = coerceNumberProperty(value);
  }
  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  static {
    this.\u0275fac = function CdkFixedSizeVirtualScroll_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkFixedSizeVirtualScroll)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
      }]), \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFixedSizeVirtualScroll, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[itemSize]",
      standalone: true,
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: Input
    }],
    minBufferPx: [{
      type: Input
    }],
    maxBufferPx: [{
      type: Input
    }]
  });
})();
var DEFAULT_SCROLL_TIME = 20;
var ScrollDispatcher = class _ScrollDispatcher {
  constructor(_ngZone, _platform, document2) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._scrolled = new Subject();
    this._globalSubscription = null;
    this._scrolledCount = 0;
    this.scrollContainers = /* @__PURE__ */ new Map();
    this._document = document2;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */
  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */
  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);
    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */
  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return of();
    }
    return new Observable((observer) => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      }
      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;
        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }
  ngOnDestroy() {
    this._removeGlobalListener();
    this.scrollContainers.forEach((_, container) => this.deregister(container));
    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */
  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe(filter((target) => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */
  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */
  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = coerceElement(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement;
    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);
    return false;
  }
  /** Sets up the global scroll listeners. */
  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window2 = this._getWindow();
      return fromEvent(window2.document, "scroll").subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */
  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();
      this._globalSubscription = null;
    }
  }
  static {
    this.\u0275fac = function ScrollDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollDispatcher)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Platform), \u0275\u0275inject(DOCUMENT, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ScrollDispatcher,
      factory: _ScrollDispatcher.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CdkScrollable = class _CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new Subject();
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(this.elementRef.nativeElement, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  ngOnInit() {
    this.scrollDispatcher.register(this);
  }
  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */
  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */
  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */
  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == "rtl";
    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }
    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    }
    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    }
    if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }
      if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
        options.left = options.right;
      } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }
    this._applyScrollToOptions(options);
  }
  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;
    if (supportsScrollBehavior()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }
      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */
  measureScrollOffset(from2) {
    const LEFT = "left";
    const RIGHT = "right";
    const el = this.elementRef.nativeElement;
    if (from2 == "top") {
      return el.scrollTop;
    }
    if (from2 == "bottom") {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    }
    const isRtl = this.dir && this.dir.value == "rtl";
    if (from2 == "start") {
      from2 = isRtl ? RIGHT : LEFT;
    } else if (from2 == "end") {
      from2 = isRtl ? LEFT : RIGHT;
    }
    if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
      if (from2 == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
      if (from2 == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      if (from2 == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }
  static {
    this.\u0275fac = function CdkScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkScrollable)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollable, [{
    type: Directive,
    args: [{
      selector: "[cdk-scrollable], [cdkScrollable]",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var DEFAULT_RESIZE_TIME = 20;
var ViewportRuler = class _ViewportRuler {
  constructor(_platform, ngZone, document2) {
    this._platform = _platform;
    this._change = new Subject();
    this._changeListener = (event) => {
      this._change.next(event);
    };
    this._document = document2;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window2 = this._getWindow();
        window2.addEventListener("resize", this._changeListener);
        window2.addEventListener("orientationchange", this._changeListener);
      }
      this.change().subscribe(() => this._viewportSize = null);
    });
  }
  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window2 = this._getWindow();
      window2.removeEventListener("resize", this._changeListener);
      window2.removeEventListener("orientationchange", this._changeListener);
    }
    this._change.complete();
  }
  /** Returns the viewport's width and height. */
  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }
    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    };
    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }
    return output;
  }
  /** Gets a DOMRect for the viewport's bounds. */
  getViewportRect() {
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */
  getViewportScrollPosition() {
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    }
    const document2 = this._document;
    const window2 = this._getWindow();
    const documentElement = document2.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */
  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */
  _updateViewportSize() {
    const window2 = this._getWindow();
    this._viewportSize = this._platform.isBrowser ? {
      width: window2.innerWidth,
      height: window2.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }
  static {
    this.\u0275fac = function ViewportRuler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ViewportRuler)(\u0275\u0275inject(Platform), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ViewportRuler,
      factory: _ViewportRuler.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewportRuler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
var CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  /**
   * Measure the viewport size for the provided orientation.
   *
   * @param orientation The orientation to measure the size from.
   */
  measureViewportSize(orientation) {
    const viewportEl = this.elementRef.nativeElement;
    return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  static {
    this.\u0275fac = function CdkVirtualScrollable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollable)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkVirtualScrollable,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollable, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
var CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
  /** The direction the viewport scrolls. */
  get orientation() {
    return this._orientation;
  }
  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;
      this._calculateSpacerSize();
    }
  }
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler, scrollable) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    this.scrollable = scrollable;
    this._platform = inject(Platform);
    this._detachedSubject = new Subject();
    this._renderedRangeSubject = new Subject();
    this._orientation = "vertical";
    this.appendOnly = false;
    this.scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    this.renderedRangeStream = this._renderedRangeSubject;
    this._totalContentSize = 0;
    this._totalContentWidth = "";
    this._totalContentHeight = "";
    this._renderedRange = {
      start: 0,
      end: 0
    };
    this._dataLength = 0;
    this._viewportSize = 0;
    this._renderedContentOffset = 0;
    this._renderedContentOffsetNeedsRewrite = false;
    this._isChangeDetectionPending = false;
    this._runAfterChangeDetection = [];
    this._viewportChanges = Subscription.EMPTY;
    this._injector = inject(Injector);
    this._isDestroyed = false;
    if (!_scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }
    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
    if (!this.scrollable) {
      this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
      this.scrollable = this;
    }
  }
  ngOnInit() {
    if (!this._platform.isBrowser) {
      return;
    }
    if (this.scrollable === this) {
      super.ngOnInit();
    }
    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();
      this._scrollStrategy.attach(this);
      this.scrollable.elementScrolled().pipe(
        // Start off with a fake scroll event so we properly detect our initial position.
        startWith(null),
        // Collect multiple events into one until the next animation frame. This way if
        // there are multiple scroll events in the same frame we only need to recheck
        // our layout once.
        auditTime(0, SCROLL_SCHEDULER),
        // Usually `elementScrolled` is completed when the scrollable is destroyed, but
        // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
        // to unsubscribe here just in case.
        takeUntil(this._destroyed)
      ).subscribe(() => this._scrollStrategy.onContentScrolled());
      this._markChangeDetectionNeeded();
    }));
  }
  ngOnDestroy() {
    this.detach();
    this._scrollStrategy.detach();
    this._renderedRangeSubject.complete();
    this._detachedSubject.complete();
    this._viewportChanges.unsubscribe();
    this._isDestroyed = true;
    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("CdkVirtualScrollViewport is already attached.");
    }
    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;
      this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
        const newLength = data.length;
        if (newLength !== this._dataLength) {
          this._dataLength = newLength;
          this._scrollStrategy.onDataLengthChanged();
        }
        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */
  detach() {
    this._forOf = null;
    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */
  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */
  getViewportSize() {
    return this._viewportSize;
  }
  // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
  /** Get the current rendered range of items. */
  getRenderedRange() {
    return this._renderedRange;
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */
  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;
      this._calculateSpacerSize();
      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */
  setRenderedRange(range2) {
    if (!rangesEqual(this._renderedRange, range2)) {
      if (this.appendOnly) {
        range2 = {
          start: 0,
          end: Math.max(this._renderedRange.end, range2.end)
        };
      }
      this._renderedRangeSubject.next(this._renderedRange = range2);
      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */
  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */
  setRenderedContentOffset(offset, to = "to-start") {
    offset = this.appendOnly && to === "to-start" ? 0 : offset;
    const isRtl = this.dir && this.dir.value == "rtl";
    const isHorizontal = this.orientation == "horizontal";
    const axis = isHorizontal ? "X" : "Y";
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
    this._renderedContentOffset = offset;
    if (to === "to-end") {
      transform += ` translate${axis}(-100%)`;
      this._renderedContentOffsetNeedsRewrite = true;
    }
    if (this._renderedContentTransform != transform) {
      this._renderedContentTransform = transform;
      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToOffset(offset, behavior = "auto") {
    const options = {
      behavior
    };
    if (this.orientation === "horizontal") {
      options.start = offset;
    } else {
      options.top = offset;
    }
    this.scrollable.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */
  scrollToIndex(index, behavior = "auto") {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the scrollable (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */
  measureScrollOffset(from2) {
    let measureScrollOffset;
    if (this.scrollable == this) {
      measureScrollOffset = (_from) => super.measureScrollOffset(_from);
    } else {
      measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
    }
    return Math.max(0, measureScrollOffset(from2 ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
  }
  /**
   * Measures the offset of the viewport from the scrolling container
   * @param from The edge to measure from.
   */
  measureViewportOffset(from2) {
    let fromRect;
    const LEFT = "left";
    const RIGHT = "right";
    const isRtl = this.dir?.value == "rtl";
    if (from2 == "start") {
      fromRect = isRtl ? RIGHT : LEFT;
    } else if (from2 == "end") {
      fromRect = isRtl ? LEFT : RIGHT;
    } else if (from2) {
      fromRect = from2;
    } else {
      fromRect = this.orientation === "horizontal" ? "left" : "top";
    }
    const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
    const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
    return viewportClientRect - scrollerClientRect;
  }
  /** Measure the combined size of all of the rendered items. */
  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */
  measureRangeSize(range2) {
    if (!this._forOf) {
      return 0;
    }
    return this._forOf.measureRangeSize(range2, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */
  checkViewportSize() {
    this._measureViewportSize();
    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */
  _measureViewportSize() {
    this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
  }
  /** Queue up change detection to run. */
  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    }
    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */
  _doChangeDetection() {
    if (this._isDestroyed) {
      return;
    }
    this.ngZone.run(() => {
      this._changeDetectorRef.markForCheck();
      this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
      afterNextRender(() => {
        this._isChangeDetectionPending = false;
        const runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (const fn of runAfterChangeDetection) {
          fn();
        }
      }, {
        injector: this._injector
      });
    });
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */
  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === "horizontal" ? `${this._totalContentSize}px` : "";
  }
  static {
    this.\u0275fac = function CdkVirtualScrollViewport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollViewport)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(VIRTUAL_SCROLL_STRATEGY, 8), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(VIRTUAL_SCROLLABLE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation",
        appendOnly: [2, "appendOnly", "appendOnly", booleanAttribute]
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [["contentWrapper", ""], [1, "cdk-virtual-scroll-content-wrapper"], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "div", 1, 0);
          \u0275\u0275projection(2);
          \u0275\u0275elementEnd();
          \u0275\u0275element(3, "div", 2);
        }
        if (rf & 2) {
          \u0275\u0275advance(3);
          \u0275\u0275styleProp("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollViewport, [{
    type: Component,
    args: [{
      selector: "cdk-virtual-scroll-viewport",
      host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      providers: [{
        provide: CdkScrollable,
        useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
        deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
      }],
      template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>\n',
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: CdkVirtualScrollable,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [VIRTUAL_SCROLLABLE]
    }]
  }], {
    orientation: [{
      type: Input
    }],
    appendOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrolledIndexChange: [{
      type: Output
    }],
    _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: true
      }]
    }]
  });
})();
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var CdkVirtualForOf = class _CdkVirtualForOf {
  /** The DataSource to display. */
  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }
  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;
    if (isDataSource(value)) {
      this._dataSourceChanges.next(value);
    } else {
      this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */
  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }
  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
  }
  /** The template used to stamp out new elements. */
  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */
  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }
  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
  }
  constructor(_viewContainerRef, _template, _differs, _viewRepeater, _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    this.viewChange = new Subject();
    this._dataSourceChanges = new Subject();
    this.dataStream = this._dataSourceChanges.pipe(
      // Start off with null `DataSource`.
      startWith(null),
      // Bundle up the previous and current data sources so we can work with both.
      pairwise(),
      // Use `_changeDataSource` to disconnect from the previous data source and connect to the
      // new one, passing back a stream of data changes which we run through `switchMap` to give
      // us a data stream that emits the latest data from whatever the current `DataSource` is.
      switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
      // Replay the last emitted data when someone subscribes.
      shareReplay(1)
    );
    this._differ = null;
    this._needsUpdate = false;
    this._destroyed = new Subject();
    this.dataStream.subscribe((data) => {
      this._data = data;
      this._onRenderedDataChange();
    });
    this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range2) => {
      this._renderedRange = range2;
      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }
      this._onRenderedDataChange();
    });
    this._viewport.attach(this);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */
  measureRangeSize(range2, orientation) {
    if (range2.start >= range2.end) {
      return 0;
    }
    if ((range2.start < this._renderedRange.start || range2.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    }
    const renderedStartIndex = range2.start - this._renderedRange.start;
    const rangeLen = range2.end - range2.start;
    let firstNode;
    let lastNode;
    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    }
    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);
      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }
    return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
  }
  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      const changes = this._differ.diff(this._renderedItems);
      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }
      this._needsUpdate = false;
    }
  }
  ngOnDestroy() {
    this._viewport.detach();
    this._dataSourceChanges.next(void 0);
    this._dataSourceChanges.complete();
    this.viewChange.complete();
    this._destroyed.next();
    this._destroyed.complete();
    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */
  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }
    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
    if (!this._differ) {
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }
    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */
  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }
    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : of();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */
  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */
  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
    changes.forEachIdentityChange((record) => {
      const view = this._viewContainerRef.get(record.currentIndex);
      view.context.$implicit = record.item;
    });
    const count = this._data.length;
    let i = this._viewContainerRef.length;
    while (i--) {
      const view = this._viewContainerRef.get(i);
      view.context.index = this._renderedRange.start + i;
      view.context.count = count;
      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */
  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }
  _getEmbeddedViewArgs(record, index) {
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }
  static {
    this.\u0275fac = function CdkVirtualForOf_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualForOf)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(_VIEW_REPEATER_STRATEGY), \u0275\u0275directiveInject(CdkVirtualScrollViewport, 4), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualForOf, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualFor][cdkVirtualForOf]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: _RecycleViewRepeaterStrategy,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: CdkVirtualScrollViewport,
    decorators: [{
      type: SkipSelf
    }]
  }, {
    type: NgZone
  }], {
    cdkVirtualForOf: [{
      type: Input
    }],
    cdkVirtualForTrackBy: [{
      type: Input
    }],
    cdkVirtualForTemplate: [{
      type: Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: Input
    }]
  });
})();
var CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    super(elementRef, scrollDispatcher, ngZone, dir);
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2] - this.measureScrollOffset(from2);
  }
  static {
    this.\u0275fac = function CdkVirtualScrollableElement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollableElement)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkVirtualScrollableElement,
      selectors: [["", "cdkVirtualScrollingElement", ""]],
      hostAttrs: [1, "cdk-virtual-scrollable"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableElement
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableElement, [{
    type: Directive,
    args: [{
      selector: "[cdkVirtualScrollingElement]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableElement
      }],
      standalone: true,
      host: {
        "class": "cdk-virtual-scrollable"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
  constructor(scrollDispatcher, ngZone, dir) {
    super(new ElementRef(document.documentElement), scrollDispatcher, ngZone, dir);
    this._elementScrolled = new Observable((observer) => this.ngZone.runOutsideAngular(() => fromEvent(document, "scroll").pipe(takeUntil(this._destroyed)).subscribe(observer)));
  }
  measureBoundingClientRectWithScrollOffset(from2) {
    return this.getElementRef().nativeElement.getBoundingClientRect()[from2];
  }
  static {
    this.\u0275fac = function CdkVirtualScrollableWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkVirtualScrollableWindow)(\u0275\u0275directiveInject(ScrollDispatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkVirtualScrollableWindow,
      selectors: [["cdk-virtual-scroll-viewport", "scrollWindow", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: _CdkVirtualScrollableWindow
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkVirtualScrollableWindow, [{
    type: Directive,
    args: [{
      selector: "cdk-virtual-scroll-viewport[scrollWindow]",
      providers: [{
        provide: VIRTUAL_SCROLLABLE,
        useExisting: CdkVirtualScrollableWindow
      }],
      standalone: true
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: NgZone
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var CdkScrollableModule = class _CdkScrollableModule {
  static {
    this.\u0275fac = function CdkScrollableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkScrollableModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _CdkScrollableModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkScrollableModule, [{
    type: NgModule,
    args: [{
      exports: [CdkScrollable],
      imports: [CdkScrollable]
    }]
  }], null, null);
})();
var ScrollingModule = class _ScrollingModule {
  static {
    this.\u0275fac = function ScrollingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ScrollingModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [BidiModule, CdkScrollableModule, BidiModule, CdkScrollableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollingModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, CdkScrollableModule, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollableWindow, CdkVirtualScrollableElement],
      exports: [BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, CdkVirtualScrollableWindow, CdkVirtualScrollableElement]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/portal.mjs
function throwNullPortalError() {
  throw Error("Must provide a portal to attach");
}
function throwPortalAlreadyAttachedError() {
  throw Error("Host already has a portal attached");
}
function throwPortalOutletAlreadyDisposedError() {
  throw Error("This PortalOutlet has already been disposed");
}
function throwUnknownPortalTypeError() {
  throw Error("Attempting to attach an unknown Portal type. BasePortalOutlet accepts either a ComponentPortal or a TemplatePortal.");
}
function throwNullPortalOutletError() {
  throw Error("Attempting to attach a portal to a null PortalOutlet");
}
function throwNoPortalAttachedError() {
  throw Error("Attempting to detach a portal that is not attached to a host");
}
var Portal = class {
  /** Attach this portal to a host. */
  attach(host) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (host == null) {
        throwNullPortalOutletError();
      }
      if (host.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
    }
    this._attachedHost = host;
    return host.attach(this);
  }
  /** Detach this portal from its host */
  detach() {
    let host = this._attachedHost;
    if (host != null) {
      this._attachedHost = null;
      host.detach();
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwNoPortalAttachedError();
    }
  }
  /** Whether this portal is attached to a host. */
  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
   * the PortalOutlet when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host) {
    this._attachedHost = host;
  }
};
var ComponentPortal = class extends Portal {
  constructor(component, viewContainerRef, injector, componentFactoryResolver, projectableNodes) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
    this.componentFactoryResolver = componentFactoryResolver;
    this.projectableNodes = projectableNodes;
  }
};
var TemplatePortal = class extends Portal {
  constructor(templateRef, viewContainerRef, context, injector) {
    super();
    this.templateRef = templateRef;
    this.viewContainerRef = viewContainerRef;
    this.context = context;
    this.injector = injector;
  }
  get origin() {
    return this.templateRef.elementRef;
  }
  /**
   * Attach the portal to the provided `PortalOutlet`.
   * When a context is provided it will override the `context` property of the `TemplatePortal`
   * instance.
   */
  attach(host, context = this.context) {
    this.context = context;
    return super.attach(host);
  }
  detach() {
    this.context = void 0;
    return super.detach();
  }
};
var DomPortal = class extends Portal {
  constructor(element) {
    super();
    this.element = element instanceof ElementRef ? element.nativeElement : element;
  }
};
var BasePortalOutlet = class {
  constructor() {
    this._isDisposed = false;
    this.attachDomPortal = null;
  }
  /** Whether this host has an attached portal. */
  hasAttached() {
    return !!this._attachedPortal;
  }
  /** Attaches a portal. */
  attach(portal) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!portal) {
        throwNullPortalError();
      }
      if (this.hasAttached()) {
        throwPortalAlreadyAttachedError();
      }
      if (this._isDisposed) {
        throwPortalOutletAlreadyDisposedError();
      }
    }
    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    } else if (this.attachDomPortal && portal instanceof DomPortal) {
      this._attachedPortal = portal;
      return this.attachDomPortal(portal);
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throwUnknownPortalTypeError();
    }
  }
  /** Detaches a previously attached portal. */
  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost(null);
      this._attachedPortal = null;
    }
    this._invokeDisposeFn();
  }
  /** Permanently dispose of this portal host. */
  dispose() {
    if (this.hasAttached()) {
      this.detach();
    }
    this._invokeDisposeFn();
    this._isDisposed = true;
  }
  /** @docs-private */
  setDisposeFn(fn) {
    this._disposeFn = fn;
  }
  _invokeDisposeFn() {
    if (this._disposeFn) {
      this._disposeFn();
      this._disposeFn = null;
    }
  }
};
var DomPortalOutlet = class extends BasePortalOutlet {
  /**
   * @param outletElement Element into which the content is projected.
   * @param _componentFactoryResolver Used to resolve the component factory.
   *   Only required when attaching component portals.
   * @param _appRef Reference to the application. Only used in component portals when there
   *   is no `ViewContainerRef` available.
   * @param _defaultInjector Injector to use as a fallback when the portal being attached doesn't
   *   have one. Only used for component portals.
   * @param _document Reference to the document. Used when attaching a DOM portal. Will eventually
   *   become a required parameter.
   */
  constructor(outletElement, _componentFactoryResolver, _appRef, _defaultInjector, _document) {
    super();
    this.outletElement = outletElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._defaultInjector = _defaultInjector;
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      element.parentNode.insertBefore(anchorNode, element);
      this.outletElement.appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !resolver) {
      throw Error("Cannot attach component portal to outlet without a ComponentFactoryResolver.");
    }
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    let componentRef;
    if (portal.viewContainerRef) {
      componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector, portal.projectableNodes || void 0);
      this.setDisposeFn(() => componentRef.destroy());
    } else {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._appRef) {
        throw Error("Cannot attach component portal to outlet without an ApplicationRef.");
      }
      componentRef = componentFactory.create(portal.injector || this._defaultInjector || Injector.NULL);
      this._appRef.attachView(componentRef.hostView);
      this.setDisposeFn(() => {
        if (this._appRef.viewCount > 0) {
          this._appRef.detachView(componentRef.hostView);
        }
        componentRef.destroy();
      });
    }
    this.outletElement.appendChild(this._getComponentRootNode(componentRef));
    this._attachedPortal = portal;
    return componentRef;
  }
  /**
   * Attaches a template portal to the DOM as an embedded view.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    let viewContainer = portal.viewContainerRef;
    let viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    viewRef.rootNodes.forEach((rootNode) => this.outletElement.appendChild(rootNode));
    viewRef.detectChanges();
    this.setDisposeFn(() => {
      let index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    });
    this._attachedPortal = portal;
    return viewRef;
  }
  /**
   * Clears out a portal from the DOM.
   */
  dispose() {
    super.dispose();
    this.outletElement.remove();
  }
  /** Gets the root HTMLElement for an instantiated component. */
  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }
};
var CdkPortal = class _CdkPortal extends TemplatePortal {
  constructor(templateRef, viewContainerRef) {
    super(templateRef, viewContainerRef);
  }
  static {
    this.\u0275fac = function CdkPortal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkPortal)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortal, [{
    type: Directive,
    args: [{
      selector: "[cdkPortal]",
      exportAs: "cdkPortal",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }], null);
})();
var TemplatePortalDirective = class _TemplatePortalDirective extends CdkPortal {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275TemplatePortalDirective_BaseFactory;
      return function TemplatePortalDirective_Factory(__ngFactoryType__) {
        return (\u0275TemplatePortalDirective_BaseFactory || (\u0275TemplatePortalDirective_BaseFactory = \u0275\u0275getInheritedFactory(_TemplatePortalDirective)))(__ngFactoryType__ || _TemplatePortalDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkPortal,
        useExisting: _TemplatePortalDirective
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TemplatePortalDirective, [{
    type: Directive,
    args: [{
      selector: "[cdk-portal], [portal]",
      exportAs: "cdkPortal",
      providers: [{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var CdkPortalOutlet = class _CdkPortalOutlet extends BasePortalOutlet {
  constructor(_componentFactoryResolver, _viewContainerRef, _document) {
    super();
    this._componentFactoryResolver = _componentFactoryResolver;
    this._viewContainerRef = _viewContainerRef;
    this._isInitialized = false;
    this.attached = new EventEmitter();
    this.attachDomPortal = (portal) => {
      if (!this._document && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Cannot attach DOM portal without _document constructor parameter");
      }
      const element = portal.element;
      if (!element.parentNode && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("DOM portal content must be attached to a parent node.");
      }
      const anchorNode = this._document.createComment("dom-portal");
      portal.setAttachedHost(this);
      element.parentNode.insertBefore(anchorNode, element);
      this._getRootNode().appendChild(element);
      this._attachedPortal = portal;
      super.setDisposeFn(() => {
        if (anchorNode.parentNode) {
          anchorNode.parentNode.replaceChild(element, anchorNode);
        }
      });
    };
    this._document = _document;
  }
  /** Portal associated with the Portal outlet. */
  get portal() {
    return this._attachedPortal;
  }
  set portal(portal) {
    if (this.hasAttached() && !portal && !this._isInitialized) {
      return;
    }
    if (this.hasAttached()) {
      super.detach();
    }
    if (portal) {
      super.attach(portal);
    }
    this._attachedPortal = portal || null;
  }
  /** Component or view reference that is attached to the portal. */
  get attachedRef() {
    return this._attachedRef;
  }
  ngOnInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    super.dispose();
    this._attachedRef = this._attachedPortal = null;
  }
  /**
   * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
   *
   * @param portal Portal to be attached to the portal outlet.
   * @returns Reference to the created component.
   */
  attachComponentPortal(portal) {
    portal.setAttachedHost(this);
    const viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
    const resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
    const componentFactory = resolver.resolveComponentFactory(portal.component);
    const ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector, portal.projectableNodes || void 0);
    if (viewContainerRef !== this._viewContainerRef) {
      this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
    }
    super.setDisposeFn(() => ref.destroy());
    this._attachedPortal = portal;
    this._attachedRef = ref;
    this.attached.emit(ref);
    return ref;
  }
  /**
   * Attach the given TemplatePortal to this PortalHost as an embedded View.
   * @param portal Portal to be attached.
   * @returns Reference to the created embedded view.
   */
  attachTemplatePortal(portal) {
    portal.setAttachedHost(this);
    const viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context, {
      injector: portal.injector
    });
    super.setDisposeFn(() => this._viewContainerRef.clear());
    this._attachedPortal = portal;
    this._attachedRef = viewRef;
    this.attached.emit(viewRef);
    return viewRef;
  }
  /** Gets the root node of the portal outlet. */
  _getRootNode() {
    const nativeElement = this._viewContainerRef.element.nativeElement;
    return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
  }
  static {
    this.\u0275fac = function CdkPortalOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkPortalOutlet)(\u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: [0, "cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkPortalOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalOutlet]",
      exportAs: "cdkPortalOutlet",
      standalone: true
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    portal: [{
      type: Input,
      args: ["cdkPortalOutlet"]
    }],
    attached: [{
      type: Output
    }]
  });
})();
var PortalHostDirective = class _PortalHostDirective extends CdkPortalOutlet {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PortalHostDirective_BaseFactory;
      return function PortalHostDirective_Factory(__ngFactoryType__) {
        return (\u0275PortalHostDirective_BaseFactory || (\u0275PortalHostDirective_BaseFactory = \u0275\u0275getInheritedFactory(_PortalHostDirective)))(__ngFactoryType__ || _PortalHostDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: [0, "cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkPortalOutlet,
        useExisting: _PortalHostDirective
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalHostDirective, [{
    type: Directive,
    args: [{
      selector: "[cdkPortalHost], [portalHost]",
      exportAs: "cdkPortalHost",
      inputs: [{
        name: "portal",
        alias: "cdkPortalHost"
      }],
      providers: [{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }],
      standalone: true
    }]
  }], null, null);
})();
var PortalModule = class _PortalModule {
  static {
    this.\u0275fac = function PortalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PortalModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _PortalModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PortalModule, [{
    type: NgModule,
    args: [{
      imports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
      exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var ESCAPE = 27;
var SPACE = 32;
var ZERO = 48;
var NINE = 57;
var A = 65;
var Z = 90;
var META = 91;
var MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/overlay.mjs
var scrollBehaviorSupported2 = supportsScrollBehavior();
var BlockScrollStrategy = class {
  constructor(_viewportRuler, document2) {
    this._viewportRuler = _viewportRuler;
    this._previousHTMLStyles = {
      top: "",
      left: ""
    };
    this._isEnabled = false;
    this._document = document2;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach() {
  }
  /** Blocks page-level scroll while the attached overlay is open. */
  enable() {
    if (this._canBeEnabled()) {
      const root = this._document.documentElement;
      this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition();
      this._previousHTMLStyles.left = root.style.left || "";
      this._previousHTMLStyles.top = root.style.top || "";
      root.style.left = coerceCssPixelValue(-this._previousScrollPosition.left);
      root.style.top = coerceCssPixelValue(-this._previousScrollPosition.top);
      root.classList.add("cdk-global-scrollblock");
      this._isEnabled = true;
    }
  }
  /** Unblocks page-level scroll while the attached overlay is open. */
  disable() {
    if (this._isEnabled) {
      const html = this._document.documentElement;
      const body = this._document.body;
      const htmlStyle = html.style;
      const bodyStyle = body.style;
      const previousHtmlScrollBehavior = htmlStyle.scrollBehavior || "";
      const previousBodyScrollBehavior = bodyStyle.scrollBehavior || "";
      this._isEnabled = false;
      htmlStyle.left = this._previousHTMLStyles.left;
      htmlStyle.top = this._previousHTMLStyles.top;
      html.classList.remove("cdk-global-scrollblock");
      if (scrollBehaviorSupported2) {
        htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = "auto";
      }
      window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
      if (scrollBehaviorSupported2) {
        htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
        bodyStyle.scrollBehavior = previousBodyScrollBehavior;
      }
    }
  }
  _canBeEnabled() {
    const html = this._document.documentElement;
    if (html.classList.contains("cdk-global-scrollblock") || this._isEnabled) {
      return false;
    }
    const body = this._document.body;
    const viewport = this._viewportRuler.getViewportSize();
    return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
  }
};
function getMatScrollStrategyAlreadyAttachedError() {
  return Error(`Scroll strategy has already been attached.`);
}
var CloseScrollStrategy = class {
  constructor(_scrollDispatcher, _ngZone, _viewportRuler, _config2) {
    this._scrollDispatcher = _scrollDispatcher;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._config = _config2;
    this._scrollSubscription = null;
    this._detach = () => {
      this.disable();
      if (this._overlayRef.hasAttached()) {
        this._ngZone.run(() => this._overlayRef.detach());
      }
    };
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables the closing of the attached overlay on scroll. */
  enable() {
    if (this._scrollSubscription) {
      return;
    }
    const stream = this._scrollDispatcher.scrolled(0).pipe(filter((scrollable) => {
      return !scrollable || !this._overlayRef.overlayElement.contains(scrollable.getElementRef().nativeElement);
    }));
    if (this._config && this._config.threshold && this._config.threshold > 1) {
      this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
      this._scrollSubscription = stream.subscribe(() => {
        const scrollPosition = this._viewportRuler.getViewportScrollPosition().top;
        if (Math.abs(scrollPosition - this._initialScrollPosition) > this._config.threshold) {
          this._detach();
        } else {
          this._overlayRef.updatePosition();
        }
      });
    } else {
      this._scrollSubscription = stream.subscribe(this._detach);
    }
  }
  /** Disables the closing the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
};
var NoopScrollStrategy = class {
  /** Does nothing, as this scroll strategy is a no-op. */
  enable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  disable() {
  }
  /** Does nothing, as this scroll strategy is a no-op. */
  attach() {
  }
};
function isElementScrolledOutsideView(element, scrollContainers) {
  return scrollContainers.some((containerBounds) => {
    const outsideAbove = element.bottom < containerBounds.top;
    const outsideBelow = element.top > containerBounds.bottom;
    const outsideLeft = element.right < containerBounds.left;
    const outsideRight = element.left > containerBounds.right;
    return outsideAbove || outsideBelow || outsideLeft || outsideRight;
  });
}
function isElementClippedByScrolling(element, scrollContainers) {
  return scrollContainers.some((scrollContainerRect) => {
    const clippedAbove = element.top < scrollContainerRect.top;
    const clippedBelow = element.bottom > scrollContainerRect.bottom;
    const clippedLeft = element.left < scrollContainerRect.left;
    const clippedRight = element.right > scrollContainerRect.right;
    return clippedAbove || clippedBelow || clippedLeft || clippedRight;
  });
}
var RepositionScrollStrategy = class {
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, _config2) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this._config = _config2;
    this._scrollSubscription = null;
  }
  /** Attaches this scroll strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMatScrollStrategyAlreadyAttachedError();
    }
    this._overlayRef = overlayRef;
  }
  /** Enables repositioning of the attached overlay on scroll. */
  enable() {
    if (!this._scrollSubscription) {
      const throttle = this._config ? this._config.scrollThrottle : 0;
      this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(() => {
        this._overlayRef.updatePosition();
        if (this._config && this._config.autoClose) {
          const overlayRect = this._overlayRef.overlayElement.getBoundingClientRect();
          const {
            width,
            height
          } = this._viewportRuler.getViewportSize();
          const parentRects = [{
            width,
            height,
            bottom: height,
            right: width,
            top: 0,
            left: 0
          }];
          if (isElementScrolledOutsideView(overlayRect, parentRects)) {
            this.disable();
            this._ngZone.run(() => this._overlayRef.detach());
          }
        }
      });
    }
  }
  /** Disables repositioning of the attached overlay on scroll. */
  disable() {
    if (this._scrollSubscription) {
      this._scrollSubscription.unsubscribe();
      this._scrollSubscription = null;
    }
  }
  detach() {
    this.disable();
    this._overlayRef = null;
  }
};
var ScrollStrategyOptions = class _ScrollStrategyOptions {
  constructor(_scrollDispatcher, _viewportRuler, _ngZone, document2) {
    this._scrollDispatcher = _scrollDispatcher;
    this._viewportRuler = _viewportRuler;
    this._ngZone = _ngZone;
    this.noop = () => new NoopScrollStrategy();
    this.close = (config3) => new CloseScrollStrategy(this._scrollDispatcher, this._ngZone, this._viewportRuler, config3);
    this.block = () => new BlockScrollStrategy(this._viewportRuler, this._document);
    this.reposition = (config3) => new RepositionScrollStrategy(this._scrollDispatcher, this._viewportRuler, this._ngZone, config3);
    this._document = document2;
  }
  static {
    this.\u0275fac = function ScrollStrategyOptions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollStrategyOptions)(\u0275\u0275inject(ScrollDispatcher), \u0275\u0275inject(ViewportRuler), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ScrollStrategyOptions,
      factory: _ScrollStrategyOptions.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollStrategyOptions, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ScrollDispatcher
  }, {
    type: ViewportRuler
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var OverlayConfig = class {
  constructor(config3) {
    this.scrollStrategy = new NoopScrollStrategy();
    this.panelClass = "";
    this.hasBackdrop = false;
    this.backdropClass = "cdk-overlay-dark-backdrop";
    this.disposeOnNavigation = false;
    if (config3) {
      const configKeys = Object.keys(config3);
      for (const key of configKeys) {
        if (config3[key] !== void 0) {
          this[key] = config3[key];
        }
      }
    }
  }
};
var ConnectedOverlayPositionChange = class {
  constructor(connectionPair, scrollableViewProperties) {
    this.connectionPair = connectionPair;
    this.scrollableViewProperties = scrollableViewProperties;
  }
};
function validateVerticalPosition(property, value) {
  if (value !== "top" && value !== "bottom" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "top", "bottom" or "center".`);
  }
}
function validateHorizontalPosition(property, value) {
  if (value !== "start" && value !== "end" && value !== "center") {
    throw Error(`ConnectedPosition: Invalid ${property} "${value}". Expected "start", "end" or "center".`);
  }
}
var BaseOverlayDispatcher = class _BaseOverlayDispatcher {
  constructor(document2) {
    this._attachedOverlays = [];
    this._document = document2;
  }
  ngOnDestroy() {
    this.detach();
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    this.remove(overlayRef);
    this._attachedOverlays.push(overlayRef);
  }
  /** Remove an overlay from the list of attached overlay refs. */
  remove(overlayRef) {
    const index = this._attachedOverlays.indexOf(overlayRef);
    if (index > -1) {
      this._attachedOverlays.splice(index, 1);
    }
    if (this._attachedOverlays.length === 0) {
      this.detach();
    }
  }
  static {
    this.\u0275fac = function BaseOverlayDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseOverlayDispatcher)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BaseOverlayDispatcher,
      factory: _BaseOverlayDispatcher.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseOverlayDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var OverlayKeyboardDispatcher = class _OverlayKeyboardDispatcher extends BaseOverlayDispatcher {
  constructor(document2, _ngZone) {
    super(document2);
    this._ngZone = _ngZone;
    this._keydownListener = (event) => {
      const overlays = this._attachedOverlays;
      for (let i = overlays.length - 1; i > -1; i--) {
        if (overlays[i]._keydownEvents.observers.length > 0) {
          const keydownEvents = overlays[i]._keydownEvents;
          if (this._ngZone) {
            this._ngZone.run(() => keydownEvents.next(event));
          } else {
            keydownEvents.next(event);
          }
          break;
        }
      }
    };
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      if (this._ngZone) {
        this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener));
      } else {
        this._document.body.addEventListener("keydown", this._keydownListener);
      }
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      this._document.body.removeEventListener("keydown", this._keydownListener);
      this._isAttached = false;
    }
  }
  static {
    this.\u0275fac = function OverlayKeyboardDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverlayKeyboardDispatcher)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(NgZone, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _OverlayKeyboardDispatcher,
      factory: _OverlayKeyboardDispatcher.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayKeyboardDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var OverlayOutsideClickDispatcher = class _OverlayOutsideClickDispatcher extends BaseOverlayDispatcher {
  constructor(document2, _platform, _ngZone) {
    super(document2);
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._cursorStyleIsSet = false;
    this._pointerDownListener = (event) => {
      this._pointerDownEventTarget = _getEventTarget(event);
    };
    this._clickListener = (event) => {
      const target = _getEventTarget(event);
      const origin = event.type === "click" && this._pointerDownEventTarget ? this._pointerDownEventTarget : target;
      this._pointerDownEventTarget = null;
      const overlays = this._attachedOverlays.slice();
      for (let i = overlays.length - 1; i > -1; i--) {
        const overlayRef = overlays[i];
        if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
          continue;
        }
        if (containsPierceShadowDom(overlayRef.overlayElement, target) || containsPierceShadowDom(overlayRef.overlayElement, origin)) {
          break;
        }
        const outsidePointerEvents = overlayRef._outsidePointerEvents;
        if (this._ngZone) {
          this._ngZone.run(() => outsidePointerEvents.next(event));
        } else {
          outsidePointerEvents.next(event);
        }
      }
    };
  }
  /** Add a new overlay to the list of attached overlay refs. */
  add(overlayRef) {
    super.add(overlayRef);
    if (!this._isAttached) {
      const body = this._document.body;
      if (this._ngZone) {
        this._ngZone.runOutsideAngular(() => this._addEventListeners(body));
      } else {
        this._addEventListeners(body);
      }
      if (this._platform.IOS && !this._cursorStyleIsSet) {
        this._cursorOriginalValue = body.style.cursor;
        body.style.cursor = "pointer";
        this._cursorStyleIsSet = true;
      }
      this._isAttached = true;
    }
  }
  /** Detaches the global keyboard event listener. */
  detach() {
    if (this._isAttached) {
      const body = this._document.body;
      body.removeEventListener("pointerdown", this._pointerDownListener, true);
      body.removeEventListener("click", this._clickListener, true);
      body.removeEventListener("auxclick", this._clickListener, true);
      body.removeEventListener("contextmenu", this._clickListener, true);
      if (this._platform.IOS && this._cursorStyleIsSet) {
        body.style.cursor = this._cursorOriginalValue;
        this._cursorStyleIsSet = false;
      }
      this._isAttached = false;
    }
  }
  _addEventListeners(body) {
    body.addEventListener("pointerdown", this._pointerDownListener, true);
    body.addEventListener("click", this._clickListener, true);
    body.addEventListener("auxclick", this._clickListener, true);
    body.addEventListener("contextmenu", this._clickListener, true);
  }
  static {
    this.\u0275fac = function OverlayOutsideClickDispatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverlayOutsideClickDispatcher)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform), \u0275\u0275inject(NgZone, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _OverlayOutsideClickDispatcher,
      factory: _OverlayOutsideClickDispatcher.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayOutsideClickDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
function containsPierceShadowDom(parent, child) {
  const supportsShadowRoot = typeof ShadowRoot !== "undefined" && ShadowRoot;
  let current = child;
  while (current) {
    if (current === parent) {
      return true;
    }
    current = supportsShadowRoot && current instanceof ShadowRoot ? current.host : current.parentNode;
  }
  return false;
}
var OverlayContainer = class _OverlayContainer {
  constructor(document2, _platform) {
    this._platform = _platform;
    this._document = document2;
  }
  ngOnDestroy() {
    this._containerElement?.remove();
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */
  getContainerElement() {
    if (!this._containerElement) {
      this._createContainer();
    }
    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body.
   */
  _createContainer() {
    const containerClass = "cdk-overlay-container";
    if (this._platform.isBrowser || _isTestEnvironment()) {
      const oppositePlatformContainers = this._document.querySelectorAll(`.${containerClass}[platform="server"], .${containerClass}[platform="test"]`);
      for (let i = 0; i < oppositePlatformContainers.length; i++) {
        oppositePlatformContainers[i].remove();
      }
    }
    const container = this._document.createElement("div");
    container.classList.add(containerClass);
    if (_isTestEnvironment()) {
      container.setAttribute("platform", "test");
    } else if (!this._platform.isBrowser) {
      container.setAttribute("platform", "server");
    }
    this._document.body.appendChild(container);
    this._containerElement = container;
  }
  static {
    this.\u0275fac = function OverlayContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverlayContainer)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _OverlayContainer,
      factory: _OverlayContainer.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
var OverlayRef = class {
  constructor(_portalOutlet, _host, _pane, _config2, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher, _animationsDisabled = false, _injector) {
    this._portalOutlet = _portalOutlet;
    this._host = _host;
    this._pane = _pane;
    this._config = _config2;
    this._ngZone = _ngZone;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._document = _document;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsDisabled = _animationsDisabled;
    this._injector = _injector;
    this._backdropElement = null;
    this._backdropClick = new Subject();
    this._attachments = new Subject();
    this._detachments = new Subject();
    this._locationChanges = Subscription.EMPTY;
    this._backdropClickHandler = (event) => this._backdropClick.next(event);
    this._backdropTransitionendHandler = (event) => {
      this._disposeBackdrop(event.target);
    };
    this._keydownEvents = new Subject();
    this._outsidePointerEvents = new Subject();
    this._renders = new Subject();
    if (_config2.scrollStrategy) {
      this._scrollStrategy = _config2.scrollStrategy;
      this._scrollStrategy.attach(this);
    }
    this._positionStrategy = _config2.positionStrategy;
    this._afterRenderRef = untracked(() => afterRender(() => {
      this._renders.next();
    }, {
      injector: this._injector
    }));
  }
  /** The overlay's HTML element */
  get overlayElement() {
    return this._pane;
  }
  /** The overlay's backdrop HTML element. */
  get backdropElement() {
    return this._backdropElement;
  }
  /**
   * Wrapper around the panel element. Can be used for advanced
   * positioning where a wrapper with specific styling is
   * required around the overlay pane.
   */
  get hostElement() {
    return this._host;
  }
  /**
   * Attaches content, given via a Portal, to the overlay.
   * If the overlay is configured to have a backdrop, it will be created.
   *
   * @param portal Portal instance to which to attach the overlay.
   * @returns The portal attachment result.
   */
  attach(portal) {
    if (!this._host.parentElement && this._previousHostParent) {
      this._previousHostParent.appendChild(this._host);
    }
    const attachResult = this._portalOutlet.attach(portal);
    if (this._positionStrategy) {
      this._positionStrategy.attach(this);
    }
    this._updateStackingOrder();
    this._updateElementSize();
    this._updateElementDirection();
    if (this._scrollStrategy) {
      this._scrollStrategy.enable();
    }
    this._afterNextRenderRef?.destroy();
    this._afterNextRenderRef = afterNextRender(() => {
      if (this.hasAttached()) {
        this.updatePosition();
      }
    }, {
      injector: this._injector
    });
    this._togglePointerEvents(true);
    if (this._config.hasBackdrop) {
      this._attachBackdrop();
    }
    if (this._config.panelClass) {
      this._toggleClasses(this._pane, this._config.panelClass, true);
    }
    this._attachments.next();
    this._keyboardDispatcher.add(this);
    if (this._config.disposeOnNavigation) {
      this._locationChanges = this._location.subscribe(() => this.dispose());
    }
    this._outsideClickDispatcher.add(this);
    if (typeof attachResult?.onDestroy === "function") {
      attachResult.onDestroy(() => {
        if (this.hasAttached()) {
          this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()));
        }
      });
    }
    return attachResult;
  }
  /**
   * Detaches an overlay from a portal.
   * @returns The portal detachment result.
   */
  detach() {
    if (!this.hasAttached()) {
      return;
    }
    this.detachBackdrop();
    this._togglePointerEvents(false);
    if (this._positionStrategy && this._positionStrategy.detach) {
      this._positionStrategy.detach();
    }
    if (this._scrollStrategy) {
      this._scrollStrategy.disable();
    }
    const detachmentResult = this._portalOutlet.detach();
    this._detachments.next();
    this._keyboardDispatcher.remove(this);
    this._detachContentWhenEmpty();
    this._locationChanges.unsubscribe();
    this._outsideClickDispatcher.remove(this);
    return detachmentResult;
  }
  /** Cleans up the overlay from the DOM. */
  dispose() {
    const isAttached = this.hasAttached();
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._disposeScrollStrategy();
    this._disposeBackdrop(this._backdropElement);
    this._locationChanges.unsubscribe();
    this._keyboardDispatcher.remove(this);
    this._portalOutlet.dispose();
    this._attachments.complete();
    this._backdropClick.complete();
    this._keydownEvents.complete();
    this._outsidePointerEvents.complete();
    this._outsideClickDispatcher.remove(this);
    this._host?.remove();
    this._afterNextRenderRef?.destroy();
    this._previousHostParent = this._pane = this._host = null;
    if (isAttached) {
      this._detachments.next();
    }
    this._detachments.complete();
    this._afterRenderRef.destroy();
    this._renders.complete();
  }
  /** Whether the overlay has attached content. */
  hasAttached() {
    return this._portalOutlet.hasAttached();
  }
  /** Gets an observable that emits when the backdrop has been clicked. */
  backdropClick() {
    return this._backdropClick;
  }
  /** Gets an observable that emits when the overlay has been attached. */
  attachments() {
    return this._attachments;
  }
  /** Gets an observable that emits when the overlay has been detached. */
  detachments() {
    return this._detachments;
  }
  /** Gets an observable of keydown events targeted to this overlay. */
  keydownEvents() {
    return this._keydownEvents;
  }
  /** Gets an observable of pointer events targeted outside this overlay. */
  outsidePointerEvents() {
    return this._outsidePointerEvents;
  }
  /** Gets the current overlay configuration, which is immutable. */
  getConfig() {
    return this._config;
  }
  /** Updates the position of the overlay based on the position strategy. */
  updatePosition() {
    if (this._positionStrategy) {
      this._positionStrategy.apply();
    }
  }
  /** Switches to a new position strategy and updates the overlay position. */
  updatePositionStrategy(strategy) {
    if (strategy === this._positionStrategy) {
      return;
    }
    if (this._positionStrategy) {
      this._positionStrategy.dispose();
    }
    this._positionStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      this.updatePosition();
    }
  }
  /** Update the size properties of the overlay. */
  updateSize(sizeConfig) {
    this._config = __spreadValues(__spreadValues({}, this._config), sizeConfig);
    this._updateElementSize();
  }
  /** Sets the LTR/RTL direction for the overlay. */
  setDirection(dir) {
    this._config = __spreadProps(__spreadValues({}, this._config), {
      direction: dir
    });
    this._updateElementDirection();
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, true);
    }
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    if (this._pane) {
      this._toggleClasses(this._pane, classes, false);
    }
  }
  /**
   * Returns the layout direction of the overlay panel.
   */
  getDirection() {
    const direction = this._config.direction;
    if (!direction) {
      return "ltr";
    }
    return typeof direction === "string" ? direction : direction.value;
  }
  /** Switches to a new scroll strategy. */
  updateScrollStrategy(strategy) {
    if (strategy === this._scrollStrategy) {
      return;
    }
    this._disposeScrollStrategy();
    this._scrollStrategy = strategy;
    if (this.hasAttached()) {
      strategy.attach(this);
      strategy.enable();
    }
  }
  /** Updates the text direction of the overlay panel. */
  _updateElementDirection() {
    this._host.setAttribute("dir", this.getDirection());
  }
  /** Updates the size of the overlay element based on the overlay config. */
  _updateElementSize() {
    if (!this._pane) {
      return;
    }
    const style2 = this._pane.style;
    style2.width = coerceCssPixelValue(this._config.width);
    style2.height = coerceCssPixelValue(this._config.height);
    style2.minWidth = coerceCssPixelValue(this._config.minWidth);
    style2.minHeight = coerceCssPixelValue(this._config.minHeight);
    style2.maxWidth = coerceCssPixelValue(this._config.maxWidth);
    style2.maxHeight = coerceCssPixelValue(this._config.maxHeight);
  }
  /** Toggles the pointer events for the overlay pane element. */
  _togglePointerEvents(enablePointer) {
    this._pane.style.pointerEvents = enablePointer ? "" : "none";
  }
  /** Attaches a backdrop for this overlay. */
  _attachBackdrop() {
    const showingClass = "cdk-overlay-backdrop-showing";
    this._backdropElement = this._document.createElement("div");
    this._backdropElement.classList.add("cdk-overlay-backdrop");
    if (this._animationsDisabled) {
      this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation");
    }
    if (this._config.backdropClass) {
      this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
    }
    this._host.parentElement.insertBefore(this._backdropElement, this._host);
    this._backdropElement.addEventListener("click", this._backdropClickHandler);
    if (!this._animationsDisabled && typeof requestAnimationFrame !== "undefined") {
      this._ngZone.runOutsideAngular(() => {
        requestAnimationFrame(() => {
          if (this._backdropElement) {
            this._backdropElement.classList.add(showingClass);
          }
        });
      });
    } else {
      this._backdropElement.classList.add(showingClass);
    }
  }
  /**
   * Updates the stacking order of the element, moving it to the top if necessary.
   * This is required in cases where one overlay was detached, while another one,
   * that should be behind it, was destroyed. The next time both of them are opened,
   * the stacking will be wrong, because the detached element's pane will still be
   * in its original DOM position.
   */
  _updateStackingOrder() {
    if (this._host.nextSibling) {
      this._host.parentNode.appendChild(this._host);
    }
  }
  /** Detaches the backdrop (if any) associated with the overlay. */
  detachBackdrop() {
    const backdropToDetach = this._backdropElement;
    if (!backdropToDetach) {
      return;
    }
    if (this._animationsDisabled) {
      this._disposeBackdrop(backdropToDetach);
      return;
    }
    backdropToDetach.classList.remove("cdk-overlay-backdrop-showing");
    this._ngZone.runOutsideAngular(() => {
      backdropToDetach.addEventListener("transitionend", this._backdropTransitionendHandler);
    });
    backdropToDetach.style.pointerEvents = "none";
    this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
      this._disposeBackdrop(backdropToDetach);
    }, 500));
  }
  /** Toggles a single CSS class or an array of classes on an element. */
  _toggleClasses(element, cssClasses, isAdd) {
    const classes = coerceArray(cssClasses || []).filter((c2) => !!c2);
    if (classes.length) {
      isAdd ? element.classList.add(...classes) : element.classList.remove(...classes);
    }
  }
  /** Detaches the overlay content next time the zone stabilizes. */
  _detachContentWhenEmpty() {
    this._ngZone.runOutsideAngular(() => {
      const subscription = this._renders.pipe(takeUntil(merge(this._attachments, this._detachments))).subscribe(() => {
        if (!this._pane || !this._host || this._pane.children.length === 0) {
          if (this._pane && this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, false);
          }
          if (this._host && this._host.parentElement) {
            this._previousHostParent = this._host.parentElement;
            this._host.remove();
          }
          subscription.unsubscribe();
        }
      });
    });
  }
  /** Disposes of a scroll strategy. */
  _disposeScrollStrategy() {
    const scrollStrategy = this._scrollStrategy;
    if (scrollStrategy) {
      scrollStrategy.disable();
      if (scrollStrategy.detach) {
        scrollStrategy.detach();
      }
    }
  }
  /** Removes a backdrop element from the DOM. */
  _disposeBackdrop(backdrop) {
    if (backdrop) {
      backdrop.removeEventListener("click", this._backdropClickHandler);
      backdrop.removeEventListener("transitionend", this._backdropTransitionendHandler);
      backdrop.remove();
      if (this._backdropElement === backdrop) {
        this._backdropElement = null;
      }
    }
    if (this._backdropTimeout) {
      clearTimeout(this._backdropTimeout);
      this._backdropTimeout = void 0;
    }
  }
};
var boundingBoxClass = "cdk-overlay-connected-position-bounding-box";
var cssUnitPattern = /([A-Za-z%]+)$/;
var FlexibleConnectedPositionStrategy = class {
  /** Ordered list of preferred positions, from most to least desirable. */
  get positions() {
    return this._preferredPositions;
  }
  constructor(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
    this._lastBoundingBoxSize = {
      width: 0,
      height: 0
    };
    this._isPushed = false;
    this._canPush = true;
    this._growAfterOpen = false;
    this._hasFlexibleDimensions = true;
    this._positionLocked = false;
    this._viewportMargin = 0;
    this._scrollables = [];
    this._preferredPositions = [];
    this._positionChanges = new Subject();
    this._resizeSubscription = Subscription.EMPTY;
    this._offsetX = 0;
    this._offsetY = 0;
    this._appliedPanelClasses = [];
    this.positionChanges = this._positionChanges;
    this.setOrigin(connectedTo);
  }
  /** Attaches this position strategy to an overlay. */
  attach(overlayRef) {
    if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("This position strategy is already attached to an overlay");
    }
    this._validatePositions();
    overlayRef.hostElement.classList.add(boundingBoxClass);
    this._overlayRef = overlayRef;
    this._boundingBox = overlayRef.hostElement;
    this._pane = overlayRef.overlayElement;
    this._isDisposed = false;
    this._isInitialRender = true;
    this._lastPosition = null;
    this._resizeSubscription.unsubscribe();
    this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
      this._isInitialRender = true;
      this.apply();
    });
  }
  /**
   * Updates the position of the overlay element, using whichever preferred position relative
   * to the origin best fits on-screen.
   *
   * The selection of a position goes as follows:
   *  - If any positions fit completely within the viewport as-is,
   *      choose the first position that does so.
   *  - If flexible dimensions are enabled and at least one satisfies the given minimum width/height,
   *      choose the position with the greatest available size modified by the positions' weight.
   *  - If pushing is enabled, take the position that went off-screen the least and push it
   *      on-screen.
   *  - If none of the previous criteria were met, use the position that goes off-screen the least.
   * @docs-private
   */
  apply() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
      this.reapplyLastPosition();
      return;
    }
    this._clearPanelClasses();
    this._resetOverlayElementStyles();
    this._resetBoundingBoxStyles();
    this._viewportRect = this._getNarrowedViewportRect();
    this._originRect = this._getOriginRect();
    this._overlayRect = this._pane.getBoundingClientRect();
    this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
    const originRect = this._originRect;
    const overlayRect = this._overlayRect;
    const viewportRect = this._viewportRect;
    const containerRect = this._containerRect;
    const flexibleFits = [];
    let fallback;
    for (let pos of this._preferredPositions) {
      let originPoint = this._getOriginPoint(originRect, containerRect, pos);
      let overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
      let overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos);
      if (overlayFit.isCompletelyWithinViewport) {
        this._isPushed = false;
        this._applyPosition(pos, originPoint);
        return;
      }
      if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
        flexibleFits.push({
          position: pos,
          origin: originPoint,
          overlayRect,
          boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
        });
        continue;
      }
      if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
        fallback = {
          overlayFit,
          overlayPoint,
          originPoint,
          position: pos,
          overlayRect
        };
      }
    }
    if (flexibleFits.length) {
      let bestFit = null;
      let bestScore = -1;
      for (const fit of flexibleFits) {
        const score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);
        if (score > bestScore) {
          bestScore = score;
          bestFit = fit;
        }
      }
      this._isPushed = false;
      this._applyPosition(bestFit.position, bestFit.origin);
      return;
    }
    if (this._canPush) {
      this._isPushed = true;
      this._applyPosition(fallback.position, fallback.originPoint);
      return;
    }
    this._applyPosition(fallback.position, fallback.originPoint);
  }
  detach() {
    this._clearPanelClasses();
    this._lastPosition = null;
    this._previousPushAmount = null;
    this._resizeSubscription.unsubscribe();
  }
  /** Cleanup after the element gets destroyed. */
  dispose() {
    if (this._isDisposed) {
      return;
    }
    if (this._boundingBox) {
      extendStyles(this._boundingBox.style, {
        top: "",
        left: "",
        right: "",
        bottom: "",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: ""
      });
    }
    if (this._pane) {
      this._resetOverlayElementStyles();
    }
    if (this._overlayRef) {
      this._overlayRef.hostElement.classList.remove(boundingBoxClass);
    }
    this.detach();
    this._positionChanges.complete();
    this._overlayRef = this._boundingBox = null;
    this._isDisposed = true;
  }
  /**
   * This re-aligns the overlay element with the trigger in its last calculated position,
   * even if a position higher in the "preferred positions" list would now fit. This
   * allows one to re-align the panel without changing the orientation of the panel.
   */
  reapplyLastPosition() {
    if (this._isDisposed || !this._platform.isBrowser) {
      return;
    }
    const lastPosition = this._lastPosition;
    if (lastPosition) {
      this._originRect = this._getOriginRect();
      this._overlayRect = this._pane.getBoundingClientRect();
      this._viewportRect = this._getNarrowedViewportRect();
      this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
      const originPoint = this._getOriginPoint(this._originRect, this._containerRect, lastPosition);
      this._applyPosition(lastPosition, originPoint);
    } else {
      this.apply();
    }
  }
  /**
   * Sets the list of Scrollable containers that host the origin element so that
   * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
   * Scrollable must be an ancestor element of the strategy's origin element.
   */
  withScrollableContainers(scrollables) {
    this._scrollables = scrollables;
    return this;
  }
  /**
   * Adds new preferred positions.
   * @param positions List of positions options for this overlay.
   */
  withPositions(positions) {
    this._preferredPositions = positions;
    if (positions.indexOf(this._lastPosition) === -1) {
      this._lastPosition = null;
    }
    this._validatePositions();
    return this;
  }
  /**
   * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
   * @param margin Required margin between the overlay and the viewport edge in pixels.
   */
  withViewportMargin(margin) {
    this._viewportMargin = margin;
    return this;
  }
  /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */
  withFlexibleDimensions(flexibleDimensions = true) {
    this._hasFlexibleDimensions = flexibleDimensions;
    return this;
  }
  /** Sets whether the overlay can grow after the initial open via flexible width/height. */
  withGrowAfterOpen(growAfterOpen = true) {
    this._growAfterOpen = growAfterOpen;
    return this;
  }
  /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */
  withPush(canPush = true) {
    this._canPush = canPush;
    return this;
  }
  /**
   * Sets whether the overlay's position should be locked in after it is positioned
   * initially. When an overlay is locked in, it won't attempt to reposition itself
   * when the position is re-applied (e.g. when the user scrolls away).
   * @param isLocked Whether the overlay should locked in.
   */
  withLockedPosition(isLocked = true) {
    this._positionLocked = isLocked;
    return this;
  }
  /**
   * Sets the origin, relative to which to position the overlay.
   * Using an element origin is useful for building components that need to be positioned
   * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
   * used for cases like contextual menus which open relative to the user's pointer.
   * @param origin Reference to the new origin.
   */
  setOrigin(origin) {
    this._origin = origin;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the x-axis.
   * @param offset New offset in the X axis.
   */
  withDefaultOffsetX(offset) {
    this._offsetX = offset;
    return this;
  }
  /**
   * Sets the default offset for the overlay's connection point on the y-axis.
   * @param offset New offset in the Y axis.
   */
  withDefaultOffsetY(offset) {
    this._offsetY = offset;
    return this;
  }
  /**
   * Configures that the position strategy should set a `transform-origin` on some elements
   * inside the overlay, depending on the current position that is being applied. This is
   * useful for the cases where the origin of an animation can change depending on the
   * alignment of the overlay.
   * @param selector CSS selector that will be used to find the target
   *    elements onto which to set the transform origin.
   */
  withTransformOriginOn(selector) {
    this._transformOriginSelector = selector;
    return this;
  }
  /**
   * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
   */
  _getOriginPoint(originRect, containerRect, pos) {
    let x;
    if (pos.originX == "center") {
      x = originRect.left + originRect.width / 2;
    } else {
      const startX = this._isRtl() ? originRect.right : originRect.left;
      const endX = this._isRtl() ? originRect.left : originRect.right;
      x = pos.originX == "start" ? startX : endX;
    }
    if (containerRect.left < 0) {
      x -= containerRect.left;
    }
    let y2;
    if (pos.originY == "center") {
      y2 = originRect.top + originRect.height / 2;
    } else {
      y2 = pos.originY == "top" ? originRect.top : originRect.bottom;
    }
    if (containerRect.top < 0) {
      y2 -= containerRect.top;
    }
    return {
      x,
      y: y2
    };
  }
  /**
   * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
   * origin point to which the overlay should be connected.
   */
  _getOverlayPoint(originPoint, overlayRect, pos) {
    let overlayStartX;
    if (pos.overlayX == "center") {
      overlayStartX = -overlayRect.width / 2;
    } else if (pos.overlayX === "start") {
      overlayStartX = this._isRtl() ? -overlayRect.width : 0;
    } else {
      overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
    }
    let overlayStartY;
    if (pos.overlayY == "center") {
      overlayStartY = -overlayRect.height / 2;
    } else {
      overlayStartY = pos.overlayY == "top" ? 0 : -overlayRect.height;
    }
    return {
      x: originPoint.x + overlayStartX,
      y: originPoint.y + overlayStartY
    };
  }
  /** Gets how well an overlay at the given point will fit within the viewport. */
  _getOverlayFit(point, rawOverlayRect, viewport, position) {
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    let {
      x,
      y: y2
    } = point;
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      x += offsetX;
    }
    if (offsetY) {
      y2 += offsetY;
    }
    let leftOverflow = 0 - x;
    let rightOverflow = x + overlay.width - viewport.width;
    let topOverflow = 0 - y2;
    let bottomOverflow = y2 + overlay.height - viewport.height;
    let visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);
    let visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);
    let visibleArea = visibleWidth * visibleHeight;
    return {
      visibleArea,
      isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
      fitsInViewportVertically: visibleHeight === overlay.height,
      fitsInViewportHorizontally: visibleWidth == overlay.width
    };
  }
  /**
   * Whether the overlay can fit within the viewport when it may resize either its width or height.
   * @param fit How well the overlay fits in the viewport at some position.
   * @param point The (x, y) coordinates of the overlay at some position.
   * @param viewport The geometry of the viewport.
   */
  _canFitWithFlexibleDimensions(fit, point, viewport) {
    if (this._hasFlexibleDimensions) {
      const availableHeight = viewport.bottom - point.y;
      const availableWidth = viewport.right - point.x;
      const minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
      const minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
      const verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
      const horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
      return verticalFit && horizontalFit;
    }
    return false;
  }
  /**
   * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
   * the viewport, the top-left corner will be pushed on-screen (with overflow occurring on the
   * right and bottom).
   *
   * @param start Starting point from which the overlay is pushed.
   * @param rawOverlayRect Dimensions of the overlay.
   * @param scrollPosition Current viewport scroll position.
   * @returns The point at which to position the overlay after pushing. This is effectively a new
   *     originPoint.
   */
  _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
    if (this._previousPushAmount && this._positionLocked) {
      return {
        x: start.x + this._previousPushAmount.x,
        y: start.y + this._previousPushAmount.y
      };
    }
    const overlay = getRoundedBoundingClientRect(rawOverlayRect);
    const viewport = this._viewportRect;
    const overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
    const overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
    const overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
    const overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0);
    let pushX = 0;
    let pushY = 0;
    if (overlay.width <= viewport.width) {
      pushX = overflowLeft || -overflowRight;
    } else {
      pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
    }
    if (overlay.height <= viewport.height) {
      pushY = overflowTop || -overflowBottom;
    } else {
      pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
    }
    this._previousPushAmount = {
      x: pushX,
      y: pushY
    };
    return {
      x: start.x + pushX,
      y: start.y + pushY
    };
  }
  /**
   * Applies a computed position to the overlay and emits a position change.
   * @param position The position preference
   * @param originPoint The point on the origin element where the overlay is connected.
   */
  _applyPosition(position, originPoint) {
    this._setTransformOrigin(position);
    this._setOverlayElementStyles(originPoint, position);
    this._setBoundingBoxStyles(originPoint, position);
    if (position.panelClass) {
      this._addPanelClasses(position.panelClass);
    }
    if (this._positionChanges.observers.length) {
      const scrollVisibility = this._getScrollVisibility();
      if (position !== this._lastPosition || !this._lastScrollVisibility || !compareScrollVisibility(this._lastScrollVisibility, scrollVisibility)) {
        const changeEvent = new ConnectedOverlayPositionChange(position, scrollVisibility);
        this._positionChanges.next(changeEvent);
      }
      this._lastScrollVisibility = scrollVisibility;
    }
    this._lastPosition = position;
    this._isInitialRender = false;
  }
  /** Sets the transform origin based on the configured selector and the passed-in position.  */
  _setTransformOrigin(position) {
    if (!this._transformOriginSelector) {
      return;
    }
    const elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);
    let xOrigin;
    let yOrigin = position.overlayY;
    if (position.overlayX === "center") {
      xOrigin = "center";
    } else if (this._isRtl()) {
      xOrigin = position.overlayX === "start" ? "right" : "left";
    } else {
      xOrigin = position.overlayX === "start" ? "left" : "right";
    }
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transformOrigin = `${xOrigin} ${yOrigin}`;
    }
  }
  /**
   * Gets the position and size of the overlay's sizing container.
   *
   * This method does no measuring and applies no styles so that we can cheaply compute the
   * bounds for all positions and choose the best fit based on these results.
   */
  _calculateBoundingBoxRect(origin, position) {
    const viewport = this._viewportRect;
    const isRtl = this._isRtl();
    let height, top, bottom;
    if (position.overlayY === "top") {
      top = origin.y;
      height = viewport.height - top + this._viewportMargin;
    } else if (position.overlayY === "bottom") {
      bottom = viewport.height - origin.y + this._viewportMargin * 2;
      height = viewport.height - bottom + this._viewportMargin;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
      const previousHeight = this._lastBoundingBoxSize.height;
      height = smallestDistanceToViewportEdge * 2;
      top = origin.y - smallestDistanceToViewportEdge;
      if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
        top = origin.y - previousHeight / 2;
      }
    }
    const isBoundedByRightViewportEdge = position.overlayX === "start" && !isRtl || position.overlayX === "end" && isRtl;
    const isBoundedByLeftViewportEdge = position.overlayX === "end" && !isRtl || position.overlayX === "start" && isRtl;
    let width, left, right;
    if (isBoundedByLeftViewportEdge) {
      right = viewport.width - origin.x + this._viewportMargin * 2;
      width = origin.x - this._viewportMargin;
    } else if (isBoundedByRightViewportEdge) {
      left = origin.x;
      width = viewport.right - origin.x;
    } else {
      const smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);
      const previousWidth = this._lastBoundingBoxSize.width;
      width = smallestDistanceToViewportEdge * 2;
      left = origin.x - smallestDistanceToViewportEdge;
      if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
        left = origin.x - previousWidth / 2;
      }
    }
    return {
      top,
      left,
      bottom,
      right,
      width,
      height
    };
  }
  /**
   * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
   * origin's connection point and stretches to the bounds of the viewport.
   *
   * @param origin The point on the origin element where the overlay is connected.
   * @param position The position preference
   */
  _setBoundingBoxStyles(origin, position) {
    const boundingBoxRect = this._calculateBoundingBoxRect(origin, position);
    if (!this._isInitialRender && !this._growAfterOpen) {
      boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
      boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
    }
    const styles2 = {};
    if (this._hasExactPosition()) {
      styles2.top = styles2.left = "0";
      styles2.bottom = styles2.right = styles2.maxHeight = styles2.maxWidth = "";
      styles2.width = styles2.height = "100%";
    } else {
      const maxHeight = this._overlayRef.getConfig().maxHeight;
      const maxWidth = this._overlayRef.getConfig().maxWidth;
      styles2.height = coerceCssPixelValue(boundingBoxRect.height);
      styles2.top = coerceCssPixelValue(boundingBoxRect.top);
      styles2.bottom = coerceCssPixelValue(boundingBoxRect.bottom);
      styles2.width = coerceCssPixelValue(boundingBoxRect.width);
      styles2.left = coerceCssPixelValue(boundingBoxRect.left);
      styles2.right = coerceCssPixelValue(boundingBoxRect.right);
      if (position.overlayX === "center") {
        styles2.alignItems = "center";
      } else {
        styles2.alignItems = position.overlayX === "end" ? "flex-end" : "flex-start";
      }
      if (position.overlayY === "center") {
        styles2.justifyContent = "center";
      } else {
        styles2.justifyContent = position.overlayY === "bottom" ? "flex-end" : "flex-start";
      }
      if (maxHeight) {
        styles2.maxHeight = coerceCssPixelValue(maxHeight);
      }
      if (maxWidth) {
        styles2.maxWidth = coerceCssPixelValue(maxWidth);
      }
    }
    this._lastBoundingBoxSize = boundingBoxRect;
    extendStyles(this._boundingBox.style, styles2);
  }
  /** Resets the styles for the bounding box so that a new positioning can be computed. */
  _resetBoundingBoxStyles() {
    extendStyles(this._boundingBox.style, {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      height: "",
      width: "",
      alignItems: "",
      justifyContent: ""
    });
  }
  /** Resets the styles for the overlay pane so that a new positioning can be computed. */
  _resetOverlayElementStyles() {
    extendStyles(this._pane.style, {
      top: "",
      left: "",
      bottom: "",
      right: "",
      position: "",
      transform: ""
    });
  }
  /** Sets positioning styles to the overlay element. */
  _setOverlayElementStyles(originPoint, position) {
    const styles2 = {};
    const hasExactPosition = this._hasExactPosition();
    const hasFlexibleDimensions = this._hasFlexibleDimensions;
    const config3 = this._overlayRef.getConfig();
    if (hasExactPosition) {
      const scrollPosition = this._viewportRuler.getViewportScrollPosition();
      extendStyles(styles2, this._getExactOverlayY(position, originPoint, scrollPosition));
      extendStyles(styles2, this._getExactOverlayX(position, originPoint, scrollPosition));
    } else {
      styles2.position = "static";
    }
    let transformString = "";
    let offsetX = this._getOffset(position, "x");
    let offsetY = this._getOffset(position, "y");
    if (offsetX) {
      transformString += `translateX(${offsetX}px) `;
    }
    if (offsetY) {
      transformString += `translateY(${offsetY}px)`;
    }
    styles2.transform = transformString.trim();
    if (config3.maxHeight) {
      if (hasExactPosition) {
        styles2.maxHeight = coerceCssPixelValue(config3.maxHeight);
      } else if (hasFlexibleDimensions) {
        styles2.maxHeight = "";
      }
    }
    if (config3.maxWidth) {
      if (hasExactPosition) {
        styles2.maxWidth = coerceCssPixelValue(config3.maxWidth);
      } else if (hasFlexibleDimensions) {
        styles2.maxWidth = "";
      }
    }
    extendStyles(this._pane.style, styles2);
  }
  /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayY(position, originPoint, scrollPosition) {
    let styles2 = {
      top: "",
      bottom: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    if (position.overlayY === "bottom") {
      const documentHeight = this._document.documentElement.clientHeight;
      styles2.bottom = `${documentHeight - (overlayPoint.y + this._overlayRect.height)}px`;
    } else {
      styles2.top = coerceCssPixelValue(overlayPoint.y);
    }
    return styles2;
  }
  /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */
  _getExactOverlayX(position, originPoint, scrollPosition) {
    let styles2 = {
      left: "",
      right: ""
    };
    let overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);
    if (this._isPushed) {
      overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
    }
    let horizontalStyleProperty;
    if (this._isRtl()) {
      horizontalStyleProperty = position.overlayX === "end" ? "left" : "right";
    } else {
      horizontalStyleProperty = position.overlayX === "end" ? "right" : "left";
    }
    if (horizontalStyleProperty === "right") {
      const documentWidth = this._document.documentElement.clientWidth;
      styles2.right = `${documentWidth - (overlayPoint.x + this._overlayRect.width)}px`;
    } else {
      styles2.left = coerceCssPixelValue(overlayPoint.x);
    }
    return styles2;
  }
  /**
   * Gets the view properties of the trigger and overlay, including whether they are clipped
   * or completely outside the view of any of the strategy's scrollables.
   */
  _getScrollVisibility() {
    const originBounds = this._getOriginRect();
    const overlayBounds = this._pane.getBoundingClientRect();
    const scrollContainerBounds = this._scrollables.map((scrollable) => {
      return scrollable.getElementRef().nativeElement.getBoundingClientRect();
    });
    return {
      isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
      isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
      isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
      isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
    };
  }
  /** Subtracts the amount that an element is overflowing on an axis from its length. */
  _subtractOverflows(length, ...overflows) {
    return overflows.reduce((currentValue, currentOverflow) => {
      return currentValue - Math.max(currentOverflow, 0);
    }, length);
  }
  /** Narrows the given viewport rect by the current _viewportMargin. */
  _getNarrowedViewportRect() {
    const width = this._document.documentElement.clientWidth;
    const height = this._document.documentElement.clientHeight;
    const scrollPosition = this._viewportRuler.getViewportScrollPosition();
    return {
      top: scrollPosition.top + this._viewportMargin,
      left: scrollPosition.left + this._viewportMargin,
      right: scrollPosition.left + width - this._viewportMargin,
      bottom: scrollPosition.top + height - this._viewportMargin,
      width: width - 2 * this._viewportMargin,
      height: height - 2 * this._viewportMargin
    };
  }
  /** Whether the we're dealing with an RTL context */
  _isRtl() {
    return this._overlayRef.getDirection() === "rtl";
  }
  /** Determines whether the overlay uses exact or flexible positioning. */
  _hasExactPosition() {
    return !this._hasFlexibleDimensions || this._isPushed;
  }
  /** Retrieves the offset of a position along the x or y axis. */
  _getOffset(position, axis) {
    if (axis === "x") {
      return position.offsetX == null ? this._offsetX : position.offsetX;
    }
    return position.offsetY == null ? this._offsetY : position.offsetY;
  }
  /** Validates that the current position match the expected values. */
  _validatePositions() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!this._preferredPositions.length) {
        throw Error("FlexibleConnectedPositionStrategy: At least one position is required.");
      }
      this._preferredPositions.forEach((pair) => {
        validateHorizontalPosition("originX", pair.originX);
        validateVerticalPosition("originY", pair.originY);
        validateHorizontalPosition("overlayX", pair.overlayX);
        validateVerticalPosition("overlayY", pair.overlayY);
      });
    }
  }
  /** Adds a single CSS class or an array of classes on the overlay panel. */
  _addPanelClasses(cssClasses) {
    if (this._pane) {
      coerceArray(cssClasses).forEach((cssClass) => {
        if (cssClass !== "" && this._appliedPanelClasses.indexOf(cssClass) === -1) {
          this._appliedPanelClasses.push(cssClass);
          this._pane.classList.add(cssClass);
        }
      });
    }
  }
  /** Clears the classes that the position strategy has applied from the overlay panel. */
  _clearPanelClasses() {
    if (this._pane) {
      this._appliedPanelClasses.forEach((cssClass) => {
        this._pane.classList.remove(cssClass);
      });
      this._appliedPanelClasses = [];
    }
  }
  /** Returns the DOMRect of the current origin. */
  _getOriginRect() {
    const origin = this._origin;
    if (origin instanceof ElementRef) {
      return origin.nativeElement.getBoundingClientRect();
    }
    if (origin instanceof Element) {
      return origin.getBoundingClientRect();
    }
    const width = origin.width || 0;
    const height = origin.height || 0;
    return {
      top: origin.y,
      bottom: origin.y + height,
      left: origin.x,
      right: origin.x + width,
      height,
      width
    };
  }
};
function extendStyles(destination, source) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
}
function getPixelValue(input) {
  if (typeof input !== "number" && input != null) {
    const [value, units] = input.split(cssUnitPattern);
    return !units || units === "px" ? parseFloat(value) : null;
  }
  return input || null;
}
function getRoundedBoundingClientRect(clientRect) {
  return {
    top: Math.floor(clientRect.top),
    right: Math.floor(clientRect.right),
    bottom: Math.floor(clientRect.bottom),
    left: Math.floor(clientRect.left),
    width: Math.floor(clientRect.width),
    height: Math.floor(clientRect.height)
  };
}
function compareScrollVisibility(a2, b) {
  if (a2 === b) {
    return true;
  }
  return a2.isOriginClipped === b.isOriginClipped && a2.isOriginOutsideView === b.isOriginOutsideView && a2.isOverlayClipped === b.isOverlayClipped && a2.isOverlayOutsideView === b.isOverlayOutsideView;
}
var wrapperClass = "cdk-global-overlay-wrapper";
var GlobalPositionStrategy = class {
  constructor() {
    this._cssPosition = "static";
    this._topOffset = "";
    this._bottomOffset = "";
    this._alignItems = "";
    this._xPosition = "";
    this._xOffset = "";
    this._width = "";
    this._height = "";
    this._isDisposed = false;
  }
  attach(overlayRef) {
    const config3 = overlayRef.getConfig();
    this._overlayRef = overlayRef;
    if (this._width && !config3.width) {
      overlayRef.updateSize({
        width: this._width
      });
    }
    if (this._height && !config3.height) {
      overlayRef.updateSize({
        height: this._height
      });
    }
    overlayRef.hostElement.classList.add(wrapperClass);
    this._isDisposed = false;
  }
  /**
   * Sets the top position of the overlay. Clears any previously set vertical position.
   * @param value New top offset.
   */
  top(value = "") {
    this._bottomOffset = "";
    this._topOffset = value;
    this._alignItems = "flex-start";
    return this;
  }
  /**
   * Sets the left position of the overlay. Clears any previously set horizontal position.
   * @param value New left offset.
   */
  left(value = "") {
    this._xOffset = value;
    this._xPosition = "left";
    return this;
  }
  /**
   * Sets the bottom position of the overlay. Clears any previously set vertical position.
   * @param value New bottom offset.
   */
  bottom(value = "") {
    this._topOffset = "";
    this._bottomOffset = value;
    this._alignItems = "flex-end";
    return this;
  }
  /**
   * Sets the right position of the overlay. Clears any previously set horizontal position.
   * @param value New right offset.
   */
  right(value = "") {
    this._xOffset = value;
    this._xPosition = "right";
    return this;
  }
  /**
   * Sets the overlay to the start of the viewport, depending on the overlay direction.
   * This will be to the left in LTR layouts and to the right in RTL.
   * @param offset Offset from the edge of the screen.
   */
  start(value = "") {
    this._xOffset = value;
    this._xPosition = "start";
    return this;
  }
  /**
   * Sets the overlay to the end of the viewport, depending on the overlay direction.
   * This will be to the right in LTR layouts and to the left in RTL.
   * @param offset Offset from the edge of the screen.
   */
  end(value = "") {
    this._xOffset = value;
    this._xPosition = "end";
    return this;
  }
  /**
   * Sets the overlay width and clears any previously set width.
   * @param value New width for the overlay
   * @deprecated Pass the `width` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  width(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        width: value
      });
    } else {
      this._width = value;
    }
    return this;
  }
  /**
   * Sets the overlay height and clears any previously set height.
   * @param value New height for the overlay
   * @deprecated Pass the `height` through the `OverlayConfig`.
   * @breaking-change 8.0.0
   */
  height(value = "") {
    if (this._overlayRef) {
      this._overlayRef.updateSize({
        height: value
      });
    } else {
      this._height = value;
    }
    return this;
  }
  /**
   * Centers the overlay horizontally with an optional offset.
   * Clears any previously set horizontal position.
   *
   * @param offset Overlay offset from the horizontal center.
   */
  centerHorizontally(offset = "") {
    this.left(offset);
    this._xPosition = "center";
    return this;
  }
  /**
   * Centers the overlay vertically with an optional offset.
   * Clears any previously set vertical position.
   *
   * @param offset Overlay offset from the vertical center.
   */
  centerVertically(offset = "") {
    this.top(offset);
    this._alignItems = "center";
    return this;
  }
  /**
   * Apply the position to the element.
   * @docs-private
   */
  apply() {
    if (!this._overlayRef || !this._overlayRef.hasAttached()) {
      return;
    }
    const styles2 = this._overlayRef.overlayElement.style;
    const parentStyles = this._overlayRef.hostElement.style;
    const config3 = this._overlayRef.getConfig();
    const {
      width,
      height,
      maxWidth,
      maxHeight
    } = config3;
    const shouldBeFlushHorizontally = (width === "100%" || width === "100vw") && (!maxWidth || maxWidth === "100%" || maxWidth === "100vw");
    const shouldBeFlushVertically = (height === "100%" || height === "100vh") && (!maxHeight || maxHeight === "100%" || maxHeight === "100vh");
    const xPosition = this._xPosition;
    const xOffset = this._xOffset;
    const isRtl = this._overlayRef.getConfig().direction === "rtl";
    let marginLeft = "";
    let marginRight = "";
    let justifyContent = "";
    if (shouldBeFlushHorizontally) {
      justifyContent = "flex-start";
    } else if (xPosition === "center") {
      justifyContent = "center";
      if (isRtl) {
        marginRight = xOffset;
      } else {
        marginLeft = xOffset;
      }
    } else if (isRtl) {
      if (xPosition === "left" || xPosition === "end") {
        justifyContent = "flex-end";
        marginLeft = xOffset;
      } else if (xPosition === "right" || xPosition === "start") {
        justifyContent = "flex-start";
        marginRight = xOffset;
      }
    } else if (xPosition === "left" || xPosition === "start") {
      justifyContent = "flex-start";
      marginLeft = xOffset;
    } else if (xPosition === "right" || xPosition === "end") {
      justifyContent = "flex-end";
      marginRight = xOffset;
    }
    styles2.position = this._cssPosition;
    styles2.marginLeft = shouldBeFlushHorizontally ? "0" : marginLeft;
    styles2.marginTop = shouldBeFlushVertically ? "0" : this._topOffset;
    styles2.marginBottom = this._bottomOffset;
    styles2.marginRight = shouldBeFlushHorizontally ? "0" : marginRight;
    parentStyles.justifyContent = justifyContent;
    parentStyles.alignItems = shouldBeFlushVertically ? "flex-start" : this._alignItems;
  }
  /**
   * Cleans up the DOM changes from the position strategy.
   * @docs-private
   */
  dispose() {
    if (this._isDisposed || !this._overlayRef) {
      return;
    }
    const styles2 = this._overlayRef.overlayElement.style;
    const parent = this._overlayRef.hostElement;
    const parentStyles = parent.style;
    parent.classList.remove(wrapperClass);
    parentStyles.justifyContent = parentStyles.alignItems = styles2.marginTop = styles2.marginBottom = styles2.marginLeft = styles2.marginRight = styles2.position = "";
    this._overlayRef = null;
    this._isDisposed = true;
  }
};
var OverlayPositionBuilder = class _OverlayPositionBuilder {
  constructor(_viewportRuler, _document, _platform, _overlayContainer) {
    this._viewportRuler = _viewportRuler;
    this._document = _document;
    this._platform = _platform;
    this._overlayContainer = _overlayContainer;
  }
  /**
   * Creates a global position strategy.
   */
  global() {
    return new GlobalPositionStrategy();
  }
  /**
   * Creates a flexible position strategy.
   * @param origin Origin relative to which to position the overlay.
   */
  flexibleConnectedTo(origin) {
    return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
  }
  static {
    this.\u0275fac = function OverlayPositionBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverlayPositionBuilder)(\u0275\u0275inject(ViewportRuler), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform), \u0275\u0275inject(OverlayContainer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _OverlayPositionBuilder,
      factory: _OverlayPositionBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayPositionBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ViewportRuler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: OverlayContainer
  }], null);
})();
var nextUniqueId = 0;
var Overlay = class _Overlay {
  constructor(scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location, _outsideClickDispatcher, _animationsModuleType) {
    this.scrollStrategies = scrollStrategies;
    this._overlayContainer = _overlayContainer;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._positionBuilder = _positionBuilder;
    this._keyboardDispatcher = _keyboardDispatcher;
    this._injector = _injector;
    this._ngZone = _ngZone;
    this._document = _document;
    this._directionality = _directionality;
    this._location = _location;
    this._outsideClickDispatcher = _outsideClickDispatcher;
    this._animationsModuleType = _animationsModuleType;
  }
  /**
   * Creates an overlay.
   * @param config Configuration applied to the overlay.
   * @returns Reference to the created overlay.
   */
  create(config3) {
    const host = this._createHostElement();
    const pane = this._createPaneElement(host);
    const portalOutlet = this._createPortalOutlet(pane);
    const overlayConfig = new OverlayConfig(config3);
    overlayConfig.direction = overlayConfig.direction || this._directionality.value;
    return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, this._animationsModuleType === "NoopAnimations", this._injector.get(EnvironmentInjector));
  }
  /**
   * Gets a position builder that can be used, via fluent API,
   * to construct and configure a position strategy.
   * @returns An overlay position builder.
   */
  position() {
    return this._positionBuilder;
  }
  /**
   * Creates the DOM element for an overlay and appends it to the overlay container.
   * @returns Newly-created pane element
   */
  _createPaneElement(host) {
    const pane = this._document.createElement("div");
    pane.id = `cdk-overlay-${nextUniqueId++}`;
    pane.classList.add("cdk-overlay-pane");
    host.appendChild(pane);
    return pane;
  }
  /**
   * Creates the host element that wraps around an overlay
   * and can be used for advanced positioning.
   * @returns Newly-create host element.
   */
  _createHostElement() {
    const host = this._document.createElement("div");
    this._overlayContainer.getContainerElement().appendChild(host);
    return host;
  }
  /**
   * Create a DomPortalOutlet into which the overlay content can be loaded.
   * @param pane The DOM element to turn into a portal outlet.
   * @returns A portal outlet for the given DOM element.
   */
  _createPortalOutlet(pane) {
    if (!this._appRef) {
      this._appRef = this._injector.get(ApplicationRef);
    }
    return new DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
  }
  static {
    this.\u0275fac = function Overlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Overlay)(\u0275\u0275inject(ScrollStrategyOptions), \u0275\u0275inject(OverlayContainer), \u0275\u0275inject(ComponentFactoryResolver$1), \u0275\u0275inject(OverlayPositionBuilder), \u0275\u0275inject(OverlayKeyboardDispatcher), \u0275\u0275inject(Injector), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Directionality), \u0275\u0275inject(Location), \u0275\u0275inject(OverlayOutsideClickDispatcher), \u0275\u0275inject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Overlay,
      factory: _Overlay.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ScrollStrategyOptions
  }, {
    type: OverlayContainer
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: OverlayPositionBuilder
  }, {
    type: OverlayKeyboardDispatcher
  }, {
    type: Injector
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Directionality
  }, {
    type: Location
  }, {
    type: OverlayOutsideClickDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }, {
      type: Optional
    }]
  }], null);
})();
var defaultPositionList = [{
  originX: "start",
  originY: "bottom",
  overlayX: "start",
  overlayY: "top"
}, {
  originX: "start",
  originY: "top",
  overlayX: "start",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "top",
  overlayX: "end",
  overlayY: "bottom"
}, {
  originX: "end",
  originY: "bottom",
  overlayX: "end",
  overlayY: "top"
}];
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new InjectionToken("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
var CdkOverlayOrigin = class _CdkOverlayOrigin {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  static {
    this.\u0275fac = function CdkOverlayOrigin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkOverlayOrigin)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkOverlayOrigin, [{
    type: Directive,
    args: [{
      selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]",
      exportAs: "cdkOverlayOrigin",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var CdkConnectedOverlay = class _CdkConnectedOverlay {
  /** The offset in pixels for the overlay connection point on the x-axis */
  get offsetX() {
    return this._offsetX;
  }
  set offsetX(offsetX) {
    this._offsetX = offsetX;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** The offset in pixels for the overlay connection point on the y-axis */
  get offsetY() {
    return this._offsetY;
  }
  set offsetY(offsetY) {
    this._offsetY = offsetY;
    if (this._position) {
      this._updatePositionStrategy(this._position);
    }
  }
  /** Whether the overlay should be disposed of when the user goes backwards/forwards in history. */
  get disposeOnNavigation() {
    return this._disposeOnNavigation;
  }
  set disposeOnNavigation(value) {
    this._disposeOnNavigation = value;
  }
  // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
  constructor(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
    this._overlay = _overlay;
    this._dir = _dir;
    this._backdropSubscription = Subscription.EMPTY;
    this._attachSubscription = Subscription.EMPTY;
    this._detachSubscription = Subscription.EMPTY;
    this._positionSubscription = Subscription.EMPTY;
    this._disposeOnNavigation = false;
    this._ngZone = inject(NgZone);
    this.viewportMargin = 0;
    this.open = false;
    this.disableClose = false;
    this.hasBackdrop = false;
    this.lockPosition = false;
    this.flexibleDimensions = false;
    this.growAfterOpen = false;
    this.push = false;
    this.backdropClick = new EventEmitter();
    this.positionChange = new EventEmitter();
    this.attach = new EventEmitter();
    this.detach = new EventEmitter();
    this.overlayKeydown = new EventEmitter();
    this.overlayOutsideClick = new EventEmitter();
    this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    this._scrollStrategyFactory = scrollStrategyFactory;
    this.scrollStrategy = this._scrollStrategyFactory();
  }
  /** The associated overlay reference. */
  get overlayRef() {
    return this._overlayRef;
  }
  /** The element's layout direction. */
  get dir() {
    return this._dir ? this._dir.value : "ltr";
  }
  ngOnDestroy() {
    this._attachSubscription.unsubscribe();
    this._detachSubscription.unsubscribe();
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }
  ngOnChanges(changes) {
    if (this._position) {
      this._updatePositionStrategy(this._position);
      this._overlayRef.updateSize({
        width: this.width,
        minWidth: this.minWidth,
        height: this.height,
        minHeight: this.minHeight
      });
      if (changes["origin"] && this.open) {
        this._position.apply();
      }
    }
    if (changes["open"]) {
      this.open ? this._attachOverlay() : this._detachOverlay();
    }
  }
  /** Creates an overlay */
  _createOverlay() {
    if (!this.positions || !this.positions.length) {
      this.positions = defaultPositionList;
    }
    const overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());
    this._attachSubscription = overlayRef.attachments().subscribe(() => this.attach.emit());
    this._detachSubscription = overlayRef.detachments().subscribe(() => this.detach.emit());
    overlayRef.keydownEvents().subscribe((event) => {
      this.overlayKeydown.next(event);
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this._detachOverlay();
      }
    });
    this._overlayRef.outsidePointerEvents().subscribe((event) => {
      const origin = this._getOriginElement();
      const target = _getEventTarget(event);
      if (!origin || origin !== target && !origin.contains(target)) {
        this.overlayOutsideClick.next(event);
      }
    });
  }
  /** Builds the overlay config based on the directive's inputs */
  _buildConfig() {
    const positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();
    const overlayConfig = new OverlayConfig({
      direction: this._dir,
      positionStrategy,
      scrollStrategy: this.scrollStrategy,
      hasBackdrop: this.hasBackdrop,
      disposeOnNavigation: this.disposeOnNavigation
    });
    if (this.width || this.width === 0) {
      overlayConfig.width = this.width;
    }
    if (this.height || this.height === 0) {
      overlayConfig.height = this.height;
    }
    if (this.minWidth || this.minWidth === 0) {
      overlayConfig.minWidth = this.minWidth;
    }
    if (this.minHeight || this.minHeight === 0) {
      overlayConfig.minHeight = this.minHeight;
    }
    if (this.backdropClass) {
      overlayConfig.backdropClass = this.backdropClass;
    }
    if (this.panelClass) {
      overlayConfig.panelClass = this.panelClass;
    }
    return overlayConfig;
  }
  /** Updates the state of a position strategy, based on the values of the directive inputs. */
  _updatePositionStrategy(positionStrategy) {
    const positions = this.positions.map((currentPosition) => ({
      originX: currentPosition.originX,
      originY: currentPosition.originY,
      overlayX: currentPosition.overlayX,
      overlayY: currentPosition.overlayY,
      offsetX: currentPosition.offsetX || this.offsetX,
      offsetY: currentPosition.offsetY || this.offsetY,
      panelClass: currentPosition.panelClass || void 0
    }));
    return positionStrategy.setOrigin(this._getOrigin()).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
  }
  /** Returns the position strategy of the overlay to be set on the overlay config */
  _createPositionStrategy() {
    const strategy = this._overlay.position().flexibleConnectedTo(this._getOrigin());
    this._updatePositionStrategy(strategy);
    return strategy;
  }
  _getOrigin() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef;
    } else {
      return this.origin;
    }
  }
  _getOriginElement() {
    if (this.origin instanceof CdkOverlayOrigin) {
      return this.origin.elementRef.nativeElement;
    }
    if (this.origin instanceof ElementRef) {
      return this.origin.nativeElement;
    }
    if (typeof Element !== "undefined" && this.origin instanceof Element) {
      return this.origin;
    }
    return null;
  }
  /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
  _attachOverlay() {
    if (!this._overlayRef) {
      this._createOverlay();
    } else {
      this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
    }
    if (!this._overlayRef.hasAttached()) {
      this._overlayRef.attach(this._templatePortal);
    }
    if (this.hasBackdrop) {
      this._backdropSubscription = this._overlayRef.backdropClick().subscribe((event) => {
        this.backdropClick.emit(event);
      });
    } else {
      this._backdropSubscription.unsubscribe();
    }
    this._positionSubscription.unsubscribe();
    if (this.positionChange.observers.length > 0) {
      this._positionSubscription = this._position.positionChanges.pipe(takeWhile(() => this.positionChange.observers.length > 0)).subscribe((position) => {
        this._ngZone.run(() => this.positionChange.emit(position));
        if (this.positionChange.observers.length === 0) {
          this._positionSubscription.unsubscribe();
        }
      });
    }
  }
  /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
  _detachOverlay() {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
    this._backdropSubscription.unsubscribe();
    this._positionSubscription.unsubscribe();
  }
  static {
    this.\u0275fac = function CdkConnectedOverlay_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkConnectedOverlay)(\u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        origin: [0, "cdkConnectedOverlayOrigin", "origin"],
        positions: [0, "cdkConnectedOverlayPositions", "positions"],
        positionStrategy: [0, "cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        offsetX: [0, "cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: [0, "cdkConnectedOverlayOffsetY", "offsetY"],
        width: [0, "cdkConnectedOverlayWidth", "width"],
        height: [0, "cdkConnectedOverlayHeight", "height"],
        minWidth: [0, "cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: [0, "cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: [0, "cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: [0, "cdkConnectedOverlayPanelClass", "panelClass"],
        viewportMargin: [0, "cdkConnectedOverlayViewportMargin", "viewportMargin"],
        scrollStrategy: [0, "cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        open: [0, "cdkConnectedOverlayOpen", "open"],
        disableClose: [0, "cdkConnectedOverlayDisableClose", "disableClose"],
        transformOriginSelector: [0, "cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
        hasBackdrop: [2, "cdkConnectedOverlayHasBackdrop", "hasBackdrop", booleanAttribute],
        lockPosition: [2, "cdkConnectedOverlayLockPosition", "lockPosition", booleanAttribute],
        flexibleDimensions: [2, "cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions", booleanAttribute],
        growAfterOpen: [2, "cdkConnectedOverlayGrowAfterOpen", "growAfterOpen", booleanAttribute],
        push: [2, "cdkConnectedOverlayPush", "push", booleanAttribute],
        disposeOnNavigation: [2, "cdkConnectedOverlayDisposeOnNavigation", "disposeOnNavigation", booleanAttribute]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown",
        overlayOutsideClick: "overlayOutsideClick"
      },
      exportAs: ["cdkConnectedOverlay"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkConnectedOverlay, [{
    type: Directive,
    args: [{
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      exportAs: "cdkConnectedOverlay",
      standalone: true
    }]
  }], () => [{
    type: Overlay
  }, {
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    origin: [{
      type: Input,
      args: ["cdkConnectedOverlayOrigin"]
    }],
    positions: [{
      type: Input,
      args: ["cdkConnectedOverlayPositions"]
    }],
    positionStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayPositionStrategy"]
    }],
    offsetX: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetX"]
    }],
    offsetY: [{
      type: Input,
      args: ["cdkConnectedOverlayOffsetY"]
    }],
    width: [{
      type: Input,
      args: ["cdkConnectedOverlayWidth"]
    }],
    height: [{
      type: Input,
      args: ["cdkConnectedOverlayHeight"]
    }],
    minWidth: [{
      type: Input,
      args: ["cdkConnectedOverlayMinWidth"]
    }],
    minHeight: [{
      type: Input,
      args: ["cdkConnectedOverlayMinHeight"]
    }],
    backdropClass: [{
      type: Input,
      args: ["cdkConnectedOverlayBackdropClass"]
    }],
    panelClass: [{
      type: Input,
      args: ["cdkConnectedOverlayPanelClass"]
    }],
    viewportMargin: [{
      type: Input,
      args: ["cdkConnectedOverlayViewportMargin"]
    }],
    scrollStrategy: [{
      type: Input,
      args: ["cdkConnectedOverlayScrollStrategy"]
    }],
    open: [{
      type: Input,
      args: ["cdkConnectedOverlayOpen"]
    }],
    disableClose: [{
      type: Input,
      args: ["cdkConnectedOverlayDisableClose"]
    }],
    transformOriginSelector: [{
      type: Input,
      args: ["cdkConnectedOverlayTransformOriginOn"]
    }],
    hasBackdrop: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayHasBackdrop",
        transform: booleanAttribute
      }]
    }],
    lockPosition: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayLockPosition",
        transform: booleanAttribute
      }]
    }],
    flexibleDimensions: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayFlexibleDimensions",
        transform: booleanAttribute
      }]
    }],
    growAfterOpen: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayGrowAfterOpen",
        transform: booleanAttribute
      }]
    }],
    push: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayPush",
        transform: booleanAttribute
      }]
    }],
    disposeOnNavigation: [{
      type: Input,
      args: [{
        alias: "cdkConnectedOverlayDisposeOnNavigation",
        transform: booleanAttribute
      }]
    }],
    backdropClick: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    attach: [{
      type: Output
    }],
    detach: [{
      type: Output
    }],
    overlayKeydown: [{
      type: Output
    }],
    overlayOutsideClick: [{
      type: Output
    }]
  });
})();
function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
  provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
  deps: [Overlay],
  useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
};
var OverlayModule = class _OverlayModule {
  static {
    this.\u0275fac = function OverlayModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverlayModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _OverlayModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [BidiModule, PortalModule, ScrollingModule, ScrollingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule, PortalModule, ScrollingModule, CdkConnectedOverlay, CdkOverlayOrigin],
      exports: [CdkConnectedOverlay, CdkOverlayOrigin, ScrollingModule],
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
var FullscreenOverlayContainer = class _FullscreenOverlayContainer extends OverlayContainer {
  constructor(_document, platform) {
    super(_document, platform);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._fullScreenEventName && this._fullScreenListener) {
      this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
    }
  }
  _createContainer() {
    super._createContainer();
    this._adjustParentForFullscreenChange();
    this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange());
  }
  _adjustParentForFullscreenChange() {
    if (!this._containerElement) {
      return;
    }
    const fullscreenElement = this.getFullscreenElement();
    const parent = fullscreenElement || this._document.body;
    parent.appendChild(this._containerElement);
  }
  _addFullscreenChangeListener(fn) {
    const eventName = this._getEventName();
    if (eventName) {
      if (this._fullScreenListener) {
        this._document.removeEventListener(eventName, this._fullScreenListener);
      }
      this._document.addEventListener(eventName, fn);
      this._fullScreenListener = fn;
    }
  }
  _getEventName() {
    if (!this._fullScreenEventName) {
      const _document = this._document;
      if (_document.fullscreenEnabled) {
        this._fullScreenEventName = "fullscreenchange";
      } else if (_document.webkitFullscreenEnabled) {
        this._fullScreenEventName = "webkitfullscreenchange";
      } else if (_document.mozFullScreenEnabled) {
        this._fullScreenEventName = "mozfullscreenchange";
      } else if (_document.msFullscreenEnabled) {
        this._fullScreenEventName = "MSFullscreenChange";
      }
    }
    return this._fullScreenEventName;
  }
  /**
   * When the page is put into fullscreen mode, a specific element is specified.
   * Only that element and its children are visible when in fullscreen mode.
   */
  getFullscreenElement() {
    const _document = this._document;
    return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
  }
  static {
    this.\u0275fac = function FullscreenOverlayContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenOverlayContainer)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FullscreenOverlayContainer,
      factory: _FullscreenOverlayContainer.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullscreenOverlayContainer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();

// node_modules/@angular/cdk/fesm2022/coercion/private.mjs
function coerceObservable(data) {
  if (!isObservable(data)) {
    return of(data);
  }
  return data;
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
  static {
    this.\u0275fac = function MutationObserverFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MutationObserverFactory)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MutationObserverFactory,
      factory: _MutationObserverFactory.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
    this._ngZone = inject(NgZone);
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
  static {
    this.\u0275fac = function ContentObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentObserver)(\u0275\u0275inject(MutationObserverFactory));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ContentObserver,
      factory: _ContentObserver.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
var CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static {
    this.\u0275fac = function CdkObserveContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkObserveContent)(\u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkObserveContent,
      selectors: [["", "cdkObserveContent", ""]],
      inputs: {
        disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
        debounce: "debounce"
      },
      outputs: {
        event: "cdkObserveContent"
      },
      exportAs: ["cdkObserveContent"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var ObserversModule = class _ObserversModule {
  static {
    this.\u0275fac = function ObserversModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ObserversModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ObserversModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MutationObserverFactory]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule = class _LayoutModule {
  static {
    this.\u0275fac = function LayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LayoutModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _LayoutModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var MediaMatcher = class _MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query2) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query2, this._nonce);
    }
    return this._matchMedia(query2);
  }
  static {
    this.\u0275fac = function MediaMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaMatcher)(\u0275\u0275inject(Platform), \u0275\u0275inject(CSP_NONCE, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MediaMatcher,
      factory: _MediaMatcher.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
function createEmptyStyleRule(query2, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query2)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query2} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query2);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query2) {
  return {
    matches: query2 === "all" || query2 === "",
    media: query2,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var BreakpointObserver = class _BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    this._queries = /* @__PURE__ */ new Map();
    this._destroySubject = new Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query2) => this._registerQuery(query2).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query: query2
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query2] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query2) {
    if (this._queries.has(query2)) {
      return this._queries.get(query2);
    }
    const mql = this._mediaMatcher.matchMedia(query2);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query: query2,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query2, output);
    return output;
  }
  static {
    this.\u0275fac = function BreakpointObserver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BreakpointObserver)(\u0275\u0275inject(MediaMatcher), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BreakpointObserver,
      factory: _BreakpointObserver.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MediaMatcher
  }, {
    type: NgZone
  }], null);
})();
function splitQueries(queries) {
  return queries.map((query2) => query2.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query2) => query2.trim());
}

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var AriaDescriber = class _AriaDescriber {
  constructor(_document, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId++}`;
    this._document = _document;
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
  static {
    this.\u0275fac = function AriaDescriber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AriaDescriber)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AriaDescriber,
      factory: _AriaDescriber.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
var Typeahead = class {
  constructor(initialItems, config3) {
    this._letterKeyStream = new Subject();
    this._items = [];
    this._selectedItemIndex = -1;
    this._pressedLetters = [];
    this._selectedItem = new Subject();
    this.selectedItem = this._selectedItem;
    const typeAheadInterval = typeof config3?.debounceInterval === "number" ? config3.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config3?.skipPredicate) {
      this._skipPredicateFn = config3.skipPredicate;
    }
    if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
      throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Resets the currently stored sequence of typed letters. */
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
};
var TreeKeyManager = class {
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i = 0; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
        activeIndex = i;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  /**
   *
   * @param items List of TreeKeyManager options. Can be synchronous or asynchronous.
   * @param config Optional configuration options. By default, use 'ltr' horizontal orientation. By
   * default, do not skip any nodes. By default, key manager only calls `focus` method when items
   * are focused and does not call `activate`. If `typeaheadDefaultInterval` is `true`, use a
   * default interval of 200ms.
   */
  constructor(items, config3) {
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._shouldActivationFollowFocus = false;
    this._horizontalOrientation = "ltr";
    this._skipPredicateFn = (_item) => false;
    this._trackByFn = (item) => item;
    this._items = [];
    this._typeaheadSubscription = Subscription.EMPTY;
    this._hasInitialFocused = false;
    this.change = new Subject();
    if (items instanceof QueryList) {
      this._items = items.toArray();
      items.changes.subscribe((newItems) => {
        this._items = newItems.toArray();
        this._typeahead?.setItems(this._items);
        this._updateActiveItemIndex(this._items);
        this._initializeFocus();
      });
    } else if (isObservable(items)) {
      items.subscribe((newItems) => {
        this._items = newItems;
        this._typeahead?.setItems(newItems);
        this._updateActiveItemIndex(newItems);
        this._initializeFocus();
      });
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config3.shouldActivationFollowFocus === "boolean") {
      this._shouldActivationFollowFocus = config3.shouldActivationFollowFocus;
    }
    if (config3.horizontalOrientation) {
      this._horizontalOrientation = config3.horizontalOrientation;
    }
    if (config3.skipPredicate) {
      this._skipPredicateFn = config3.skipPredicate;
    }
    if (config3.trackBy) {
      this._trackByFn = config3.trackBy;
    }
    if (typeof config3.typeAheadDebounceInterval !== "undefined") {
      this._setTypeAhead(config3.typeAheadDebounceInterval);
    }
  }
  /** Cleans up the key manager. */
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  /**
   * Handles a keyboard event on the tree.
   * @param event Keyboard event that represents the user interaction with the tree.
   */
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case "Tab":
        return;
      case "ArrowDown":
        this._focusNextItem();
        break;
      case "ArrowUp":
        this._focusPreviousItem();
        break;
      case "ArrowRight":
        this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case "ArrowLeft":
        this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case "Home":
        this._focusFirstItem();
        break;
      case "End":
        this._focusLastItem();
        break;
      case "Enter":
      case " ":
        this._activateCurrentItem();
        break;
      default:
        if (event.key === "*") {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  /** Index of the currently active item. */
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  /** The currently active item. */
  getActiveItem() {
    return this._activeItem;
  }
  /** Focus the first available item. */
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  /** Focus the last available item. */
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  /** Focus the next available item. */
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  /** Focus the previous available item. */
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === "number" ? itemOrIndex : this._items.findIndex((item) => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex((item) => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new Typeahead(this._items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i = startingIndex + 1; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i = startingIndex - 1; i >= 0; i--) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  /**
   * If the item is already expanded, we collapse the item. Otherwise, we will focus the parent.
   */
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent = this._activeItem.getParent();
      if (!parent || this._skipPredicateFn(parent)) {
        return;
      }
      this.focusItem(parent);
    }
  }
  /**
   * If the item is already collapsed, we expand the item. Otherwise, we will focus the first child.
   */
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      coerceObservable(this._activeItem.getChildren()).pipe(take(1)).subscribe((children) => {
        const firstChild = children.find((child) => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === "boolean" ? item.isDisabled : item.isDisabled?.();
  }
  /** For all items that are the same level as the current item, we expand those items. */
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent) {
      itemsToExpand = of(this._items.filter((item) => item.getParent() === null));
    } else {
      itemsToExpand = coerceObservable(parent.getChildren());
    }
    itemsToExpand.pipe(take(1)).subscribe((items) => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
};
function TREE_KEY_MANAGER_FACTORY() {
  return (items, options) => new TreeKeyManager(items, options);
}
var TREE_KEY_MANAGER = new InjectionToken("tree-key-manager", {
  providedIn: "root",
  factory: TREE_KEY_MANAGER_FACTORY
});
var InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config3) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config3?.ignoreVisibility || this.isVisible(element));
  }
  static {
    this.\u0275fac = function InteractivityChecker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InteractivityChecker)(\u0275\u0275inject(Platform));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InteractivityChecker,
      factory: _InteractivityChecker.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._injector) {
      afterNextRender(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
};
var FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._injector = inject(Injector);
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
  static {
    this.\u0275fac = function FocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FocusTrapFactory,
      factory: _FocusTrapFactory.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
  static {
    this.\u0275fac = function CdkTrapFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTrapFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkTrapFocus,
      selectors: [["", "cdkTrapFocus", ""]],
      inputs: {
        enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
        autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
      },
      exportAs: ["cdkTrapFocus"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config3, injector) {
    super(_element, _checker, _ngZone, _document, config3.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
  static {
    this.\u0275fac = function FocusTrapManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FocusTrapManager)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FocusTrapManager,
      factory: _FocusTrapManager.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._injector = inject(Injector);
    this._document = _document;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config3 = {
    defer: false
  }) {
    let configObject;
    if (typeof config3 === "boolean") {
      configObject = {
        defer: config3
      };
    } else {
      configObject = config3;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
  static {
    this.\u0275fac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigurableFocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(FocusTrapManager), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(FOCUS_TRAP_INERT_STRATEGY, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ConfigurableFocusTrapFactory,
      factory: _ConfigurableFocusTrapFactory.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
  static {
    this.\u0275fac = function InputModalityDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InputModalityDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InputModalityDetector,
      factory: _InputModalityDetector.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  static {
    this.\u0275fac = function LiveAnnouncer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LiveAnnouncer)(\u0275\u0275inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _LiveAnnouncer,
      factory: _LiveAnnouncer.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function CdkAriaLive_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkAriaLive)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LiveAnnouncer), \u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkAriaLive,
      selectors: [["", "cdkAriaLive", ""]],
      inputs: {
        politeness: [0, "cdkAriaLive", "politeness"],
        duration: [0, "cdkAriaLiveDuration", "duration"]
      },
      exportAs: ["cdkAriaLive"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
  static {
    this.\u0275fac = function FocusMonitor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FocusMonitor)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Platform), \u0275\u0275inject(InputModalityDetector), \u0275\u0275inject(DOCUMENT, 8), \u0275\u0275inject(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FocusMonitor,
      factory: _FocusMonitor.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
  static {
    this.\u0275fac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkMonitorFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkMonitorFocus,
      selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
      outputs: {
        cdkFocusChange: "cdkFocusChange"
      },
      exportAs: ["cdkMonitorFocus"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
  static {
    this.\u0275fac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighContrastModeDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _HighContrastModeDetector,
      factory: _HighContrastModeDetector.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
  static {
    this.\u0275fac = function A11yModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _A11yModule)(\u0275\u0275inject(HighContrastModeDetector));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _A11yModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [ObserversModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.closeOnNavigation = true;
    this.closeOnDestroy = true;
    this.closeOnOverlayDetachments = true;
  }
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _document, _config2, _interactivityChecker, _ngZone, _overlayRef, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._config = _config2;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._overlayRef = _overlayRef;
    this._focusMonitor = _focusMonitor;
    this._platform = inject(Platform);
    this._focusTrap = null;
    this._elementFocusedBeforeDialogWasOpened = null;
    this._closeInteractionType = null;
    this._ariaLabelledByQueue = [];
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._isDestroyed = false;
    this.attachDomPortal = (portal) => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwDialogContentAlreadyAttachedError();
      }
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    };
    this._document = _document;
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener("blur", callback);
          element.removeEventListener("mousedown", callback);
          element.removeAttribute("tabindex");
        };
        element.addEventListener("blur", callback);
        element.addEventListener("mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus();
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement();
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus);
          break;
      }
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
  static {
    this.\u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDialogContainer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(DialogConfig), \u0275\u0275directiveInject(InteractivityChecker), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayRef), \u0275\u0275directiveInject(FocusMonitor));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkDialogContainer,
      selectors: [["cdk-dialog-container"]],
      viewQuery: function CdkDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkPortalOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
      hostVars: 6,
      hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function CdkDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DialogConfig]
    }]
  }, {
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: OverlayRef
  }, {
    type: FocusMonitor
  }], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  constructor(overlayRef, config3) {
    this.overlayRef = overlayRef;
    this.config = config3;
    this.closed = new Subject();
    this.disableClose = config3.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config3.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config3.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
var uniqueId = 0;
var Dialog = class _Dialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this._ariaHiddenElements = /* @__PURE__ */ new Map();
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._scrollStrategy = scrollStrategy;
  }
  open(componentOrTemplateRef, config3) {
    const defaults = this._defaultOptions || new DialogConfig();
    config3 = __spreadValues(__spreadValues({}, defaults), config3);
    config3.id = config3.id || `cdk-dialog-${uniqueId++}`;
    if (config3.id && this.getDialogById(config3.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config3.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config3);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config3);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config3);
    dialogRef.containerInstance = dialogContainer;
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config3);
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config3) {
    const state2 = new OverlayConfig({
      positionStrategy: config3.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config3.scrollStrategy || this._scrollStrategy(),
      panelClass: config3.panelClass,
      hasBackdrop: config3.hasBackdrop,
      direction: config3.direction,
      minWidth: config3.minWidth,
      minHeight: config3.minHeight,
      maxWidth: config3.maxWidth,
      maxHeight: config3.maxHeight,
      width: config3.width,
      height: config3.height,
      disposeOnNavigation: config3.closeOnNavigation
    });
    if (config3.backdropClass) {
      state2.backdropClass = config3.backdropClass;
    }
    return state2;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config3) {
    const userInjector = config3.injector || config3.viewContainerRef?.injector;
    const providers2 = [{
      provide: DialogConfig,
      useValue: config3
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config3.container) {
      if (typeof config3.container === "function") {
        containerType = config3.container;
      } else {
        containerType = config3.container.type;
        providers2.push(...config3.container.providers(config3));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config3.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers: providers2
    }), config3.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config3) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config3, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config3.data,
        dialogRef
      };
      if (config3.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config3.templateContext === "function" ? config3.templateContext() : config3.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config3, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config3.viewContainerRef, injector, config3.componentFactoryResolver));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config3, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config3.injector || config3.viewContainerRef?.injector;
    const providers2 = [{
      provide: DIALOG_DATA,
      useValue: config3.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config3.providers) {
      if (typeof config3.providers === "function") {
        providers2.push(...config3.providers(dialogRef, config3, dialogContainer));
      } else {
        providers2.push(...config3.providers);
      }
    }
    if (config3.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers2.push({
        provide: Directionality,
        useValue: {
          value: config3.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers: providers2
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static {
    this.\u0275fac = function Dialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Dialog)(\u0275\u0275inject(Overlay), \u0275\u0275inject(Injector), \u0275\u0275inject(DEFAULT_DIALOG_CONFIG, 8), \u0275\u0275inject(_Dialog, 12), \u0275\u0275inject(OverlayContainer), \u0275\u0275inject(DIALOG_SCROLL_STRATEGY));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Dialog,
      factory: _Dialog.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: DialogConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DEFAULT_DIALOG_CONFIG]
    }]
  }, {
    type: Dialog,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DIALOG_SCROLL_STRATEGY]
    }]
  }], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static {
    this.\u0275fac = function DialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _DialogModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [Dialog],
      imports: [
        OverlayModule,
        PortalModule,
        A11yModule,
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/cdk.mjs
var VERSION = new Version("18.2.11");

// node_modules/@angular/material/fesm2022/core.mjs
var _c02 = ["*", [["mat-option"], ["ng-container"]]];
var _c12 = ["*", "mat-option, ng-container"];
var _c2 = ["text"];
var _c3 = [[["mat-icon"]], "*"];
var _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var _c5 = ["mat-internal-form-field", ""];
var _c6 = ["*"];
var VERSION2 = new Version("18.2.11");
var AnimationCurves = class {
  static {
    this.STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
  }
  static {
    this.DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
  }
  static {
    this.ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
  }
  static {
    this.SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
  }
};
var AnimationDurations = class {
  static {
    this.COMPLEX = "375ms";
  }
  static {
    this.ENTERING = "225ms";
  }
  static {
    this.EXITING = "195ms";
  }
};
function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
var MatCommonModule = class _MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    this._hasDoneGlobalChecks = false;
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const platform = inject(Platform, {
          optional: true
        });
        if (this._checkIsEnabled("doctype")) {
          _checkDoctypeIsDefined(this._document);
        }
        if (this._checkIsEnabled("theme")) {
          _checkThemeIsPresent(this._document, !!platform?.isBrowser);
        }
        if (this._checkIsEnabled("version")) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */
  _checkIsEnabled(name) {
    if (_isTestEnvironment()) {
      return false;
    }
    if (typeof this._sanityChecks === "boolean") {
      return this._sanityChecks;
    }
    return !!this._sanityChecks[name];
  }
  static {
    this.\u0275fac = function MatCommonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatCommonModule)(\u0275\u0275inject(HighContrastModeDetector), \u0275\u0275inject(MATERIAL_SANITY_CHECKS, 8), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatCommonModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [BidiModule, BidiModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCommonModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MATERIAL_SANITY_CHECKS]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.");
  }
}
function _checkThemeIsPresent(doc, isBrowser) {
  if (!doc.body || !isBrowser) {
    return;
  }
  const testElement = doc.createElement("div");
  testElement.classList.add("mat-theme-loaded-marker");
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement);
  if (computedStyle && computedStyle.display !== "none") {
    console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming");
  }
  testElement.remove();
}
function _checkCdkVersionMatch() {
  if (VERSION2.full !== VERSION.full) {
    console.warn("The Angular Material version (" + VERSION2.full + ") does not match the Angular CDK version (" + VERSION.full + ").\nPlease ensure the versions of these two packages exactly match.");
  }
}
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var DateAdapter = class {
  constructor() {
    this._localeChanges = new Subject();
    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }
      return firstValid == secondValid;
    }
    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale) {
    super();
    this.useUtcForDisplay = false;
    this._matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style2,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style2,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    if (typeof Intl !== "undefined" && Intl.Locale) {
      const locale = new Intl.Locale(this.locale);
      const firstDay = (locale.getWeekInfo?.() || locale.weekInfo)?.firstDay ?? 0;
      return firstDay === 7 ? 0 : firstDay;
    }
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
  static {
    this.\u0275fac = function NativeDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDateAdapter)(\u0275\u0275inject(MAT_DATE_LOCALE, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NativeDateAdapter,
      factory: _NativeDateAdapter.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }], null);
})();
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};
var NativeDateModule = class _NativeDateModule {
  static {
    this.\u0275fac = function NativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NativeDateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NativeDateModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var MatNativeDateModule = class _MatNativeDateModule {
  static {
    this.\u0275fac = function MatNativeDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatNativeDateModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatNativeDateModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [provideNativeDateAdapter()]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}
var ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
  static {
    this.\u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowOnDirtyErrorStateMatcher)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ShowOnDirtyErrorStateMatcher,
      factory: _ShowOnDirtyErrorStateMatcher.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Injectable
  }], null, null);
})();
var ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
  static {
    this.\u0275fac = function ErrorStateMatcher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ErrorStateMatcher)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ErrorStateMatcher,
      factory: _ErrorStateMatcher.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MatLine = class _MatLine {
  static {
    this.\u0275fac = function MatLine_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatLine)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatLine,
      selectors: [["", "mat-line", ""], ["", "matLine", ""]],
      hostAttrs: [1, "mat-line"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatLineModule = class _MatLineModule {
  static {
    this.\u0275fac = function MatLineModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatLineModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatLineModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatLine],
      exports: [MatLine, MatCommonModule]
    }]
  }], null, null);
})();
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  constructor(_renderer, element, config3, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config3;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    this.state = RippleState.HIDDEN;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  constructor() {
    this._events = /* @__PURE__ */ new Map();
    this._delegateEventHandler = (event) => {
      const target = _getEventTarget(event);
      if (target) {
        this._events.get(event.type)?.forEach((handlers, element) => {
          if (element === target || element.contains(target)) {
            handlers.forEach((handler) => handler.handleEvent(event));
          }
        });
      }
    };
  }
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var RippleRenderer = class _RippleRenderer {
  static {
    this._eventManager = new RippleEventManager();
  }
  constructor(_target, _ngZone, elementOrElementRef, _platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._isPointerDown = false;
    this._activeRipples = /* @__PURE__ */ new Map();
    this._pointerUpEventsRegistered = false;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y2, config3 = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config3.animation);
    if (config3.centered) {
      x = containerRect.left + containerRect.width / 2;
      y2 = containerRect.top + containerRect.height / 2;
    }
    const radius = config3.radius || distanceToFurthestCorner(x, y2, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y2 - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config3.color != null) {
      ripple.style.backgroundColor = config3.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config3, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config3.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger2 = this._triggerElement;
    if (trigger2) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger2, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger2.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
function distanceToFurthestCorner(x, y2, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y2 - rect.top), Math.abs(y2 - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var MatRipple = class _MatRipple {
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger2) {
    this._trigger = trigger2;
    this._setupTriggerEventsIfEnabled();
  }
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    this.radius = 0;
    this._disabled = false;
    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y2 = 0, config3) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y2, __spreadValues(__spreadValues({}, this.rippleConfig), config3));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
  static {
    this.\u0275fac = function MatRipple_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRipple)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatRipple,
      selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
      hostAttrs: [1, "mat-ripple"],
      hostVars: 2,
      hostBindings: function MatRipple_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-ripple-unbounded", ctx.unbounded);
        }
      },
      inputs: {
        color: [0, "matRippleColor", "color"],
        unbounded: [0, "matRippleUnbounded", "unbounded"],
        centered: [0, "matRippleCentered", "centered"],
        radius: [0, "matRippleRadius", "radius"],
        animation: [0, "matRippleAnimation", "animation"],
        disabled: [0, "matRippleDisabled", "disabled"],
        trigger: [0, "matRippleTrigger", "trigger"]
      },
      exportAs: ["matRipple"],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();
var MatRippleModule = class _MatRippleModule {
  static {
    this.\u0275fac = function MatRippleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRippleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatRippleModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRipple],
      exports: [MatRipple, MatCommonModule]
    }]
  }], null, null);
})();
var MatPseudoCheckbox = class _MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    this.state = "unchecked";
    this.disabled = false;
    this.appearance = "full";
  }
  static {
    this.\u0275fac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPseudoCheckbox)(\u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatPseudoCheckbox,
      selectors: [["mat-pseudo-checkbox"]],
      hostAttrs: [1, "mat-pseudo-checkbox"],
      hostVars: 12,
      hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        state: "state",
        disabled: "disabled",
        appearance: "appearance"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function MatPseudoCheckbox_Template(rf, ctx) {
      },
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color, var(--mat-app-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color, var(--mat-app-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"'
      },
      standalone: true,
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color, var(--mat-app-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color, var(--mat-app-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
  static {
    this.\u0275fac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatPseudoCheckboxModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var _uniqueOptgroupIdCounter = 0;
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class _MatOptgroup {
  constructor(parent) {
    this.disabled = false;
    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = parent?.inertGroups ?? false;
  }
  static {
    this.\u0275fac = function MatOptgroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatOptgroup)(\u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatOptgroup,
      selectors: [["mat-optgroup"]],
      hostAttrs: [1, "mat-mdc-optgroup"],
      hostVars: 3,
      hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
        }
      },
      inputs: {
        label: "label",
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      exportAs: ["matOptgroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: MAT_OPTGROUP,
        useExisting: _MatOptgroup
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c12,
      decls: 5,
      vars: 4,
      consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
      template: function MatOptgroup_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c02);
          \u0275\u0275elementStart(0, "span", 0)(1, "span", 1);
          \u0275\u0275text(2);
          \u0275\u0275projection(3);
          \u0275\u0275elementEnd()();
          \u0275\u0275projection(4, 1);
        }
        if (rf & 2) {
          \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
          \u0275\u0275property("id", ctx._labelId);
          \u0275\u0275advance(2);
          \u0275\u0275textInterpolate1("", ctx.label, " ");
        }
      },
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-app-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-app-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-app-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      standalone: true,
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color, var(--mat-app-on-surface-variant));font-family:var(--mat-optgroup-label-text-font, var(--mat-app-title-small-font));line-height:var(--mat-optgroup-label-text-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-optgroup-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-optgroup-label-text-tracking, var(--mat-app-title-small-tracking));font-weight:var(--mat-optgroup-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;outline:none}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }, {
      type: Optional
    }]
  }], {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _uniqueIdCounter = 0;
var MatOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var MatOption = class _MatOption {
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /** Whether to display checkmark for single-selection. */
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  constructor(_element, _changeDetectorRef, _parent, group2) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group2;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = "";
    this.id = `mat-option-${_uniqueIdCounter++}`;
    this.onSelectionChange = new EventEmitter();
    this._stateChanges = new Subject();
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  /** Selects the option. */
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Deselects the option. */
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
  // That's because `MatLegacyOption` use `MatOption` type in a few places such as
  // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
  static {
    this.\u0275fac = function MatOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8), \u0275\u0275directiveInject(MAT_OPTGROUP, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatOption,
      selectors: [["mat-option"]],
      viewQuery: function MatOption_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c2, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._text = _t.first);
        }
      },
      hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
      hostVars: 11,
      hostBindings: function MatOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatOption_click_HostBindingHandler() {
            return ctx._selectViaInteraction();
          })("keydown", function MatOption_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
          \u0275\u0275attribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
          \u0275\u0275classProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
        }
      },
      inputs: {
        value: "value",
        id: "id",
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        onSelectionChange: "onSelectionChange"
      },
      exportAs: ["matOption"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c4,
      decls: 8,
      vars: 5,
      consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
      template: function MatOption_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c3);
          \u0275\u0275template(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
          \u0275\u0275projection(1);
          \u0275\u0275elementStart(2, "span", 2, 0);
          \u0275\u0275projection(4, 1);
          \u0275\u0275elementEnd();
          \u0275\u0275template(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3)(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
          \u0275\u0275element(7, "div", 5);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.multiple ? 0 : -1);
          \u0275\u0275advance(5);
          \u0275\u0275conditional(!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.group && ctx.group._inert ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
        }
      },
      dependencies: [MatPseudoCheckbox, MatRipple],
      styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-app-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color);outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-app-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}'],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-mdc-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option{-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;min-height:48px;padding:0 16px;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-option-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-option-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-option-label-text-size, var(--mat-app-body-large-size));letter-spacing:var(--mat-option-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-option-label-text-weight, var(--mat-app-body-large-weight))}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color);outline:0}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color, var(--mat-app-secondary-container))}.mat-mdc-option .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-app-on-secondary-container))}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }]
  }, {
    type: MatOptgroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTGROUP]
    }]
  }], {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  });
})();
var MatOptionModule = class _MatOptionModule {
  static {
    this.\u0275fac = function MatOptionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatOptionModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatOptionModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
var eventListenerOptions = {
  capture: true
};
var rippleInteractionEvents = ["focus", "mousedown", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var MatRippleLoader = class _MatRippleLoader {
  constructor() {
    this._document = inject(DOCUMENT, {
      optional: true
    });
    this._animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this._platform = inject(Platform);
    this._ngZone = inject(NgZone);
    this._hosts = /* @__PURE__ */ new Map();
    this._onInteraction = (event) => {
      const eventTarget = _getEventTarget(event);
      if (eventTarget instanceof HTMLElement) {
        const element = eventTarget.closest(`[${matRippleUninitialized}="${this._globalRippleOptions?.namespace ?? ""}"]`);
        if (element) {
          this._createRipple(element);
        }
      }
    };
    this._ngZone.runOutsideAngular(() => {
      for (const event of rippleInteractionEvents) {
        this._document?.addEventListener(event, this._onInteraction, eventListenerOptions);
      }
    });
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    for (const event of rippleInteractionEvents) {
      this._document?.removeEventListener(event, this._onInteraction, eventListenerOptions);
    }
  }
  /**
   * Configures the ripple that will be rendered by the ripple loader.
   *
   * Stores the given information about how the ripple should be configured on the host
   * element so that it can later be retrived & used when the ripple is actually created.
   */
  configureRipple(host, config3) {
    host.setAttribute(matRippleUninitialized, this._globalRippleOptions?.namespace ?? "");
    if (config3.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config3.className || "");
    }
    if (config3.centered) {
      host.setAttribute(matRippleCentered, "");
    }
    if (config3.disabled) {
      host.setAttribute(matRippleDisabled, "");
    }
  }
  /** Returns the ripple instance for the given host element. */
  getRipple(host) {
    const ripple = this._hosts.get(host);
    return ripple || this._createRipple(host);
  }
  /** Sets the disabled state on the ripple instance corresponding to the given host element. */
  setDisabled(host, disabled2) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.disabled = disabled2;
      return;
    }
    if (disabled2) {
      host.setAttribute(matRippleDisabled, "");
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  /** Creates a MatRipple and appends it to the given element. */
  _createRipple(host) {
    if (!this._document) {
      return;
    }
    const existingRipple = this._hosts.get(host);
    if (existingRipple) {
      return existingRipple;
    }
    host.querySelector(".mat-ripple")?.remove();
    const rippleEl = this._document.createElement("span");
    rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const ripple = new MatRipple(new ElementRef(rippleEl), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : void 0, this._animationMode ? this._animationMode : void 0);
    ripple._isInitialized = true;
    ripple.trigger = host;
    ripple.centered = host.hasAttribute(matRippleCentered);
    ripple.disabled = host.hasAttribute(matRippleDisabled);
    this.attachRipple(host, ripple);
    return ripple;
  }
  attachRipple(host, ripple) {
    host.removeAttribute(matRippleUninitialized);
    this._hosts.set(host, ripple);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.ngOnDestroy();
      this._hosts.delete(host);
    }
  }
  static {
    this.\u0275fac = function MatRippleLoader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRippleLoader)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatRippleLoader,
      factory: _MatRippleLoader.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _MatInternalFormField = class __MatInternalFormField {
  static {
    this.\u0275fac = function _MatInternalFormField_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __MatInternalFormField)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: __MatInternalFormField,
      selectors: [["div", "mat-internal-form-field", ""]],
      hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
      hostVars: 2,
      hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
        }
      },
      inputs: {
        labelPosition: "labelPosition"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      attrs: _c5,
      ngContentSelectors: _c6,
      decls: 1,
      vars: 0,
      template: function _MatInternalFormField_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      standalone: true,
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/dialog.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.delayFocusTrap = true;
    this.closeOnNavigation = true;
  }
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  constructor(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, _animationMode, focusMonitor) {
    super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, focusMonitor);
    this._animationMode = _animationMode;
    this._animationStateChanged = new EventEmitter();
    this._animationsEnabled = this._animationMode !== "NoopAnimations";
    this._actionSectionCount = 0;
    this._hostElement = this._elementRef.nativeElement;
    this._enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
    this._exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
    this._animationTimer = null;
    this._finishDialogOpen = () => {
      this._clearAnimationClasses();
      this._openAnimationDone(this._enterAnimationDuration);
    };
    this._finishDialogClose = () => {
      this._clearAnimationClasses();
      this._animationStateChanged.emit({
        state: "closed",
        totalTime: this._exitAnimationDuration
      });
    };
  }
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static {
    this.\u0275fac = function MatDialogContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogContainer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(MatDialogConfig), \u0275\u0275directiveInject(InteractivityChecker), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(FocusMonitor));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
      hostVars: 10,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx._config.id);
          \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
          \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 0,
      consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
          \u0275\u0275elementEnd()();
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: MatDialogConfig
  }, {
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: OverlayRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: FocusMonitor
  }], null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  constructor(_ref, config3, _containerInstance) {
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    this._afterOpened = new Subject();
    this._beforeClosed = new Subject();
    this._state = MatDialogState.OPEN;
    this.disableClose = config3.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var uniqueId2 = 0;
var MatDialog = class _MatDialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  constructor(_overlay, injector, location, _defaultOptions, _scrollStrategy, _parentDialog, _overlayContainer, _animationMode) {
    this._overlay = _overlay;
    this._defaultOptions = _defaultOptions;
    this._scrollStrategy = _scrollStrategy;
    this._parentDialog = _parentDialog;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this.dialogConfigClass = MatDialogConfig;
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._dialog = injector.get(Dialog);
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config3) {
    let dialogRef;
    config3 = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config3);
    config3.id = config3.id || `mat-mdc-dialog-${uniqueId2++}`;
    config3.scrollStrategy = config3.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config3), {
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config3
          },
          {
            provide: DialogConfig,
            useValue: config3
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config3, dialogContainer);
        dialogRef.updatePosition(config3?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static {
    this.\u0275fac = function MatDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialog)(\u0275\u0275inject(Overlay), \u0275\u0275inject(Injector), \u0275\u0275inject(Location, 8), \u0275\u0275inject(MAT_DIALOG_DEFAULT_OPTIONS, 8), \u0275\u0275inject(MAT_DIALOG_SCROLL_STRATEGY), \u0275\u0275inject(_MatDialog, 12), \u0275\u0275inject(OverlayContainer), \u0275\u0275inject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatDialog,
      factory: _MatDialog.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: Location,
    decorators: [{
      type: Optional
    }]
  }, {
    type: MatDialogConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: MatDialog,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();
var dialogElementUid = 0;
var MatDialogClose = class _MatDialogClose {
  constructor(dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this.type = "button";
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static {
    this.\u0275fac = function MatDialogClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogClose)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
            return ctx._onButtonClick($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        type: "type",
        dialogResult: [0, "mat-dialog-close", "dialogResult"],
        _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      standalone: true,
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: MatDialog
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  constructor(_dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static {
    this.\u0275fac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogLayoutSection)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogLayoutSection,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: MatDialog
  }], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  constructor() {
    super(...arguments);
    this.id = `mat-mdc-dialog-title-${dialogElementUid++}`;
  }
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDialogTitle_BaseFactory;
      return function MatDialogTitle_Factory(__ngFactoryType__) {
        return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      standalone: true,
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static {
    this.\u0275fac = function MatDialogContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogContent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
      standalone: true,
      features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      standalone: true,
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDialogActions_BaseFactory;
      return function MatDialogActions_Factory(__ngFactoryType__) {
        return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
      hostVars: 6,
      hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align"
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      standalone: true,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static {
    this.\u0275fac = function MatDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatDialogModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MatDialog],
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();
var _defaultParams = {
  params: {
    enterAnimationDuration: "150ms",
    exitAnimationDuration: "75ms"
  }
};
var matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: trigger("dialogContainer", [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    state("void, exit", style({
      opacity: 0,
      transform: "scale(0.7)"
    })),
    state("enter", style({
      transform: "none"
    })),
    transition("* => enter", group([animate("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)", style({
      transform: "none",
      opacity: 1
    })), query("@*", animateChild(), {
      optional: true
    })]), _defaultParams),
    transition("* => void, * => exit", group([animate("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)", style({
      opacity: 0
    })), query("@*", animateChild(), {
      optional: true
    })]), _defaultParams)
  ])
};

// src/app/models/requests/new-email-request.ts
var NewEmailRequest = class {
  customerId = "";
  message = "";
  constructor(customerId, message) {
    this.customerId = customerId;
    this.message = message;
  }
};

// src/app/environment.ts
var enviornment = {
  production: false,
  apiUrl: "https://localhost:7288/api/"
};

// src/app/services/customer-email.service.ts
var CustomerEmailService = class _CustomerEmailService {
  httpClient;
  apiPath = enviornment.apiUrl;
  apiHeader = new HttpHeaders().set("Content-type", "application/json");
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  bulkSendEmail(emailMessage) {
    return this.httpClient.post(this.apiPath + "CustomerEmails/BulkSendEmail", JSON.stringify(emailMessage), { headers: this.apiHeader });
  }
  createCustomer(newCustomer) {
    return this.httpClient.post(this.apiPath + "CustomerEmails/CreateNewCustomer", JSON.stringify(newCustomer), { headers: this.apiHeader });
  }
  deleteCustomer(customerId) {
    return this.httpClient.post(this.apiPath + "CustomerEmails/DeleteCustomer", JSON.stringify(customerId), { headers: this.apiHeader });
  }
  deleteEmail(emailId) {
    return this.httpClient.post(this.apiPath + "CustomerEmails/DeleteEmail", JSON.stringify(emailId), { headers: this.apiHeader });
  }
  getAllCustomerEmails() {
    return this.httpClient.get(this.apiPath + "CustomerEmails/GetCustomerEmails", { headers: this.apiHeader, withCredentials: true });
  }
  sendNewEmail(newCustomerEmail) {
    return this.httpClient.post(this.apiPath + "CustomerEmails/SendEmailToCustomer", JSON.stringify(newCustomerEmail), { headers: this.apiHeader });
  }
  updateDraftEmail(draftEmail) {
    return this.httpClient.post(this.apiPath + "CustomerEmails/UpdateDraftEmail", JSON.stringify(draftEmail), { headers: this.apiHeader });
  }
  static \u0275fac = function CustomerEmailService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerEmailService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CustomerEmailService, factory: _CustomerEmailService.\u0275fac, providedIn: "root" });
};

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static {
    this.\u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseControlValueAccessor
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275BuiltInControlValueAccessor_BaseFactory;
      return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BuiltInControlValueAccessor,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxControlValueAccessor_BaseFactory;
      return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxControlValueAccessor,
      selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
      hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.checked);
          })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent2 = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent2.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    this._composing = false;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static {
    this.\u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DefaultValueAccessor,
      selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
      hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
            return ctx._handleInput($event.target.value);
          })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
            return ctx._compositionStart();
          })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
            return ctx._compositionEnd($event.target.value);
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || (typeof value === "string" || Array.isArray(value)) && value.length === 0;
}
function hasValidLength(value) {
  return value != null && typeof value.length === "number";
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function minValidator(min) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
      return null;
    }
    return control.value.length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    return hasValidLength(control.value) && control.value.length > maxLength ? {
      "maxlength": {
        "requiredLength": maxLength,
        "actualLength": control.value.length
      }
    } : null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o2) {
  return o2 != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c2) => validator.validate(c2);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  constructor() {
    this._rawValidators = [];
    this._rawAsyncValidators = [];
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  constructor() {
    super(...arguments);
    this._parent = null;
    this.name = null;
    this.valueAccessor = null;
  }
};
var AbstractControlStatus = class {
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatus,
      selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
      hostVars: 14,
      hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static {
    this.\u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgControlStatusGroup,
      selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
      hostVars: 16,
      hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
        }
      },
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._pendingDirty = false;
    this._hasOwnPendingAsyncValidator = null;
    this._pendingTouched = false;
    this._onCollectionChange = () => {
    };
    this._parent = null;
    this._status = computed(() => this.statusReactive());
    this.statusReactive = signal(void 0);
    this._pristine = computed(() => this.pristineReactive());
    this.pristineReactive = signal(true);
    this._touched = computed(() => this.touchedReactive());
    this.touchedReactive = signal(false);
    this._events = new Subject();
    this.events = this._events.asObservable();
    this._onDisabledChange = [];
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken("CallSetDisabledState", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop2 = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop2);
    dir.valueAccessor.registerOnTouched(noop2);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange2) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange2);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop2 = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop2);
  registerOnValidatorChange(dir._rawAsyncValidators, noop2);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange2 = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange2);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange2);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this.submittedReactive());
    this.submittedReactive = signal(false);
    this._directives = /* @__PURE__ */ new Set();
    this.ngSubmit = new EventEmitter();
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @nodoc */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group2 = new FormGroup({});
      setUpFormContainer(group2, dir);
      container.registerControl(dir.name, group2);
      group2.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static {
    this.\u0275fac = function NgForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgForm,
      selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
      hostBindings: function NgForm_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function NgForm_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        options: [0, "ngFormOptions", "options"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.defaultValue = null;
    this._onChange = [];
    this._pendingChange = false;
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /** @nodoc */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AbstractFormGroupDirective_BaseFactory;
      return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
        return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractFormGroupDirective,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = "";
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static {
    this.\u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModelGroup,
      selectors: [["", "ngModelGroup", ""]],
      inputs: {
        name: [0, "ngModelGroup", "name"]
      },
      exportAs: ["ngModelGroup"],
      features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this.control = new FormControl();
    this._registered = false;
    this.name = "";
    this.update = new EventEmitter();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if (!this._isStandalone()) {
      this._checkParentType();
    }
    this._checkName();
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
        throw formGroupNameException();
      } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
        throw modelParentException();
      }
    }
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static {
    this.\u0275fac = function NgModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgModel,
      selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
      inputs: {
        name: "name",
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"],
        options: [0, "ngModelOptions", "options"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngModel"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel"
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static {
    this.\u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgNoValidate)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgNoValidate,
      selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
      hostAttrs: ["novalidate", ""]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      }
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275NumberValueAccessor_BaseFactory;
      return function NumberValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NumberValueAccessor,
      selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
      hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  constructor() {
    this._accessors = [];
  }
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c2) => {
      if (this._isSameGroup(c2, accessor) && c2[1] !== accessor) {
        c2[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static {
    this.\u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlRegistry)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _RadioControlRegistry,
      factory: _RadioControlRegistry.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
    this.setDisabledStateFired = false;
    this.onChange = () => {
    };
    this.callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
      optional: true
    }) ?? setDisabledStateDefault;
  }
  /** @nodoc */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @nodoc */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @nodoc
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @nodoc */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static {
    this.\u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RadioControlValueAccessor,
      selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
      hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
            return ctx.onChange();
          })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        name: "name",
        formControlName: "formControlName",
        value: "value"
      },
      features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR]
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @nodoc
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RangeValueAccessor_BaseFactory;
      return function RangeValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RangeValueAccessor,
      selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
      hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR]
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static {
    this.\u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlDirective,
      selectors: [["", "formControl", ""]],
      inputs: {
        form: [0, "formControl", "form"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._submitted = computed(() => this._submittedReactive());
    this._submittedReactive = signal(false);
    this._onCollectionChange = () => this._updateDomValue();
    this.directives = [];
    this.form = null;
    this.ngSubmit = new EventEmitter();
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    this._checkFormPresent();
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  _checkFormPresent() {
    if (!this.form && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingFormException();
    }
  }
  static {
    this.\u0275fac = function FormGroupDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupDirective,
      selectors: [["", "formGroup", ""]],
      hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
            return ctx.onSubmit($event);
          })("reset", function FormGroupDirective_reset_HostBindingHandler() {
            return ctx.onReset();
          });
        }
      },
      inputs: {
        form: [0, "formGroup", "form"]
      },
      outputs: {
        ngSubmit: "ngSubmit"
      },
      exportAs: ["ngForm"],
      features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static {
    this.\u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormGroupName,
      selectors: [["", "formGroupName", ""]],
      inputs: {
        name: [0, "formGroupName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  constructor(parent, validators, asyncValidators) {
    super();
    this.name = null;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @nodoc
   */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @nodoc
   */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormArray(this);
    }
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  _checkParentType() {
    if (_hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
  }
  static {
    this.\u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormArrayName,
      selectors: [["", "formArrayName", ""]],
      inputs: {
        name: [0, "formArrayName", "name"]
      },
      features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function _hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  static {
    this._ngModelWarningSentOnce = false;
  }
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._added = false;
    this.name = null;
    this.update = new EventEmitter();
    this._ngModelWarningSent = false;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _checkParentType() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
        throw ngModelGroupException();
      } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
        throw controlParentException(this.name);
      }
    }
  }
  _setUpControl() {
    this._checkParentType();
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static {
    this.\u0275fac = function FormControlName_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FormControlName,
      selectors: [["", "formControlName", ""]],
      inputs: {
        name: [0, "formControlName", "name"],
        isDisabled: [0, "disabled", "isDisabled"],
        model: [0, "ngModel", "model"]
      },
      outputs: {
        update: "ngModelChange"
      },
      features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding]
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on the select element.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectControlValueAccessor_BaseFactory;
      return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectControlValueAccessor,
      selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
      hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target.value);
          })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgSelectOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  constructor() {
    super(...arguments);
    this._optionMap = /* @__PURE__ */ new Map();
    this._idCounter = 0;
    this._compareWith = Object.is;
  }
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @nodoc
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o2) => {
        opt._setSelected(ids.indexOf(o2.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o2) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @nodoc
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i = 0; i < options.length; i++) {
          const opt = options[i];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SelectMultipleControlValueAccessor_BaseFactory;
      return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
        return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _SelectMultipleControlValueAccessor,
      selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
      hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
            return ctx.onChange($event.target);
          })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
            return ctx.onTouched();
          });
        }
      },
      inputs: {
        compareWith: "compareWith"
      },
      features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @nodoc */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static {
    this.\u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _\u0275NgSelectMultipleOption,
      selectors: [["option"]],
      inputs: {
        ngValue: "ngValue",
        value: "value"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  constructor() {
    this._validator = nullValidator;
  }
  /** @nodoc */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input);
      this._validator = this._enabled ? this.createValidator(input) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @nodoc */
  validate(control) {
    return this._validator(control);
  }
  /** @nodoc */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input) {
    return input != null;
  }
  static {
    this.\u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractValidatorDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _AbstractValidatorDirective,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "max";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (max) => maxValidator(max);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxValidator_BaseFactory;
      return function MaxValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxValidator,
      selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
        }
      },
      inputs: {
        max: "max"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "min";
    this.normalizeInput = (input) => toFloat(input);
    this.createValidator = (min) => minValidator(min);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinValidator_BaseFactory;
      return function MinValidator_Factory(__ngFactoryType__) {
        return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinValidator,
      selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
        }
      },
      inputs: {
        min: "min"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "required";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => requiredValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RequiredValidator_BaseFactory;
      return function RequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _RequiredValidator,
      selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
      hostVars: 1,
      hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      inputs: {
        required: "required"
      },
      features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  constructor() {
    super(...arguments);
    this.createValidator = (input) => requiredTrueValidator;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CheckboxRequiredValidator_BaseFactory;
      return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
        return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CheckboxRequiredValidator,
      selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("required", ctx._enabled ? "" : null);
        }
      },
      features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      }
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "email";
    this.normalizeInput = booleanAttribute;
    this.createValidator = (input) => emailValidator;
  }
  /** @nodoc */
  enabled(input) {
    return input;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275EmailValidator_BaseFactory;
      return function EmailValidator_Factory(__ngFactoryType__) {
        return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _EmailValidator,
      selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
      inputs: {
        email: "email"
      },
      features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR]
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "minlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (minlength) => minLengthValidator(minlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MinLengthValidator_BaseFactory;
      return function MinLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MinLengthValidator,
      selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
        }
      },
      inputs: {
        minlength: "minlength"
      },
      features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      }
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "maxlength";
    this.normalizeInput = (input) => toInteger(input);
    this.createValidator = (maxlength) => maxLengthValidator(maxlength);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MaxLengthValidator_BaseFactory;
      return function MaxLengthValidator_Factory(__ngFactoryType__) {
        return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MaxLengthValidator,
      selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
        }
      },
      inputs: {
        maxlength: "maxlength"
      },
      features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      }
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  constructor() {
    super(...arguments);
    this.inputName = "pattern";
    this.normalizeInput = (input) => input;
    this.createValidator = (input) => patternValidator(input);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275PatternValidator_BaseFactory;
      return function PatternValidator_Factory(__ngFactoryType__) {
        return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _PatternValidator,
      selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
      hostVars: 1,
      hostBindings: function PatternValidator_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
        }
      },
      inputs: {
        pattern: "pattern"
      },
      features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      }
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static {
    this.\u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _\u0275InternalFormsSharedModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  constructor() {
    this.useNonNullable = false;
  }
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
   * </code-example>
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c2) => this._createControl(c2));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static {
    this.\u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FormBuilder,
      factory: _FormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static {
    this.\u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NonNullableFormBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NonNullableFormBuilder,
      factory: () => (() => inject(FormBuilder).nonNullable)(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UntypedFormBuilder_BaseFactory;
      return function UntypedFormBuilder_Factory(__ngFactoryType__) {
        return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _UntypedFormBuilder,
      factory: _UntypedFormBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION3 = new Version("18.2.10");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function FormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static {
    this.\u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReactiveFormsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ReactiveFormsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [\u0275InternalFormsSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/shared/dialogs/send-email/send-email.dialog.ts
var SendEmailDialog = class _SendEmailDialog {
  dialogRef;
  inputData;
  apiService;
  emailMessage = "";
  output = [];
  constructor(dialogRef, inputData, apiService) {
    this.dialogRef = dialogRef;
    this.inputData = inputData;
    this.apiService = apiService;
  }
  ngOnInit() {
    this.apiService.getAllCustomerEmails().subscribe((output) => {
      this.output = output;
    });
  }
  closeDialog() {
    this.dialogRef.close(this.output);
  }
  sendEmail() {
    if (this.inputData.isBulkEmail) {
      this.apiService.bulkSendEmail(this.emailMessage).subscribe((sent) => {
        if (sent) {
          let customers = this.output.map((customerEmail) => ({ id: customerEmail.customerId, name: customerEmail.customerName })).filter((value, index, self) => self.indexOf(value) === index);
          customers.forEach((c2) => {
            this.output.push(new CustomerEmail(c2.name, c2.id, this.emailMessage, "00000000-0000-0000-0000-000000000000", false, /* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()));
          });
          this.closeDialog();
        }
      });
    } else {
      this.apiService.sendNewEmail(new NewEmailRequest(this.inputData.customerId, this.emailMessage)).subscribe((sent) => {
        if (sent) {
          this.output.push(new CustomerEmail("existing customer sent again - this is a filler", this.inputData.customerId, this.emailMessage, "00000000-0000-0000-0000-000000000000", false, /* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()));
          this.closeDialog();
        }
      });
    }
  }
  static \u0275fac = function SendEmailDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SendEmailDialog)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(CustomerEmailService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SendEmailDialog, selectors: [["send-email"]], decls: 10, vars: 1, consts: [[1, "send-email-form"], [1, "send-email-input"], ["name", "emailMessage", "placeholder", "Dear Customer, Please...", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]], template: function SendEmailDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label");
      \u0275\u0275text(3, "What would you like the email to be?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "textarea", 2);
      \u0275\u0275twoWayListener("ngModelChange", function SendEmailDialog_Template_textarea_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.emailMessage, $event) || (ctx.emailMessage = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "footer")(6, "button", 3);
      \u0275\u0275listener("click", function SendEmailDialog_Template_button_click_6_listener() {
        return ctx.sendEmail();
      });
      \u0275\u0275text(7, "Send Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function SendEmailDialog_Template_button_click_8_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275text(9, "Close");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.emailMessage);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SendEmailDialog, { className: "SendEmailDialog", filePath: "src\\app\\shared\\dialogs\\send-email\\send-email.dialog.ts", lineNumber: 18 });
})();

// node_modules/@fortawesome/fontawesome-svg-core/index.mjs
var noop = () => {
};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== "undefined") _WINDOW = window;
  if (typeof document !== "undefined") _DOCUMENT = document;
  if (typeof MutationObserver !== "undefined") _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== "undefined") _PERFORMANCE = performance;
} catch (e) {
}
var {
  userAgent = ""
} = _WINDOW.navigator || {};
var WINDOW = _WINDOW;
var DOCUMENT2 = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT2.documentElement && !!DOCUMENT2.head && typeof DOCUMENT2.addEventListener === "function" && typeof DOCUMENT2.createElement === "function";
var IS_IE = ~userAgent.indexOf("MSIE") || ~userAgent.indexOf("Trident/");
var a = "classic";
var t = "duotone";
var r = "sharp";
var o = "sharp-duotone";
var c = [a, t, r, o];
var et$1 = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
};
var bt = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
};
var Ct = ["kit"];
var Dt = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/;
var Kt = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
var ao = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
};
var eo = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
};
var lo = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
};
var y = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
};
var no = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
};
var fo = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
};
var ho = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid"
  }
};
var x$1 = ["solid", "regular", "light", "thin", "duotone", "brands"];
var u$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var m$1 = u$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var t$1 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
};
var yo = [...Object.keys(y), ...x$1, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY].concat(u$1.map((o2) => "".concat(o2, "x"))).concat(m$1.map((o2) => "w-".concat(o2)));
var mo = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
};
var Io = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
};
var Fo = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
};
var So = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
var NAMESPACE_IDENTIFIER = "___FONT_AWESOME___";
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = "fa";
var DEFAULT_REPLACEMENT_CLASS = "svg-inline--fa";
var DATA_FA_I2SVG = "data-fa-i2svg";
var DATA_FA_PSEUDO_ELEMENT = "data-fa-pseudo-element";
var DATA_FA_PSEUDO_ELEMENT_PENDING = "data-fa-pseudo-element-pending";
var DATA_PREFIX = "data-prefix";
var DATA_ICON = "data-icon";
var HTML_CLASS_I2SVG_BASE_CLASS = "fontawesome-i2svg";
var MUTATION_APPROACH_ASYNC = "async";
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ["HTML", "HEAD", "STYLE", "SCRIPT"];
var PRODUCTION = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch (e$$1) {
    return false;
  }
})();
var FAMILIES = [a, r, o];
function familyProxy(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      return prop in target ? target[prop] : target[a];
    }
  });
}
var _PREFIX_TO_STYLE = __spreadValues({}, ho);
_PREFIX_TO_STYLE[a] = __spreadValues(__spreadValues(__spreadValues({}, ho[a]), bt["kit"]), bt["kit-duotone"]);
var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
var _STYLE_TO_PREFIX = __spreadValues({}, fo);
_STYLE_TO_PREFIX[a] = __spreadValues(__spreadValues(__spreadValues({}, _STYLE_TO_PREFIX[a]), So["kit"]), So["kit-duotone"]);
var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
var _PREFIX_TO_LONG_STYLE = __spreadValues({}, no);
_PREFIX_TO_LONG_STYLE[a] = __spreadValues(__spreadValues({}, _PREFIX_TO_LONG_STYLE[a]), Fo["kit"]);
var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
var _LONG_STYLE_TO_PREFIX = __spreadValues({}, lo);
_LONG_STYLE_TO_PREFIX[a] = __spreadValues(__spreadValues({}, _LONG_STYLE_TO_PREFIX[a]), Io["kit"]);
var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
var ICON_SELECTION_SYNTAX_PATTERN = Dt;
var LAYERS_TEXT_CLASSNAME = "fa-layers-text";
var FONT_FAMILY_PATTERN = Kt;
var _FONT_WEIGHT_TO_PREFIX = __spreadValues({}, et$1);
var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"];
var DUOTONE_CLASSES = t$1;
var prefixes = /* @__PURE__ */ new Set();
Object.keys(STYLE_TO_PREFIX[a]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[r]).map(prefixes.add.bind(prefixes));
Object.keys(STYLE_TO_PREFIX[o]).map(prefixes.add.bind(prefixes));
var RESERVED_CLASSES = [...Ct, ...yo];
var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT2.querySelector("script[" + attr + "]");
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  if (val === "") return true;
  if (val === "false") return false;
  if (val === "true") return true;
  return val;
}
if (DOCUMENT2 && typeof DOCUMENT2.querySelector === "function") {
  const attrs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  attrs.forEach((_ref) => {
    let [attr, key] = _ref;
    const val = coerce(getAttrConfig(attr));
    if (val !== void 0 && val !== null) {
      initial[key] = val;
    }
  });
}
var _default = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: "async",
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = __spreadValues(__spreadValues({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach((key) => {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function(val) {
      _config[key] = val;
      _onChangeCb.forEach((cb) => cb(config));
    },
    get: function() {
      return _config[key];
    }
  });
});
Object.defineProperty(config, "familyPrefix", {
  enumerable: true,
  set: function(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach((cb) => cb(config));
  },
  get: function() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return () => {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}
var d$2 = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css2) {
  if (!css2 || !IS_DOM) {
    return;
  }
  const style2 = DOCUMENT2.createElement("style");
  style2.setAttribute("type", "text/css");
  style2.innerHTML = css2;
  const headChildren = DOCUMENT2.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = (child.tagName || "").toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT2.head.insertBefore(style2, beforeChild);
  return css2;
}
var idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nextUniqueId2() {
  let size = 12;
  let id = "";
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  const array = [];
  for (let i = (obj || []).length >>> 0; i--; ) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute("class") || "").split(" ").filter((i) => i);
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce((acc, attributeName) => {
    return acc + "".concat(attributeName, '="').concat(htmlEscape(attributes[attributeName]), '" ');
  }, "").trim();
}
function joinStyles(styles2) {
  return Object.keys(styles2 || {}).reduce((acc, styleName) => {
    return acc + "".concat(styleName, ": ").concat(styles2[styleName].trim(), ";");
  }, "");
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  let {
    transform,
    containerWidth,
    iconWidth
  } = _ref;
  const outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  const inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  const path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer,
    inner,
    path
  };
}
function transformForCss(_ref2) {
  let {
    transform,
    width = UNITS_IN_GRID,
    height = UNITS_IN_GRID,
    startCentered = false
  } = _ref2;
  let val = "";
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}
var baseStyles = ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
function css() {
  const dcp = DEFAULT_CSS_PREFIX;
  const drc = DEFAULT_REPLACEMENT_CLASS;
  const fp = config.cssPrefix;
  const rc = config.replacementClass;
  let s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    const dPatt = new RegExp("\\.".concat(dcp, "\\-"), "g");
    const customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), "g");
    const rPatt = new RegExp("\\.".concat(drc), "g");
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var InjectCSS = {
  mixout() {
    return {
      dom: {
        css,
        insertCss: ensureCss
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg() {
        ensureCss();
      }
    };
  }
};
var w$1 = WINDOW || {};
if (!w$1[NAMESPACE_IDENTIFIER]) w$1[NAMESPACE_IDENTIFIER] = {};
if (!w$1[NAMESPACE_IDENTIFIER].styles) w$1[NAMESPACE_IDENTIFIER].styles = {};
if (!w$1[NAMESPACE_IDENTIFIER].hooks) w$1[NAMESPACE_IDENTIFIER].hooks = {};
if (!w$1[NAMESPACE_IDENTIFIER].shims) w$1[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w$1[NAMESPACE_IDENTIFIER];
var functions = [];
var listener = function() {
  DOCUMENT2.removeEventListener("DOMContentLoaded", listener);
  loaded = 1;
  functions.map((fn) => fn());
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT2.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT2.readyState);
  if (!loaded) DOCUMENT2.addEventListener("DOMContentLoaded", listener);
}
function domready(fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}
function toHtml(abstractNodes) {
  const {
    tag,
    attributes = {},
    children = []
  } = abstractNodes;
  if (typeof abstractNodes === "string") {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(""), "</").concat(tag, ">");
  }
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix,
      iconName,
      icon: mapping[prefix][iconName]
    };
  }
}
var bindInternal4 = function bindInternal42(func, thisContext) {
  return function(a2, b, c2, d) {
    return func.call(thisContext, a2, b, c2, d);
  };
};
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject), length = keys.length, iterator = thisContext !== void 0 ? bindInternal4(fn, thisContext) : fn, i, key, result;
  if (initialValue === void 0) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};
function ucs2decode(string) {
  const output = [];
  let counter2 = 0;
  const length = string.length;
  while (counter2 < length) {
    const value = string.charCodeAt(counter2++);
    if (value >= 55296 && value <= 56319 && counter2 < length) {
      const extra = string.charCodeAt(counter2++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter2--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function toHex(unicode) {
  const decoded = ucs2decode(unicode);
  return decoded.length === 1 ? decoded[0].toString(16) : null;
}
function codePointAt(string, index) {
  const size = string.length;
  let first = string.charCodeAt(index);
  let second;
  if (first >= 55296 && first <= 56319 && size > index + 1) {
    second = string.charCodeAt(index + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function normalizeIcons(icons) {
  return Object.keys(icons).reduce((acc, iconName) => {
    const icon2 = icons[iconName];
    const expanded = !!icon2.icon;
    if (expanded) {
      acc[icon2.iconName] = icon2.icon;
    } else {
      acc[iconName] = icon2;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  let params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks = false
  } = params;
  const normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === "function" && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = __spreadValues(__spreadValues({}, namespace.styles[prefix] || {}), normalized);
  }
  if (prefix === "fas") {
    defineIcons("fa", icons);
  }
}
var {
  styles,
  shims
} = namespace;
var LONG_STYLE = {
  [a]: Object.values(PREFIX_TO_LONG_STYLE[a]),
  [r]: Object.values(PREFIX_TO_LONG_STYLE[r]),
  [o]: Object.values(PREFIX_TO_LONG_STYLE[o])
};
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
var PREFIXES = {
  [a]: Object.keys(PREFIX_TO_STYLE[a]),
  [r]: Object.keys(PREFIX_TO_STYLE[r]),
  [o]: Object.keys(PREFIX_TO_STYLE[o])
};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  const parts = cls.split("-");
  const prefix = parts[0];
  const iconName = parts.slice(1).join("-");
  if (prefix === cssPrefix && iconName !== "" && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = () => {
  const lookup = (reducer) => {
    return reduce(styles, (o$$1, style2, prefix) => {
      o$$1[prefix] = reduce(style2, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup((acc, icon2, iconName) => {
    if (icon2[3]) {
      acc[icon2[3]] = iconName;
    }
    if (icon2[2]) {
      const aliases = icon2[2].filter((a$$1) => {
        return typeof a$$1 === "number";
      });
      aliases.forEach((alias) => {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup((acc, icon2, iconName) => {
    acc[iconName] = iconName;
    if (icon2[2]) {
      const aliases = icon2[2].filter((a$$1) => {
        return typeof a$$1 === "string";
      });
      aliases.forEach((alias) => {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup((acc, icon2, iconName) => {
    const aliases = icon2[2];
    acc[iconName] = iconName;
    aliases.forEach((alias) => {
      acc[alias] = iconName;
    });
    return acc;
  });
  const hasRegular = "far" in styles || config.autoFetchSvg;
  const shimLookups = reduce(shims, (acc, shim) => {
    const maybeNameMaybeUnicode = shim[0];
    let prefix = shim[1];
    const iconName = shim[2];
    if (prefix === "far" && !hasRegular) {
      prefix = "fas";
    }
    if (typeof maybeNameMaybeUnicode === "string") {
      acc.names[maybeNameMaybeUnicode] = {
        prefix,
        iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === "number") {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix,
        iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange((c$$1) => {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  const oldUnicode = _byOldUnicode[unicode];
  const newUnicode = byUnicode("fas", unicode);
  return oldUnicode || (newUnicode ? {
    prefix: "fas",
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = () => {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalPrefix(styleOrPrefix) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family = a
  } = params;
  const style2 = PREFIX_TO_STYLE[family][styleOrPrefix];
  const prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style2];
  const defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  const result = prefix || defined || null;
  return result;
}
var PREFIXES_FOR_FAMILY = {
  [a]: Object.keys(PREFIX_TO_LONG_STYLE[a]),
  [r]: Object.keys(PREFIX_TO_LONG_STYLE[r]),
  [o]: Object.keys(PREFIX_TO_LONG_STYLE[o])
};
function getCanonicalIcon(values) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups = false
  } = params;
  const famProps = {
    [a]: "".concat(config.cssPrefix, "-").concat(a),
    [r]: "".concat(config.cssPrefix, "-").concat(r),
    [o]: "".concat(config.cssPrefix, "-").concat(o)
  };
  let givenPrefix = null;
  let family = a;
  const nonDuotoneFamilyIds = c.filter((familyId) => familyId !== t);
  nonDuotoneFamilyIds.forEach((familyId) => {
    if (values.includes(famProps[familyId]) || values.some((v$$1) => PREFIXES_FOR_FAMILY[familyId].includes(v$$1))) {
      family = familyId;
    }
  });
  const canonical = values.reduce((acc, cls) => {
    const iconName = getIconName(config.cssPrefix, cls);
    if (styles[cls]) {
      cls = LONG_STYLE[family].includes(cls) ? LONG_STYLE_TO_PREFIX[family][cls] : cls;
      givenPrefix = cls;
      acc.prefix = cls;
    } else if (PREFIXES[family].indexOf(cls) > -1) {
      givenPrefix = cls;
      acc.prefix = getCanonicalPrefix(cls, {
        family
      });
    } else if (iconName) {
      acc.iconName = iconName;
    } else if (cls !== config.replacementClass && !nonDuotoneFamilyIds.some((familyName) => cls === famProps[familyName])) {
      acc.rest.push(cls);
    }
    if (!skipLookups && acc.prefix && acc.iconName) {
      const shim = givenPrefix === "fa" ? byOldName(acc.iconName) : {};
      const aliasIconName = byAlias(acc.prefix, acc.iconName);
      if (shim.prefix) {
        givenPrefix = null;
      }
      acc.iconName = shim.iconName || aliasIconName || acc.iconName;
      acc.prefix = shim.prefix || acc.prefix;
      if (acc.prefix === "far" && !styles["far"] && styles["fas"] && !config.autoFetchSvg) {
        acc.prefix = "fas";
      }
    }
    return acc;
  }, emptyCanonicalIcon());
  if (values.includes("fa-brands") || values.includes("fab")) {
    canonical.prefix = "fab";
  }
  if (values.includes("fa-duotone") || values.includes("fad")) {
    canonical.prefix = "fad";
  }
  if (!canonical.prefix && family === r && (styles["fass"] || config.autoFetchSvg)) {
    canonical.prefix = "fass";
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }
  if (!canonical.prefix && family === o && (styles["fasds"] || config.autoFetchSvg)) {
    canonical.prefix = "fasds";
    canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
  }
  if (canonical.prefix === "fa" || givenPrefix === "fa") {
    canonical.prefix = getDefaultUsablePrefix() || "fas";
  }
  return canonical;
}
var Library = class {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
      definitions[_key] = arguments[_key];
    }
    const additions = definitions.reduce(this._pullDefinitions, {});
    Object.keys(additions).forEach((key) => {
      this.definitions[key] = __spreadValues(__spreadValues({}, this.definitions[key] || {}), additions[key]);
      defineIcons(key, additions[key]);
      const longPrefix = PREFIX_TO_LONG_STYLE[a][key];
      if (longPrefix) defineIcons(longPrefix, additions[key]);
      build();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(additions, definition) {
    const normalized = definition.prefix && definition.iconName && definition.icon ? {
      0: definition
    } : definition;
    Object.keys(normalized).map((key) => {
      const {
        prefix,
        iconName,
        icon: icon2
      } = normalized[key];
      const aliases = icon2[2];
      if (!additions[prefix]) additions[prefix] = {};
      if (aliases.length > 0) {
        aliases.forEach((alias) => {
          if (typeof alias === "string") {
            additions[prefix][alias] = icon2;
          }
        });
      }
      additions[prefix][iconName] = icon2;
    });
    return additions;
  }
};
var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  let {
    mixoutsTo: obj
  } = _ref;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach((k) => {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach((plugin) => {
    const mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach((tk) => {
      if (typeof mixout[tk] === "function") {
        obj[tk] = mixout[tk];
      }
      if (typeof mixout[tk] === "object") {
        Object.keys(mixout[tk]).forEach((sk) => {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      const hooks = plugin.hooks();
      Object.keys(hooks).forEach((hook) => {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach((hookFn) => {
    accumulator = hookFn.apply(null, [accumulator, ...args]);
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  const hookFns = _hooks[hook] || [];
  hookFns.forEach((hookFn) => {
    hookFn.apply(null, args);
  });
  return void 0;
}
function callProvided() {
  const hook = arguments[0];
  const args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : void 0;
}
function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === "fa") {
    iconLookup.prefix = "fas";
  }
  let {
    iconName
  } = iconLookup;
  const prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = () => {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks("noAuto");
};
var dom = {
  i2svg: function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (IS_DOM) {
      callHooks("beforeI2svg", params);
      callProvided("pseudoElements2svg", params);
      return callProvided("i2svg", params);
    } else {
      return Promise.reject(new Error("Operation requires a DOM of some kind."));
    }
  },
  watch: function() {
    let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot
    } = params;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(() => {
      autoReplace({
        autoReplaceSvgRoot
      });
      callHooks("watch", params);
    });
  }
};
var parse = {
  icon: (icon2) => {
    if (icon2 === null) {
      return null;
    }
    if (typeof icon2 === "object" && icon2.prefix && icon2.iconName) {
      return {
        prefix: icon2.prefix,
        iconName: byAlias(icon2.prefix, icon2.iconName) || icon2.iconName
      };
    }
    if (Array.isArray(icon2) && icon2.length === 2) {
      const iconName = icon2[1].indexOf("fa-") === 0 ? icon2[1].slice(3) : icon2[1];
      const prefix = getCanonicalPrefix(icon2[0]);
      return {
        prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof icon2 === "string" && (icon2.indexOf("".concat(config.cssPrefix, "-")) > -1 || icon2.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      const canonicalIcon = getCanonicalIcon(icon2.split(" "), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof icon2 === "string") {
      const prefix = getDefaultUsablePrefix();
      return {
        prefix,
        iconName: byAlias(prefix, icon2) || icon2
      };
    }
  }
};
var api = {
  noAuto,
  config,
  dom,
  parse,
  library,
  findIconDefinition,
  toHtml
};
var autoReplace = function() {
  let params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot = DOCUMENT2
  } = params;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};
function domVariants(val, abstractCreator) {
  Object.defineProperty(val, "abstract", {
    get: abstractCreator
  });
  Object.defineProperty(val, "html", {
    get: function() {
      return val.abstract.map((a2) => toHtml(a2));
    }
  });
  Object.defineProperty(val, "node", {
    get: function() {
      if (!IS_DOM) return;
      const container = DOCUMENT2.createElement("div");
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}
function asIcon(_ref) {
  let {
    children,
    main,
    mask,
    attributes,
    styles: styles2,
    transform
  } = _ref;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    const {
      width,
      height
    } = main;
    const offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes["style"] = joinStyles(__spreadProps(__spreadValues({}, styles2), {
      "transform-origin": "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes,
    children
  }];
}
function asSymbol(_ref) {
  let {
    prefix,
    iconName,
    children,
    attributes,
    symbol
  } = _ref;
  const id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: __spreadProps(__spreadValues({}, attributes), {
        id
      }),
      children
    }]
  }];
}
function makeInlineSvgAbstract(params) {
  const {
    icons: {
      main,
      mask
    },
    prefix,
    iconName,
    transform,
    symbol,
    title,
    maskId,
    titleId,
    extra,
    watchable = false
  } = params;
  const {
    width,
    height
  } = mask.found ? mask : main;
  const isUploadedIcon = prefix === "fak";
  const attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ""].filter((c2) => extra.classes.indexOf(c2) === -1).filter((c2) => c2 !== "" || !!c2).concat(extra.classes).join(" ");
  let content = {
    children: [],
    attributes: __spreadProps(__spreadValues({}, extra.attributes), {
      "data-prefix": prefix,
      "data-icon": iconName,
      "class": attrClass,
      "role": extra.attributes.role || "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 ".concat(width, " ").concat(height)
    })
  };
  const uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf("fa-fw") ? {
    width: "".concat(width / height * 16 * 0.0625, "em")
  } : {};
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = "";
  }
  if (title) {
    content.children.push({
      tag: "title",
      attributes: {
        id: content.attributes["aria-labelledby"] || "title-".concat(titleId || nextUniqueId2())
      },
      children: [title]
    });
    delete content.attributes.title;
  }
  const args = __spreadProps(__spreadValues({}, content), {
    prefix,
    iconName,
    main,
    mask,
    maskId,
    transform,
    symbol,
    styles: __spreadValues(__spreadValues({}, uploadedIconWidthStyle), extra.styles)
  });
  const {
    children,
    attributes
  } = mask.found && main.found ? callProvided("generateAbstractMask", args) || {
    children: [],
    attributes: {}
  } : callProvided("generateAbstractIcon", args) || {
    children: [],
    attributes: {}
  };
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  const {
    content,
    width,
    height,
    transform,
    title,
    extra,
    watchable = false
  } = params;
  const attributes = __spreadProps(__spreadValues(__spreadValues({}, extra.attributes), title ? {
    "title": title
  } : {}), {
    "class": extra.classes.join(" ")
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = "";
  }
  const styles2 = __spreadValues({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles2["transform"] = transformForCss({
      transform,
      startCentered: true,
      width,
      height
    });
    styles2["-webkit-transform"] = styles2["transform"];
  }
  const styleString = joinStyles(styles2);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  const val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
function makeLayersCounterAbstract(params) {
  const {
    content,
    title,
    extra
  } = params;
  const attributes = __spreadProps(__spreadValues(__spreadValues({}, extra.attributes), title ? {
    "title": title
  } : {}), {
    "class": extra.classes.join(" ")
  });
  const styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes["style"] = styleString;
  }
  const val = [];
  val.push({
    tag: "span",
    attributes,
    children: [content]
  });
  if (title) {
    val.push({
      tag: "span",
      attributes: {
        class: "sr-only"
      },
      children: [title]
    });
  }
  return val;
}
var {
  styles: styles$1
} = namespace;
function asFoundIcon(icon2) {
  const width = icon2[0];
  const height = icon2[1];
  const [vectorData] = icon2.slice(4);
  let element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: "g",
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: "currentColor",
          d: vectorData[0]
        }
      }, {
        tag: "path",
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: "currentColor",
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: "path",
      attributes: {
        fill: "currentColor",
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width,
    height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error('Icon with name "'.concat(iconName, '" and prefix "').concat(prefix, '" is missing.'));
  }
}
function findIcon(iconName, prefix) {
  let givenPrefix = prefix;
  if (prefix === "fa" && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise((resolve, reject) => {
    if (givenPrefix === "fa") {
      const shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      const icon2 = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon2));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(__spreadProps(__spreadValues({}, missingIconResolutionMixin), {
      icon: config.showMissingIcons && iconName ? callProvided("missingIconAbstract") || {} : {}
    }));
  });
}
var noop$1 = () => {
};
var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = 'FA "6.6.0"';
var begin = (name) => {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return () => end(name);
};
var end = (name) => {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin,
  end
};
var noop$2 = () => {
};
function isWatched(node) {
  const i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === "string";
}
function hasPrefixAndIcon(node) {
  const prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  const icon2 = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon2;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  const mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT2.createElementNS("http://www.w3.org/2000/svg", tag);
}
function createElement(tag) {
  return DOCUMENT2.createElement(tag);
}
function convertSVG(abstractObj) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn = abstractObj.tag === "svg" ? createElementNS : createElement
  } = params;
  if (typeof abstractObj === "string") {
    return DOCUMENT2.createTextNode(abstractObj);
  }
  const tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function(key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  const children = abstractObj.children || [];
  children.forEach(function(child) {
    tag.appendChild(convertSVG(child, {
      ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  let comment = " ".concat(node.outerHTML, " ");
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  return comment;
}
var mutators = {
  replace: function(mutation) {
    const node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach((abstract) => {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        let comment = DOCUMENT2.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function(mutation) {
    const node = mutation[0];
    const abstract = mutation[1];
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    const forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      const splitClasses = abstract[0].attributes.class.split(" ").reduce((acc, cls) => {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(" ");
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute("class");
      } else {
        node.setAttribute("class", splitClasses.toNode.join(" "));
      }
    }
    const newInnerHTML = abstract.map((a2) => toHtml(a2)).join("\n");
    node.setAttribute(DATA_FA_I2SVG, "");
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  const callbackFunction = typeof callback === "function" ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    let frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(() => {
      const mutator = getMutator();
      const mark = perf.begin("mutate");
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo$1 = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  const {
    treeCallback = noop$2,
    nodeCallback = noop$2,
    pseudoElementsCallback = noop$2,
    observeMutationsRoot = DOCUMENT2
  } = options;
  mo$1 = new MUTATION_OBSERVER((objects) => {
    if (disabled) return;
    const defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach((mutationRecord) => {
      if (mutationRecord.type === "childList" && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === "attributes" && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }
      if (mutationRecord.type === "attributes" && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === "class" && hasPrefixAndIcon(mutationRecord.target)) {
          const {
            prefix,
            iconName
          } = getCanonicalIcon(classArray(mutationRecord.target));
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo$1.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo$1) return;
  mo$1.disconnect();
}
function styleParser(node) {
  const style2 = node.getAttribute("style");
  let val = [];
  if (style2) {
    val = style2.split(";").reduce((acc, style3) => {
      const styles2 = style3.split(":");
      const prop = styles2[0];
      const value = styles2.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(":").trim();
      }
      return acc;
    }, {});
  }
  return val;
}
function classParser(node) {
  const existingPrefix = node.getAttribute("data-prefix");
  const existingIconName = node.getAttribute("data-icon");
  const innerText = node.innerText !== void 0 ? node.innerText.trim() : "";
  let val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}
function attributesParser(node) {
  const extraAttributes = toArray(node.attributes).reduce((acc, attr) => {
    if (acc.name !== "class" && acc.name !== "style") {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  const title = node.getAttribute("title");
  const titleId = node.getAttribute("data-fa-title-id");
  if (config.autoA11y) {
    if (title) {
      extraAttributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId2());
    } else {
      extraAttributes["aria-hidden"] = "true";
      extraAttributes["focusable"] = "false";
    }
  }
  return extraAttributes;
}
function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  let parser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: true
  };
  const {
    iconName,
    prefix,
    rest: extraClasses
  } = classParser(node);
  const extraAttributes = attributesParser(node);
  const pluginMeta = chainHooks("parseNodeAttributes", {}, node);
  let extraStyles = parser.styleParser ? styleParser(node) : [];
  return __spreadValues({
    iconName,
    title: node.getAttribute("title"),
    titleId: node.getAttribute("data-fa-title-id"),
    prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}
var {
  styles: styles$2
} = namespace;
function generateMutation(node) {
  const nodeMeta = config.autoReplaceSvg === "nest" ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided("generateLayersText", node, nodeMeta);
  } else {
    return callProvided("generateSvgReplacementMutation", node, nodeMeta);
  }
}
var knownPrefixes = /* @__PURE__ */ new Set();
FAMILIES.map((family) => {
  knownPrefixes.add("fa-".concat(family));
});
Object.keys(PREFIX_TO_STYLE[a]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[r]).map(knownPrefixes.add.bind(knownPrefixes));
Object.keys(PREFIX_TO_STYLE[o]).map(knownPrefixes.add.bind(knownPrefixes));
knownPrefixes = [...knownPrefixes];
function onTree(root) {
  let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  const htmlClassList = DOCUMENT2.documentElement.classList;
  const hclAdd = (suffix) => htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const hclRemove = (suffix) => htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  const prefixes2 = config.autoFetchSvg ? knownPrefixes : FAMILIES.map((f$$1) => "fa-".concat(f$$1)).concat(Object.keys(styles$2));
  if (!prefixes2.includes("fa")) {
    prefixes2.push("fa");
  }
  const prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes2.map((p$$1) => ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])"))).join(", ");
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  let candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
  }
  if (candidates.length > 0) {
    hclAdd("pending");
    hclRemove("complete");
  } else {
    return Promise.resolve();
  }
  const mark = perf.begin("onTree");
  const mutations = candidates.reduce((acc, node) => {
    try {
      const mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === "MissingIcon") {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise((resolve, reject) => {
    Promise.all(mutations).then((resolvedMutations) => {
      perform(resolvedMutations, () => {
        hclAdd("active");
        hclAdd("complete");
        hclRemove("pending");
        if (typeof callback === "function") callback();
        mark();
        resolve();
      });
    }).catch((e$$1) => {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  let callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  generateMutation(node).then((mutation) => {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function(maybeIconDefinition) {
    let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    let {
      mask
    } = params;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, __spreadProps(__spreadValues({}, params), {
      mask
    }));
  };
}
var render = function(iconDefinition) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform = meaninglessTransform,
    symbol = false,
    mask = null,
    maskId = null,
    title = null,
    titleId = null,
    classes = [],
    attributes = {},
    styles: styles2 = {}
  } = params;
  if (!iconDefinition) return;
  const {
    prefix,
    iconName,
    icon: icon2
  } = iconDefinition;
  return domVariants(__spreadValues({
    type: "icon"
  }, iconDefinition), () => {
    callHooks("beforeDOMElementCreation", {
      iconDefinition,
      params
    });
    if (config.autoA11y) {
      if (title) {
        attributes["aria-labelledby"] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId2());
      } else {
        attributes["aria-hidden"] = "true";
        attributes["focusable"] = "false";
      }
    }
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon2),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix,
      iconName,
      transform: __spreadValues(__spreadValues({}, meaninglessTransform), transform),
      symbol,
      title,
      maskId,
      titleId,
      extra: {
        attributes,
        styles: styles2,
        classes
      }
    });
  });
};
var ReplaceElements = {
  mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides(providers$$1) {
    providers$$1.i2svg = function(params) {
      const {
        node = DOCUMENT2,
        callback = () => {
        }
      } = params;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function(node, nodeMeta) {
      const {
        iconName,
        title,
        titleId,
        prefix,
        transform,
        symbol,
        mask,
        maskId,
        extra
      } = nodeMeta;
      return new Promise((resolve, reject) => {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then((_ref) => {
          let [main, mask2] = _ref;
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main,
              mask: mask2
            },
            prefix,
            iconName,
            transform,
            symbol,
            maskId,
            title,
            titleId,
            extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function(_ref2) {
      let {
        children,
        attributes,
        main,
        transform,
        styles: styles2
      } = _ref2;
      const styleString = joinStyles(styles2);
      if (styleString.length > 0) {
        attributes["style"] = styleString;
      }
      let nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided("generateAbstractTransformGrouping", {
          main,
          transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children,
        attributes
      };
    };
  }
};
var Layers = {
  mixout() {
    return {
      layer(assembler) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes = []
        } = params;
        return domVariants({
          type: "layer"
        }, () => {
          callHooks("beforeDOMElementCreation", {
            assembler,
            params
          });
          let children = [];
          assembler((args) => {
            Array.isArray(args) ? args.map((a2) => {
              children = children.concat(a2.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: "span",
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers"), ...classes].join(" ")
            },
            children
          }];
        });
      }
    };
  }
};
var LayersCounter = {
  mixout() {
    return {
      counter(content) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title = null,
          classes = [],
          attributes = {},
          styles: styles2 = {}
        } = params;
        return domVariants({
          type: "counter",
          content
        }, () => {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-counter"), ...classes]
            }
          });
        });
      }
    };
  }
};
var LayersText = {
  mixout() {
    return {
      text(content) {
        let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform = meaninglessTransform,
          title = null,
          classes = [],
          attributes = {},
          styles: styles2 = {}
        } = params;
        return domVariants({
          type: "text",
          content
        }, () => {
          callHooks("beforeDOMElementCreation", {
            content,
            params
          });
          return makeLayersTextAbstract({
            content,
            transform: __spreadValues(__spreadValues({}, meaninglessTransform), transform),
            title,
            extra: {
              attributes,
              styles: styles2,
              classes: ["".concat(config.cssPrefix, "-layers-text"), ...classes]
            }
          });
        });
      }
    };
  },
  provides(providers$$1) {
    providers$$1.generateLayersText = function(node, nodeMeta) {
      const {
        title,
        transform,
        extra
      } = nodeMeta;
      let width = null;
      let height = null;
      if (IS_IE) {
        const computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        const boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      if (config.autoA11y && !title) {
        extra.attributes["aria-hidden"] = "true";
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width,
        height,
        transform,
        title,
        extra,
        watchable: true
      })]);
    };
  }
};
var CLEAN_CONTENT_PATTERN = new RegExp('"', "ug");
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
var _FONT_FAMILY_WEIGHT_TO_PREFIX = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), eo), ao), mo);
var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, key) => {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce((acc, fontFamily) => {
  const weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || [...Object.entries(weights)][0][1];
  return acc;
}, {});
function hexValueFromContent(content) {
  const cleaned = content.replace(CLEAN_CONTENT_PATTERN, "");
  const codePoint = codePointAt(cleaned, 0);
  const isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  const isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return {
    value: isDoubled ? toHex(cleaned[0]) : toHex(cleaned),
    isSecondary: isPrependTen || isDoubled
  };
}
function getPrefix(fontFamily, fontWeight) {
  const fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, "").toLowerCase();
  const fontWeightInteger = parseInt(fontWeight);
  const fontWeightSanitized = isNaN(fontWeightInteger) ? "normal" : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  const pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(":", "-"));
  return new Promise((resolve, reject) => {
    if (node.getAttribute(pendingAttribute) !== null) {
      return resolve();
    }
    const children = toArray(node.children);
    const alreadyProcessedPseudoElement = children.filter((c2) => c2.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position)[0];
    const styles2 = WINDOW.getComputedStyle(node, position);
    const fontFamily = styles2.getPropertyValue("font-family");
    const fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    const fontWeight = styles2.getPropertyValue("font-weight");
    const content = styles2.getPropertyValue("content");
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== "none" && content !== "") {
      const content2 = styles2.getPropertyValue("content");
      let prefix = getPrefix(fontFamily, fontWeight);
      const {
        value: hexValue,
        isSecondary
      } = hexValueFromContent(content2);
      const isV4 = fontFamilyMatch[0].startsWith("FontAwesome");
      let iconName = byUnicode(prefix, hexValue);
      let iconIdentifier = iconName;
      if (isV4) {
        const iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          node.removeChild(alreadyProcessedPseudoElement);
        }
        const meta = blankMeta();
        const {
          extra
        } = meta;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then((main) => {
          const abstract = makeInlineSvgAbstract(__spreadProps(__spreadValues({}, meta), {
            icons: {
              main,
              mask: emptyCanonicalIcon()
            },
            prefix,
            iconName: iconIdentifier,
            extra,
            watchable: true
          }));
          const element = DOCUMENT2.createElementNS("http://www.w3.org/2000/svg", "svg");
          if (position === "::before") {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map((a2) => toHtml(a2)).join("\n");
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace(node) {
  return Promise.all([replaceForPosition(node, "::before"), replaceForPosition(node, "::after")]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== "svg");
}
function searchPseudoElements(root) {
  if (!IS_DOM) return;
  return new Promise((resolve, reject) => {
    const operations = toArray(root.querySelectorAll("*")).filter(processable).map(replace);
    const end2 = perf.begin("searchPseudoElements");
    disableObservation();
    Promise.all(operations).then(() => {
      end2();
      enableObservation();
      resolve();
    }).catch(() => {
      end2();
      enableObservation();
      reject();
    });
  });
}
var PseudoElements = {
  hooks() {
    return {
      mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.pseudoElements2svg = function(params) {
      const {
        node = DOCUMENT2
      } = params;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};
var _unwatched = false;
var MutationObserver$1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        observe(chainHooks("mutationObserverCallbacks", {}));
      },
      noAuto() {
        disconnect();
      },
      watch(params) {
        const {
          observeMutationsRoot
        } = params;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks("mutationObserverCallbacks", {
            observeMutationsRoot
          }));
        }
      }
    };
  }
};
var parseTransformString = (transformString) => {
  let transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(" ").reduce((acc, n) => {
    const parts = n.toLowerCase().split("-");
    const first = parts[0];
    let rest = parts.slice(1).join("-");
    if (first && rest === "h") {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === "v") {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case "grow":
        acc.size = acc.size + rest;
        break;
      case "shrink":
        acc.size = acc.size - rest;
        break;
      case "left":
        acc.x = acc.x - rest;
        break;
      case "right":
        acc.x = acc.x + rest;
        break;
      case "up":
        acc.y = acc.y - rest;
        break;
      case "down":
        acc.y = acc.y + rest;
        break;
      case "rotate":
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var PowerTransforms = {
  mixout() {
    return {
      parse: {
        transform: (transformString) => {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const transformString = node.getAttribute("data-fa-transform");
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.generateAbstractTransformGrouping = function(_ref) {
      let {
        main,
        transform,
        containerWidth,
        iconWidth
      } = _ref;
      const outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      const innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      const innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      const innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      const inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      const path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      const operations = {
        outer,
        inner,
        path
      };
      return {
        tag: "g",
        attributes: __spreadValues({}, operations.outer),
        children: [{
          tag: "g",
          attributes: __spreadValues({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: __spreadValues(__spreadValues({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};
var ALL_SPACE = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function fillBlack(abstract) {
  let force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = "black";
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === "g") {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var Masks = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const maskData = node.getAttribute("data-fa-mask");
        const mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(" ").map((i) => i.trim()));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute("data-fa-mask-id");
        return accumulator;
      }
    };
  },
  provides(providers2) {
    providers2.generateAbstractMask = function(_ref) {
      let {
        children,
        attributes,
        main,
        mask,
        maskId: explicitMaskId,
        transform
      } = _ref;
      const {
        width: mainWidth,
        icon: mainPath
      } = main;
      const {
        width: maskWidth,
        icon: maskPath
      } = mask;
      const trans = transformForSvg({
        transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      const maskRect = {
        tag: "rect",
        attributes: __spreadProps(__spreadValues({}, ALL_SPACE), {
          fill: "white"
        })
      };
      const maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      const maskInnerGroup = {
        tag: "g",
        attributes: __spreadValues({}, trans.inner),
        children: [fillBlack(__spreadValues({
          tag: mainPath.tag,
          attributes: __spreadValues(__spreadValues({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      const maskOuterGroup = {
        tag: "g",
        attributes: __spreadValues({}, trans.outer),
        children: [maskInnerGroup]
      };
      const maskId = "mask-".concat(explicitMaskId || nextUniqueId2());
      const clipId = "clip-".concat(explicitMaskId || nextUniqueId2());
      const maskTag = {
        tag: "mask",
        attributes: __spreadProps(__spreadValues({}, ALL_SPACE), {
          id: maskId,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [maskRect, maskOuterGroup]
      };
      const defs = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: "rect",
        attributes: __spreadValues({
          fill: "currentColor",
          "clip-path": "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children,
        attributes
      };
    };
  }
};
var MissingIconIndicator = {
  provides(providers2) {
    let reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    providers2.missingIconAbstract = function() {
      const gChildren = [];
      const FILL = {
        fill: "currentColor"
      };
      const ANIMATION_BASE = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      gChildren.push({
        tag: "path",
        attributes: __spreadProps(__spreadValues({}, FILL), {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const OPACITY_ANIMATE = __spreadProps(__spreadValues({}, ANIMATION_BASE), {
        attributeName: "opacity"
      });
      const dot = {
        tag: "circle",
        attributes: __spreadProps(__spreadValues({}, FILL), {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: "animate",
          attributes: __spreadProps(__spreadValues({}, ANIMATION_BASE), {
            attributeName: "r",
            values: "28;14;28;28;14;28;"
          })
        }, {
          tag: "animate",
          attributes: __spreadProps(__spreadValues({}, OPACITY_ANIMATE), {
            values: "1;0;1;1;0;1;"
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: "path",
        attributes: __spreadProps(__spreadValues({}, FILL), {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: reduceMotion ? [] : [{
          tag: "animate",
          attributes: __spreadProps(__spreadValues({}, OPACITY_ANIMATE), {
            values: "1;0;0;0;0;1;"
          })
        }]
      });
      if (!reduceMotion) {
        gChildren.push({
          tag: "path",
          attributes: __spreadProps(__spreadValues({}, FILL), {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
          }),
          children: [{
            tag: "animate",
            attributes: __spreadProps(__spreadValues({}, OPACITY_ANIMATE), {
              values: "0;0;1;1;0;0;"
            })
          }]
        });
      }
      return {
        tag: "g",
        attributes: {
          "class": "missing"
        },
        children: gChildren
      };
    };
  }
};
var SvgSymbols = {
  hooks() {
    return {
      parseNodeAttributes(accumulator, node) {
        const symbolData = node.getAttribute("data-fa-symbol");
        const symbol = symbolData === null ? false : symbolData === "" ? true : symbolData;
        accumulator["symbol"] = symbol;
        return accumulator;
      }
    };
  }
};
var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];
registerPlugins(plugins, {
  mixoutsTo: api
});
var noAuto$1 = api.noAuto;
var config$1 = api.config;
var library$1 = api.library;
var dom$1 = api.dom;
var parse$1 = api.parse;
var findIconDefinition$1 = api.findIconDefinition;
var toHtml$1 = api.toHtml;
var icon = api.icon;
var layer = api.layer;
var text = api.text;
var counter = api.counter;

// node_modules/@fortawesome/angular-fontawesome/fesm2022/angular-fontawesome.mjs
var _c03 = ["*"];
var faWarnIfIconDefinitionMissing = (iconSpec) => {
  throw new Error(`Could not find icon with iconName=${iconSpec.iconName} and prefix=${iconSpec.prefix} in the icon library.`);
};
var faWarnIfIconSpecMissing = () => {
  throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.");
};
var faClassList = (props) => {
  const classes = {
    [`fa-${props.animation}`]: props.animation != null && !props.animation.startsWith("spin"),
    "fa-spin": props.animation === "spin" || props.animation === "spin-reverse",
    "fa-spin-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-spin-reverse": props.animation === "spin-reverse" || props.animation === "spin-pulse-reverse",
    // According to https://fontawesome.com/docs/web/style/animate#spin fa-pulse
    // class is deprecated, remove the below line when Font Awesome 5 support
    // is dropped.
    "fa-pulse": props.animation === "spin-pulse" || props.animation === "spin-pulse-reverse",
    "fa-fw": props.fixedWidth,
    "fa-border": props.border,
    "fa-inverse": props.inverse,
    "fa-layers-counter": props.counter,
    "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
    "fa-flip-vertical": props.flip === "vertical" || props.flip === "both",
    [`fa-${props.size}`]: props.size !== null,
    [`fa-rotate-${props.rotate}`]: props.rotate !== null,
    [`fa-pull-${props.pull}`]: props.pull !== null,
    [`fa-stack-${props.stackItemSize}`]: props.stackItemSize != null
  };
  return Object.keys(classes).map((key) => classes[key] ? key : null).filter((key) => key);
};
var cssInserted = /* @__PURE__ */ new WeakSet();
var autoCssId = "fa-auto-css";
function ensureCss2(document2, config3) {
  if (!config3.autoAddCss) {
    return;
  }
  if (cssInserted.has(document2)) {
    return;
  }
  if (document2.getElementById(autoCssId) != null) {
    config3.autoAddCss = false;
    cssInserted.add(document2);
    return;
  }
  const style2 = document2.createElement("style");
  style2.setAttribute("type", "text/css");
  style2.setAttribute("id", autoCssId);
  style2.innerHTML = dom$1.css();
  const headChildren = document2.head.childNodes;
  let beforeChild = null;
  for (let i = headChildren.length - 1; i > -1; i--) {
    const child = headChildren[i];
    const tagName = child.nodeName.toUpperCase();
    if (["STYLE", "LINK"].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  document2.head.insertBefore(style2, beforeChild);
  config3.autoAddCss = false;
  cssInserted.add(document2);
}
var isIconLookup = (i) => i.prefix !== void 0 && i.iconName !== void 0;
var faNormalizeIconSpec = (iconSpec, defaultPrefix) => {
  if (isIconLookup(iconSpec)) {
    return iconSpec;
  }
  if (Array.isArray(iconSpec) && iconSpec.length === 2) {
    return {
      prefix: iconSpec[0],
      iconName: iconSpec[1]
    };
  }
  return {
    prefix: defaultPrefix,
    iconName: iconSpec
  };
};
var FaConfig = class _FaConfig {
  constructor() {
    this.defaultPrefix = "fas";
    this.fallbackIcon = null;
    this._autoAddCss = true;
  }
  /**
   * Automatically add Font Awesome styles to the document when icon is rendered.
   *
   * For the majority of the cases the automatically added CSS is sufficient,
   * please refer to the linked guide for more information on when to disable
   * this feature.
   *
   * @see {@link: https://github.com/FortAwesome/angular-fontawesome/blob/main/docs/guide/adding-css.md}
   * @default true
   */
  set autoAddCss(value) {
    config$1.autoAddCss = value;
    this._autoAddCss = value;
  }
  get autoAddCss() {
    return this._autoAddCss;
  }
  static {
    this.\u0275fac = function FaConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaConfig)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FaConfig,
      factory: _FaConfig.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FaIconLibrary = class _FaIconLibrary {
  constructor() {
    this.definitions = {};
  }
  addIcons(...icons) {
    for (const icon2 of icons) {
      if (!(icon2.prefix in this.definitions)) {
        this.definitions[icon2.prefix] = {};
      }
      this.definitions[icon2.prefix][icon2.iconName] = icon2;
      for (const alias of icon2.icon[2]) {
        if (typeof alias === "string") {
          this.definitions[icon2.prefix][alias] = icon2;
        }
      }
    }
  }
  addIconPacks(...packs) {
    for (const pack of packs) {
      const icons = Object.keys(pack).map((key) => pack[key]);
      this.addIcons(...icons);
    }
  }
  getIconDefinition(prefix, name) {
    if (prefix in this.definitions && name in this.definitions[prefix]) {
      return this.definitions[prefix][name];
    }
    return null;
  }
  static {
    this.\u0275fac = function FaIconLibrary_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaIconLibrary)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _FaIconLibrary,
      factory: _FaIconLibrary.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconLibrary, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FaStackItemSizeDirective = class _FaStackItemSizeDirective {
  constructor() {
    this.stackItemSize = "1x";
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.');
    }
  }
  static {
    this.\u0275fac = function FaStackItemSizeDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaStackItemSizeDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FaStackItemSizeDirective,
      selectors: [["fa-icon", "stackItemSize", ""], ["fa-duotone-icon", "stackItemSize", ""]],
      inputs: {
        stackItemSize: "stackItemSize",
        size: "size"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackItemSizeDirective, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "fa-icon[stackItemSize],fa-duotone-icon[stackItemSize]",
      standalone: true
    }]
  }], null, {
    stackItemSize: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var FaStackComponent = class _FaStackComponent {
  constructor(renderer, elementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-stack");
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
  static {
    this.\u0275fac = function FaStackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaStackComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaStackComponent,
      selectors: [["fa-stack"]],
      inputs: {
        size: "size"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 1,
      vars: 0,
      template: function FaStackComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaStackComponent, [{
    type: Component,
    args: [{
      selector: "fa-stack",
      standalone: true,
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    size: [{
      type: Input
    }]
  });
})();
var FaIconComponent = class _FaIconComponent {
  constructor(sanitizer, config3, iconLibrary, stackItem, stack) {
    this.sanitizer = sanitizer;
    this.config = config3;
    this.iconLibrary = iconLibrary;
    this.stackItem = stackItem;
    this.document = inject(DOCUMENT);
    if (stack != null && stackItem == null) {
      console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.');
    }
  }
  ngOnChanges(changes) {
    if (this.icon == null && this.config.fallbackIcon == null) {
      faWarnIfIconSpecMissing();
      return;
    }
    if (changes) {
      const iconDefinition = this.findIconDefinition(this.icon ?? this.config.fallbackIcon);
      if (iconDefinition != null) {
        const params = this.buildParams();
        ensureCss2(this.document, this.config);
        const renderedIcon = icon(iconDefinition, params);
        this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(renderedIcon.html.join("\n"));
      }
    }
  }
  /**
   * Programmatically trigger rendering of the icon.
   *
   * This method is useful, when creating {@link FaIconComponent} dynamically or
   * changing its inputs programmatically as in these cases icon won't be
   * re-rendered automatically.
   */
  render() {
    this.ngOnChanges({});
  }
  findIconDefinition(i) {
    const lookup = faNormalizeIconSpec(i, this.config.defaultPrefix);
    if ("icon" in lookup) {
      return lookup;
    }
    const definition = this.iconLibrary.getIconDefinition(lookup.prefix, lookup.iconName);
    if (definition != null) {
      return definition;
    }
    faWarnIfIconDefinitionMissing(lookup);
    return null;
  }
  buildParams() {
    const classOpts = {
      flip: this.flip,
      animation: this.animation,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth,
      stackItemSize: this.stackItem != null ? this.stackItem.stackItemSize : null
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    return {
      title: this.title,
      transform: parsedTransform,
      classes: faClassList(classOpts),
      mask: this.mask != null ? this.findIconDefinition(this.mask) : null,
      symbol: this.symbol,
      attributes: {
        role: this.a11yRole
      }
    };
  }
  static {
    this.\u0275fac = function FaIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaIconComponent)(\u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(FaConfig), \u0275\u0275directiveInject(FaIconLibrary), \u0275\u0275directiveInject(FaStackItemSizeDirective, 8), \u0275\u0275directiveInject(FaStackComponent, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaIconComponent,
      selectors: [["fa-icon"]],
      hostAttrs: [1, "ng-fa-icon"],
      hostVars: 2,
      hostBindings: function FaIconComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("innerHTML", ctx.renderedIconHTML, \u0275\u0275sanitizeHtml);
          \u0275\u0275attribute("title", ctx.title);
        }
      },
      inputs: {
        icon: "icon",
        title: "title",
        animation: "animation",
        mask: "mask",
        flip: "flip",
        size: "size",
        pull: "pull",
        border: "border",
        inverse: "inverse",
        symbol: "symbol",
        rotate: "rotate",
        fixedWidth: "fixedWidth",
        transform: "transform",
        a11yRole: "a11yRole"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function FaIconComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-icon",
      standalone: true,
      template: ``,
      host: {
        class: "ng-fa-icon",
        "[attr.title]": "title"
      }
    }]
  }], () => [{
    type: DomSanitizer
  }, {
    type: FaConfig
  }, {
    type: FaIconLibrary
  }, {
    type: FaStackItemSizeDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FaStackComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    symbol: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    a11yRole: [{
      type: Input
    }],
    renderedIconHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var FaDuotoneIconComponent = class _FaDuotoneIconComponent extends FaIconComponent {
  findIconDefinition(i) {
    const definition = super.findIconDefinition(i);
    if (definition != null && !Array.isArray(definition.icon[4])) {
      throw new Error(`The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: <fa-duotone-icon [icon]="['fad', '${definition.iconName}']"></fa-duotone-icon> or use: <fa-icon icon="${definition.iconName}"></fa-icon> instead.`);
    }
    return definition;
  }
  buildParams() {
    const params = super.buildParams();
    if (this.swapOpacity === true || this.swapOpacity === "true") {
      if (Array.isArray(params.classes)) {
        params.classes.push("fa-swap-opacity");
      } else if (typeof params.classes === "string") {
        params.classes = [params.classes, "fa-swap-opacity"];
      } else {
        params.classes = ["fa-swap-opacity"];
      }
    }
    if (params.styles == null) {
      params.styles = {};
    }
    if (this.primaryOpacity != null) {
      params.styles["--fa-primary-opacity"] = this.primaryOpacity.toString();
    }
    if (this.secondaryOpacity != null) {
      params.styles["--fa-secondary-opacity"] = this.secondaryOpacity.toString();
    }
    if (this.primaryColor != null) {
      params.styles["--fa-primary-color"] = this.primaryColor;
    }
    if (this.secondaryColor != null) {
      params.styles["--fa-secondary-color"] = this.secondaryColor;
    }
    return params;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275FaDuotoneIconComponent_BaseFactory;
      return function FaDuotoneIconComponent_Factory(__ngFactoryType__) {
        return (\u0275FaDuotoneIconComponent_BaseFactory || (\u0275FaDuotoneIconComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FaDuotoneIconComponent)))(__ngFactoryType__ || _FaDuotoneIconComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaDuotoneIconComponent,
      selectors: [["fa-duotone-icon"]],
      inputs: {
        swapOpacity: "swapOpacity",
        primaryOpacity: "primaryOpacity",
        secondaryOpacity: "secondaryOpacity",
        primaryColor: "primaryColor",
        secondaryColor: "secondaryColor"
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function FaDuotoneIconComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaDuotoneIconComponent, [{
    type: Component,
    args: [{
      selector: "fa-duotone-icon",
      standalone: true,
      template: ``
    }]
  }], null, {
    swapOpacity: [{
      type: Input
    }],
    primaryOpacity: [{
      type: Input
    }],
    secondaryOpacity: [{
      type: Input
    }],
    primaryColor: [{
      type: Input
    }],
    secondaryColor: [{
      type: Input
    }]
  });
})();
var faWarnIfParentNotExist = (parent, parentName, childName) => {
  if (!parent) {
    throw new Error(`${childName} should be used as child of ${parentName} only.`);
  }
};
var FaLayersComponent = class _FaLayersComponent {
  constructor(renderer, elementRef, config3) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.config = config3;
    this.document = inject(DOCUMENT);
  }
  ngOnInit() {
    this.renderer.addClass(this.elementRef.nativeElement, "fa-layers");
    ensureCss2(this.document, this.config);
    this.fixedWidth = typeof this.fixedWidth === "boolean" ? this.fixedWidth : this.config.fixedWidth;
  }
  ngOnChanges(changes) {
    if ("size" in changes) {
      if (changes.size.currentValue != null) {
        this.renderer.addClass(this.elementRef.nativeElement, `fa-${changes.size.currentValue}`);
      }
      if (changes.size.previousValue != null) {
        this.renderer.removeClass(this.elementRef.nativeElement, `fa-${changes.size.previousValue}`);
      }
    }
  }
  static {
    this.\u0275fac = function FaLayersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaLayersComponent)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FaConfig));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaLayersComponent,
      selectors: [["fa-layers"]],
      hostVars: 2,
      hostBindings: function FaLayersComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("fa-fw", ctx.fixedWidth);
        }
      },
      inputs: {
        size: "size",
        fixedWidth: "fixedWidth"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c03,
      decls: 1,
      vars: 0,
      template: function FaLayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275projection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers",
      standalone: true,
      template: `<ng-content></ng-content>`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: FaConfig
  }], {
    size: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.fa-fw"]
    }]
  });
})();
var FaLayersCounterComponent = class _FaLayersCounterComponent {
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.document = inject(DOCUMENT);
    this.config = inject(FaConfig);
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  buildParams() {
    return {
      title: this.title,
      classes: this.position != null ? [`fa-layers-${this.position}`] : void 0
    };
  }
  updateContent(params) {
    ensureCss2(this.document, this.config);
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(counter(this.content || "", params).html.join(""));
  }
  static {
    this.\u0275fac = function FaLayersCounterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaLayersCounterComponent)(\u0275\u0275directiveInject(FaLayersComponent, 8), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaLayersCounterComponent,
      selectors: [["fa-layers-counter"]],
      hostAttrs: [1, "ng-fa-layers-counter"],
      hostVars: 1,
      hostBindings: function FaLayersCounterComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("innerHTML", ctx.renderedHTML, \u0275\u0275sanitizeHtml);
        }
      },
      inputs: {
        content: "content",
        title: "title",
        position: "position"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function FaLayersCounterComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersCounterComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-counter",
      standalone: true,
      template: "",
      host: {
        class: "ng-fa-layers-counter"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var FaLayersTextComponent = class _FaLayersTextComponent {
  constructor(parent, sanitizer) {
    this.parent = parent;
    this.sanitizer = sanitizer;
    this.document = inject(DOCUMENT);
    this.config = inject(FaConfig);
    faWarnIfParentNotExist(this.parent, "FaLayersComponent", this.constructor.name);
  }
  ngOnChanges(changes) {
    if (changes) {
      const params = this.buildParams();
      this.updateContent(params);
    }
  }
  /**
   * Updating params by component props.
   */
  buildParams() {
    const classOpts = {
      flip: this.flip,
      border: this.border,
      inverse: this.inverse,
      size: this.size || null,
      pull: this.pull || null,
      rotate: this.rotate || null,
      fixedWidth: this.fixedWidth
    };
    const parsedTransform = typeof this.transform === "string" ? parse$1.transform(this.transform) : this.transform;
    return {
      transform: parsedTransform,
      classes: faClassList(classOpts),
      title: this.title
    };
  }
  updateContent(params) {
    ensureCss2(this.document, this.config);
    this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(text(this.content || "", params).html.join("\n"));
  }
  static {
    this.\u0275fac = function FaLayersTextComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaLayersTextComponent)(\u0275\u0275directiveInject(FaLayersComponent, 8), \u0275\u0275directiveInject(DomSanitizer));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _FaLayersTextComponent,
      selectors: [["fa-layers-text"]],
      hostAttrs: [1, "ng-fa-layers-text"],
      hostVars: 1,
      hostBindings: function FaLayersTextComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("innerHTML", ctx.renderedHTML, \u0275\u0275sanitizeHtml);
        }
      },
      inputs: {
        content: "content",
        title: "title",
        flip: "flip",
        size: "size",
        pull: "pull",
        border: "border",
        inverse: "inverse",
        rotate: "rotate",
        fixedWidth: "fixedWidth",
        transform: "transform"
      },
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
      decls: 0,
      vars: 0,
      template: function FaLayersTextComponent_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaLayersTextComponent, [{
    type: Component,
    args: [{
      selector: "fa-layers-text",
      standalone: true,
      template: "",
      host: {
        class: "ng-fa-layers-text"
      }
    }]
  }], () => [{
    type: FaLayersComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }], {
    content: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    flip: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    pull: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    inverse: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    fixedWidth: [{
      type: Input
    }],
    transform: [{
      type: Input
    }],
    renderedHTML: [{
      type: HostBinding,
      args: ["innerHTML"]
    }]
  });
})();
var FontAwesomeModule = class _FontAwesomeModule {
  static {
    this.\u0275fac = function FontAwesomeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FontAwesomeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _FontAwesomeModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FontAwesomeModule, [{
    type: NgModule,
    args: [{
      imports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
      exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective]
    }]
  }], null, null);
})();

// src/app/components/all-existing-customers/all-existing-customers.component.ts
function CustomersComponent_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerStart(5);
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function CustomersComponent_tr_10_Template_button_click_6_listener() {
      const email_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openSendEmailDialog(email_r2));
    });
    \u0275\u0275element(7, "fa-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 7);
    \u0275\u0275listener("click", function CustomersComponent_tr_10_Template_button_click_8_listener() {
      const email_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteCustomerEmail(email_r2));
    });
    \u0275\u0275element(9, "fa-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 7);
    \u0275\u0275listener("click", function CustomersComponent_tr_10_Template_button_click_10_listener() {
      const email_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteCustomer(email_r2));
    });
    \u0275\u0275element(11, "fa-icon", 6)(12, "fa-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(email_r2.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(email_r2.message);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", ctx_r2.faEnvelope);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faTrash);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", ctx_r2.faPerson);
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r2.faTrash);
  }
}
var CustomersComponent = class _CustomersComponent {
  apiService;
  dialog;
  faTrash = faTrash;
  faEnvelope = faEnvelope;
  faPerson = faPerson;
  displayedColumns = ["customerName", "message", "empty"];
  customerEmailData = [];
  constructor(apiService, dialog) {
    this.apiService = apiService;
    this.dialog = dialog;
  }
  // initial load of html page. Get necessary data to display.
  ngOnInit() {
    this.getAllCustomerEmails();
  }
  // call service for getting all existing customer emails
  getAllCustomerEmails() {
    this.apiService.getAllCustomerEmails().subscribe((output) => {
      this.customerEmailData = output;
    });
  }
  // open send email dialog
  openSendEmailDialog(ce) {
    let dialogRef = this.dialog.open(SendEmailDialog, {
      data: { customerId: ce.customerId },
      position: {
        top: "-50%",
        left: "10%"
      }
    }).afterClosed().subscribe((newTable) => {
      this.customerEmailData = newTable;
    });
  }
  // call service for deleting email
  deleteCustomerEmail(email) {
    this.apiService.deleteEmail(email.emailId).subscribe((deleted) => {
      if (deleted) {
        let index = this.customerEmailData.findIndex((ce) => ce.emailId === email.emailId);
        this.customerEmailData.splice(index, 1);
      }
    });
  }
  //call service for deleting customer
  deleteCustomer(ce) {
    this.apiService.deleteCustomer(ce.customerId).subscribe((deleted) => {
      if (deleted) {
        let index = this.customerEmailData.findIndex((ce2) => ce2.customerId === ce2.customerId);
        this.customerEmailData.splice(index, 1);
      }
    });
  }
  static \u0275fac = function CustomersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomersComponent)(\u0275\u0275directiveInject(CustomerEmailService), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomersComponent, selectors: [["all-existing-customers"]], decls: 11, vars: 1, consts: [[1, "customer-table-display"], [1, "customer-table"], ["scope", "col"], ["scope", "col", 1, "action-items"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [3, "icon"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"]], template: function CustomersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr")(4, "th", 2);
      \u0275\u0275text(5, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "th", 2);
      \u0275\u0275text(7, "Email Contents");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "th", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "tbody");
      \u0275\u0275template(10, CustomersComponent_tr_10_Template, 13, 6, "tr", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngForOf", ctx.customerEmailData);
    }
  }, dependencies: [FaIconComponent, NgForOf], styles: ["\n\n.customer-table-display[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  margin-left: 30px;\n  border-width: 1px;\n}\n.customer-table-display[_ngcontent-%COMP%]   .customer-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n}\n.customer-table-display[_ngcontent-%COMP%]   .customer-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], \n.customer-table-display[_ngcontent-%COMP%]   .customer-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.customer-table-display[_ngcontent-%COMP%]   .customer-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 1px;\n}\n.customer-table-display[_ngcontent-%COMP%]   .customer-table[_ngcontent-%COMP%]   .action-items[_ngcontent-%COMP%] {\n  width: 10%;\n}\n/*# sourceMappingURL=all-existing-customers.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomersComponent, { className: "CustomersComponent", filePath: "src\\app\\components\\all-existing-customers\\all-existing-customers.component.ts", lineNumber: 15 });
})();

// node_modules/@angular/cdk/fesm2022/table.mjs
var _c04 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c13 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 0);
    \u0275\u0275elementContainer(3, 2)(4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 4);
    \u0275\u0275elementEnd();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var CdkCellDef = class _CdkCellDef {
  constructor(template) {
    this.template = template;
  }
  static {
    this.\u0275fac = function CdkCellDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkCellDef)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkCellDef,
      selectors: [["", "cdkCellDef", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var CdkHeaderCellDef = class _CdkHeaderCellDef {
  constructor(template) {
    this.template = template;
  }
  static {
    this.\u0275fac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkHeaderCellDef)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkHeaderCellDef,
      selectors: [["", "cdkHeaderCellDef", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var CdkFooterCellDef = class _CdkFooterCellDef {
  constructor(template) {
    this.template = template;
  }
  static {
    this.\u0275fac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkFooterCellDef)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkFooterCellDef,
      selectors: [["", "cdkFooterCellDef", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var CdkColumnDef = class _CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /** Whether the cell is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  /**
   * Whether this column should be sticky positioned on the end of the row. Should make sure
   * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
   * has been changed.
   */
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(_table) {
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
    this._stickyEnd = false;
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  /**
   * Overridable method that sets the css classes that will be added to every cell in this
   * column.
   * In the future, columnCssClassName will change from type string[] to string and this
   * will set a single string value.
   * @docs-private
   */
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
  static {
    this.\u0275fac = function CdkColumnDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkColumnDef)(\u0275\u0275directiveInject(CDK_TABLE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkColumnDef,
      selectors: [["", "cdkColumnDef", ""]],
      contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, CdkCellDef, 5);
          \u0275\u0275contentQuery(dirIndex, CdkHeaderCellDef, 5);
          \u0275\u0275contentQuery(dirIndex, CdkFooterCellDef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerCell = _t.first);
        }
      },
      inputs: {
        name: [0, "cdkColumnDef", "name"],
        sticky: [2, "sticky", "sticky", booleanAttribute],
        stickyEnd: [2, "stickyEnd", "stickyEnd", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: _CdkColumnDef
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]",
      providers: [{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: CdkColumnDef
      }],
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    sticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
  }
  static {
    this.\u0275fac = function CdkHeaderCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkHeaderCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkHeaderCell,
      selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static {
    this.\u0275fac = function CdkFooterCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkFooterCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkFooterCell,
      selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
      hostAttrs: [1, "cdk-footer-cell"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var CdkCell = class _CdkCell extends BaseCdkCell {
  constructor(columnDef, elementRef) {
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static {
    this.\u0275fac = function CdkCell_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkCell)(\u0275\u0275directiveInject(CdkColumnDef), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkCell,
      selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
      hostAttrs: [1, "cdk-cell"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      },
      standalone: true
    }]
  }], () => [{
    type: CdkColumnDef
  }, {
    type: ElementRef
  }], null);
})();
var _Schedule = class {
  constructor() {
    this.tasks = [];
    this.endTasks = [];
  }
};
var _COALESCED_STYLE_SCHEDULER = new InjectionToken("_COALESCED_STYLE_SCHEDULER");
var _CoalescedStyleScheduler = class __CoalescedStyleScheduler {
  constructor(_unusedNgZone) {
    this._currentSchedule = null;
    this._ngZone = inject(NgZone);
  }
  /**
   * Schedules the specified task to run at the end of the current VM turn.
   */
  schedule(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.tasks.push(task);
  }
  /**
   * Schedules the specified task to run after other scheduled tasks at the end of the current
   * VM turn.
   */
  scheduleEnd(task) {
    this._createScheduleIfNeeded();
    this._currentSchedule.endTasks.push(task);
  }
  _createScheduleIfNeeded() {
    if (this._currentSchedule) {
      return;
    }
    this._currentSchedule = new _Schedule();
    this._ngZone.runOutsideAngular(() => (
      // TODO(mmalerba): Scheduling this using something that runs less frequently
      //  (e.g. requestAnimationFrame, setTimeout, etc.) causes noticeable jank with the column
      //  resizer. We should audit the usages of schedule / scheduleEnd in that component and see
      //  if we can refactor it so that we don't need to flush the tasks quite so frequently.
      queueMicrotask(() => {
        while (this._currentSchedule.tasks.length || this._currentSchedule.endTasks.length) {
          const schedule = this._currentSchedule;
          this._currentSchedule = new _Schedule();
          for (const task of schedule.tasks) {
            task();
          }
          for (const task of schedule.endTasks) {
            task();
          }
        }
        this._currentSchedule = null;
      })
    ));
  }
  static {
    this.\u0275fac = function _CoalescedStyleScheduler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || __CoalescedStyleScheduler)(\u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: __CoalescedStyleScheduler,
      factory: __CoalescedStyleScheduler.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_CoalescedStyleScheduler, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var BaseRowDef = class _BaseRowDef {
  constructor(template, _differs) {
    this.template = template;
    this._differs = _differs;
  }
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  /**
   * Returns the difference between the current columns and the columns from the last diff, or null
   * if there is no difference.
   */
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  /** Gets this row def's relevant cell template from the provided column def. */
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
  static {
    this.\u0275fac = function BaseRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _BaseRowDef,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }], null);
})();
var CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static {
    this.\u0275fac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkHeaderRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkHeaderRowDef,
      selectors: [["", "cdkHeaderRowDef", ""]],
      inputs: {
        columns: [0, "cdkHeaderRowDef", "columns"],
        sticky: [2, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkHeaderRowDef"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
    this._hasStickyChanged = false;
    this._sticky = false;
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static {
    this.\u0275fac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkFooterRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkFooterRowDef,
      selectors: [["", "cdkFooterRowDef", ""]],
      inputs: {
        columns: [0, "cdkFooterRowDef", "columns"],
        sticky: [2, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkFooterRowDef"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkRowDef = class _CdkRowDef extends BaseRowDef {
  // TODO(andrewseguin): Add an input for providing a switch function to determine
  //   if this template should be used.
  constructor(template, _differs, _table) {
    super(template, _differs);
    this._table = _table;
  }
  static {
    this.\u0275fac = function CdkRowDef_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkRowDef)(\u0275\u0275directiveInject(TemplateRef), \u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(CDK_TABLE, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkRowDef,
      selectors: [["", "cdkRowDef", ""]],
      inputs: {
        columns: [0, "cdkRowDefColumns", "columns"],
        when: [0, "cdkRowDefWhen", "when"]
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkRowDefColumns"
      }, {
        name: "when",
        alias: "cdkRowDefWhen"
      }],
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: IterableDiffers
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CDK_TABLE]
    }, {
      type: Optional
    }]
  }], null);
})();
var CdkCellOutlet = class _CdkCellOutlet {
  static {
    this.mostRecentCellOutlet = null;
  }
  constructor(_viewContainer) {
    this._viewContainer = _viewContainer;
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
  static {
    this.\u0275fac = function CdkCellOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkCellOutlet)(\u0275\u0275directiveInject(ViewContainerRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkCellOutlet,
      selectors: [["", "cdkCellOutlet", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }], null);
})();
var CdkHeaderRow = class _CdkHeaderRow {
  static {
    this.\u0275fac = function CdkHeaderRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkHeaderRow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkHeaderRow,
      selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-header-row"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainer(0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkFooterRow = class _CdkFooterRow {
  static {
    this.\u0275fac = function CdkFooterRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkFooterRow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkFooterRow,
      selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-footer-row"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainer(0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkRow = class _CdkRow {
  static {
    this.\u0275fac = function CdkRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkRow)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkRow,
      selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
      hostAttrs: ["role", "row", 1, "cdk-row"],
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function CdkRow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainer(0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkNoDataRow = class _CdkNoDataRow {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._contentClassName = "cdk-no-data-row";
  }
  static {
    this.\u0275fac = function CdkNoDataRow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkNoDataRow)(\u0275\u0275directiveInject(TemplateRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkNoDataRow,
      selectors: [["ng-template", "cdkNoDataRow", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, direction, _coalescedStyleScheduler, _isBrowser = true, _needsPositionStickyOnElement = true, _positionListener) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this.direction = direction;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this._positionListener = _positionListener;
    this._elemSizeCache = /* @__PURE__ */ new WeakMap();
    this._resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver((entries) => this._updateCachedSizes(entries)) : null;
    this._updatedStickyColumnsParamsToReplay = [];
    this._stickyColumnsReplayTimeout = null;
    this._cachedCellWidths = [];
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    if (stickyDirections.includes("left") || stickyDirections.includes("right")) {
      this._removeFromStickyColumnReplayQueue(rows);
    }
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row);
      for (let i = 0; i < row.children.length; i++) {
        elementsToClear.push(row.children[i]);
      }
    }
    this._coalescedStyleScheduler.schedule(() => {
      for (const element of elementsToClear) {
        this._removeStickyStyle(element, stickyDirections);
      }
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   * @param replay Whether to enqueue this call for replay after a ResizeObserver update.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
    if (replay) {
      this._updateStickyColumnReplayQueue({
        rows: [...rows],
        stickyStartStates: [...stickyStartStates],
        stickyEndStates: [...stickyEndStates]
      });
    }
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state2) => state2) || stickyEndStates.some((state2) => state2))) {
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: []
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: []
        });
      }
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const firstRow = rows[0];
      const numCells = firstRow.children.length;
      const cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
      const startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
      const endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      const lastStickyStart = stickyStartStates.lastIndexOf(true);
      const firstStickyEnd = stickyEndStates.indexOf(true);
      const isRtl = this.direction === "rtl";
      const start = isRtl ? "right" : "left";
      const end2 = isRtl ? "left" : "right";
      for (const row of rows) {
        for (let i = 0; i < numCells; i++) {
          const cell = row.children[i];
          if (stickyStartStates[i]) {
            this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
          }
          if (stickyEndStates[i]) {
            this._addStickyStyle(cell, end2, endPositions[i], i === firstStickyEnd);
          }
        }
      }
      if (this._positionListener) {
        this._positionListener.stickyColumnsUpdated({
          sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
        });
        this._positionListener.stickyEndColumnsUpdated({
          sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
        });
      }
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
      const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
      const stickyOffsets = [];
      const stickyCellHeights = [];
      const elementsToStick = [];
      for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        stickyOffsets[rowIndex] = stickyOffset;
        const row = rows[rowIndex];
        elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
        const height = this._retrieveElementSize(row).height;
        stickyOffset += height;
        stickyCellHeights[rowIndex] = height;
      }
      const borderedRowIndex = states.lastIndexOf(true);
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        if (!states[rowIndex]) {
          continue;
        }
        const offset = stickyOffsets[rowIndex];
        const isBorderedRowIndex = rowIndex === borderedRowIndex;
        for (const element of elementsToStick[rowIndex]) {
          this._addStickyStyle(element, position, offset, isBorderedRowIndex);
        }
      }
      if (position === "top") {
        this._positionListener?.stickyHeaderRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      } else {
        this._positionListener?.stickyFooterRowsUpdated({
          sizes: stickyCellHeights,
          offsets: stickyOffsets,
          elements: elementsToStick
        });
      }
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    this._coalescedStyleScheduler.schedule(() => {
      const tfoot = tableElement.querySelector("tfoot");
      if (tfoot) {
        if (stickyStates.some((state2) => !state2)) {
          this._removeStickyStyle(tfoot, ["bottom"]);
        } else {
          this._addStickyStyle(tfoot, "bottom", 0, false);
        }
      }
    });
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      const cell = firstRowCells[i];
      cellWidths.push(this._retrieveElementSize(cell).width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Retreives the most recently observed size of the specified element from the cache, or
   * meaures it directly if not yet cached.
   */
  _retrieveElementSize(element) {
    const cachedSize = this._elemSizeCache.get(element);
    if (cachedSize) {
      return cachedSize;
    }
    const clientRect = element.getBoundingClientRect();
    const size = {
      width: clientRect.width,
      height: clientRect.height
    };
    if (!this._resizeObserver) {
      return size;
    }
    this._elemSizeCache.set(element, size);
    this._resizeObserver.observe(element, {
      box: "border-box"
    });
    return size;
  }
  /**
   * Conditionally enqueue the requested sticky update and clear previously queued updates
   * for the same rows.
   */
  _updateStickyColumnReplayQueue(params) {
    this._removeFromStickyColumnReplayQueue(params.rows);
    if (this._stickyColumnsReplayTimeout) {
      return;
    }
    this._updatedStickyColumnsParamsToReplay.push(params);
  }
  /** Remove updates for the specified rows from the queue. */
  _removeFromStickyColumnReplayQueue(rows) {
    const rowsSet = new Set(rows);
    for (const update of this._updatedStickyColumnsParamsToReplay) {
      update.rows = update.rows.filter((row) => !rowsSet.has(row));
    }
    this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter((update) => !!update.rows.length);
  }
  /** Update _elemSizeCache with the observed sizes. */
  _updateCachedSizes(entries) {
    let needsColumnUpdate = false;
    for (const entry of entries) {
      const newEntry = entry.borderBoxSize?.length ? {
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      } : {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
        needsColumnUpdate = true;
      }
      this._elemSizeCache.set(entry.target, newEntry);
    }
    if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
      if (this._stickyColumnsReplayTimeout) {
        clearTimeout(this._stickyColumnsReplayTimeout);
      }
      this._stickyColumnsReplayTimeout = setTimeout(() => {
        for (const update of this._updatedStickyColumnsParamsToReplay) {
          this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
        }
        this._updatedStickyColumnsParamsToReplay = [];
        this._stickyColumnsReplayTimeout = null;
      }, 0);
    }
  }
};
function isCell(element) {
  return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some((klass) => element.classList.contains(klass));
}
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for theprovided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("CDK_SPL");
var CdkRecycleRows = class _CdkRecycleRows {
  static {
    this.\u0275fac = function CdkRecycleRows_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkRecycleRows)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkRecycleRows,
      selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], null, null);
})();
var DataRowOutlet = class _DataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._rowOutlet = this;
    table._outletAssigned();
  }
  static {
    this.\u0275fac = function DataRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DataRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _DataRowOutlet,
      selectors: [["", "rowOutlet", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var HeaderRowOutlet = class _HeaderRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._headerRowOutlet = this;
    table._outletAssigned();
  }
  static {
    this.\u0275fac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _HeaderRowOutlet,
      selectors: [["", "headerRowOutlet", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var FooterRowOutlet = class _FooterRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._footerRowOutlet = this;
    table._outletAssigned();
  }
  static {
    this.\u0275fac = function FooterRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _FooterRowOutlet,
      selectors: [["", "footerRowOutlet", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var NoDataRowOutlet = class _NoDataRowOutlet {
  constructor(viewContainer, elementRef) {
    this.viewContainer = viewContainer;
    this.elementRef = elementRef;
    const table = inject(CDK_TABLE);
    table._noDataRowOutlet = this;
    table._outletAssigned();
  }
  static {
    this.\u0275fac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NoDataRowOutlet)(\u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NoDataRowOutlet,
      selectors: [["", "noDataRowOutlet", ""]],
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }], null);
})();
var CDK_TABLE_TEMPLATE = (
  // Note that according to MDN, the `caption` element has to be projected as the **first**
  // element in the table. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
  `
  <ng-content select="caption"/>
  <ng-content select="colgroup, col"/>

  <!--
    Unprojected content throws a hydration error so we need this to capture it.
    It gets removed on the client so it doesn't affect the layout.
  -->
  @if (_isServer) {
    <ng-content/>
  }

  @if (_isNativeHtmlTable) {
    <thead role="rowgroup">
      <ng-container headerRowOutlet/>
    </thead>
    <tbody role="rowgroup">
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
    </tbody>
    <tfoot role="rowgroup">
      <ng-container footerRowOutlet/>
    </tfoot>
  } @else {
    <ng-container headerRowOutlet/>
    <ng-container rowOutlet/>
    <ng-container noDataRowOutlet/>
    <ng-container footerRowOutlet/>
  }
`
);
var CdkTable = class _CdkTable {
  /** Aria role to apply to the table's cells based on the table's own role. */
  _getCellRole() {
    if (this._cellRoleInternal === void 0) {
      const role = this._elementRef.nativeElement.getAttribute("role");
      const cellRole = role === "grid" || role === "treegrid" ? "gridcell" : "cell";
      this._cellRoleInternal = this._isNativeHtmlTable && cellRole === "cell" ? null : cellRole;
    }
    return this._cellRoleInternal;
  }
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If a data array is provided, the table must be notified when the array's objects are
   * added, removed, or moved. This can be done by calling the `renderRows()` function which will
   * render the diff since the last table render. If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the connect function and trigger updates when that stream emits new data array
   * values. During the table's ngOnDestroy or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
   * subscriptions registered during the connect process).
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  /**
   * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
   * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
   * dataobject will render the first row that evaluates its when predicate to true, in the order
   * defined in the table, or otherwise the default row which does not have a when predicate.
   */
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
   * and optimize rendering sticky styles for native tables. No-op for flex tables.
   */
  get fixedLayout() {
    return this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  constructor(_differs, _changeDetectorRef, _elementRef, role, _dir, _document, _platform, _viewRepeater, _coalescedStyleScheduler, _viewportRuler, _stickyPositioningListener, _unusedNgZone) {
    this._differs = _differs;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._dir = _dir;
    this._platform = _platform;
    this._viewRepeater = _viewRepeater;
    this._coalescedStyleScheduler = _coalescedStyleScheduler;
    this._viewportRuler = _viewportRuler;
    this._stickyPositioningListener = _stickyPositioningListener;
    this._onDestroy = new Subject();
    this._columnDefsByName = /* @__PURE__ */ new Map();
    this._customColumnDefs = /* @__PURE__ */ new Set();
    this._customRowDefs = /* @__PURE__ */ new Set();
    this._customHeaderRowDefs = /* @__PURE__ */ new Set();
    this._customFooterRowDefs = /* @__PURE__ */ new Set();
    this._headerRowDefChanged = true;
    this._footerRowDefChanged = true;
    this._stickyColumnStylesNeedReset = true;
    this._forceRecalculateCellWidths = true;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    this.stickyCssClass = "cdk-table-sticky";
    this.needsPositionStickyOnElement = true;
    this._isShowingNoDataRow = false;
    this._hasAllOutlets = false;
    this._hasInitialized = false;
    this._cellRoleInternal = void 0;
    this._multiTemplateDataRows = false;
    this._fixedLayout = false;
    this.contentChanged = new EventEmitter();
    this.viewChange = new BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
    this._injector = inject(Injector);
    if (!role) {
      _elementRef.nativeElement.setAttribute("role", "table");
    }
    this._document = _document;
    this._isServer = !_platform.isBrowser;
    this._isNativeHtmlTable = _elementRef.nativeElement.nodeName === "TABLE";
  }
  ngOnInit() {
    this._setupStickyStyler();
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentInit() {
    this._hasInitialized = true;
  }
  ngAfterContentChecked() {
    if (this._canRender()) {
      this._render();
    }
  }
  ngOnDestroy() {
    [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def?.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    afterNextRender(() => {
      this.updateStickyColumnStyles();
    }, {
      injector: this._injector
    });
    this.contentChanged.next();
  }
  /** Adds a column definition that was not included as part of the content children. */
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  /** Removes a column definition that was not included as part of the content children. */
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  /** Adds a row definition that was not included as part of the content children. */
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  /** Removes a row definition that was not included as part of the content children. */
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  /** Adds a header row definition that was not included as part of the content children. */
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Removes a header row definition that was not included as part of the content children. */
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Adds a footer row definition that was not included as part of the content children. */
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Removes a footer row definition that was not included as part of the content children. */
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Sets a no data row definition that was not included as a part of the content children. */
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  /**
   * Updates the header sticky styles. First resets all applied styles with respect to the cells
   * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
   * automatically called when the header row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    if (this._isNativeHtmlTable) {
      const thead = closestTableSection(this._headerRowOutlet, "thead");
      if (thead) {
        thead.style.display = headerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the footer sticky styles. First resets all applied styles with respect to the cells
   * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
   * automatically called when the footer row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable) {
      const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
      if (tfoot) {
        tfoot.style.display = footerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the column sticky styles. First resets all applied styles with respect to the cells
   * sticking to the left and right. Then sticky styles are added for the left and right according
   * to the column definitions for each cell in each row. This is automatically called when
   * the data source provides a new set of data or when a column definition changes its sticky
   * input. May be called manually for cases where the cell content changes outside of these events.
   */
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  /** Invoked whenever an outlet is created and has been assigned to the table. */
  _outletAssigned() {
    if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
      this._hasAllOutlets = true;
      if (this._canRender()) {
        this._render();
      }
    }
  }
  /** Whether the table has all the information to start rendering. */
  _canRender() {
    return this._hasAllOutlets && this._hasInitialized;
  }
  /** Renders the table if its state has changed. */
  _render() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */
  _getAllRenderRows() {
    const renderRows = [];
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < this._data.length; i++) {
      let data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, CdkRowDef)` pair.
   */
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  /** Update the map containing the content's column definitions. */
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  /** Update the list of all available row definitions that can be used. */
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMultipleDefaultRowDefsError();
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  /**
   * Check if the header, data, or footer rows have changed what columns they want to display or
   * whether the sticky states have changed for the header or footer. If there is a diff, then
   * re-render that section.
   */
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => acc || !!def.getColumnsDiff();
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the row outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      if (this._rowOutlet) {
        this._rowOutlet.viewContainer.clear();
      }
    }
    this._dataSource = dataSource;
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => {
      this._data = data || [];
      this.renderRows();
    });
  }
  /**
   * Clears any existing content in the header row outlet and creates a new embedded view
   * in the outlet using the header row definition.
   */
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
    this.updateStickyHeaderRowStyles();
  }
  /**
   * Clears any existing content in the footer row outlet and creates a new embedded view
   * in the outlet using the footer row definition.
   */
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
    this.updateStickyFooterRowStyles();
  }
  /** Adds the sticky column styles for the rows according to the columns' stick states. */
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
  }
  /** Gets the list of rows that have been rendered in the row outlet. */
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  /**
   * Get the matching row definitions that should be used for this row data. If there is only
   * one row definition, it is returned. Otherwise, find the row definitions that has a when
   * predicate that returns true with the data. If none return true, return the default row
   * definition.
   */
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length == 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  /** Gets the column definitions for the provided row def. */
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  /**
   * Forces a re-render of the data rows. Should be called in cases where there has been an input
   * change that affects the evaluation of which rows should be rendered, e.g. toggling
   * `multiTemplateDataRows` or adding/removing row definitions.
   */
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  /**
   * Checks if there has been a change in sticky states since last check and applies the correct
   * sticky styles. Since checking resets the "dirty" state, this should only be performed once
   * during a change detection and after the inputs are settled (after content check).
   */
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Creates the sticky styler that will be used for sticky rows and columns. Listens
   * for directionality changes and provides the latest direction to the styler. Re-applies column
   * stickiness when directionality changes.
   */
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, direction, this._coalescedStyleScheduler, this._platform.isBrowser, this.needsPositionStickyOnElement, this._stickyPositioningListener);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  /** Filters definitions that belong to this table from a QueryList. */
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  /** Creates or removes the no data row, depending on whether any data is being shown. */
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(noDataRow._contentClassName);
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
  static {
    this.\u0275fac = function CdkTable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTable)(\u0275\u0275directiveInject(IterableDiffers), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275injectAttribute("role"), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(_VIEW_REPEATER_STRATEGY), \u0275\u0275directiveInject(_COALESCED_STYLE_SCHEDULER), \u0275\u0275directiveInject(ViewportRuler), \u0275\u0275directiveInject(STICKY_POSITIONING_LISTENER, 12), \u0275\u0275directiveInject(NgZone, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkTable,
      selectors: [["cdk-table"], ["table", "cdk-table", ""]],
      contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, CdkNoDataRow, 5);
          \u0275\u0275contentQuery(dirIndex, CdkColumnDef, 5);
          \u0275\u0275contentQuery(dirIndex, CdkRowDef, 5);
          \u0275\u0275contentQuery(dirIndex, CdkHeaderRowDef, 5);
          \u0275\u0275contentQuery(dirIndex, CdkFooterRowDef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._noDataRow = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentColumnDefs = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentRowDefs = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentHeaderRowDefs = _t);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentFooterRowDefs = _t);
        }
      },
      hostAttrs: [1, "cdk-table"],
      hostVars: 2,
      hostBindings: function CdkTable_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("cdk-table-fixed-layout", ctx.fixedLayout);
        }
      },
      inputs: {
        trackBy: "trackBy",
        dataSource: "dataSource",
        multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
        fixedLayout: [2, "fixedLayout", "fixedLayout", booleanAttribute]
      },
      outputs: {
        contentChanged: "contentChanged"
      },
      exportAs: ["cdkTable"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([
        {
          provide: CDK_TABLE,
          useExisting: _CdkTable
        },
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c13,
      decls: 5,
      vars: 2,
      consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
      template: function CdkTable_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c04);
          \u0275\u0275projection(0);
          \u0275\u0275projection(1, 1);
          \u0275\u0275template(2, CdkTable_Conditional_2_Template, 1, 0)(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx._isServer ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
        }
      },
      dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: CDK_TABLE_TEMPLATE,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [
        {
          provide: CDK_TABLE,
          useExisting: CdkTable
        },
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      standalone: true,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}"]
    }]
  }], () => [{
    type: IterableDiffers
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_VIEW_REPEATER_STRATEGY]
    }]
  }, {
    type: _CoalescedStyleScheduler,
    decorators: [{
      type: Inject,
      args: [_COALESCED_STYLE_SCHEDULER]
    }]
  }, {
    type: ViewportRuler
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }, {
      type: Inject,
      args: [STICKY_POSITIONING_LISTENER]
    }]
  }, {
    type: NgZone,
    decorators: [{
      type: Optional
    }]
  }], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === "TABLE") {
      break;
    }
    current = current.parentNode;
  }
  return null;
}
var CdkTextColumn = class _CdkTextColumn {
  /** Column name that should be used to reference this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  constructor(_table, _options) {
    this._table = _table;
    this._options = _options;
    this.justify = "start";
    this._options = _options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  /**
   * Creates a default header text. Use the options' header text transformation function if one
   * has been provided. Otherwise simply capitalize the column name.
   */
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  /** Synchronizes the column definition name with the text column name. */
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
  static {
    this.\u0275fac = function CdkTextColumn_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTextColumn)(\u0275\u0275directiveInject(CdkTable, 8), \u0275\u0275directiveInject(TEXT_COLUMN_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkTextColumn,
      selectors: [["cdk-text-column"]],
      viewQuery: function CdkTextColumn_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkColumnDef, 7);
          \u0275\u0275viewQuery(CdkCellDef, 7);
          \u0275\u0275viewQuery(CdkHeaderCellDef, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.columnDef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
        }
      },
      inputs: {
        name: "name",
        headerText: "headerText",
        dataAccessor: "dataAccessor",
        justify: "justify"
      },
      standalone: true,
      features: [\u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 0,
      consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
      template: function CdkTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainerStart(0, 0);
          \u0275\u0275template(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
          \u0275\u0275elementContainerEnd();
        }
      },
      dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
    }]
  }], () => [{
    type: CdkTable,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [TEXT_COLUMN_OPTIONS]
    }]
  }], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var CdkTableModule = class _CdkTableModule {
  static {
    this.\u0275fac = function CdkTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkTableModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _CdkTableModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [ScrollingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/table.mjs
var _c05 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c14 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 2);
    \u0275\u0275elementContainer(3, 3)(4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 5);
    \u0275\u0275elementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var MatRecycleRows = class _MatRecycleRows {
  static {
    this.\u0275fac = function MatRecycleRows_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatRecycleRows)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatRecycleRows,
      selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatTable = class _MatTable extends CdkTable {
  constructor() {
    super(...arguments);
    this.stickyCssClass = "mat-mdc-table-sticky";
    this.needsPositionStickyOnElement = false;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatTable_BaseFactory;
      return function MatTable_Factory(__ngFactoryType__) {
        return (\u0275MatTable_BaseFactory || (\u0275MatTable_BaseFactory = \u0275\u0275getInheritedFactory(_MatTable)))(__ngFactoryType__ || _MatTable);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTable,
      selectors: [["mat-table"], ["table", "mat-table", ""]],
      hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
      hostVars: 2,
      hostBindings: function MatTable_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mdc-table-fixed-layout", ctx.fixedLayout);
        }
      },
      exportAs: ["matTable"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([
        {
          provide: CdkTable,
          useExisting: _MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: _MatTable
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c14,
      decls: 5,
      vars: 2,
      consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
      template: function MatTable_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c05);
          \u0275\u0275projection(0);
          \u0275\u0275projection(1, 1);
          \u0275\u0275template(2, MatTable_Conditional_2_Template, 1, 0)(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx._isServer ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
        }
      },
      dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-app-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-app-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-app-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-app-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-app-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mdc-table-fixed-layout]": "fixedLayout"
      },
      providers: [
        {
          provide: CdkTable,
          useExisting: MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: MatTable
        },
        {
          provide: _COALESCED_STYLE_SCHEDULER,
          useClass: _CoalescedStyleScheduler
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-app-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-app-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-app-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-app-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-app-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-app-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-app-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-app-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-app-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child .mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-app-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"]
    }]
  }], null, null);
})();
var MatCellDef = class _MatCellDef extends CdkCellDef {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatCellDef_BaseFactory;
      return function MatCellDef_Factory(__ngFactoryType__) {
        return (\u0275MatCellDef_BaseFactory || (\u0275MatCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatCellDef)))(__ngFactoryType__ || _MatCellDef);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatCellDef,
      selectors: [["", "matCellDef", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkCellDef,
        useExisting: _MatCellDef
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatHeaderCellDef_BaseFactory;
      return function MatHeaderCellDef_Factory(__ngFactoryType__) {
        return (\u0275MatHeaderCellDef_BaseFactory || (\u0275MatHeaderCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCellDef)))(__ngFactoryType__ || _MatHeaderCellDef);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatHeaderCellDef,
      selectors: [["", "matHeaderCellDef", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkHeaderCellDef,
        useExisting: _MatHeaderCellDef
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatFooterCellDef_BaseFactory;
      return function MatFooterCellDef_Factory(__ngFactoryType__) {
        return (\u0275MatFooterCellDef_BaseFactory || (\u0275MatFooterCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCellDef)))(__ngFactoryType__ || _MatFooterCellDef);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatFooterCellDef,
      selectors: [["", "matFooterCellDef", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkFooterCellDef,
        useExisting: _MatFooterCellDef
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatColumnDef_BaseFactory;
      return function MatColumnDef_Factory(__ngFactoryType__) {
        return (\u0275MatColumnDef_BaseFactory || (\u0275MatColumnDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatColumnDef)))(__ngFactoryType__ || _MatColumnDef);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatColumnDef,
      selectors: [["", "matColumnDef", ""]],
      inputs: {
        name: [0, "matColumnDef", "name"]
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkColumnDef,
        useExisting: _MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: _MatColumnDef
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: MatColumnDef
      }],
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatHeaderCell_BaseFactory;
      return function MatHeaderCell_Factory(__ngFactoryType__) {
        return (\u0275MatHeaderCell_BaseFactory || (\u0275MatHeaderCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCell)))(__ngFactoryType__ || _MatHeaderCell);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatHeaderCell,
      selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
      hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatFooterCell = class _MatFooterCell extends CdkFooterCell {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatFooterCell_BaseFactory;
      return function MatFooterCell_Factory(__ngFactoryType__) {
        return (\u0275MatFooterCell_BaseFactory || (\u0275MatFooterCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCell)))(__ngFactoryType__ || _MatFooterCell);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatFooterCell,
      selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
      hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var MatCell = class _MatCell extends CdkCell {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatCell_BaseFactory;
      return function MatCell_Factory(__ngFactoryType__) {
        return (\u0275MatCell_BaseFactory || (\u0275MatCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatCell)))(__ngFactoryType__ || _MatCell);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatCell,
      selectors: [["mat-cell"], ["td", "mat-cell", ""]],
      hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      },
      standalone: true
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatHeaderRowDef_BaseFactory;
      return function MatHeaderRowDef_Factory(__ngFactoryType__) {
        return (\u0275MatHeaderRowDef_BaseFactory || (\u0275MatHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRowDef)))(__ngFactoryType__ || _MatHeaderRowDef);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatHeaderRowDef,
      selectors: [["", "matHeaderRowDef", ""]],
      inputs: {
        columns: [0, "matHeaderRowDef", "columns"],
        sticky: [2, "matHeaderRowDefSticky", "sticky", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkHeaderRowDef,
        useExisting: _MatHeaderRowDef
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatFooterRowDef_BaseFactory;
      return function MatFooterRowDef_Factory(__ngFactoryType__) {
        return (\u0275MatFooterRowDef_BaseFactory || (\u0275MatFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRowDef)))(__ngFactoryType__ || _MatFooterRowDef);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatFooterRowDef,
      selectors: [["", "matFooterRowDef", ""]],
      inputs: {
        columns: [0, "matFooterRowDef", "columns"],
        sticky: [2, "matFooterRowDefSticky", "sticky", booleanAttribute]
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkFooterRowDef,
        useExisting: _MatFooterRowDef
      }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatRowDef = class _MatRowDef extends CdkRowDef {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatRowDef_BaseFactory;
      return function MatRowDef_Factory(__ngFactoryType__) {
        return (\u0275MatRowDef_BaseFactory || (\u0275MatRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatRowDef)))(__ngFactoryType__ || _MatRowDef);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatRowDef,
      selectors: [["", "matRowDef", ""]],
      inputs: {
        columns: [0, "matRowDefColumns", "columns"],
        when: [0, "matRowDefWhen", "when"]
      },
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkRowDef,
        useExisting: _MatRowDef
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatHeaderRow_BaseFactory;
      return function MatHeaderRow_Factory(__ngFactoryType__) {
        return (\u0275MatHeaderRow_BaseFactory || (\u0275MatHeaderRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRow)))(__ngFactoryType__ || _MatHeaderRow);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatHeaderRow,
      selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
      exportAs: ["matHeaderRow"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkHeaderRow,
        useExisting: _MatHeaderRow
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatHeaderRow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainer(0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatFooterRow = class _MatFooterRow extends CdkFooterRow {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatFooterRow_BaseFactory;
      return function MatFooterRow_Factory(__ngFactoryType__) {
        return (\u0275MatFooterRow_BaseFactory || (\u0275MatFooterRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRow)))(__ngFactoryType__ || _MatFooterRow);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatFooterRow,
      selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
      exportAs: ["matFooterRow"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkFooterRow,
        useExisting: _MatFooterRow
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatFooterRow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainer(0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatRow = class _MatRow extends CdkRow {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatRow_BaseFactory;
      return function MatRow_Factory(__ngFactoryType__) {
        return (\u0275MatRow_BaseFactory || (\u0275MatRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatRow)))(__ngFactoryType__ || _MatRow);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatRow,
      selectors: [["mat-row"], ["tr", "mat-row", ""]],
      hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
      exportAs: ["matRow"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkRow,
        useExisting: _MatRow
      }]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkCellOutlet", ""]],
      template: function MatRow_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainer(0, 0);
        }
      },
      dependencies: [CdkCellOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      standalone: true,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  constructor() {
    super(...arguments);
    this._contentClassName = "mat-mdc-no-data-row";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatNoDataRow_BaseFactory;
      return function MatNoDataRow_Factory(__ngFactoryType__) {
        return (\u0275MatNoDataRow_BaseFactory || (\u0275MatNoDataRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatNoDataRow)))(__ngFactoryType__ || _MatNoDataRow);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatNoDataRow,
      selectors: [["ng-template", "matNoDataRow", ""]],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([{
        provide: CdkNoDataRow,
        useExisting: _MatNoDataRow
      }]), \u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }],
      standalone: true
    }]
  }], null, null);
})();
var MatTextColumn = class _MatTextColumn extends CdkTextColumn {
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatTextColumn_BaseFactory;
      return function MatTextColumn_Factory(__ngFactoryType__) {
        return (\u0275MatTextColumn_BaseFactory || (\u0275MatTextColumn_BaseFactory = \u0275\u0275getInheritedFactory(_MatTextColumn)))(__ngFactoryType__ || _MatTextColumn);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatTextColumn,
      selectors: [["mat-text-column"]],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 0,
      consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
      template: function MatTextColumn_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementContainerStart(0, 0);
          \u0275\u0275template(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
          \u0275\u0275elementContainerEnd();
        }
      },
      dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation$1.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [
  // Table
  MatTable,
  MatRecycleRows,
  // Template defs
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatFooterCellDef,
  MatFooterRowDef,
  // Cell directives
  MatHeaderCell,
  MatCell,
  MatFooterCell,
  // Row directives
  MatHeaderRow,
  MatRow,
  MatFooterRow,
  MatNoDataRow,
  MatTextColumn
];
var MatTableModule = class _MatTableModule {
  static {
    this.\u0275fac = function MatTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatTableModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatTableModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, CdkTableModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkTableModule, ...EXPORTED_DECLARATIONS2],
      exports: [MatCommonModule, EXPORTED_DECLARATIONS2]
    }]
  }], null, null);
})();

// src/app/models/requests/new-customer-request.ts
var NewCustomerRequest = class {
  firstName = "";
  lastName = "";
  initialEmail = "";
  constructor(firstName, lastName, initialEmail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.initialEmail = initialEmail;
  }
};

// src/app/shared/dialogs/new-customer-form/new-customer-form.dialog.ts
var NewCustomerFormDialog = class _NewCustomerFormDialog {
  dialogRef;
  apiService;
  initialMessage = "";
  firstName = "";
  lastName = "";
  output = [];
  constructor(dialogRef, apiService) {
    this.dialogRef = dialogRef;
    this.apiService = apiService;
  }
  ngOnInit() {
    this.apiService.getAllCustomerEmails().subscribe((output) => {
      this.output = output;
    });
  }
  closeDialog() {
    this.dialogRef.close(this.output);
  }
  createCustomer() {
    this.apiService.createCustomer(new NewCustomerRequest(this.firstName, this.lastName, this.initialMessage)).subscribe((output) => {
      if (this.initialMessage) {
        this.output.push(new CustomerEmail(this.firstName + " " + this.lastName, "00000000-0000-0000-0000-000000000000", this.initialMessage, "00000000-0000-0000-0000-000000000000", false, /* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()));
      }
      this.closeDialog();
    });
  }
  static \u0275fac = function NewCustomerFormDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewCustomerFormDialog)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(CustomerEmailService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCustomerFormDialog, selectors: [["new-customer-form"]], decls: 18, vars: 3, consts: [[1, "new-customer-form"], [1, "new-customer-input"], ["name", "firstName", "placeholder", "Jane", 3, "ngModelChange", "ngModel"], ["name", "lastName", "placeholder", "Doe", 3, "ngModelChange", "ngModel"], [1, "send-email-input"], ["name", "initialMessage", "placeholder", "Dear Customer, Please...", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"]], template: function NewCustomerFormDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "label");
      \u0275\u0275text(3, "What is the customer's first name?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "textarea", 2);
      \u0275\u0275twoWayListener("ngModelChange", function NewCustomerFormDialog_Template_textarea_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.firstName, $event) || (ctx.firstName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 1)(6, "label");
      \u0275\u0275text(7, "What is the customer's last name?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "textarea", 3);
      \u0275\u0275twoWayListener("ngModelChange", function NewCustomerFormDialog_Template_textarea_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.lastName, $event) || (ctx.lastName = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "label");
      \u0275\u0275text(11, "What would you like the email to be?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "textarea", 5);
      \u0275\u0275twoWayListener("ngModelChange", function NewCustomerFormDialog_Template_textarea_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.initialMessage, $event) || (ctx.initialMessage = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "footer")(14, "button", 6);
      \u0275\u0275listener("click", function NewCustomerFormDialog_Template_button_click_14_listener() {
        return ctx.createCustomer();
      });
      \u0275\u0275text(15, "Create New Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 7);
      \u0275\u0275listener("click", function NewCustomerFormDialog_Template_button_click_16_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275text(17, "Close");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.firstName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.lastName);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.initialMessage);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCustomerFormDialog, { className: "NewCustomerFormDialog", filePath: "src\\app\\shared\\dialogs\\new-customer-form\\new-customer-form.dialog.ts", lineNumber: 19 });
})();

// src/app/nav.module.ts
var NavModule = class _NavModule {
  static \u0275fac = function NavModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _NavModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    MatTableModule,
    FontAwesomeModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    MatTableModule,
    FontAwesomeModule,
    MatDialogModule,
    FormsModule
  ] });
};

// node_modules/ngx-webstorage/fesm2022/ngx-webstorage.mjs
var StorageStrategies;
(function(StorageStrategies2) {
  StorageStrategies2["Local"] = "local_strategy";
  StorageStrategies2["Session"] = "session_strategy";
  StorageStrategies2["InMemory"] = "in_memory_strategy";
})(StorageStrategies || (StorageStrategies = {}));
var CompatHelper = class {
  static isStorageAvailable(storage) {
    let available = true;
    try {
      if (typeof storage === "object") {
        storage.setItem("test-storage", "foobar");
        storage.removeItem("test-storage");
      } else available = false;
    } catch (e) {
      available = false;
    }
    return available;
  }
};
var DefaultPrefix = "ngx-webstorage";
var DefaultSeparator = "|";
var DefaultIsCaseSensitive = false;
var StorageKeyManager = class _StorageKeyManager {
  static {
    this.prefix = DefaultPrefix;
  }
  static {
    this.separator = DefaultSeparator;
  }
  static {
    this.isCaseSensitive = DefaultIsCaseSensitive;
  }
  static normalize(raw) {
    raw = _StorageKeyManager.isCaseSensitive ? raw : raw.toLowerCase();
    return `${_StorageKeyManager.prefix}${_StorageKeyManager.separator}${raw}`;
  }
  static isNormalizedKey(key) {
    return key.indexOf(_StorageKeyManager.prefix + _StorageKeyManager.separator) === 0;
  }
  static setPrefix(prefix) {
    _StorageKeyManager.prefix = prefix;
  }
  static setSeparator(separator) {
    _StorageKeyManager.separator = separator;
  }
  static setCaseSensitive(enable) {
    _StorageKeyManager.isCaseSensitive = enable;
  }
  static consumeConfiguration(config3) {
    if ("prefix" in config3) this.setPrefix(config3.prefix);
    if ("separator" in config3) this.setSeparator(config3.separator);
    if ("caseSensitive" in config3) this.setCaseSensitive(config3.caseSensitive);
  }
};
var StrategyCacheService = class _StrategyCacheService {
  constructor() {
    this.caches = {};
  }
  get(strategyName, key) {
    return this.getCacheStore(strategyName)[key];
  }
  set(strategyName, key, value) {
    this.getCacheStore(strategyName)[key] = value;
  }
  del(strategyName, key) {
    delete this.getCacheStore(strategyName)[key];
  }
  clear(strategyName) {
    this.caches[strategyName] = {};
  }
  getCacheStore(strategyName) {
    if (strategyName in this.caches) return this.caches[strategyName];
    return this.caches[strategyName] = {};
  }
  static {
    this.\u0275fac = function StrategyCacheService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StrategyCacheService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StrategyCacheService,
      factory: _StrategyCacheService.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StrategyCacheService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LOCAL_STORAGE = new InjectionToken("window_local_storage");
var SESSION_STORAGE = new InjectionToken("window_session_storage");
var BaseSyncStorageStrategy = class {
  constructor(storage, cache) {
    this.storage = storage;
    this.cache = cache;
    this.keyChanges = new Subject();
  }
  get isAvailable() {
    if (this._isAvailable === void 0) this._isAvailable = CompatHelper.isStorageAvailable(this.storage);
    return this._isAvailable;
  }
  get(key) {
    let data = this.cache.get(this.name, key);
    if (data !== void 0) return of(data);
    try {
      const item = this.storage.getItem(key);
      if (item !== null) {
        data = JSON.parse(item);
        this.cache.set(this.name, key, data);
      }
    } catch (err) {
      console.warn(err);
    }
    return of(data);
  }
  set(key, value) {
    const data = JSON.stringify(value);
    this.storage.setItem(key, data);
    this.cache.set(this.name, key, value);
    this.keyChanges.next(key);
    return of(value);
  }
  del(key) {
    this.storage.removeItem(key);
    this.cache.del(this.name, key);
    this.keyChanges.next(key);
    return of(null);
  }
  clear() {
    this.storage.clear();
    this.cache.clear(this.name);
    this.keyChanges.next(null);
    return of(null);
  }
};
var LocalStorageStrategy = class _LocalStorageStrategy extends BaseSyncStorageStrategy {
  static {
    this.strategyName = StorageStrategies.Local;
  }
  constructor(storage, cache, platformId, zone) {
    super(storage, cache);
    this.storage = storage;
    this.cache = cache;
    this.platformId = platformId;
    this.zone = zone;
    this.name = _LocalStorageStrategy.strategyName;
    if (isPlatformBrowser(this.platformId)) this.listenExternalChanges();
  }
  listenExternalChanges() {
    window.addEventListener("storage", (event) => this.zone.run(() => {
      if (event.storageArea !== this.storage) return;
      const key = event.key;
      if (key !== null) this.cache.del(this.name, event.key);
      else this.cache.clear(this.name);
      this.keyChanges.next(key);
    }));
  }
  static {
    this.\u0275fac = function LocalStorageStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocalStorageStrategy)(\u0275\u0275inject(LOCAL_STORAGE), \u0275\u0275inject(StrategyCacheService), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _LocalStorageStrategy,
      factory: _LocalStorageStrategy.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageStrategy, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCAL_STORAGE]
    }]
  }, {
    type: StrategyCacheService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }], null);
})();
var SessionStorageStrategy = class _SessionStorageStrategy extends BaseSyncStorageStrategy {
  static {
    this.strategyName = StorageStrategies.Session;
  }
  constructor(storage, cache, platformId, zone) {
    super(storage, cache);
    this.storage = storage;
    this.cache = cache;
    this.platformId = platformId;
    this.zone = zone;
    this.name = _SessionStorageStrategy.strategyName;
    if (isPlatformBrowser(this.platformId)) this.listenExternalChanges();
  }
  listenExternalChanges() {
    window.addEventListener("storage", (event) => this.zone.run(() => {
      if (event.storageArea !== this.storage) return;
      const key = event.key;
      if (event.key !== null) this.cache.del(this.name, event.key);
      else this.cache.clear(this.name);
      this.keyChanges.next(key);
    }));
  }
  static {
    this.\u0275fac = function SessionStorageStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SessionStorageStrategy)(\u0275\u0275inject(SESSION_STORAGE), \u0275\u0275inject(StrategyCacheService), \u0275\u0275inject(PLATFORM_ID), \u0275\u0275inject(NgZone));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _SessionStorageStrategy,
      factory: _SessionStorageStrategy.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionStorageStrategy, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SESSION_STORAGE]
    }]
  }, {
    type: StrategyCacheService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: NgZone
  }], null);
})();
var InMemoryStorageStrategy = class _InMemoryStorageStrategy {
  static {
    this.strategyName = StorageStrategies.InMemory;
  }
  constructor(cache) {
    this.cache = cache;
    this.keyChanges = new Subject();
    this.isAvailable = true;
    this.name = _InMemoryStorageStrategy.strategyName;
  }
  get(key) {
    return of(this.cache.get(this.name, key));
  }
  set(key, value) {
    this.cache.set(this.name, key, value);
    this.keyChanges.next(key);
    return of(value);
  }
  del(key) {
    this.cache.del(this.name, key);
    this.keyChanges.next(key);
    return of(null);
  }
  clear() {
    this.cache.clear(this.name);
    this.keyChanges.next(null);
    return of(null);
  }
  static {
    this.\u0275fac = function InMemoryStorageStrategy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InMemoryStorageStrategy)(\u0275\u0275inject(StrategyCacheService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InMemoryStorageStrategy,
      factory: _InMemoryStorageStrategy.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemoryStorageStrategy, [{
    type: Injectable
  }], () => [{
    type: StrategyCacheService,
    decorators: [{
      type: Inject,
      args: [StrategyCacheService]
    }]
  }], null);
})();
var STORAGE_STRATEGIES = new InjectionToken("STORAGE_STRATEGIES");
var Strategies = [{
  provide: STORAGE_STRATEGIES,
  useClass: InMemoryStorageStrategy,
  multi: true
}, {
  provide: STORAGE_STRATEGIES,
  useClass: LocalStorageStrategy,
  multi: true
}, {
  provide: STORAGE_STRATEGIES,
  useClass: SessionStorageStrategy,
  multi: true
}];
var [InMemoryStorageStrategyProvider, LocalStorageStrategyProvider, SessionStorageStrategyProvider] = Strategies;
var InvalidStrategyError = "invalid_strategy";
var StrategyIndex = class _StrategyIndex {
  static {
    this.index = {};
  }
  constructor(strategies) {
    this.strategies = strategies;
    this.registration$ = new Subject();
    if (!strategies) strategies = [];
    this.strategies = strategies.reverse().map((strategy, index, arr) => strategy.name).map((name, index, arr) => arr.indexOf(name) === index ? index : null).filter((index) => index !== null).map((index) => strategies[index]);
  }
  static get(name) {
    if (!this.isStrategyRegistered(name)) throw Error(InvalidStrategyError);
    let strategy = this.index[name];
    if (!strategy.isAvailable) {
      strategy = this.index[StorageStrategies.InMemory];
    }
    return strategy;
  }
  static set(name, strategy) {
    this.index[name] = strategy;
  }
  static clear(name) {
    if (name !== void 0) delete this.index[name];
    else this.index = {};
  }
  static isStrategyRegistered(name) {
    return name in this.index;
  }
  static hasRegistredStrategies() {
    return Object.keys(this.index).length > 0;
  }
  getStrategy(name) {
    return _StrategyIndex.get(name);
  }
  indexStrategies() {
    this.strategies.forEach((strategy) => this.register(strategy.name, strategy));
  }
  indexStrategy(name, overrideIfExists = false) {
    if (_StrategyIndex.isStrategyRegistered(name) && !overrideIfExists) return _StrategyIndex.get(name);
    const strategy = this.strategies.find((strategy2) => strategy2.name === name);
    if (!strategy) throw new Error(InvalidStrategyError);
    this.register(name, strategy, overrideIfExists);
    return strategy;
  }
  register(name, strategy, overrideIfExists = false) {
    if (!_StrategyIndex.isStrategyRegistered(name) || overrideIfExists) {
      _StrategyIndex.set(name, strategy);
      this.registration$.next(name);
    }
  }
  static {
    this.\u0275fac = function StrategyIndex_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StrategyIndex)(\u0275\u0275inject(STORAGE_STRATEGIES, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StrategyIndex,
      factory: _StrategyIndex.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StrategyIndex, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [STORAGE_STRATEGIES]
    }]
  }], null);
})();
var LIB_CONFIG = new InjectionToken("ngx_webstorage_config");
var InternalNgxWebstorageFeatureKind;
(function(InternalNgxWebstorageFeatureKind2) {
  InternalNgxWebstorageFeatureKind2[InternalNgxWebstorageFeatureKind2["Config"] = 1] = "Config";
  InternalNgxWebstorageFeatureKind2[InternalNgxWebstorageFeatureKind2["LocalStorage"] = 2] = "LocalStorage";
  InternalNgxWebstorageFeatureKind2[InternalNgxWebstorageFeatureKind2["SessionStorage"] = 3] = "SessionStorage";
})(InternalNgxWebstorageFeatureKind || (InternalNgxWebstorageFeatureKind = {}));
function appInit() {
  const config3 = inject(LIB_CONFIG);
  const index = inject(StrategyIndex);
  return () => {
    StorageKeyManager.consumeConfiguration(config3);
    index.indexStrategies();
  };
}
function provideNgxWebstorage(...features) {
  const {
    configProvider,
    featureProviders
  } = parseFeatures(features);
  return makeEnvironmentProviders([configProvider, InMemoryStorageStrategyProvider, {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true
  }, ...featureProviders]);
}
function parseFeatures(features) {
  let configProvider;
  const featureProviders = [];
  const parsedFeatures = /* @__PURE__ */ new Set();
  for (const feature of features) {
    if (parsedFeatures.has(feature.kind)) throw new Error(`Feature ${feature.kind} is already provided.`);
    if (feature.kind === InternalNgxWebstorageFeatureKind.Config) {
      configProvider = feature.providers[0];
    } else featureProviders.push(...feature.providers);
    parsedFeatures.add(feature.kind);
  }
  return {
    configProvider: configProvider ?? {
      provide: LIB_CONFIG,
      useValue: {
        prefix: DefaultPrefix,
        separator: DefaultSeparator,
        caseSensitive: DefaultIsCaseSensitive
      }
    },
    featureProviders
  };
}

// src/app/app.module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [provideHttpClient(), provideNgxWebstorage()], imports: [
    AppComponent,
    NavModule,
    RouterModule,
    MatTableModule,
    FontAwesomeModule,
    MatDialogModule
  ] });
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  dialog;
  faPeopleGroup = faPeopleGroup;
  constructor(dialog) {
    this.dialog = dialog;
  }
  ngOnInit() {
  }
  // open send email dialog to bulk send an email to all customers
  openSendEmailDialog() {
    let dialogRef = this.dialog.open(SendEmailDialog, {
      data: { isBulkEmail: true },
      position: {
        top: "-50%",
        left: "10%"
      }
    }).afterClosed().subscribe((newTable) => {
    });
  }
  // open send email dialog to bulk send an email to all customers
  openAddNewCustomerDialog() {
    let dialogRef = this.dialog.open(NewCustomerFormDialog, {
      position: {
        top: "-50%",
        left: "10%"
      }
    }).afterClosed().subscribe((newTable) => {
    });
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 1, consts: [[1, "btn", "btn-primary", 3, "click"], [3, "icon"], [1, "btn", "btn-secondary", 3, "click"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div")(1, "header")(2, "h4");
      \u0275\u0275text(3, "Customer Emails Sent Out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "button", 0);
      \u0275\u0275listener("click", function AppComponent_Template_button_click_5_listener() {
        return ctx.openSendEmailDialog();
      });
      \u0275\u0275element(6, "fa-icon", 1);
      \u0275\u0275text(7, "Bulk Send");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 2);
      \u0275\u0275listener("click", function AppComponent_Template_button_click_8_listener() {
        return ctx.openAddNewCustomerDialog();
      });
      \u0275\u0275text(9, "Add New Customer");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "all-existing-customers");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("icon", ctx.faPeopleGroup);
    }
  }, dependencies: [AppModule, NavModule, CustomersComponent, FaIconComponent], styles: ["\n\nfa-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 18 });
})();

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideNgxWebstorage()
  ]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config2 = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config2);
var main_server_default = bootstrap;

export {
  main_server_default
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v18.2.10
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-N23PNAXG.mjs.map
