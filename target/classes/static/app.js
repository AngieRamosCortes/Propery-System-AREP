const API_URL = 'http://localhost:8080/api/properties';
let editingId = null;

const form = document.getElementById('form');
const propertiesList = document.getElementById('propertiesList');

document.addEventListener('DOMContentLoaded', loadProperties);

form.addEventListener('submit', handleSubmit);

async function loadProperties() {
    try {
        const response = await fetch(API_URL);
        const properties = await response.json();
        displayProperties(properties);
    } catch (error) {
        console.error('Error al cargar propiedades:', error);
        alert('Error al cargar las propiedades');
    }
}

function displayProperties(properties) {
    propertiesList.innerHTML = '';
    properties.forEach(property => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${property.address}</td>
            <td>$${property.price}</td>
            <td>${property.size} m²</td>
            <td>${property.description}</td>
            <td>
                <button onclick="editProperty(${property.id})" class="button">Editar</button>
                <button onclick="deleteProperty(${property.id})" class="button button-delete">Eliminar</button>
            </td>
        `;
        propertiesList.appendChild(row);
    });
}

async function handleSubmit(event) {
    event.preventDefault();
    
    const propertyData = {
        address: document.getElementById('address').value,
        price: parseFloat(document.getElementById('price').value),
        size: parseFloat(document.getElementById('size').value),
        description: document.getElementById('description').value
    };

    try {
        if (editingId) {
            await fetch(`${API_URL}/${editingId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(propertyData)
            });
        } else {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(propertyData)
            });
        }

        form.reset();
        editingId = null;
        loadProperties();
    } catch (error) {
        console.error('Error al guardar propiedad:', error);
        alert('Error al guardar la propiedad');
    }
}

async function editProperty(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const property = await response.json();
      
        document.getElementById('address').value = property.address;
        document.getElementById('price').value = property.price;
        document.getElementById('size').value = property.size;
        document.getElementById('description').value = property.description;
        
        editingId = id;
    } catch (error) {
        console.error('Error al cargar propiedad para editar:', error);
        alert('Error al cargar la propiedad para editar');
    }
}

async function deleteProperty(id) {
    if (confirm('¿Está seguro de que desea eliminar esta propiedad?')) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            loadProperties();
        } catch (error) {
            console.error('Error al eliminar propiedad:', error);
            alert('Error al eliminar la propiedad');
        }
    }
}