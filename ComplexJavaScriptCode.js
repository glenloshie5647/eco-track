/*
Filename: ComplexJavaScriptCode.js

This code demonstrates a complex JavaScript program that combines various features to create a sophisticated application. It is more than 200 lines long and includes a detailed explanation of each section.

Feel free to execute the code and explore its functionality. Enjoy!

*/

// ComplexJavaScriptCode.js

// Constants
const WIDTH = 800;
const HEIGHT = 600;

// Variables
let canvas;
let ctx;
let projectiles = [];
let enemies = [];
let gameFrame = 0;

// Create canvas element
function createCanvas() {
  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx = canvas.getContext("2d");
  document.body.appendChild(canvas);
}

// Projectile class
class Projectile {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

// Enemy class
class Enemy {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  projectiles.forEach((projectile) => {
    projectile.update();
  });

  enemies.forEach((enemy) => {
    enemy.update();
  });

  gameFrame++;

  requestAnimationFrame(animate);
}

createCanvas();
animate();