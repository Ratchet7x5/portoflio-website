import { useState } from 'react';
import profpic from './assets/images/profile/480_No_BG.png';
import './App.css';

function App() {
  return (
    <div className="App leading-tight font-sans-serif space-y-4">
      {/* div1 = About Me.  */}
      <div className=" rounded-lg bg-neutral-950">
        <div className="mx-auto grid max-w-2xl items-center gap-x-6 gap-y-12 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-4xl lg:grid-cols-1 lg:px-8">
          <div className="flex justify-center justify-self-center">
            <img
              class="h-5/6 w-5/6 rounded-full border-2 border-neutral-500 object-contain"
              src={profpic}
              alt="Tarun"
            />
          </div>
          <div class="">
            <p class="mt-4 text-gray-300">Hi, my name is Tarun Ramachandran.</p>
          </div>
        </div>
      </div>

      {/* soon-to-be image component */}

      <div className="rounded-lg bg-neutral-950 " id="projects">
        <div className="mx-auto items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="gap-1 sm:gap-6">
            
          </div>
          <div>
            <h2 className="font-bold text-3xl tracking-tight text-gray-300 sm:text-4xl ">
              Currently a work in progress
            </h2>
          </div>
        </div>
      </div>

      {/* soon-to-be video component */}

      

      {/* add footer here */}
      <footer className="rounded-lg bg-neutral-950">
        <p class="mt-4 text-gray-300">&copy; Tarun Ramachandran.</p>
      </footer>
    </div>
  );
}

export default App;

/*
todo: use these logos later
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://reactjs.org" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
*/
