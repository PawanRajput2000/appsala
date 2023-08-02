import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./Review.css"

function Review({ initialReview, onChange }) {
  const [richText, setRichText] = useState(initialReview);

  const handleTextChange = (content) => {
    setRichText(content);
    onChange(content); // Pass the updated review content to the parent component
  };

  const TextEditor = {
    modules: {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean'],
      ],
      clipboard: {
        matchVisual: false,
      },
    },
    formats: [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image',
    ],
  };

  return (
    <div>
      <h1>Write Your Review</h1>
      <ReactQuill
        value={richText}
        onChange={handleTextChange}
        placeholder="Enter your review here..."
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        style={{ height: '300px' }}
      />
    </div>
  );
}

export default Review;
