
const generateReadme = (userInput) => {
    var licenseName = userInput.license;
    switch (userInput.license) {
        case 'Apache':
            userInput.license ='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            console.log(userInput.license);
            break;
        case 'Boost':
            userInput.license ='[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            console.log(userInput.license);
            break;
        case 'BSD':
            userInput.license ='[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            console.log(userInput.license);
            break;
        case 'Eclipse':
            userInput.license ='[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            console.log(userInput.license);
            break;
        case 'GNU':
            userInput.license ='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            console.log(userInput.license);
            break;
        case 'IBM':
            userInput.license ='[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
            console.log(userInput.license);
            break;
        case 'ISC':
            userInput.license ='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            console.log(userInput.license);
            break;
        case 'MIT':
            userInput.license ='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            console.log(userInput.license);
            break;
        case 'Mozilla':
            userInput.license ='[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            console.log(userInput.license);
            break;
        default:
        console.log('none');
    
    };

    return `
# project name: ${userInput.project}
${userInput.license}
## project description: 
${userInput.description}
## installation instructions: 
${userInput.installation}
## Usage information: 
${userInput.usage}
## contribution guidelines: 
${userInput.contribution}
## test instructions: 
${userInput.test}
## Questions: 
${userInput.questions}
    - link to my git hub -> [github.com/${userInput.github}] (github.com/${userInput.github})
    - if you have questions, send me and email at ${userInput.email}
## License: 
this application is covered under the ${licenseName} license
`
};

module.exports = generateReadme;