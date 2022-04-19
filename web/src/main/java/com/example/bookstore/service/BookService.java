package com.example.bookstore.service;

import com.example.bookstore.model.Author;
import com.example.bookstore.model.Book;
import com.example.bookstore.model.Category;

import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll();

    Optional<Book> saveBook(String name, Category category, Long authorId, Integer availableCopies);

    Book removeBook(Long id);

    Optional<Book> findByid(Long id);

    Optional<Book> editBook(Long id, String name, Category category, Long authorId, Integer availableCopies);
}
