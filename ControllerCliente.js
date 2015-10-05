var app = angular.module("Aplicacao", []);

app.controller("ControllerCliente", ["$scope", function($scope) {
  $scope.clienteSelecionado = {};
  $scope.clientes = [];
  $scope.novoCliente = true;
  //alert("O Controller iniciou.");

  $scope.cadastrar = function() { // Colocar só um alert("Eu devo cadastrar um novo cliente");
    //alert("Eu devo cadastrar um novo cliente");
    if ($scope.novoCliente) {
      $scope.clientes.push($scope.clienteSelecionado);
    }

    $scope.novoCliente = true;
    $scope.clienteSelecionado = {};
  };

  // Objeto no javascript trabalha com referência
  $scope.selecionar = function(indice) {
    $scope.novoCliente = false;
    $scope.clienteSelecionado = $scope.clientes[indice];
  };

  $scope.excluir = function(indice) {
    $scope.clientes.splice(indice, 1); // Apaga n registros de um vetor a partir de um índice
  };
}]);
