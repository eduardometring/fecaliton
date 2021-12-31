import { ICommand } from "wokcommands";

export default {
    category: 'Moderação',
    description: 'Expulse membros do seu servidor',

    permissions: ['KICK_MEMBERS'],

    guildOnly: true,

    minArgs: 2,
    expectedArgs: "<user> <reason>",
    expectedArgsTypes: ['USER', 'STRING'],


    callback: async ({message, args}) => {

    }
} as ICommand