angular.module('infiniteScroll', [])
    .directive('infiniteScroll', function ($window) {
        return {
            link:function (scope, element, attrs) {
                var offset = parseInt(attrs.threshold) || 0;
                var e = element[0];

                element.bind('scroll', function () {
                    if (scope.canLoad && e.scrollTop + e.offsetHeight >= e.scrollHeight - offset) {
                        scope.$apply(attrs.infiniteScroll);
                    }
                });
            }
        }
    })