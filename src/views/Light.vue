<template>
  <div class="container">
    <TrafficLights class="light" color="red" :currentColor="currentColor" :timing="counter"/>
    <TrafficLights class="light" color="yellow" :currentColor="currentColor" />
    <TrafficLights class="light" color="green" :currentColor="currentColor" :timing="counter"/>
  </div>
</template>
<script>
import TrafficLights from '@/components/TrafficLights.vue'

export default {
  name: 'Light',
  props: ['currentColor', 'time'],
  components: {
    TrafficLights,
  },
  data() {
    return {
      counter: null,
      interval: null,
    };
  },
  computed: {
    whichNextColor(){
      this.$store.commit('setNextColor', this.currentColor);
      return this.$store.state.nextColor;
    },
  },
  watch: {
    $route(to, from) {
      this.setTimer();
    },
  },
  mounted() {
    this.setTimer();
  },
    methods: {
     setTimer() {
      const timer = this.time;

      setTimeout(() => { this.$router.push(this.whichNextColor); }, timer);

      this.counter = this.time / 1000;

      if (this.interval) clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.counter -= 1;
      }, 1000);

    } 
    },
  
  
}

</script>

<style>
  .container {
    border: 5px solid rgb(48, 46, 46);
    border-radius: 1.5px;
    width: 100px;
    margin: 40px auto;
    padding: 10px;
    background-color: rgb(0, 0, 0);
  }
  .light {
    width: 80px;
    height: 80px;
    margin: 10px auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }
</style>
