import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className="thread-input" noValidate>
      <input
        placeholder="Judul"
        value={title}
        onChange={onTitleChange}
        type="text"
      />
      <input
        placeholder="Kategori"
        value={category}
        onChange={onCategoryChange}
        type="text"
      />
      <textarea
        placeholder="Masukkan Pendapat Kamu"
        value={body}
        onChange={onBodyChange}
      />
      <button
        onClick={() => addThread({ title, body, category })}
        type="submit"
        className="btn-add-thread"
      >
        KIRIM
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
