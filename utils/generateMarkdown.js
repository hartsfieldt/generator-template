// Function to render most popular open source license badge
function renderLicenseBadge(license) {
  switch (license) {
    case "The MIT License":
      return `![MIT License Badge](https://img.shields.io/badge/license-MIT-brightgreen)`;
    case "Apache License":
      return `![Apache License Badge](https://img.shields.io/badge/license-Apache-brightgreen)`;
    case "GNU License":
      return `![GNU License Badge](https://img.shields.io/badge/license-GNU-brightgreen)`;
    case "N/A":
      return "";
  }
}

// Function to render most popular open source license details
function renderLicenseLink(license) {
  switch (license) {
    case "The MIT License":
      return `[MIT License](https://www.mit.edu/~amini/LICENSE.md)`;
    case "Apache License":
      return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
    case "GNU License":
      return `[GNU License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  }
}

// Renders license if N/A is selected then the returns back to the questions.
function renderLicenseSection(license) {
  if (license === "N/A") {
    return "";
  } else {
    return `
This project is rendered by the following license
${renderLicenseLink(license)}
    `;
  }
}

// Generate Markdown file with an if statement that shows with out without a selected license.
const generateMarkdown = (answers) => {
  function renderTableOfContents(data) {
    if (data === "N/A") {
      return `
-[Installation](#installation)
-[Usage](#usage)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)
      `;
    } else {
      return `
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#questions)
      `;
    }
  }
  //README.MD template
  return `

# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Table of Contents
${renderTableOfContents(answers.license)}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License - The following license was used in my project:
${answers.license}

## Contributing - Best ways to contribute or Project Contributors:
Made with ❤️ by ${answers.name}

Additional Contributions: ${answers.contributing}

## Tests
  ${answers.test}

## Questions - Please send all questions to:
Name of Project Owner(s): ${answers.questions}

Git Hub Profile: ${answers.github}
  `;
};

module.exports = generateMarkdown;
