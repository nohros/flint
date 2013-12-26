angular.module( 'flint.advertising', [
    'ui.router',
    'flint.topBar',
    'must.directives.footer',
    'must.directives.screenHeight'
  ])

  .config(function config( $stateProvider ) {
    $stateProvider.state( 'advertising', {
      url: '/',
      views: {
       "content" : {
         controller: 'AdvertisingCtrl',
         templateUrl: 'advertising/advertising.tpl.html'
       }
      },
      data:{ pageTitle: 'Flint' }
    });
  })

  .controller("AdvertisingCtrl", function() {

  });
