// --- APPLYING STYLES AND COLORS --- //

function draw() {
  var ctx = document.getElementById('canvasTwo').getContext('2d');

// +++ COLORS +++ //
// **A fillStyle example** //
  // for (var i = 0; i < 6; i++) {
  //   for (var j = 0; j < 6; j++) {
  //     ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ', 100)';
  //     ctx.fillRect(j * 25, i * 25, 25, 25);
  //   }
  // }

// **A strokeStyle example** //
  // for (var i = 0; i < 6; i++) {
  //   for (var j = 0; j < 6; j++) {
  //     ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' + Math.floor(255 - 42.5 * j) + ')';
  //     ctx.beginPath();
  //     ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
  //     ctx.stroke();
  //   }
  // }

// ++ TRANSPARENCY ++ //
// **A globalAlpha example** //
  // // draw background
  // ctx.fillStyle = '#FD0';
  // ctx.fillRect(0, 0, 75, 75);
  // ctx.fillStyle = '#6C0';
  // ctx.fillRect(75, 0, 75, 75);
  // ctx.fillStyle = '#09F';
  // ctx.fillRect(0, 75, 75, 75);
  // ctx.fillStyle = '#F30';
  // ctx.fillRect(75, 75, 75, 75);
  // ctx.fillStyle = '#FFF';

  // // set transparency value
  // ctx.globalAlpha = 0.3;

  // // Draw semi transparent circles
  // for (i = 0; i < 7; i++) {
  //   ctx.beginPath();
  //   ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
  //   ctx.fill();
  // }

// **An example using rgba()** //
  // // Draw background
  // ctx.fillStyle = 'rgb(255, 221, 0)';
  // ctx.fillRect(0, 0, 150, 37.5);
  // ctx.fillStyle = 'rgb(102, 204, 0)';
  // ctx.fillRect(0, 37.5, 150, 37.5);
  // ctx.fillStyle = 'rgb(0, 153, 255)';
  // ctx.fillRect(0, 75, 150, 37.5);
  // ctx.fillStyle = 'rgb(255, 51, 0)';
  // ctx.fillRect(0, 112.5, 150, 37.5);

  // // Draw semi transparent rectangles
  // for (var i = 0; i < 10; i++) {
  //   ctx.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';
  //   for (var j = 0; j < 4; j++) {
  //     ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
  //   }
  // }

// ++Line style++ //
// **A lineWidth example** //
  // for (var i = 0; i < 10; i++) {
  //   ctx.lineWidth = 1 + i;
  //   ctx.beginPath();
  //   ctx.moveTo(5 + i * 14, 5);
  //   ctx.lineTo(5 + i * 14, 140);
  //   ctx.stroke();
  // }

// **A lineCap example**
  // var lineCap = ['butt', 'round', 'square'];

  // // Draw guides
  // ctx.strokeStyle = '#09f';
  // ctx.beginPath();
  // ctx.moveTo(10, 10);
  // ctx.lineTo(140, 10);
  // ctx.moveTo(10, 140);
  // ctx.lineTo(140, 140);
  // ctx.stroke();

  // // Draw lines
  // ctx.strokeStyle = 'black';
  // for (var i = 0; i < lineCap.length; i++) {
  //   ctx.lineWidth = 15;
  //   ctx.lineCap = lineCap[i];
  //   ctx.beginPath();
  //   ctx.moveTo(25 + i * 50, 10);
  //   ctx.lineTo(25 + i * 50, 140);
  //   ctx.stroke();
  // }

// **A lineJoin example** //
  // var lineJoin = ['round', 'bevel', 'miter'];
  // ctx.lineWidth = 10;
  // for (var i = 0; i < lineJoin.length; i++) {
  //   ctx.lineJoin = lineJoin[i];
  //   ctx.beginPath();
  //   ctx.moveTo(-5, 5 + i * 40);
  //   ctx.lineTo(35, 45 + i * 40);
  //   ctx.lineTo(75, 5 + i * 40);
  //   ctx.lineTo(115, 45 + i * 40);
  //   ctx.lineTo(155, 5 + i * 40);
  //   ctx.stroke();
  // }

// ++Gradient++ //
  // **A createLinearGradient example** //
  // Create gradients
  // var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  // lingrad.addColorStop(0, '#00ABEB');
  // lingrad.addColorStop(0.5, '#fff');
  // lingrad.addColorStop(0.5, '#26C000');
  // lingrad.addColorStop(1, '#fff');

  // var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  // lingrad2.addColorStop(0.5, '#000');
  // lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

  // // assign gradients to fill and stroke styles
  // ctx.fillStyle = lingrad;
  // ctx.strokeStyle = lingrad2;
  
  // // draw shapes
  // ctx.fillRect(10, 10, 130, 130);
  // ctx.strokeRect(50, 50, 50, 50);

  // **A createRadialGradient example** //
  // Create gradients
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');
  
  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');
  
  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}