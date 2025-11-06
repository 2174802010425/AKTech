// import { defineQuery } from "next-sanity";
// import { sanityFetch } from "../lib/live";
// export const getFilterPhoneByManufactor = async (slug : string) => {
//     const FILTER_PHONE_QUERY = defineQuery(`*[_type == 'phone' && references(*[_type == 'manufactor' && slug.current == $slug]._id)] | order(name asc)`)
// }   