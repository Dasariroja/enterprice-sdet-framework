const axios = require('axios');

axios.post(process.env.SLACK_WEBHOOK_URL, {
  text: '❌ Critical Checkout Regression Failed'
});