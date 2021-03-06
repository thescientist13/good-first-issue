const inquirer = require('inquirer')

const projects = require('../lib/projects')

module.exports = async function () {
  let a = await inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Choose a project:',
      choices: Object.keys(projects)
    }
  ])
  return a.project
}
