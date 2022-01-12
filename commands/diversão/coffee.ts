import { MessageEmbed } from "discord.js";
import { ICommand} from "wokcommands";

export default {
    category: 'fun',
    description: 'Tome um café com o bot',
    aliases: ['café', '☕'],

    callback: async ({message}) => {
        const list = [
            'https://i.imgur.com/bVXEwli.gif',
            'https://i.imgur.com/zVFXlgN.gif',

        ]
        const coffee = list[Math.floor(Math.random() * list.length)]
        const list2 = [
            'Coffee! Coffee! Coffee! Coffee! Coffee! Coffee! Coffee! Coffee! Coffee!',
            'Ebony Milf Shares Step Daughter With Boyfriend'
        ]
        const embed = new MessageEmbed()
        .setTitle('cafe')
        .setDescription('cafe lmao')
        .setColor('#381c08')
        .setImage(coffee)
        await message.reply({
            embeds: [embed]
        })
    }
}as ICommand