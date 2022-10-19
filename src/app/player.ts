export class Player {
  id: number;
  roundScore: number;
  gameScore: number;

  constructor(givenId: number) {
    this.id = givenId;
    this.roundScore = 0;
    this.gameScore = 0;
  }
}
