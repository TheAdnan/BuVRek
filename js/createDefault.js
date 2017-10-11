//Location of items in the page
 function createBurek(){
      console.log('initiated');
      var creator = document.getElementById('entityCreator');
      var scene = document.querySelector("a-scene");
      var burekEl = document.createElement('a-entity');
      var animationEl = document.createElement('a-animation');

      //Setter of default attributes for the burek entity

         //Array with random values between 1 and 10, used in the position attribute of the burek entity
        var randomPosition = [];
            for (var i = 0; i<4;i++){
            randomPosition.push(Math.floor((Math.random()*15)-3) +',');
          }
          console.log(randomPosition);

      burekEl.setAttribute('geometry',   {
        primitive: 'burek',
        mergeTo: null
      });

      burekEl.setAttribute('material',    {
        src: '#burek-texture',
        flatShading: true,
        side: 'double',
        color: '#ffdb7a',
        metalness:1,
        roughness:0.92
      });

      burekEl.setAttribute('scale', "0.23, 0.06, 0.17");

      burekEl.setAttribute('rotation', "90 0 0");

      burekEl.setAttribute('position', ""+randomPosition[0] + " " + randomPosition[1] + " " + randomPosition[2]);

      scene.appendChild(burekEl);
}