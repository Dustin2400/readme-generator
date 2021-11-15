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
    return `https://opensource.org/licenses/${license}`
  } else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `[${license}](${renderLicenseLink(license)})`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)\n
  *[Usage](#usage)\n
  *[License](#license)\n
  *[Contributors](#contributors)\n
  *[Tests](#tests)\n
  *[Questions](#questions)

  ## Installation
  ${data.installation}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Reach out if you have any questions.

  [GitHub: ${data.github}](https://github.com/${data.github})

  [e-mail: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
