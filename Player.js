class Player {
  constructor() {
    this.health = 20;
  }
  playTurn(warrior) {
    const health = warrior.health();
    if (warrior.feel().isEmpty()) {
      if (warrior.health() <= 12) { //干死大型史莱姆的最低血量
        if (this.health > health) { // 受到攻击
          warrior.walk();
        } else {
          warrior.rest();
        }
      } else {
        warrior.walk();
      }
      
    } else {
      warrior.attack();
    }
    this.health = health;
  }
}
