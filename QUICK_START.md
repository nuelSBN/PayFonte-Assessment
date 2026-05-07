# 🚀 Quick Start Guide

Get the PayFonte app running in 5 minutes!

## Prerequisites

- Node.js 18+
- npm or pnpm
- Expo CLI (optional): `npm install -g expo-cli`

## Installation (5 minutes)

### 1. Install Dependencies

```bash
cd payfonte
pnpm install
```

### 2. Start Development Server

```bash
pnpm start
```

You'll see:

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   Expo Go is ready to go.                                       │
│                                                                 │
│   ► Android:   Press "a" to open Android emulator or connect.  │
│   ► iOS:       Press "i" to open iOS simulator.                │
│   ► Web:       Press "w" to open the web interface.            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 3. Choose Your Platform

- **Android**: Press `a` (requires Android emulator or device)
- **iOS**: Press `i` (requires macOS)
- **Web**: Press `w` (runs in browser)

## What You'll See

1. **Countries List** - All available countries from PayFusion API
2. **Search Bar** - Search by country name or code
3. **Country Details** - Tap any country to see details
4. **Loading State** - While fetching data
5. **Error Handling** - If network fails

## Running Tests

```bash
# Run all tests once
pnpm test

# Watch mode (recommended for development)
pnpm test:watch
```

**Status**: All 16 tests passing ✅

- Component tests with react-test-renderer
- Hook tests with filtering logic
- API and utility tests

## Project Commands

```bash
# Start development
pnpm start

# Run tests
pnpm test
pnpm test:watch

# Platform specific
pnpm android
pnpm ios
pnpm web

# Build for production
expo build:android -t apk
```

## 🚀 EAS Build (Recommended for Production)

Install EAS CLI for cloud builds:

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Build for Android
eas build --platform android --profile production

# Build for iOS
eas build --platform ios --profile production

# Build both platforms
eas build --platform all --profile production
```

See [EAS_SETUP.md](EAS_SETUP.md) for detailed deployment instructions.

## Key Features to Try

✅ **Search**: Type in the search bar to filter countries
✅ **View Details**: Tap any country card to see full details
✅ **Refresh**: Pull down to refresh the list
✅ **Error Handling**: Network works seamlessly with caching
✅ **Offline**: Previously viewed countries are cached

## Project Structure

```
payfonte/
├── src/
│   ├── screens/          # Main screens
│   ├── components/       # UI components
│   ├── api/              # API integration
│   ├── hooks/            # Custom hooks
│   └── utils/            # Helper functions
├── __tests__/            # Test files
├── App.tsx               # Main app component
└── README.md             # Full documentation
```

## Common Issues & Solutions

### Metro bundler cache issue

```bash
expo start --clear
```

### Dependencies not installing

```bash
pnpm install --force
# or
npm install --force
```

### Port already in use

```bash
# Expo will ask to use a different port
# Press 'Y' to continue
```

## Next Steps

1. **Explore the Code**: Check out `src/screens/CountriesScreen.tsx`
2. **Read Docs**: See [README.md](README.md) for full documentation
3. **Run Tests**: `pnpm test:watch` to see tests in action
4. **Customize**: Modify colors in `src/styles/theme.ts`

## Features Implemented

### Core ✅

- Countries list from API
- Search & filter by name and code
- Country details screen
- Loading/error/empty states
- Pull-to-refresh functionality

### Advanced ✅

- React Query caching (5-min stale time)
- Offline support with in-memory cache
- Full test suite (16 tests, all passing)
- TypeScript throughout (full type safety)
- Comprehensive error handling
- Smooth animations
- Responsive design

## Resources

- [📖 Full README](README.md)
- [🏗️ Architecture Guide](ARCHITECTURE.md)
- [✨ Advanced Features](ADVANCED.md)
- [📋 Implementation Checklist](IMPLEMENTATION.md)

## Need Help?

1. Check [README.md](README.md) for detailed setup
2. See [ARCHITECTURE.md](ARCHITECTURE.md) for code structure
3. Review [ADVANCED.md](ADVANCED.md) for feature details
4. Check test files for usage examples

---

**Ready to code?** Start with `pnpm start` 🎉
