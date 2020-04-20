// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
// 
// See previous project writeup for more hints and details.
class GifDisplay {
  constructor(gifData, finish_loading) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.finish_loading = finish_loading;

    this.data = gifData;
    
    this.loadGif = this.loadGif.bind(this);

    this.preload = this.preload.bind(this);

    this.gifs = document.querySelectorAll(".gif");

    this.gifIndex = 0;

    this.index = 0;
    
    this.images = [];
    
  }
  // TODO(you): Add methods as necessary.

  select() {
    
    let i = Math.floor(Math.random() * this.images.length);
    
    while (i === this.current) {
      i = Math.floor(Math.random() * this.images.length);

    } 
    this.current = i;
  }


  loadGif() {
    this.select();

    this.gifs[this.gifIndex].classList.add("back");
    this.gifs[this.gifIndex].classList.remove("front");
    this.gifs[this.gifIndex].style.backgroundImage
      = "url(" + this.images[this.current].src + ")";

    this.gifIndex = (this.gifIndex+1)%2;
    this.gifs[this.gifIndex].classList.add("front");
    this.gifs[this.gifIndex].classList.remove("back");

  }


  preload() {
    if (this.index === 2) {
      let j = Math.floor(Math.random() * this.images.length);
      
      this.current = j;

      this.gifs[this.gifIndex].style.backgroundImage
        = "url(" + this.images[this.current].src + ")";

      this.loadGif();

      this.finish_loading();

    }
    if (this.index < this.data.length) {
      this.images.push(new Image());

      this.images[this.index].src = this.data[this.index].images.downsized.url;
      
      this.images[this.index].addEventListener('load', this.preload);
      
      this.index++;
  }
}
}
