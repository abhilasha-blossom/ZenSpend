package com.zenspend.backend.services;

import com.zenspend.backend.models.Category;
import com.zenspend.backend.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    // Initialize defaults if empty
    public void initDefaultCategories() {
        if (categoryRepository.count() == 0) {
            String[] defaults = {"Food", "Transport", "Housing", "Entertainment", "Utilities", "Health", "Other"};
            for (String name : defaults) {
                categoryRepository.save(new Category(null, name));
            }
        }
    }
}
