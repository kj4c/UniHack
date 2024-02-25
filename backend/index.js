import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send('Hello MEOWSTER');
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

