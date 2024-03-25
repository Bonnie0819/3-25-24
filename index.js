const fs = require('fs');

const inputFile = 'capture2.csv';
const outputFile = 'websites.json';
const websites = [];

const lines = fs.readFileSync(inputFile).toString().split('\n');

lines.map((line) => {
    if(line.includes('DNS')) {
        const parts = line.split(' ');
        const urlIndex = parts.indexOf('HTTPS');
        if(urlIndex !== -1 && parts[urlIndex + 1]) {
            websites.push(parts[urlIndex + 1]);
        }
    }
});

fs.writeFileSync(outputFile, JSON.stringify(websites, null, 2));
console.log('Websites extracted and saved to websits.json');
for(let i = 0; i < websites.length; i++) {
    
}
