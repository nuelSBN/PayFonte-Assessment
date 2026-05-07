# PayFonte - React Native Countries App

A modern React Native application built with Expo and TypeScript that integrates with PayFusion public APIs to display and manage countries.

## 🎯 Overview

This app demonstrates a professional React Native implementation with the following features:

- **Countries Display**: Fetch and display countries from PayFusion API
- **Search & Filter**: Real-time search by country name or code
- **Country Details**: Detailed view of selected country information
- **Offline Caching**: Built-in caching mechanism for offline support
- **Error Handling**: Comprehensive loading, error, and empty states
- **Modern UI**: Clean, intuitive interface with smooth interactions
- **Type Safety**: Full TypeScript support throughout the application
- **Testing**: Comprehensive unit tests for hooks, components, and utilities (16 tests, all passing)

## 📋 Features

### Core Features

✅ Fetch countries from `https://api.payfonte.com/payfusion/public/v1/countries`  
✅ Display country name, code, currency, and locale  
✅ Loading, error, and empty states  
✅ Search and filter functionality  
✅ Country details view  
✅ Navigation between screens

### Bonus Features

✅ React Query for efficient data fetching and caching  
✅ Offline caching support  
✅ Unit/component tests  
✅ Comprehensive error handling  
✅ TypeScript best practices  
✅ Clean code architecture

## 🛠️ Tech Stack

- **React Native** 0.81.5
- **Expo** 54.0.33
- **React** 19.1.0
- **TypeScript** 5.9.2
- **React Query** (@tanstack/react-query) - Data fetching and caching
- **React Navigation** - Navigation between screens
- **Axios** - HTTP client for API calls
- **Jest** - Testing framework
- **react-test-renderer** - Component testing for React Native

## 📁 Project Structure

```
payfonte/
├── src/
│   ├── api/                 # API integration
│   │   └── countries.ts     # Countries API client
│   ├── components/          # Reusable components
│   │   ├── CountryCard.tsx  # Country card component
│   │   ├── SearchBar.tsx    # Search input component
│   │   ├── LoadingIndicator.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── EmptyState.tsx
│   ├── hooks/               # Custom React hooks
│   │   └── useCountries.ts  # Countries data fetching hook
│   ├── screens/             # Screen components
│   │   ├── CountriesScreen.tsx    # Main countries list
│   │   └── CountryDetailsScreen.tsx # Country details
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   └── storage.ts       # Caching utilities
│   └── styles/              # Global styles (if needed)
├── __tests__/               # Test files
│   ├── hooks/
│   ├── components/
│   └── api/
├── App.tsx                  # Main app component
├── app.json                 # Expo configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── jest.config.js           # Jest configuration
└── babel.config.js          # Babel configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- Expo CLI: `npm install -g expo-cli`
- An Expo account (optional, for publishing)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd payfonte
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the Expo development server**
   ```bash
   pnpm start
   # or
   npm start
   ```

### Running on Different Platforms

**Android**

```bash
pnpm android
# or press 'a' in Expo CLI
```

**iOS** (macOS only)

```bash
pnpm ios
# or press 'i' in Expo CLI
```

**Web**

```bash
pnpm web
# or press 'w' in Expo CLI
```

## 📱 Usage

1. Launch the app on your preferred platform
2. The app automatically fetches countries from the API on load
3. Use the search bar to filter countries by name or country code
4. Tap any country card to view detailed information
5. Pull down to refresh the country list
6. Offline mode: Previously cached data is available when offline

## 🧪 Testing

Run tests to verify the application:

```bash
pnpm test
# or
npm test

# Run tests in watch mode
pnpm test:watch
```

**Test Results**: All 16 tests passing ✅

- 4 component tests (LoadingIndicator, ErrorMessage, EmptyState, CountryCard)
- 2 hook tests (useCountries data fetching and filtering)
- 2 utility tests (helpers and storage)
- 1 API test (countries endpoint)

## 📊 API Integration

### Endpoint

```
GET https://api.payfonte.com/payfusion/public/v1/countries
```

### Response Format

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "code": "string",
      "currency": "string",
      "locale": "string"
    }
  ],
  "total": number
}
```

## 🔑 Key Implementation Details

### Data Fetching with React Query

- Implements stale-time of 5 minutes
- Automatic retry on failure (up to 2 times)
- Server state management for optimal performance
- Garbage collection after 10 minutes of inactivity

### Offline Caching

- In-memory caching with 5-minute TTL
- Can be extended with AsyncStorage for persistent storage
- Seamless fallback when offline

### State Management

- Uses React Query for server state
- Local React state for UI interactions
- Separation of concerns between data and UI

### Error Handling

- Network error detection and user-friendly messages
- Loading states for better UX
- Empty state when no results found
- Graceful degradation

## 🎨 UI/UX Features

- **Clean Design**: Minimalist, modern interface
- **Responsive Layout**: Works on all screen sizes
- **Smooth Interactions**: Tap feedback and transitions
- **Accessibility**: Clear labels and readable text
- **Visual Hierarchy**: Proper use of typography and spacing
- **Color Scheme**: Professional blue and neutral tones

## 🔐 TypeScript Best Practices

- Full type safety throughout the app
- Proper interface definitions for API responses
- Type-safe component props
- No `any` types used
- Strict null checks enabled

## 📈 Performance Optimizations

- React Query caching prevents unnecessary API calls
- Component memoization where beneficial
- Efficient list rendering with FlatList
- Lazy loading of screens
- Optimized re-renders

## 🐛 Troubleshooting

### Metro bundler issues

```bash
expo start --clear
```

### Dependencies not installed

```bash
pnpm install --force
# or
npm install --force
```

### Clear cache and rebuild

```bash
expo start --clear
# Then stop and restart
```

## 📝 Development Workflow

1. **Create a feature branch**

   ```bash
   git checkout -b feature/feature-name
   ```

2. **Make changes and test**

   ```bash
   pnpm test
   ```

3. **Commit with meaningful messages**

   ```bash
   git commit -m "feat: add country filtering"
   ```

4. **Push and create a pull request**
   ```bash
   git push origin feature/feature-name
   ```

## 🚀 Deployment

### Using EAS Build (Recommended)

EAS (Expo Application Services) is the recommended way to build your app for production.

#### Prerequisites

```bash
# Install EAS CLI globally
npm install -g eas-cli

# Login to your Expo account
eas login
```

#### Development Build

```bash
# Create a development build (use for local testing with dev client)
eas build --platform android --profile development
eas build --platform ios --profile development
```

#### Preview Build (Internal Testing)

```bash
# Create preview builds for testing (APK on Android, Simulator build on iOS)
eas build --platform android --profile preview
eas build --platform ios --profile preview
```

#### Staging Build

```bash
# Create staging builds (App Bundle on Android, Archive on iOS)
eas build --platform android --profile staging
eas build --platform ios --profile staging
```

#### Production Build

```bash
# Create production builds ready for app stores
eas build --platform android --profile production
eas build --platform ios --profile production

# Or build for both platforms simultaneously
eas build --platform all --profile production
```

### Submit to App Stores

```bash
# Submit Android build to Google Play
eas submit --platform android --latest

# Submit iOS build to App Store (requires Apple Developer account)
eas submit --platform ios --latest
```

### GitHub Actions (Automated CI/CD)

This project includes GitHub Actions workflows for automated Android builds.

#### Quick Setup (5 minutes)

1. **Configure Build Credentials**

   ```bash
   ./scripts/setup-eas-credentials.sh
   ```

   - Generates Android keystore automatically (for EAS)
   - Or use your own keystore

2. **Add EXPO_TOKEN to GitHub Secrets**
   - Go to Repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `EXPO_TOKEN`
   - Value: Get from `eas secret:create` or https://expo.dev/settings/tokens

3. **Done!** Push code to trigger workflows

#### Automated Builds

| Trigger         | Profile | Platform | Action               |
| --------------- | ------- | -------- | -------------------- |
| Manual dispatch | preview | android  | On-demand test build |

**Workflow files**: `.github/workflows/eas-build.yml`, `eas-submit.yml`

#### Manual Build

```bash
# Build preview APK for testing
eas build --platform android --profile preview

# Monitor build
eas builds
```

#### View Build Status

- **GitHub**: Actions tab → EAS Build workflow
- **EAS**: https://expo.dev/accounts/nuelsbn/projects/payfonte-assessment

### Local Building (Legacy)

If you need to build locally without EAS:

```bash
# Android APK
expo build:android -t apk

# Android App Bundle
expo build:android -t app-bundle

# iOS (requires Mac)
expo build:ios
```

### Publishing to Expo Updates

```bash
expo publish
```

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Query Documentation](https://tanstack.com/query/latest)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## ✨ Future Enhancements

- [ ] Add more detailed country information (borders, timezones, etc.)
- [ ] Implement favorites/bookmarks feature
- [ ] Add sorting options (alphabetical, currency, etc.)
- [ ] Integrate with AsyncStorage for persistent offline caching
- [ ] Add animations with React Native Reanimated
- [ ] Implement dark mode support
- [ ] Add multi-language support
- [ ] Create a country comparison feature
- [ ] Add location-based country suggestion
- [ ] Implement analytics tracking

## 📞 Support

For issues and questions:

1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

---

Built with ❤️ for the PayFusion platform
