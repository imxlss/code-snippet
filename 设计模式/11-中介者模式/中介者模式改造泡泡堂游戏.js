function Player(name, teamColor) {
  this.name = name;
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
  this.state = 'dead';
  playerDirector.ReceiveMessage('playerDead', this); // 给中介者发消息，玩家死亡
}

Player.prototype.remove = function () {
  playerDirector.ReceiveMessage('removePlayer', this); // 给中介者发消息，移除一个玩家
}

Player.prototype.changeTeam = function (color) {
  playerDirector.ReceiveMessage('changeTeam', this, color); // // 给中介者发消息，玩家换队
}

let playerFactory = function (name, teamColor) {
  let newPlayer = new Player(name, teamColor);
  playerDirector.ReceiveMessage('addPlayer', newPlayer);

  return newPlayer;
}

let playerDirector = (function () {
  let players = {},
    operations = {};

  operations.addPlayer = function (player) {
    let teamColor = player.teamColor;

    players[teamColor] = players[teamColor] || [];
    players[teamColor].push(player);
  }

  operations.removePlayer = function (player) {
    let teamColor = player.teamColor,
      teamPlayers = players[teamColor] || [];

    for (let i = teamPlayers.length - 1; i >= 0; i--) {
      if (teamPlayers[i] === player) {
        teamPlayers.splice(i, 1);
      }
    }
  }

  operations.changeTeam = function (player, newTeamColor) {
    operations.removePlayer(player);
    player.teamColor = newTeamColor;
    operations.addPlayer(player);
  }

  operations.playerDead = function (player) {
    let teamColor = player.teamColor,
      teamPlayers = players[teamColor];

    let all_dead = true;

    for (let i = 0, player; player = teamPlayers[i++];) {
      if (player.state !== 'dead') {
        all_dead = false;
        break;
      }
    }

    if (all_dead === true) {
      for (let i = 0, player; player = teamPlayers[i++];) {
        player.lose();
      }

      for (let color in players) {
        if (color !== teamColor) {
          let teamPlayers = players[color];
          for (let i = 0, player; player = teamPlayers[i++];) {
            player.win();
          }
        }
      }

    }

  }

  let ReceiveMessage = function () {
    let message = Array.prototype.shift.call(arguments);
    operations[message].apply(this, arguments);
  }

  return {
    ReceiveMessage
  }

})();

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

/* player1.die();
player2.die();
player3.die();
player4.die(); */

player1.changeTeam();
player2.die();
player3.die();
player4.die();
