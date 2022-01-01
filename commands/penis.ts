import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Diversão',
    description: 'Veja o tamanho do pênis de seus amigos!',

    callback: async ({message, args}) => {
        const user = message.mentions.users.first() || args.join(" ")
        if(!user) {
        const embed = new MessageEmbed()
        .setDescription(`**Seu pênis** \n8` + "=".repeat(Math.floor(Math.random() * 25)) + "D")
        .setColor('RANDOM')
        await message.reply ({
            embeds: [embed]
        })
        } else { 
        const embed = new MessageEmbed()
        .setDescription(`**Pênis de ${user}** \n8` + "=".repeat(Math.floor(Math.random() * 25)) + "D")
        .setColor('RANDOM')
        await message.reply ({
            embeds: [embed]
        })
    }}
} as ICommand