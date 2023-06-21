const express = require('express');
const app = express();
const articles = [{title: 'Example'}];

app.set('port', process.env.PORT || 3000);

app.get('/articles', (req, res, next) => {
	res.send(articles);
});

app.listen(app.get('port'), () => {
	console.log('App started on port', app.get('port'));
});