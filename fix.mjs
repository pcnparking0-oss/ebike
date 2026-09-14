import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(/    <\/div>\n  \);\n  }/g, '    </div>\n    </ErrorBoundary>\n  );\n}');
fs.writeFileSync('src/App.tsx', code);
