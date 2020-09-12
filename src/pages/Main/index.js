/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
//import { BsSearch } from 'react-icons/bs';
import api from '../../services/api';
import { CircularProgress } from '@material-ui/core';
import List from '../../components/Post';

import { Container, Header, Input } from './styles';
import Logo from '../../assets/logo.svg';

export default function Main() {
  const [articles, setArticles] = useState([]);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true);
        const response = await api.get('');
        setArticles(response.data.articles);
        setLoading(false);
      } catch {
        alert("error");
      }
    }
    loadArticles();
  }, []);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="evox news" />
      </Header>
      <Input>
        <input
          type="text"
          placeholder="search post"
          defaultValue={value}
          onChange={e => setValue(e.target.value)}
        />
      </Input>
      {loading ? (
        <h2><CircularProgress /></h2>
      ) : (
          <div>
            {articles
              .filter(article => {
                if (article.title.includes(value) || article.author.includes(value)) {
                  return true;
                }
              })
              .map((article) => (
                <List
                  urlToImage={article.urlToImage}
                  title={article.title}
                  author={article.author}
                  publishedAt={article.publishedAt}
                />
              ))
            }
          </div>
        )}
    </Container>
  )
}
