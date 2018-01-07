angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, ServicioTareas) {

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    $scope.ingresarTareas = function(){

    console.log($scope.loginData);

    ServicioTareas.ingresarTareas($scope.loginData).then(function(res){
    $scope.modal.hide();

    $scope.recuperarTareas();
      console.log(res.data);
    }, function(err){
      console.log('Error, ', err);
    }


    );
    }


    $scope.recuperarTareas = function(){
    ServicioTareas.recuperarTareas().then(
      function(res){
        console.log(res.data);
        $scope.listaTareas = res.data;
      },
      function(err){
        console.log(err);
      }
    );
    }
    $scope.recuperarTareas();
})


.controller('ListaTareasCtrl', function($scope, ServicioTareas, $rootScope) {

  $scope.tbl_tareas = {}
  $scope.listaTareas = [];
  $rootScope.tareaSeleccionada = {};



  $scope.recuperarTareas = function(){
  ServicioTareas.recuperarTareas().then(
    function(res){
      console.log(res.data);
      $scope.listaTareas = res.data;
    },
    function(err){
      console.log(err);
    }
  );
  }

  $scope.eliminarTareas = function(tbl_tareas){

  var id = tbl_tareas.id_tarea;
  ServicioTareas.eliminarTareas(id).then(
    function(res){
      $scope.recuperarTareas();
    },
    function(err){
      console.log(err);
    }
  );
  }

  $scope.recuperarTareasID = function(tbl_tareas){
    $rootScope.tareaSeleccionada = tbl_tareas;

  }

  $scope.recuperarTareas();
})




.controller('editarTareaCtrl', function($scope, ServicioTareas, $rootScope) {

  $scope.tbl_tareas = $rootScope.tareaSeleccionada;

  $scope.tbl_tareas1 = {};

  console.log($scope.tbl_tareas);

  $scope.actualizarTareas = function(tbl_tareas){
  ServicioTareas.actualizarTareas($scope.tbl_tareas1).then(
    function(res){
      console.log(res.data);
    },
    function(err){
      console.log(err);
    }
  );
  }


})
