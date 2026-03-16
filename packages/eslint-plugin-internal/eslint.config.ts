import { defineConfig } from 'eslint/config';
import baseConfig from '../../eslint.config.base';
import eslintPlugin from 'eslint-plugin-eslint-plugin';

export default defineConfig(...baseConfig, eslintPlugin.configs.recommended);
