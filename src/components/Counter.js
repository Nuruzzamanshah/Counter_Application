import React from 'react';
import Button from './Button';
import Count from './Count';

export default function Counter({id, count, increment,decrement}) {
  return (
    <div
          className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
          {/* <div className="text-2xl font-semibold" id="counter"></div> */}
          <Count count={count} />
          <div className="flex space-x-3">
            {/* <button
              className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
              onClick={() => increment (id)}
            >
              Increment
            </button> */}
            <Button handler={() => increment (id)}>Increment</Button>
            <Button handler={() => decrement (id)}>Decrement</Button>
            {/* <button
              className="bg-red-400 text-white px-3 py-2 rounded shadow"
              onClick={() => decrement (id)}
            >
              Decrement
            </button> */}
          </div>
        </div>
  )
}
