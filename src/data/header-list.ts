// リンクの型定義
type THeaderLink = {
  href: string;
  text: string;
};

// 言語の型定義
type TLang = 'ja' | 'en';

// ヘッダーリストの型定義
type THeaderList =  Record<TLang, THeaderLink>;

const headerList:THeaderList[] = [
    {
      ja: {
        href: '/about',
        text: '私たちについて',
      },
      en: {
        href: '/en/about',
        text: 'About Us',
      },
    },
    {
      ja: {
        href: '/company',
        text: '会社概要',
      },
      en: {
        href: '/en/company',
        text: 'Company',
      },
    },
    {
      ja: {
        href: '/contact',
        text: 'お問い合わせ',
      },
      en: {
        href: '/en/contact',
        text: 'Contact',
      },
    },
  ];

export { headerList };
