 class carta {
        constructor (arg1, arg2) {
            this.valor=parseInt(arg1);
            this.imagen=toString(arg2);
        }
        // Métodos
        get area() {
            return this.x * this.y;
         }
        get volumen () {
            return this.x * this.y * this.z;
        }
      }