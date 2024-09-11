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
-  Visitors/Newcomers: Wanting to explore Toronto’s best spots for a memorable outing

>✨Users will browse, search, and filter date spots based on type, rating, and location.They can submit their favorite spots, leave reviews, and update information about existing spots.The app must account for mobile accessibility, as users may want to look up spots while on the go. ✨

### Features
1. 💡 Browse Date Spots: Users can view a list of recommended date spots with details such as location, type, and rating.
2. 🔍 Filter and Search: Users can filter spots by activity type (e.g., café, park, outdoor) and search by name or neighborhood.
3. ➕ Add/Update/Delete a Date Spot: Users can edit their own date spot recommendations by filling in details like name, description, and location.
4. 🗺️ Map Integration: A map to visually display the locations of date spots, helping users find nearby options.
5. ⭐User Ratings/Reviews: Users can rate and review date spots, contributing to the community-driven recommendations.
6. ❤️ Favorite Spots: Users can mark spots as favorites for quick access.


## Implementation
### Tech Stack
- Frontend: React, HTML, CSS, SASS (for styling)
- Backend: Express.js
- Database: MongoDB or Firebase (for storing date spots and user data)
- API Integration: Google Maps API (for displaying date spot locations)

### Libraries/Tools:
- Axios for making HTTP requests
- React Router for managing page navigation
- Google Maps API for map integration
- MongoDB/Firebase for storing and retrieving dynamic data

### APIs
Google Maps API: For fetching and displaying map locations of date spots.

### 🏙️️Sitemap
Home Page: Browse featured date spots, search and filter options, and access to the map view.
Date Spot List Page: Displays all date spots in a list with details.
Date Spot Detail Page: View detailed information about a specific spot, including reviews and ratings.
Add/Edit Date Spot Page: A form for users to submit new date spots or edit existing ones.
Map Page: A map showing the locations of all date spots.

### 🎨Mockups
Home Page: Displays a list of date spots with a search bar and filter options.
Detail Page: Shows a single spot's details, reviews, and rating.
Form Page: Includes fields for submitting or editing date spots.
Map Page: Embedded map with location pins of date spots

### Data

| Date Spot Data | Type |
| ------ | ------ |
| Name | string |
| Location | string or coordinates |
| Rating | number |
| Type | café, park, etc |
| Category | Outdoor active, indoor, artisy, etc |
| Reviews | array of comments/ratings|
| SubmittedBy | user info |

| Date Spot Data | Type |
| ------ | ------ |
| UserName | [string |
| Email | string |
| FavoriteSpots | array of spot IDs |

### Endpoints
- GET /spots: Fetch all date spots
Response: Array of spots
- GET /spots/:id Fetch a specific date spot by ID
Response: Spot details
- POST /spots Create a new date spot
Body Parameters: Name, description, location, rating, type
Response: Created spot
- PUT /spots/ Update an existing date spot
Body Parameters: Updated fields (name, description, etc.)
Response: Updated spot
- DELETE /spots/ Delete a specific date spot
Response: Confirmation message


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


