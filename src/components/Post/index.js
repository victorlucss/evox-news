import React from 'react'

import { List } from './styles.js';

export default function Post(props) {
  return (
    <List>
      <ul>
        <img src={props.urlToImage} alt="img" />
        <div className="content">
          <h1>{props.title}</h1>
          <small>{props.author}</small>
        </div>
        <span>{props.publishedAt}</span>
      </ul>
    </List>
  )
}
