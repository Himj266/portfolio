import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

//types
import type { LinksFunction } from '@remix-run/node';

//css
import stylesheet from '~/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-slate-800">
          <div className="flex">
            <div className="h-screen border-r-2 border-gray-400 p-2">left</div>
            <div className="flex h-screen grow flex-col p-2">
              <div className="grow text-8xl font-black text-gray-100">
                Canvas For Ideas To Paint
              </div>
              <div className="flex flex-col items-end text-right text-gray-200">
                <div className="text-3xl">The Artist</div>
                <div className="w-1/2 text-lg">
                  Himanshu Jain, working as frontend developer at Sprinklr, tech
                  enthusiast, who loves to play sport especially badminton,
                  dance, learn new things and explore
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
