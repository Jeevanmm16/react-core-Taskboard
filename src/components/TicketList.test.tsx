import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TicketList from './TicketList';

// Mock the TicketCard component since we only want to test TicketList's behavior
vi.mock('./TicketCard', () => ({
  default: ({ ticket }: any) => <div data-testid="ticket-card">{ticket.title}</div>
}));

describe('TicketList Integration', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('shows loading state while fetch is pending', async () => {
    // Mock fetch that doesn't resolve immediately
    globalThis.fetch = vi.fn(() => new Promise(() => {})) as any;

    render(<TicketList searchTerm="" selectedPriority="All" />);
    
    expect(screen.getByText('Loading tickets...')).toBeInTheDocument();
  });

  it('shows tickets after successful fetch', async () => {
    // Mock successful response
    const mockTickets = [
      { id: 1, title: 'Payment Failed', category: 'Payment', priority: 'High' }
    ];

    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockTickets)
    });

    render(<TicketList searchTerm="" selectedPriority="All" />);

    // Initially loading
    expect(screen.getByText('Loading tickets...')).toBeInTheDocument();

    // Wait for the fetch to resolve and the UI to update
    await waitFor(() => {
      expect(screen.queryByText('Loading tickets...')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Payment Failed')).toBeInTheDocument();
    expect(screen.getByTestId('ticket-card')).toBeInTheDocument();
  });
});
