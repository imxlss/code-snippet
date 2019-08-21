let players = [];

function Player(name, teamColor) {
  this.name = name;
  this.partners = [];
  this.enemies = [];
  this.state = 'live';
  this.teamColor = teamColor;
}

Player.prototype.win = function () {
  console.log(`winner: ${this.name}`);
}

Player.prototype.lose = function () {
  console.log(`loser: ${this.name}`);
}

Player.prototype.die = function () {
  let all_dead = true;

  this.state = 'dead';

  for (let i = 0, partner; partner = this.partners[i++];) {
    if (partner.state !== 'dead') {
      all_dead = false;
      break;
    }
  }

  if (all_dead === true) {
    this.lose();

    for (let i = 0, partner; partner = this.partners[i++];) {
      partner.lose();
    }

    for (let i = 0, enemy; enemy = this.enemies[i++];) {
      enemy.win();
    }
  }
}

let playerFactory = function (name, teamColor) {
  let newPlayer = new Player(name, teamColor);

  for (let i = 0, player; player = players[i++];) {
    if (player.teamColor === newPlayer.teamColor) {
      player.partners.push(newPlayer);
      newPlayer.partners.push(player);
    } else {
      player.enemies.push(newPlayer);
    }
  }

  players.push(newPlayer);

  return newPlayer;
}

let
  player1 = playerFactory('皮蛋', 'red'),
  player2 = playerFactory('小乖', 'red'),
  player3 = playerFactory('宝宝', 'red'),
  player4 = playerFactory('小强', 'red');

let
  player5 = playerFactory('黑妞', 'blue'),
  player6 = playerFactory('葱头', 'blue'),
  player7 = playerFactory('胖墩', 'blue'),
  player8 = playerFactory('海盗', 'blue');

player1.die();
player2.die();
player3.die();
player4.die();
