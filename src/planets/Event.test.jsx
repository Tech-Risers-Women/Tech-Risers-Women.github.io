import '@testing-library/jest-dom/vitest';
import { describe, it, vi, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Events from './Events';

// avoid IntersectionObserver error
vi.mock('../moons/Banner', () => ({
	default: () => <div data-testid="banner" />
}));

afterEach(() => {
	vi.restoreAllMocks();
});

describe('Events page', () => {
	it('loads and then shows the heading', async () => {
		global.fetch = vi
			.fn()
			.mockResolvedValue({ ok: true, json: async () => [] });

		render(<Events />);

		expect(screen.getByText(/loading events/i)).toBeInTheDocument();
		await screen.findByRole('heading', { name: /upcoming events/i });
	});

	it('shows an error if fetch fails', async () => {
		global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });

		render(<Events />);

		expect(await screen.findByRole('alert')).toHaveTextContent(
			/could not load events/i
		);
	});
});
