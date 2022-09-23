import React from 'react';
import { Link } from 'gatsby';

export default function DetailField({category, content, link}) {

  function linkContent(url){
    if (url) {
      return (
        <Link to={url}>{content}</Link>
      )}

      return content
  }

  return (
    <p>
      { category ? (<b>{category}: </b>) : "" }
      {linkContent(link)}
    </p>
  )
}
