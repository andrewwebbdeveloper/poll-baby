import adapter from '@sveltejs/adapter-netlify';

export default {
  kit: {
    adapter: adapter({ edge: true })
  }
};

// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter({ edge: true })
// 	}
// };

// export default config;