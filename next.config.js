module.exports = {
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    THIRDWEB_API_KEY: process.env.THIRDWEB_API_KEY,
    COVALENT_API_KEY: process.env.COVALENT_API_KEY,
    AWS_RECEIPIENT_EMAIL: process.env.AWS_RECEIPIENT_EMAIL,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
  },
};
