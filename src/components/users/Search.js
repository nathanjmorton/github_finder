import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');
  const { searchUsers } = githubContext;
  const { setAlert } = alertContext;

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('must provide text', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <input
          type='button'
          value='Clear'
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        />
      )}
    </div>
  );
};

export default Search;
