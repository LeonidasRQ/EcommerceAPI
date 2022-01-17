const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiIiLCJpYXQiOjE2NDIyOTM3NTh9.4vQN4uLEAY_xX7-FjBIsLWpV2bDCuckOubYfIAlHavU';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
