require('dotenv').config();
const logger = require('../index');

logger.log("Hey y'all wassup!");

logger.log('Oopsie I made a booboo and this is an error', 'error');

logger.log("Finished Successfully!", 'good');