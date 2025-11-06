import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
export const getSearchPhoneByName = async(phoneName : string) => {
    const QUERY_SEARCH_PHONE = defineQuery(`*[_type == 'phone' && name match $phoneName] | order(name asc)`)
    try {
        const products = await sanityFetch({query : QUERY_SEARCH_PHONE, params : {phoneName : `*${phoneName}*`}})
        return products.data || []
    } catch (error) {
        console.error(error)
        return []
    }
}