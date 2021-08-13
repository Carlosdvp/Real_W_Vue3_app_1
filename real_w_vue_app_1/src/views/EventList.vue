<template>
  <h1>The events</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>

// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import axios from 'axios'

export default {
  name: "Home",
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    //get events from database
    axios.get('my-json-server.typicode.com/Carlosdvp/Real_W_Vue3_app_1/real_w_vue_app_1/data/events')
      .then(res => {
        this.events = res.data
      })
      .catch(error => {
        console.log(error)
      })
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events'