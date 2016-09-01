angular.module("starter.controllers", [])
    .controller('ToDoListCtrl', ['$scope', '$ionicModal', function($scope, $ionicModal) {
        $scope.toDoListItems = [{
            task: 'Scuba Diving',
            status: 'not done'
        }, {
            task: 'Climb Everest',
            status: 'not done'
        }];

        //init the modal
        // $ionicModal.fromTemplateUrl('modal.html', {
        //     scope: $scope,
        //     animation: 'slide-in-up'
        // }).then(function(modal) {
        //     $scope.modal = modal;
        // });


$ionicModal.fromTemplateUrl('modal.html', {
  scope: $scope,
  animation: 'slide-in-up'
}).then(function (modal) {
  $scope.modal = modal;
});

        //function to open the modal
        $scope.openModal = function() {
            $scope.modal.show();
        };

        //function to close the modal
        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        //clean up the modal when we are done with it
        $scope.$on('$destory', function() {
            $scope.modal.remove();
        });


        //function to add items to the existing list
        $scope.AddItem = function() {
            $scope.toDoListItems.push({
                task: data.newItem,
                status: 'not done'
            });
            data.newItem='';
            $scope.closeModal();
        }

    }])
