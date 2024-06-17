class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3))); // Vec{x:3,y:5}

console.log(new Vec(1, 2).minus(new Vec(2, 3))); // Vec{x:-1,y:-1}

console.log(new Vec(3, 4).length); // 5

class Group {
  #members = [];

  add(val) {
    if (!this.has(val)) {
      this.#members.push(val);
    }
  }

  delete(val) {
    this.#members = this.#members.filter((v) => v !== val);
  }

  has(val) {
    return this.#members.includes(val);
  }

  static from(arr) {
    let group = new Group();
    for (let val of arr) {
      group.add(val);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.#members);
  }
}

class GroupIterator {
  #members;
  #position;

  constructor(members) {
    this.#members = members;
    this.#position = 0;
  }

  next() {
    if (this.#position >= this.#members.length) {
      return { done: true };
    } else {
      let result = { value: this.#members[this.#position], done: false };
      this.#position++;
      return result;
    }
  }
}

let group = Group.from([10, 20]);

console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

let g2 = Group.from([50, 60]);
