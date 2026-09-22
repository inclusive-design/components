import {
	Elena,
	nothing,
	html,
	unsafeHTML,
	HTMLResult,
} from '@elenajs/core';

/**
 * A web component which groups events based on whether they happen in the future or the past.
 *
 * @displayName Events
 * @status alpha
 */
export default class Events extends Elena(HTMLElement) {
	static tagName = 'incd-events';
	static props = [
		{ name: 'variant', reflect: false },
		{ name: 'past', reflect: false },
		{ name: 'upcoming', reflect: false },
		{ name: 'containerClass', reflect: false },
		{ name: 'groupClass', reflect: false },
		{ name: 'groupHeadingLevel', reflect: false },
		{ name: 'eventHeadingLevel', reflect: false },
		{ name: 'order', reflect: false },
	];
	/**
	 * The label for the past events container.
	 * @property
		* @type {"default" | "list" | "accordion"}
	 */
	variant = 'default';
	/**
	 * The label for the past events container.
	 * @property
	 * @type {string}
	 */
	past = 'Past Events';
	/**
	 * The label for the upcoming events container.
	 * @property
	 * @type {string}
	 */
	upcoming = 'Upcoming Events';
	/**
	 * The classes to be applied to the overall container.
	 * @property
	 * @type {string}
	 */
	containerClass = 'flow';
	/**
	 * The classes to be applied to the grouped event containers.
	 * @property
	 * @type {string}
	 */
	groupClass = 'grid-auto';
	/**
	 * The desired heading level for upcoming and past event containers.
	 * @property
	 * @type {number}
	 */
	groupHeadingLevel = 2;
	/**
	 * The heading level of event titles prior to hydration.
	 * @property
	 * @type {number}
	 */
	eventHeadingLevel = 2;

	/**
	 * Render the HTML.
	 * @internal
	 * @returns {HTMLResult} - The rendered HTML.
	 */
	render() {
		const now = new Date();
		let events = this.querySelectorAll('[data-start]');
		const upcomingEvents = [];
		const pastEvents = [];

		events = [...events].toSorted((a, b) => {
			a = new Date(a.dataset.start);
			b = new Date(b.dataset.start);
			return b - a;
		});

		for (const event of events) {
			const eventHeading = event.querySelector(`h${this.eventHeadingLevel}`);
			eventHeading.setAttribute('aria-level', this.groupHeadingLevel + 1);

			if (new Date(event.dataset.start) < now) {
				pastEvents.push(event);
			} else {
				upcomingEvents.push(event);
			}
		}

		if (this.variant === 'list') {
			return html`
				<ul class="${this.containerClass}">
					${upcomingEvents.length > 0
						? html`
							<li>
								<h${this.groupHeadingLevel}>${this.upcoming}</h${this.groupHeadingLevel}>
								<ul class="${this.groupClass}">
									${upcomingEvents.map((event) => html`<li>${unsafeHTML(event.outerHTML)}</li>`)}
								</ul>
							</li>
						`
						: nothing}
					${pastEvents.length > 0
						? html`
							<li>
								<h${this.groupHeadingLevel}>${this.past}</h${this.groupHeadingLevel}>
								<ul class="${this.groupClass}">
									${pastEvents.map((event) => html`<li>${unsafeHTML(event.outerHTML)}</li>`)}
								</ul>
							</li>
						`
						: nothing}
				</div>
			`;
		}

		if (this.variant === 'accordion') {
			const name = 'incd-events';
			return html`
				<div class="${this.containerClass}">
					${upcomingEvents.length > 0
						? html`
							<details name="${name}">
								<summary><h${this.groupHeadingLevel}>${this.upcoming}</h${this.groupHeadingLevel}></summary>
								<div class="${this.groupClass}">
									${upcomingEvents.map((event) => html`<li>${unsafeHTML(event.outerHTML)}</li>`)}
								</div>
							</details>
						`
						: nothing}
					${pastEvents.length > 0
						? html`
							<details name="${name}">
								<summary><h${this.groupHeadingLevel}>${this.past}</h${this.groupHeadingLevel}></summary>
								<div class="${this.groupClass}">
									${pastEvents.map((event) => html`<li>${unsafeHTML(event.outerHTML)}</li>`)}
								</div>
							</details>
						`
						: nothing}
				</div>
			`;
		}

		return html`
			<div class="${this.containerClass}">
				${upcomingEvents.length > 0
					? html`
						<h${this.groupHeadingLevel}>${this.upcoming}</h${this.groupHeadingLevel}>
						<div class="${this.groupClass}">
							${upcomingEvents.map((event) => unsafeHTML(event.outerHTML))}
						</div>
					`
					: nothing}
				${pastEvents.length > 0
					? html`
						<h${this.groupHeadingLevel}>${this.past}</h${this.groupHeadingLevel}>
						<div class="${this.groupClass}">
						  ${pastEvents.map((event) => unsafeHTML(event.outerHTML))}
						</div>
					`
					: nothing}
			</div>
		`;
	}
}

Events.define();
