import { type SchemaTypeDefinition } from 'sanity'
import { phoneType } from './phones'
import { manufactorType } from './manufactor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [phoneType, manufactorType],
}
