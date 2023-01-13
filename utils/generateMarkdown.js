
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = data.license;
  let renderBadge = " ";
  if (badge === "MIT") {
    renderBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (badge === "APACHE 2.0") {
    renderBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (badge === "GNU GPL v3") {
    renderBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else {
    return "no license chosen";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (hello.license == "MIT") {
//       licenseLink = "https://www.mit.edu/~amini/LICENSE.md"
//     } else if (hello.license == "APACHE 2.0") {
//       licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
//     } else if (hello.license == "GPL 3.0") {
//       licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
//     } else if (hello.license == "BSD 3") {
//       licenseLink = "https://en.wikipedia.org/wiki/BSD_licenses"
//     } else {
//       return
//     }
//     return licenseLink
// };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data)}
## Description
  ${data.description}
## Table of Contents
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Tests](#tests)
-[Contact](#contact)
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## Contribution
  ${data.contribution}
## Tests
  ${data.tests}
## Contact
  ${data.email}
  ${data.github}

`;
}

module.exports = generateMarkdown;
