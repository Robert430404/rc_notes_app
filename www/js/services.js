angular.module('starter.services', [])

.factory('Notes', function($q, $http) {
  // Returns All Note Data When This Is Called
  return {
    all: function()
    {
      var deferred = $q.defer();
      $http.get("http://notes.studiorclv.com/api/v1/notes?access_token=976e1cb5ee09eaa2d465bb9de22048d3").then(
        function(resp){
          deferred.resolve(resp);
        }
      );
      return deferred.promise;
    }
  };
})

.service('sendData', function($q, $http) {

});
