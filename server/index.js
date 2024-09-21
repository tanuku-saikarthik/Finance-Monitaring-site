import express  from 'express';
import mongoose  from 'mongoose';
import cors  from 'cors';

// Import Mongoose models
import UserProfile  from './models/UserProfile.js';
import Income  from './models/Income.js';
import Expenses  from './models/Expenses.js';
import Savings  from './models/Savings.js';
import Investments  from './models/Investments.js';
import Liabilities  from './models/Liabilities.js';
import Budget  from './models/Budget.js';
import authRoutes from './routes/auth.js'

const app = express();
const port = 1337;

import dotenv from 'dotenv';
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Routes

// Fetch User Profile

app.use('/api/auth', authRoutes);

app.get('/api/user/:id/profile', async (req, res) => {
    try {
        const profile = await UserProfile.findById(req.params.id);
        res.json(profile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the user profile' });
    }
});

// Fetch Income
app.get('/api/user/:id/income', async (req, res) => {
    try {
        const income = await Income.find({ user_id: req.params.id });
        console.log(income);
        res.json(income);
        console.log(income);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the income data' });
    } 
});

// Fetch Expenses
app.get('/api/user/:id/expenses', async (req, res) => {
    try {
        const expenses = await Expenses.find({ user_id: req.params.id });
        res.json(expenses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the expenses data' });
    }
});

// Fetch Savings
app.get('/api/user/:id/savings', async (req, res) => {
    try {
        const savings = await Savings.find({ user_id: req.params.id });
        res.json(savings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the savings data' });
    }
});

// Fetch Investments
app.get('/api/user/:id/investments', async (req, res) => {
    try {
        const investments = await Investments.find({ user_id: req.params.id });
        res.json(investments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the investments data' });
    }
});

// Fetch Liabilities
app.get('/api/user/:id/liabilities', async (req, res) => {
    try {
        const liabilities = await Liabilities.find({ user_id: req.params.id });
        res.json(liabilities);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the liabilities data' });
    }
});

// Fetch Budget
app.get('/api/user/:id/budget', async (req, res) => {
    try {
        const budget = await Budget.find({ user_id: req.params.id });
        res.json(budget);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the budget data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
