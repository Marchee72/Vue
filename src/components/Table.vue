
<template>
  <v-card>
    <v-card-title>
      Quick Project's Dashboard
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="getFilterContent()"
      :dark="true"
      :search="search">
<template slot="items" slot-scope="props">
  <tr :active="props.selected" @click="props.selected = !props.selected">
    <td>
      <v-checkbox
        primary
        hide-details
        :input-value="props.selected"
      ></v-checkbox>
    </td>
    <td>{{ props.item.nombre }}</td>
    <td class="text-xs-left">{{ props.item.apellido }}</td>
    <td class="text-xs-left">{{ props.item.edad }}</td>
    <td class="text-xs-left">{{ props.item.oficina }}</td>
    <td class="text-xs-left">{{ props.item.estado }}</td>
  </tr>
</template>

      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
      
    </v-data-table>

  </v-card>
</template>

<script lang="ts">

import PLP from '../models/PLP';
import Headers from '../models/Headers'
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class Table extends Vue {

@Prop() filter!: string;

headers: Array<Headers> = [
  new Headers("Seleccionar", ""),
  new Headers("Nombre", "nombre"),
  new Headers("Apellido", "apellido"),
  new Headers("Edad", "edad"),
  new Headers("Oficina", "oficina"),
  new Headers("Estado", "estado")

];

search: string = " ";


content: Array<PLP> = [new PLP("Josue", "Palomeque", 34, "Columbia","PRE-PROCESSING"),
  new PLP("Juan", "Peron", 41, "Srhek","DECLINED"),
  new PLP("Esteban", "Alvarez", 88, "Shrek","PRE-PROCESSING"),
  new PLP("Pajaro", "Canteros", 52, "Columbia","NEAR-DEADLINE"),
  new PLP("Esteban", "Quito", 88, "Shrek","PRE-PROCESSING"),
  new PLP("Jorge", "Query", 5, "Columbia","PRE-PROCESSING")
  ];

  private getFilterContent() : Array<PLP> {
    if (this.filter) 
    return this.content.filter(
      c => c.estado.toLowerCase() == this.filter.toLowerCase()
    )
    else return this.content;
  }
   

}
</script>