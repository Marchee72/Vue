<template>
  <v-toolbar dark color="success" prominent extended>
    <v-toolbar-title class="flex display-3 font-weight-thin">Symlite</v-toolbar-title>

    <v-btn flat slot="extension">
      <v-icon>search</v-icon>
      Buscar
    </v-btn>

    <v-btn flat slot="extension">
      <v-icon>apps</v-icon>
      Aplicaciones
    </v-btn>

    <RefreshBtn flat slot="extension"/>

    <v-btn flat slot="extension">
      <v-icon>more_vert</v-icon>
      Mas
    </v-btn>

    <v-btn flat slot="extension">
      <v-icon>build</v-icon>
      Herramientas
    </v-btn>

      <v-spacer slot="extension"></v-spacer>
      <v-select
        slot="extension"
        :items="getData()"
        solo
        v-model="value"
        label="Opciones"
      ></v-select>

    <v-spacer></v-spacer>

    
    <v-avatar
       color="red">
      <span class="white--text headline">L</span>
    </v-avatar>
    <v-chip
      v-model="chip4"
      color="white"
      label
      outline
    >Lautaro</v-chip>
  </v-toolbar>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import RefreshBtn from '@/components/RefreshBtn.vue';

@Component({
  components: {
    RefreshBtn
  }
})
export default class Toolbar extends Vue {

 @Prop() search!: false;

  public getData() {
    return ['Foo', 'Bar', 'Fizz', 'Buzz'];
  }
  
}

</script>


