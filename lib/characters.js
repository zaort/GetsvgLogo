const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('./lib/shapes');

class SVGlogo {
 constructor() {
  this.charactersEl = '';
  this.shapeEl = '';
 }

 render() {
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="275">${this.shapeEl}${this.charactersEl}</svg>`
 }

 setCharactersEl(text, color) {
  this.charactersEl = `<text x="200" y="160" font-size="70" text-anchor="middle" fill="${color}">${text}</text>`
 }

 setShapeEl(shape) {
  this.shapeEl = shape.render();
 }


 generateLogo() {
  return inquirer
   .prompt([
    // for user to input the info though CLI
    {
     type: "input",
     name: "Shape_color",
     message: "SHAPE COLOR: Enter an hexadecimal number or color keyword:",
    },
    {
     type: "list",
     name: "Shape",
     message: "Select the background shape for your logo:",
     choices: ["Triangle", "Square", "Circle"],
    },
    {
     type: "input",
     name: "Characters",
     message: "TEXT: Enter a MAXIMUM of (3) characters:",
    },
    {
     type: "input",
     name: "Text-color",
     message: "TEXT COLOR: Enter an hexadecimal number or color keyword:",
    },
   ])
   //Whit this .then I want to access the selected shape option and asign it to shapeEl and create a shape depending on the 
   .then((answers) => {
    console.log(answers);
    if (answers.Shape === "Triangle") {
     console.log("Shape OK - T");
     //console.log(answers.Shape);
     //console.log(answers.Shape_color);
     const selectedShape = new Triangle();
     selectedShape.setShapeColor(answers.Shape_color);
     //console.log(selectedShape.color);
     selectedShape.render();
     console.log(selectedShape);

    }
    else if (answers.Shape === "Square") {
     console.log("Shape OK - S");
     const selectedShape = new Square();
     selectedShape.setShapeColor(answers.Shape_color);


    }
    else if (shape === "Circle") {
     console.log("Shape OK - C");
     const selectedShape = new Circle();
     selectedShape.setShapeColor(answers.Shape_color);
    }
    else {
     console.log("Shape isn't valid");
    }
   })

  // .then(({ Characters }) => {
  //  this.charactersEl = ${ Characters };
  //  if (charactersEl.length > 0 && < 4) {
  //   return writeFile(
  //    join(__dirname, '..', 'examples', 'logo.svg')
  //    // when and how do I pull the characters input from the user?

  //   )
  //  }



  // })



 }

}

var buildMe = new SVGlogo();

buildMe.generateLogo();