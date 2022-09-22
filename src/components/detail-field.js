import React from 'react';
import { Link } from 'gatsby';

export default function DetailField({category, content, link}) {

  function linkContent(link){
    if (link) {
      return (
        <Link to={link}>{content}</Link>
      )}

      return content
  }

  return (
    <p>
      { category ? (<b>{category}: </b>) : "" }
      <Link to={link}>{content}</Link>
    </p>
  )
}
