<script>
module.exports = {
  props: ['classname', 'url','model', 'value', 'fk', 'depend_value', 'init', 'selected'],
  data: function(){
    return {
      name: '',
      id: '',
      _url: '',
      options: []
    }
  },
  methods: {
    getData: function(){
      axios
        .get(this._url)
        .then(response => {
          this.options = response.data
        })
    },
    checkSelected(val){
      return this.selected == val
    },
    getUrl: function(){
      if(!this.fk && this.depend_value){
        this._url = this.url + this.depend_value
      } else if(this.fk){
        this._url = this.url + this.fk
      } else {
        this._url = this.url
      }
    }
  },
  mounted: function(){
    this.name = this.model + '_id'
    this.id = 'input-' + this.name
    this.getUrl()
    this.getData()
  },
  watch: {
    fk: function(){
      this.getData()
    }
  }
}
</script>
<template>
  <select class="form-control" :name="name" :id="id"
    v-bind:value="this.value"
    v-on:input="$emit('input', $event.target.value)">
    <option v-if="init" value="">{{ this.init }}</option>
    <option :selected="checkSelected(option.id)" :value="option.id" v-for="option in options">
      {{ option.name }}
    </option>
  </select>
</template>
