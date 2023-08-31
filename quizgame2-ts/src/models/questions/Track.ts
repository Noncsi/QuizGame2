export class Track {
  uri: string;
  title: string;
  artist: string;

  constructor(uri: string, title: string, artist: string) {
    this.uri = uri;
    this.title = title;
    this.artist = artist;
  }
}
