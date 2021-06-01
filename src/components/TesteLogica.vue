<template>
  <div>
    <div class="list-items">
      <h1>Desafio 1</h1>
      <span v-for="item in data" :key="item.id" v-bind:class="item.value == 'Co' || item.value == 'Blue' ? 'color-blue-light' : item.value == 'CoBlue' ? 'color-blue-dark' : ''">
        {{item.value}}
      </span>
    </div>
    <br />
    <div class="input-case-letters">
      <h1>Desafio 2</h1>
      <input type="text" v-model="letters_change.input" placeholder="Alterar letras entre maiúsculas e minúsculas" />
      <div class="input-case-letters-result">
        {{letters_change.output}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TesteLogica',
  data () {
    return{
      count: 100,
      data: [],
      letters_change:{
        input: '',
        output: ''
      }
    }
  },
  created(){
    this.firstTest()
  },
  methods:{
    firstTest() {
      for (let i = 1; i <= this.count; i++) {
        let value = '';
        // MULTIPLO POR 3 E 5
        if((i % 3 == 0) && (i % 5 == 0)){
          value = 'CoBlue';
        // MULTIPLO POR 3
        }else if((i % 3 == 0)){
          value = 'Co';
        // MULTIPLO POR 5
        }else if((i % 5 == 0)){
          value = 'Blue';
        }else{
          value = i;
        }
        // SAÍDA DOS DADOS
        this.data.push({
          'id': i,
          'value': value
        });
      }
    },
    secondTest(){
      // TRANSFORMAR A ENTRADA DOS DADOS EM ARRAY
      let array = this.letters_change.input.split('');
      // PRIMEIRA LETRA
      this.letters_change.output = this.letters_change.input.charAt(0);
      // PERCORRER ARRAY
      for (var i = 1; i < array.length; i++) {
        // PEGAR A ÚLTIMA LETRA INSERIDA
        var last_letter = this.letters_change.output.charAt(i - 1);
        if(last_letter === last_letter.toLowerCase()){
          // ADICIONAR LETRA MAIUSCULA
          this.letters_change.output = this.letters_change.output + array[i].toUpperCase();
        }else{
          // ADICIONAR LETRA MINUSCULA
          this.letters_change.output = this.letters_change.output + array[i].toLowerCase();
        }
      }
    }
  },
  watch:{
    "letters_change.input": function(newVal, previousVal) {
      this.secondTest();
    }
  }
}
</script>

<style scoped>

.list-items,
.input-case-letters {
  display: block;
  text-align: left;
}

h1 {
  font-size: 20px;
  text-transform: uppercase;
  text-align: left;
}

.list-items span {
  background: #d4d2d2;
  border-radius: 5px;
  text-align: left !important;
  display: inline-block;
  margin-right: 5px;
  padding: 2px 3px;
  width: 55px;
  margin-bottom: 5px;
  font-weight: bold;
}

.list-items span.color-blue-light{background: #009bdb;color: #fff;}

.list-items span.color-blue-dark{background: #0f2943;color: #fff;}

input{
  border: 1px solid #c5c5c5;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 5px;
}
</style>
