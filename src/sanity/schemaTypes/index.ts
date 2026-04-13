import { type SchemaTypeDefinition } from 'sanity'
import gallery from './gallery';
import product from './product';

export const schematypes: { types: SchemaTypeDefinition[] } = {
  types: [product, gallery],
}
