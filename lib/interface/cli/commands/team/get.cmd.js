const Command = require('../../Command');
const { team } = require('../../../../logic').api;
const Output = require('../../../../output/Output');
const getRoot = require('../root/get.cmd');


const command = new Command({
    command: 'teams',
    aliases: ['team', 'tm'],
    parent: getRoot,
    description: 'Get an array of all current user teams',
    webDocs: {
        category: 'Teams',
        title: 'Get Teams',
    },
    builder: (yargs) => {
        return yargs
            .example('codefresh get teams', 'Get all teams for current account');
    },
    handler: async (argv) => {
        const teams = await team.getTeamsForCurrentUser();
        Output.print(teams);
    },
});


module.exports = command;

