document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
    const changeDevourBtns = document.querySelectorAll('.change-devour');
  
 
    if (changeDevourBtns) {
      changeDevourBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          const id = e.target.getAttribute('data-id');
          const newName = e.target.getAttribute('data-devour');
  
          const newBurger = {
            burger: newName,
          };
  
          fetch(`/api/burgers/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            body: JSON.stringify(newBurger),
          }).then((response) => {
            if (response.ok) {
              console.log(`change burger to: ${newName}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    // CREATE
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  
        const newDevour = {
          name: document.getElementById('daburger').value.trim(),
          sleepy: document.getElementById('no').checked,
        };
  
        // Send POST request to create a new quote
        fetch('/api/burgers', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(newBurger),
        }).then(() => {
          document.getElementById('daburger').value = '';
  
          console.log('Burger coming up!');
          location.reload();
        });
      });
    }
  
    const deleteBurgerBtns = document.querySelectorAll('.delete-burger');
  
    
    deleteBurgerBtns.forEach((button) => {
      button.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
  
        
        fetch(`/api/burgers/${id}`, {
          method: 'DELETE',
        }).then((res) => {
          console.log(res);
          console.log(`Burger cancled: ${id}`);
  
          // Reload the page
          location.reload();
        });
      });
    });
  });
  