<template>
    <v-layout column justify-center align-center>
    <v-layout row wrap>
            <v-flex xs12 md12 lg12>
                <v-select 
                :items="bars"
                v-model="selectedBar"
                single-line
                :hint="`Bar: ${this.selectedBar}`"
                persistent-hint
                class="mb-2"
                transition="slide-x-transition"
                @change="barSelection"
                ></v-select>
            </v-flex>
    </v-layout>

    <v-container>
      <v-progress-linear v-if="selectedBar === 'Progress Bar 1'"
        :background-opacity="opacity"
        :buffer-value="buffer"
        :height="height"
        :value="value"
        color="success"
      ></v-progress-linear>

      <v-progress-linear v-if="selectedBar === 'Progress Bar 2'"
        :background-opacity="opacity"
        :buffer-value="buffer"
        :height="height"
        :value="value"
        color="primary"
      ></v-progress-linear>

      <v-progress-linear v-if="selectedBar === 'Progress Bar 3'"
        :background-opacity="opacity"
        :buffer-value="buffer"
        :height="height"
        :value="value"
        color="warning"
      ></v-progress-linear>
    </v-container>

    <v-layout wrap>
    <v-card
            color="#385F73"
            dark
          >
      <v-flex xs12 md6 lg3>
          <v-btn color="success" dark large @click="submitOne">{{fedButtonOne}}</v-btn>
      </v-flex>
      <v-flex xs12 md6 lg3>
          <v-btn color="primary" dark large @click="submitTwo">{{fedButtonTwo}}</v-btn>
      </v-flex>
      <v-flex xs12 md6 lg3>
          <v-btn color="warning" dark large @click="submitThree">{{fedButtonThree}}</v-btn>
      </v-flex>
      <v-flex xs12 md6 lg3>
        <v-btn color="error" dark large @click="submitFour">{{fedButtonFour}}</v-btn>
      </v-flex>
    </v-card>
    </v-layout>
  </v-layout>
</template>

<script>

export default {
    data () {
     return {
      absolute: false,
      opacity: 0.3,
      buffer: this.fedLimit,
      fixed: false,
      height: 40,
      value: null,
      bars: ['Progress Bar 1', 'Progress Bar 2', 'Progress Bar 3'],
      selectedBar: 'Progress Bar 1'
    }  
    },

    computed: {
        fedLimit(){
            return this.$store.getters['fed/apilimit'];
        },
        fedBars(){
            return this.$store.getters['fed/apibars'];
        },
        fedButtons(){
            return this.$store.getters['fed/apibuttons'];
        },
        fedButtonOne(){
            return this.$store.getters['fed/apibuttonOne'];
        },
        fedButtonTwo(){
            return this.$store.getters['fed/apibuttonTwo'];
        },
        fedButtonThree(){
            return this.$store.getters['fed/apibuttonThree'];
        },
        fedButtonFour(){
            return this.$store.getters['fed/apibuttonFour'];
        }
    },

    watch: {},

    methods: {
        barSelection(){
          console.log(this.selectedBar)
        },
        submitOne(){
          this.value = this.value + this.fedButtonOne;
        },
        submitTwo(){
          this.value = this.value + this.fedButtonTwo;
        },
        submitThree(){
          this.value = this.value + this.fedButtonThree;
        },
        submitFour(){
          this.value = this.value + this.fedButtonFour;
        }
    },

    mounted(){
      this.barSelection();
    },

    created: function(){
        this.$store.dispatch('fed/fetchLimit');
        this.$store.dispatch('fed/fetchBars');
        this.$store.dispatch('fed/fetchButtons');
        this.barSelection();
    }
}
</script>