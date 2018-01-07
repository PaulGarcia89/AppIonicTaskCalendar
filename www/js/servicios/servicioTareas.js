'use strict';

var app = angular.module('starter');
app.service('ServicioTareas', funcionServicioTareas);

function funcionServicioTareas($q, $http){

  this.ingresarTareas = function(tbl_tareas){
    var defered = $q.defer();
    var promise = defered.promise;

    $http.post('http://localhost:1337/tbl_tareas',tbl_tareas).then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  };

  this.recuperarTareas = function(){
    var defered = $q.defer();
    var promise = defered.promise;

    $http.get('http://localhost:1337/tbl_tareas').then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  };

  this.buscarPorId = function(id){
    var defered = $q.defer();
    var promise = defered.promise;

    $http.get('http://localhost:1337/tbl_tareas/'+id).then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  };

  this.recuperarTareasID = function(id){
    var defered = $q.defer();
    var promise = defered.promise;

    $http.get('http://localhost:1337/tbl_tareas/'+id).then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  };

  this.login = function(nick, password){
    var defered = $q.defer();
    var promise = defered.promise;
    console.log(nick+' '+password);
    $http.get('http://192.168.100.6:1337/usuario?where={"nick":"'+nick+'","password":"'+password+'"}').then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  };

  this.loginXcorreo = function(correo){
    var defered = $q.defer();
    var promise = defered.promise;
    $http.get('http://localhost:1337/usuario?where={"email":"'+correo+'"}').then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  };

  this.eliminarTareas = function(id){
    var defered = $q.defer();
    var promise = defered.promise;

    $http.delete('http://localhost:1337/tbl_tareas/'+id).then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  }

  this.actualizarTareas = function(tbl_tareas){
    var defered = $q.defer();
    var promise = defered.promise;

    $http.put('http://localhost:1337/tbl_tareas/'+tbl_tareas.id_tarea, tbl_tareas).then(function(data){
      defered.resolve(data);
    },function(err){
      defered.reject(err);
    });
    return promise;
  };

}

funcionServicioTareas.inject = ['$q','$http'];
