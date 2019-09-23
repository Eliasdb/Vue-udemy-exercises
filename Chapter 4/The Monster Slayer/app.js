new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false // to decide whether to show the start new game button or the attack/heal buttons
    },
    methods: {
        startGame: function() { // on click, sets up actions buttons and health bars
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;

            max = 12;
            min = 5;
            damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;
        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        }
    }
});