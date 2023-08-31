import { Question } from "./Question";
import { Track } from "./Track";

export class SongQuestion extends Question {
  track: Track;

  constructor(track: Track) {
    super(
      "What is the title and who is the artist of this song?",
      `${track.artist} - ${track.title}`
    );
    this.track = track;
  }
}
