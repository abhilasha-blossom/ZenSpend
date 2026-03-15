const API_BASE = 'http://localhost:8080/api';

export const fetchExpenses = async () => {
    const res = await fetch(`${API_BASE}/expenses`);
    return res.json();
};

export const fetchCategories = async () => {
    const res = await fetch(`${API_BASE}/categories`);
    return res.json();
};

export const createExpense = async (expenseData) => {
    const res = await fetch(`${API_BASE}/expenses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(expenseData)
    });
    return res.json();
};

export const fetchAnalyticsCategory = async () => {
    const res = await fetch(`${API_BASE}/expenses/analytics/category`);
    return res.json();
};

export const fetchAnalyticsTotal = async () => {
    const res = await fetch(`${API_BASE}/expenses/analytics/total`);
    return res.json();
};
