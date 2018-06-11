window.addEventListener('DOMContentLoaded', function() {
  // All the following code is entered here.

  // get the reference of the canvas element from HTML
  var canvas = document.getElementById('renderCanvas');

  // load the Babylon 3D engine
  var engine = new BABYLON.Engine(canvas, true);

  // generate the scene
  var createScene = function() {

    // Create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);

    // Create a FreeCamera, and set its position to (x:0, y:5, z:-10)
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);

    // Target the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // Attach the camera to the Canvas
    camera.attachControl(canvas, false);

    // Create a basic light, aiming 0,1,0 - meaning, to the sky
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

    // Create a built-in "sphere" shape
    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);

    // Move the sphere upward 1/2 of its height
    sphere.position.y = 1;

    // Create a built-in "ground" shape
    var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivitions:2}, scene);

    // Return the created Scene
    return scene;
  }

  // Call the createScene function
  var scene = createScene();

  // !IMPORTANT!
  // Register a render loop to repeatedly render the scene on the Canvas
  engine.runRenderLoop(function() {
    scene.render();
  })

  // Resize canvas/window event handler
  window.addEventListener('resize', function() {
    engine.resize();
  });


});
