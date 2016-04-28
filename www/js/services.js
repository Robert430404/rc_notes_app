angular.module('starter.services', [])

.factory('Notes', function($q, $http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
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
});
