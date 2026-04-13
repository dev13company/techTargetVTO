import { type SchemaTypeDefinition } from 'sanity'
import heroSection from './heroSection';
import galleryImage from './galleryImage';
import meetingSection from './meetingSection';
import aboutUsSection from "./aboutUsSection";
import testimonialSection from './testimonialSection';
import gallery from './gallery';
import product from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, galleryImage, meetingSection, aboutUsSection, testimonialSection, product, gallery],
}
