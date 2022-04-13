package com.example.bookstore.service.impl;


import com.example.bookstore.model.Author;
import com.example.bookstore.model.Book;
import com.example.bookstore.model.Category;
import com.example.bookstore.repository.InMemoryAuthorRepository;
import com.example.bookstore.repository.InMemoryBookRepository;
import com.example.bookstore.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    private final InMemoryBookRepository inMemoryBookRepository;
    private final InMemoryAuthorRepository inMemoryAuthorRepository;

    public BookServiceImpl(InMemoryBookRepository inMemoryBookRepository, InMemoryAuthorRepository inMemoryAuthorRepository) {
        this.inMemoryBookRepository = inMemoryBookRepository;
        this.inMemoryAuthorRepository = inMemoryAuthorRepository;
    }

    @Override
    public List<Book> findAll() {
        return inMemoryBookRepository.findAll();
    }

    @Override
    public Optional<Book> saveBook(String name, Category category, Long authorId, Integer availableCopies) {
        Author a = inMemoryAuthorRepository.findById(authorId).orElse(null);
        return Optional.ofNullable(inMemoryBookRepository.save(new Book((long) (inMemoryBookRepository.findAll().size() + 1), name, category, a, availableCopies)));
    }

    @Override
    public Book removeBook(Long id) {
        Book b = inMemoryBookRepository.findById(id);
        inMemoryBookRepository.delete(b);
        return b;
    }

    @Override
    public Optional<Book> findByid(Long id) {
        return Optional.ofNullable(inMemoryBookRepository.findById(id));
    }
}
