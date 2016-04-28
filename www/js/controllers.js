angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Notes) {
  console.log(Notes.all());
  $scope.notes = Notes.all();
})

.controller('ChatsCtrl', function($scope) {})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
