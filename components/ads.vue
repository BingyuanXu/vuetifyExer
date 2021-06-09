<template>
  <div>
    <div id="thediv" ref="thediv" @mouseover="clearFdAd" @mouseout="starFdAd">
      Ads
    </div>
  </div>
</template>

<style>
#thediv {
  z-index: 100;
  position: absolute;
  top: 43px;
  left: 2px;
  height: 100px;
  width: 100px;
  background-color: rgb(0, 255, 247);
}
</style>

<script>
var interval;
export default {
  data() {
    return {
      xPos: 300,
      yPos: 200,
      step: 1,
      delay: 8,
      height: 0,
      Hoffset: 0,
      Woffset: 0,
      yon: 0,
      xon: 0,
      pause: true
    };
  },

  mounted() {
    interval = setInterval(this.changePos, 10);
  },
  methods: {
    changePos() {
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;
      this.Hoffset = this.$refs.thediv.offsetHeight;
      this.Woffset = this.$refs.thediv.offsetWidth;
      this.$refs.thediv.style.left =
        this.xPos +
        document.body.scrollLeft +
        document.documentElement.scrollLeft +
        "px";
      this.$refs.thediv.style.top =
        this.yPos +
        document.body.scrollTop +
        document.documentElement.scrollTop +
        "px";
      if (this.yon) {
        this.yPos = this.yPos + this.step;
      } else {
        this.yPos = this.yPos - this.step;
      }
      if (this.yPos < 0) {
        this.yon = 1;
        this.yPos = 0;
      }
      if (this.yPos >= height - this.Hoffset) {
        this.yon = 0;
        this.yPos = height - this.Hoffset;
      }
      if (this.xon) {
        this.xPos = this.xPos + this.step;
      } else {
        this.xPos = this.xPos - this.step;
      }
      if (this.xPos < 0) {
        this.xon = 1;
        this.xPos = 0;
      }
      if (this.xPos >= width - this.Woffset) {
        this.xon = 0;
        this.xPos = width - this.Woffset;
      }
    },
    clearFdAd() {
      clearInterval(interval);
    },
    starFdAd() {
      interval = setInterval(this.changePos, 10);
    }
  }
};
</script>
