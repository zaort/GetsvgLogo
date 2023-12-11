const { Triangle, Square, Circle } = require("/Users/carlo/bootcamp/GetsvgLogo/lib/shapes")
// importing each one of the defined shape classes from the shapes.js (for some reason the "./" pasth only points to the files inside tests directory, so I had to do the full path)

describe('Triangle shape', () => {
 it('should generate text to creat an svg triangle', () => {
  const shape = new Triangle();
  shape.setShapeColor("blue");

  expect(shape.render()).toEqual(`<polygon points="0,200 300,200 150,0" fill="${this.color}">`);
 });
});

describe('Square shape', () => {
 it('should generate text to creat an svg square', () => {
  const shape = new Square();
  shape.setShapeColor("red");

  expect(shape.render()).toEqual(`<rect height="100%" width="100%" x="0" y="0" fill="${this.color}">`);
 });
});

describe('Circle shape', () => {
 it('should generate text to creat an svg circle', () => {
  const shape = new Circle();
  shape.setShapeColor("yellow");

  expect(shape.render()).toEqual(`<circle height="100%" width="100%" cx="50%" cy="50%" r="100" fill="${this.color}">`);
 });
});