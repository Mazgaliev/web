package com.example.bookstore.service.impl;

import com.example.bookstore.model.Author;
import com.example.bookstore.repository.InMemoryAuthorRepository;
import com.example.bookstore.service.AuthorService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final InMemoryAuthorRepository inMemoryAuthorRepository;

    public AuthorServiceImpl(InMemoryAuthorRepository inMemoryAuthorRepository) {
        this.inMemoryAuthorRepository = inMemoryAuthorRepository;
    }

    @Override
    public List<Author> findAll() {
        return inMemoryAuthorRepository.findAll();
    }
}
