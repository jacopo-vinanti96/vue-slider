const img1 = {
              url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/75/fe/87/photo0jpg.jpg?w=1000&h=600&s=1',
              alt: 'Argentario'
            },
      img2 = {
              url: 'https://www.controradio.it/wp-content/uploads/2020/01/Saturnia.jpg',
              alt: 'Saturnia'
            },
      img3 = {
              url: 'https://irintronauti.altervista.org/wp-content/uploads/2016/07/20160710_144459.jpg',
              alt: 'Cascata del Diborrato'
            },
      img4 = {
              url: 'https://media-cdn.tripadvisor.com/media/photo-c/2560x500/09/67/ef/90/cascata-di-moraduccio.jpg',
              alt: 'Cascata di Moraduccio'
            };

const app = new Vue ({
  el: '#root',
  data: {
    images: [
      img1,
      img2,
      img3,
      img4
    ],
    imgIndex: 0
  },
  methods: {
    prevImg: function () {
      this.imgIndex-- ;
      if ( this.imgIndex < 0 ) {
        this.imgIndex = this.images.length - 1;
      }
    },
    nextImg: function () {
      this.imgIndex++ ;
      if ( this.imgIndex == this.images.length ) {
        this.imgIndex = 0;
      }
    },
    slideMeth() {
      this.imgIndex++ ;
      if ( this.imgIndex == this.images.length ) {
        this.imgIndex = 0;
      }
    },
    slideShow: function () {
        setInterval(function () {
        app.slideMeth();
      }, 5000)
    }
  }

})
