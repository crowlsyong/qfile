// src/components/Footer.tsx
/** @jsx h */
import { h } from 'preact';
import { tw } from 'twind';
import UserIP from '../islands/UserIP.tsx';

export default function Footer() {
  return (
  <footer
    class={tw`bottom-0 w-full h-14 lg:px-36 md:px-20 sm:px-16 px-10 bg-black absolute flex items-center justify-center text-white font-base sm:text-base text-sm`}
  >
    <div class={tw`mr-2 flex items-center`}>
      <span class={tw`mr-1`}>pwning:</span>
      <UserIP />
    </div>
    <div class={tw`mr-2`}>&nbsp;|&nbsp;</div>
    <div>
      public key:&nbsp;
      <a
        target="_blank"
        href="/files/easter_egger_0xE83F00F5_public.asc"
        download
        class={tw`hover:underline font-semibold`}
      >
        download
      </a>
    </div>
  </footer>

  );
}
