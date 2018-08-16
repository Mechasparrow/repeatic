class Character {
  constructor(head, body, legs) {
    this.head = head;
    this.body = body;
    this.legs = legs;
  }

  serialize() {
    let { head, body, legs } = this;
    return {
      head,
      body,
      legs
    };
  }

  static parse(raw_character) {
    let { head, body, legs } = raw_character;
    return new Character(head, body, legs);
  }
}

export default Character;
