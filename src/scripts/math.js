export function matrixMult(m1, m2) {
    // m1 and m2 is 4x4 matrix
    var m3 = [];
    var currElm = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            currElm = 0;
            for (var k = 0; k < 4; k++) {
                currElm += m2[4 * i + k] * m1[4 * k + j];
            }
            m3.push(currElm);
        }
    }
    return m3;
}

export const projectionMatrix = (gl) => {
  return [
    2 / gl.canvas.clientWidth, 0, 0, 0,
    0, 2 / gl.canvas.clientHeight, 0, 0,
    0, 0, 2 / 400, 0,
    -1, 1, 0, 1
  ];
}

export const translationMatrix = (x, y, z) => {
    return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
    ];
};

export const scaleMatrix = (x, y, z) => {
    return [
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
    ];
};

export const rotationMatrix = (xt, yt, zt) => {
    function xRotation(angleInRadians) {
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);

      return [
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1,
      ];
    }

    function yRotation(angleInRadians) {
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);

      return [
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1,
      ];
    }

    function zRotation(angleInRadians) {
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);

      return [
         c, s, 0, 0,
        -s, c, 0, 0,
         0, 0, 1, 0,
         0, 0, 0, 1,
      ];
    }

    return matrixMult(matrixMult(xRotation(xt), yRotation(yt)), zRotation(zt));
}
