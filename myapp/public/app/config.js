angular.module('myApp')
	.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/home/All/motorola-xoom-with-wi-fi");
 
  $stateProvider
    /*.state('home', {
      url: "/home",
      views: {
	      'filters': {
	        template: "<filter-grid></filter-grid>"
	      },
	      'desc': {
	        template: "<detail-desc></detail-desc>"
	      }
	    }
    })*/
     .state('state', {
      url: "/home/:company/:id",
      views: {
        'filters': {
          template: "<filter-grid></filter-grid>"
        },
        'desc': {
          template: "<detail-desc></detail-desc>"
        }
      }
    })
    .state('add', {
      url: "/home/add",
      template: "<add-detail></add-detail>"
    })
    .state('update', {
      url: "/home/mobile/update/:id",
      template: "<update-detail></update-detail>"
    });
});