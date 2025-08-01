# 🤖 Telegram AI Bot

Yapay zeka ve müzik arama yeteneklerini bir araya getirerek sohbet deneyiminizi bir üst seviyeye taşıyor. Bu bot, hem gelen mesajlara akıllıca yanıtlar veriyor hem de istediğiniz şarkıyı anında bulup size iletiyor.

## ✨ Özellikler

Botumuzun sunduğu başlıca özellikler:

### 🧠 Yapay Zeka ile Sohbet
Bota gönderdiğiniz her mesaj, gelişmiş bir yapay zeka modeli tarafından analiz edilir ve size en uygun, mantıklı ve yaratıcı cevaplarla döner. Sadece bir chatbot'tan daha fazlası, yapay zeka destekli bir sohbet arkadaşı!

### 🎵 Müzik Arama
Bir şarkı dinlemek istiyorsunuz ama adını mı unuttunuz? Ya da sadece yeni müzikler mi keşfetmek istiyorsunuz? Sadece `music şarkı_ismi` komutunu kullanarak, bot istediğiniz şarkıyı internetten bulur ve size gönderir.

## 🚀 Kurulum

Botu kendi sunucunuzda çalıştırmak isterseniz aşağıdaki adımları takip edebilirsiniz:

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn
- Telegram Bot Token
- Groq API Key

### Kurulum Adımları

1. **Proje dosyalarını klonlayın:**
   ```bash
   git clone https://github.com/Eneskr06/Telegram-AI-Bot.git
   cd Telegram-AI-Bot
   ```

2. **Gerekli kütüphaneleri kurun:**
   ```bash
   npm install
   ```

3. **Çevresel değişkenleri ayarlayın:**
   
   `.env` dosyası oluşturun ve aşağıdaki bilgileri ekleyin:
   ```env
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
   ```

4. **Botu başlatın:**
   ```bash
   node bot.js
   ```
   

## 📱 Kullanım

### Komutlar
- `/start` - Botu başlatır ve hoş geldin mesajını gösterir
- `music <şarkı adı>` - Belirtilen şarkıyı arar ve gönderir
- Herhangi bir mesaj - AI ile sohbet eder

### Örnek Kullanım
```
Kullanıcı: music Imagine Dragons - Believer
Bot: 🎵 Şarkınızı arıyorum...

Kullanıcı: Bugün hava nasıl?
Bot: [AI yanıtı]
```

## 🛠️ Kullanılan Teknolojiler

- **Node.js** - Backend runtime
- **Telegram Bot API** - Telegram entegrasyonu
- **Groq API** - Yapay zeka modeli
- **yt-dlp** - Müzik indirme
- **FFmpeg** - Ses işleme
- **Axios** - HTTP istekleri

## 📁 Proje Yapısı

```
telegram-ai-bot/
├── package.json          # Proje bağımlılıkları
├── .env.example          # Çevresel değişken örneği
├── README.md             # Bu dosya
└── node_modules/         # Kurulu paketler
```

## 🐛 Bilinen Sorunlar

- Bazı müzik servisleri coğrafi kısıtlamalara sahip olabilir
- Çok uzun şarkılar Telegram'ın dosya boyutu sınırını aşabilir
- API rate limiting durumunda gecikmeler yaşanabilir

## 🤝 Katkıda Bulunma

Bu projenin daha da gelişmesi için her türlü katkıya açığız! 

### Katkıda bulunmak için:

1. Projeyi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

Eğer bir hata bulursanız veya yeni bir özellik önermek isterseniz, lütfen bir [issue](https://github.com/Eneskr06/Telegram-AI-Bot/issues) açın.

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı altında yayınlanmıştır.

## 📞 İletişim

- GitHub: [@Eneskr06](https://github.com/Eneskr06)
- Mail: enescetinoglu130@hotmail.com

## 🙏 Teşekkürler

- [Groq](https://groq.com/) - AI API desteği için
- [Telegram](https://telegram.org/) - Bot API için
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Müzik indirme için

---

⭐ **Projeyi beğendiyseniz yıldız vermeyi unutmayın!**