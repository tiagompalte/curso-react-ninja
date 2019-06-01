'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, isFetching, handleSearch, handleRepos, handleStarred }) => (
  <div className='app'>

    <Search isDisabled={isFetching} handleSearch={handleSearch} />

    {isFetching && <div>Carregando...</div>}

    {!!userinfo && <UserInfo userinfo={userinfo} />}

    {!!userinfo && <Actions handleRepos={handleRepos} handleStarred={handleStarred} />}

    {!!repos.length &&
      <Repos className='repos' title='Repositórios' repos={repos} />
    }

    {!!starred.length &&
      <Repos className='starred' title='Favoritos' repos={starred} />
    }

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleRepos: PropTypes.func.isRequired,
  handleStarred: PropTypes.func.isRequired,
}

export default AppContent
