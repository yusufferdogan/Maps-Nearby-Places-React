# Maps-Nearby-Places-React

This repository contains a React application that interacts with the Google Maps API to find and display nearby places based on user input for latitude, longitude, and radius. The application uses Redux for state management and Tailwind CSS for styling.

## Deployment

[https://maps-nearby-places-react.vercel.app/](https://maps-nearby-places-react.vercel.app/)

## Features

- **User Input Form:** Users can input latitude, longitude, and radius to search for nearby places.
- **Google Maps Integration:** Displays the searched places on a Google Map with markers.
- **Place Details:** Shows detailed information, including photos of the places.
- **Responsive Design:** Tailwind CSS ensures the application looks good on various screen sizes.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yusufferdogan/Maps-Nearby-Places-React.git
    cd Maps-Nearby-Places-React
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```
    REACT_APP_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
    ```

4. Start the development server:
    ```bash
    npm start
    ```

## Project Structure

- **src/components:** Contains React components such as `PlacesForm`, `PlacesMap`, and `Header`.
- **src/features:** Contains Redux slices for managing state.
  - **centerSlice.js:** Manages the center position of the map.
  - **placesSlice.js:** Manages the places data fetched from the backend API.
- **src/app:** Configures the Redux store.

## Usage

1. Open the application in your browser.
2. Enter the latitude, longitude, and radius in the form and click the "Search" button.
3. The map will update to show markers for the searched places, and a detailed view with photos will be displayed when clicking on a marker.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
