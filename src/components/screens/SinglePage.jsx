import React, { useEffect, useState } from 'react';
import Header from '../includes/Header';
import Footer from '../includes/Footer';
import SimilarProducts from './SimilarProducts';
import ProductDescription from './ProductDescription';
import ProductDetails from './ProductDetails';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SinglePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
          const productId = Number(id);
        const product = response.data.productdetails.find(
          (item) => item.id === productId
        );
        setData(product)
     
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error);
      });
  }, []); // Add 'id' as a dependency

  if (!data) {
    return <div>Loading...</div>; // Show a loading message or spinner while data is being fetched
  }

  return (
    <>
      <Header />
      <ProductDetails data={data} />
      <ProductDescription data={data} /> {/* Pass data to ProductDescription if needed */}
      <SimilarProducts category={data.category} /> {/* Pass data category to SimilarProducts if needed */}
      <Footer />
    </>
  );
}

export default SinglePage;
