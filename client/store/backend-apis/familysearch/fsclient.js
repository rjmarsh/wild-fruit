import FamilySearch from 'fs-js-lite';
import { FSenvironment, FSappkey } from './config';

const fsClient = new FamilySearch({
  environment: FSenvironment,
  appKey: FSappkey,
  redirectUri: `${document.location.protocol}//${document.location.host}/`,
  saveAccessToken: true,
});

export default fsClient;
