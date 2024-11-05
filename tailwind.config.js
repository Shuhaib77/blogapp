const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner-bg':"url('https://static-cse.canva.com/blob/563934/00_01verzosa_feat_contrib_MatthewGibson.jpg')",
        'post1-bg':"url('https://c4.wallpaperflare.com/wallpaper/995/429/152/elephant-animals-african-nature-wallpaper-preview.jpg')",
        'post2-bg':"url('https://wallpapers.com/images/featured/wildlife-pictures-laq4c3n11hg9jjcd.jpg')",
      }
    },
  },
  plugins: [],
});