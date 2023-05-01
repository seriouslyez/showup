import Imap from 'imap';
import {simpleParser} from 'mailparser';
export function getEmails (email, appPass) {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
    console.log('HERE')
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
            imap.search(['UNSEEN', ['SINCE', new Date()]], (err, results) => {
                const f = imap.fetch(results, {bodies: ''});
                f.on('message', msg => {
                    msg.on('body', stream => {
                        simpleParser(stream, async (err, parsed) => {
                            console.log(parsed);
                        });
                    });
                    msg.once('attributes', attrs => {
                        const {uid} = attrs;
                        imap.addFlags(uid, ['\\Seen'], () => {

                            console.log('Marked as read!');
                        });
                    });
                });
                f.once('error', ex => {
                    return Promise.reject(ex);
                });
                f.once('end', () => {
                    console.log('Done fetching all messages!');
                    imap.end();
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