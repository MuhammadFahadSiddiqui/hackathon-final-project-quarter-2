/** @type {import('next').NextConfig} */
const nextConfig = {
   images : {
    domains: ['cdn.sanity.io'],
   } //add this line to allow image from Sanity CDM
};

export default nextConfig;
