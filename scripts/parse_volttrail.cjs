const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('volttrail_page.html', 'utf8');

function getBlock(varName) {
  const startStr = 'const ' + varName + ' = [';
  const startIdx = html.indexOf(startStr);
  if (startIdx === -1) return null;
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let endIdx = -1;
  for (let i = startIdx + startStr.length - 1; i < html.length; i++) {
    const c = html[i];
    const prev = html[i - 1];
    if (inString) {
      if (c === stringChar && prev !== '\\') {
        inString = false;
      }
    } else {
      if (c === '"' || c === "'" || c === '`') {
        inString = true;
        stringChar = c;
      } else if (c === '[') {
        depth++;
      } else if (c === ']') {
        depth--;
        if (depth === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }
  }
  if (endIdx !== -1) {
    const jsonStr = html.substring(startIdx + startStr.length - 1, endIdx);
    try {
      const fn = new Function('return ' + jsonStr);
      return fn();
    } catch (e) {
      console.error('Eval error for ' + varName + ':', e.message);
      return null;
    }
  }
  return null;
}

const bikes = getBlock('bikes') || [];
const quads = getBlock('quads') || [];
const parts = getBlock('parts') || [];

console.log('Bikes found:', bikes.length);
console.log('Quads found:', quads.length);
console.log('Parts found:', parts.length);

fs.writeFileSync('volttrail_bikes.json', JSON.stringify(bikes, null, 2));
fs.writeFileSync('volttrail_quads.json', JSON.stringify(quads, null, 2));
fs.writeFileSync('volttrail_parts.json', JSON.stringify(parts, null, 2));

console.log('Bike sample:');
if (bikes[0]) console.log(JSON.stringify(bikes[0], null, 2));

console.log('Quad sample:');
if (quads[0]) console.log(JSON.stringify(quads[0], null, 2));

console.log('Part sample:');
if (parts[0]) console.log(JSON.stringify(parts[0], null, 2));
