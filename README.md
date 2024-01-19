# Projekt README: Blogg, Recept Sida, Chatt App

## Inledning

Detta projekt innefattar skapandet av tre olika webbplatser: en Blogg sida, en Recept hemsida, och en Chatt App. Varje sida har sina egna specifika instruktioner och krav för att uppnå både Grund (G) och Väl Godkänt (VG) betyg.

## Gemensamma attribut för alla sidor

- **Auth Funktioner:**
  - Inloggning med säkerhetsaspekter (email & password).
- **CRUD Funktionalitet:**
  - Alla sidor tillåter någon form av Create, Read, Update, och Delete-operationer.
- **Design:**
  - Varje sida ska ha någon form av design, och det är upp till utvecklaren hur mycket tid som läggs på detta. Det bör vara tydligt för en utomstående vad varje sida handlar om.
- **Server och Databas:**
  - Alla sidor ska koppla upp mot en fristående Node Express server med Mongoose databas.
- **Frontend:**
  - Utvecklaren har friheten att välja frontend-teknologier inom ramen för JavaScript eller TypeScript.

## Blogg Sida (User, Post, Comment)

### Krav för Grund (G)

- Användare kan registrera sig och logga in.
- Användare kan läsa blogginlägg.
- Inloggad användare kan skapa blogginlägg.
- Inloggad eller ej kan kommentera blogginlägg.

### Krav för Väl Godkänt (VG)

- Administratör kan ta bort både blogginlägg och kommentarer.
- Automatisk censurering av "opassande språk" i blogginlägg och kommentarer.

## Recept Sida (User, Recipe, Review)

### Krav för Grund (G)

- Användare kan registrera sig och logga in.
- Användare kan se recept.
- Inloggad användare kan skapa recept.
- Inloggad användare kan uppdatera och ta bort sina egna recept.
- Inloggad användare kan sätta ett recept som favorit.
- Inloggad användare kan skriva recensioner av recept.

### Krav för Väl Godkänt (VG)

- Endast användaren som har skapat ett recept kan uppdatera eller ta bort det.
- Användare kan inte gilla sina egna recept; alla likes samlas på den som har skapat receptet.

Exempel:

```plaintext
John Doe
john@doe.com
23 ❤️
```

## Chatt App (User, Message, Contact, (Conversation))

### Krav för Grund (G)

- Användare kan registrera sig och logga in.
- Användare kan se sina kontakter och påbörjade konversationer.
- Inloggad användare kan söka på kontakter för att filtrera listan.
- Inloggad användare kan starta en ny konversation och skicka meddelanden till sina kontakter.
- Användare kan ta bort en konversation och blockera kontakter.

### Krav för Väl Godkänt (VG)

- Om en användare skickar ett meddelande och det tas emot, markeras konversationen som aktiv.
  - Aktiva konversationer visas högst upp i listan över
- Varje meddelande ska ha en tidsstämpel och användaren ska kunna se när det senast var aktivitet i en konversation
    - Detta gör det möjligt för användaren att snabbt identifiera nyligen aktiva konversationer.