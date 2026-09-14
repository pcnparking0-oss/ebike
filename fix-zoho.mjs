import fs from 'fs';
let code = fs.readFileSync('api/lib/zohoEmail.ts', 'utf8');
code = code.replace(
  'rejectUnauthorized: true,\n    },',
  'rejectUnauthorized: true,\n    },\n    connectionTimeout: 5000,\n    greetingTimeout: 5000,\n    socketTimeout: 5000,'
);
fs.writeFileSync('api/lib/zohoEmail.ts', code);
