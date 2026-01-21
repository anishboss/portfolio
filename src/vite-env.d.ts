/// <reference types="vite/client" />

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAGES_BASE_PATH: string;
  // add more custom env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
