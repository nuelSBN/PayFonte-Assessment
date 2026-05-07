# Architecture and Code Guidelines

## Project Structure Overview

This document describes the architecture and key design patterns used in the PayFonte app.

## 🏗️ Architectural Patterns

### Separation of Concerns

- **API Layer** (`src/api/`): Handles all external API communication
- **Data Layer** (`src/hooks/`): Uses React Query for server state management
- **UI Layer** (`src/screens/` & `src/components/`): Responsible for rendering
- **Utilities** (`src/utils/`): Common helpers and shared logic

### Data Flow

```
API → React Query → Hooks → Components → UI
```

## 🎯 Key Design Decisions

### 1. React Query for Data Management

**Why**: React Query provides:

- Automatic caching and background synchronization
- Built-in retry logic and error handling
- Stale-while-revalidate pattern implementation
- Reduced boilerplate for async operations

### 2. TypeScript Throughout

**Why**:

- Full type safety prevents runtime errors
- Better IDE support and autocompletion
- Self-documenting code through types
- Easier refactoring

### 3. Component-Based Architecture

**Why**:

- Reusable, testable, and maintainable components
- Clear responsibility boundaries
- Easy to compose complex UIs

### 4. Custom Hooks for Logic

**Why**:

- Encapsulate complex state management
- Reusable across components
- Easier to test than component logic

## 📁 Folder Structure Rationale

```
src/
├── api/              # External API clients and queries
├── components/       # Reusable UI components
├── config/          # Constants and configuration
├── hooks/           # Custom React hooks
├── screens/         # Full screen components
├── styles/          # Theme, colors, spacing
├── types/           # TypeScript definitions
└── utils/           # Helper functions and utilities
```

## 🔄 State Management Strategy

### Server State (React Query)

- API responses and data
- Loading and error states
- Cache management
- Synchronization status

### Local UI State (React State)

- Search input value
- Selected country
- Modal visibility
- Temporary form state

## 🧪 Testing Strategy

### Unit Tests

- Pure functions in utilities (`helpers.ts`, `storage.ts`)
- Hook logic in isolation (`useCountries` filtering and data fetching)
- Component rendering with react-test-renderer

### Component Tests

- Component rendering verification
- Props handling
- UI state management
- Using react-test-renderer for React Native compatibility

### Integration Tests

- API integration with mocked axios
- Hook and component interaction
- Error scenarios and edge cases

### Test Coverage

- **Current**: All 16 tests passing ✅
- **4 Test Files**: hooks, components, API, utilities
- **Testing Library**: react-test-renderer for React Native components

## 📈 Performance Considerations

### Optimizations

- FlatList for efficient list rendering
- React Query caching prevents redundant fetches
- Component memoization where beneficial
- Lazy loading of screens

### Monitoring

- Console errors in development
- Error boundary implementation (future)
- Performance metrics (future)

## 🔐 Error Handling Strategy

### API Errors

- Network failures
- Timeout handling
- Invalid responses

### UI Errors

- User-friendly error messages
- Retry mechanisms
- Fallback UI states

### Error Boundaries (Future)

- Catch React errors
- Prevent app crashes
- Display error UI

## 🚀 Scaling the App

### Adding New Features

1. Create API client in `src/api/`
2. Add TypeScript types in `src/types/`
3. Create custom hooks in `src/hooks/`
4. Build components in `src/components/`
5. Compose screens in `src/screens/`
6. Add tests in `__tests__/`

### Adding New Screens

1. Create screen component in `src/screens/`
2. Add navigation setup
3. Define screen parameters in types
4. Create API integration if needed

## 📝 Code Style Guidelines

### Naming Conventions

- `camelCase` for variables, functions, and methods
- `PascalCase` for components, classes, and types
- `UPPER_SNAKE_CASE` for constants
- Descriptive names (avoid abbreviations)

### Component Structure

```typescript
// Props interface
interface ComponentProps {
  // Props definition
}

// Component with documentation
/**
 * Component description
 */
export const Component: React.FC<ComponentProps> = (props) => {
  // Hooks at top
  // Event handlers
  // Render
  return (
    // JSX
  );
};

// Styles at bottom
const styles = StyleSheet.create({
  // Styles
});
```

### Hook Structure

```typescript
export const useCustomHook = (param: string) => {
  // Logic
  return {
    // Returned values
  };
};
```

## 🔗 Dependencies

### Core Dependencies

- **react-native**: Native framework
- **expo**: Build and deployment
- **@tanstack/react-query**: Server state
- **axios**: HTTP client
- **react-native-reanimated**: Animations

### Development Dependencies

- **typescript**: Type checking
- **jest**: Testing
- **@testing-library/react-native**: Component testing

## 🔄 Version Management

- Lock file: `pnpm-lock.yaml`
- Update dependencies: `pnpm update`
- Major version updates: Review breaking changes

## 📚 Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Query Docs](https://tanstack.com/query/latest)

## 🤝 Contributing

1. Follow the code style guidelines
2. Write tests for new features
3. Update documentation
4. Create meaningful commit messages
5. Request review from team members
