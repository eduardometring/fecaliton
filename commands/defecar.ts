import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Diversão',
    description: 'Envia imagens de aleatórias de fezes',

    callback: async ({message}) => {
        const fezes =  [
            'https://cdn.discordapp.com/attachments/836279613818142740/926084425647792138/unknown.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926083527898972160/unknown.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926083850860363796/SHIT.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926083857386709002/iu.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926084292705136720/unknown.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926084607873531984/iu.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926084902326272020/unknown.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926085080756133969/unknown.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926087958304555038/iu.png'


        ]
        const random = fezes[Math.floor(Math.random() * fezes.length)]

        const lista = [
            'https://cdn.discordapp.com/attachments/836279613818142740/926086819311927336/unknown.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926087283495559208/unknown.png',
            'https://cdn.discordapp.com/attachments/836279613818142740/926088203776188456/unknown.png',
            'https://cdn.discordapp.com/attachments/718179333222432768/926088503664721920/images.png',
        ]

        const cagando = lista[Math.floor(Math.random() * lista.length)]

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Defecando...')
            .setImage(cagando)

    const newMessage = await message.reply({
            embeds: [embed]
        })

        await new Promise((resolve)  => setTimeout(resolve, 3000))

        const newEmbed = newMessage.embeds[0]
        newEmbed.setTitle('Pronto! Sua shit foi defecada successfully')
        newEmbed.setImage(random)
        newEmbed.setTimestamp()

        newMessage.edit({
            embeds: [newEmbed],
        })
    }
} as ICommand