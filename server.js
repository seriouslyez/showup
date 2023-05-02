const Imap = require('imap');
const {simpleParser} = require('mailparser');
const fs = require('fs')

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const app = express();
const port = process.env.PORT || 5001;

var cors = require('cors')
app.use(bodyParser.json());
app.use(cors())

let emails = {}

let email = '';
let pass = '';

String.prototype.hashCode = function() {
  let hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

const str = 'revenue'
console.log(str, str.hashCode())

function getEmails(email, appPass) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
    let imapConfig = {
        user: email,
        password: appPass,
        host: 'imap.gmail.com',
        port: 993,
        tls: true
        };

    const imap = new Imap(imapConfig);
    imap.once('ready', () => {
        imap.openBox('INBOX', false, () => {
            console.log('Inbox opened');
            imap.search(['UNSEEN', ['SINCE', new Date(new Date().setDate(new Date().getDate()- 7))]], (err, results) => {
                const f = imap.fetch(results, {bodies: ''});
                f.on('message', msg => {
                    msg.on('body', stream => {
                        simpleParser(stream, async (err, parsed) => {
                            let subject = parsed.subject
                            let hashSub = subject.hashCode()
                            
                            if (!(hashSub in emails)) {
                              emails[hashSub] =  [{date: parsed.date, subject: subject, text: parsed.text}]
                            }
                          });
                        });
                
                    msg.once('attributes', attrs => {
                        //const {uid} = attrs;
                        // imap.addFlags(uid, ['\\Seen'], () => {

                        //     console.log('Marked as read!');
                        // });
                        console.log('Message Read')
                    });
                });
                f.once('error', ex => {
                    console.log(ex);
                    Promise.reject(ex);
                });
                f.once('end', () => {
                    console.log('Done fetching all messages!');
                    imap.end();
                    console.log(emails)
                    let emailsJson = JSON.stringify(emails)
                    console.log(emailsJson)
                    fs.writeFile("./client/src/emails.json", emailsJson, function(err, result) {
                      if(err) console.log('error', err);
                    });
                });
            });
        });
    });
    imap.once('error', err => {
        console.log(err);
    });

    imap.once('end', () => {
        console.log('Connection ended');
    });

    imap.connect();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.email} ${req.body.password}`,
  );
  email = req.body.email
  pass = req.body.password

  if (email != '' && password != '') {
    getEmails(email, pass)
  } else {
    emails = {}
  } 
});
// https://www.codingthesmartway.com/how-to-use-chatgpt-with-react/
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000,
  });
  res.send(completion.data.choices[0].text);
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

let minutes = 1, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 1 minutes check");
  // do your stuff here
  if (email != '' && pass != '') {
    getEmails(email, pass)
  }
}, the_interval);

app.listen(port, () => console.log(`Listening on port ${port}`));
