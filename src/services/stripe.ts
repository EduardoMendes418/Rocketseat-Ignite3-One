import Stripe from 'stripe'

export const stripe = new Stripe(
    process.env.STRIME_API_KEY,
    {
       apiVersion: '2022-08-01',
       appInfo: {
           name:'Eduardo',
           version: '0.1.0',
       }, 
    }
)

