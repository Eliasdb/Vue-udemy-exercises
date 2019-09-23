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
            this.monsterHealth -= this.calculateDamage(3, 10); // random number 3-10 to monster health

            if (this.checkWin()) { //checking if we should continue function or not, will check if this.checkWin returns true which is always the case if we either lost or won. if we return true here, I know I don't want to continue the code execution here because the game is over, I don't want to deal damage again. We start a new game or did nothing.
                return; //stops executing code
            }

            this.playerHealth -= this.calculateDamage(5, 12);
            this.checkWin(); //end of functions, doesn't need return
        },

        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min); // see own documentation for explanation
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) { // alerts 'you won'
                if (confirm('You won! New game?')) { //asks to play again
                    this.startGame(); // restarts the game if yes
                } else {
                    this.gameIsRunning = false; // if the player says no, it doesn't start a new game
                }
                return true;


            } else if (this.playerHealth <= 0) { //alerts 'you lost'
                if (confirm('You lost! New game?')) { //asks to play again
                    this.startGame(); //restarts the game if yes
                } else {
                    this.gameIsRunning = false; // if the player says no, it doesn't start a new game
                }
                return true;
            }
            return false; //only if we satisfy no condition
        }
    }
});