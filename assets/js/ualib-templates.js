angular.module('ualib.templates', ['../assets/js/_ualib-alerts.tpl.html', '../assets/js/_ualib-home.tpl.html']);

angular.module("../assets/js/_ualib-alerts.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../assets/js/_ualib-alerts.tpl.html",
    "<alert class=\"animate\" ng-repeat=\"alert in list.alerts\" type=\"{{alert.typeStr}}\" close=\"closeAlert($index)\">\n" +
    "    <span class=\"fa fa-exclamation-triangle\"></span> {{alert.message}}\n" +
    "    <span ng-if=\"alert.url\"><a ng-href=\"{{alert.url}}\">More...</a></span>\n" +
    "</alert>\n" +
    "");
}]);

angular.module("../assets/js/_ualib-home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../assets/js/_ualib-home.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <div ualib-alerts></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-controller=\"NewsTodayCtrl\" class=\"animate\">\n" +
    "        <div class=\"home-slice\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-6\">\n" +
    "\n" +
    "                    <!-- Replicated display for xs, sm device display -->\n" +
    "                    <div class=\"card front-page-card hidden-md hidden-lg\">\n" +
    "                        <div class=\"card-body\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <a href=\"/#/databases\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-3x fa-database\"></span>\n" +
    "                                        <h4>Databases</h4>\n" +
    "                                    </a>\n" +
    "\n" +
    "                                    <a href=\"http://guides.lib.ua.edu/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-book\"></span>\n" +
    "                                        <h4>Research Guides</h4>\n" +
    "                                    </a>\n" +
    "                                    <a href=\"http://library.ua.edu/vwebv/searchBasic\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-search\"></span>\n" +
    "                                        <h4>Libraries' Catalog</h4>\n" +
    "                                    </a>\n" +
    "                                    <a href=\"https://ua.illiad.oclc.org/illiad/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-exchange\"></span>\n" +
    "                                        <h4>Interlibrary Loan</h4>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <a href=\"/research-tools/e-resources/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-bolt\"></span>\n" +
    "                                        <h4>E-Resources</h4>\n" +
    "                                    </a>\n" +
    "\n" +
    "                                    <a href=\"/scout/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-binoculars\"></span>\n" +
    "                                        <h4>Scout</h4>\n" +
    "                                    </a>\n" +
    "                                    <a href=\"/#/staffdir\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-users\"></span>\n" +
    "                                        <h4>Staff Directory</h4>\n" +
    "                                    </a>\n" +
    "\n" +
    "                                    <a href=\"http://ask.lib.ua.edu/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-question-circle\"></span>\n" +
    "                                        <h4>Ask A Librarian</h4>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"card front-page-card\">\n" +
    "                        <div class=\"card-heading\">\n" +
    "                            <h2>Hours <small>today</small></h2>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-body\">\n" +
    "                            <div class=\"hours-list\"></div>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-footer\">\n" +
    "                            <a href=\"/#/hours\" class=\"more-link\">All Hours</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"card front-page-card\" ng-show=\"events\">\n" +
    "                        <div class=\"card-heading\">\n" +
    "                            <h2>Events</h2>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-body\">\n" +
    "                            <div news-card=\"item\" news-type=\"event\" ng-repeat=\"item in events | limitTo : 3\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-footer\">\n" +
    "                            <a href=\"http://events.ua.edu/category/22/view/month/\" class=\"more-link\">More Events</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"col-md-6\">\n" +
    "\n" +
    "                    <!-- Replicated display for md, lg device display -->\n" +
    "                    <div class=\"card front-page-card hidden-sm hidden-xs\">\n" +
    "                        <div class=\"card-body\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <a href=\"/#/databases\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-3x fa-database\"></span>\n" +
    "                                        <h4>Databases</h4>\n" +
    "                                    </a>\n" +
    "\n" +
    "                                    <a href=\"http://guides.lib.ua.edu/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-book\"></span>\n" +
    "                                        <h4>Research Guides</h4>\n" +
    "                                    </a>\n" +
    "                                    <a href=\"http://library.ua.edu/vwebv/searchBasic\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-search\"></span>\n" +
    "                                        <h4>Libraries' Catalog</h4>\n" +
    "                                    </a>\n" +
    "                                    <a href=\"https://ua.illiad.oclc.org/illiad/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-exchange\"></span>\n" +
    "                                        <h4>Interlibrary Loan</h4>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"col-sm-6\">\n" +
    "                                    <a href=\"/research-tools/e-resources/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-bolt\"></span>\n" +
    "                                        <h4>E-Resources</h4>\n" +
    "                                    </a>\n" +
    "\n" +
    "                                    <a href=\"/scout/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-binoculars\"></span>\n" +
    "                                        <h4>Scout</h4>\n" +
    "                                    </a>\n" +
    "                                    <a href=\"/#/staffdir\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-users\"></span>\n" +
    "                                        <h4>Staff Directory</h4>\n" +
    "                                    </a>\n" +
    "\n" +
    "                                    <a href=\"http://ask.lib.ua.edu/\" class=\"service-card\">\n" +
    "                                        <span class=\"fa fa-question-circle\"></span>\n" +
    "                                        <h4>Ask A Librarian</h4>\n" +
    "                                    </a>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"card front-page-card ualib-image-carousel\" ng-show=\"slides\">\n" +
    "                        <div class=\"card-body\">\n" +
    "                            <div class=\"text-center\">\n" +
    "                                <ul rn-carousel rn-carousel-auto-slide=\"6\" rn-carousel-buffered\n" +
    "                                    rn-carousel-index=\"curImage\" rn-carousel-locked=\"isLocked\">\n" +
    "                                    <li ng-repeat=\"slide in slides track by $index\">\n" +
    "                                        <a ng-href=\"{{slide.url}}\" class=\"layer text-center\" title=\"{{slide.title}}\">\n" +
    "                                            <div class=\"slide-image\" ng-style=\"{'background-image':slide.styles}\">\n" +
    "                                                <div class=\"slide-title\">\n" +
    "                                                    {{slide.title}}\n" +
    "                                                </div>\n" +
    "                                            </div>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                                <div rn-carousel-indicators ng-if=\"slides.length > 1\" slides=\"slides\" rn-carousel-index=\"curImage\">\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"card front-page-card\">\n" +
    "                        <div class=\"card-heading\">\n" +
    "                            <h2>News</h2>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-body\">\n" +
    "                            <div class=\"animate-repeat\" news-card=\"item\" ng-repeat=\"item in news\">\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"card-footer\">\n" +
    "                            <a href=\"/#/news-exhibits\" class=\"more-link\">More News</a>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
