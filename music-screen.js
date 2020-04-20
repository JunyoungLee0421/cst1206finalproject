// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(finish_loading) {
    // TODO(you): Implement the constructor and add fields as necessary.
  
    this.setSong = this.setSong.bind(this);

    this.audioPlayer = new AudioPlayer();

    this.playButton = new PlayButton(this.audioPlayer);

    this.finish_loading = finish_loading;

  
  }
  // TODO(you): Add methods as necessary.

  setSong(songURL) {
    this.audioPlayer.setSong(songURL);
    this.audioPlayer.setKickCallback(this.gifDisplay.loadGif);
    this.audioPlayer.play();

  }

  DisplayGif(gifData) {
    this.gifDisplay = new GifDisplay(gifData, this.finish_loading);
    this.gifDisplay.preload();

  }
}
