# 🎾 Torneo de Tenis - Frontend Angular

Interfaz de usuario del Sistema de Gestión de Torneos de Tenis, desarrollada con **Angular** y **Angular Material**, que se comunica con la API REST del backend mediante servicios HTTP.

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Arquitectura del Frontend](#arquitectura-del-frontend)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Requerimientos Funcionales](#requerimientos-funcionales)
- [Requerimientos No Funcionales](#requerimientos-no-funcionales)
- [Instalación y Configuración](#instalación-y-configuración)
- [Desarrollador](#desarrollador)

---

## 📌 Descripción del Proyecto

El frontend del **Sistema de Torneo de Tenis** es una aplicación SPA (Single Page Application) desarrollada con Angular que permite a los usuarios gestionar todos los elementos del torneo de forma visual e intuitiva. Se comunica con la API REST del backend a través de servicios HTTP y presenta la información usando componentes de Angular Material.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 19 | Framework frontend |
| Angular Material | 19.2.19 | Componentes UI |
| TypeScript | 5.x | Lenguaje principal |
| RxJS | 7.x | Manejo de observables |
| Node.js | 18+ | Entorno de ejecución |
| npm | 9+ | Gestión de dependencias |

---

## 🏗️ Arquitectura del Frontend

El frontend sigue el patrón **MBC (Model-Based Components)** de Angular:

```
┌─────────────────────────────────┐
│     Capa de Componentes         │  ← Vistas e interacción con el usuario
├─────────────────────────────────┤
│     Capa de Servicios           │  ← Comunicación HTTP con la API
├─────────────────────────────────┤
│     Capa Transversal (Modelos)  │  ← Interfaces TypeScript
└─────────────────────────────────┘
```

La comunicación con el backend se realiza mediante peticiones HTTP REST:

```
Angular (localhost:4200) ←──HTTP REST──→ Spring Boot API (localhost:9096)
```

---

## 📁 Estructura del Proyecto

```
torneo-tenis-app/
├── src/
│   └── app/
│       ├── arbitros/
│       │   ├── arbitros.component.ts
│       │   ├── arbitros.component.html
│       │   └── arbitros.component.css
│       ├── jugadores/
│       │   ├── jugadores.component.ts
│       │   ├── jugadores.component.html
│       │   └── jugadores.component.css
│       ├── torneos/
│       │   ├── torneos.component.ts
│       │   ├── torneos.component.html
│       │   └── torneos.component.css
│       ├── partidos/
│       │   ├── partidos.component.ts
│       │   ├── partidos.component.html
│       │   └── partidos.component.css
│       ├── models/
│       │   ├── jugador.ts
│       │   ├── arbitro.ts
│       │   ├── torneo.ts
│       │   └── partido.ts
│       ├── services/
│       │   ├── jugador.service.ts
│       │   ├── arbitro.service.ts
│       │   ├── torneo.service.ts
│       │   └── partido.service.ts
│       ├── app.component.ts
│       ├── app.component.html
│       ├── app.component.css
│       ├── app.config.ts
│       └── app.routes.ts
├── .gitignore
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🎮 Funcionalidades

### 🏃 Jugadores
- Registrar nuevos jugadores con todos sus datos (nombre, apellido, nacionalidad, correo, ranking, puntos acumulados y títulos)
- Ver la lista completa de jugadores en una tabla con Angular Material
- Eliminar jugadores del sistema
- Los puntos se actualizan automáticamente al registrar un ganador en un partido

### 👨‍⚖️ Árbitros
- Registrar árbitros con su información completa (nombre, apellido, nacionalidad, correo, licencia y años de experiencia)
- Ver la lista de árbitros registrados
- Eliminar árbitros del sistema

### 🏆 Torneos
- Registrar torneos con nombre, ciudad, país, fechas de inicio y fin, premio total, superficie y categoría
- Ver la lista de torneos registrados
- Calcular el premio al ganador según la categoría del torneo con un solo clic
- Eliminar torneos del sistema

### 📋 Partidos
- Registrar partidos asignando torneo, jugadores, árbitro, ronda y estado
- Registrar el ganador de un partido, actualizando automáticamente sus puntos según la ronda
- Ver la lista de partidos con nombres completos de jugadores, árbitro y torneo
- Eliminar partidos del sistema

---

## ✅ Requerimientos Funcionales

| ID | Descripción |
|---|---|
| RF01 | El sistema debe permitir registrar jugadores con nombre, apellido, nacionalidad, correo, ranking, puntos acumulados y títulos. |
| RF02 | El sistema debe permitir registrar árbitros con nombre, apellido, nacionalidad, correo, licencia y años de experiencia. |
| RF03 | El sistema debe permitir registrar torneos con nombre, ciudad, país, fechas, premio total, superficie y categoría. |
| RF04 | El sistema debe permitir registrar partidos asignando torneo, dos jugadores, árbitro, ronda y estado. |
| RF05 | El sistema debe validar que un jugador no pueda jugar contra sí mismo en un partido. |
| RF06 | El sistema debe permitir registrar el ganador de un partido y actualizar automáticamente sus puntos acumulados según la ronda. |
| RF07 | El sistema debe calcular el premio al ganador según la categoría del torneo. |
| RF08 | El sistema debe permitir listar, buscar y eliminar jugadores, árbitros, torneos y partidos. |

---

## 🔒 Requerimientos No Funcionales

| ID | Descripción |
|---|---|
| RNF01 | El sistema debe responder a las peticiones en menos de 3 segundos en condiciones normales de uso. |
| RNF02 | La API debe estar desarrollada en Java con Spring Boot y seguir el patrón de arquitectura en capas. |
| RNF03 | El frontend debe estar desarrollado en Angular siguiendo el patrón MVC. |
| RNF04 | La base de datos debe ser PostgreSQL. |
| RNF05 | El código debe seguir principios de POO: herencia, polimorfismo, encapsulamiento e interfaces. |
| RNF06 | El sistema debe aplicar el patrón de diseño Strategy para el cálculo de puntos por ronda. |

---

## ⚙️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+
- npm 9+
- Angular CLI 19
- La API backend debe estar corriendo en `http://localhost:9096`

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/dramirezdlp99/torneo-tenis-app-poo.git
```

2. Instala las dependencias:
```bash
cd torneo-tenis-app
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
ng serve
```

4. Abre el navegador en:
```
http://localhost:4200
```

> ⚠️ **Importante:** Asegúrate de tener la API corriendo en `http://localhost:9096` antes de usar el frontend.

### Rutas disponibles

| Ruta | Componente | Descripción |
|---|---|---|
| `/jugadores` | JugadoresComponent | Gestión de jugadores |
| `/arbitros` | ArbitrosComponent | Gestión de árbitros |
| `/torneos` | TorneosComponent | Gestión de torneos |
| `/partidos` | PartidosComponent | Gestión de partidos |

---

## 👨‍💻 Desarrollador

**David Fernando Ramírez de la Parra**

- 📚 Materia: Programación Orientada a Objetos
- 🏫 Facultad de Ingeniería — Ingeniería de Software
- 🎓 Universidad Cooperativa de Colombia