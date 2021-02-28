const mapToNegativize = arr => arr.map(n => -(n));
const mapToNoChange = arr => arr.map(n => n);
const mapToDouble = arr => arr.map(n => n * 2);
const mapToSquare = arr => arr.map(n => n * n);

const reduceToTotal = (arr, n=0) => {
   return arr.reduce((s, v) => { return s + v }, n);
}

const reduceToAllTrue = arr => arr.every(b => !!b)

const reduceToAnyTrue = arr => arr.some(b => !!b)