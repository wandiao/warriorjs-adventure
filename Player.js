class Player {
  constructor() {
    this.health = 20;
    this.warrior = null;
    this.rescued = false;
  }
  playTurn(warrior) {
    if (!this.warrior) { // 保存角色对象
      this.warrior = warrior;
    }
    const health = warrior.health();
    let space;
    if (!this.rescued) {
      space = warrior.feel('backward');
    } else {
      space = warrior.feel();
    }
    if (space.isEmpty()) {
      if (health < 16) { //干死两个弓箭手的最低血量
        if (this.health > health) { // 受到攻击
          if (health < 6) { // 防止被射死的最低血量
            warrior.walk('backward');
          } else {
            warrior.walk();
          }
          
        } else {
          warrior.rest();
        }
      } else {
        if (this.rescued) {
          warrior.walk();
        } else {
          warrior.walk('backward');
        }
        
      }
    } else {
      if (space.getUnit().isEnemy()) { // 攻击敌人
        warrior.attack();
      } else if (space.getUnit().isBound()) { // 营救被困的俘虏
        warrior.rescue('backward');
        this.rescued = true; // 营救成功
      }
    }
    this.health = health;
  }

  // 打印日志
  log(obj) {
    return this.warrior.think(JSON.stringify(obj));
  }
}
