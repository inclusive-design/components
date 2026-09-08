import { Elena } from '@elenajs/core';

/**
 * @displayName Card
 * @status alpha
 *
 * @event click - Programmatically fire click on the component.
 * @event focus - Programmatically move focus to the component.
 * @event blur - Programmatically remove focus from the component.
 * @cssprop [--incd-card-outline-width] - Overrides the default outline width for the card's focus ring.
 * @cssprop [--incd-card-outline-style] - Overrides the default outline style for the card's focus ring.
 * @cssprop [--incd-card-outline-offset] - Overrides the default outline offset for the card's focus ring.
 * @cssprop [--incd-card-outline-color] - Overrides the default outline color for the card's focus ring.
 */
export default class Card extends Elena(HTMLElement) {
	static tagName = 'incd-card';
	static events = ['click', 'focus', 'blur'];
	static props = [
		'variant',
	];
	/**
	 * The card variant, used as a styling hook.
	 * @property
	 * @type {string}
	 */
	variant = '';
}

Card.define();
