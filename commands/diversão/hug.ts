import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Diversão',
    description: 'abrace alguém',
    aliases: ['h', 'abraçar'],

    callback: async ({message, args}) => {
        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.displayAvatarURL({format: "png"}))
        .setTitle('HAHAH BUCETA')
        .setDescription('a imagem nao vai ser isso eu to testando porra')
        const list = [
            'https://imgur.com/iclUiUN.gif',
            'https://imgur.com/lYQt9rx.gif',
            'https://imgur.com/w1TU5mR.gif',
            'https://i.imgur.com/i1PIph3.gif',
            'https://i.imgur.com/WVSwvm6.gif',
            'https://i.imgur.com/sZhtvBR.gif',
            'https://i.imgur.com/15pKXEG.gif',
            'https://i.imgur.com/So3TIVK.gif',
            'https://i.imgur.com/q340AoA.gif',
            'https://i.imgur.com/o9MMMeW.gif',
            'https://i.imgur.com/OjTBV8G.gif',
            'https://i.imgur.com/SeCRpPp.gif'
        ]

        const rand = list[Math.floor(Math.random() * list.length)]
        const user = message.mentions.users.first() || args.join(" ")

        if(!user) {
            await message.reply ({
            embeds: [embed]
            })
        } else if(user == '710530907370684526') {
            const amogus = [
                '! O Faustão vai botar esse seu cuzinho aí pra sentar na pika!',
                '! Você sabe quantos anos eu tenho? O que você faria se eu fosse uma criança? Pedófilo de merda',
                ', animal',
            ]
            const haha = amogus[Math.floor(Math.random() * amogus.length)]
            await message.reply(`Eu não quero te beijar ${haha}`)
        }else {const description = [
            'O amor está no ar...',
            `Para um exemplo de imbecil, meus parabéns! ${message.author}, você acaba de contrair herpes! (laugh at this user <a:trollfast:854095574474948648>)`,
            'Você sabia que a saliva tem mais bactérias que a urina? 😨'
        ]
        const otario = description[Math.floor(Math.random() * description.length)]
        const kiss = new MessageEmbed()
        .setDescription(`**${message.author} beijou ${user}** \n${otario}`)
        .setColor('RED')
        .setTimestamp()
        .setImage(rand)

        await message.reply ({
            embeds: [kiss]
        })
        
    }
}} as ICommand