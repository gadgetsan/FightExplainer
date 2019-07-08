var stageWidth = 0;
var stageHeight = 0;

var getWidth = function() {
  return stageWidth;
};

var setWidth = function(width) {
  stageWidth = width;
};

var getHeight = function() {
  return stageHeight;
};

var setHeight = function(height) {
  stageHeight = height;
};

var resize = function() {
  return [stageWidth, stageHeight];
};

var getPixelSize = function(stageWidth, stageHeight, size) {
  if (stageHeight > stageWidth) {
    return stageWidth * 0.01 * size;
  } else {
    return stageHeight * 0.01 * size;
  }
};

module.exports.getWidth = getWidth;
module.exports.getHeight = getHeight;
module.exports.setWidth = setWidth;
module.exports.setHeight = setHeight;

module.exports.resize = resize;
module.exports.getPixelSize = getPixelSize;
