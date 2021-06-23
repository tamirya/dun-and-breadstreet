import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PaginationList from "react-pagination-list";

const Results = () => {
  const data = useSelector((state) => state.search.data);
  const query = useSelector((state) => state.search.query);
  const [queryCounter, setQueryCounter] = useState(0);
  const [list, setList] = useState([]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    const results = [];
    const searchWords = [query, capitalizeFirstLetter(query)];
    let occurrencesCounter = 0;

    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      const txtArr = element.text.split(" ");
      const words = [];

      for (let j = 0; j < txtArr.length; j++) {
        const word = txtArr[j].replace(/^(?:")(.*)(?:")$/, "$1");
        if (searchWords.includes(word)) {
          occurrencesCounter++;
          words.push(`<mark>${txtArr[j]}</mark>`);
        } else {
          words.push(txtArr[j]);
        }
      }

      results.push({
        text: words.join(" "),
        url: element.url,
      });
    }
    setList(results);
    setQueryCounter(occurrencesCounter);
  }, [data]);

  return (
    <div className="container mt-3">
      {list.length > 0 && (
        <>
          <h4>
            {`Occurrences of The Word: "${query}"`}: {queryCounter}
          </h4>
          <ul className="list-group">
            <PaginationList
              data={list}
              pageSize={20}
              renderItem={(item, key) => (
                <li key={key} className="list-group-item">
                  <a href={item.url} target="_blank">
                    {/* <Highlighter textToHighlight={item.text} /> */}
                    <div dangerouslySetInnerHTML={{ __html: item.text }} />
                  </a>
                </li>
              )}
            ></PaginationList>
          </ul>
        </>
      )}
    </div>
  );
};

export default Results;
