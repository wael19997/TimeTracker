<template>
  <header>
    <div class="table">
    <div class="row" v-for=" i in periods" :key="i.id">
      <div class="col">
      {{i.period}}
      </div>
      <div class="col">
      {{i.time}}
      </div>
    </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Component-Table',
  props: ['periods']
}
</script>
<style >
.row{
      justify-content: center
}
</style>