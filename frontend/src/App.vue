<template>

 
  <Chronometre :start="start" :stop="stop" :periods="periods" :hh="hh" :mm="mm" :ss="ss" :interval="interval"/>
  
</template>

<script>


import  Chronometre from './components/Chronometre.vue'
 import axios from 'axios'

export default {
  name: 'App',
  components: {
    Chronometre,
  },
  data()
  {return{
        periods:[],
        interval:null,
         ss: parseInt('00',8),
         mm: parseInt('00',8),
         hh: parseInt('00',8)
       
  }
  },
    mounted(){
      axios.get("http://localhost:3000/time")
      .then(response => {console.log(response.data);
        this.periods=response.data})
},
  methods:{
     start(){
        this.interval=setInterval(()=>{
            this.ss++
        if (this.ss===59){
            this.mm++;
            this.ss=0      
        }
        if(this.mm===59){
            this.hh++;
            this.mm=0   
        }
        },1000) 
},
   stop(){
   
    clearInterval(this.interval);
    const currentPeriod={period:"period"+Number(this.periods.length+1) , time:this. hh+':'+this. mm+':'+this.ss}
    this.periods.push(currentPeriod)
    this.ss= parseInt('00',8)
    this. mm= parseInt('00',8)
    this. hh= parseInt('00',8)
    axios.post("http://localhost:3000/time",currentPeriod)
   }
   
  }}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
 size: 100px;
}
</style>
