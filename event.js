// Get the search and filter forms
const searchForm = document.querySelector('#search-form');
const filterForm = document.querySelector('#filter-form');

// Get the event list
const eventList = document.querySelector('.event-list');

// Create an array of events
const events = [
  {
    id: 1,
    name: 'Concert',
    image: 'concert.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel metus at massa consequat blandit id id turpis.',
    date: '2023-04-01',
    time: '19:00',
    location: 'New York, NY',
    price: 20
  },
  {
    id: 2,
    name: 'Festival',
    image: 'festival.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel metus at massa consequat blandit id id turpis.',
    date: '2023-04-15',
    time: '12:00',
    location: 'Los Angeles, CA',
    price: 30
  },
  {
    id: 3,
    name: 'Workshop',
    image: 'workshop.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel metus at massa consequat blandit id id turpis.',
    date: '2023-05-01',
    time: '10:00',
    location: 'Chicago, IL',
    price: 10
  }
];

// Display all the events
function displayEvents(events) {
  let html = '';

  events.forEach(event => {
    html += `
      <div class="event-card">
        <img src="${event.image}" alt="${event.name}">
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <p>Date: ${event.date}</p>
        <p>Time: ${event.time}</p>
        <p>Location: ${event.location}</p>
        <p>Price: $${event.price}</p>
        <button>Book Now</button>
      </div>
    `;
  });

  eventList.innerHTML = html;
}

// Filter the events based on the search term and filter values
function filterEvents(searchTerm, filterValues) {
  let filteredEvents = [];

  // Filter the events by search term
  if (searchTerm) {
    filteredEvents = events.filter(event => {
      return event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             event.location.toLowerCase().includes(searchTerm.toLowerCase());
    });
  } else {
    filteredEvents = events;
  }

  // Filter the events by filter values
  if (filterValues.date) {
    filteredEvents = filteredEvents.filter(event => {
      return event.date === filterValues.date;
    });
  }

  if (filterValues.time) {
    filteredEvents = filteredEvents.filter(event => {
      return event.time === filterValues.time;
    });
  }

  if (filterValues.price) {
    filteredEvents = filteredEvents.filter(event => {
      return event.price <= filterValues.price;
    });
  }

  // Display the filtered events
  displayEvents(filteredEvents);
}

// Handle the search form submit event
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = e.target.elements.search.value.trim();
  const filterValues = {};

  filterEvents(searchTerm, filterValues);
});

// Handle the filter form submit event
filterForm.addEventListener('submit', e => {
  e.preventDefault();

});