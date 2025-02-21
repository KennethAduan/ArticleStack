import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ArticlePreview from '../src/components/article-preview/ArticlePreview';
import {Article} from '../src/models/Article';

describe('ArticlePreview', () => {
  const mockArticle: Article = {
    id: '1',
    title: 'Test Article Title',
    summary: 'This is a test article summary that should be displayed',
    imageUrl: 'https://test.com/image.jpg',
    webUrl: 'https://test.com/article',
  };

  const defaultProps = {
    article: mockArticle,
    onReadMore: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with article details', () => {
    const {getByText} = render(<ArticlePreview {...defaultProps} />);

    expect(getByText(mockArticle.title)).toBeTruthy();
    expect(getByText(mockArticle.summary)).toBeTruthy();
    expect(getByText('Read More')).toBeTruthy();
  });

  it('renders the article image correctly', () => {
    const {getByRole} = render(<ArticlePreview {...defaultProps} />);
    const image = getByRole('image');

    expect(image.props.source.uri).toBe(mockArticle.imageUrl);
    expect(image.props.resizeMode).toBe('cover');
  });

  it('calls onReadMore when Read More button is pressed', () => {
    const mockOnReadMore = jest.fn();
    const {getByText} = render(
      <ArticlePreview {...defaultProps} onReadMore={mockOnReadMore} />,
    );

    fireEvent.press(getByText('Read More'));
    expect(mockOnReadMore).toHaveBeenCalledTimes(1);
  });

  it('limits summary to 5 lines', () => {
    const {getByText} = render(<ArticlePreview {...defaultProps} />);
    const summary = getByText(mockArticle.summary);

    expect(summary.props.numberOfLines).toBe(5);
  });

  it('renders ScrollView as container', () => {
    const {getByTestId} = render(<ArticlePreview {...defaultProps} />);
    expect(getByTestId('article-preview-scroll')).toBeTruthy();
  });
});
