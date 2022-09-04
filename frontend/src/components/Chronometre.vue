<template>
 
   <div class="Chronometre">
   
    <div class="Time">
             <Date/>
    <div class="buttons">
        
        <div class="Bstart">
      <button type="button" class="btn btn-outline-success" @click="start">Start new</button>
      </div>
      <div class="Bstop">
      <button type="button"  class="btn btn-outline-danger" @click="stop">Stop</button>
        </div>
      </div>
      <div class="chronometer">
       
        <h3>{{hh}}:{{ mm}}:{{ss}}</h3>
      </div>
      
       
    </div>
    <div class="tb">
    <Table :periods="periods" :TimeSum="TimeSum" :running="running" :ss="ss" :mm="mm" :hh="hh"/>
    </div>
   </div>

</template>
<script>
import Table from './Table.vue'
import Date from './Date.vue'
// import axios from 'axios'
export default {
  name: 'Component-Chronometre',
  props:['start','stop','periods','interval','ss','mm','hh','TimeSum','running'],
   components:{
    Table,
    Date

  }
}

</script>
<style >
.Time{    display: flex;
    justify-content: space-evenly;}
.buttons{
    display: flex;
}
.Bstop{
    margin-left: 10px;
}  

</style>