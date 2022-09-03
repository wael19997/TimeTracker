<template>
  <div class="Date">
    <h1 class="green">{{ currentDate() }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Component-Date',
   methods: {
    currentDate() {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      const current = new Date();
      const nom=month[current.getMonth()+1]
      const date = `Today,${current.getDate()} ${nom}`;
      return date;
    }
  }
}
</script>

