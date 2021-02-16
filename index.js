const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json");



// Status

bot.on("ready", async () => {
    console.log("Le bot a bien été lancer ✅")
    bot.user.setStatus("dnd")
    bot.user.setActivity("Garry's Life | En développement");
})

// Bienvenue 

bot.on("guildMemberAdd", member => {
    member.guild.channels.cache.get('810834182984433695').send(`**Bienvenue sur le serveur ${member} !** \n \n **『🔷』Vas lire le règlement dans #『📜』・𝗿𝗲̀𝗴𝗹𝗲𝗺𝗲𝗻𝘁 . ** \n \n**『🔷』 N'hésite pas à lire nos actualité . ** \n \n ** Grace a toi nous sommes ${member}**`);
    member.roles.add('810656442016071691');
})



// Commande de Clear

bot.on("message", message => {

    if (message.content.startsWith(".clear")) {
        message.delete();
        if (message.member.hasPermission('MANAGE_MESSAGES')) {

            let args = message.content.trim().split(/ +/g);

            if (args[1]) {

                if (!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99) {

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`> **Vous avez supprimé ${args[1]} message(s) ✅**`)
                    message.channel.bulkDelete(1)
                }
                else {
                    message.channel.send(`> **Le nombre de message à supprimé est invalide :x: . Vous devez rentrer un nombre entre 1 et 99.**`)
                }
            }
            else {
                message.channel.send(`> **La commande de clear n'a pas été éxécuter:x: . Merci d'indiquez un nombre de message à supprimé .**`)
            }
        }
        else {
            message.channel.send(`> **${member} , la commande n'a pas été éxécuter :x: , vous n'avez les permission " delete message " pour l'éxécuter .**`)
        }
    }
})



bot.login(process.env.TOKEN);
