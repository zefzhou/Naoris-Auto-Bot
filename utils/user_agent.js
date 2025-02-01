import fs from 'fs'
import readline from 'readline'

function getUserAgents() {
    const fileStream = fs.createReadStream("user_agent.txt");

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    var lines = [];
    rl.on('line', (line) => {
        lines.push(line);
    });

    rl.on('close', () => {
        console.log(`end read user agent`);
    });

    return lines;
}


// getUserAgents()
export default getUserAgents;
