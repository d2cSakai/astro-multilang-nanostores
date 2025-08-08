import { atom } from 'nanostores';

// 言語 (デフォルトをjaに設定)
export const storeLang = atom<'ja' | 'en'>('ja');

// 取得した言語をstoreLangにセット
export const setLang = (newLang: 'ja' | 'en'): void => {
  storeLang.set(newLang);
};
