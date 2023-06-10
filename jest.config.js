export default {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
  ],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ["./config/jest/setupTests.js"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.js",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    "tsx",
    "ts",
    "js",
    "json",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};