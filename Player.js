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
    let space = warrior.feel();;
    if (space.isEmpty()) {
      if (health < 10) { //干死弓箭手的最低血量
        if (this.health > health) { // 受到攻击
          if (health < 8) { // 防止被射死的最低血量
            warrior.walk('backward');
          } else {
            warrior.walk();
          }
        } else {
          warrior.rest();
        }
      } else {
        warrior.walk();
      }
    } else {
      if (space.isWall()) {
        return warrior.pivot();
      }
      warrior.attack();
    }
    this.health = health;
  }

  // 打印日志
  log(obj) {
    return this.warrior.think(JSON.stringify(obj));
  }
}
