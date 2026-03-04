 
 class carta {
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
    var carta41 = new carta(1,"img/poker/Apicas");
    var carta42 = new carta(2,"img/poker/2picas");
    var carta43 = new carta(3,"img/poker/3picas");
    var carta44 = new carta(4,"img/poker/4picas");
    var carta45 = new carta(5,"img/poker/5picas");
    var carta46 = new carta(6,"img/poker/6picas");
    var carta47 = new carta(7,"img/poker/7picas");
    var carta48 = new carta(0.5,"img/poker/jpicas");
    var carta49 = new carta(0.5,"img/poker/qpicas");
    var carta50 = new carta(0.5,"img/poker/kpicas");
    //rombos (11-20)
    var carta51 = new carta(1,"img/poker/Arombos");
    var carta52 = new carta(2,"img/poker/2rombos");
    var carta53 = new carta(3,"img/poker/3rombos");
    var carta54 = new carta(4,"img/poker/4rombos");
    var carta55 = new carta(5,"img/poker/5rombos");
    var carta56 = new carta(6,"img/poker/6rombos");
    var carta57 = new carta(7,"img/poker/7rombos");
    var carta58 = new carta(0.5,"img/poker/jrombos");
    var carta59 = new carta(0.5,"img/poker/qrombos");
    var carta60 = new carta(0.5,"img/poker/krombos");
    //espadas (21-30)
    var carta61 = new carta(1,"img/poker/Atrebol");
    var carta62 = new carta(2,"img/poker/2trebol");
    var carta63 = new carta(3,"img/poker/3trebol");
    var carta64 = new carta(4,"img/poker/4trebol");
    var carta65 = new carta(5,"img/poker/5trebol");
    var carta66 = new carta(6,"img/poker/6trebol");
    var carta67 = new carta(7,"img/poker/7trebol");
    var carta68 = new carta(0.5,"img/poker/jtrebol");
    var carta69 = new carta(0.5,"img/poker/qtrebol");
    var carta70 = new carta(0.5,"img/poker/ktrebol");
    //bastos (31-40)
    var carta71 = new carta(1,"img/poker/Acorazones");
    var carta72 = new carta(2,"img/poker/2corazones");
    var carta73 = new carta(3,"img/poker/3corazones");
    var carta74 = new carta(4,"img/poker/4corazones");
    var carta75 = new carta(5,"img/poker/5corazones");
    var carta76 = new carta(6,"img/poker/6corazones");
    var carta77 = new carta(7,"img/poker/7corazones");
    var carta78 = new carta(0.5,"img/poker/jcorazones");
    var carta79 = new carta(0.5,"img/poker/qcorazones");
    var carta80 = new carta(0.5,"img/poker/kcorazones");

    var arrayCartasP=[carta41,carta42,carta43,carta44,carta45,carta46,carta47,carta48,carta49,carta50,
                    carta51,carta52,carta53,carta54,carta55,carta56,carta57,carta58,carta59,carta60,
                    carta61,carta62,carta63,carta64,carta65,carta66,carta67,carta68,carta69,carta70,
                    carta71,carta72,carta73,carta74,carta75,carta76,carta77,carta78,carta79,carta80];

    var arrayCartasE=[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,
                    carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,
                    carta21,carta22,carta23,carta24,carta25,carta26,carta27,carta28,carta29,carta30,
                    carta31,carta32,carta33,carta34,carta35,carta36,carta37,carta38,carta39,carta40];
    var arrayCartas1=arrayCartasE;
    function baraja(){
      var opcion=document.getElementById("lista").value;
      if(opcion==1){
        arraycartas1=arrayCartasE;
      }else{
        arraycartas1=arrayCartasP;
      }
    }
    let plantarse=false;
    let valor=0.0;

    function sacarcarta(){
      if(valor<=7.5 && plantarse==false){
        var nuevaImagen = document.createElement("img");
  
        var random=Math.floor(Math.random()*arrayCartas1.length)
        var elegido=arrayCartas1[random];
        nuevaImagen.src=elegido.url;

        valor+=parseFloat(elegido.valor);
        console.log("jugador: "+valor);

        if(valor>7.5){
           setTimeout(derrota,500);
        }else{

        }

        arrayCartas1.splice(random, 1); 
        document.getElementById("tapete").appendChild(nuevaImagen);
        
      }
        
      
    }
    let valorB=0.0;
    function Plantarse(){
      plantarse=true;
      while(valorB<valor){
        var nuevaImagen = document.createElement("img");
    
          var random=Math.floor(Math.random()*arrayCartas1.length)
          var elegido=arrayCartas1[random];
          nuevaImagen.src=elegido.url;

          valorB+=parseFloat(elegido.valor);
          console.log("banca: "+valorB); 

          arrayCartas1.splice(random, 1); 
          console.log(arrayCartas1.length);
          document.getElementById("banca").appendChild(nuevaImagen);
      }
      if(valorB<=7.5){
        if(valor<=valorB){
          setTimeout(derrota,1000);
        }else{
          setTimeout(victoria,1000);
          
        }
      }else{
        setTimeout(victoria,1000);
        
      }
    }
    function victoria(){
      var elm=document.getElementById("mensaje-victoria");
      elm.setAttribute("class", "mostrar");
      ocultar();
    }
    function derrota(){
      var elm=document.getElementById("mensaje-derrota");
      elm.setAttribute("class", "mostrar");
      ocultar();
    }
   
    function ocultar(){
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
