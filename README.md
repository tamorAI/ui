tamor-ui/
│
├── apps/
│   ├── mobile/                 # React Native app (iOS/Android)
│   │   ├── App.tsx
│   │   ├── index.js
│   │   └── storybook/         # RN Storybook config
│   │
│   ├── web/                   # React web app
│   │   ├── main.tsx
│   │   └── storybook/         # Web Storybook config
│   │
│   └── docs/                  # optional (Chromatic / static docs)
│
├── packages/
│   ├── ui/                    # Design system (core)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.native.tsx
│   │   │   │   │   ├── Button.web.tsx
│   │   │   │   │   ├── Button.styles.ts
│   │   │   │   │   ├── Button.stories.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   └── Input/
│   │   │   ├── primitives/
│   │   │   ├── theme/
│   │   │   └── index.ts
│   │   │
│   │   └── package.json
│   │
│   ├── tokens/                # design tokens (colors, spacing)
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   │
│   ├── utils/                 # shared logic (NO UI here)
│   │   └── index.ts
│   │
│   └── config/                # eslint, tsconfig shared
│
├── .storybook/               # web storybook config
├── .rnstorybook/             # native storybook config
│
├── turbo.json                # or nx.json
├── tsconfig.base.json
├── package.json
└── pnpm-workspace.yaml



# I am trying to create a monorepo where i can build the project