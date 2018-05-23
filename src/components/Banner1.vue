<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

            <div id="banner" class="banner editable">
                <div class="portada">
                    <div class="contenido">
                            <div class="logo">
                                <img src="static/logo04.png" alt="" class="logotipo">
                            </div>
                            <h1 class="titulo">{{ titulo }}</h1>
                            <p class="resumen">{{ resumen }}</p>
                    </div>
                </div>
                    
                <div class="correo">
                    <p class="correotext">{{correoText}}</p>
                </div>
                <div class="membrete">
                    <p class="fecha">{{fecha}}</p>
                    <p class="nombre">{{nombre}}</p>
                </div>
            </div>

        </div>
    </div>


    <div class="rightContent">
        <div class="franjaColor">
            <div class="bloqueColor color1"></div>
            <div class="bloqueColor color2"></div>
            <div class="bloqueColor color3"></div>
            <div class="bloqueColor color4"></div>
            <div class="bloqueColor color5"></div>
        </div>
        <div class="sidebar">
            <h1 style="color:#42020c">Editar contenido</h1>

            <br><br>

            <input class="textInputs" type="text" v-model="titulo" id="titulo"><br><br>

            <textarea class="textInputs textArea" rows="4" cols="80">{{resumen}}</textarea>
            
            <input class="textInputs" type="text" v-model="correoText" id="correoText"><br><br>
            <input class="textInputs" type="textarea" v-model="fecha" id="fecha"><br><br>

            <input class="textInputs" type="text" v-model="nombre" id="nombre"><br><br>

            <label for="fondo">Imagen de fondo:</label>
            <input id="fondo" type='file' v-on:change="readURL" />


            <!--<router-link to="/">Cancelar</router-link>-->
            <button id="calcelar" @click="volver">Cancelar</button>
            <button id="capture" @click="capture">Listo</button>
        </div>
    </div>

</div>

</template>

<script>

import domtoimage from 'dom-to-image';
export default {
  name: 'Banner1',
  data () {
    return {
      titulo: 'Cualquier título',
      resumen: 'TEXTO INFORMATIVO TEXTO INFORMATIVO.TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO',
      correoText: 'INFO@LOBSTERBLUM.IO',
      fecha: 'FECHA:25-05-2018',
      nombre: 'BY: NOMBRE DE PRUEBA'
    }
  },
  methods: {
    capture: function(e){
        var elemento =  document.getElementById("banner");
        elemento.className = "banner";
        this.capture1(elemento);
    },
    capture1: function(elemento){

        //var elemento =  document.getElementById("banner");
        domtoimage.toJpeg(elemento,{quality: 0.95})
        .then(function (dataUrl) {
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
          $('.portada').css('background-image', 'url(' + e.target.result + ')');
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    volver: function(){
        this.$router.push("/");
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.textInputs{
    margin-top: 20px;
    height: 30px;
    width: 80%;
    margin: auto;

    border: 5px solid white;
    padding: 5px; 
    box-shadow: 5px 10px rgba(224, 221, 213, 0.3);
}

.textArea{
    height: 150px;
}

.cajaBanner{
    position:relative;
    top: 20%;
    margin: auto;
    height: 300px;
    width: 800px;
}

.bloqueColor{
    position: relative;
    height: 20%;
    width: inherit;
}

.color1{ background-color: #edbc1c }
.color2{ background-color: #c64b11 }
.color3{ background-color: #c10723 }
.color4{ background-color: #87091c }
.color5{ background-color: #42020c }

.franjaColor{
    position: relative;
    float: left;
    height: inherit;
    width: 5px;
    background-color: red;
}

.all{
    position:absolute;
    height: 100%;
    width: 100%;
}

.leftContent{
    float:left;
    position: relative;
    height: inherit;
    width: 70%;
    overflow: auto;
    background-color: #3d3f42;
}

.rightContent{
    float: left;
    position: relative;
    padding: 0;
    height: inherit;
    width: 30%;
    overflow: auto;
    background-color: rgb(247,247,247);
}

.sidebar{
    padding-left: 20px;
    padding-top: 20px;
}

.logo_header{
    position: relative;
    top: 35px;
    left: 35px;
    display: block;
    height: 80px;
    width: auto;
}

.banner {
    position: absolute;
    height: 1000px;
    width: 2000px;
    font-family: Montserrat,sans-serif;
    letter-spacing: 15px;
    transition: .3s ease-in;
}

.editable {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(.35);
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
    width: 347px;
    margin-top: 30px;
}
.logo .logotipo{
    width: 251px;

}
</style>
