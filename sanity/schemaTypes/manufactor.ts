import { defineType, defineField } from "sanity";
export const manufactorType = defineType({
    name : 'manufactor',
    title : 'Manufactor',
    type : 'document',
    fields : [
        defineField({
            name : 'name',
            title : 'Manufactor name',
            type : 'string',
            validation : rule => rule.required()
        }),
        defineField({
            name : 'logo',
            title : "Logo",
            type : 'image',
            options : {
                hotspot : true
            }
        }),
        defineField({
            name : 'slug',
            title : "Slug",
            type : 'slug',
            options : {
                source : 'name'
            }
        }),
        defineField({
            name : 'description',
            title : 'Description',
            type : 'array',
            of : [{type : 'block'}]
        }),
    ],
    preview : {
        select : {
            title : 'name',
            media : 'logo',
            subtitle : 'description'
        },
    }
})