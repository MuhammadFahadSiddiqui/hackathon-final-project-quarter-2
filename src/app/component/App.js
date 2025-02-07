"use client"

import { hideLoading } from '../../redux/slices/cardSlice'
import { useDispatch } from 'react-redux'
// import CartSidebar from './CartSidebar'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'

function App({ children }) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(hideLoading())
    }, [dispatch])

    const { cartItems, loading } = useSelector((state) => state.cart)  // Fixed the cartItems variable name

    const pathname = usePathname()

    return (
        <div>
            <div className={`${loading
                    ? ''
                    : cartItems.length > 0 && (pathname === '/' || pathname.indexOf('/products/') >= 0)
                        ? 'mr-32'
                        : ''
                }`}
            >
              {/* <SecondaryNavBar/> */}
                <main>{children}</main>
            </div>        
        </div>
    )
}

export default App