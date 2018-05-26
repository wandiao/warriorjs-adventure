## caterpillar - beginner - level 2

### _It's too dark to see anything, but you smell sludge nearby._

> **TIP:** Use `warrior.feel().isEmpty()` to see if there's anything in front of you, and `warrior.attack()` to fight it. Remember, you can only do one action per turn.


### Floor Map

```
╔════════╗
║@   s  >║
╚════════╝

@ = caterpillar (20 HP)
s = Sludge (12 HP)
> = stairs
```

### Abilities

#### Actions (only one per turn)

* `warrior.attack()`: Attack a unit in the given direction (forward by default) dealing 5 HP of damage.
* `warrior.walk()`: Move one space in the given direction (forward by default).

#### Senses

* `warrior.feel()`: Return the adjacent space in the given direction (forward by default).
* `warrior.think()`: Think about your options before choosing an action (`console.log` replacement).

### Next Steps

When you're done editing `Player.js`, run the `warriorjs` command again.
