// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme based on system preference
document.documentElement.setAttribute('data-theme', 
    prefersDarkScheme.matches ? 'dark' : 'light'
);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
});

// Note data
const notes = {
    1: {
        title: "Project Ideas",
        date: "Today at 2:30 PM",
        content: `Project Ideas for Q2 2024

1. Enhanced User Authentication
   - Implement biometric login
   - Two-factor authentication
   - Single sign-on integration

2. Performance Optimization
   - Code splitting and lazy loading
   - Image optimization pipeline
   - Caching strategy implementation

3. Mobile App Features
   - Offline mode support
   - Push notifications
   - Cross-device sync

4. Analytics Dashboard
   - Real-time user tracking
   - Custom report generation
   - Data visualization improvements

5. API Enhancements
   - GraphQL implementation
   - Rate limiting
   - API versioning

Next Steps:
- Schedule team review meeting
- Create technical specifications
- Set up project milestones
- Assign team responsibilities

Resources needed:
- Frontend developer (2)
- Backend developer (2)
- UI/UX designer (1)
- QA engineer (1)

Timeline:
April - Planning and Design
May - Development
June - Testing and Deployment`
    },
    2: {
        title: "Meeting with Design Team",
        date: "Yesterday",
        content: `Design Team Meeting Notes - UI/UX Review

Attendees:
- Sarah (Lead Designer)
- Mike (Product Manager)
- Alex (UI Developer)
- Jessica (UX Researcher)

Key Discussion Points:

1. Dashboard Redesign
   - Simplified navigation structure
   - New card-based layout
   - Improved data visualization
   - Accessibility improvements

2. User Research Findings
   - Pain points in current workflow
   - Feature requests from power users
   - Mobile usage patterns

3. Design System Updates
   - New color palette
   - Typography refinements
   - Component library expansion
   - Dark mode improvements

Action Items:
- Update design system documentation
- Create high-fidelity prototypes
- Schedule user testing sessions
- Review implementation timeline

Next Meeting: Next Tuesday at 10 AM`
    },
    3: {
        title: "Reading List",
        date: "2 days ago",
        content: `Technical Reading List

Books:
1. Design Patterns: Elements of Reusable Object-Oriented Software
   - Authors: Gang of Four
   - Priority: High
   - Notes: Focus on practical applications

2. Clean Code: A Handbook of Agile Software Craftsmanship
   - Author: Robert C. Martin
   - Priority: High
   - Notes: Study refactoring examples

3. Refactoring: Improving the Design of Existing Code
   - Author: Martin Fowler
   - Priority: Medium
   - Notes: Review code smells section

4. Domain-Driven Design
   - Author: Eric Evans
   - Priority: Medium
   - Notes: Focus on strategic design

5. The Pragmatic Programmer
   - Authors: Andrew Hunt, David Thomas
   - Priority: Low
   - Notes: Read career advice section

Articles to Read:
- Modern JavaScript Best Practices
- React Performance Optimization
- GraphQL vs REST
- Microservices Architecture
- Cloud Native Applications`
    },
    4: {
        title: "Travel Plans",
        date: "Last week",
        content: `Summer Vacation 2024

Flight Details:
- Departure: JFK → LHR
- Date: July 15, 2024
- Flight: BA178
- Time: 10:30 PM
- Duration: 7h 20m

Hotel Booking:
The Savoy, London
- Check-in: July 16
- Check-out: July 23
- Room: Deluxe King
- Confirmation: #LDN24578

Itinerary:

Day 1 (July 16):
- Hotel check-in
- Westminster area walking tour
- London Eye sunset ride

Day 2 (July 17):
- Tower of London
- Borough Market lunch
- Tate Modern

Day 3 (July 18):
- British Museum
- Afternoon tea at Fortnum & Mason
- West End show

Day 4 (July 19):
- Day trip to Bath
- Roman Baths tour
- Bath Abbey

Remaining days to be planned...

Important Numbers:
- Hotel: +44 20 7836 4343
- Local contact: +44 7700 900077
- Emergency: 999`
    },
    5: {
        title: "Recipe Collection",
        date: "2 weeks ago",
        content: `Family Recipe Collection

1. Grandma's Special Pasta Sauce
Ingredients:
- 2 cans San Marzano tomatoes
- 4 cloves garlic, minced
- 1 large onion, finely chopped
- Fresh basil
- Olive oil
- Salt and pepper to taste

Instructions:
1. Sauté garlic and onions
2. Add tomatoes and simmer
3. Season and add fresh basil
4. Cook for 2-3 hours

2. Classic Chocolate Chip Cookies
Ingredients:
- 2 1/4 cups flour
- 1 cup butter
- 3/4 cup sugar
- 3/4 cup brown sugar
- 2 eggs
- 1 tsp vanilla
- 1 tsp baking soda
- 1/2 tsp salt
- 2 cups chocolate chips

Instructions:
1. Cream butter and sugars
2. Add eggs and vanilla
3. Mix dry ingredients
4. Fold in chocolate chips
5. Bake at 375°F for 10-12 minutes

3. Summer Berry Pie
[Recipe details to be added...]

4. Mom's Meatballs
[Recipe details to be added...]

5. Holiday Mulled Wine
[Recipe details to be added...]`
    }
};

// Note selection functionality
const notesList = document.getElementById('notes-list');
const noteItems = notesList.getElementsByClassName('note-item');
const noteTitle = document.querySelector('.note-title');
const noteContent = document.querySelector('textarea');

Array.from(noteItems).forEach(note => {
    note.addEventListener('click', () => {
        // Remove active class from all notes
        Array.from(noteItems).forEach(item => {
            item.classList.remove('active');
        });
        // Add active class to clicked note
        note.classList.add('active');
        
        // Update editor content
        const noteId = note.getAttribute('data-note-id');
        const noteData = notes[noteId];
        noteTitle.value = noteData.title;
        noteContent.value = noteData.content;
        
        // Reset textarea height
        noteContent.style.height = 'auto';
        noteContent.style.height = noteContent.scrollHeight + 'px';
    });
});

// Auto-resize textarea
const textarea = document.querySelector('textarea');
textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    Array.from(noteItems).forEach(note => {
        const title = note.querySelector('h3').textContent.toLowerCase();
        const content = note.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
});