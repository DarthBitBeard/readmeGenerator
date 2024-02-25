// Function to render a license badge based on the license type
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// Function to render the license link
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

// Function to render the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. See the [${license} license](${renderLicenseLink(license)}) for more details.
`;
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about this project, please visit my [GitHub profile](https://github.com/${data.github}), or feel free to [email me](mailto:${data.email}) with any additional questions.
`;
}

module.exports = generateMarkdown;
