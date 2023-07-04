 import { phoneBook_backend } from "../../declarations/phoneBook_backend";

const contactForm = document.getElementById('contactForm');
 const cardContainer = document.getElementById('cardContainer');

    window.addEventListener('load', async(e)=>{
      displayContacts()
    })

    contactForm.addEventListener('submit',async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const desc = document.getElementById('description').value;
      const phone = document.getElementById('number').value;
      
      const result = await phoneBook_backend.insert(name,desc,phone);
      console.log(result);

      displayContacts();
      contactForm.reset();
    });

    async function displayContacts() {
      cardContainer.innerHTML = '';

      const results = await phoneBook_backend.getAllContacts()

      for (const contact of results) {
        const card = document.createElement('div');
        card.classList.add('card');

        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${contact.name}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = `Description: ${contact.desc}`;

        const numberElement = document.createElement('p');
        numberElement.textContent = `Number: ${contact.phone}`;

        card.appendChild(nameElement);
        card.appendChild(descriptionElement);
        card.appendChild(numberElement);

        cardContainer.appendChild(card);
      }
    }

