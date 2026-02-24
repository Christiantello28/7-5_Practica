 class carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.url=(arg2);
        }
      }

    function tienda(){

    }
    var carta2 = new carta(1,"img/2oros.png");
    var carta3 = new carta(3,"img/3oros.png");
    var carta4 = new carta(4,"img/4oros.png");

    var arrayCartas= new[carta2,carta3,carta4];
    
    var elegido=arraycartas[1];
    document.getElementById("demo").src=elegido.url;