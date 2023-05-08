// src/islands/UserIP.tsx
/** @jsx h */
import { h } from 'preact';
import { useRef, useLayoutEffect } from 'preact/hooks';

function UserIP() {
  const el = useRef<HTMLDivElement>(null);

  async function fetchUserIP() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      return '0.0.0.0';
    }
  }

  useLayoutEffect(() => {
    fetchUserIP().then((ip) => {
      if (el.current) {
        el.current.textContent = ip;
      }
    });
  }, []);

  return <div ref={el}></div>;
}

export default UserIP;
