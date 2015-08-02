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

            var game =
                new Phaser.Game(
                    800, 600,         // width x height
                    Phaser.AUTO,      // the game context, 2D/3D
                    'game_canvas',     // id of the DOM element to add the game
                    { preload: preload, create: create, update: function() {} }
                );

            function preload () {
                game.load.image('yeoman', '../images/yeoman.png');
            }

            function create()  {
                addSprite();
            }



            vm.move = function (key) {
                console.log(key);
            }

            function getRandomInt() {
                var min = 1;
                var max = 100;
                return Math.floor(Math.random() * (max - min)) + min;
            }

            function addSprite() {
                return game.add.sprite(10, getRandomInt(), 'dude');
            }
        }

    }
}