# 🎧 YouTube Converter – MP3 & MP4 Downloader

A sleek web-based YouTube converter built with **Node.js**, **Express**, **yt-dlp**, and a clean HTML/CSS frontend.  
Supports **MP3** and **MP4** download – even for age-restricted content.

---

## 🌐 Live Demo

**🔗 https://converter.bbastian.xyz**

---

## 🚀 Features

- ✅ Download YouTube videos as **MP4** or **MP3**
- 🔒 Handles **age-restricted videos** using cookies
- 🧠 Smart conversion using `yt-dlp` and `ffmpeg`
- 🖥️ Clean and responsive UI
- 🌍 Self-hosted – full control, no ads, no trackers

---

## 📦 Requirements

- Node.js (v18+)
- ffmpeg (`sudo apt install ffmpeg`)
- `yt-dlp` via `youtube-dl-exec`
- Chrome/Firefox extension: [Get cookies.txt](https://chromewebstore.google.com/detail/get-cookiestxt/kidcjjlhfdekbiccloailngohjphfmgb)

---

## ⚙️ Installation

```bash
git clone https://github.com/bastian-js/youtube-converter.git
cd youtube-converter
npm install
chmod +x setup.sh
./setup.sh
```

Start the server:

```bash
node server.js
```

---

## 🍪 How to Handle Age-Restricted Videos

1. Create a YouTube account (18+)
2. Log in on [youtube.com](https://youtube.com)
3. Open the video to make sure it's accessible
4. Use [Get cookies.txt](https://chromewebstore.google.com/detail/get-cookiestxt/kidcjjlhfdekbiccloailngohjphfmgb) to export cookies
5. Save it as `cookies.txt` in the project folder

---

## 🛡️ License

This project is licensed under a **custom non-commercial license**.

You are allowed to:

- ✅ Use, modify, and host it privately or publicly  
- ❌ **Not allowed** to use it commercially or claim it as your own

Full license details: [LICENSE.md](./LICENSE)

---

## 🧠 Author

Made with ❤️ by [bastian-js](https://github.com/bastian-js)
