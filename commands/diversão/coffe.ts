import { ICommand} from "wokcommands";

export default {
    category: 'fun',
    description: 'Tome um café com o bot',
    aliases: ['café', '☕'],

    callback: async ({message}) => {
        await message.reply('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK')
    }
}as ICommand