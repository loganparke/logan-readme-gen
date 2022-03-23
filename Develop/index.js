// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('../Develop/utils/page-template');
// TODO: Create an array of questions for user input
const questions = () => {
  console.log('questions function');
    return inquirer.prompt([
      {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username: ',
      },  
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address: ',
      },
      {
        type: 'input',
        name: 'project',
        message: 'What is your project called? ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project: ',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Give installation instructions for your project: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information ',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines: ',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions: ',
      },  
      {
        type: 'input',
        name: 'questions',
        message: 'Enter questions: ',
      },  
      {
        type: 'list',
        name: 'license',
        message: 'select license: ',
        choices: ['Apache','Boost', 'BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla']
      }
    ])
};

// TODO: Create a function to write README file
function writeToFile(userInput) {
    console.log('write to file function' + JSON.stringify(userInput.project));
    const page = generatePage(userInput);
    fs.writeFile('./dist/README.md', page, err => {
        if (err) {
            reject(err);
            return;
        }else {
           // console.log('file created!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()   
    .then( userInput => {
      writeToFile(userInput)
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();

