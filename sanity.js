import { create } from "domain";
import {
    createImageUrlBuilder,
    createCurrentUserHook,
    clearClient,
    createClient
} from "next-sanity";  

export const config = {
   dataset : process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
   projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   apiVersion: '2021-08-31',
   
   useCdn: process.env.NODE_ENV === "production",
};

//const client = new SanityClient({
  //projectId: 'mdc43goc',
 // dataset: 'production',
 // useCdn: true
//})
export const sanityClient = createClient(config);const SanityClient = require('@sanity/client')
  

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);