var app = angular.module('my-app', []);
app.controller('form_controller', function($scope){
    $scope.sv = {
        fullname: '',
        email: '',
        password: '',
        avatar: null,
        gioi_tinh: 1,
        chuyen_nganh: ''
    }

    $scope.majors = [
        {
            id: 1, 
            name: 'Ứng dụng phần mềm'
        },
        {
            id: 2, 
            name: 'Lập trình máy tính'
        },
        {
            id: 3, 
            name: 'Thiết kế đồ họa'
        },
        {
            id: 4, 
            name: 'Thiết kế trang Web'
        },
    ]
})

app.directive("checkPassword", function(){
    return {
        require: 'ngModel',
        link: function(scope, element, atrr, controller){
            const validate = function(value){
                if(value.length >= 6){
                    controller.$setValidity('check_pw_length', true);
                } else {
                    controller.$setValidity('check_pw_length', false);
                }
                return value;
            }
            
            controller.$parsers.push(validate);
        }
    }
})