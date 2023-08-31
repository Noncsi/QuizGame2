export default function SpotifyPlayerComponent(props: any) {
  const playSong = () => {
    props.player?.nextTrack();
  };

  return (
    <>
      <div className="container">
        <div className="main-wrapper">
          <div className="now-playing__side">
            <div className="now-playing__name">
              {props.currentTrack?.track.title}
            </div>
            <div className="now-playing__artist">
              {props.currentTrack?.track.artist}
            </div>
          </div>
          <button className="btn-spotify" onClick={playSong}>
            {props.isPaused ? "PLAY" : "PAUSE"}
          </button>
        </div>
      </div>
    </>
  );
}
