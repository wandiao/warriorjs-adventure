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
    const BackSpaces = warrior.look('backward');
    const frontSpaces = warrior.look();
    const space = warrior.feel();                             // 面对的第一个单位
    const backUnit = this.getLookUnit(BackSpaces);                 // 后面的第一个单位
    const frontUnit = this.getLookUnit(frontSpaces);                // 前面的第一个单位
    if (backUnit && backUnit.isEnemy()) {
      return warrior.shoot('backward');
    }
    if (!frontUnit) {
      if (space.isWall()) {
        return warrior.pivot();
      } else {
        return warrior.walk();
      }
    }
    if (frontUnit.isEnemy()) {
      return warrior.shoot();
    } else {
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

  // 获取第一个单位
  getLookUnit(spaces) {
    for (const space of spaces) {
      if (space.isUnit()) {
        return space.getUnit();
      }
    }
    return null;
  }
}
