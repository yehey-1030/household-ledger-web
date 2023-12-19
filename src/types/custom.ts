import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types';

export interface CustomIconDescriptorType extends IconDescriptor {
  precedence?: string;
}
