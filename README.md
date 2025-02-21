## Demo Videos

**iOS**: [Watch Demo](https://ascendionhub-my.sharepoint.com/:v:/g/personal/john_aduan_ascendion_com/EZSZ976ESp1DrntofD_sS-oB5wVvkYSL4mrMfnXSXwKnYw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=hW0ySt)

**Android**: [Watch Demo](https://ascendionhub-my.sharepoint.com/:v:/g/personal/john_aduan_ascendion_com/EV80fu13vndEtzskCuR49x8BtMa3rldmuvG0UHH8r1BfWw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=FNqUkZ)

## Architecture

The project implements the MVVM (Model-View-ViewModel) architecture pattern, ensuring:

- Clean separation of concerns
- Maintainable and testable code
- SOLID principles adherence
- Optimized performance

### Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── article-card/
│   ├── article-preview/
│   └── ...
├── models/             # Data models and interfaces
├── viewmodels/         # Business logic and state management
├── views/              # Screen components
├── context/            # React Context for state sharing
├── navigation/         # Navigation configuration
└── utils/              # Helper functions and constants
```

### MVVM Implementation

- **Models**: Define data structures and interfaces (Article.ts)
- **Views**: React Native components for UI rendering (ArticleDetail.tsx, HomeScreen.tsx)
- **ViewModels**: Handle business logic and state management (ArticleViewModel.ts)

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions before proceeding.

### Prerequisites

- Node.js >= 18
- Ruby >= 2.6.10 (for iOS)
- Xcode (for iOS)
- Android Studio (for Android)
- CocoaPods (for iOS)

### Installation

1. Clone the repository:

```sh
git clone [your-repo-url]
cd article-stack
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

3. Install iOS dependencies:

```sh
bundle install
bundle exec pod install --project-directory=ios
```

### Running the App

#### iOS

```sh
npm run ios
# or
yarn ios
```

#### Android

```sh
npm run android
# or
yarn android
```

## Development Guidelines

- Follow SOLID principles
- Implement proper error handling
- Write unit tests for ViewModels
- Use TypeScript for type safety
- Follow React Native best practices

## Testing

The project uses Jest and React Native Testing Library for testing:

```sh
npm test
# or
yarn test
```
