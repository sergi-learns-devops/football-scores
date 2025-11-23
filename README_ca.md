# EuroScore Live

Una aplicació moderna de resultats de futbol en temps real per a les principals lligues europees.

## Característiques

- **Resultats en temps real**: Vegeu resultats en viu i detalls dels partits.
- **Suport Multi-Lliga**: La Liga, Premier League, Serie A, Bundesliga, Ligue 1, Primeira Liga i competicions de la UEFA.
- **Navegació per Dates**: Consulteu resultats d'ahir, partits d'avui i calendaris per als pròxims 5 dies.
- **Detalls de Competició**: Vegeu classificacions, màxims golejadors i assistents de cada lliga.
- **Canals de TV**: Vegeu on mirar cada partit.
- **Interfície Moderna**: Mode fosc, disseny glassmorphism i disseny responsiu.

## Stack Tecnològic

- **Frontend**: React + Vite
- **Estils**: Vanilla CSS (Característiques modernes: Variables, Flexbox/Grid)
- **Enrutament**: React Router DOM
- **Icones**: Lucide React
- **Gestió de Dates**: date-fns

## Primers Passos

1.  **Instal·lar dependències**:
    ```bash
    npm install
    ```

2.  **Executar el servidor de desenvolupament**:
    ```bash
    npm run dev
    ```

3.  **Construir per a producció**:
    ```bash
    npm run build
    ```

## Estructura del Projecte

- `src/components`: Components d'UI reutilitzables (MatchCard, LeagueGroup, etc.)
- `src/pages`: Components de pàgina (Home, CompetitionView)
- `src/services`: Dades simulades (mock) i capa de servei
- `src/styles`: Estils globals i variables

## Nota

Aquesta aplicació utilitza **dades simulades (mock data)** per a fins de demostració ja que no s'ha proporcionat cap clau API externa. Les dades són estàtiques però estructurades per simular una resposta d'API real.
