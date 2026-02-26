 class carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.url=(arg2);
        }
      }

    function tienda(){

    }
    
    //oros (1-10)
    var carta1 = new carta(1,"img/1oros.png");
    var carta2 = new carta(2,"img/2oros.png");
    var carta3 = new carta(3,"img/3oros.png");
    var carta4 = new carta(4,"img/4oros.png");
    var carta5 = new carta(5,"img/5oros.png");
    var carta6 = new carta(6,"img/6oros.png");
    var carta7 = new carta(7,"img/7oros.png");
    var carta8 = new carta(10,"img/sotaoros.png");
    var carta9 = new carta(11,"img/caballooros.png");
    var carta10 = new carta(12,"img/reyoros.png");
    //copas (11-20)
    var carta11 = new carta(1,"img/1copas.png");
    var carta12 = new carta(2,"img/2copas.png");
    var carta13 = new carta(3,"img/3copas.png");
    var carta14 = new carta(4,"img/4copas.png");
    var carta15 = new carta(5,"img/5copas.png");
    var carta16 = new carta(6,"img/6copas.png");
    var carta17 = new carta(7,"img/7copas.png");
    var carta18 = new carta(10,"img/sotacopas.png");
    var carta19 = new carta(11,"img/caballocopas.png");
    var carta20 = new carta(12,"img/reycopas.png");
    //espadas (21-30)
    var carta21 = new carta(1,"img/1espada.png");
    var carta22 = new carta(2,"img/2espada.png");
    var carta23 = new carta(3,"img/3espada.png");
    var carta24 = new carta(4,"img/4espada.png");
    var carta25 = new carta(5,"img/5espada.png");
    var carta26 = new carta(6,"img/6espada.png");
    var carta27 = new carta(7,"img/7espada.png");
    var carta28 = new carta(10,"img/sotaespada.png");
    var carta29 = new carta(11,"img/caballoespada.png");
    var carta30 = new carta(12,"img/reyespada.png");
    //bastos (31-40)
    var carta31 = new carta(1,"img/1bastos.png");
    var carta32 = new carta(2,"img/2bastos.png");
    var carta33 = new carta(3,"img/3bastos.png");
    var carta34 = new carta(4,"img/4bastos.png");
    var carta35 = new carta(5,"img/5bastos.png");
    var carta36 = new carta(6,"img/6bastos.png");
    var carta37 = new carta(7,"img/7bastos.png");
    var carta38 = new carta(10,"img/sotabastos.png");
    var carta39 = new carta(11,"img/caballobastos.png");
    var carta40 = new carta(12,"img/reybastos.png");

    var arrayCartas= new[carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,
                          carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,
                          carta21,carta22,carta23,carta24,carta25,carta26,carta27,carta28,carta29,carta30,
                          carta31,carta32,carta33,carta34,carta35,carta36,carta37,carta38,carta39,carta40];
    function sacarcarta(){
      console.log(elegido);
      var elegido=arraycartas[parseInt(Math.random()*40+1)];
      document.getElementById("demo").src=elegido.url;
    }
   