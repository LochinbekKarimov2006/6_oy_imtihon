import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/UseFech';
// import { GlobalContext } from '../context/GloblContext';

function ToliqMalumod() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`https://dummyjson.com/products/${id}`);
  const [raqam,setRaqam]=useState(0)
console.log(data)
  function raqamQoshish() {
    setRaqam(raqam + 1);
  }

  function raqamAyirish() {
    if (raqam > 0) {
      setRaqam(raqam - 1);
    }
  }
  return (<>
    {data&&
        
        <div className="bg-base-100 dark:bg-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                  <img className="w-full h-full object-cover" src={data.thumbnail} alt="Product Image" />
                </div>
                <div className="flex -mx-2 mt-10 div3">
                  <div className="w-1/2 px-2 div4">
                    <div className="inline-flex items-center">
                      <button
                        onClick={raqamAyirish}
                        className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                      </button>
                      <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                        {raqam}
                      </div>
                      <button
                        onClick={raqamQoshish}
                        className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 px-2">
                    <button
                    //   onClick={() => addToCart(data)}
                      className="py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 w-full flex items-center justify-center"
                    >
                      Add to order
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-left md:flex-1 px-4">
                <h2 className="text-xl font-bold text-blu-700 dark:text-slate-50">Product Name</h2>
                <p className="text-blu-700 dark:text-slate-50 text-sm mb-4">{data.title}</p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <span className="font-bold text-blu-700 dark:text-slate-50">Price:</span>
                    <span className="text-blu-700 dark:text-slate-50">${data.price}</span>
                  </div>
                  <div>
                    <span className="font-bold text-blu-700 dark:text-slate-50">Availability:</span>
                    <span className="text-blu-700 dark:text-slate-50">{data.availabilityStatus}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="flex font-bold text-blu-700 dark:text-slate-50">Brand:
                    <p className="font-normal text-blu-700 dark:text-slate-50 mb-4">{data.brand}</p>
                  </span>
                </div>
                <div className="mb-4 flex">
                  <span className="flex font-bold text-blu-700 dark:text-slate-50">Rating:
                    <p className="font-normal text-blu-700 dark:text-slate-50 mb-4">{data.rating}</p>
                  </span>
                </div>
                <div>
                  <span className="font-bold text-blu-700 dark:text-slate-50">Product Description:</span>
                  <p className="text-blu-700 dark:text-slate-50 text-sm mb-4">{data.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
  </>
  );
}

export default ToliqMalumod;
