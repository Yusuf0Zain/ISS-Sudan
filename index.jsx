import fs from 'fs';

const content = `// Debug start file
console.log('Debug mode started at', new Date().toISOString());
`;

fs.writeFileSync('debug-start.js', content);
console.log('debug-start.js created.');