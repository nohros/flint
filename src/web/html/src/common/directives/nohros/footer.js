angular
  .module('must.directives.footer', [])
  .directive('footer', function() {
    return {
      link: function postLink(scope, elm, attrs) {
        var w = angular.element(window);
        elm.css('position', 'absolute');

        var position = function() {
          console.log(elm.height());
          elm.css('top', (w.height()-elm.height()).toString() + 'px');
        };

        position();
        w.on("resize", function() {
          position();
        });
      }
    };
  });