import React from "react";
import { useMatch, useParams } from "react-router-dom";

function BlogContent({ topics }) {

  const result = useMatch();
  const { topicId } = useParams();
  console.log(topicId);

  const topicContent = topics.find((t) => t.id === Number(topicId));
  console.log(topicContent);
  return   (

    <div>


        <h2>
          {topicContent.topicName}
        </h2>

        <p>{topicContent.description}</p>

        {topicContent.content.map((item, id) => (
          <div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
            </div>

        ))}

     
    </div>

  )
 
}

export default BlogContent;
