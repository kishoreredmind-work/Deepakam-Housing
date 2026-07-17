// Project Filtering Utility (projects.html)
document.addEventListener('DOMContentLoaded', () => {
  setupProjectFilters();
});

function setupProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.projects-grid [data-location]');

  if (filterTabs.length === 0 || projectCards.length === 0) return;

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // 1. Update active styling
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 2. Read filter criteria
      const criteria = tab.getAttribute('data-filter').toLowerCase(); // e.g. "all", "chennai", "palakkad", "completed", "ongoing"

      projectCards.forEach(card => {
        const location = card.getAttribute('data-location').toLowerCase();
        const status = card.getAttribute('data-status').toLowerCase();

        let show = false;

        if (criteria === 'all') {
          show = true;
        } else if (criteria === 'chennai' || criteria === 'palakkad') {
          show = (location === criteria);
        } else if (criteria === 'completed' || criteria === 'ongoing') {
          show = (status === criteria);
        }

        // 3. Apply state with smooth CSS transitions
        if (show) {
          card.style.display = '';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300); // match transition duration
        }
      });
    });
  });
}
