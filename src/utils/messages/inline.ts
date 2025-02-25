import { InfoObject } from 'openapi3-ts';
import pkg from '../../../package.json';

export const getFilesHeader = ({ title, description, version }: InfoObject) =>
  `/*\n * Generated by ${pkg.name} v${
    pkg.version
  } 🍺\n * Do not edit manually.\n${title ? ` * ${title}\n` : ''}${
    description ? ` * ${description}\n` : ''
  }${version ? ` * OpenAPI spec version: ${version}` : ''}\n */\n`;
