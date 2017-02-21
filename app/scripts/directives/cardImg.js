angular.module("angularTestingApp")
    .directive("cardImg", function () {
        return function (s, e, a) {
            a.$observe('cardImg', function (value) {
                var css = {
                    "background": 'url(' + value + ')',
                    "background-size": "cover",
                    "background-position": "center",
                    "width": "100%",
                    "height": "100px",
                    "display": "inline-block",
                    "border": "1px solid lightgray"
                };
                e.css(css);
            });
        }
    });


