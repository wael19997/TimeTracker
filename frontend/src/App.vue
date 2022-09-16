<template>
<p>fbbfbf</p>
 <div class="row">
 </div>
  <Chronometre :TimeSum="TimeSum" :start="start" :stop="stop" :periods="periods" :hh="hh" :mm="mm" :ss="ss" :interval="interval" :running="running"/>
</template>

<script>


import  Chronometre from './components/Chronometre.vue'
 import axios from 'axios'
  function sumTime(sec){
        var h=Math.floor(sec/3600)
        var m=Math.floor((sec-(h*3600))/60)
        var s=sec-(h*3600+m*60)
        return `${h}:${m}:${s}`
  }
   function transformetime(time){
    const separator=':'
     var sec = 0
     const list=time.split(separator);
     sec+=(parseInt(list[0])*3600+parseInt(list[1])*60+parseInt(list[2]))
     return sec
  }



export default {
  name: 'App',
  components: {
    Chronometre,
  },
  data()
  {return{
        periods:[],
        interval:null,
         ss: 0,
         mm: 0,
         hh: 0,
         TimeSum:'00:00:00',
         running:false
       
  }
  },
    async mounted(){
     
     await axios.get("http://localhost:3333/time")
      .then(response => {console.log(response.data);
        this.periods=response.data.reverse()})
        var sec=0
        this.periods.map(j=>{
        sec+=transformetime(j.time)
        })
        this.TimeSum=sumTime(sec)
},
  methods:{
     start(){
       var somme=transformetime(this.TimeSum)
       this.running=true
        this.interval=setInterval(()=>{
            this.ss++
            this.TimeSum=sumTime(somme+this.ss)

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
    this.running=false
    clearInterval(this.interval);
    const currentPeriod={period:"period"+Number(this.periods.length+1) , time:this. hh+':'+this. mm+':'+this.ss}
    axios.post("http://localhost:3333/time",currentPeriod)
    this.periods.unshift(currentPeriod)
    this.ss= 0
    this. mm= 0
    this. hh= 0
    
   }
   
  },
  }
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
