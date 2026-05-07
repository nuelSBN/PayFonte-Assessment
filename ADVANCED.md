# Advanced Features Guide

This guide explains the advanced features and how to extend the PayFonte app.

## 🎨 Using Animations

### AnimatedCountryCard Component

The app includes an `AnimatedCountryCard` component that adds smooth animations:

```typescript
import { AnimatedCountryCard } from '../components/AnimatedCountryCard';

// Use in your list
<FlatList
  data={countries}
  renderItem={({ item, index }) => (
    <AnimatedCountryCard
      country={item}
      onPress={onSelectCountry}
      index={index}
    />
  )}
/>
```

**Features**:

- Slide-in animation on initial load
- Fade-out on removal
- Staggered timing based on list position

### Adding More Animations

```typescript
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  ZoomIn,
} from 'react-native-reanimated';

<Animated.View entering={SlideInLeft} exiting={FadeOut}>
  {/* Content */}
</Animated.View>
```

## 🔄 Offline Support Enhancement

### Persistent Storage Setup

Replace the in-memory cache with AsyncStorage for true offline support:

```typescript
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = {
  async set(key: string, value: any) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  async get(key: string) {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
};
```

## 🧪 Advanced Testing

### Testing React Query Hooks

```typescript
import { renderHook, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

test('useCountries fetches data', async () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

  const { result } = renderHook(() => useCountries(), { wrapper });

  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});
```

## 🎯 Adding Filter Features

### Currency Filter Hook

```typescript
export const useCurrencyFilter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>();

  return {
    selectedCurrency,
    setSelectedCurrency,
  };
};
```

### Filter UI Component

```typescript
export const FilterBar: React.FC<FilterBarProps> = ({ currencies }) => (
  <ScrollView horizontal>
    {currencies.map(currency => (
      <TouchableOpacity key={currency}>
        <Text>{currency}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);
```

## 🗺️ Navigation Setup (React Navigation)

### Basic Navigation Structure

```typescript
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Countries" component={CountriesScreen} />
        <Stack.Screen name="Details" component={CountryDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 🌐 Implementing Locale Switching

### Locale Context

```typescript
import React, { createContext } from 'react';

interface LocaleContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined
);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState('en_US');

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
```

### Using Locale

```typescript
export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
```

## 📊 Analytics Integration

### Track User Actions

```typescript
import { analytics } from "./analytics";

export const trackCountryView = (country: Country) => {
  analytics.track("country_viewed", {
    country_id: country.id,
    country_name: country.name,
    timestamp: new Date().toISOString(),
  });
};
```

## 🛠️ Error Boundaries

### Custom Error Boundary

```typescript
export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

## 🔔 Push Notifications

### Setting Up Notifications

```typescript
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const sendNotification = async (title: string, body: string) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: { seconds: 2 },
  });
};
```

## 📱 Deep Linking

### Implement Deep Links

```typescript
const linking = {
  prefixes: ['https://payfonte.com', 'payfonte://'],
  config: {
    screens: {
      Countries: 'countries',
      Details: 'country/:id',
    },
  },
};

<NavigationContainer linking={linking}>
  {/* Navigation structure */}
</NavigationContainer>
```

## 🎨 Dark Mode Support

### Theme Provider

```typescript
export const useColorScheme = () => {
  const isDark = useColorScheme() === "dark";

  return {
    colors: isDark ? darkColors : lightColors,
    isDark,
  };
};
```

## 🔐 Secure Storage

### Storing Sensitive Data

```typescript
import * as SecureStore from "expo-secure-store";

export const secureStorage = {
  async set(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  },
  async get(key: string) {
    return await SecureStore.getItemAsync(key);
  },
};
```

## 📈 Performance Monitoring

### Track Performance Metrics

```typescript
export const measurePerformance = (name: string) => {
  const start = performance.now();

  return () => {
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
  };
};
```

## 🚀 Deployment Checklist

- [ ] Update version in `app.json` and `package.json`
- [ ] Run tests: `pnpm test`
- [ ] Build APK: `expo build:android`
- [ ] Test on device
- [ ] Update README
- [ ] Create GitHub release
- [ ] Announce release

---

For more information, see [ARCHITECTURE.md](ARCHITECTURE.md) and [README.md](README.md)
