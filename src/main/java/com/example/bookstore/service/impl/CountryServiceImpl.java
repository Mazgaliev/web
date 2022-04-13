package com.example.bookstore.service.impl;

import com.example.bookstore.model.Country;
import com.example.bookstore.repository.InMemoryCountryRepository;
import com.example.bookstore.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {
    private final InMemoryCountryRepository inMemoryCountryRepository;

    public CountryServiceImpl(InMemoryCountryRepository inMemoryCountryRepository) {
        this.inMemoryCountryRepository = inMemoryCountryRepository;
    }

    @Override
    public List<Country> findAll() {
        return inMemoryCountryRepository.findAll();
    }
}
