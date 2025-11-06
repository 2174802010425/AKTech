
import { defineLive } from "next-sanity/live";
import { client } from './client'

const token = process.env.SANITY_VIEWER_TOKEN!
if(!token) {
  console.log('Invalid or no tokens provided')
  throw new Error("Invalid or no tokens provided")
}
export const { sanityFetch, SanityLive } = defineLive({
  client,
  browserToken : token,
  serverToken : token,
});
  