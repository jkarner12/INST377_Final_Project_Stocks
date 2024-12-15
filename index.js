const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://piwmntyeynhmhapfgjmf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpd21udHlleW5obWhhcGZnam1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNDU2NTcsImV4cCI6MjA0OTcyMTY1N30.YWyMprF7ts3PzStROy7pk2n5JlPXzSQg8oPocLKCU7A'
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('public/INST377_Home_Page_Final.html',{ root: __dirname });
  });

app.post('/api/setup-account', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const { error } = await supabase.from('users').insert([{ name, email, password }]);

        if (error) {
            console.error('Error inserting data:', error.message);
            return res.status(500).json({ error: 'Error submitting your data. Please try again.' });
        }

        res.status(200).json({ message: 'Account information submitted successfully!' });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const { data, error } = await supabase.from('users').select('*');

        if (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: 'Error loading data' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'An unexpected error occurred. Please try again.' });
    }
});

app.listen(port, () => {
    console.log(`ITS ALIVEEE`);
});
