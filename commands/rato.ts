import { ICommand } from "wokcommands";

export default {
    category: 'Ratinho',
    description: 'rapais',

    callback: ({message}) => {
        message.reply('Uepa! Ratinho! Rapaaaaaz...')
    }
} as ICommand