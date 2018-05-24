<template>
<div class="all">
    <div class="leftContent">
        <div class="header"><img class="logo_header" src="static/logo04.png" alt=""></div>
        <div class="cajaBanner">

       <div class="banner editable" id="banner">
                <div class="logo"><img src="static/logo04.png" alt="" class="logotipo"></div>
            <div class="contenido">
                <h1 class="titulo">{{titulo0}}</h1> 
                <p class="fecha">{{fecha}}</p>
            </div>
                <h1 class="titulo1">{{titulo1}}!</h1>
                <h1 class="titulo2">{{titulo2}}</h1>
                <div class="precio1">
                    <p class="pPrecio">{{linea1}}</p>
                    <p class="pPrecio">{{linea2}}</p>
                    <p class="pPrecio">{{linea3}}</p>
                </div>
                <div class="precio2">
                        <p class="pPrecio">{{linea4}}</p>
                        <p class="pPrecio">{{linea5}}</p>
                        <p class="pPrecio">{{linea6}}</p>
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


            <input class="textInputs" type="text" v-model="titulo0" id="titulo0"><br><br>

            <input class="textInputs" type="textarea" v-model="fecha" id="fecha"><br><br>

            <input class="textInputs" type="text" v-model="titulo1" id="titulo1"><br><br>
            <input class="textInputs" type="text" v-model="titulo2" id="titulo2"><br><br>
            
            <input class="textInputs" type="text" v-model="linea1" id="linea1"><br><br>
            <input class="textInputs" type="text" v-model="linea2" id="linea2"><br><br>
            <input class="textInputs" type="text" v-model="linea3" id="linea3"><br><br>
            <input class="textInputs" type="text" v-model="linea4" id="linea4"><br><br>
            <input class="textInputs" type="text" v-model="linea5" id="linea5"><br><br>
            <input class="textInputs" type="text" v-model="linea6" id="linea6"><br><br>

            

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
  name: 'Banner4',
  data () {
    return {
      titulo0: 'titulo 0',
      fecha: 'FECHA:25-05-2018',
      titulo1: 'titulo 1',
      titulo2: 'titulo 2',
      linea1: 'linea n',
      linea2: 'linea n',
      linea3: 'linea n',
      linea4: 'linea n',
      linea5: 'linea n',
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
    volver: function(){
        this.$router.push("/");
    }
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

/*--------------------------------------*/
        .banner{
            background: linear-gradient(to right, #c70039 , #ff5733);
            height: 1000px;
            width: 2000px; 
        }
        .titulo{
            position: relative;
            color: white;
            margin-left: 130px;
            font-size: 110px;
            padding-top: 95px;
        }
        .fecha{
            position: relative;
            color: white;
            margin-left: 154px;
            margin-top: -77px;
            font-size: 30px;
        }
        .logo{
            margin-top: 35px;
            position: relative;
            float: right;
            width: 347px;
           
        }
        .logo .logotipo{
            width: 251px;

        }
        .titulo1{
            color: white;
            position: relative;
            font-size: 65px;
            margin-left: 225px;
            padding-top: 61px;
        }
        .titulo2{
            color: white;
            position: relative;
            font-size: 35px;
            margin-left: 460px;

      
        }
        .precio1 {
            border-style: solid;
            border-radius: 16px;
            height: 121px;
            width: 437px;
            border-color: white;
            color: white;
            font-size: 31px;
            padding: 142px;
            padding-top: 35px;
            margin-left: 220px;
            margin-top: 71px;
            font-weight: 800;
        }
        .pPrecio{
            margin-left: -40px;
            width: 900px;
        }
        .precio2 {
            border-style: solid;
            border-radius: 16px;
            height: 99px;
            width: 374px;
            border-color: white;
            color: white;
            font-size: 31px;
            padding: 167px;
            padding-top: 35px;
            margin-left: 1033px;
            margin-top: -312px;
            font-weight: 800;
        }
</style>
