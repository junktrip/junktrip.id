/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    'hero-section': HeroSection;
    'popular-destinations': PopularDestination;
    'most-car-rents': MostCarRent;
    'most-motor-rents': MostMotorRent;
    'car-rents': CarRent;
    'motor-rents': MotorRent;
    'tour-packages': TourPackage;
    'why-us': WhyUs;
    'our-client': OurClient;
    social: Social;
    faq: Faq;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'hero-section': HeroSectionSelect<false> | HeroSectionSelect<true>;
    'popular-destinations': PopularDestinationsSelect<false> | PopularDestinationsSelect<true>;
    'most-car-rents': MostCarRentsSelect<false> | MostCarRentsSelect<true>;
    'most-motor-rents': MostMotorRentsSelect<false> | MostMotorRentsSelect<true>;
    'car-rents': CarRentsSelect<false> | CarRentsSelect<true>;
    'motor-rents': MotorRentsSelect<false> | MotorRentsSelect<true>;
    'tour-packages': TourPackagesSelect<false> | TourPackagesSelect<true>;
    'why-us': WhyUsSelect<false> | WhyUsSelect<true>;
    'our-client': OurClientSelect<false> | OurClientSelect<true>;
    social: SocialSelect<false> | SocialSelect<true>;
    faq: FaqSelect<false> | FaqSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hero-section".
 */
export interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  image: number | Media;
  ctaButtonText: string;
  ctaButtonLink: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "popular-destinations".
 */
export interface PopularDestination {
  id: number;
  destinationName: string;
  destinationDescription: string;
  destinationImage: number | Media;
  destinationLink: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "most-car-rents".
 */
export interface MostCarRent {
  id: number;
  brand: string;
  name: string;
  image_url: number | Media;
  price_with_driver: number;
  price_with_no_driver: number;
  duration: string;
  transmission: string;
  passengers: number;
  fuelType: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "most-motor-rents".
 */
export interface MostMotorRent {
  id: number;
  brand: string;
  name: string;
  image_url: number | Media;
  oneDay: number;
  threeDay: number;
  SevenDay: number;
  oneMonth: number;
  duration: string;
  transmission: string;
  passengers: number;
  fuelType: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "car-rents".
 */
export interface CarRent {
  id: number;
  brand: string;
  name: string;
  image_url: number | Media;
  price_with_driver: number;
  price_with_no_driver: number;
  duration: string;
  transmission: string;
  passengers: number;
  fuelType: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "motor-rents".
 */
export interface MotorRent {
  id: number;
  brand: string;
  name: string;
  image_url: number | Media;
  oneDay: number;
  threeDay: number;
  SevenDay: number;
  oneMonth: number;
  duration: string;
  transmission: string;
  passengers: number;
  fuelType: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tour-packages".
 */
export interface TourPackage {
  id: number;
  name: string;
  slug: string;
  image_url: number | Media;
  itinerary?:
    | {
        day: number;
        tour_name: string;
        description: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        };
        id?: string | null;
      }[]
    | null;
  price: number;
  package_description: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  included: {
    item: string;
    id?: string | null;
  }[];
  excluded: {
    item: string;
    id?: string | null;
  }[];
  destination: {
    destination_name: number | Media;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "why-us".
 */
export interface WhyUs {
  id: number;
  heading: {
    title: string;
    description: string;
  };
  items?:
    | {
        title: string;
        description: string;
        icon: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "our-client".
 */
export interface OurClient {
  id: number;
  heading: {
    title: string;
    description: string;
  };
  logos: {
    logo: number | Media;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "social".
 */
export interface Social {
  id: number;
  heading: {
    title: string;
    description: string;
  };
  items?:
    | {
        title: string;
        description: string;
        url: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faq".
 */
export interface Faq {
  id: number;
  heading: {
    title: string;
    description: string;
  };
  items?:
    | {
        question: string;
        answer: string;
        order: number;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'hero-section';
        value: number | HeroSection;
      } | null)
    | ({
        relationTo: 'popular-destinations';
        value: number | PopularDestination;
      } | null)
    | ({
        relationTo: 'most-car-rents';
        value: number | MostCarRent;
      } | null)
    | ({
        relationTo: 'most-motor-rents';
        value: number | MostMotorRent;
      } | null)
    | ({
        relationTo: 'car-rents';
        value: number | CarRent;
      } | null)
    | ({
        relationTo: 'motor-rents';
        value: number | MotorRent;
      } | null)
    | ({
        relationTo: 'tour-packages';
        value: number | TourPackage;
      } | null)
    | ({
        relationTo: 'why-us';
        value: number | WhyUs;
      } | null)
    | ({
        relationTo: 'our-client';
        value: number | OurClient;
      } | null)
    | ({
        relationTo: 'social';
        value: number | Social;
      } | null)
    | ({
        relationTo: 'faq';
        value: number | Faq;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hero-section_select".
 */
export interface HeroSectionSelect<T extends boolean = true> {
  title?: T;
  subtitle?: T;
  image?: T;
  ctaButtonText?: T;
  ctaButtonLink?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "popular-destinations_select".
 */
export interface PopularDestinationsSelect<T extends boolean = true> {
  destinationName?: T;
  destinationDescription?: T;
  destinationImage?: T;
  destinationLink?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "most-car-rents_select".
 */
export interface MostCarRentsSelect<T extends boolean = true> {
  brand?: T;
  name?: T;
  image_url?: T;
  price_with_driver?: T;
  price_with_no_driver?: T;
  duration?: T;
  transmission?: T;
  passengers?: T;
  fuelType?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "most-motor-rents_select".
 */
export interface MostMotorRentsSelect<T extends boolean = true> {
  brand?: T;
  name?: T;
  image_url?: T;
  oneDay?: T;
  threeDay?: T;
  SevenDay?: T;
  oneMonth?: T;
  duration?: T;
  transmission?: T;
  passengers?: T;
  fuelType?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "car-rents_select".
 */
export interface CarRentsSelect<T extends boolean = true> {
  brand?: T;
  name?: T;
  image_url?: T;
  price_with_driver?: T;
  price_with_no_driver?: T;
  duration?: T;
  transmission?: T;
  passengers?: T;
  fuelType?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "motor-rents_select".
 */
export interface MotorRentsSelect<T extends boolean = true> {
  brand?: T;
  name?: T;
  image_url?: T;
  oneDay?: T;
  threeDay?: T;
  SevenDay?: T;
  oneMonth?: T;
  duration?: T;
  transmission?: T;
  passengers?: T;
  fuelType?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tour-packages_select".
 */
export interface TourPackagesSelect<T extends boolean = true> {
  name?: T;
  slug?: T;
  image_url?: T;
  itinerary?:
    | T
    | {
        day?: T;
        tour_name?: T;
        description?: T;
        id?: T;
      };
  price?: T;
  package_description?: T;
  included?:
    | T
    | {
        item?: T;
        id?: T;
      };
  excluded?:
    | T
    | {
        item?: T;
        id?: T;
      };
  destination?:
    | T
    | {
        destination_name?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "why-us_select".
 */
export interface WhyUsSelect<T extends boolean = true> {
  heading?:
    | T
    | {
        title?: T;
        description?: T;
      };
  items?:
    | T
    | {
        title?: T;
        description?: T;
        icon?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "our-client_select".
 */
export interface OurClientSelect<T extends boolean = true> {
  heading?:
    | T
    | {
        title?: T;
        description?: T;
      };
  logos?:
    | T
    | {
        logo?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "social_select".
 */
export interface SocialSelect<T extends boolean = true> {
  heading?:
    | T
    | {
        title?: T;
        description?: T;
      };
  items?:
    | T
    | {
        title?: T;
        description?: T;
        url?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faq_select".
 */
export interface FaqSelect<T extends boolean = true> {
  heading?:
    | T
    | {
        title?: T;
        description?: T;
      };
  items?:
    | T
    | {
        question?: T;
        answer?: T;
        order?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}