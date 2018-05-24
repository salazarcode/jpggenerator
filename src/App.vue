<template>
  <div id="app">
    <div class="franjaColor">
        <div class="bloqueColor color1"></div>
        <div class="bloqueColor color2"></div>
        <div class="bloqueColor color3"></div>
        <div class="bloqueColor color4"></div>
        <div class="bloqueColor color5"></div>
    </div>

    <div class="logo"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  width: 100%;
}


.franjaColor{
    position: absolute;
    top: 0;
    margin-bottom: 15px;
    height: 5px;
    width: 100%;
}
.bloqueColor{
    position: relative;
    height: inherit;
    float: left;
    width: 20%;
    margin: 0;
    padding:0;
}
.color1{ background-color: #edbc1c }
.color2{ background-color: #c64b11 }
.color3{ background-color: #c10723 }
.color4{ background-color: #87091c }
.color5{ background-color: #42020c }

</style>
