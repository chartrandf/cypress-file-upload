import { extname } from 'path';

import { ENCODING, FILE_EXTENSION } from './constants';

/*
 * Copied from https://github.com/cypress-io/cypress/blob/develop/packages/server/lib/fixture.coffee#L104
 */
const EXTENSION_TO_ENCODING = {
  [FILE_EXTENSION.JSON]: ENCODING.UTF8,
  [FILE_EXTENSION.JS]: ENCODING.UTF8,
  [FILE_EXTENSION.COFFEE]: ENCODING.UTF8,
  [FILE_EXTENSION.HTML]: ENCODING.UTF8,
  [FILE_EXTENSION.TXT]: ENCODING.UTF8,
  [FILE_EXTENSION.CSV]: ENCODING.UTF8,
  [FILE_EXTENSION.PNG]: ENCODING.BASE64,
  [FILE_EXTENSION.JPG]: ENCODING.BASE64,
  [FILE_EXTENSION.JPEG]: ENCODING.BASE64,
  [FILE_EXTENSION.GIF]: ENCODING.BASE64,
  [FILE_EXTENSION.TIF]: ENCODING.BASE64,
  [FILE_EXTENSION.TIFF]: ENCODING.BASE64,
  [FILE_EXTENSION.ZIP]: ENCODING.BASE64,

  /*
   * Other extensions that are not supported by cy.fixture by default:
   */
  [FILE_EXTENSION.PDF]: ENCODING.UTF8,
  [FILE_EXTENSION.VCF]: ENCODING.UTF8,
  [FILE_EXTENSION.SVG]: ENCODING.UTF8,
  [FILE_EXTENSION.XLS]: ENCODING.BINARY,
  [FILE_EXTENSION.XLSX]: ENCODING.BINARY,
};

const DEFAULT_ENCODING = ENCODING.UTF8;

export default function getFileEncoding(filePath) {
  const extension = extname(filePath).slice(1);
  const encoding = EXTENSION_TO_ENCODING[extension];

  return encoding || DEFAULT_ENCODING;
}
