import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Diversão',
    description: 'abrace alguém',
    aliases: ['h', 'abraçar'],

    callback: async ({message, args}) => {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/718179333222432768/928700492744376340/Untitled5_20220106142236.png')
        .setAuthor('f!hug')
        .setTitle('Como usa essa porra me ajuda por favor')
        .setDescription('kkkkkk ta funsionano caraio kajskjskajskajsakjsakjsakjsakjsakjsakjsajsakjskjsakjska')
        const list = [
            'https://i.imgur.com/r9aU2xv.gif',
            'https://i.imgur.com/wOmoeF8.gif',
            'https://i.imgur.com/nrdYNtL.gif',
            'https://i.imgur.com/BPLqSJC.gif',
            'https://i.imgur.com/ntqYLGl.gif',
            'https://i.imgur.com/v47M1S4.gif',
            'https://i.imgur.com/82xVqUg.gif',
            'https://i.imgur.com/4oLIrwj.gif'
        ]

        const rand = list[Math.floor(Math.random() * list.length)]
        const user = message.mentions.users.first() || args.join(" ")

        if(!user) {
            await message.reply ({
            embeds: [embed]
            })
        } else if(user == '710530907370684526') {
            const amogus = [
                'você fede!',
                'animal',
            ]
            const haha = amogus[Math.floor(Math.random() * amogus.length)]
            await message.reply(`Eu não quero te abraçar, `)
        }else {const description = [
            'too bad nobody gives a shit',
            `i shitted myself <a:trollfast:854095574474948648>`,
            'WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP WAKE UP '
        ]
        const otario = description[Math.floor(Math.random() * description.length)]
        const hug = new MessageEmbed()
        .setDescription(`**${message.author} abraçou ${user}** \n${otario}`)
        .setColor('BLUE')
        .setTimestamp()
        .setImage(rand)
        .setFooter(message.author.tag, message.author.displayAvatarURL({format: "png"}))

        await message.reply ({
            embeds: [hug]
        })
        
    }
}} as ICommand