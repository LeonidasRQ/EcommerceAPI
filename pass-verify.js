const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$kWrzsLYcKFHFfeqrU5y2POZUeZow75MR1qFeMOaMdMAnrnuopTira';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
