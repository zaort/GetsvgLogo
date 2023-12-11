const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('./lib/shapes');

// defining class to build svg elements
class SVGlogo {
 constructor() {
  this.charactersEl = '';
  this.shapeEl = '';
 }

 render() {
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.charactersEl}</svg>`
 }

 setCharactersEl(color, text) {
  this.charactersEl = `<text x="50%" y="50%" font-size="70" text-anchor="middle" fill="${color}">${text}</text>`
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
     name: "Figure",
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
     name: "Text_color",
     message: "TEXT COLOR: Enter an hexadecimal number or color keyword:",
    },
   ])
   //Whit this .then we access the selected shape option and generate the class from the imported modules (Triangle, Square, Circle)
   .then((answers) => {
    console.log(answers);
    if (answers.Figure === "Triangle" && (answers.Characters.length > 0 && answers.Characters.length < 4)) {
     // console.log("Shape OK - T");
     var user_shape = new Triangle();
    }
    else if (answers.Figure === "Square" && (answers.Characters.length > 0 && answers.Characters.length < 4)) {
     // console.log("Shape OK - S");
     var user_shape = new Square();
    }
    else if (answers.Figure === "Circle" && (answers.Characters.length > 0 && answers.Characters.length < 4)) {
     // console.log("Shape OK - C");
     var user_shape = new Circle();
    }
    else {
     console.log("Text should have a MAX of 3 characters.");
    }

    user_shape.setShapeColor(answers.Shape_color)

    var generateSVG = new SVGlogo();
    generateSVG.setCharactersEl(answers.Text_color, answers.Characters);
    generateSVG.setShapeEl(user_shape);

    var svg = generateSVG.render();
    // console.log(svg);

    return writeFile(
     join(__dirname, '..', 'GetsvgLogo/examples', 'logo.svg'),
     svg
    ).then(() => {
     console.log("Generated logo.svg with above information");
    });

    // .catch ((error) => {
    //    console.error("Error generating logo:", error);
    //   });

   });

 }
}
var buildMe = new SVGlogo();

buildMe.generateLogo();