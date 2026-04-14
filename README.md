# Mecenate — Feed & Post Detail

Test assignment for Mecenate: a feed and post detail interface for a creator-support platform (Patreon/Boosty analogue), built with React Native + Expo.

## Features

### Feed Screen
- Post feed with author avatar, name, cover image, preview text, likes and comments counters
- Cursor-based infinite pagination (load more on scroll)
- Pull-to-refresh
- Paid post overlay (`tier: "paid"`) — blurred cover with skeleton placeholders and donate CTA
- Error state with retry button
- Tab filtering — All / Free / Paid posts
- Like toggle with optimistic updates and haptic feedback
- Empty state with navigation back to All tab
- Tap posts to view full details

### Post Detail Screen
- Full post content with author details and cover image
- Comments list with infinite pagination
- Comment composer with send button
- Like counts and toggle with animated feedback
- Sort comments by newest or oldest
- Real-time updates via WebSocket (likes and new comments)
- Comment like counts (client-side)

## Stack

| Layer | Technology |
|---|---|
| Language | TypeScript |
| Mobile | React Native 0.81 + Expo SDK 54 |
| Server state | TanStack React Query v5 |
| UI state | MobX 6 + mobx-react-lite |
| Navigation | React Navigation 7 (Native Stack + Material Top Tabs) |
| HTTP | Axios |
| Real-time | WebSocket (native) |
| Animations | React Native Reanimated v4 |
| Haptics | Expo Haptics |
| Design tokens | Custom constants (Colors, Spacing, Typography) |
| Fonts | Manrope (via @expo-google-fonts) |
| Icons | react-native-svg + react-native-svg-transformer |

## Project Structure

```
src/
├── assets/          # SVG icons and images
├── common/          # Shared TypeScript types and entities
├── config/          # Environment config (API URL, user ID)
├── constants/       # Design tokens: Colors, Spacing, Typography, Routes
├── navigation/      # React Navigation setup,
├── providers/       # React context providers (Services, Query, Navigation)
├── screens/         # Screen-level components,
├── services/        # DI container + Axios + API + WebSocket,
├── stores/          # MobX storesm
├── ui-kit/          # Reusable design-system components
└── ui-modules/
    └── feed/
        ├── components/  # Feed-specific components (Feed, Post, Comment UI)
        └── hooks/       # Feed hooks (useFeed, useLike, useComments, useWebSocket)
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
WebSocket URL: `wss://k8s.mectest.ru/test-app/ws?token=<uuid>`  
Full spec: `https://k8s.mectest.ru/test-app/openapi.json`

Authentication: `Authorization: Bearer <uuid>`

### REST Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/posts` | GET | Paginated feed, supports `cursor`, `limit`, `tier` |
| `/posts/:id` | GET | Single post |
| `/posts/:id/like` | POST | Toggle like (optimistic update) |
| `/posts/:id/comments` | GET | Paginated comments, supports `cursor`, `limit` |
| `/posts/:id/comments` | POST | Add comment (body: `{ text }`) |
