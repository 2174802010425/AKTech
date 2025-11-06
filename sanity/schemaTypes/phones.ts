import { defineType, defineField } from "sanity";
export const phoneType = defineType({
  name: "phone",
  title: "Phone",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "manufactor",
      title: "Manufactor",
      type: "reference",
      to: [{ type: "manufactor" }]
    }),
    defineField({
      name : 'image',
      title : 'Image',
      type : 'image',
      options : {
        hotspot : true
      }
    }),
    defineField({
      name: "variants",
      title: "Color Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "color",
              title: "Color",
              type: "string",
              options: {
                list: [
                  { title: "Night", value: "blue" },
                  { title: "Orange", value: "orange" },
                  { title: "Gray", value: "gray" },
                ],
              },
            },
            {
              name: "image",
              title: "Image for this color",
              type: "image",
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              title: "color",
              media: "image",
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "image",
    },
  },
});
