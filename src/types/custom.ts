import { IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types';

export interface CustomIconDescriptorType extends IconDescriptor {
  precedence?: string;
}

export type MenuType = {
  title: string;
  icon: string;
  route: string;
};
