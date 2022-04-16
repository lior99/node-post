const express = require('express');
const { writeLogFile } = require('./file-handler');
const { prettyPrintDate } = require('./utils');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use((req, res, next) => {
    // log to file
    const content = `\nRequest to ${req.url} at ${prettyPrintDate()}`;
  
    writeLogFile(content);
  
    next();
  });

app.get('/health', ({ res }) => {
    res.send('server status: healthy');
});

app.get('/api/errors' ,(req, res) => {
    res.json([
        { id: 1, message: 'everything is ok', type: 'info' },
        { id: 2, message: 'something went wrong', type: 'error' },
        { id: 3, message: 'critical error', type: 'error' },
    ])
});

app.post('/api/log_error', (req, res) => {
    try {
        const { log: {type, message, severity }} = req.body;

        console.log('type', type);
        console.log('message', message);
        console.log('severity', severity);

        res.json({ message: 'Log was saved to DB' });
        

    } catch(err) {
        console.log('got some error', err);
    }
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})