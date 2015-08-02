/**
 * Created by jerzybatalinski on 2015-08-02.
 */
module.exports = function(ngModule) {

    if (ON_TEST) {
        require('./game.directive.test')(ngModule);
    }

    ngModule.directive('gameDirective', gameDirectiveFn);
    require('./game.directive.sass');
    function gameDirectiveFn() {
        return {
            restrict: 'E',
            template: require('./game.directive.template.html'),
            controller: gameCtrl,
            controllerAs: 'ctrl'
        }
        function gameCtrl() {
            var vm = this;
            vm.greeting = 'Start Game';
        }
    }
}