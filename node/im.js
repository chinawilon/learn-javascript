const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();

channel.clients = new Map();
channel.subscriptions = new Map();

channel.on('join', function(id, client) {
	this.clients.set(id, client);
	this.subscriptions.set(id, (senderId, message) => {
		if (id != senderId) {
			this.clients.get(id).write(message);
		}
	});
	this.on('broadcast', this.subscriptions.get(id));
});

channel.on('leave', function(id) {
	this.removeListener('broadcast', this.subscriptions.get(id));
	this.emit('broadcast', id, `${id} has left the chatroom. \n`);
});

channel.on('shutdown', function() {
	this.emit('broadcast', '', 'The server has shutdown');
	this.removeAllListeners('broadcast');
	this.clients.forEach((client, id) => {
		console.log(id, 'is ready to close.');
	});
});

const server = net.createServer(client => {
	const id = `${client.remoteAddress}:${client.remotePort}`;
	channel.emit('join', id, client);
	client.on('data', data => {
		data = data.toString();
		if ( data === 'shutdown\r\n') {
			channel.emit('shutdown'); // shutdown all
		}
		channel.emit('broadcast', id, data);
	});
	client.on('close', () => {
		channel.emit('leave', id);
	});
});

server.listen(8888);