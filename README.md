# EuroScore Live

A modern, real-time football scores application for major European leagues.

## Features

- **Real-time Scores**: View live scores and match details.
- **Multi-League Support**: La Liga, Premier League, Serie A, Bundesliga, Ligue 1, Primeira Liga, and UEFA Competitions.
- **Date Navigation**: Check results from yesterday, today's matches, and schedules for the next 5 days.
- **Competition Details**: View standings, top scorers, and assists for each league.
- **TV Channels**: See where to watch each match.
- **Modern UI**: Dark mode, glassmorphism design, and responsive layout.

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Vanilla CSS (Modern features: Variables, Flexbox/Grid)
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Date Handling**: date-fns

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Project Structure

- `src/components`: Reusable UI components (MatchCard, LeagueGroup, etc.)
- `src/pages`: Page components (Home, CompetitionView)
- `src/services`: Mock data and service layer
- `src/styles`: Global styles and variables

## Note

This application uses **mock data** for demonstration purposes as no external API key was provided. The data is static but structured to simulate a real API response.
