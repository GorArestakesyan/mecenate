# Mecenate — Feed Screen

Test assignment for Mecenate: a feed screen for a creator-support platform (Patreon/Boosty analogue), built with React Native + Expo.

## Features

- Post feed with author avatar, name, cover image, preview text, likes and comments counters
- Cursor-based infinite pagination (load more on scroll)
- Pull-to-refresh
- Paid post overlay (`tier: "paid"`) — blurred cover with skeleton placeholders and donate CTA
- Error state with retry button
- Tab filtering — All / Free / Paid posts
- Like toggle with optimistic updates
- Empty state with navigation back to All tab

## Stack

| Layer | Technology |
|---|---|
| Language | TypeScript |
| Mobile | React Native 0.81 + Expo SDK 54 |
| Server state | TanStack React Query v5 |
| UI state | MobX 6 + mobx-react-lite |
| Navigation | React Navigation — Material Top Tabs |
| HTTP | Axios |
| Design tokens | Custom constants (Colors, Spacing, Typography) |
| Fonts | Manrope (via @expo-google-fonts) |
| Icons | react-native-svg + react-native-svg-transformer |

## Project Structure

```
src/
├── assets/          # SVG icons and images
├── common/          # Shared TypeScript types
├── config/          # Environment config (API URL, user ID)
├── constants/       # Design tokens: Colors, Spacing, Typography
├── providers/       # React context providers (Services, Query, Navigation)
├── screens/         # Screen-level components (FeedScreen)
├── services/        # DI container + Axios + API methods
├── ui-kit/          # Reusable design-system components
└── ui-modules/
    └── feed/
        ├── components/  # Feed-specific components
        ├── hooks/       # useFeed, useLike
        ├── navigation/  # Tab navigator + screens
        └── store/       # FeedStore (MobX)
```

## Prerequisites

- Node.js 18+
- Expo CLI: `yarn global add expo`
- Expo Go app on your device ([iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

## Setup

### 1. Clone and install

```bash
git clone <repo-url>
cd mecenate
yarn
```

### 2. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.development
```

| Variable | Description | Example |
|---|---|---|
| `APP_ENV` | Environment name | `development` |
| `API_BASE_URL` | Base URL of the Mecenate API | `https://k8s.mectest.ru/test-app` |
| `API_USER_ID` | Any valid UUID used as Bearer token | `550e8400-e29b-41d4-a716-446655440000` |

> The API accepts **any valid UUID** as the Bearer token — no registration needed.

Three env files are supported: `.env.development`, `.env.staging`, `.env.production`

### 3. Run

```bash
# Development (default)
yarn start

# Specific platform
yarn ios
yarn android
```

Scan the QR code with Expo Go.

## Available Scripts

| Script | Description |
|---|---|
| `yarn start` | Start Metro bundler (development) |
| `yarn ios` | Open on iOS simulator |
| `yarn android` | Open on Android emulator |
| `yarn lint` | Run ESLint |
| `yarn format` | Format all source files with Prettier |

## API

Base URL: `https://k8s.mectest.ru/test-app`  
Full spec: `https://k8s.mectest.ru/test-app/openapi.json`

Authentication: `Authorization: Bearer <uuid>`

| Endpoint | Method | Description |
|---|---|---|
| `/posts` | GET | Paginated feed, supports `cursor`, `limit`, `tier` |
| `/posts/:id` | GET | Single post |
| `/posts/:id/like` | POST | Toggle like (optimistic update) |
| `/posts/:id/comments` | GET | Paginated comments |
