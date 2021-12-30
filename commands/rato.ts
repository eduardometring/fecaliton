import { ICommand } from "wokcommands";

export default {
    category: 'Ratinho',
    description: 'bosta molhada',

    callback: ({message}) => {
        message.reply('Uepa! Ratinho! Rapaaaaaz...')
    }
} as ICommand