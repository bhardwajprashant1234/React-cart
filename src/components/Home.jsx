import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1c2dfd0c-cd48-46c4-829a-4b5d93f27f83/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png";
const img3 =
  "https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Max-Mobile-Phone-493177810-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3MTU4NHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaGZlLzk4OTA3NDU3NDU0MzguanBnfDRlMzlkODRlZWEwYjE1ZGYwNWMyZTNhYjZmOWJjZDdhYmRlODliMWI4ZTNkNmQ2ODRhMDQ1YTMxYTNlNjY1YWQ"; 

  const img4 =
  "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mix-canvas-leather-bomber-ready-to-wear--HOL76EXS0414_PM2_Front%20view.png?wid=1080&hei=1080";
  
  const img5 =
  "https://content.rolex.com/v7/dam/2023/upright-c/m126500ln-0002.png?impolicy=v7&imwidth=640";  
  const img6 =
  "https://m.media-amazon.com/images/I/71b1RZUVqUS._SY355_.jpg"; 

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 1999,
      imgSrc: img1,
      id: "asdhajsdbhjabwhsjdfdfv",
    },
    {
      name: " Jordan Air 1",
      price: 15000,
      imgSrc: img2,
      id: "sdjfdlaajsdbhja2zxcbhsjdfdfv",
    },
    {
      name: "iPhone", // New product
      price: 1500, // New product price
      imgSrc: img3, // New product image URL
      id: "sdfkljajsdbhja45bhqqsjdfdfv", // New product ID
    },
    {
      name: "LV Jacket", // New product
      price: 5999, // New product price
      imgSrc: img4, // New product image URL
      id: "sdfkljajsdbhjab33nmsjdfdfv", // New product ID
    },
    {
      name: " Rolex Watch", // New product
      price: 55999, // New product price
      imgSrc: img5, // New product image URL
      id: "sdfkljajsdbhghj99abhsjdfdfv", // New product ID
    },
    {
      name: "Perfume", // New product
      price: 599, // New product price
      imgSrc: img6, // New product image URL
      id: "sdfkljajsddfbhja676bhsjdfdfv", // New product ID
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
