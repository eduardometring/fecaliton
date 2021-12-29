import { ICommand } from "wokcommands";

export default {
    category: '',
    description: '',

    callback: ({message}) => {
        message.reply('Uepa! Ratinho! Rapaaaaaz...')
    }
} as ICommand