import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '.';

test('Check suspense and lazy loading component', async () => {
    // Render the component
    const { getByText } = render(<Home />);

    const loadingText = getByText(/Component is loading, please wait/)
    expect(loadingText).toBeInTheDocument()

    // Render components after lazyloading
    const firtsText = await waitFor(() => getByText(/accusamus beatae ad facilis cum similique qui sunt/))
    expect(firtsText).toBeInTheDocument()
});