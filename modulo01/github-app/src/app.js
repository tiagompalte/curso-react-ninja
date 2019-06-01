'use strict';

import React, {Component} from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {

  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  getGitHubApiUrl(username, type) {
    const usernameValid = username ? '/' + username : '';
    const typeValid = type ? '/' + type : '';
    return `https://api.github.com/users${usernameValid}${typeValid}`;
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({ isFetching: true });
      ajax().get(this.getGitHubApiUrl(value)).then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          repos: [],
          starred: []
        })
      })
      .always(() => this.setState({ isFetching: false }))
    }
  }

  handleReposStarred(type) {
    return (e) => {
      if (this.state.userinfo) {
        ajax().get(this.getGitHubApiUrl(this.state.userinfo.login, type)).then((result) => {
          this.setState({
            [type]: result.map(r => (
              {
                name: r.name,
                link: r.html_url
              }
            ))
          })
        })
      }
    }
  }

  render() {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      handleRepos={this.handleReposStarred('repos')}
      handleStarred={this.handleReposStarred('starred')}
    />
  }
}

export default App
