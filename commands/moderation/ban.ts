import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Moderação',
    description: 'Banir membros do seu servidor',
    aliases: ['banir'],

    permissions: ['BAN_MEMBERS'],

    guildOnly: true,

    minArgs: 2,
    expectedArgs: "<user> <reason>",
    expectedArgsTypes: ['USER', 'STRING'],


    callback: async ({message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember
        if (!target) {
            return 'Me diga quem você quer banir, porra!'
        } 
        if (!target.kickable) {
            return 'Eu não consigo banir esse filho de uma prostituta'
        }

        args.shift()
        const reason = args.join(' ')

        target.kick(reason)

        return `Você expulsou <@${target.id}>`
    }
} as ICommand