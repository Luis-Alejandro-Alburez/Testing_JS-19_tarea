/*             La palabra clave this       

Los objetos son colecciones de datos y funcionalidades relacionadas.

Almacenamos esas funcionalidades de nuestros objetos en mÃ©todos:
*/
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
};

/*En nuestro objeto goat tenemos un mÃ©todo .makeSound().
Podemos invocarlo de la siguiente manera: */
goat.makeSound(); //imprime 'baaa'

/*Todo bien, tenemos un objeto goat que puede imprimir baaa en la consola.
Todo parece funcional correctamente. Â¿QuÃ© pasarÃ­a si quisiÃ©ramos aÃ±adir
un nuevo mÃ©todo a nuesto objeto goat llamado .diet() que imprima
la propiedad dietType de goat? */

const goat1 = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(dietType); //no tenemos acceso automÃ¡tico a
    //otras propiedades del objeto goat1
  },
};
goat1.diet();
// Output will be "ReferenceError: dietType is not defined"

/**Es extraÃ±o, Â¿por quÃ© dietType no estÃ¡ definido aunque sea una
 * propiedad de goat1?
 *
 * Esto se debe a que, dentro del alcance del mÃ©todo .diet(), no tenemos
 * acceso atomÃ¡tico a otras propiedades del objeto goat1.
 *
 * AquÃ­ es donde la palabra clave this viene al rescate.
 * Si cambiamos el mÃ©todo .diet() y utilizamos la palabra clave this
 * .diet() puede acceder a otras propiedades del objeto goat1.
 */
const goat2 = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType); //this hace referencia al
    //objeto que hace la llamada.
  },
};

goat2.diet();
// Output: herbivore

/*La palabra clave this hace referencia al objeto que realiza la llamada,
  lo que proporciona acceso a sus propiedades.  En el ejemplo anterior,
  la llamada al objeto es goat y utilizando this tenemos acceso al objeto
  mismo, y entonces la propiedad dietType serÃ¡ accesible usando la
  notaciÃ³n de punto. */

/**Ejemplo:
   * 
   * Crearemos un nuevo objeto para utilizar la palabra clave this.
   * en el siguiente cÃ³digo hay un objeto robot, agregaremos una 
   * propiedad de modelo y le asignaemos el valor de 'B-4MI'..
   * Agrega otra propiedad, energyLevel  asignale el valor 100.
   * 
   * const robot = {
  
     };


     Dentro del objeto robot, agregue un mÃ©todo llamado provideInfo. 
     Dentro del cuerpo de provideInfo(), devuelva la siguiente cadena 
     mediante interpolaciÃ³n:

     I am MODEL and my current energy level is ENERGYLEVEL.  

     Reemplace 'MODEL' y 'ENERGYLEVEL' con la propiedad modely el objeto 
     que realiza la llamada energyLevel. Recuerde que, para acceder a las 
     propiedades del objeto que realiza la llamada dentro de un mÃ©todo, 
     debe usar la palabra clave this.



     Ahora, para comprobar .provideInfo() si tiene acceso a las propiedades
    internas de robot. Registre el resultado de la llamada .provideInfo() 
    al mÃ©todo  robot en la consola.

   */

const robot = {
  model: "B-4MI",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());

/**En el cÃ³digo anterior, utilizamos this para acceder a las
 * propiedades del objeto robot dentro del mÃ©todo provideInfo().
 *
 * Cuando se llama a robot.provideInfo(), this en el mÃ©todo
 * proporciona acceso a las propiedades del objeto robot.
 *
 * La palabra clave this refiere al objeto que realiza la llamada.
 * En este caso, el objeto robot es quien realiza la llamada a
 * provideInfo().
 *
 * this en el mÃ©todo proporciona acceso a las propiedades del objeto
 * robot, permitiendo que el mÃ©todo devuelva informaciÃ³n sobre el
 * objeto robot.
 *
 * Cuando se llama a robot.provideInfo(), this se refiere al objeto
 * robot y proporciona acceso a sus propiedades.
 *
 * En el mÃ©todo provideInfo(), this se refiere al objeto robot.
 * this.model se refiere a la propiedad model del objeto robot.
 * this.energyLevel se refiere a la propiedad energyLevel del objeto
 * robot.
 */

/*Para ver todas las propiedades del objeto
global console.dir(window)
El resultado serÃ¡ un objeto enorme que contiene:

Todas las propiedades y mÃ©todos globales de JavaScript 
(como setTimeout, console, JSON).

El DOM completo (como document, location, history).

Variables globales que hayas definido (si las hay).

Objetos especÃ­ficos del navegador (como localStorage, 
navigator).

{
  // Propiedades del navegador
  document: Document, // El DOM
  location: Location, // URL actual
  navigator: Navigator, // InformaciÃ³n del navegador
  localStorage: Storage, // Almacenamiento local

  // Funciones globales de JS
  setTimeout: function() {},
  setInterval: function() {},
  alert: function() {},

  // Objetos globales
  Math: Math,
  JSON: JSON,

  // Tus variables globales (si las hay)
  miVariable: "Hola", // Si definiste: var miVariable = "Hola";

  // ... (cientos de propiedades mÃ¡s)
}*/
