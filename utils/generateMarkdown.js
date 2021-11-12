// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![license](https://img.shields.io/badge/license-${license}-brightgreen)`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return ``
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
      ${license}
      ${renderLicenseLink(license)}
    `
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
  
  
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  ${data.installation}

  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Reach out if you have any questions.

  GitHub: ${data.github}

  e-mail: ${data.email}
`;
}

module.exports = generateMarkdown;
