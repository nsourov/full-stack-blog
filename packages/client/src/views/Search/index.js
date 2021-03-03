import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getSearchPost } from '../../api';
import Pagination from '../../components/Pagination';
import BlogLanding from '../../containers/BlogLanding';

const Search = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchString = useSelector((store) => store.search);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await getSearchPost(searchString, page);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchString, page]);

  return (
    <main className='posts-listing'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12 mb-3'>
            <p>
              Search Result for: <strong>{searchString}</strong>
            </p>
          </div>
          <BlogLanding data={data} loading={loading} />
          {!loading && data.count > 10 && (
            <div className='col-md-12'>
              <Pagination
                activePage={page}
                countPerPage={10}
                count={data.count}
                onChange={(pageNumber) => setPage(pageNumber)}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Search;
