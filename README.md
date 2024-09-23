# 💘DateScape Toronto
### Author

Huiyi Wang
## Overview
DateScape Toronto is a dynamic web application designed to help users find the best date spots in Toronto. It allows users to explore, create, update, and manage date spots based on location, activity type, and user ratings, offering an intuitive way to plan a memorable date.

### 🛠️Problem Space
Finding great date spots can be challenging, especially in a city as large and diverse as Toronto. Often, people resort to generic spots or struggle to discover unique places that match their preferences. DateScape Toronto addresses this by providing curated recommendations and allowing users to share and rate their favorite date experiences, creating a community-driven solution.

### 👥Target User Profile
- Couples: Looking to plan a date that suits their style—whether casual, romantic, or adventurous. 
- Singles: Seeking unique places to impress on a first date.
- Visitors/Newcomers: Wanting to explore Toronto’s best spots for a memorable outing

>✨Users will discover various locations with an interactive map interface. Each location is presented in a card format, showcasing essential details such as the name, address, and description, along with a custom pin on the map to highlight its position. After choosing their favorite location card, users can choose a favorite spots and send a personalized note to their date✨

### Features
1. 💡 Browse Date Spots: Users can view a list of recommended date spots with details such as location, type, and rating.
2. 🔍 Filter and Search: Users can filter spots by activity type (e.g., café, park, outdoor) and search by name or neighborhood.
3. 🗺️ Map Integration: A map to visually display the locations of date spots, helping users find nearby options.
4. ❤️ Favorite Spots: Users can choose a favorite spots and send a personalized note to their date.

## Implementation
### Tech Stack
- Frontend: React, HTML, CSS, SASS (for styling)
- MapLibre GL: For rendering the interactive map and handling geospatial data.
- API Integration: Open AI API (for displaying date spot locations)

### Libraries/Tools:
- Axios for making HTTP requests
- React Router for managing page navigation

### APIs
Open AI API: For fetching and displaying map locations of date spots.

### 🏙️️Sitemap
- Home Page: Welcome users
- About Page: Learn more about the application and its purpose
- Explore Page: Browse featured date spots, search and filter options, and access to the map view.

### 🎨Snoopy-theme Mockups
- Home Page: Welcome users with simple interactions and link to explore page.
- About Page: Information about the application and its purpose.
- Explore Page:  Includes fields for submitting or editing date spots.  Displays a list of date spots with a search bar and filter options. Embedded map with location pins of date spots. Shows a single spot's details, reviews, and rating.

### Data

| Date Spot Data | Type |
| ------ | ------ |
| Name | string |
| Location | string or coordinates |
| Hobby | Outdoor active, indoor, artisy, etc |
| Interest | additional user request: budget, allegry etc |
| SubmittedBy | user info |


## Roadmap
1. Setup and Core Features
Set up the project structure, Initialize the database and Create basic frontend components 
2. Testing and Optimization
Refine UI and style with SASS. Ensure responsive design for mobile and desktop. Test CRUD operations, fix bugs, and optimize functionality.
3. Finalization
Finalize project. Review code and prepare for submission.

## Future Implementations
- User Authentication: Allow users to log in, submit spots under their accounts, and save favorites.
- Recommendations: Use AI to recommend date spots based on past user interactions.
- Social Sharing: Add the ability for users to share date spots on social media.


