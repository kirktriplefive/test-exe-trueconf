<template>
  <div :class="selectClass">
      <div class="counter" v-if="Lighting">
          {{timing}}
      </div>
  </div>
</template>

<script>
export default {
  name: "TrafficLights",
  props: ["color", "currentColor", "timing"],
  computed: {
      Lighting: function () {
          return this.color === this.currentColor;
      },
      selectClass: function () {
          return `
          light_${this.color}
          ${this.Lighting ? 'light_on' : ''}
          ${this.Lighting && this.timing < 3 && this.color!="yellow" ? 'light_blink' : '' }`;

      },
  },
};
</script>

<style>
@keyframes blink-animation {
  to {
    opacity: 0.3;
  }
}
.light_red {
  background-color: rgb(235, 13, 13);
  color: rgb(0, 0, 0);
  opacity: 0.2;
}
.light_green {
  background-color: rgb(11, 245, 23);
  color: rgb(0, 0, 0);
  opacity: 0.2;
}
.light_yellow {
  background-color: rgb(255, 230, 5);
  color: rgb(3, 3, 3);
  opacity: 0.2;
}
.light_on {
    opacity: 1;
  }
  .counter {
    width: 25px;
    height: 25px;
    font-size: 1.5em;
    text-align: center;
    align-self: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  .light_blink {
    animation: blink-animation 0.5s steps(10, start) infinite;
  }
</style>
