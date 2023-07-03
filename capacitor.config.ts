import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: '测试App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
