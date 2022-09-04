<template>
    <div class="table">
    <div class="row" v-for=" i in periods" :key="i.id">
      <div class="col">
      <p>{{i.period}}</p>
      </div>
      <div class="col">
      <p>{{i.time}}</p>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Component-Table',
  props: ['periods']
}
</script>
<style >
p{
  font-size: 15px;}
.row{
  display: flex;
      justify-content: center
}
</style>