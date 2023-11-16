// Shape class defined with contructor that initializes the variable color. setShapeColor method for color property.
class Shape {
 constructor() {
  this.color = '';
 }

 setShapeColor(color) {
  this.color = color;
 }
}

// Triangle class to extend the Shape class. Render method generates SVG element with the defined attributes. Takes color property from the current instance?
class Triangle extends Shape {
 render() {
  return `<polygon height="100%" width="100%" points="0, 200 300, 200 150, 0" fill="${this.color}">`
 }
}

// Square class to extend the Shape class. Render method generates SVG element with the defined attributes. Takes color property from the current instance?
class Square extends Shape {
 render() {
  return `<rect height="100%" width="100%" x="250" y="250" fill="${this.color}">`
 }
}

// confirm if it works with 65% (research) also confirm if the height and with can go before other info. Also check on r="100"
// Circle class to extend the Shape class. Render method generates SVG element with the defined attributes. Takes color property from the current instance?
class Circle extends Shape {
 render() {
  return `<circle height="100%" width="100%" cx="70%" cy="70%" r="100" fill="${this.color}">`
 }
}