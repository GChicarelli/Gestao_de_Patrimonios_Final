USE GestaoPatrimonios
GO

-- ENDEREÇO
INSERT INTO Endereco (
    Logradouro,
    Numero,
    Complemento,
    CEP,
    BairroID
)
VALUES (
    'Rua Exemplo',
    100,
    'Casa',
    '09510-000',
    (SELECT TOP 1 BairroID FROM Bairro)
);
GO

-- USUÁRIO GIULIANO
INSERT INTO Usuario (
    NIF,
    Nome,
    RG,
    CPF,
    CarteiraTrabalho,
    Senha,
    Email,
    EnderecoID,
    CargoID,
    TipoUsuarioID
)
VALUES (
    '7654321',
    'Giuliano',
    '123456789',
    '12345678901',
    '12345678901234',

    HASHBYTES('SHA2_256', '123456'),

    'giuliano@email.com',

    (SELECT TOP 1 EnderecoID 
     FROM Endereco 
     ORDER BY EnderecoID DESC),

    (SELECT CargoID 
     FROM Cargo 
     WHERE NomeCargo = 'Diretor'),

    (SELECT TipoUsuarioID 
     FROM TipoUsuario 
     WHERE NomeTipo = 'Coordenador')
);
GO

SELECT 
    Nome,
    Email,
    NIF,
    Ativo
FROM Usuario
WHERE Nome = 'Giuliano';