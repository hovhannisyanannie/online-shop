import React from 'react';
import { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import SortProduct from '../../components/sortProduct/SortProduct';
import Loading from "../../components/Loading/Loading";
import { Image } from 'antd';
import "./home.css"


const Home = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [sortItem, setSortItem]=useState("default");
    

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);

            const response = await fetch ("https://product-json-six.vercel.app/products");
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
        }
        getProducts();

    }, []);

    const filterProduct = (category) => {
        const updatedList = data.filter((item) => item.category === category);
        setFilter(updatedList);
    }

    const filterBrand = (brand) => {
        const updatedList = data.filter((item) => item.brand === brand);
        setFilter(updatedList);
    }

    switch(sortItem) {  
        case "ascending":
            setSortItem(filter.sort((a, b) => a.title.localeCompare(b.title)))
            break
        case "descending":
            setSortItem(filter.sort((a, b) => b.title.localeCompare(a.title)))
            break
        case "high":
            setSortItem(filter.sort((a, b) => b.price - a.price))
            break
        case "low":
            setSortItem(filter.sort((a, b) => a.price - b.price))
            break
            default:
            break
    }

    const ShowProducts = () => {
        return (
            <>
            <div className="filter-sort">
            
                <div className="buttons">  
                    <p className='filter-category'>Filter by Category</p>
                    <button className='btn' type='submit' onClick={() => setFilter(data)}>All</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("women's parfume")}>Women's Fragrance</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("Fragrances for Men")}>Men's fragrance</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("Women's watches")}>Women's watches</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("Men's watches")}>Men's watches</button>
                </div>

                <div className="brands">
                    <p className='filter-brand'>Filter by Brands</p>
                    <button className='btn' type='submit' onClick={() => filterBrand("Chanel")}>Chanel</button>
                    <button className='btn' type='submit' onClick={() => filterBrand("Rolex")}>Rolex</button>
                    <button className='btn' type='submit' onClick={() => filterBrand("ARMANI")}>Armani</button>
                    <button className='btn' type='submit' onClick={() => filterBrand("Tudor")}>Tudor</button>
                    <button className='btn' type='submit' onClick={() => filterBrand("Dolce&Gabbana")}>Dolce&Gabbana</button>
                    <button className='btn' type='submit' onClick={() => filterBrand("Versace")}>Versace</button>
                    <button className='btn' type='submit' onClick={() => filterBrand("U-Boat")}>U-Boat</button>
                </div>

                <div className="sort">
                   <SortProduct 
                   sortItem={sortItem}
                   setSortItem={setSortItem}
                   />
                </div>
            </div>

                <div className="cards">
                        {filter.map((product) => {
                            return(
                                <>
                                    <div className="card" key={product.id} >
                                        <div className="image">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <div className="content">
                                            <h3 className="title">{product.title}</h3>
                                            <div className="price">
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`/products/${product.id}`} className='buyNow'><i className="uael-qv-icon fa fa-eye"> </i>Quick view</Link>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                </div>   
            </>
        )
    }

  return (
    <div className='home'>
        <div className="container">
            <div className="inner">
                <div className="content">
                <p>Lora online shop is a leading fashion retailer in watches, jewelry, and parfume.Amy shop believes that everyone should be able to wear what they love, and do so at the right price</p>
                <HashLink smooth
                  to="#product-section"
                  className="button"
                >
                  Learn more
                </HashLink>
                </div>
                <video
                    src={require("../../components/video/fragrance.mp4")}
                    muted
                    autoPlay={"autoplay"}
                    loop 
                > </video>
            </div>

            <div className="container">
                <div id="product-section">  
                <div className="productsRow">
                    <div className="box">
                        {loading ? <Loading/> : <ShowProducts/>}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
























