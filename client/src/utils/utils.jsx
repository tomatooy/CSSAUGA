export function PhoneNumberInput(input) {
    const cleaned = ('' + input).replace(/\D/g, '').slice(0,10);
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleaned;

}

export function formatGoogleDriveImageUrl (driveUrl) {
    if (!driveUrl.startsWith('https://drive.google.com/file')) {
        return driveUrl; // return
    }
    // Extract the file ID from the Google Drive URL
    const fileIdMatch = driveUrl.match(/\/d\/(.+?)\/view/);
    if (!fileIdMatch || fileIdMatch.length < 2) {
        throw new Error('Invalid Google Drive URL');
    }

    const fileId = fileIdMatch[1];

    // Format the URL for the image file
    const imageUrl = `https://drive.google.com/uc?id=${fileId}`;

    return imageUrl;
}
