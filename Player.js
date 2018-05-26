class Player {
  constructor() {
    this.health = 20;
    this.warrior = null;
  }
  playTurn(warrior) {
    if (!this.warrior) { // 保存角色对象
      this.warrior = warrior;
    }
    const health = warrior.health();
    const space = warrior.feel();
    if (space.isEmpty()) {
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
      if (space.getUnit().isEnemy()) { // 攻击敌人
        warrior.attack();
      } else if (space.getUnit().isBound()) { // 营救被困的俘虏
        warrior.rescue();
      }
    }
    this.health = health;
  }

  // 打印日志
  log(obj) {
    return this.warrior.think(JSON.stringify(obj));
  }
}
