import { Question } from "./Question";

export class ExtraQuestionSong extends Question {
  track: any;

  constructor(track: any, answer: string) {
    super("What is the title and who is the artist of this song?", answer);
    this.track = track;
  }
}
