-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS property_system;
USE property_system;

-- Crear la tabla de propiedades
CREATE TABLE IF NOT EXISTS property (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    size DOUBLE NOT NULL,
    description TEXT
);

-- Insertar algunos datos de ejemplo (opcional)
INSERT INTO property (address, price, size, description) VALUES
    ('Calle 123 #45-67', 250000.00, 120.5, 'Casa de 3 habitaciones con jardín'),
    ('Avenida Principal #89-12', 180000.00, 85.0, 'Apartamento moderno con vista a la ciudad'),
    ('Carrera 78 #34-56', 320000.00, 150.0, 'Casa familiar con piscina');