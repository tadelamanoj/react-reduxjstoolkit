
// ArrayComponent.test.jsx

import { render } from "@testing-library/react";
import ArrayComponent from "../ArrayComp";

describe('ArrayComponent', () => {
    test('renders list items correctly', () => {
      const { getByText } = render(<ArrayComponent />);
  
      // Check if each item in the array is rendered
      expect(getByText('1')).toBeInTheDocument();
      expect(getByText('2')).toBeInTheDocument();
      expect(getByText('3')).toBeInTheDocument();
      expect(getByText('4')).toBeInTheDocument();
      expect(getByText('5')).toBeInTheDocument();
      expect(getByText('6')).toBeInTheDocument();
    });
  
    test('renders correct number of list items', () => {
      const { getAllByRole } = render(<ArrayComponent />);
  
      // Check if the correct number of list items is rendered
      const listItems = getAllByRole('listitem');
      expect(listItems).toHaveLength(6);
    });
  
    test('renders list with correct structure', () => {
      const { getByRole } = render(<ArrayComponent />);
  
      // Check if the list is rendered with correct structure
      const list = getByRole('list');
      expect(list).toBeInTheDocument();
      expect(list.childNodes).toHaveLength(6); // Check if there are 6 list items
    });
  
    test('renders list with correct heading', () => {
      const { getByText } = render(<ArrayComponent />);
  
      // Check if the heading is rendered correctly
      const heading = getByText('Items:');
      expect(heading).toBeInTheDocument();
    });
  });
  
  