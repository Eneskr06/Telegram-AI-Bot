const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const downloadsDir = path.join(__dirname, 'downloads');
if (!fs.existsSync(downloadsDir)) {
    fs.mkdirSync(downloadsDir);
}

function renderMusic(input) {
  const searchTerm = input.trim();
  if (!searchTerm) return Promise.resolve(null);

  const safeFileName = searchTerm.replace(/[\\/:*?"<>|]/g, '');
  const outputPath = path.join(downloadsDir, `${safeFileName}.mp3`);

  const command = `"${path.join(__dirname, 'yt-dlp.exe')}" ` +
      `-x --audio-format mp3 ` +
      `--output "${outputPath}" ` +
      `"ytsearch1:${searchTerm}"`;

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error)  {
        reject(stderr.trim());
    } else {
     resolve(outputPath);
    }
    });
  });
}

module.exports = {
    renderMusic
};
