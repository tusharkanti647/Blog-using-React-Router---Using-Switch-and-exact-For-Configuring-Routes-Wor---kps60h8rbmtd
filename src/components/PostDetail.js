import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail({ match }) {
  const { id } = useParams();
  // Complete the function
  return (
    <h1>Post Detail: {id}</h1>
  )
}
