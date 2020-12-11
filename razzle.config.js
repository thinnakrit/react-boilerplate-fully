'use strict'

module.exports = {
	plugins: ['css', 'scss', 'svg-react-component'],
	modifyWebpackConfig(opts) {
		const config = opts.webpackConfig

		// Change the name of the server output file in production
		if (opts.env.target === 'web') {
			// modify filenaming to account for multiple entry files
			config.output.filename = opts.env.dev
				? 'static/js/v1-[name].js'
				: 'static/js/v1-[name].[hash:8].js'

			// add another entry point called vendor
			config.entry.vendor = [
				require.resolve('react'),
				require.resolve('react-dom'),
				require.resolve('shards-react'),
				require.resolve('react-lottie'),
				require.resolve(
					'@fortawesome/free-solid-svg-icons'
				),
				require.resolve(
					'@fortawesome/fontawesome-svg-core'
				),
				require.resolve('@fortawesome/react-fontawesome'),
				require.resolve('react-icons'),
				require.resolve('styled-components'),
				require.resolve('react-id-swiper'),
				require.resolve('swiper'),
				// ... add any other vendor packages with require.resolve('xxx')
			]

			config.optimization = {
				splitChunks: {
					// Chunk splitting optimiztion
					chunks: 'all',
					maxSize: 500000,
					// Switch off name generation, otherwise files would be invalidated
					// when more chunks with the same vendors are added
					name: false,
				},
			}
		}

		return config
	},
}
