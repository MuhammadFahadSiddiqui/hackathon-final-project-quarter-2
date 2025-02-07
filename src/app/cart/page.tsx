// 'use client';

// import { addToCart, removeFromCart } from '../../redux/slices/cardSlice';
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Image from 'next/image';
// import Link from 'next/link';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { urlFor } from "../../sanity/lib/image";
// import Banner from '../component/banner';
// import { RootState } from '../../redux/store'; // Ensure correct RootState import

// function CartPage() {
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const router = useRouter();
  
//   // Define the state type to ensure TypeScript understands the structure
//   const { cartItems = [] } = useSelector((state: RootState) => state.cart);

//   const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

//   const removeFromCartHandler = (id: string) => dispatch(removeFromCart(id));

//   const addToCartHandler = (product: any, qty: number) => {
//     if (qty >= 1) {
//       dispatch(addToCart({ ...product, qty }));
//     }
//   };

//   if (cartItems.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-[600px] bg-gray-50 text-center">
//         <div>
//           <p className="text-xl font-semibold">Cart is empty.</p>
//           <Link href="/shop" className="text-primarycolororg hover:underline mt-4 block">Go shopping</Link>
//         </div>
//       </div>
//     );
//   }

//   const getImageUrl = (item: any) => (item.image ? urlFor(item.image)?.url() : "/images/default-product.jpg");

//   return (
//     <div>
//       <Banner heading="Shopping Cart" breadcrumb="Shopping Cart" />
//       <div className='max-w-4xl mx-auto'>
//         <div className="grid md:grid-cols-4 gap-4">
//           <div className="md:col-span-3 bg-white shadow-md rounded-lg">
//             <table className="min-w-full table-auto">
//               <thead className="bg-white text-primarycolororg">
//                 <tr>
//                   <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-left">Product</th>
//                   <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-right">Quantity</th>
//                   <th className="text-xs md:text-lg md:p-4 py-4 px-1 text-right">Price</th>
//                   <th className="text-xs md:text-lg md:p-4 py-4 px-1">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id} className="border-b hover:bg-yellow-50">
//                     <td className="md:p-4 py-4 px-1 flex items-center">
//                       <Link href={`/shop/${item.id}`} className="flex items-center space-x-4">
//                         <Image
//                           src={getImageUrl(item)}
//                           alt={item.name || "Product Image"}
//                           width={80}
//                           height={80}
//                           className="p-1 rounded"
//                         />
//                         <span className='text-xs md:text-sm'>{item.name}</span>
//                       </Link>
//                     </td>
//                     <td className="md:p-4 text-right">
//                       <div className="flex items-center p-2 space-x-2 my-2">
//                         <button 
//                           onClick={() => addToCartHandler(item, item.qty - 1)} 
//                           className="bg-gray-200 px-3 text-lg font-bold rounded-full hover:bg-gray-300"
//                           disabled={item.qty <= 1}
//                         >-</button>
//                         <div className="text-sm md:text-lg font-semibold">{item.qty}</div>
//                         <button 
//                           onClick={() => addToCartHandler(item, item.qty + 1)} 
//                           className="bg-gray-200 px-2.5 text-lg font-bold rounded-full hover:bg-gray-300"
//                         >+</button>
//                       </div>
//                     </td>
//                     <td className="text-xs md:text-sm md:p-4 text-right text-primarycolororg">${item.price}</td>
//                     <td className="md:p-4 text-center">
//                       <button 
//                         className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600" 
//                         onClick={() => removeFromCartHandler(item.id)} 
//                         aria-label="Remove Item"
//                       >
//                         <AiOutlineDelete size={20} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="bg-[#FFF9E5] p-5 shadow-md h-72 rounded-lg">
//             <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
//             <table className="w-full table-auto border-collapse">
//               <tbody>
//                 <tr>
//                   <td className="py-3 text-left">Subtotal</td>
//                   <td className="py-3 text-right text-gray-400">({cartItems.reduce((a, c) => a + c.qty, 0)}) : ${itemsPrice}</td>
//                 </tr>
//                 <tr>
//                   <td className="py-3 text-left font-bold">Total</td>
//                   <td className="py-3 text-right text-lg font-bold text-primarycolororg">${itemsPrice}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <button 
//               onClick={(e) => { e.preventDefault(); router.push('/checkout'); }} 
//               className="w-full px-6 py-3 border border-black hover:bg-black hover:text-white rounded-xl"
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Proceed to checkout"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartPage;
import React from 'react'

function page() {
  return (
    <div>
      
    </div>
  )
}

export default page
