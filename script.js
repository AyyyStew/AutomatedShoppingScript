// ==UserScript==
// @name         Defcon Group Add to cart
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        [website]
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @run-at      document-idle
// ==/UserScript==

//drop time 0900 PST April 2nd
//          1100 CST April 2nd


const drop_time = new Date('April 2, 2022 10:59:30');
// urls removed for privacy's sake 
const homepage = ''
const checkout_url = ''

const shoe_identifier = 'sk8-hi'
const shoe_size = '10.5'


window.addEventListener('load', function () {
	// get current url
	const url = window.location.href;

	// if we are at the homepage
	if (url === homepage) {
		// get a all elements with the class container
		// based on previous versions of the website each product is inside a container with exactly one link
		const products = Array.from(document.querySelectorAll('.container'))

		// get the first link in each container
		const product_links = products.map(e => e.querySelector('a'))

		// go through each of the product links
		for (let link of product_links) {
			// search for the one that includes the shoe identifier
			if (link.href.includes(shoe_identifier)) {
				// click the link
				link.click()
			}
		}

	} else if (url.includes(shoe_identifier)) {
		// if we are on the product page
		// find all of the shoe size divs
		document.querySelectorAll('.dot').forEach(e => {
			// figure out what sizes they represnet
			let size = e.getAttribute('data-variant-option-value')
			if (size == shoe_size) {
				// if the size equals the shoe size click this option
				e.click()

				// once we have selected our size, add it to our cart
				const addToCart = document.querySelector('[data-add-to-cart]')
				addToCart.click()
				console.log('we made it here!')
				window.location.href = checkout_url
			}
		})

	} else {
		const now = new Date()
		if (now > drop_time) {
			setTimeout(() => window.location.reload(), 3000)
		} else {
			const eta = drop_time - now
			console.log(`ETA (ms): ${eta}`)
			setTimeout(() => window.location.reload(), eta)
		}
	}

}, false);
