import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Diversão',
    description: 'Envia imagens de aleatórias de fezes',

    callback: ({message}) => {
        const random = 'https://desvendandosonhos.com/wp-content/uploads/2018/10/Sonhar-Com-Fezes.jpg'
        const embed = new MessageEmbed()
        .setImage(random)
        .setColor('RANDOM')
        .setTitle('Defecando...')
        .setTimestamp()

        return embed
    }
} as ICommand