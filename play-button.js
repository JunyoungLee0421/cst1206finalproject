// This class will represent the play button in the MusicScreen. Clicking on
// it toggles audio playback.
//
// See HW4 writeup for more hints and details.
class PlayButton {
  constructor(audioPlayer) {
    // TODO(you): Implement the constructor and add fields as necessary.
    
    this.playing = true;

    this.buttonContainer = document.querySelector("#playButton");

    this.toggle = this.toggle.bind(this);

    this.buttonContainer.addEventListener('click', this.toggle);

    this.audioPlayer = audioPlayer;
  
  }
  // TODO(you): Add methods as necessary.

  toggle(event) {
    if (this.playing) {
      this.pause();
    } else {
      this.play();
    }
    this.playing = !this.playing;
  }

  play() {
    this.buttonContainer.src = "images/pause.png";

    this.audioPlayer.play();
  }

  pause() {
    this.buttonContainer.src = "images/play.png";

    this.audioPlayer.pause();
  }


}
