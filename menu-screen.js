// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(submission) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.submission = submission;

    this.songchoices = [];

    this.onSongJsonReady = this.onSongJsonReady.bind(this);

    this.onGifJsonReady = this.onGifJsonReady.bind(this);

    this.submit = this.submit.bind(this);

    this.loadSongChoices();

    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener('click', this.submit);

    const textContainer = document.querySelector("#query-input");
    textContainer.addEventListener('input', this.reset);
 
    }

  // TODO(you): Add methods as necessary
  //load songs

  loadSongChoices() {
    fetch("https://raw.githubusercontent.com/JunyoungLee0421/cst1206final/master/songs.json")
      .then(response => response.json())
      .then(this.onSongJsonReady);
  }

  onSongJsonReady(json) {
    this.songchoices = json;

    const optionsbox = document.querySelector("#song-selector");

    for (const song in this.songchoices) {
      const option = document.createElement("option");

      option.value = this.songchoices[song].songUrl;
      option.text = this.songchoices[song].title;
      optionsbox.add(option);
    }
  }

  loadGifData() {
    const textBox = document.querySelector("#query-input");
    const end = "https://api.giphy.com/v1/gifs/search?q=" + textBox.value +
    "&api_key=dc6zaTOxFJmzC&limit=25&rating=g";

    fetch(end)
    .then(response => response.json())
    .then(this.onGifJsonReady);
  }

  onGifJsonReady(json) {
    const data = json.data;

    if (data.length < 2) {
      const errorbox = document.querySelector("#error");
      errorbox.classList.remove("inactive");
    } else {
      const songselector = document.querySelector("#song-selector");
      const songURL = songselector.options[songselector.selectedIndex].value;

      this.submission(songURL, data);
    }
  }

  submit(event) {
    event.preventDefault();
    this.loadGifData();
  }

  reset(event) {
    const errorbox = document.querySelector("#error");
    errorbox.classList.add("inactive");
  }
 
}

