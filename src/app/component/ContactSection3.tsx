import React from 'react'
import Contact from './Contact'
import Like from './Like'

export default function ContactSection3() {
    return (
        <>
        <div className='bg-pink-950 '>
            <div className="text-center p-5 text-white">
                <h1 className='text-white font-bold text-[50px] p-6'>FAQs</h1><br />
                <h2 className='font-bold text-3x1 p-1'>How do I order flowers and choose delivery options?</h2>
                <p className='text-gray-300 p-4'>Simply browse our shop, select your bouquet, and follow the checkout process. You can choose the delivery date and time during checkout.

                </p> <hr />
                <h2 className='font-bold text-3x1 p-1'>What areas do you deliver to, and can I track my delivery?</h2>
                <p className='text-gray-300 p-4'>We deliver to every areas, and you&apos;ll receive a tracking number once your order is dispatched.</p>
                <hr />
                <h2 className='font-bold text-3x1 p-1'>
                    How can I make my flowers last longer, and what if they arrive damaged?
                </h2>
                <p className='text-gray-300 p-4'>For longer-lasting blooms, trim stems, change water, and keep in a cool place. Contact us if your flowers arrive damaged for a replacement or refund.

                </p> <hr />
                <h2 className='font-bold text-3x1 p-1'>What is your return policy and cancellation policy?</h2>
                <p className='text-gray-300 p-4'>Contact us within 6 days for returns or exchanges. Orders can be canceled up to 1 hours/days
                    before the scheduled delivery date.</p>
            </div>
        </div>
        <Like  src2='/img8.jpg' width={600} height={600} about='SPECIAL OFFER' heading1='Explore Our Exquisite Floral ' heading2='Collections & Shop Now for the Perfect Blooms' button='Shop Now' para={''} />
<Contact/>
        </>
    )
}
