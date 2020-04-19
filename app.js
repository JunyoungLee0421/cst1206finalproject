// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.

    this.song = {};

    this.submit = this.submit.bind(this);

    this.finish_loading = this.finish_loading.bind(this);

    this.menuScreen = new MenuScreen(this.submit);

    this.musicScreen = new MusicScreen(this.finish_loading);

    
  }
  // TODO(you): Add methods as necessary.

  submit(songURL, gifData) {
    document.querySelector("#menu").classList.add("inactive");
    document.querySelector("#loading").classList.remove("inactive");

    this.songURL = songURL;
    this.musicScreen.DisplayGif(gifData);

  }

  finish_loading() {
    document.querySelector("#playing").classList.remove("inactive");
    document.querySelector("#loading").classList.remove("inactive");

    this.musicScreen.PlaySong(this.songURL);
  }


}
