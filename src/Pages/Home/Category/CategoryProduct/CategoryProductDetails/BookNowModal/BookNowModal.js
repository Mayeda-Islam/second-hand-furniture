import React from 'react';
import { useForm } from 'react-hook-form';

const BookNowModal = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit=data=>{
    console.log(data)
   }
    return (
        <div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12  max-w-lg">
    <div className='relative my-10'>
    <h3 className="font-bold text-5xl">Your Info !</h3>
    
    <label htmlFor="my-modal-5" className="btn btn-circle btn-outline absolute top-0 right-0">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>

</label>
    </div>
  <form  onSubmit={handleSubmit(onSubmit)}  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-start text-gray-700 text-sm font-bold mb-2" for="username">
        User Name
      </label>
      <input {...register("name", { required: true })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="User name"/>
    </div>
    <div class="mb-4">
      <label class="block text-start text-gray-700 text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input {...register("email", { required: true })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="Email"/>
    </div>
    <div class="mb-6">
      <label class="block text-start text-gray-700 text-sm font-bold mb-2" for="password">
        Product Name
      </label>
      <input {...register("productName", { required: true })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder=""/>
      <p class="text-red-500 text-xs italic">{errors.exampleRequired && <span>This field is required</span>}</p>
    </div>
    <div class="mb-6">
      <label class="block text-start text-gray-700 text-sm font-bold mb-2" for="password">
        Product Price
      </label>
      <input {...register("itemPrice", { required: true })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type='text' placeholder=""/>
      <p class="text-red-500 text-xs italic">{errors.exampleRequired && <span>This field is required</span>}</p>
    </div>
    <div class="mb-6">
      <label class="block text-start text-gray-700 text-sm font-bold mb-2" >
        Phone Number
      </label>
      <input {...register("phoneNumber", { required: true })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=""/>
      <p class="text-red-500 text-xs italic">{errors.exampleRequired && <span>This field is required</span>}</p>
    </div>
    <div class="mb-6">
      <label class="block text-start text-gray-700 text-sm font-bold mb-2" >
        Meeting Location
      </label>
      <input {...register("meetingLocation", { required: true })} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder=""/>
      <p class="text-red-500 text-xs italic">{errors.exampleRequired && <span>This field is required</span>}</p>
    </div>
    <div class="flex items-center justify-between">
    <input htmlFor="my-modal-5" className='bg-primary  hover:bg-secondary text-white font-bold py-2 px-4 rounded border-none' type="submit" />
      
     
      
    </div>
    </form>
    </div></div>
    </div>
    );
};

export default BookNowModal;