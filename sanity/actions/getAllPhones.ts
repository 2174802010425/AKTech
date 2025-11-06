import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
export const getAllPhones = async() => {
    const PHONES_QUERY = defineQuery(`*[_type == 'phone'] | order(name asc)`)
    try {
        const phones = await sanityFetch({query : PHONES_QUERY})
        return phones.data || []
    } catch (error) {
        console.log('Error while get all phones', error)
        return []
    }
}