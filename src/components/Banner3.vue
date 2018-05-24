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
                            <p class="resumen">{{linea1}}</p>
                            <p class="resumen">{{linea2}}</p>
                            <p class="resumen">{{linea3}}</p>
                            <p class="resumen">{{linea4}}</p>
                            <p class="resumen">{{linea5}}</p>
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
            <h1 class="tituloEdicion" style="color:#42020c">Editar contenido</h1>

            <input class="textInputs" type="text" v-model="titulo" id="titulo"><br><br>
            
            <input class="textInputs" type="text" v-model="linea1" id="linea1"><br><br>
            <input class="textInputs" type="text" v-model="linea2" id="linea2"><br><br>
            <input class="textInputs" type="text" v-model="linea3" id="linea3"><br><br>
            <input class="textInputs" type="text" v-model="linea4" id="linea4"><br><br>
            <input class="textInputs" type="text" v-model="linea5" id="linea5"><br><br>
            
            <input class="textInputs" type="text" v-model="correoText" id="correoText"><br><br>
            <input class="textInputs" type="textarea" v-model="fecha" id="fecha"><br><br>

            <input class="textInputs" type="text" v-model="nombre" id="nombre"><br><br>

            <div class="file">
            <label class="file-label">
                <input class="file-input" type="file" name="resume" v-on:change="readURL">
                <span class="file-cta">
                <span class="file-icon">
                    <i class="fa fa-pencil"></i>
                </span>
                <span class="file-label">
                </span>
                </span>
            </label>
            </div>          
            <img id="muestra" src="" alt="">
            

            <div class="botonera">
                <button id="calcelar" @click="volver">Cancelar</button>
                <button id="capture" @click="capture">Listo</button>
                <button id="termine" @click="volver">Terminé</button>
            </div>
        </div>
    </div>

</div>

</template>

<script>

import domtoimage from 'dom-to-image';
export default {
  name: 'Banner3',
  data () {
    return {
      titulo: 'Cualquier título',
      resumen: 'TEXTO INFORMATIVO TEXTO INFORMATIVO.TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO',
      correoText: 'INFO@LOBSTERBLUM.IO',
      linea1: 'linea n',
      linea2: 'linea n',
      linea3: 'linea n',
      linea4: 'linea n',
      linea5: 'linea n',
      fecha: 'FECHA:25-05-2018',
      nombre: 'BY: NOMBRE DE PRUEBA'
    }
  },
  methods: {
    capture: function(elemento){
        var elemento =  document.getElementById("banner");
        elemento.className = "banner";
        domtoimage.toJpeg(elemento,{quality: 0.95})
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'banner.jpeg';
                link.href = dataUrl;
                link.click();
            }).then(function(){
                elemento.className = "banner editable";
            });
    },
    readURL: function(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $('.portada').css('background-image', 'url(' + e.target.result + ')');
          document.getElementById('muestra').setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    volver: function(){
        this.$router.push("/");
    }

  },
  mounted(){
      document.getElementById('muestra').setAttribute('src', 'static/gente.jpg');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#muestra{
    position: relative;
    height: 100px;
    width: auto;
}

.botonera{
    position:absolute;
    height: 60px;
    width: 100%;
    background-color: rgb(247,247,247);
    bottom: 0;
}

.botonera > button {
    display: inline-block;
    height: 35px;
    width: 100px;
    margin-left: 15px;
    margin-top: 15px;
    border: none;
    background: linear-gradient(to right,#f97631, #f9c431);
    color: white;
    font-weight: 600;
    transition: transform 0.2s;
}
.botonera > button:hover {
    transform: scale(1.2);
}


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
    background-color: rgb(247,247,247);
}

.sidebar{
    margin: auto;
    padding-left: 20px;
    padding-top: 20px;
    overflow-y: auto;
    overflow-x: hidden;
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
    /*transition: .3s ease-in;*/
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

    z-index: 99999;
}
.resumen{
    color:white;
    margin-left: 110px;
    font-size: 38px;
    text-align: left;
    margin-top: 5px;
    max-width: 1600px;

    z-index: 99999;
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
    z-index: 99999;
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
    margin-left: 110px;
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

    z-index: 99999;
}
.logo .logotipo{
    width: 251px;

}
</style>
