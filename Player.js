class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() <= 6) {
        warrior.rest();
      } else {
        warrior.walk();
      }
      
    } else {
      warrior.attack();
    }
  }
}
