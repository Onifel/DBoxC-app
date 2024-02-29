import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dboxc.app',
  appName: 'dbcalendar',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
