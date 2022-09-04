<template>
    <div class="table">
      <div class="row" v-if=running>
      <div class="col">
      <p>Current period</p>
      </div>
      <div class="col">
      <p>{{hh}}:{{ mm}}:{{ss}}</p>
      </div>
    </div>
    <div class="row" v-for=" i in periods" :key="i.id">
      <div class="col">
      <p>{{i.period}}</p>
      </div>
      <div class="col">
      <p>{{i.time}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
       
        </div>
       <div class="col">
        <p>Total {{TimeSum}}</p>
        </div>
    </div>
    </div>
</template>
<script>

import "bootstrap/dist/css/bootstrap.css"

export default {
  name: 'Component-Table',
  props: ['periods','TimeSum','running','hh','ss','mm']

}
</script>
<style >
p{
  font-size: 20px;}
.row{
  display: flex;
      justify-content: center
}
</style>