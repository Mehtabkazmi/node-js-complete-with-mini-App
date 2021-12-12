const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('addition', () => {
//     console.log('my name is mehtab kazmi');
// });
// event.on('addition', () => {
//     console.log('my name is syed');
// });
event.on('checkPage', (sc,msg) => {
    console.log(`status code is ${sc} the page is ${msg}` );
});

// event.emit('addition');
event.emit('checkPage',200,ok);