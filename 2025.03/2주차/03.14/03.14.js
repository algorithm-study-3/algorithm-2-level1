/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;

  const firstColor = image[sr][sc];
  image[sr][sc] = color;

  for (let i = 0; i < 4; i++) {
    const diffX = sr + dx[i];
    const diffY = sc + dy[i];

    if (
      diffX >= image.length ||
      diffX < 0 ||
      diffY >= image[0].length ||
      diffY < 0
    ) {
      continue;
    }

    if (image[diffX][diffY] === firstColor) {
      floodFill(image, diffX, diffY, color);
    }
  }

  return image;
};
