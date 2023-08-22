import '@styles/globals.css';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Next Js Template',
  description:
    'Created using the Next template by Rajdeep Ghosh (https://github.com/rajdeep-ghosh/next-template)'
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
