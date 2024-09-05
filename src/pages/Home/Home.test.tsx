import { render, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '.';

afterEach(cleanup)

test('Check suspense and lazy loading component', async () => {
    // Render the component
    const { getByText } = render(<Home />);

    const loadingText = getByText(/Component is loading, please wait/)

    expect(loadingText).toBeInTheDocument()

    const firtsText = await waitFor(() => getByText(/accusamus beatae ad facilis cum similique qui sunt/))
    expect(firtsText).toBeInTheDocument()
});