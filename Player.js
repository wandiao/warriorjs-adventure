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
    const spaces = warrior.look();
    let unit; // 看到的第一个单位
    for (const space of spaces) {
      if (space.isUnit()) {
        unit = space.getUnit();
        break;
      };
    }
    if (!unit) {
      return warrior.walk();
    }
    if (unit.isEnemy()) {
      warrior.shoot();
    } else {
      const space = warrior.feel();
      if (space.getUnit() && space.getUnit().isBound()) {
        warrior.rescue();
      } else {
        warrior.walk();
      }
    }
    this.health = health;
  }

  // 打印日志
  log(obj) {
    return this.warrior.think(JSON.stringify(obj));
  }
}
