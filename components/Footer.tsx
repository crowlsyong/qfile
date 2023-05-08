/** @jsx h */
import { h } from "preact";
import { tw } from 'twind'

export default function Footer() {
  // Function to get the user's IP address
  function getUserIP() {
    // Implementation to retrieve the user's IP address
    // You can use external libraries or APIs to fetch the IP address
    // For simplicity, we'll use a placeholder IP address
    return "127.0.0.1";
  }

  const userIP = getUserIP();

  return (
    <footer
      class={tw`bottom-0 w-full h-14 lg:px-36 md:px-20 sm:px-16 px-10 bg-gray-900 absolute flex items-center justify-center text-white font-base sm:text-base text-sm`}
    >
      <div class={tw`mr-2`}>pwning: {userIP}</div>
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
