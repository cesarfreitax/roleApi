// const ValidacoesLugares = require('../services/ValidacoesLugares');
import ValidacoesLugares from '../services/ValidacoesLugares.js';

test("Verifica se o campo está vazio", () => {
    expect(ValidacoesLugares.notEmpty("")).toBe(false)
});

test("Verifica se o campo está vazio", () => {
    expect(ValidacoesLugares.notEmpty("Raboni")).toBe(true)
});

test("Verifica se o CEP tem 8 números", () => {
    expect(ValidacoesLugares.validaCEP("12345678")).toBe(true)
});

test("Verifica se o CEP tem 8 números", () => {
    expect(ValidacoesLugares.validaCEP("1234567")).toBe(false)
});

