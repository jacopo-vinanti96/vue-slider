const img1 = 'img/img1.png',
      img2 = 'img/img2.png';

const app = new Vue ({
  el: '#root',
  data: {
    title: 'Big title!',
    custClass: 'blue',
    image: img1
  },
  methods: {
    enterFunc: function () {
      this.image = img2;
    },
    leaveFunc: function () {
      this.image = img1;
    }
  }

})
