<template>
  <v-app>
    <v-content>
      <HelloWorld/>
      <Toolbar/>
      <TimePicker/>
      <br>
      
      <Nav/>
    
    </v-content>
  </v-app>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Toolbar from './components/Toolbar.vue';
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue'
import Table from './components/Table.vue'
import TimePicker from './components/TimePicker.vue'


@Component({
  components: {
    Toolbar,
    Nav,
    Table,
    TimePicker,
  },
})
export default class App extends Vue {}
</script>
