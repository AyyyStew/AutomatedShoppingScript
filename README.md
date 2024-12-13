# Automated Shopping Script Project Overview
I developed an automated shopping script using Tampermonkey, JavaScript, web scraping techniques, and browser events to purchase items from a Shopify storefront. The goal was to assist a client who wanted to secure specific items for himself and his girlfriend without getting beaten by scalping bots. The client approached me two days before the item release, and I took it on as a fun and challenging project.

After conducting research to ensure the solution was legal, we began analyzing Shopify's shopping flow to identify the key steps to automate. The process was broken down into the following components:

1. Automatically refreshing the storefront page.
2. Detecting item availability and selecting the desired options (e.g., size).
3. Adding the item to the cart and navigating to checkout.
4. Filling out payment details and completing the transaction.
5. Ensuring the script safely exited after purchase to prevent accidental multiple orders.

We developed and tested scripts for each step individually, iterating on them until they could run sequentially as part of a complete flow. On release day, the script successfully purchased the desired items faster than the scalping bots, which wiped out the storefront within minutes. The client and his girlfriend were thrilled with the results, and I was proud of the project’s success under tight deadlines.


## Future Enhancements

Based on this experience, I plan to improve the script with the following features:

- A graphical user interface (GUI) similar to the Web Scraper Chrome extension, enabling point-and-click automation for easier use.
- Compatibility with non-Shopify storefronts.
- Multi-account functionality to support simultaneous purchases with different credentials.

## Technical Insights

- The script utilized Tampermonkey to inject JavaScript directly into the browser, automating tasks such as navigation, item selection, and form filling.
- Web scraping techniques were employed to identify and interact with key elements on the storefront pages.
- The script accounted for timing by leveraging setTimeout to refresh pages and synchronize with release times.

This project demonstrated my ability to quickly analyze and reverse-engineer user flows, implement efficient automation solutions, and deliver results under tight deadlines.
