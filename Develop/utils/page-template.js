const generateReadme = (userInput) => {
    console.log('generateReadme text funciton');
    return `
    # project name: ${userInput.project}
    ## project description: ${userInput.description}
    ## installation instructions: ${userInput.installation}
    ## Usage information: ${userInput.usage}
    ## contribution guidelines: ${userInput.contribution}
    ## test instructions: ${userInput.test}
    ## Questions: ${userInput.questions}
     - link to my git hub -> github.com/${userInput.github}
     - if you have questions, send me and email at ${userInput.email}
     ## License: this application is covered under the ${userInput.license} license
    ![APM](https://img.shields.io/apm/l/vim-mode)
    `
};

module.exports = generateReadme;