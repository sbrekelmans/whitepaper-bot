module.exports = function(controller) {

    controller.on('user_channel_join', function(bot, message) {

        bot.reply(message, 'Welkom, <@' + message.user + '> bij voorbaat excuses voor mijn gedrag, ik heb geen flauw idee wat onder of boven is.');

    });

}
