package com.example.bookstore.repository;

import com.example.bookstore.dataholder.DataHolder;
import com.example.bookstore.model.Author;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public class InMemoryAuthorRepository {
    //TODO CREATE,READ,UPDATE,DELETE
    public List<Author> findAll() {
        return DataHolder.authors;
    }

    public Optional<Author> findById(Long id) {
        return DataHolder.authors.stream().filter(auth -> Objects.equals(auth.getId(), id)).findFirst();
    }
}
