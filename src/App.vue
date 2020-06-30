<template>
  <div id="app">
    <main>
      <div class="weather-container">
        <div class="location-box">
          <div class="location">{{ INFO.name }}</div>
          <div class="time">today</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(INFO.main.temp) - 273 }}°c</div>
          <div class="weather">{{ INFO.weather[0].main }}</div>
        </div>

        <div class="subWeather-box">
          <div class="speed-wind">speed-wind: {{ INFO.wind.speed }}</div>
          <div class="humidity">humidity: {{ INFO.main.humidity }}</div>
          <div class="pressure">pressure: {{ INFO.main.pressure }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["INFO"])
  },
  methods: {
    ...mapActions(["GET_INFO_FROM_API"])
  },
  mounted() {
    this.GET_INFO_FROM_API();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.weather-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: sans-serif;
  text-align: center;
  color: white;
  width: 360px;
  border-radius: 16px 0px 16px 0px;
  min-height: 240px;
  margin-top: 100px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0.75)
    ),
    url("./assets/city.jpg");
}

.location {
  margin-top: 15px;
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.time {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
}
.location,
.temp {
  margin-bottom: 10px;
}
.temp {
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather {
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.subWeather-box {
  display: flex;
  justify-content: space-around;
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  font-style: italic;
  margin: 20px;
}
</style>
