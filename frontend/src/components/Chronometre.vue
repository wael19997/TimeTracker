<template>
  <header>
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
       
        <p>{{hh}}:{{ mm}}:{{ss}}</p>
      </div>
      
       
    </div>
    <div class="tb">
    <Table :periods="periods"/>
    </div>
   </div>
  </header>
</template>
<script>
import Table from './Table.vue'
import Date from './Date.vue'
// import axios from 'axios'
export default {
  name: 'Component-Chronometre',
  props:['start','stop','periods','interval','ss','mm','hh'],
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