const express = require('express');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/download', async (req, res) => {
  const url = req.query.url;
  const format = req.query.format;

  if (!url || !format) return res.status(400).send('URL oder Format fehlt');

  // Richtiges Dateiformat festlegen
  const ext = format === 'mp3' ? 'mp3' : 'mp4';
  const tempFile = path.join(__dirname, `tempfile.${ext}`);
  const ytdlPath = path.join(__dirname, 'node_modules/youtube-dl-exec/bin/yt-dlp');
  const cookiesPath = path.join(__dirname, 'cookies.txt');

  // yt-dlp args
  const args = [
    url,
    '--cookies', cookiesPath,
    '-o', tempFile
  ];

  if (format === 'mp3') {
    args.unshift('-x', '--audio-format', 'mp3');
  } else {
    args.push('--recode-video', 'mp4');
  }

  const ytdl = spawn(ytdlPath, args);

  ytdl.stderr.on('data', (data) => {
    console.error(`yt-dlp Fehler: ${data.toString()}`);
  });

  ytdl.on('close', (code) => {
    if (code !== 0) {
      return res.status(500).send('Download fehlgeschlagen. Prüfe URL oder Cookies.');
    }

    // Warten, bis Datei wirklich da ist
    fs.access(tempFile, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(500).send('Datei wurde nicht erstellt.');
      }

      res.download(tempFile, `download.${ext}`, (err) => {
        fs.unlink(tempFile, () => {}); // Temp löschen
        if (err) console.error('Fehler beim Senden:', err);
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

