angular
  .module("must.directives.screenHeight", [
  ])

  .directive("screenHeight", function () {
    return {
      link: function(scope, elm, attrs) {
        var w = $(window);

        elm.css("minHeight", w.height());

        // We need to adjust the height when the window is resized.
        w.on("resize", function() {
          elm.css("minHeight", w.height());
        });
      }
    };
  });