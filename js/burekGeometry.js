  function BurekCurve( scale ) {

      THREE.Curve.call( this );

      this.scale = ( scale === undefined ) ? 1 : scale;

    }

  BurekCurve.prototype = Object.create( THREE.Curve.prototype );
  BurekCurve.prototype.constructor = BurekCurve;

  BurekCurve.prototype.getPoint = function ( t ) {
    var tx = t * Math.cos( 6 * Math.PI * t );
    var ty = t * Math.sin( 6 * Math.PI * t );
    var tz = 0;

    return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );

  };

  
  AFRAME.registerGeometry('burek', {
  schema: {
    
  },
  init: function (data) {
    var path = new BurekCurve(8)
    var geometry = new THREE.TubeGeometry( path, 20, 2, 16, false );
    this.geometry = geometry;
    
  }
});

AFRAME.registerComponent('make-burek',
                        {
  schema:{
    
  },

  update: function(){
    if(this.data.event == 'click'){
      this.el.addEventListener('click', function(){
      alert('is Clicked');
    });
    }
    
  }
});