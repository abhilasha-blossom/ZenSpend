package com.zenspend.backend.services;

import com.zenspend.backend.models.Expense;
import com.zenspend.backend.repositories.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepository expenseRepository;

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAllByOrderByDateDesc();
    }

    public Optional<Expense> getExpenseById(Long id) {
        return expenseRepository.findById(id);
    }

    public Expense saveExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }

    // Simple Analytics calculation
    public Map<String, BigDecimal> getSpendingByCategory() {
        List<Expense> expenses = expenseRepository.findAll();
        Map<String, BigDecimal> categorySum = new HashMap<>();

        for (Expense expense : expenses) {
            String catName = expense.getCategory().getName();
            BigDecimal currentSum = categorySum.getOrDefault(catName, BigDecimal.ZERO);
            categorySum.put(catName, currentSum.add(expense.getAmount()));
        }
        return categorySum;
    }

    public BigDecimal getTotalSpending() {
        return expenseRepository.findAll().stream()
                .map(Expense::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
