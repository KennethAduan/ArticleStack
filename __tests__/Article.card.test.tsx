import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ArticleCard from '../src/components/article-card/ArticleCard';
import {Article} from '../src/models/Article';

// Mock the GradientCard component
jest.mock('../src/components/GradientCard', () => {
  return function MockGradientCard({children, gradientStyle, style}: any) {
    return (
      <div data-testid="gradient-card" style={{...gradientStyle, ...style}}>
        {children}
      </div>
    );
  };
});

describe('ArticleCard', () => {
  const mockArticle: Article = {
    id: '1',
    title: 'Test Article',
    summary: 'Test content',
    imageUrl: 'https://test.com',
    webUrl: 'https://test.com',
  };

  const defaultProps = {
    article: mockArticle,
    isSelected: false,
    onSelect: jest.fn(),
    index: 0,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with article title', () => {
    const {getByText} = render(<ArticleCard {...defaultProps} />);
    expect(getByText('Test Article')).toBeTruthy();
  });

  it('shows arrow when selected', () => {
    const {getByText} = render(
      <ArticleCard {...defaultProps} isSelected={true} />,
    );
    expect(getByText('→')).toBeTruthy();
  });

  it('does not show arrow when not selected', () => {
    const {queryByText} = render(
      <ArticleCard {...defaultProps} isSelected={false} />,
    );
    expect(queryByText('→')).toBeNull();
  });

  it('calls onSelect with article when pressed', () => {
    const mockOnSelect = jest.fn();
    const {getByText} = render(
      <ArticleCard {...defaultProps} onSelect={mockOnSelect} />,
    );

    fireEvent.press(getByText('Test Article'));
    expect(mockOnSelect).toHaveBeenCalledWith(mockArticle);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
  });
});
