require('dotenv').config();
const server = require('./server');

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`\n ** server running on port ${PORT} ** \n`))

