import QRCode from 'qrcode';

// CHANGE THIS to your actual GitHub username
// Example: https://john-doe.github.io/birthday-wish
const url = 'https://SomanSaroj.github.io/birthday-wish';

const outputPath = './public/assets/website_qr.png';

console.log(`Generating QR code for: ${url}`);

QRCode.toFile(outputPath, url, {
    color: {
        dark: '#000000',  // Blue dots
        light: '#ffffff' // Transparent background
    },
    width: 1000
}, function (err) {
    if (err) throw err;
    console.log(`QR code saved to ${outputPath}`);
});
