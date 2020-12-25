import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if(text === '') {
      setAlert('must provide text', 'light');
    }
    else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            name="text"
            placeholder="Search users..."
            value={text}
            onChange={onChange}
            />
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
          </form>
          {githubContext.users.length > 0 && <input type="button" value="Clear" className="btn btn-light btn-block" onClick={githubContext.clearUsers}/> }
      </div>
    )
  
}

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
}

export default Search
