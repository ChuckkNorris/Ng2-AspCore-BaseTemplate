System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', 'ng2rest/ng2rest', './app.component', '@angular2-material/checkbox', '@angular2-material/button'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, router_1, http_1, ng2rest_1, app_component_1, checkbox_1, button_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ng2rest_1_1) {
                ng2rest_1 = ng2rest_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS, ng2rest_1.RestService,
                core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: checkbox_1.MdCheckbox, multi: true }),
                core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: button_1.MdButton, multi: true })
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map