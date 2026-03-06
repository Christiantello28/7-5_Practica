 
 class carta {
        /**
        * Constructor de la clase carta
        * @param {*} arg1 - el valor de la carta 
        * @param {*} arg2 - la url de la carta
        */
        constructor (arg1, arg2) {
            this.valor=parseFloat(arg1);
            this.url=(arg2);
        }
      }

    //creamos los objetos
    //oros (1-10)
    var carta1 = new carta(1,"img/1oros.png");
    var carta2 = new carta(2,"img/2oros.png");
    var carta3 = new carta(3,"img/3oros.png");
    var carta4 = new carta(4,"img/4oros.png");
    var carta5 = new carta(5,"img/5oros.png");
    var carta6 = new carta(6,"img/6oros.png");
    var carta7 = new carta(7,"img/7oros.png");
    var carta8 = new carta(0.5,"img/sotaoros.png");
    var carta9 = new carta(0.5,"img/caballooros.png");
    var carta10 = new carta(0.5,"img/reyoros.png");
    //copas (11-20)
    var carta11 = new carta(1,"img/1copas.png");
    var carta12 = new carta(2,"img/2copas.png");
    var carta13 = new carta(3,"img/3copas.png");
    var carta14 = new carta(4,"img/4copas.png");
    var carta15 = new carta(5,"img/5copas.png");
    var carta16 = new carta(6,"img/6copas.png");
    var carta17 = new carta(7,"img/7copas.png");
    var carta18 = new carta(0.5,"img/sotacopas.png");
    var carta19 = new carta(0.5,"img/caballocopas.png");
    var carta20 = new carta(0.5,"img/reycopas.png");
    //espadas (21-30)
    var carta21 = new carta(1,"img/1espada.png");
    var carta22 = new carta(2,"img/2espada.png");
    var carta23 = new carta(3,"img/3espada.png");
    var carta24 = new carta(4,"img/4espada.png");
    var carta25 = new carta(5,"img/5espada.png");
    var carta26 = new carta(6,"img/6espada.png");
    var carta27 = new carta(7,"img/7espada.png");
    var carta28 = new carta(0.5,"img/sotaespada.png");
    var carta29 = new carta(0.5,"img/caballoespada.png");
    var carta30 = new carta(0.5,"img/reyespada.png");
    //bastos (31-40)
    var carta31 = new carta(1,"img/1bastos.png");
    var carta32 = new carta(2,"img/2bastos.png");
    var carta33 = new carta(3,"img/3bastos.png");
    var carta34 = new carta(4,"img/4bastos.png");
    var carta35 = new carta(5,"img/5bastos.png");
    var carta36 = new carta(6,"img/6bastos.png");
    var carta37 = new carta(7,"img/7bastos.png");
    var carta38 = new carta(0.5,"img/sotabastos.png");
    var carta39 = new carta(0.5,"img/caballobastos.png");
    var carta40 = new carta(0.5,"img/reybastos.png");

    //creamos los objetos
    //picas (1-10)
    var carta41 = new carta(1,"img/poker/Apicas.png");
    var carta42 = new carta(2,"img/poker/2picas.png");
    var carta43 = new carta(3,"img/poker/3picas.png");
    var carta44 = new carta(4,"img/poker/4picas.png");
    var carta45 = new carta(5,"img/poker/5picas.png");
    var carta46 = new carta(6,"img/poker/6picas.png");
    var carta47 = new carta(7,"img/poker/7picas.png");
    var carta48 = new carta(0.5,"img/poker/jpicas.png");
    var carta49 = new carta(0.5,"img/poker/qpicas.png");
    var carta50 = new carta(0.5,"img/poker/kpicas.png");
    //rombos (11-20)
    var carta51 = new carta(1,"img/poker/Arombos.png");
    var carta52 = new carta(2,"img/poker/2rombos.png");
    var carta53 = new carta(3,"img/poker/3rombos.png");
    var carta54 = new carta(4,"img/poker/4rombos.png");
    var carta55 = new carta(5,"img/poker/5rombos.png");
    var carta56 = new carta(6,"img/poker/6rombos.png");
    var carta57 = new carta(7,"img/poker/7rombos.png");
    var carta58 = new carta(0.5,"img/poker/jrombos.png");
    var carta59 = new carta(0.5,"img/poker/qrombos.png");
    var carta60 = new carta(0.5,"img/poker/krombos.png");
    //espadas (21-30)
    var carta61 = new carta(1,"img/poker/Atrebol.png");
    var carta62 = new carta(2,"img/poker/2trebol.png");
    var carta63 = new carta(3,"img/poker/3trebol.png");
    var carta64 = new carta(4,"img/poker/4trebol.png");
    var carta65 = new carta(5,"img/poker/5trebol.png");
    var carta66 = new carta(6,"img/poker/6trebol.png");
    var carta67 = new carta(7,"img/poker/7trebol.png");
    var carta68 = new carta(0.5,"img/poker/jtrebol.png");
    var carta69 = new carta(0.5,"img/poker/qtrebol.png");
    var carta70 = new carta(0.5,"img/poker/ktrebol.png");
    //bastos (31-40)
    var carta71 = new carta(1,"img/poker/Acorazones.png");
    var carta72 = new carta(2,"img/poker/2corazones.png");
    var carta73 = new carta(3,"img/poker/3corazones.png");
    var carta74 = new carta(4,"img/poker/4corazones.png");
    var carta75 = new carta(5,"img/poker/5corazones.png");
    var carta76 = new carta(6,"img/poker/6corazones.png");
    var carta77 = new carta(7,"img/poker/7corazones.png");
    var carta78 = new carta(0.5,"img/poker/jcorazones.png");
    var carta79 = new carta(0.5,"img/poker/qcorazones.png");
    var carta80 = new carta(0.5,"img/poker/kcorazones.png");
    
    //creamos un array para la baraja francesa
    var arrayCartasP=[carta41,carta42,carta43,carta44,carta45,carta46,carta47,carta48,carta49,carta50,
                    carta51,carta52,carta53,carta54,carta55,carta56,carta57,carta58,carta59,carta60,
                    carta61,carta62,carta63,carta64,carta65,carta66,carta67,carta68,carta69,carta70,
                    carta71,carta72,carta73,carta74,carta75,carta76,carta77,carta78,carta79,carta80];
    
    //creamos un array para la baraja española
    var arrayCartasE=[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,
                    carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,
                    carta21,carta22,carta23,carta24,carta25,carta26,carta27,carta28,carta29,carta30,
                    carta31,carta32,carta33,carta34,carta35,carta36,carta37,carta38,carta39,carta40];
    //asignamos el array de cartas de la baraja española a la que usaremos en la logica
    var arrayCartas1=arrayCartasE;
    //declaramos e inicializamos varibles
    let plantarse=false;
    let valor=0.0;
    /**
     * funcion que estableca la baraja que se usara en la partida
     */
    function baraja(){
      var opcion=parseInt(document.getElementById("lista").value);
      console.log(opcion);
      //si el valor es 0 es decir no se ha jugado todavia dejaremos que ca,mbie de baraja, si no mostraremos una alerta
      if(valor==0){
        //dependiendo la opcion que ponga el usuario usaremos una baraja o otra
        if(opcion==1){
          arrayCartas1=arrayCartasE;
          //console.log(arrayCartas1);
        }else{
          arrayCartas1=arrayCartasP;
          //console.log(arrayCartas1);
        }
      }else{
        alert("no puedes cambiar las cartas a mitad de partida");
      }
    }
     /**
     * funcion que hace que el jugador pueda tirar cartas
     */
    function sacarcarta(){
      //el jugador podra sacar cartas siempre que no se haya pasado y no le haya pulsado l boton "plantarse"
      if(valor<=7.5 && plantarse==false){
        //creamos un nuevo elemento nueva imagen
        var nuevaImagen = document.createElement("img");
        //hacemos un numero random
        var random=Math.floor(Math.random()*arrayCartas1.length)
        //cogemos una carta al azar y la añadimos a la nuevaimagen
        var elegido=arrayCartas1[random];
        nuevaImagen.src=elegido.url;
        //guardamos el valor de la carta que ha salido y lo sumamos al que ya teniamos
        valor+=parseFloat(elegido.valor);
        //console.log("jugador: "+valor);
        //si el jugador se pasa mostramos que ha perdido
        if(valor>7.5){
           setTimeout(derrota,500);
        }
        //eliminamos esa carta del array
        arrayCartas1.splice(random, 1); 
        //añadimos el elemento como un hijo de "tapete"
        document.getElementById("tapete").appendChild(nuevaImagen);
      }  
    }
    let valorB=0.0;
    /**
     * funcion que hace que el jugador no pueda tirar cartas, tambien hace que la banca saque sus cartas
     */
    function Plantarse(){
      //establecemos plantarse a "TRUE"
      plantarse=true;
      while(valorB<valor){
          //creamos una nueva imagen
          var nuevaImagen = document.createElement("img");
          //creamos un numero aleatorio
          var random=Math.floor(Math.random()*arrayCartas1.length)
          //sacamos una carta aleatoria
          var elegido=arrayCartas1[random];
          //le asignamos el url de la carta a la nuevaimagen
          nuevaImagen.src=elegido.url;
          //guardamos el valor de la carta sacada por la banca
          valorB+=parseFloat(elegido.valor);
          //console.log("banca: "+valorB); 
          //borramos esa carta del array
          arrayCartas1.splice(random, 1); 
          //console.log(arrayCartas1.length);
          //mostramos esa carta
          document.getElementById("banca").appendChild(nuevaImagen);
      }
      //si la banca tiene menos o exactamente 7.5
      if(valorB<=7.5){
        //si el valor de la banca es mayor que el del usuario mostrara el cartel de derorta, si no mostrara el de victoria
        if(valor<=valorB){
          setTimeout(derrota,1000);
        }else{
          setTimeout(victoria,1000);
        }
      }else{
        //si la banca se pasa se mostrara el cartel de victoria
        setTimeout(victoria,1000);
      }
    }
    /**
     * funcion que muestra el cartel de victoria
     */
    function victoria(){
      //obtenemos el eleemnto "mensaje-victoria"
      var elm=document.getElementById("mensaje-victoria");
      //cambiamos su "class" (actualmente en "oculto") a "mostrar"
      elm.setAttribute("class", "mostrar");
      //lamamos a la funcion "ocultar"
      ocultar();
    }
    /**
     * funcion que muestra el cartel de Derrota
     */
    function derrota(){
      //obtenemos el eleemnto "mensaje-derrota"
      var elm=document.getElementById("mensaje-derrota");
      //cambiamos su "class" (actualmente en "oculto") a "mostrar"
      elm.setAttribute("class", "mostrar");
      //lamamos a la funcion "ocultar"
      ocultar();
    }
    /**
     * funcion que oculta el contenido
     */
    function ocultar(){
      //cambia los "class a "oculto"
      var elm=document.getElementById("tapete");
      elm.setAttribute("class", "oculto");
      var elm2=document.getElementById("banca");
      elm2.setAttribute("class", "oculto");
      var elm3=document.getElementById("botones");
      elm3.setAttribute("class", "oculto");
      var elm4=document.getElementById("tuscartas");
      elm4.setAttribute("class", "oculto");
      var elm5=document.getElementById("cartasbanca");
      elm5.setAttribute("class", "oculto");
    }