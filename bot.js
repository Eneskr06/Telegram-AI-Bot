require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const fs = require('fs');
const { renderMusic } = require('./MusicDownloader');

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Token kontrolü
if (!BOT_TOKEN) {
    console.error('❌ TELEGRAM_BOT_TOKEN bulunamadı! .env dosyasını kontrol edin.');
    process.exit(1);
}

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    
    if (!text || text.startsWith('/')) return;

    try {
        if (text.toLowerCase().startsWith('music ')) {
            const songName = text.substring(6).trim();
            bot.sendMessage(chatId, `🎶 "${songName}" indiriliyor, lütfen bekleyin...`);
            try {
              const full = await renderMusic(songName);
              const fullPath = `downloads/${songName}.mp3`;
              console.log(fullPath);
              if (fs.existsSync(fullPath)) {
                  await bot.sendAudio(chatId, fullPath, { caption: '🎵 İşte şarkın!' , reply_to_message_id: msg.message_id});
                  fs.unlinkSync(fullPath);
                } else {
                  bot.sendMessage(chatId, '🚫 Dosya bulunamadı.');
                }
            } catch (err) {
              bot.sendMessage(chatId, '❌ Şarkı indirilemedi: ' + err);
            }
        } //Önceki çalışmamda textToİmage AI vardı. API bulabilirseniz ekleyebilirsiniz ücretli API'leri kullanmadım. (Yakın zamanda imageToText, aksilik olmaz ise, eklenecek)
        else {
            //AI Sohbeti için kurabileceğiniz sistem "Local AI" çalışmamda (İkisi bir arada kurulmuş olmalı)
            const response = await axios.post('http://localhost:5000/ask', {
                question: `[user_${chatId}] ${text}`
            });
            
            bot.sendMessage(chatId, response.data.answer);
        }
    } catch (error) {
        bot.sendMessage(chatId, 'Hata oluştu: ' + error.message);
    }
});

console.log('Bot çalışıyor...');