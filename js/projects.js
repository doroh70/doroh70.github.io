document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.github.com/users/doroh70/repos')
      .then(response => response.json())
      .then(repos => {
        const projectsContainer = document.getElementById('github-projects');
        if (projectsContainer) {
          // Create the row element
          const row = document.createElement('div');
          row.className = 'row row-cols-1 row-cols-md-3 g-4';
  
          // Array of color classes
          const colorClasses = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
          let colorIndex = 0;
  
          repos.forEach(repo => {
            // Create the column element
            const col = document.createElement('div');
            col.className = 'col';
  
            // Create the card element
            const card = document.createElement('div');
            card.classList.add('card', `border-${colorClasses[colorIndex % colorClasses.length]}`, 'h-100');
  
            card.innerHTML = `
                <div class="card-body">
                  <h5 class="card-title">${repo.name}</h5>
                  <p class="card-text">${repo.description}</p>
                  <p><strong>Primary Language:</strong> ${repo.language}</p>
                  <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                </div>
                <div class="card-footer">
                  <small><strong>Created at: </strong>${new Date(repo.created_at).toLocaleDateString()}</small>
                </div>
            `;
  
            // Append the card to the column, and the column to the row
            col.appendChild(card);
            row.appendChild(col);
  
            // Increment colorIndex for the next card
            colorIndex++;
          });
  
          // Append the row to the projects container
          projectsContainer.appendChild(row);
        }
      })
      .catch(error => console.error('Error fetching repos:', error));
  });
  