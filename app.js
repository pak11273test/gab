var app = angular.module('gab', []);

app.controller('MainCtrl', [
    '$scope',
    function($scope){
        $scope.test = 'Hello world!';

        $scope.posts = [
        {title: "post 1", upvotes: 5}, 
        {title: "post 2", upvotes: 21},
        {title: "post 3", upvotes: 8},
        {title: "post 4", upvotes: 10}
        ];
    }]);
