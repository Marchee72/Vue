<template>
  <div>
      <v-flex xs4 sm2>
        <v-menu
          ref="menuDate"
          :close-on-content-click="false"
          v-model="menuDate"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          max-width="290px"
          min-width="290px">
       <v-text-field
            slot="activator"
            v-model="dateFormatted"
            label="Date"
            hint="MM/DD/YYYY format"
            persistent-hint
            prepend-icon="event"
            @blur = "date = parseDate(dateFormatted)"
          ></v-text-field>
          <v-date-picker dark v-model="date" no-title @input="menuDate = false"></v-date-picker>
        </v-menu>
      </v-flex>

    <v-flex xs4 sm2>
        <v-menu
          ref="menuTime"
          :close-on-content-click="false"
          v-model="menuTime"
          :nudge-right="40"
          offset-y
          full-width
          max-width="290px"
          min-width="290px">
       <v-text-field
            slot="activator"
            v-model="timeFormatted"
            label="Time"
            hint="HH:MM format"
            prepend-icon="access_time"
          ></v-text-field>
        <v-time-picker dark v-model="time" no-title @input="menuTime = false" format="24hr"></v-time-picker>
        </v-menu>
      </v-flex>

  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component
export default class TimePicker extends Vue{
    date: string = new Date().toISOString().substr(0, 10);
    dateFormatted: string | null = this.formatDate(new Date().toISOString().substr(0, 10));
    menuDate: boolean = false;

    time: string = new Date().toTimeString();
    timeFormatted: string | null = this.formatTime(new Date().toTimeString());
    menuTime: boolean = false;

    private formatDate (date: string) {
        if (!date) return null
        const [year, month, day] = date.split('-');        
        let newdate = `${month}/${day}/${year}`;
        this.dateFormatted = newdate;
        return newdate;
    }

    private formatTime (time: string) {
        if (!time) return null
        const [hours, minutes] = time.split(':');        
        let newTime = `${hours}:${minutes}`;
        this.timeFormatted = newTime;
        return newTime;
    }

    private parseDate (date: string) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }

    private parseTime(time: string){
        if (!time) return null;
        const [hour, minutes, seconds] = time.split(':');
        let newTime = `${hour}:${minutes}`;
        this.time = newTime;
        return newTime;
    }

    @Watch('date')
    dateWatching(){
        this.dateFormatted = this.formatDate(this.date)
    }

    @Watch('time')
    timeWatching(){
        this.timeFormatted = this.formatTime(this.time)
    }
}
</script>
