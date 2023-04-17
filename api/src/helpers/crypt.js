function encondeSHA256(lines) {
    const hash = createHash('sha256');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue;
        hash.write(line);
    }
    return hash.digest('hex');
}

function encondeSHA512(lines) {
    const hash = createHash('sha512');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line === '') continue;
        hash.write(line);
    }
    return hash.digest('hex');
}


module.exports = {encondeSHA256, encondeSHA512};
