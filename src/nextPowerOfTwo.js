export const nextPowerOfTwo = (num) => {
  // TO IMPLEMENT IN ANOTHER PR
  var x = 1, y = 1, count = 0;
  while(y === 1) {
  	if (x < num) {
  		x = x * 2;
  		count ++
  	}
  	else {
  		y = 0;
  	}
  }
  return x;
};