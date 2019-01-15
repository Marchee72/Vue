<template>
    <div>
        <v-btn
        :disabled="dialog"
        :loading="dialog"
        class="white--text"
        flat
      @click="dialog = true">
            <v-icon>refresh</v-icon>
            Actualizar
        </v-btn>
        <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
        green
        >
            <v-card
                color="primary"
                dark
            >
                <v-card-text>
                    Por favor espere
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';


@Component
export default class RefreshBtn extends Vue {
    dialog: boolean = false;

    @Watch('dialog')
    watchDialog(){
        setTimeout(() => (this.dialog = false), 4000);
    }
}

</script>
