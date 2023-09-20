export const LOCALHOST_GEO_DATA = {
  city: "San Francisco",
  region: "CA",
  country: "US",
  latitude: "37.7695",
  longitude: "-122.385",
};
export const LOCALHOST_IP = "63.141.57.109";

export const FAVICON_FOLDER = "/_static/favicons";

export const GOOGLE_FAVICON_URL =
  "https://www.google.com/s2/favicons?sz=64&domain_url=";

export const HOME_DOMAIN =
process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
  ? "https://dub.co"
  : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
  ? // ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    "https://dub.co"
  : "http://home.localhost:8888";

export const APP_HOSTNAMES = new Set([
  "app.dub.co",
  "preview.dub.co",
  "localhost:8888",
  "localhost",
]);

export const POPULAR_ARTICLES = [
  "what-is-dub",
  "what-is-a-project",
  "how-to-add-custom-domain",
  "how-to-use-tags",
  "how-to-invite-teammates",
  "pro-plan",
];
