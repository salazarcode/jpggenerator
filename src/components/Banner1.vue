<template>
    <div class="banner">
        <div class="portada">
            <div class="contenido">
                    <div class="logo"></div>
                    <h1 class="titulo">TITULO</h1>
                    <p class="resumen">TEXTO INFORMATIVO TEXTO INFORMATIVO.
                            TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO 
                            TEXTO 
                            INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO 
            </p>
            </div>
        </div>
            
        <div class="correo">
            <p class="correotext">INFO@LOBSTERBLUM.IO</p>
        </div>
        <div class="membrete">
            <p class="fecha">FECHA:25-05-2018</p>
            <p class="nombre">BY: NOMBRE DE PRUEBA</p>
            <button id="capture" v-on:click="capture">Capture</button>
            <input type='file' v-on:change="readURL" />
            <img id="blah" src="#" alt="your image" />
        </div>
    </div>
</template>

<script>
import domtoimage from 'dom-to-image';

export default {
  name: 'Banner1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    capture: function(event){
      var elemento = document.getElementsByClassName("banner")[0];
      domtoimage.toJpeg(elemento, { quality: 0.95 })
        .then(function (dataUrl) {
            alert("Error con ejecución");
            var link = document.createElement('a');
            link.download = 'banner.jpeg';
            link.href = dataUrl;
            link.click();
        });
    },
    readURL: function(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('.portada')
            .css('background-image', 'url(' + e.target.result + ')');
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
    height: 1000px;
    width: 2000px;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 15px;
}
.portada {
    background-image: url("../assets/gente.jpg");
    background-size: cover; 
    background-repeat: no-repeat;
    position: relative;
    width: 2000px;
    height: 800px;

  
}
.titulo{
    position: relative;
    color: white;
    margin-left: 110px;
    margin-top: 65px;
    font-size: 80px;
    padding-top: 195px;
}
.resumen{
    color:white;
    margin-left: 110px;
    font-size: 38px;
    text-align: left;
    margin-top: 185px;
    max-width: 1600px;
}

.portada::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    background: linear-gradient(to right, #c70039 , #ff5733);
    opacity: 0.8;
}
.portada{
  position: relative;
}

.contenido  {
    position: relative;
    z-index: 9999999999999999999999999999999;
}
.correo{
    position: absolute;
    background: white;
    width: 1000px;
    height: 200px;
    text-align: center;
}
.correotext{
    font-size: 29px;
    font-weight: 800;
    color: #333333;
    margin-right: 471px;
    margin-top: 86px;
}
.membrete{
    position: relative;
    background: #333333;
    color: white;
    width: 1000px;
    height: 200px;
    box-sizing: border-box;
    float: right;
}
.fecha {
    margin-top: 55px;
    margin-left: 440px;
    font-weight: 400;
    font-size: 25px;
}
.nombre {
    margin-top: -11px;
    margin-left: 288px;
    font-weight: 400;
    font-size: 25px;
}
.logo{
    position: relative;
    float: right;
    width: 251;
    height: 251;
    margin-top: 30px;
    z-index: 99999;

    background-image: url("../assets/logo04.png");
    background-size: contain; 
    background-repeat: no-repeat;
}
</style>
