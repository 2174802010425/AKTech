import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";
export const getPhoneDetail = async (slug : string) => {
    const PHONE_DETAIL_QUERY = defineQuery(`*[_type == 'phone' && slug.current == $slug][0]{
        _id,
        name,
        price,
        manufactor->{name},
        image,
        description,
        variants,
        _type,
        _createdAt,
        _updatedAt
    }`)
    try {
        const phoneDetail = await sanityFetch({query : PHONE_DETAIL_QUERY, params : {slug}})
        return phoneDetail.data || null
    } catch (error) {
        console.log('Error while catching phone detail', error)
        return null
    }
}