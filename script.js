const lyricsArea = document.getElementById("lyrics");

const lines = [
    { text: "perang telah usai...", delay: 85 },
    { text: "perang telah usai..", delay: 90 },
    { text: "aku bisa pulang...", delay: 95 },
    { text: "ku baringkan panah..", delay: 88 },
    { text: "dan berteriak..", delay: 80 },
    { 
        text: "menang.....", 
        delay: 140   // bagian ini sengaja dibuat lambat biar dramatis
    }
];

const spaceDelay = [900, 900, 1100, 1100, 1200, 1400]; // jeda antar baris

async function typeLine(line, charDelay) {
    for (let c of line) {
        lyricsArea.textContent += c;
        await new Promise(res => setTimeout(res, charDelay));
    }
}

async function start() {
    for (let i = 0; i < lines.length; i++) {
        await typeLine(lines[i].text, lines[i].delay);
        lyricsArea.textContent += "\n";
        await new Promise(res => setTimeout(res, spaceDelay[i]));
    }
}

start();
