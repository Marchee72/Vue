<template>
    <div>
        <h1 class="text-md-center flex display-4 font-weight-thin">PLP's</h1>
        <v-tabs
            slot="extension"
            v-model="tab"
            grow>
            <v-tabs-slider color="green"></v-tabs-slider>

            <v-tab
            v-for="tabs in getTabs()"
            :key="tabs">
            {{ tabs }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in getTabs()"
        :key="item"
      >
        <Table v-bind:filter='item'/>
      </v-tab-item>
    </v-tabs-items>

      
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Table from './Table.vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
    components: {
        Table}})

export default class Nav extends Vue {

    tab = null;

    public getTabs(){
        return ["Pre-processing", "Declined", "Near-deadline", "Unacepted", "Unassigned"];
    }


}
</script>