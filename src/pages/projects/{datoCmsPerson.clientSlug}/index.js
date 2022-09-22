import React from 'react'
import { graphql } from 'gatsby'

export default function Index ({data: {person}}){
 return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.clientSlug}</p>
        <p>{person.link}</p>
          <p>{person.id}</p>
    </div>
  )
}

export const pageQuery = graphql`
  query ClientBySlug($clientSlug: String!) {
    person: datoCmsPerson(clientSlug: {eq: $clientSlug}){
      id
      link
      name
      clientSlug
    }
  }
`
