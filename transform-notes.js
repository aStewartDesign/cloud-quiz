const argv = require('yargs').argv;
const fs = require('fs');
const path = require('path');

const {file} = argv;
const resolvedFile = path.resolve(__dirname, file);

function transform(source) {
    const text = fs.readFileSync(source).toString();
    const chunks = text.split('\n\n');
    console.log(`There are ${chunks.length} q&a's.`);
    return chunks.map((chunk) => {
        const [question, answer] = chunk.split('\n');
        return {
            question,
            answer: answer.replace('- ', '')
        };
    });
}

function main() {
    if (!fs.existsSync(resolvedFile)) {
        console.log(`File ${file} not found in ${__dirname}`);
        return;
    }

    const result = transform(resolvedFile);

    fs.writeFileSync(`${resolvedFile}.json`, JSON.stringify(result), {
        encoding: 'utf-8'
    });
    console.log('Wrote questions out.');
}

main();
