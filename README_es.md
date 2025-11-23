# EuroScore Live

Una aplicación moderna de resultados de fútbol en tiempo real para las principales ligas europeas.

## Características

- **Resultados en tiempo real**: Vea resultados en vivo y detalles de los partidos.
- **Soporte Multi-Liga**: La Liga, Premier League, Serie A, Bundesliga, Ligue 1, Primeira Liga y competiciones de la UEFA.
- **Navegación por Fechas**: Consulte resultados de ayer, partidos de hoy y calendarios para los próximos 5 días.
- **Detalles de Competición**: Vea clasificaciones, máximos goleadores y asistentes de cada liga.
- **Canales de TV**: Vea dónde ver cada partido.
- **Interfaz Moderna**: Modo oscuro, diseño glassmorphism y diseño responsivo.

## Stack Tecnológico

- **Frontend**: React + Vite
- **Estilos**: Vanilla CSS (Características modernas: Variables, Flexbox/Grid)
- **Enrutamiento**: React Router DOM
- **Iconos**: Lucide React
- **Manejo de Fechas**: date-fns

## Primeros Pasos

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

3.  **Construir para producción**:
    ```bash
    npm run build
    ```

## Estructura del Proyecto

- `src/components`: Componentes de UI reutilizables (MatchCard, LeagueGroup, etc.)
- `src/pages`: Componentes de página (Home, CompetitionView)
- `src/services`: Datos simulados (mock) y capa de servicio
- `src/styles`: Estilos globales y variables

## Nota

Esta aplicación utiliza **datos simulados (mock data)** para fines de demostración ya que no se proporcionó ninguna clave API externa. Los datos son estáticos pero estructurados para simular una respuesta de API real.
